import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

import "./Carrito.css";

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, totalPrecio } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <main className="carrito-vacio">
        <h1> Tu carrito esta vacio 💔</h1>
        <Link className="button" to="/">
          Volver al inicio
        </Link>
      </main>
    );
  }

  return (
    <section className="carrito">
      <ul className="lista">
        {carrito.map((producto) => (
          <li className="producto" key={producto.id}>
            <img
              className="imagen"
              src={producto.imagen}
              alt={producto.nombre}
            />
            <p className="texto nombre">{producto.nombre}</p>
            <p className="texto">Cantidad: {producto.cantidad}</p>
            <p className="texto">Precio: ${producto.precio}</p>
            <FaTrashAlt
              className="borrar"
              onClick={() => borrarProducto(producto.id)}
              size={25}
            />
          </li>
        ))}
      </ul>
      <h3 className="textoPagar">Total a pagar: ${totalPrecio()}</h3>
      <div className="borrar-todo" onClick={borrarCarrito}>
        <p>Vaciar carrito</p>
        <FaTrashAlt size={25} />
      </div>
      <Link to="/checkout">
          Continuar mi compra
      </Link>
    </section>
  );
};
export default Carrito;