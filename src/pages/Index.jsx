import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Select, CheckboxGroup, Checkbox, Stack, Button, useToast, Container } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

import { useEffect } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    healthConditions: [],
    ethnicity: "",
    origin: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
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

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const { age, sex, ethnicity, origin } = formData;
    const isValid = age && sex && ethnicity && origin;
    setIsFormValid(isValid);
  };

  const processFormData = (data) => {
    // This function simulates the process of storing and processing the data
    console.log("Form Data Processed:", data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      toast({
        title: "Error",
        description: "Por favor llene todos los campos requeridos.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    // Call the processFormData function before showing the success toast
    processFormData(formData);
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
            <FormControl as="fieldset">
              <FormLabel as="legend">Perfil profesional</FormLabel>
              <CheckboxGroup>
                <Stack spacing={2}>
                  <Checkbox value="preventiveMedicine">Unidad de Medicina Preventiva y Salud Pública</Checkbox>
                  <Checkbox value="internationalVaccination">Centro de Vacunación Internacional</Checkbox>
                  <Checkbox value="publicHealthManager">Gestor de Salud Pública</Checkbox>
                  <Checkbox value="primaryCare">Atención primaria</Checkbox>
                  <Checkbox value="occupationalRiskPrevention">Prevención de riesgos laborales</Checkbox>
                  <Checkbox value="scientificSociety">Sociedad científica</Checkbox>
                  <Checkbox value="pharmaceuticalIndustry">Industria Farmacéutica</Checkbox>
                  {/* Additional checkboxes for new risk factors will go here */}
                </Stack>
              </CheckboxGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Raza/Grupo étnico</FormLabel>
              <Select placeholder="Seleccione el grupo étnico" name="ethnicity" onChange={handleChange}>
                <option value="caucasian">Caucásico</option>
                <option value="black">Negro</option>
                <option value="asian">Asiático</option>
                <option value="mixed">Mestizo</option>
                {/* Add more ethnicity options if necessary */}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Procedencia</FormLabel>
              <Select placeholder="Seleccione la procedencia" name="origin" onChange={handleChange}>
                <option value="resident">Residente</option>
                {/* Options for autonomous communities will go here */}
                <option value="foreigner">Extranjero</option>
                {/* Options for continents will go here */}
              </Select>
            </FormControl>
            {/* Additional checkboxes for new risk factors will be added here */}
            <Button leftIcon={<FaCheck />} colorScheme="green" type="submit" isDisabled={!isFormValid}>
              Enviar Evaluación
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Index;
