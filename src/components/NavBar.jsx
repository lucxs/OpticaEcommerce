import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Menu, MenuButton, MenuList, MenuItem, Wrap } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, WrapItem } from "@chakra-ui/react";
import image from "../assets/img/imgAvatar.jpg";

const NavBar = () => {
  return (
    <div className="menuContainer">
      <Flex
        minWidth="-webkit-fill-available"
        alignItems="center"
        gap="2"
        justifyContent="center"
        border="1px"
        borderColor="gray.200"
        className="menu"
        borderBottomRadius="5"
      >
        <Wrap className="avatar">
          <WrapItem>
            <Avatar size="xl" name="Christian Nwamba" src={image} />{" "}
          </WrapItem>
        </Wrap>

        <Link to="/">
          <Heading as="h2" size="xl" noOfLines={1}>
            MIRAGE
          </Heading>
        </Link>

        <Spacer />
        <Menu>
          <ButtonGroup gap="2">
            <Link to="/marca">
              <Button colorScheme="gray">Catalogo</Button>
            </Link>

            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Marcas
            </MenuButton>
            <MenuList>
              <Link to={`/marca/${"versace"}`}>
                <MenuItem>Versace</MenuItem>
              </Link>
              <Link to={`/marca/${"prada"}`}>
                <MenuItem>Prada</MenuItem>
              </Link>
              <Link to={`/marca/${"gucci"}`}>
                <MenuItem>Gucci</MenuItem>
              </Link>
              <Link to={`/marca/${"ray-ban"}`}>
                <MenuItem>Ray-ban</MenuItem>
              </Link>
              <Link to={`/marca/${"tous"}`}>
                <MenuItem>Tous</MenuItem>
              </Link>
            </MenuList>
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </ButtonGroup>
        </Menu>
      </Flex>
    </div>
  );
};

export default NavBar;
