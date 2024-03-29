import { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({});
  const [productoExiste, setProductoExiste] = useState(false);
  const { id } = useParams();

  useEffect(() => {

    const productoRef = doc(db, "products", id);
    getDoc(productoRef) .then((respuesta) => {
        const productoDb = { id: respuesta.id, ...respuesta.data() };

        if (!respuesta.exists()) {
          setProductoExiste(true)
        }
        setProducto(productoDb);
      });
  }, [id]);

  return (

    <section>
      {
        productoExiste ? (
          <h2>Producto no existe</h2>
        ) : (

          <ItemDetail producto={producto} />
        )
      }
    </section>
  );
};
export default ItemDetailContainer;