import React from "react";
import {
  Box,
  Text,
  Button,
  Image,
  Flex,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import redBgImage from "../images/imageAi.png";

import ai1 from "../images/ai1.png";
import ai2 from "../images/ai2.png";
import ai3 from "../images/ai3.png";
import ai4 from "../images/ai4.png";
import ai5 from "../images/ai5.png";
import ai6 from "../images/ai6.png";
import ai7 from "../images/ai7.png";

const AIPowered = () => {
  const showcaseImages = [ai1, ai2, ai3, ai4, ai5, ai6, ai7];

   // Curve offsets: top margin
   const curveTopOffsets = [50, 30, 40, 50, 40, 30, 10];

   const curveBottomOffsets = [130, 160, 170, 180, 170, 160,130];

   // Height curve (reverse arch — outer images tallest)
   const heightCurve = [300, 260, 250, 260, 250, 260, 300];

  return (
    <Box
      bgImage={`url(${redBgImage})`}
      bgSize="cover"
      h={'680px'}
      bgPosition="center"
      py={10}
      color="white"
    >
      <VStack spacing={4} textAlign="center" maxW="4xl" mx="auto">
        <Text fontSize={{ base: "2xl", md: "4xl" }}>
          Discover the{" "}
          <Box as="span" fontWeight={"bold"}>
            AI-Powered
          </Box>{" "}
          Designs <br />
          We've Brought to Life
        </Text>
        <Text fontSize="15px" w={"300px"}>
          Showcasing real, creative designs crafted through cutting-edge AI
          tools.
        </Text>

        {/* Category Buttons */}
        <HStack spacing={4} pt={2}>
          <Button
            variant="outline"
            w={"40%"}
            fontSize={"12px"}
            borderColor="white"
            color="white"
            bg="whiteAlpha.200"
            backdropFilter="blur(8px)"
            borderRadius={"full"}
            _hover={{ bg: "whiteAlpha.200" }}
          >
            Graphic design
          </Button>
          <Button
            variant="outline"
            w={"40%"}
            fontSize={"12px"}
            borderColor="white"
            color="white"
            bg="whiteAlpha.200"
            borderRadius={"full"}
            _hover={{ bg: "whiteAlpha.200" }}
          >
            Motion graphics
          </Button>
          <Button
            variant="outline"
            w={"40%"}
            fontSize={"12px"}
            borderColor="white"
            color="white"
            bg="whiteAlpha.200"
            borderRadius={"full"}
            _hover={{ bg: "whiteAlpha.200" }}
          >
            Brand video
          </Button>
        </HStack>
      </VStack>

     
      {/* Curved Image Row */}
      <Flex
        mt={6}
        justify="center"
        align="flex-end"
        gap={2}
        wrap="nowrap"
        overflow="hidden"
      >
        {showcaseImages.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Box
              w="200px"
              h={`${heightCurve[idx]}px`}
              mt={`${curveTopOffsets[idx]}px`}
              mb={`${curveBottomOffsets[idx]}px`}
              borderRadius="20px"
              overflow="hidden"
              flexShrink={0}
              boxShadow="md"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)", zIndex: 10 }}
            >
              <Image
                src={imgSrc}
                alt={`Design ${idx + 1}`}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          </motion.div>
        ))}
      </Flex>
    </Box>
  );
};

export default AIPowered;
