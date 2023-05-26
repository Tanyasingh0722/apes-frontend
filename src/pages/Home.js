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
import { useEffect, useRef } from "react";
// Here we have used react-icons package for the icons
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
// Here we have used react-icons package for the icons
import { FaGithub } from "react-icons/fa";
import { getallEventsAPI } from "./Service";
import { useNavigate } from "react-router-dom";
import trendingimg from "../assets/img/Saly-10.png";
import agendaimg from "../assets/img/Saly-12.png";
import { FaLaptopCode } from "react-icons/fa";
import Footer from "./Footer";
import img1 from "../assets/img/treasure-chest-7111541-5769376_0-transformed-removebg-preview.png";
import img2 from "../assets/img/business-agenda-7901499-6478391-transformed-removebg-preview.png";
import img3 from "../assets/img/coin-in-hand.png";

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

  document.addEventListener("mousemove", parallax);

  function parallax(e) {
    const layers = document.querySelectorAll(".layer");

    layers.forEach((Layer) => {
      // Change variable name to "Layer"
      const speed = Layer.getAttribute("data-speed");

      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      Layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  return (
    // Home page title AND images

    <Box w="100%" mt="-10px">
      <div className="bg">
        <Stack
          pos="relative"
          h={{ base: "auto", md: "auto" }}
          p={{ base: 5, md: 10 }}
          direction={{ base: "column", md: "row" }}
          bgImage={{
            base: "none",
            md: "url(https://i.postimg.cc/CK6N36Gr/Saly-13-1.png)",
          }}
          backgroundSize="740px"
          m={10}
          backgroundPosition="center right"
          backgroundRepeat="no-repeat"
          minH={{ base: "unset", md: "550px" }}
        >
          <div className="img">
            <img src={img1} alt="img1" className="i1 layer" data-speed={2} />
            <img src={img2} alt="img2" className="i2 layer" data-speed={-5} />
            <img src={img3} alt="img3" className="i3 layer" data-speed={5} />
          </div>
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
              Academic Point <span className="exchange">Exchange</span> System{" "}
              <br />
            </chakra.h1>
            <Text
              fontSize="1.2rem"
              textAlign="left"
              lineHeight="1.375"
              fontWeight="400"
              color={"black.500"}
            >
              Welcome to APES, a revolutionary rewarding system designed to
              enhance the college experience and foster a thriving micro-economy
              within our campus community. Powered by blockchain technology, our
              platform offers a secure and transparent way to incentivize and
              reward students for their academic and extracurricular
              achievements.
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
                Welcome
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                to the Event Section!
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Step into a world of endless excitement and incredible
              opportunities with our exclusive Event Section! Brace yourself for
              a whirlwind of thrilling experiences that will leave you
              breathless and eager for more.
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
          {events?.slice(3)?.map((data, index) => (
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
      <Stack minH={"20vh"} direction={{ base: "column", md: "row" }}>
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
                Welcome
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                to the Agenda Page!
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Share your agenda, gather insights, and make informed decisions
              through a unique voting system that combines the strength of your
              project's coin. Join us on this remarkable journey of democratic
              decision-making, where your opinions shape the destiny of our
              project. Together, let's create a legacy that will inspire
              generations to come.
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
      <Footer />
    </Box>
  );
};

export default Home;
