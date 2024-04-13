import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    numeroInscription: "",
    dateNaissance: "",
    filiere: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the logic to submit the form data
    console.log("Form Data:", formData);
    // Reset form fields
    setFormData({
      nom: "",
      prenom: "",
      numeroInscription: "",
      dateNaissance: "",
      filiere: "",
      email: "",
    });
    // Hide the form after submission
    setShowForm(false);
  };

  // Determine if it's managing students or professors based on the URL
  const isManagingStudents = window.location.pathname === "/tables";

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={10}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            {/* Add Button */}
            <Grid container justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                style={{ color: "white" }}
                startIcon={<AddIcon />}
                onClick={toggleForm}
              >
                Add New {isManagingStudents ? "Student" : "Professor"}
              </Button>
            </Grid>
          </Grid>
          {showForm && (
            <Grid item xs={12}>
              {/* Form for adding new student or professor */}
              <Card>
                <MDBox p={2}>
                  <MDTypography variant="h6" gutterBottom>
                    Add New {isManagingStudents ? "Student" : "Professor"}
                  </MDTypography>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Lastname"
                          name="nom"
                          variant="outlined"
                          fullWidth
                          value={formData.nom}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="firstname"
                          name="prenom"
                          variant="outlined"
                          fullWidth
                          value={formData.prenom}
                          onChange={handleChange}
                        />
                      </Grid>
                      {isManagingStudents ? (
                        <>
                          <Grid item xs={12} md={6}>
                            <TextField
                              label="RegistrationId"
                              name="numeroInscription"
                              variant="outlined"
                              fullWidth
                              value={formData.numeroInscription}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              label="Date of birth"
                              name="dateNaissance"
                              type="date"
                              variant="outlined"
                              fullWidth
                              InputLabelProps={{ shrink: true }}
                              value={formData.dateNaissance}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              label="Field"
                              name="filiere"
                              variant="outlined"
                              fullWidth
                              value={formData.filiere}
                              onChange={handleChange}
                            />
                          </Grid>
                        </>
                      ) : (
                        <>
                          <Grid item xs={12} md={6}>
                            <TextField
                              label="Subject"
                              name="subject"
                              variant="outlined"
                              fullWidth
                              value={formData.subject}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              label="Date of Birth"
                              name="dateOfBirth"
                              type="date"
                              variant="outlined"
                              fullWidth
                              InputLabelProps={{ shrink: true }}
                              value={formData.dateOfBirth}
                              onChange={handleChange}
                            />
                          </Grid>
                        </>
                      )}
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Email"
                          name="email"
                          type="email"
                          variant="outlined"
                          fullWidth
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                          >
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </form>
                </MDBox>
              </Card>
            </Grid>
          )}
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  {isManagingStudents ? "Students" : "Professors"}
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{
                    columns: isManagingStudents ? columns : pColumns,
                    rows: isManagingStudents ? rows : pRows,
                  }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
export default Tables;