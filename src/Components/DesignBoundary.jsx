import React, { useState } from "react";
import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import starwithline from "../images/starwithline.png";
import { keyframes } from "@emotion/react";

const DesignBoundary = () => {
  const hashtagList = [
    "#Branding",
    "#Packaging",
    "#Uiux",
    "#Motiongraphics",
    "#Ads",
    "#Illustration",
    "#Logodesign",
    "#Animation",
    "#Branding",
    "#Packaging",
    "#Uiux",
    "#Motiongraphics",
    "#Ads",
    "#Illustration",
    "#Logodesign",
    "#Animation",
  ];

  const scrollRightToLeft = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }  // ← original (Right to Left)
`;

const scrollLeftToRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }    // ← Reverse (Left to Right)
`;
  return (
    <Box px={8} textAlign="center" mt={6} mb={6}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Text
          fontSize={"16px"}
          fontWeight="semibold"
          color="#ADADAD"
          textTransform="uppercase"
          lineHeight="15px"
        >
          Design beyond boundaries
        </Text>
        <Image
          w={"22%"}
          lineHeight={0}
          pl={10}
          src={starwithline}
          alt="starwithline"
        />

        <Box
          bgGradient="linear-gradient(90deg,rgba(164, 26, 30, 1) 0%, rgba(31, 0, 104, 1) 50%)"
          bgClip="text"
          fontSize="30px"
          fontWeight={"semibold"}
          maxW="700px"
          mb={10}
        >
          We help you solve complex problems through human-centered,{" "}
          <Box as="text" fontWeight={"bold"}>
            creative design solutions
          </Box>
        </Box>
      </Box>
      {/* Auto-scrolling Carousel */}
      <Box overflow="hidden" whiteSpace="nowrap" w="100%" position="relative" mt={6}>
        <Flex display="inline-flex" animation={`${scrollRightToLeft} 18s linear infinite`}>
          {[...hashtagList, ...hashtagList].map((tag, index) => (
            <Box
              key={index}
              bgGradient="linear(90deg, rgba(1, 46, 62, 1) 0%, rgba(255, 255, 255, 1) 13%, rgba(1, 46, 62, 1) 100%)"
              p="1px"
              borderRadius="full"
              mx={2}
            >
              <Box
                px={6}
                py={2}
                border={"thin"}
                borderRadius="full"
                bg="linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(247, 249, 252, 1) 0%)"
                color="#012E3E"
                fontWeight="bold"
                fontSize="14px"
                _hover={{ bg: "#F1F1F1" }}
              >
                {tag}
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box overflow="hidden" whiteSpace="nowrap" w="100%" position="relative" mt={12} mb={2}>
        <Flex display="inline-flex" animation={`${scrollLeftToRight} 18s linear infinite`}>
          {[...hashtagList, ...hashtagList].map((tag, index) => (
            <Box
              key={index}
              bgGradient="linear(90deg, rgba(1, 46, 62, 1) 0%, rgba(255, 255, 255, 1) 13%, rgba(1, 46, 62, 1) 100%)"
              p="1px"
              borderRadius="full"
              mx={2}
              boxShadow="md"
            >
              <Box
                px={6}
                py={2}
                border={"thin"}
                borderRadius="full"
                bg="linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(247, 249, 252, 1) 0%)"
                color="#012E3E"
                fontWeight="bold"
                fontSize="14px"
                _hover={{ bg: "#F1F1F1" }}
              >
                {tag}
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default DesignBoundary;
