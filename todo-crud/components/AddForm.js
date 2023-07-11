import * as React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { addTask } from '@/lib/helper';


const initialValues = {
    title: '',
    description: '',
}
const validate = values => {
    let error = {};
    if (!values.title)
        error.title = 'required value'
    if (!values.description)
        error.description = 'required value'

    return error;
}
const onSubmit = async (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();
    await addTask(values);
    // await new Promise((r) => setTimeout(r, 500));
    // alert(JSON.stringify(values, null, 2));
    
}
const defaultTheme = createTheme();
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

export default function FormF(props) {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });
    // console.log(props.theme," from form");
    const col=props.theme=='dark'?defaultTheme :darkTheme;
    return (
        <ThemeProvider theme={col} >

            <Container component="main" maxWidth="sm" className='dark:bg-black dark:text-white'>
                <CssBaseline />
                <Box
                    sx={{
                        mt: 8,
                        mb: 4,
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: 1,
                        borderRadius: '16px',
                        borderColor: 'primary.main'
                    }}
                >
                    <LoginIcon sx={{ m: 1}} />
                    <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
                        Add Task
                    </Typography>


                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <FormControl sx={{ width: '100%', mb: 2 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="outlined-basic"
                                label="Title"
                                variant="outlined"
                                name='title'
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.title} />
                            {formik.errors.title && formik.touched.title ? 
                            <div className='error'>{formik.errors.title}
                            </div> : null}
                        </FormControl>

                        <FormControl sx={{ width: '100%', mb: 2 }}>
                            <TextField
                                required
                                fullWidth
                                label="Description"
                                multiline
                                rows={7}
                                id='description'
                                name='description'
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            />
                            {formik.errors.description && formik.touched.description ? 
                            <div className='error'>{formik.errors.description}
                            </div> : null}
                        </FormControl>
                        <br />



                        {formik.values.title && formik.values.description ? 
                        <Button className='dark:text-white' sx={{
                            marginTop: 2,
                            mb: 5
                        }} fullWidth variant="outlined" type='submit'>
                            Submit
                        </Button> 
                        
                        : <Button className='dark:text-white' sx={{
                            marginTop: 2, 
                            mb: 5
                        }} fullWidth disabled>
                            Submit
                        </Button>}
                    
                    </Box>
                </Box>
            </Container>

         </ThemeProvider>

    );
}
