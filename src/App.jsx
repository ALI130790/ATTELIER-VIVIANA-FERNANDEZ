import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./componentes/Error/Error";
import { CartProvider } from "./context/CartContext";
import Carrito from "./componentes/Carrito/Carrito";
import Checkout from "./componentes/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Bienvenidas al lugar donde sus sueños se hacen realidad!!!

          En nuestro Atelier realizamos vestidos a medida para Novias, 15 años, Madrinas, Egresos, Invitadas, cortejo de niñas, y vestidos en general. 

          Consultanos por presupuestos y pruebas de vestidos.
          Te ofrecemos la mejor atencion." />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer saludo="Bienvenidas al lugar donde sus sueños se hacen realidad!!!

          En nuestro Atelier realizamos vestidos a medida para Novias, 15 años, Madrinas, Egresos, Invitadas, cortejo de niñas, y vestidos en general. 

          Consultanos por presupuestos y pruebas de vestidos.
          Te ofrecemos la mejor atencion." />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;