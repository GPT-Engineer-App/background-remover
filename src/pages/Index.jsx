import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Image, Spinner, useToast } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected.",
        description: "Please select an image file to upload.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    // Simulate background removal and inpainting process
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Upload successful.",
        description: "The background has been removed and replaced.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setPreview("https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnBhaW50ZWQlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxNjc5MDI0N3ww&ixlib=rb-4.0.3&q=80&w=1080");
    }, 3000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">E-commerce Image Background Remover</Text>
        <Input type="file" accept="image/*" onChange={handleFileChange} />
        {preview && <Image src={preview} alt="Selected file preview" boxSize="300px" objectFit="cover" />}
        <Button leftIcon={<FaUpload />} colorScheme="teal" onClick={handleUpload} isLoading={loading}>
          Upload and Process
        </Button>
        {loading && <Spinner size="xl" />}
      </VStack>
    </Container>
  );
};

export default Index;
