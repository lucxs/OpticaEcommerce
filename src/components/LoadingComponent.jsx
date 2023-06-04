import React from "react";
import { SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react";

//Loading del los items del catalogo con Skeleton
const LoadingComponent = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
};

export default LoadingComponent;
