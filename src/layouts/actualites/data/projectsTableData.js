import React, { useState } from 'react';
import { Edit, Delete, CalendarToday } from '@mui/icons-material';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  MenuItem
} from '@mui/material';
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import team2 from "assets/images/ia.jpg";

export default function Data() {
  const [editingProfessor, setEditingProfessor] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedField, setSelectedField] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    Title: '',
    Description: '',
    Attachment: '', // Changed from 'attachment' to 'Attachment'
    Date: '',
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
      Title: '',
      Description: '',
      Attachment: '', // Changed from 'attachment' to 'Attachment'
      Date: ''
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
    // You can handle saving the form data here
    handleClose();
  };

  const Author = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "News", accessor: "project", width: "30%", align: "left" },
      { Header: "Description", accessor: "status", align: "center" },
      { Header: "Date And time ", accessor: "date", align: "center" },
      { Header: "Attachment", accessor: "attachment", align: "center" }, // Changed from 'attachement' to 'Attachment'
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        id: "1",
        project: (
          <div>
            <Author  name="event name " image={team2}  />
            <Dialog open={open && editingProfessor === "1"} onClose={handleClose}>
              <DialogTitle>Edit News</DialogTitle>
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
                    <MenuItem value="Title">Title</MenuItem>
                    <MenuItem value="Description">Description</MenuItem>
                    <MenuItem value="Date">Date</MenuItem>
                    <MenuItem value="Attachment">Attachment</MenuItem>
                  </TextField>
                  {selectedField && (
                    <TextField
                      label={selectedField === 'Date' ? 'Date' : selectedField}
                      name={selectedField}
                      value={formData[selectedField]}
                      onChange={handleInputChange}
                      fullWidth
                      style={{ marginBottom: '20px' }}
                      variant="outlined"
                      InputProps={{
                        endAdornment: selectedField === 'Date' ? <CalendarToday /> : null,
                      }}
                      InputLabelProps={{
                        shrink: selectedField === 'Date' ? true : undefined,
                      }}
                      type={selectedField === 'Date' ? 'date' : 'text'}
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
                    <Button variant="outlined" onClick={handleClose}
                    style={{ color: 'grey', marginRight: '10px' }}
                    >Cancel</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            jsdfhjskdfhjkdsfh
          </MDTypography>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            20/05/2024
          </MDTypography>
        ),
        attachment: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            url
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
