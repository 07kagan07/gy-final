import { getAllProducts } from "./requests";

export const getBasketItems = async (id) => {
  const products = await getAllProducts();
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/basket?userId=${id}`
  );
  const basket = await response.json();
  const basketItems = basket[0]?.prod?.map((item) => {
    const productMatch = products?.find(
      (product) => product.id === item.productId
    );
    return {
      product: productMatch,
      quantity: item.quantity,
    };
  });
  return basketItems;
};

export const addItemToBasket = async (userId, newProduct) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/basket?userId=${userId}`
  );
  const basket = await response.json();

  const existingProduct = basket[0].prod.find(
    (item) => item.productId === newProduct.productId
  );

  if (existingProduct) {
    existingProduct.quantity += newProduct.quantity;
  } else {
    basket[0].prod.push(newProduct);
  }

  const updateResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/basket/${basket[0].id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(basket[0]),
    }
  );

  const updatedBasket = await updateResponse.json();
  return updatedBasket;
};

export const removeItemFromBasket = async (userId, productId) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/basket?userId=${userId}`
  );
  const basket = await response.json();

  const updatedBasket = basket[0].prod.filter(
    (item) => item.productId !== productId
  );

  const updateResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/basket/${basket[0].id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prod: updatedBasket }),
    }
  );

  return await updateResponse.json();
};

export const updateItemQuantity = async (userId, productId, quantity) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/basket?userId=${userId}`
  );
  const basket = await response.json();

  const updatedBasket = basket[0].prod.map((item) => {
    if (item.productId === productId) {
      return {
        ...item,
        quantity: quantity,
      };
    } else {
      return item;
    }
  });

  const updateResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/basket/${basket[0].id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prod: updatedBasket }),
    }
  );

  const updatedBasketResponse = await updateResponse.json();
  return updatedBasketResponse;
}

export const deleteById = async (userId, productId) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/basket?userId=${userId}`
    );
    const basket = await response.json();
  
    const updatedBasket = basket[0].prod.filter(item => item.productId !== productId);
  
    const updateResponse = await fetch(
      `${import.meta.env.VITE_API_URL}/basket/${basket[0].id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prod: updatedBasket }),
      }
    );
  
    return await updateResponse.json();
  };
  

export const clearBasket = async (userId) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/basket?userId=${userId}`
  );
  const basket = await response.json();

  const updateResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/basket/${basket[0].id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prod: [] }),
    }
  );

  const updatedBasketResponse = await updateResponse.json();
  return updatedBasketResponse;
};

export const createBasket = async (userId) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/basket`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId, prod: [] }),
  });

  return await response.json();
};


