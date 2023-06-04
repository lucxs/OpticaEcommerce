import React, { useEffect } from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const SendOrder = ({ cart, TOTAL }) => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTexArea] = useState("");
  //State para loadding
  const [load, setLoad] = useState(false);

  const db = getFirestore();

  //Eventos del form y logica del ID unico de compra
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);

    setTimeout(() => {
      setLoad(false);
    }, 1500);

    const order = {
      buyer: {
        Nombre: name || "",
        Email: email || "",
        Comentario: textArea || "",
      },
      Pago_Total: TOTAL || "",
      Items: cart.map((prods) => {
        return {
          Producto: prods.name || "",
          Descripcion: prods.description || "",
          Precio: prods.price || "",
        };
      }),
    };

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  //logica del ID unico de compra

  useEffect(() => {
    if (orderId != null) {
      setTimeout(() => {
        Swal.fire({
          title: "Gracias por tu compra " + `${name}` + "!",
          html:
            "Su id de orden es: " +
            `${orderId}` +
            " <br>Por favor mantenga este número para futuras referencias. <br>Nos comunicaremos con usted cuando su pedido haya sido enviado",
          imageUrl:
            "https://images.pexels.com/photos/14126674/pexels-photo-14126674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        }).then((result) => {
          if (result.isConfirmed) {
            location.replace("/marca");
          }
        });
      }, 1700);
    }
  }, [orderId]);

  const ordersCollection = collection(db, "orden");

  return (
    <>
      <div className="CartCont__formContainer">
        <form onSubmit={handleSubmit} className="CartCont__form">
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Escribinos</FormLabel>
            <Textarea onChange={(e) => setTexArea(e.target.value)} />
          </FormControl>

          {load == false ? (
            <Button
              type="submit"
              colorScheme="teal"
              size="md"
              className="CartCont__formBotton"
            >
              finalizar Compra
            </Button>
          ) : (
            <Button
              type="submit"
              colorScheme="teal"
              size="md"
              className="CartCont__formBotton"
            >
              <Spinner size="md" />
            </Button>
          )}
        </form>
      </div>
    </>
  );
};

export default SendOrder;
