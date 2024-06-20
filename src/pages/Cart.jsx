import { Box, Container, VStack, Heading, Text, Button } from "@chakra-ui/react";

const Cart = () => {
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h2" size="xl">Shopping Cart</Heading>
        <Text fontSize="lg">Your cart is currently empty.</Text>
        <Button colorScheme="teal">Continue Shopping</Button>
      </VStack>
    </Container>
  );
};

export default Cart;