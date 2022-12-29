import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

import { Link as LinkRouter } from "react-router-dom";

export default function Form() {
  return (
    <FormControl
      h="450px"
      bg="#323232"
      p="10px"
      pt="20px"
      borderRadius="15px"
      pl="40px"
      pr="40px"
    >
      <Text textAlign="center" fontWeight="bold" fontSize="xl">
        Login
      </Text>
      <Text textAlign="center" fontWeight="light" fontSize="md" mt="10px">
        Sign in to your account to continue
      </Text>
      <Box mt="40px">
        <FormLabel htmlFor="email">Email:</FormLabel>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="myemail@example.com"
          borderColor="#0D7377"
          focusBorderColor="#14FFEC"
          _hover={{ borderColor: "#14FFEC" }}
        />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          borderColor="#0D7377"
          focusBorderColor="#14FFEC"
          _hover={{ borderColor: "#14FFEC" }}
        ></Input>
        <Center mt="40px">
          <LinkRouter to="/home">
            <Button colorScheme="teal" size="md">
              Sign In
            </Button>
          </LinkRouter>
        </Center>
        <Text fontWeight="light" fontSize="small" mt="20px">
          Don't have an account?{" "}
          <Link href="" fontWeight="bold" color="#14FFEC">
            Create account
          </Link>
        </Text>
      </Box>
    </FormControl>
  );
}
