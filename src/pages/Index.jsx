import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Select, CheckboxGroup, Checkbox, Stack, Button, useToast, Container, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
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
    // Call the processFormData function before showing the success toast
    processFormData(formData);

    // Redirect to the Vaccine Recommendations page with form data
    navigate("/recommendations", { replace: true, state: { formData } });
  };

  return (
    <Tabs>
      <TabList>
        <Tab>Evaluación Integral</Tab>
        <Tab>Contenido del Paciente</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
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
                      <option value="andalucia">Andalucía</option>
                      <option value="aragon">Aragón</option>
                      <option value="asturias">Asturias</option>
                      <option value="baleares">Islas Baleares</option>
                      <option value="canarias">Islas Canarias</option>
                      <option value="cantabria">Cantabria</option>
                      <option value="castillaLaMancha">Castilla-La Mancha</option>
                      <option value="castillaLeon">Castilla y León</option>
                      <option value="cataluna">Cataluña</option>
                      <option value="valencia">Comunidad Valenciana</option>
                      <option value="extremadura">Extremadura</option>
                      <option value="galicia">Galicia</option>
                      <option value="madrid">Comunidad de Madrid</option>
                      <option value="murcia">Región de Murcia</option>
                      <option value="navarra">Navarra</option>
                      <option value="paisVasco">País Vasco</option>
                      <option value="laRioja">La Rioja</option>
                      <option value="ceuta">Ceuta</option>
                      <option value="melilla">Melilla</option>
                      <option value="foreigner">Extranjero</option>
                      <option value="africa">África</option>
                      <option value="america">América</option>
                      <option value="asia">Asia</option>
                      <option value="europa">Europa</option>
                      <option value="oceania">Oceanía</option>
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
        </TabPanel>
        <TabPanel>
          <Box p={5}>
            <Text fontSize="xl">Contenido Provisional: La sección del paciente está actualmente en desarrollo y estará disponible pronto.</Text>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Index;
