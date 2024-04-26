import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import bgImage from "assets/images/issatso.png";

function Cover() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // État pour indiquer si la soumission est en cours

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Mettre à jour l'état pour indiquer que la soumission est en cours
    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData); // Afficher la réponse du serveur (facultatif)

      // Réinitialiser le formulaire après la soumission réussie
      setFormData({
        name: "",
        email: "",
        password: ""
      });
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    } finally {
      setIsSubmitting(false); // Mettre à jour l'état pour indiquer que la soumission est terminée
    }
  };

  return (
    <CoverLayout image={bgImage}>
      <MDBox display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card sx={{ marginLeft: "auto", marginRight: "auto" }}>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="success"
            mx={2}
            mt={-6} 
            p={3.5}
            mb={3}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Join us
            </MDTypography>
            <MDTypography display="block" variant="button" color="white" my={1}>
              Enter your email and password to register
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <form onSubmit={handleSubmit}>
              <MDBox mb={2}>
                <MDInput type="text" name="name" label="Name" variant="standard" fullWidth value={formData.name} onChange={handleChange} />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="email" name="email" label="Email" variant="standard" fullWidth value={formData.email} onChange={handleChange} />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="password" name="password" label="Password" variant="standard" fullWidth value={formData.password} onChange={handleChange} />
              </MDBox>
              <MDBox display="flex" alignItems="center" ml={-1}>
                <Checkbox />
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;I agree the&nbsp;
                </MDTypography>
                <MDTypography
                  component="a"
                  href="#"
                  variant="button"
                  fontWeight="bold"
                  color="info"
                  textGradient
                >
                  Terms and Conditions
                </MDTypography>
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton type="submit" variant="gradient" color="info" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? "Signing in..." : "Sign in"} {/* Afficher "Signing in..." pendant la soumission */}
                </MDButton>
              </MDBox>
              <MDBox mt={3} mb={1} textAlign="center">
                <MDTypography variant="button" color="text">
                  Already have an account?{" "}
                  <MDTypography
                    component={Link}
                    variant="button"
                    color="info"
                    fontWeight="medium"
                    textGradient
                  >
                    Sign In
                  </MDTypography>
                </MDTypography>
              </MDBox>
            </form>
          </MDBox>
        </Card>
      </MDBox>

      <MDBox mt={-3} mb={5} textAlign="center">
        <MDTypography variant="caption" color="text">
          &copy; 2023 Creative Tim. All rights reserved.
        </MDTypography>
      </MDBox>   
    </CoverLayout>
  );
}

export default Cover;
