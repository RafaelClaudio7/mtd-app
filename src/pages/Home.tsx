import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  UnorderedList,
  ListItem,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Divider,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";

interface todoInterface {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const Home: React.FC = (): ReactElement => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodoData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Flex w="100vw" bg="#1E1E1E" overflow="hidden">
      <Box minHeight="100vh" w="10vw" bg="#0D7377" className="left-side"></Box>
      <Flex flexDir="column">
        <Box
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
        </Box>
        <Divider />
        <Box className="todos-container" p={10} w="90vw">
          <Center>
            <Flex flexWrap="wrap">
              {todoData.map((todo: todoInterface) => {
                if (todo.userId === 1)
                  return (
                    <Box overflowX="hidden" key={todo.id}>
                      <Card
                        maxW="sm"
                        bg="#323232"
                        ml="40px"
                        mb="40px"
                        w="300px"
                      >
                        <CardBody>
                          <Stack mt="6" spacing="3">
                            <Heading size="sm" color="white" textAlign="center">
                              {todo.title}
                            </Heading>
                            <Text textAlign="center" color="#888888">
                              {todo.userId}
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
                    </Box>
                  );
              })}
            </Flex>
          </Center>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
