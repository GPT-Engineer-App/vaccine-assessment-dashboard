import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Select, CheckboxGroup, Checkbox, Stack, Button, useToast, Container } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const Index = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    healthConditions: [],
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      healthConditions: prevData.healthConditions.includes(value) ? prevData.healthConditions.filter((condition) => condition !== value) : [...prevData.healthConditions, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // including validation and sending data to a backend service.
    // For the sake of this example, we'll just display a toast:
    toast({
      title: "Evaluación enviada.",
      description: "Los datos del paciente han sido enviados para su evaluación.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={8}>
      <Box borderWidth="1px" borderRadius="lg" p={6} boxShadow="lg">
        <Heading as="h1" size="xl" mb={6}>
          Evaluación Integral
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Edad</FormLabel>
              <Input type="number" name="age" placeholder="Ingrese la edad del paciente" onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Sexo</FormLabel>
              <Select placeholder="Seleccione el sexo" name="sex" onChange={handleChange}>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Condiciones de salud preexistentes</FormLabel>
              <CheckboxGroup>
                <Stack spacing={2}>
                  <Checkbox value="diabetes" onChange={handleCheckboxChange}>
                    Diabetes
                  </Checkbox>
                  <Checkbox value="hypertension" onChange={handleCheckboxChange}>
                    Hipertensión
                  </Checkbox>
                  <Checkbox value="heartDisease" onChange={handleCheckboxChange}>
                    Enfermedad cardiaca
                  </Checkbox>
                  <Checkbox value="obesity" onChange={handleCheckboxChange}>
                    Obesidad
                  </Checkbox>
                  <Checkbox value="smoker" onChange={handleCheckboxChange}>
                    Fumador
                  </Checkbox>
                  <Checkbox value="chronicLungDisease" onChange={handleCheckboxChange}>
                    Enfermedad pulmonar crónica
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </FormControl>
            <Button leftIcon={<FaCheck />} colorScheme="green" type="submit">
              Enviar Evaluación
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Index;
