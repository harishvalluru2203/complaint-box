import { Grid, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { SuperAdminRegistration } from "./app/super-admin/SuperAdminRegistration";
import { theme } from "./theme";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { SuperAdminsList } from "./app/super-admin/SuperAdminsList";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <h1>Complaint Box</h1>
        <Router>
          <Grid container md={12} justifyContent="center" direction="column">
            <Grid item>
              <ul>
                <li>
                  <Link to="/super-admin-registration">
                    Super Admin Registration
                  </Link>
                </li>
                <li>
                  <Link to="/super-admin-list">Super Admin List</Link>
                </li>
              </ul>
            </Grid>
            <Grid item>
              <Routes>
                <Route
                  path="/super-admin-registration"
                  element={<SuperAdminRegistration />}
                />
                <Route path="/super-admin-list" element={<SuperAdminsList />} />
              </Routes>
            </Grid>
          </Grid>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
