import { Avatar, Box, Flex, Heading, Input } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex h="100vh" w="100vw" bg="#1E1E1E">
      <Box w="10vw" bg="#0D7377" className="left-side"></Box>
      <Flex flexDir="column" w="90vw">
        <Heading
          display="flex"
          w="90vw"
          h="10vh"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box className="search-area" ml="40px" display="flex" flexDir="row">
            <Input
              type="search"
              name="search-by-name"
              id="search-by-name"
              w="300px"
              placeholder="Search a task by name"
              borderColor="#0D7377"
              focusBorderColor="#14FFEC"
              _hover={{ borderColor: "#14FFEC" }}
            />
          </Box>
          <Avatar name="Rafael Tula" mr="20px" bg="teal.500" />
        </Heading>
      </Flex>
    </Flex>
  );
}
