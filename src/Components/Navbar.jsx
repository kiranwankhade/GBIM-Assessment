import {
  Box,
  Flex,
  Image,
  Spacer,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  HStack,
  Container,
  Icon,
} from "@chakra-ui/react";
import { FaCaretDown, FaPhoneAlt } from "react-icons/fa";

import gbimLogo from "../icons/gbimlogo.png";

import React from "react";

const Navbar = ({ onCallClick }) => {
  return (
    <Box px={8} py={4} bgColor={'white'} boxShadow="md" position={'fixed'} zIndex={50}>
      <Container maxW="8xl">
        <Flex alignItems="center" justifyContent={"center"} gap={6}>
            <Image src={gbimLogo} w="15%" h="20%" alt="logo" />
          <HStack spacing={5}>
            <Text
              fontWeight="normal"
              color="red.600"
              display="flex"
              alignItems="center"
            >
              Digital Marketing <Icon as={FaCaretDown} ml={1} />
            </Text>

            <Text
             fontWeight="normal"
             display="flex"
             alignItems="center"
            >
              Marketing Technologies <Icon as={FaCaretDown} ml={1} />
            </Text>

            <Text>About Us</Text>
            <Text>Blog</Text>
            <Text>Careers</Text>
            <Text>Contact Us</Text>
            <Button
              leftIcon={
                <Box
                  as={FaPhoneAlt}
                  borderRadius="full"
                  border="1px solid white"
                  p={1.5}
                  mr={2}
                  boxSize={8}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                />
              }
              pl={2}
              pr={6}
              py={6}
              bg="red.700"
              color="white"
              fontSize={'xl'}
              borderRadius="full"
              _hover={{ bg: "red.700" }}
              onClick={onCallClick}
            >
              Schedule A Call
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
