import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const oneProd = doc(db, "Lentes", `${id}`);
    getDoc(oneProd).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ ...snapshot.data(), id: snapshot.id });
      }
    });
  }, []);

  return (
    <div className="itemDcont">
      <ItemDetail data={product} />
    </div>
  );
};

export default ItemDetailContainer;
