import { useParams } from "react-router-dom";
import { Box, Container, VStack, Heading, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: "$999",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    price: "$199",
    image: "https://via.placeholder.com/150",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container maxW="container.md" py={8}>
        <Heading as="h2" size="xl">Product not found</Heading>
      </Container>
    );
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Image src={product.image} alt={product.name} boxSize="300px" />
        <Heading as="h2" size="xl">{product.name}</Heading>
        <Text fontSize="lg">{product.description}</Text>
        <Text fontWeight="bold" fontSize="2xl">{product.price}</Text>
        <Button as={Link} to="/cart" colorScheme="teal">Add to Cart</Button>
      </VStack>
    </Container>
  );
};

export default ProductDetails;