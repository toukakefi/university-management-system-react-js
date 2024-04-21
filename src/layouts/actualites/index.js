import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import DataTable from "examples/Tables/DataTable";

import projectsTableData from "layouts/actualites/data/projectsTableData";

function Tables() {

  const { columns: pColumns, rows: pRows } = projectsTableData();

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    attachment: null, // Adding field for attachment
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    // If the element is a file input, files contains the selected files
    // Otherwise, it's a normal text field
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to submit the form data
    console.log("Form Data:", formData);
    // Reset the form fields
    setFormData({
      title: "",
      description: "",
      date: "",
      attachment: null,
    });
    // Hide the form after submission
    setShowForm(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={10}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            {/* Add button */}
            <Grid container justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                style={{ color: "white" }}
                startIcon={<AddIcon />}
                onClick={toggleForm}
              >
                Add New News
              </Button>
            </Grid>
          </Grid>
          {showForm && (
            <Grid item xs={12}>
              {/* Form to add a new news */}
              <Card>
                <MDBox p={2}>
                  <MDTypography variant="h6" gutterBottom>
                    Add New News
                  </MDTypography>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Title"
                          name="title"
                          variant="outlined"
                          fullWidth
                          value={formData.title}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Description"
                          name="description"
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={4}
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Date"
                          name="date"
                          type="date"
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{ shrink: true }}
                          value={formData.date}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <input
                          accept="*/*"
                          id="attachment"
                          name="attachment"
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleChange}
                        />
                        <label htmlFor="attachment">
                          <IconButton
                            color="primary"
                            aria-label="upload attachment"
                            component="span"
                          >
                            <AttachFileIcon />
                          </IconButton>
                          <span>{formData.attachment ? formData.attachment.name : "Attachment"}</span>
                        </label>
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
                  News
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{
                    columns: pColumns, // Use the defined columns for news
                    rows: pRows, // Use the defined rows for news
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
