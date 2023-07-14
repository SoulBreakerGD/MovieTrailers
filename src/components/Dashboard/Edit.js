import { React, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useParams } from "react-router-dom";
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

export default function Edit() {
    const [open, setOpen] = useState(false);
    const { id } = useParams();
    const filmID = id;
    const baseURL = `https://64b05cf2c60b8f941af5a00a.mockapi.io/Films/${filmID}`;
    const [film, setFilm] = useState({});
    useEffect(() => {
        fetch(baseURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setFilm(data);
            })
            .catch((error) => console.log(error.message));
    }, [baseURL]);
    
    const formik = useFormik({
        initialValues: {
            name: `${film.name}`,
            img: `${film.img}`,
            info: `${film.info}`,
            clip: `${film.clip}`,
            // top: false,
        },
        enableReinitialize: true,

        onSubmit: (values) => {
            fetch(baseURL, {
                method: "PUT",
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
                <br/>
                Name:
                <TextField
                    autoFocus
                    margin="dense"
                    name="name"
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
                <br/><br/><br/>
                URL of image:
                <TextField
                    margin="dense"
                    name="img"
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
                <br/><br/><br/>
                Trailer: 
                <TextField
                    margin="dense"
                    name="clip"
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
                <br/><br/><br/>
                Information:
                <TextField
                    multiline
                    rows={2}
                    margin="dense"
                    name="info"
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
                <br/><br/>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="contained" type="submit">
                        Update
                    </Button>
                </div>
                
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
                            <AlertTitle>Updating successful!</AlertTitle>
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
