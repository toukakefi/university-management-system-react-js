
import React, { useState } from 'react';
import { Edit, Delete } from '@mui/icons-material';
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

export default function Data() {
  const [editingJob, setEditingJob] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedFields, setSelectedFields] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    filiere: '',
    groupe: '',
    professor: '',
    room: '',
    startTime: '',
    endTime: '',
    subject: '',
    typeOfWeek: ''
  });

  const [tableData, setTableData] = useState([]);

  const handleEditClick = (jobId) => {
    setEditingJob(jobId);
    setOpen(true);
  };

  const handleClose = () => {
    setEditingJob(null);
    setOpen(false);
    setSelectedFields([]);
    setFormData({
      ...formData,
      id: '',
      filiere: '',
      groupe: '',
      professor: '',
      room: '',
      startTime: '',
      endTime: '',
      subject: '',
      typeOfWeek: ''
    });
  };

  const handleFieldSelect = (field) => {
    setSelectedFields([...selectedFields, field]);
  };

  const handleInputChange = (e, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value
    });
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
    setTableData([formData, ...tableData]);
    console.log("Table Data:", tableData);
    handleClose();
  };

  const renderTextField = (fieldName) => (
    <TextField
      key={fieldName}
      label={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
      name={fieldName}
      value={formData[fieldName]}
      onChange={(e) => handleInputChange(e, fieldName)}
      fullWidth
      style={{ marginBottom: '20px' }}
      variant="outlined"
      InputLabelProps={{
        shrink: fieldName === 'startTime' || fieldName === 'endTime' ? true : undefined,
      }}
      type={fieldName === 'startTime' || fieldName === 'endTime' ? 'time' : 'text'}
      select={fieldName === 'typeOfWeek'}
    >
      {fieldName === 'typeOfWeek' && (
        <MenuItem value="Semaine A">Semaine A</MenuItem>
      )}
    </TextField>
  );

  return {
    columns: [
      { Header: "ID", accessor: "id", width: "20%", align: "left" },
      { Header: "Filière", accessor: "filiere", align: "center" },
      { Header: "Groupe", accessor: "groupe", align: "center" },
      { Header: "Professeur", accessor: "professor", align: "center" },
      { Header: "Salle", accessor: "room", align: "center" },
      { Header: "Heure de début", accessor: "startTime", align: "center" },
      { Header: "Heure de fin", accessor: "endTime", align: "center" },
      { Header: "Matière", accessor: "subject", align: "center" },
      { Header: "Type de semaine", accessor: "typeOfWeek", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: tableData.map((data, index) => ({
      id: (
        <MDTypography variant="body2">
          {index + 1}
        </MDTypography>
      ),
      filiere: (
        <MDTypography variant="body2">
          {data.filiere}
        </MDTypography>
      ),
      groupe: (
        <MDTypography variant="body2">
          {data.groupe}
        </MDTypography>
      ),
      professor: (
        <MDTypography variant="body2">
          {data.professor}
        </MDTypography>
      ),
      room: (
        <MDTypography variant="body2">
          {data.room}
        </MDTypography>
      ),
      startTime: (
        <MDTypography variant="body2">
          {data.startTime}
        </MDTypography>
      ),
      endTime: (
        <MDTypography variant="body2">
          {data.endTime}
        </MDTypography>
      ),
      subject: (
        <MDTypography variant="body2">
          {data.subject}
        </MDTypography>
      ),
      typeOfWeek: (
        <MDTypography variant="body2">
          {data.typeOfWeek}
        </MDTypography>
      ),
      action: (
        <MDBox display="flex" alignItems="center">
          <Edit onClick={() => handleEditClick(index)} />
          <Delete />
        </MDBox>
      ), 
    })),

    open,
    handleEditClick,
    handleClose,
    handleFieldSelect,
    renderTextField,
    selectedFields,
    formData,
    handleInputChange,
    handleSave,
  };
}
