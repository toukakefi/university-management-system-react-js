import React, { useState } from 'react';
import { Edit, Delete } from '@mui/icons-material';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  MenuItem,
} from '@mui/material';
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import team2 from "assets/images/prof.jpg";

export default function Data() {
  const [editingProfessor, setEditingProfessor] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedField, setSelectedField] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    subject: '',
    email: '',
    dateOfBirth: ''
  });

  const handleEditClick = (professorId) => {
    setEditingProfessor(professorId);
    setOpen(true);
  };

  const handleClose = () => {
    setEditingProfessor(null);
    setOpen(false);
    setSelectedField('');
    setFormData({
      id: '',
      name: '',
      subject: '',
      email: '',
      dateOfBirth: ''
    });
  };

  const handleFieldSelect = (field) => {
    setSelectedField(field);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [selectedField]: e.target.value
    });
  };

  const handleSave = () => {
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
      { Header: "Professors", accessor: "project", width: "30%", align: "left" },
      { Header: "Subject", accessor: "status", align: "center" },
      { Header: "Date of Birth", accessor: "dateOfBirth", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        id: "1", 
        project: (
          <div>
            <Author image={team2} name="flen fouleni" email="flenfouleni@gmail.com" />
            <Dialog open={open && editingProfessor === "1"} onClose={handleClose}>
              <DialogTitle>Edit Professor</DialogTitle>
              <DialogContent>
                <form style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
                  <TextField
                    label="ID"
                    name="id"
                    value={formData.id}
                    disabled
                    fullWidth
                    style={{ marginBottom: '20px' }}
                  />
                  <TextField
                    select
                    label="Select Field to Edit"
                    value={selectedField}
                    onChange={(e) => handleFieldSelect(e.target.value)}
                    fullWidth
                    style={{ marginBottom: '20px' }}
                    variant="outlined"
                  >
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="subject">Subject</MenuItem>
                    <MenuItem value="email">Email</MenuItem>
                    <MenuItem value="dateOfBirth">Date of Birth</MenuItem>
                  </TextField>
                  {selectedField && (
                    <TextField
                      label={selectedField === 'dateOfBirth' ? 'Date of Birth' : selectedField.charAt(0).toUpperCase() + selectedField.slice(1)}
                      name={selectedField}
                      value={formData[selectedField]}
                      onChange={handleInputChange}
                      fullWidth
                      style={{ marginBottom: '20px' }}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: selectedField === 'dateOfBirth' ? true : undefined,
                      }}
                      type={selectedField === 'dateOfBirth' ? 'date' : 'text'}
                    />
                  )}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSave}
                      style={{ color: 'white', marginRight: '10px' }}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={handleClose}
                      style={{ color: 'grey' }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Advanced Web
          </MDTypography>
        ),
        dateOfBirth:(
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1990-01-01
          </MDTypography>
        ),
        action: (
          <MDBox display="flex" alignItems="center">
            <Edit onClick={() => handleEditClick("1")} />
            <Delete />
          </MDBox>
        ), 
      }
    ],
  };
}
