/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from 'react';
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
import MDAvatar from "components/MDAvatar";
import team2 from "assets/images/prof.jpg";

export default function Data() {
 
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
      { Header: "Dateofbirth", accessor: "competition1", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        project: (
            <div>
              <Author image={team2} name="flen fouleni" email="flenfouleni@gmail.com" />
              
            </div>
          ),
       
       
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Advanced Web
          </MDTypography>
        ),
        competition1:(
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            99546987
          </MDTypography>
        ),
        action: (
            <MDBox display="flex" alignItems="center">
            <Edit  />
            <Delete />
          </MDBox>
        ),
      }
    ],
  };
}
