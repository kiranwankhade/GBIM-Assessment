import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import starwithline from "../images/starwithline.png";
import frame from "../images/flowEmptyFrame.png"

import React from "react";

const CreativeProcess = () => {
    
const steps = [
    {
      level: 'Level 1',
      title: 'Research',
      desc: 'Until iron is hot with the research, our design head specialists never command the designers to hit.',
      top: '40%',
      left: '6%',
    },
    {
      level: 'Level 2',
      title: 'Idea',
      desc: 'Ideation is a very necessary step to optimize the process. An idea must be well-versed with the research.',
      top: '60%',
      left: '21.5%',
    },
    {
      level: 'Level 3',
      title: 'Strategy',
      desc: 'Strategic planning is a crucial step to deliver the projects on time. Never underestimate the strategy maker!',
      top: '28%',
      left: '35%',
    },
    {
      level: 'Level 4',
      title: 'Process',
      desc: 'Processing the project with detailed research, ideas, and pre-planning is always a cherry on the cake.',
      top: '60%',
      left: '49.5%',
    },
    {
      level: 'Level 5',
      title: 'Time',
      desc: 'We value your time. Playing with client’s deadlines is not our core. Timely delivery is our first priority.',
      top: '40%',
      left: '64%',
    },
    {
      level: 'Level 6',
      title: 'Goal',
      desc: 'Our goal-oriented vision always gives us fruitful results. Connect with us to achieve your design goals.',
      top: '60%',
      left: '80%',
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
        <Text fontSize={"16px"} fontWeight="semibold" color="#ADADAD"  textTransform="uppercase"
          lineHeight="15px">
        Our Creative Process
        </Text>
        <Image w={"18%"} pl={7} src={starwithline} alt="starwithline" />

        <Box
          bgGradient="linear-gradient(90deg,rgba(164, 26, 30, 1) 0%, rgba(31, 0, 104, 1) 60%)"
          bgClip="text"
          fontSize="30px"
          fontWeight={"semibold"}
          maxW="750px"
          mb={10}
        >
            Our creative process blends curiosity, collaboration, and innovation {" "}
          <Box as="text" fontWeight={"bold"}>
          to bring bold ideas to life.
          </Box>
        </Box>
      </Box>

      <Box  position="relative" w="100%" mx="auto" overflow="hidden">
    
      <Image src={frame} w="95%"
       margin='auto' mr={0}alt="Design Flow Frame" />

      {/* Overlays */}
      {steps.map((step, i) => (
        <Box
          key={i}
          position="absolute"
          top={step.top}
          left={step.left}
          width={['140px', '140px']}
          textAlign="center"
        //   px={2}
        >
          <Text fontWeight="bold" fontSize="15px" color={i % 2 === 0 ? 'red.600' : 'blue.900'}>
            {step.title}
          </Text>
          <Text fontSize="9px" color="gray.600">
            {step.desc}
          </Text>
        </Box>
      ))}
    </Box>
    </Box>
  );
};

export default CreativeProcess;
