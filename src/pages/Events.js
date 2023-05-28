import React, { useEffect } from "react";
import "./Event.css";
import { Fragment } from "react";
// import book from "../assets/img/casual-life-3d-close-up-of-blue-book.png";

import {
  Container,
  Box,
  chakra,
  Flex,
  Stack,
  VStack,
  HStack,
  Grid,
  Icon,
  Divider,
  Link,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { IconType } from "react-icons";
import { FaRegComment, FaRegHeart, FaRegEye } from "react-icons/fa";
import { getAllAgendaAPI, getallEventsAPI } from "./Service";
import { useNavigate } from "react-router-dom";
import eimg1 from "../assets/img/Saly-38.png";
import eimg2 from "../assets/img/Saly-39.png";
import aimg1 from "../assets/img/Saly-6.png";
import aimg2 from "../assets/img/Saly-25.png";

const articles: ArticleAttributes[] = [
  {
    title: "Hack1",
    link: "https://mahmad.me/blog/started-2022-by-updating-portfolio-website-1jde-temp-slug-4553258",
    created_at: "21 Jan 2022",
    meta: {
      views: 500,
    },
  },
  {
    title: "hack2",
    link: "https://mahmad.me/blog/create-professional-portfolio-website-with-nextjs-and-chakraui-4lkn",
    created_at: "20 Jun 2021",
    meta: {
      views: 300,
    },
  },
  {
    title: `Hack3`,
    link: "https://mahmad.me/blog/what-s-new-in-my-portfolio-websitea",
    created_at: "31 Sept 2022",
    meta: {
      views: 150,
    },
  },
];
export default function Events({ isAgenda = false }) {
  const navigate = useNavigate();
  const [events, setEvents] = React.useState([]);
  const getEvents = async () => {
    var data = [];
    if (!isAgenda) {
      data = await getallEventsAPI();
    } else {
      data = await getAllAgendaAPI();
    }
    setEvents(data);
  };
  useEffect(() => {
    getEvents();
  }, [isAgenda]);
  const ArticleStat = ({ icon, value }: { icon: IconType, value: number }) => {
    return (
      <Flex p={1} alignItems="center">
        <Icon as={icon} w={5} h={5} mr={2} />
        <chakra.span> {value} </chakra.span>
      </Flex>
    );
  };

  const ArticleSettingLink = ({ label }: { label: string }) => {
    return (
      <chakra.p as={Link} _hover={{ bg: "gray.100" }} p={1} rounded="md">
        {label}
      </chakra.p>
    );
  };

  return (
    <div className="eventcontainer">
      {isAgenda ? (
        // AGENDA PAGE
        <Container className="container" maxW="5xl" mb={30} overflow="hidden">
          <div className="agendaimqb">
            <img src={aimg2} alt="eimg1" className="a1" />
            <img src={aimg1} alt="eimg1" className="a2" />
          </div>
          <Flex justify="left" mb={3}>
            <chakra.h3 fontSize="2xl" fontWeight="bold" textAlign="center">
              Agendas
            </chakra.h3>
          </Flex>
          <div>
            <p className="eventdis">Welcome to the Agendas Section!</p>
            <p className="eventdis">
              Here, we believe in the power of collective decision-making and
              giving every member a voice. Share your agenda, gather insights,
              and make informed decisions through a unique voting system that
              combines the strength of your project's coin.
            </p>
            <p className="eventdis">
              Join us on this remarkable journey of democratic decision-making,
              where your opinions shape the destiny of our project. Together,
              let's create a legacy that will inspire generations to come.
            </p>
          </div>
          <div className="eventbox">
            <VStack rounded="md" overflow="hidden" spacing={0}>
              {events.map((event, index) => (
                <Fragment key={index}>
                  <Grid
                    onClick={() => navigate("/agenda/" + event._id)}
                    templateRows={{ base: "auto auto", md: "auto" }}
                    w="100%"
                    templateColumns={{ base: "unset", md: "4fr 2fr 2fr" }}
                    p={{ base: 2, sm: 4 }}
                    gap={3}
                    alignItems="center"
                    _hover={{ bg: "gray.100" }}
                  >
                    <Box gridColumnEnd={{ base: "span 2", md: "unset" }}>
                      <chakra.h3
                        as={Link}
                        // href={article.link}
                        isExternal
                        fontWeight="bold"
                        fontSize="lg"
                      >
                        {event.agenda}
                      </chakra.h3>
                      {/* Additional chakra.p elements */}
                    </Box>
                    {/* Additional Stack elements */}
                  </Grid>
                </Fragment>
              ))}
            </VStack>
          </div>
        </Container>
      ) : (
        // EVENT PAGE
        <Container className="container" maxW="5xl" mb={30} overflow="hidden">
          <div className="eventimqb">
            <img src={eimg1} alt="eimg1" className="e1 layere" data-speed={2} />
            <img
              src={eimg2}
              alt="eimg1"
              className="e2 layere"
              data-speed={-2}
            />
          </div>
          <Flex justify="left" mb={3}>
            <chakra.h3 fontSize="2xl" fontWeight="bold" textAlign="center">
              Event
            </chakra.h3>
          </Flex>
          <div>
            <p className="eventdis">Welcome to the Event Section!</p>
            <p className="eventdis">
              Step into a world of endless excitement and incredible
              opportunities with our exclusive Event Section! Brace yourself for
              a whirlwind of thrilling experiences that will leave you
              breathless and eager for more.
            </p>
          </div>
          <div className="eventbox">
            <VStack rounded="md" overflow="hidden" spacing={0}>
              {events.map((event, index) => (
                <Fragment key={index}>
                  <Grid
                    onClick={() => navigate("/event/" + event._id)}
                    templateRows={{ base: "auto auto", md: "auto" }}
                    w="100%"
                    templateColumns={{ base: "unset", md: "4fr 2fr 2fr" }}
                    p={{ base: 2, sm: 4 }}
                    gap={3}
                    alignItems="center"
                    _hover={{ bg: "gray.100" }}
                  >
                    <Box gridColumnEnd={{ base: "span 2", md: "unset" }}>
                      <chakra.h3
                        as={Link}
                        // href={article.link}
                        isExternal
                        fontWeight="bold"
                        fontSize="lg"
                      >
                        {event.Hackathonname}
                      </chakra.h3>
                      {/* Additional chakra.p elements */}
                    </Box>
                    {/* Additional Stack elements */}
                  </Grid>
                </Fragment>
              ))}
            </VStack>
          </div>
        </Container>
      )}
    </div>
  );
}
