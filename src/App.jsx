import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Route from "./routes/Route";

function App() {
  return (
    <>
      <Header />
      <main className="container mt-5">
        <Route />
      </main>
      <Footer />
    </>
  );
}

export default App;
