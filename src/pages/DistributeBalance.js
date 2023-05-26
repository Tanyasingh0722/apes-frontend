import { Box, Heading, Text, Button, useToast } from "@chakra-ui/react";
import { distributeBalanceAPI } from "./Service";
import { useToaster } from "react-hot-toast";

export default function NotFound() {
  const toast = useToast();
  const distributeBalance = async () => {
    distributeBalanceAPI();
    toast({
      title: "Distribute Balance",
      description: "Balance has been distributed to all students",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    window.location.href = "/";
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        Distribute Balance to all Students
      </Heading>
      <br></br>
      <br></br>
      <Button
        onClick={() => distributeBalance()}
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
      >
        Distribute
      </Button>
    </Box>
  );
}
