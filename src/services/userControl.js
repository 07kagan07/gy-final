export const register=async (user)=>{
    const {email,password}=user;

    if(await isUserExist(email)){
        throw new Error('User already exist')
    }
    
    const response=await fetch(`${import.meta.env.VITE_API_URL}/users`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password,role:'user',id:self.crypto.randomUUID()})})
    return await response.json()
}
export const login=async (user)=>{
    const response=await fetch(`${import.meta.env.VITE_API_URL}/users`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({user})})
    return await response.json()
}

const isUserExist=async (email)=>{
    const response=await fetch(`${import.meta.env.VITE_API_URL}/users?email=${email}`)
    const users=await response.json()
    return users.length>0
}