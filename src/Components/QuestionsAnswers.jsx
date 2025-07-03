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
import { GoArrowDownRight , GoArrowUpRight  } from "react-icons/go";


const QuestionsAnswers = () => {
  const questions = [
    {
      q: "What is creative design thinking?",
      a: `Creative design thinking is an approach that combines analytical thinking and creative problem‑solving techniques to generate innovative solutions. It involves applying empathy, experimentation, and collaboration to understand the needs of users, redefine problems, and explore new possibilities.`,
      open: true,
    },
    {
      q: "How can creative design thinking benefit my design projects?",
      open: false,
    },
    {
      q: "What’s the difference between UI and UX design?",
      open: false,
    },
    {
      q: "Why does branding matter for startups?",
      open: false,
    },
    {
      q: "How long does it take to complete a design?",
      open: false,
    },
  ];
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
          FREQUENTLY ASKED QUESTIONS
        </Text>
        <Image w={"22%"} pl={6} src={starwithline} alt="starwithline" />

        <Box
          bgGradient="linear-gradient(90deg,rgba(164, 26, 30, 1) 0%, rgba(31, 0, 104, 1) 60%)"
          bgClip="text"
          fontSize="30px"
          fontWeight={"semibold"}
          maxW="550px"
          mb={10}
        >
          Got Questions?{" "}
          <Box as="text" fontWeight={"bold"}>
            We've Got Answers!
          </Box>
        </Box>

        <HStack w={"40%"} spacing={2} pt={2}>
          <Button
            variant="solid"
            w="100%"
            fontSize="12px"
            fontWeight="bold"
            borderRadius="full"
            border="1px solid #C4C4C4"
            bg="#A41A1E1A" // semi-transparent background color
            _hover={{ bg: "#A41A1E33" }} // darker on hover
          >
            <Box
              bgGradient="linear(to-r, #A41A1E, #1F0068)"
              bgClip="text"
              color="transparent"
            >
              Marketing Creatives
            </Box>
          </Button>
          <Button
            variant="outline"
            w={"100%"}
            fontSize={"12px"}
            fontWeight={"bold"}
            border="1px solid #C4C4C4"
            color="#8B8B8B"
            bg="#C4C4C4"
            borderRadius={"full"}
            _hover={{ bg: "#C4C4C4" }}
          >
            Branding
          </Button>
          <Button
            variant="outline"
            w={"100%"}
            fontWeight={"bold"}
            fontSize={"12px"}
            border="1px solid #C4C4C4"
            color="#8B8B8B"
            bg="#C4C4C4"
            borderRadius={"full"}
            _hover={{ bg: "whiteAlpha.200" }}
          >
            UI/UX Designing
          </Button>
        </HStack>
      </Box>

      <Box bg="#FAFAFA" py={12} px={{ base: 4, md: 16 }}>
        <VStack spacing={4} maxW="800px" mx="auto" align="stretch">
          {questions.map((item, idx) =>
            item.open ? (
              <Box
                key={idx}
                bg="#A41A1E"
                color="white"
                borderRadius="lg"
                p={6}
                boxShadow="sm"
              >
                <Flex justify="space-between" align="start">
                  <Text fontSize="lg" fontWeight="semibold" maxW="85%" >
                    {item.q}
                  </Text>
                  <Box
                    bg="white"
                    w="32px"
                    h="32px"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={GoArrowDownRight} color="#A41A1E" w={5} h={5} />
                  </Box>
                </Flex>
                <Text textAlign={'justify'} mt={4} fontSize="sm" lineHeight="1.6">
                  {item.a}
                </Text>
              </Box>
            ) : (
              // ——— Closed Item ———
              <Box
                key={idx}
                bg="#F3F3F3"
                color="#535353"
                borderRadius="lg"
                p={6}
                boxShadow="sm"
              >
                <Flex justify="space-between" align="center">
                  <Text fontSize="md" fontWeight="medium">
                    {item.q}
                  </Text>
                  <Box
                    bg="#A41A1E"
                    w="32px"
                    h="32px"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={GoArrowUpRight} color="white" w={5} h={5} />
                  </Box>
                </Flex>
              </Box>
            )
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default QuestionsAnswers;
