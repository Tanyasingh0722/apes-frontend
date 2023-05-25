import * as React from "react";
import {
  chakra,
  Stack,
  HStack,
  Text,
  Box,
  Flex,
  Link,
  Icon,
  useColorModeValue,
  Container,
  SimpleGrid,
  Card,
  VStack,
  Button,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./Home.css";
// Here we have used react-icons package for the icons
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { AiOutlineLike, AiOutlineEye } from "react-icons/ai";
// Here we have used react-icons package for the icons
import { FaGithub } from "react-icons/fa";
import { getallEventsAPI } from "./Service";
import { useNavigate } from "react-router-dom";
import trendingimg from "../assets/img/Saly-10.png";
import agendaimg from "../assets/img/Saly-12.png";
import { FaLaptopCode } from "react-icons/fa";

interface StatData {
  id: number;
  label: string;
  score: number;
  icon: any;
  percentage: string;
}

const statData: StatData[] = [
  {
    id: 1,
    label: "Total post reactions",
    score: 1730,
    icon: AiOutlineLike,
    percentage: "10%",
  },
];

const StatsWithIcons = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5} mt={6} mb={4}>
        {statData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

const Home = () => {
  const [events, setEvents] = React.useState([]);
  const navigate = useNavigate();
  const getEvents = async () => {
    const data = await getallEventsAPI();
    setEvents(data);
  };
  React.useEffect(() => {
    getEvents();
  }, []);

  return (
    // Home page title AND images

    <Box w="100%" mt="-10px">
      <div className="bg">
        <Stack
          h={{ base: "auto", md: "auto" }}
          p={{ base: 5, md: 10 }}
          direction={{ base: "column", md: "row" }}
          bgImage={{
            base: "none",
            md: "url(https://i.postimg.cc/JzpryZfz/Group-1.png)",
          }}
          backgroundSize="540px"
          m={10}
          backgroundPosition="center right"
          backgroundRepeat="no-repeat"
          minH={{ base: "unset", md: "550px" }}
        >
          <Stack
            pos="relative"
            zIndex={1}
            direction="column"
            justifyContent="center"
            spacing={6}
            maxW="550px"
          >
            <chakra.h1
              fontSize={{ base: "3xl", sm: "5xl" }}
              lineHeight={1}
              fontWeight="bold"
              textAlign="left"
            >
              Explore TemplatesKart <br />
            </chakra.h1>
            <Text
              fontSize="1.2rem"
              textAlign="left"
              lineHeight="1.375"
              fontWeight="400"
              color={"gray.500"}
            >
              TemplatesKart is a set of more than 100 responsive components
              built with chakraUI. All components support dark/light color
              scheme and chakraUI theme customizations. TemplatesKart is free
              for everyone.
            </Text>

            {/* Home Page Buttons */}
          </Stack>
        </Stack>
      </div>
      {/* home page about trending section */}
      <Stack
        minH={"20vh"}
        direction={{ base: "column", md: "row" }}
        className="trend"
        mt="-60px"
      >
        <Flex flex={1}>
          <Image alt={"Login Image"} objectFit={"cover"} src={trendingimg} />
        </Flex>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Freelance
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                Design Projects
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
          </Stack>
        </Flex>
      </Stack>

      {/* Home Page Trading events */}

      <Box p="10" w="100%">
        <Flex mb={5} w="100%" justifyContent={"space-between"}>
          <Text color="black" fontSize="2xl" fontWeight="bold">
            Trending Events
          </Text>
          {/* Home page trending event button */}
          <Button
            onClick={() => {
              navigate("/events");
            }}
          >
            View All <BsArrowUpShort />
          </Button>
        </Flex>

        {/* home page boxes */}

        <Flex w="100%" justifyContent={"space-between"}>
          {events.map((data, index) => (
            <motion.div
              style={{
                width: "30%",
              }}
              whileHover={{ translateY: -5 }}
            >
              <Stack
                className="card"
                direction="column"
                rounded="md"
                // shadow part of card
                w="100%"
                textAlign="left"
                align="start"
                spacing={0}
                role="group"
                overflow="hidden"
              >
                <HStack py={6} px={5} spacing={4} bg={"#6E85B7"} w="100%">
                  <Flex
                    justify="center"
                    alignItems="center"
                    rounded="lg"
                    p={2}
                    position="relative"
                    w={12}
                    h={12}
                    overflow="hidden"
                    lineHeight={0}
                    boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
                  >
                    <Icon as={FaLaptopCode} w={10} h={10} color="white" />
                  </Flex>
                  <VStack
                    onClick={() => navigate("/event/" + data._id)}
                    spacing={0}
                    align="start"
                    maxW="lg"
                    h="100%"
                  >
                    <Text as="h3" fontSize="md" noOfLines={2} color="gray.400">
                      {data.Hackathonname}
                    </Text>
                    <HStack spacing={2}>
                      <Text as="h2" fontSize="lg" fontWeight="extrabold">
                        {data.students.length}
                      </Text>
                      <Flex>
                        {Number(data.students.length) > 2 ? (
                          <Icon
                            as={BsArrowUpShort}
                            w={6}
                            h={6}
                            color="green.400"
                          />
                        ) : (
                          <Icon
                            as={BsArrowUpShort}
                            w={6}
                            h={6}
                            color="green.400"
                          />
                        )}
                        <Text as="h2" fontSize="md">
                          {data.students.length}
                        </Text>
                      </Flex>
                    </HStack>
                  </VStack>
                </HStack>

                <Flex py={3} px={5} d="none" _groupHover={{ d: "flex" }}>
                  <Link
                    onClick={() => navigate("/participents/" + data._id)}
                    fontSize="md"
                  >
                    Participents
                  </Link>
                </Flex>
              </Stack>
            </motion.div>
          ))}
        </Flex>
      </Box>
      <Stack minH={"20vh"} direction={{ base: "column", md: "row" }} mt="-60px">
        <Flex p={8} flex={1} align={"center"} justify={"center"} mt="-60px">
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Freelance
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                Design Projects
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={"Login Image"} objectFit={"cover"} src={agendaimg} />
        </Flex>
      </Stack>
      <Box p="10" w="100%">
        <Flex mb={5} w="100%" justifyContent={"space-between"}>
          <Text color="black" fontSize="2xl" fontWeight="bold">
            Currently Running Agendas
          </Text>
          <Button>
            View All <BsArrowUpShort />
          </Button>
        </Flex>
        <Flex w="100%" justifyContent={"space-between"}>
          {statData.map((data, index) => (
            <motion.div
              style={{
                width: "30%",
              }}
              whileHover={{ translateY: -5 }}
            >
              <Stack
                direction="column"
                rounded="md"
                boxShadow={"0 4px 6px rgba(160, 174, 192, 0.6)"}
                w="100%"
                textAlign="left"
                align="start"
                spacing={0}
                role="group"
                overflow="hidden"
              >
                <HStack py={6} px={5} spacing={4} bg={"gray.100"} w="100%">
                  <Flex
                    justify="center"
                    alignItems="center"
                    rounded="lg"
                    p={2}
                    bg="green.400"
                    position="relative"
                    w={12}
                    h={12}
                    overflow="hidden"
                    lineHeight={0}
                    boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
                  >
                    <Icon as={data.icon} w={6} h={6} color="white" />
                  </Flex>
                  <VStack spacing={0} align="start" maxW="lg" h="100%">
                    <Text as="h3" fontSize="md" noOfLines={2} color="gray.400">
                      {data.label}
                    </Text>
                    <HStack spacing={2}>
                      <Text as="h2" fontSize="lg" fontWeight="extrabold">
                        {data.score}
                      </Text>
                      <Flex>
                        {Number(data.score) > 100 ? (
                          <Icon
                            as={BsArrowUpShort}
                            w={6}
                            h={6}
                            color="green.400"
                          />
                        ) : (
                          <Icon
                            as={BsArrowDownShort}
                            w={6}
                            h={6}
                            color="red.400"
                          />
                        )}
                        <Text as="h2" fontSize="md">
                          {data.percentage}
                        </Text>
                      </Flex>
                    </HStack>
                  </VStack>
                </HStack>
                <Flex py={3} px={5} d="none" _groupHover={{ d: "flex" }}>
                  <Link fontSize="md">View All</Link>
                </Flex>
              </Stack>
            </motion.div>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
