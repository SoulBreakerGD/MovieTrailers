import { React, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Icon, Breadcrumb, Table } from 'react-materialize'
import {
  Typography,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Dialog,
  DialogActions,
} from "@mui/material";

export default function Delete() {
  const [open, setOpen] = useState(false);
  const history = useNavigate();
  const film = useParams();
  const filmID = film.id;
  const baseURL = `https://64b05cf2c60b8f941af5a00a.mockapi.io/Films/${filmID}`;
  useEffect(() => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => console.log(error.message));
  }, [filmID]);

  const handleClose = () => {
    setOpen(false);
    history("/dashboard");
  };

  const handleDelete = () => {
    fetch(baseURL, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        setOpen(true);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    // <Container>
    //   <h4 class="red-text" style={{ textAlign: 'center' }}>Are you sure you want to delete this film?</h4>
    //   <div style={{ textAlign: 'center' }}>
    //     <button onClick={handleDelete} class="btn waves-effect waves-dark red darken-4">Delete</button>
    //     <br /><br />
    //     <button onClick={handleClose} class="btn waves-effect waves-dark red darken-4">Dashboard</button>
    //   </div>
    // </Container>
    <>
    <div style={{height: '10vh'}}></div>
      <br/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6">
          Are you sure you want to delete this film?
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </div>
        
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Film Deleted</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The film has been successfully deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" disableElevation onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
