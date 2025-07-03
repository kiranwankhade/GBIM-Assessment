import React from "react";
import { Box, Text, Button, Stack, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

import float1 from "../images/banner2-light.png";
import float2 from "../images/colors.png";
import float3 from "../images/pen.png";
import float4 from "../images/airplane.png";
import float5 from "../images/brain.png";
import float6 from "../images/message.png";

import banner2 from "../images/banner2.png";

import startBadge from "../images/banner2-starbadge.png";
import banner2Light from "../images/banner2-light.png"
import banner2Announce from "../images/banner2-announce.png"
import banner2Message from "../images/banner2-message.png"
import banner2Profile from "../images/banner2-profile.png"
import InnerCard from "./InnerCard";

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0); }
`;

const imageIcons = [
  { src: float1, top: "38%", left: "16%", boxSize: "50px", duration: "3s" },
  { src: float2, top: "45%", left: "83%", boxSize: "70px", duration: "4s" },
  { src: float3, top: "60%", left: "18%", boxSize: "80px", duration: "5s" },
  { src: float4, top: "70%", left: "80%", boxSize: "70px", duration: "6s" },
  { src: float5, top: "55%", left: "75%", boxSize: "70px", duration: "4.5s" },
  { src: float6, top: "60%", left: "31%", boxSize: "80px", duration: "3.5s" },
];

const cardDetails = [
  {
    src: startBadge,
    banner1: "20+",
    banner2: "Years of Design Innovation",
  },
  {
    src: banner2Announce,
    banner1: "50+",
    banner2: "Brands Launched from Scratch",
  },
  {
    src: banner2Light,
    banner1: "30+",
    banner2: "Industries Designed For",
  },
  {
    src: banner2Message,
    banner1: "100+",
    banner2: "Digital Interfaces Crafted",
  },
  {
    src: banner2Profile,
    banner1: "200+",
    banner2: "Clients Collaborated With",
  },
];

const ViewSection = () => {
  return (
    <Box
      position="relative"
      bgImage={`url(${banner2})`}
      bgSize="cover"
      bgPosition="center"
      w="100%"
      h="630px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      color="white"
      textAlign="center"
    >
      <Box
        position="absolute"
        top="155px"
        left="50%"
        transform="translateX(-50%)"
        textAlign="center"
      >
        <Text
          color={"#012E3E"}
          fontSize="4xl"
          fontWeight="bold"
          maxW="700px"
          mb={6}
        >
          Strategic{" "}
          <Box
            as="span"
            bgGradient="linear-gradient(90deg,rgba(164, 26, 30, 1) 0%, rgba(31, 0, 104, 1) 88%)"
            bgClip="text"
          >
            Design Thinking
          </Box>{" "}
          for Smarter Digital Solutions
        </Text>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify="center"
        >
          <Button
            bgColor="#012E3E"
            color={"white"}
            borderRadius={20}
            variant="solid"
          >
            Get Services
          </Button>
          <Box
            bgGradient="linear-gradient(90deg,rgba(252, 252, 255, 1) 0%, rgba(1, 46, 62, 1) 60%, rgba(0, 0, 0, 1) 14%)"
            p="1px"
            borderRadius="full"
            display="inline-block"
          >
            <Button
              borderRadius="full"
              // px="6"
              // py="1.5"
            >
              Learn more
            </Button>
          </Box>
        </Stack>
      </Box>

      {/* Animated icons */}
      {imageIcons.map((icon, index) => (
        <Box
          key={index}
          position="absolute"
          top={icon.top}
          left={icon.left}
          transform="translate(-50%, -50%)"
          zIndex={2}
          textAlign="center"
        >
          {/* Floating icon */}
          <Image
            src={icon.src}
            alt={`icon-${index}`}
            boxSize={icon.boxSize}
            mt={-14}
            animation={`${float} ${icon.duration} ease-in-out infinite`}
          />
        </Box>
      ))}

      <Box
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      
        py={6}
        px={3}
        position="absolute"
        top="580px"
        left="50%"
        transform="translateX(-50%)"
        zIndex={5}
        gap={3}
        flexWrap={{ base: "wrap", md: "nowrap" }}
        mb={10}
      >
        {cardDetails.map((card, index) => (
          <React.Fragment key={index}>
            <InnerCard data={card} />
            {index !== cardDetails.length - 1 && (
              <Box
                h="60px"
                w="1px"
                bg="#E0E0E0"
                display={{ base: "none", md: "block" }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default ViewSection;
