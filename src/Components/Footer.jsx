import {
    Box,
    Grid,
    GridItem,
    Text,
    Link,
    VStack,
    Flex,
    Icon,
    Image,
  } from '@chakra-ui/react';
import footer2 from '../images/footer2.png'
  
  const Footer = () => {
    return (
      <Box  w={'100%'} bg="#F7F9FC" color="#1A202C" fontSize="sm" pt={10} >
        <Grid
          templateColumns={['1fr', 'repeat(6, 1fr)']}
          gap={6}
          maxW="1150px"
          mx="auto"
        >
          {/* DIGITAL MARKETING */}
          <GridItem>
            <Text fontWeight="bold" mb={1}>
              DIGITAL MARKETING
            </Text>
            <Box h="2px" bg="gray.400" w="15%" mb={2} />
            <VStack align="start" spacing={1}>
              {[
                'SEO',
                'Social Media Marketing',
                'Design Thinking',
                'Video Production',
                'ORM',
                'Content Marketing',
                'Influencer Marketing',
              ].map((item) => (
                <Link key={item}>{item}</Link>
              ))}
            </VStack>
          </GridItem>
  
          {/* PAID ADVERTISING */}
          <GridItem>
            <Text fontWeight="bold" mb={1}>
              PAID ADVERTISING
            </Text>
            <Box h="2px" bg="gray.400" w="15%" mb={2} />
            <VStack align="start" spacing={1}>
              <Link>Social Media Ads</Link>
              <Link>Google Ads</Link>
            </VStack>
          </GridItem>
  
          {/* MARKETING TECHNOLOGIES */}
          <GridItem>
            <Text fontWeight="bold" mb={1}>
              MARKETING TECHNOLOGIES
            </Text>
            <Box h="2px" bg="gray.400" w="15%" mb={2} />
            <VStack align="start" spacing={1}>
              {[
                'Web Development',
                'Mobile App',
                'Website Maintenance',
                'Hosting Support',
              ].map((item) => (
                <Link key={item}>{item}</Link>
              ))}
            </VStack>
          </GridItem>
  
          {/* CONSULTING */}
          <GridItem>
            <Text fontWeight="bold" mb={1}>
              CONSULTING
            </Text>
            <Box h="2px" bg="gray.400" w="15%" mb={2} />
            <VStack align="start" spacing={1}>
              {[
                'Marketing Consulting',
                'Lead Generation',
                'SEO Outsourcing',
                'PPC Outsourcing',
              ].map((item) => (
                <Link key={item}>{item}</Link>
              ))}
            </VStack>
          </GridItem>
  
          {/* QUICK LINKS */}
          <GridItem>
            <Text fontWeight="bold" mb={1}>
              QUICK LINKS
            </Text>
            <Box h="2px" bg="gray.400" w="15%" mb={2} />
            <VStack align="start" spacing={1}>
              {[
                'About Us',
                'Our Team',
                'Testimonial',
                'Contact Us',
                'Careers',
                'Privacy Policy',
                'Achievements',
              ].map((item) => (
                <Link key={item}>{item}</Link>
              ))}
            </VStack>
          </GridItem>
  
          {/* RESOURCES */}
          <GridItem>
            <Text fontWeight="bold" mb={1}>
              RESOURCES
            </Text>
            <Box h="2px" bg="gray.400" w="15%" mb={2} />
            <VStack align="start" spacing={1}>
              {[
                'Case Studies',
                'Design Portfolio',
                'Blog',
                'Resources',
                'Tools',
                'Clientele',
              ].map((item) => (
                <Link key={item}>{item}</Link>
              ))}
            </VStack>
          </GridItem>
        </Grid>
  
        <Flex w={'100%'} justify="center" align="center" mt={10}>
          <Image
            src={footer2}
            alt="Google Partner"
            w={'100%'}
            height="100%"
            objectFit='fill'
          />
        </Flex>
      </Box>
    );
  };
  
  export default Footer;
  