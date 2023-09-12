import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [closed, setClosed] = useState(false);
  function closeHandler() {
    setClosed(!closed);
  }
  return (
    <CartProvider>
      {closed && <Cart closeHandler={closeHandler} />}
      <Header closeHandler={closeHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
