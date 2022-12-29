import {
  Box,
  Center,
  Flex,
} from "@chakra-ui/react";
import Form from "../components/Form";

export default function Login() {
  return (
    <Flex
      color="white"
      bg="#212121"
      w="100vw"
      h="100vh"
      wrap="wrap"
    >
      <Box w="30vw" bg="#0D7377"></Box>
      <Flex w="70vw" h="100vh" justifyContent="center">
      <Center w="450px">
        <Form />
      </Center>
      </Flex>
    </Flex>
  );
}
