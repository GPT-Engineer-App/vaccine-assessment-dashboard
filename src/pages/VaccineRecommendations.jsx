import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { useLocation } from "react-router-dom";

const VaccineRecommendations = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  console.log("Received form data:", formData);

  return (
    <Box>
      {formData ? <Text>Here will be the vaccine recommendations based on the selected autonomous community: {formData.origin}</Text> : <Text>No data received. Please go back and submit the form again.</Text>}
      {/* The implementation details for fetching and displaying vaccine recommendations will go here */}
    </Box>
  );
};

export default VaccineRecommendations;
