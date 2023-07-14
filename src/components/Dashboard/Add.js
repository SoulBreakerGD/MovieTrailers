import { React, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import {
    TextField,
    Typography,
    Button,
    FormControlLabel,
    Switch,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Alert,
    Dialog,
    AlertTitle,
    DialogActions,
} from "@mui/material";

export default function Add() {
    const [open, setOpen] = useState(false);
    const baseURL = `https://64b05cf2c60b8f941af5a00a.mockapi.io/Films`;
    const formik = useFormik({
        initialValues: {
            name: "",
            img: "",
            info: "",
            clip: "",
            // top: false,
        },

        onSubmit: (values) => {
            fetch(baseURL, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "same-origin",
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => setOpen(true))
                .catch((error) => console.log(error.message));
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),
            img: Yup.string()
                .required("Required.")
                .min(10, "Must be 10 characters or more"),
            info: Yup.string()
                .required("Required.")
                .min(10, "Must be 10 characters or more"),
            clip: Yup.string()
                .required("Required.")
                .min(10, "Must be 10 characters or more"),
        }),
    });
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <div style={{height: '10vh'}}></div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    autoFocus
                    margin="dense"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && (
                    <Typography variant="caption" color="red">
                        {formik.errors.name}
                    </Typography>
                )}
                <TextField
                    margin="dense"
                    name="img"
                    label="URL of image"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.img}
                    onChange={formik.handleChange}
                />
                {formik.errors.img && (
                    <Typography variant="caption" color="red">
                        {formik.errors.img}
                    </Typography>
                )}

                <TextField
                    margin="dense"
                    name="clip"
                    label="Trailer"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.clip}
                    onChange={formik.handleChange}
                />
                {formik.errors.clip && (
                    <Typography variant="caption" color="red">
                        {formik.errors.clip}
                    </Typography>
                )}
                <TextField
                    multiline
                    rows={2}
                    margin="dense"
                    name="info"
                    label="Information"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.info}
                    onChange={formik.handleChange}
                />
                {formik.errors.info && (
                    <Typography variant="caption" color="red" display="block">
                        {formik.errors.info}
                    </Typography>
                )}
                {/* <FormControlLabel
            control={<Switch />}
            label="Top Movies"
            name="agree"
          /> */}
                <br />
                <Button variant="contained" size="small" type="submit">
                    Add
                </Button>
            </form>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Congratulation</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Alert severity="success">
                            <AlertTitle>Adding successful!</AlertTitle>
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        component={Link}
                        to="/dashboard"
                        variant="contained"
                        disableElevation
                    >
                        Dashboard
                    </Button>
                    <Button autoFocus variant="contained" onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
