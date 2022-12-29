import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Input, Stack, Image, Text } from "@chakra-ui/react";

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
        <Flex>
          <Card maxW="sm" bg="#323232" ml="40px">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="sm" color="white" textAlign="center">Realizar protótipo da interface no figma</Heading>
                <Text textAlign="center" color="#888888">
                Criar telas de login e cadastro, e também a página home da aplicação
                </Text>
                <Text color="red.600" fontSize="sm">
                  To do
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
            <EditIcon w={5} h={5} color="#888888" />
            <DeleteIcon w={5} h={5} color="#888888" />
            </CardFooter>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}
