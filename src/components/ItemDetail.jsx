import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import {
  Stack,
  Heading,
  Divider,
  Image,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
const ItemDetail = ({ data }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 800);
  }, []);

  return (
    <>
      {loading == false ? (
        <LoadingSpinner />
      ) : (
        <Card maxW="sm" className="EditCardProd">
          <CardBody>
            <Image
              src={data.img}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{data.name}</Heading>
              <Text>{data.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                <span>$</span>
                {data.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <ItemCount
                id={data.id}
                name={data.name}
                description={data.description}
                price={data.price}
                img={data.img}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default ItemDetail;
