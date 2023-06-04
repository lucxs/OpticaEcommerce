import { useContext, useState } from "react";
import { useNumberInput, HStack, Button, Input } from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";
import Swal from "sweetalert2";

const ItemCount = ({ id, name, description, price, img }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 6,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const { cart, setCart, isExistId } = useContext(CartContext);

  // value del quantity por defecto 1
  const [quantity, setQuantity] = useState(1);

  //Evento del botón para tomar quantity
  const HandleClickNext = (e) => {
    let inputValue = e.target.nextSibling.defaultValue;

    setQuantity(inputValue);
  };

  const HandleClickPrevius = (e) => {
    let inputValue = e.target.previousSibling.defaultValue;

    setQuantity(inputValue);
  };

  const addTocart = () => {
    //Control de duplicados
    const isExistId = cart.some((dat) => dat.id === id);
    {
      cart.length >= 1 && isExistId
        ? Swal.fire({
            position: "center",
            icon: "error",
            title: "Este producto ya se encuentra en el carrito",
            showConfirmButton: false,
            timer: 1500,
          })
        : setCart(
            cart.concat({
              id: id,
              name: name,
              description: description,
              price: price,
              quantity: quantity,
              img: img,
            })
          );
    }
  };

  return (
    <HStack maxW="320px">
      <Button variant="solid" colorScheme="blue" onClick={addTocart}>
        buy
      </Button>
      <Button {...inc} onClick={HandleClickNext}>
        +
      </Button>
      <Input {...input} />
      <Button {...dec} onClick={HandleClickPrevius}>
        -
      </Button>
    </HStack>
  );
};

export default ItemCount;
