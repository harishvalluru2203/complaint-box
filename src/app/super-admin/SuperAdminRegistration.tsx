import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { postSuperAdminDetails } from "./SuperAdminServices";

export const SuperAdminRegistration = () => {
  const [superAdminDetails, setSuperAdminDetails] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const handleSubmitSuperAdminDetails = () => {
    postSuperAdminDetails(superAdminDetails);
  };

  const handleFirstNameChange = (e: any) => {
    setSuperAdminDetails({
      ...superAdminDetails,
      firstName: e.target.value,
    });
  };

  const handleLastNameChange = (e: any) => {
    setSuperAdminDetails({
      ...superAdminDetails,
      lastName: e.target.value,
    });
  };

  const handleUserNameChange = (e: any) => {
    setSuperAdminDetails({
      ...superAdminDetails,
      userName: e.target.value,
    });
  };

  return (
    <Grid container alignItems="center" flexDirection="column" width="500px">
      <Grid container direction="row" columnSpacing={{ md: 2 }}>
        <Grid container item md={6} mb={2}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={superAdminDetails.firstName}
            onChange={handleFirstNameChange}
          />
        </Grid>
        <Grid container item md={6} mb={2}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={superAdminDetails.lastName}
            onChange={handleLastNameChange}
          />
        </Grid>
      </Grid>
      <Grid container mb={2}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={superAdminDetails.userName}
          onChange={handleUserNameChange}
        />
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Button variant="contained" onClick={handleSubmitSuperAdminDetails}>
          SUBMIT
        </Button>
      </Grid>
    </Grid>
  );
};
