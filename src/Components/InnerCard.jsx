import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const InnerCard = ({ data }) => {
  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="center"
      textAlign="center"
      px={5}
      py={2}
      gap={3}
    >
      <Box
        borderRadius="full"
        w="50px"
        h="60px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={data.src} alt="icon" boxSize="40px" />
      </Box>
      <Box
        display="flex"
        flexDir="column"
        alignItems="left"
        textAlign="justify"
      >
        <Text fontSize="30px" fontWeight="bold" color="#001929">
          {data.banner1}
        </Text>
        <Text fontSize="10px" color="#001929" 
        fontWeight="semibold" whiteSpace="nowrap">
          {data.banner2}
        </Text>
      </Box>
    </Box>
  );
};

export default InnerCard;
