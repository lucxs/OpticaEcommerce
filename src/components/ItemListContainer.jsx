import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const { marca } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore(); //la base de datos que viene de getFirestore
    const itemsCollection = collection(db, "Lentes"); // const itemcollection que trae la COLLECTION de la base de datos, llamada lentes. la coleccion que yo tengo en firebase
    getDocs(itemsCollection).then((snapshot) => {
      //luego accedo a getDocs pasandole itemsCollection
      const docs = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      }); // Y tengo promesa punto then que me trae cada uno de los elementos de esa collection
      
      setProducts(docs);
    });
  }, []);

  const productsFilter = products.filter((dat) => dat.marca === marca);

  return (
    <>
      <div className="itemLcont">{greeting}</div>
      <div>
        {marca ? (
          <ItemList data={productsFilter} />
        ) : (
          <ItemList data={products} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
