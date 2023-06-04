import React, { useEffect } from "react";
import Item from "./Item";
import LoadingComponent from "./LoadingComponent";
import { useState } from "react";
const ItemList = ({ data }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 900);
  }, []);

  return (
    <>
      {loading == false ? (
        <LoadingComponent />
      ) : (
        <div className="ItemCont">
          {data.map((dat) => (
            <Item
              key={dat.id}
              clave={dat.id}
              name={dat.name}
              img={dat.img}
              marca={dat.marca}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default React.memo(ItemList);
