import React, { useState } from "react";
import {
  Box,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";

import starwithline from "../images/starwithline.png";

import offer2Img1 from "../images/offer2Img1.png";

import offer2Img2 from "../images/offer2Img2.png";

import offer2Img3 from "../images/offer2Img3.png";

const offers = [
  {
    title: "Marketing Creatives",
    image: offer2Img1,
  },
  {
    title: "Branding",
    image: offer2Img2,
  },
  {
    title: "UI/UX Designing",
    image: offer2Img3,
  },
];

const OfferSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const handleClick = (index) => {
    setPrevIndex(activeIndex);
    setActiveIndex(index);
  };

  return (
    <Box py={16} px={8} textAlign="center" mt={10}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Text fontSize={"16px"} fontWeight="semibold" color="#ADADAD" lineHeight="15px">
          WHAT WE OFFER
        </Text>
        <Image w={"16%"} pl={10} src={starwithline} alt="starwithline" />

        <Box
          bgGradient="linear-gradient(90deg,rgba(164, 26, 30, 1) 0%, rgba(31, 0, 104, 1) 60%)"
          bgClip="text"
          fontSize="30px"
          fontWeight={"semibold"}
          maxW="850px"
          mb={10}
        >
          Transforming Ideas into Visual Masterpieces,{" "}
          <Box as="text" fontWeight={"bold"}>
            Elevating Brands to New Heights
          </Box>{" "}
          with Innovative and Impactful Designs.
        </Box>
      </Box>

      <Flex
        justify="center"
        align="stretch"
        gap={4}
        flexWrap={{ base: "wrap", md: "nowrap" }}
        w="90%"
        mx="auto"
        transition="all 0.5s ease-in-out"
      >
        {offers.map((offer, index) => {
          const isActive = activeIndex === index;
          const isDirectionLeft = index > prevIndex; //because default true left to right

          return (
            <Box
              key={index}
              w={isActive ? "80%" : "15%"}
              h={isActive ? "15%" : "auto"}
              borderRadius="20px"
              overflow="hidden"
              boxShadow="lg"
              position="relative"
              cursor="pointer"
              onClick={() => handleClick(index)}
              transform={
                isActive
                  ? `translateX(${isDirectionLeft ? "0px" : "-1px"})`
                  : "translateX(0)"
              }
              transition="transform 0.5s ease-in-out"
              zIndex={isActive ? 2 : 1}
              sx={{
                transition: "transform 0.5s ease-in-out, flex 0.5s ease-in-out",
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="rgba(0, 0, 0, 0.5)"
            >
              {/* Image */}
              <Image
                src={offer.image}
                alt={offer.title}
                w="100%"
                h="100%"
                objectFit="cover"
                opacity={isActive ? 1 : 0.4}
                filter={isActive ? "none" : "blur(3px)"}
                transition="opacity 0.4s ease, filter 0.4s ease"
              />

              {/* Vertical Title for inactive */}

              <Text
                position="absolute"
                bottom={isActive ? "29%" : "10%"}
                left={isActive ? "28.75px" : "30%"}
                transform={isActive ? "none" : "rotate(-90deg)"}
                transformOrigin="left bottom"
                fontSize={isActive ? "22.7px" : "xl"}
                fontWeight="bold"
                color="white"
                whiteSpace="nowrap"
                textShadow="0 0 4px #000"
                zIndex={3}
                userSelect="none"
                transition="all 0.5s ease-in-out"
              >
                {offer.title}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default OfferSection;
