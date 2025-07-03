import React from "react";
import { Box, Image } from "@chakra-ui/react";
import contactImg from "../images/contact.png";

const Contact = () => {
  return (
    <Box w="100%" h="100vh" overflow="hidden">
      <Image
        src={contactImg}
        alt="Contact Background"
        objectFit="cover"
        w="100%"
        h="100%"
      />
    </Box>
  );
};

export default Contact;
