import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import {
  ChakraProvider,
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password || !name) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/users", {
        email: email,
        password: password,
        name: name,
      });

      if (response.status === 200) {
        navigate("/login");
        console.log("Registration successful");
        toast.success("Registration successful");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mt-5 mb-3">Register</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button colorScheme="blue" type="submit">
              Register
            </Button>
          </VStack>
        </form>
      </Box>
      <ToastContainer />
    </ChakraProvider>
  );
}

export default Register;
