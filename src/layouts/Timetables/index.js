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
import projectsTableData from "layouts/Timetables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const [formData, setFormData] = useState({
    filiere: "",
    groupe: "",
    salle: "",
    professeur: "",
    typeSemaine: "",
    matiere: "",
    heureDebut: "",
    heureFin: "",
    jour: "",
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
    // Ajouter la logique pour soumettre les données de l'emploi ici
    console.log("Form Data:", formData);
    // Réinitialiser les champs du formulaire
    setFormData({
      filiere: "",
      groupe: "",
      salle: "",
      professeur: "",
      typeSemaine: "",
      matiere: "",
      heureDebut: "",
      heureFin: "",
      jour: "",
    });
    // Masquer le formulaire après la soumission
    setShowForm(false);
  };

  const isManagingProfessors = window.location.pathname === "/tables";

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={10}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            {/* Bouton Ajouter */}
            <Grid container justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                style={{ color: "white" }}
                startIcon={<AddIcon />}
                onClick={toggleForm}
              >
                Add new timetable
              </Button>
            </Grid>
          </Grid>
          {showForm && (
            <Grid item xs={12}>
              {/* Formulaire pour ajouter un nouvel emploi */}
              <Card>
                <MDBox p={2}>
                  <MDTypography variant="h6" gutterBottom>
                    Add new timetable
                  </MDTypography>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
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
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Group"
                          name="groupe"
                          variant="outlined"
                          fullWidth
                          value={formData.groupe}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Room"
                          name="salle"
                          variant="outlined"
                          fullWidth
                          value={formData.salle}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Professor"
                          name="professeur"
                          variant="outlined"
                          fullWidth
                          value={formData.professeur}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Type of week"
                          name="typeSemaine"
                          variant="outlined"
                          fullWidth
                          value={formData.typeSemaine}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Subject"
                          name="matiere"
                          variant="outlined"
                          fullWidth
                          value={formData.matiere}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="start at"
                          name="heureDebut"
                          type="time"
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{ shrink: true }}
                          value={formData.heureDebut}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="finish at"
                          name="heureFin"
                          type="time"
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{ shrink: true }}
                          value={formData.heureFin}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Day"
                          name="jour"
                          variant="outlined"
                          fullWidth
                          value={formData.jour}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ color: 'white', marginTop: '10px' }}
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
                 Timetables
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{
                    columns: isManagingProfessors ? columns : pColumns,
                    rows: isManagingProfessors ? rows : pRows,
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
