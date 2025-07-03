import React from "react";
import {
  Box,
  Text,
  Button,
  Image,
  Flex,
  HStack,
  VStack,
  Icon,
} from "@chakra-ui/react";
import starwithline from "../images/starwithline.png";
// import { FaBullhorn, FaPrint, FaGlobe, FaMobileAlt } from "react-icons/fa";

import icon1 from "../icons/socialmedia.png";
import icon2 from "../icons/publicrelation.png";
import icon3 from "../icons/logodesign.png";
import icon4 from "../icons/graphicdesign.png";
import icon5 from "../icons/smartphone.png";
import { keyframes } from "@emotion/react";

import scroll1 from "../images/Rectangle 17252.png"
import scroll2 from "../images/Rectangle 17251.png"
import scroll3 from "../images/Rectangle 17250.png"
import scroll4 from "../images/Rectangle 17249.png"
import scroll5 from "../images/Rectangle 17248.png"
import scroll6 from "../images/Rectangle 17247.png"
import scroll7 from "../images/Rectangle 17246.png"
import scroll8 from "../images/Rectangle 17245.png"
import scroll9 from "../images/Rectangle 17244.png"
import scroll10 from "../images/Rectangle 17243.png"

const FeaturedWork = () => {
  const categories = [
    { label: "Digital Creatives", icon: icon1 },
    { label: "Branding", icon: icon2 },
    { label: "Print Design", icon: icon3 },
    { label: "Website Design", icon: icon4 },
    { label: "App Design", icon: icon5 },
  ];

  const sampleImages = [
    scroll1,
    scroll2,
    scroll3,
    scroll4,
    scroll5,
    scroll6,
    scroll7,
    scroll8,
    scroll9,
    scroll10
  ];
  const scrollKeyframe = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;

const VerticalCarousel = ({ images, duration = 20 }) => {
    const scrollAnimation = `${scrollKeyframe} ${duration}s linear infinite`;
  
    return (
      <Box w="100%" h="480px" overflow="hidden" position="relative">
        <VStack
          spacing={4}
          animation={scrollAnimation}
          minH="600px" // enough height to scroll through
        >
          {[...images, ...images].map((img, idx) => (
            <Box
              key={idx}
              w="100%"
              h="100%"
              bg="white"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
            >
              <Image src={img} w="100%" h="100%" objectFit="cover" />
            </Box>
          ))}
        </VStack>
      </Box>
    );
  };
  

  return (
    <Box px={8} textAlign="center" mt={20}>
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
          our featured work
        </Text>
        <Image w={"18%"} pl={9} src={starwithline} alt="starwithline" />

        <Box
          bgGradient="linear-gradient(90deg,rgba(164, 26, 30, 1) 0%, rgba(31, 0, 104, 1) 60%)"
          bgClip="text"
          fontSize="30px"
          fontWeight={"semibold"}
          maxW="550px"
          mb={10}
        >
          A showcase of strategies that turned vision into{" "}
          <Box as="text" fontWeight={"bold"}>
            measurable success.
          </Box>
        </Box>
      </Box>
      <Flex h={'480px'}>
        {/* Left Fixed Sidebar */}
        <Box
          w="400px"
          bg="white"
          p={6}
          borderRight="1px solid #ddd"
          boxShadow="md"
        >
          <VStack align="start" spacing={5}>
            {categories.map((item, idx) => (
              <Flex align="center" gap={3} key={idx}>
                <Box
                  bg={
                    item.label === "Digital Creatives" ? "#A41A1E" : "#A41A1E26"
                  }
                  borderRadius="full"
                  p={3}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    w="16px"
                    h="16px"
                    filter={
                      item.label === "Digital Creatives"
                        ? "brightness(0) invert(1)"
                        : "none"
                    }
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  justifyContent={"flex-start"}
                >
                  <Text
                    textTransform="uppercase"
                    fontWeight={
                      item.label === "Digital Creatives" ? "bold" : "semibold"
                    }
                    color={
                      item.label === "Digital Creatives"
                        ? "#012E3E"
                        : "#012E3EB2"
                    }
                  >
                    {item.label}
                  </Text>
                  {item.label === "Digital Creatives" ? (
                    <Box
                      h="3px"
                      bgGradient="linear-gradient(90deg,rgba(164, 26, 30, 1) 0%, rgba(1, 46, 62, 1) 100%)"
                      w="100%"
                      mb={2}
                      mt={1}
                    />
                  ) : (
                    <></>
                  )}
                </Box>
              </Flex>
            ))}
          </VStack>
        </Box>

        <Box
     bg="#0B1E3D"
     borderRadius="3xl"
     p={6}
     overflow="hidden"
     h="480px" // match layout
     w="full"
     css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none",  // IE and Edge
        "scrollbar-width": "none",     // Firefox
      }}
    >
      <Flex direction="row" gap={8}>
        {/* 1st box - 3 images */}
        <VerticalCarousel images={sampleImages.slice(0, 3)} duration={12} />

        {/* 2nd box - 4 images */}
        <VerticalCarousel images={sampleImages.slice(3, 7)} duration={15} />

        {/* 3rd box - 4 images */}
        <VerticalCarousel images={sampleImages.slice(4, 8)} duration={18} />
      </Flex>
    </Box>
      </Flex>
    </Box>
  );
};

export default FeaturedWork;
