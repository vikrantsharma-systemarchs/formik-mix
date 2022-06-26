import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({

    firstname: yup
        .string('Enter your First name')
        .required('First Name is required'),

    lastname: yup
        .string('Enter your Last name')
        .required('Last Name is required'),

    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),

    password1: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),

    password2: yup
        .string()
        .oneOf([yup.ref('password1'),null],'Password must match')



});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        console.log('open');
        setOpen(true);
    };
    const handleClose = () => {
        console.log('close');
        setOpen(false);
    };
    const formik = useFormik({
        initialValues: {
           firstname: 'John',
            lastname: 'Smith',
            email: 'foobar@example.com',
            password1: '',
            password2: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            const result=  fetch("http://localhost:4000/user",{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values, null, 2)
            } );


            console.log(JSON.stringify(result.toString(), null, 2));

         },
    });

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Register
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Register  Here
                </BootstrapDialogTitle>
                <DialogContent dividers>

                    <form onSubmit={formik.handleSubmit}>


                        <TextField
                            fullWidth
                            id="firstname"
                            name="firstname"
                            label="First Name"
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                            helperText={formik.touched.firstname && formik.errors.firstname}
                            margin={'normal'}
                            required={true}
                        />
                        <TextField
                            fullWidth
                            id="lastname"
                            name="lastname"
                            label="Last Name"
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                            helperText={formik.touched.lastname && formik.errors.lastname}
                            margin={'normal'}
                            required={true}
                        />

                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            margin={'normal'}
                            required={true}
                        />

                        <TextField
                            fullWidth
                            id="password1"
                            name="password1"
                            label="Enter Password"
                            type="password"
                            value={formik.values.password1}
                            onChange={formik.handleChange}
                            error={formik.touched.password1 && Boolean(formik.errors.password1)}
                            helperText={formik.touched.password1 && formik.errors.password1}
                            margin={'normal'}
                            required={true}
                        />
                        <TextField
                            fullWidth
                            id="password2"
                            name="password2"
                            label="Confirm Password"
                            type="password"
                            value={formik.values.password2}
                            onChange={formik.handleChange}
                            error={formik.touched.password2 && Boolean(formik.errors.password2)}
                            helperText={formik.touched.password2 && formik.errors.password2}
                            margin={'normal'}
                            required={true}
                        />

                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>
                    </form>



                    <Typography gutterBottom>
                    </Typography>



                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
