import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  MenuItem
} from '@mui/material';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Importation des icônes depuis Material-UI Icons
import { Edit, Delete } from '@mui/icons-material';

// Images
import team2 from "assets/images/prof.jpg";

export default function Data() {
  const [editingStudent, setEditingStudent] = useState(null);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    registrationID: '',
    field: '',
    newValue: ''
  });

  const handleEditClick = (student) => {
    setEditingStudent(student);
    setFormData({
      registrationID: student.registrationID,
      field: '',
      newValue: ''
    });
    setOpen(true);
  };

  const handleClose = () => {
    setEditingStudent(null);
    setOpen(false);
    setFormData({
      registrationID: '',
      field: '',
      newValue: ''
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Mettre à jour les informations de l'étudiant avec formData
    handleClose();
  };

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Students", accessor: "Students", width: "45%", align: "left" },
      { Header: "Registration_ID", accessor: "Registration_ID", align: "left" },
      { Header: "Field", accessor: "Field", align: "center" },
      { Header: "Date_of_birth", accessor: "Date_of_birth", align: "center" },
      { Header: "Action", accessor: "Action", align: "center" },
    ],

    rows: [
      {
        Students: (
          <div>
            <Author image={team2} name="Houssein Hmila" email="HousseinHmila@gmail.com" />
            <Dialog open={open && editingStudent === "Houssein Hmila"} onClose={handleClose}>
              <DialogTitle>Edit Student</DialogTitle>
              <DialogContent>
                <form style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
                  <TextField
                    label="Registration ID"
                    name="registrationID"
                    value={formData.registrationID}
                    disabled
                    fullWidth
                    style={{ marginBottom: '20px' }}
                  />
                  <TextField
                    select
                    label="Field"
                    name="field"
                    value={formData.field}
                    onChange={handleInputChange}
                    fullWidth
                    style={{ marginBottom: '20px' }}
                    variant="outlined"
                  >
                    {['Firstname', 'Lastname', 'Email', 'Date of birth'].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    label="New Value"
                    name="newValue"
                    value={formData.newValue}
                    onChange={handleInputChange}
                    fullWidth
                    style={{ marginBottom: '20px' }}
                    variant="outlined"
                  />
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
  variant="contained"
  color="primary"
  onClick={handleSave}
  style={{ color: 'white', marginRight: '10px' }}
>
  Save
</Button>
                    <Button variant="outlined" onClick={handleClose}><DialogTitle>Cancel</DialogTitle></Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        ),
        Registration_ID: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            12456398
          </MDTypography>
        ),
        Field: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Software engineering
          </MDTypography>
        ),
        Date_of_birth: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            22/01/2001
          </MDTypography>
        ),
        Action: (
          <MDBox display="flex" alignItems="center">
            <Edit onClick={() => handleEditClick("Houssein Hmila")} />
            <Delete />
          </MDBox>
        ),
      },
      // Ajoutez d'autres lignes ici
    ]
  };
}