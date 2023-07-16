
import * as React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
// import { useFormik } from 'formik'
import {  getTasks,editTask } from '@/lib/helper';
import { useState,useEffect } from 'react';

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

const defaultTheme = createTheme();
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

export default function UpdateForm(props) {
    const onSubmit = async (values, e) => {
        console.log(values);
        await editTask(id, values);
        e.preventDefault();
    }

    const col=props.theme=='dark'?defaultTheme :darkTheme;


    const [task, setTask] = useState(initialValues);
    const { title,description } = task;
    // formik.title=title;
    // formik.description=description;
    const id  = props.id;
    
    // let navigate = useNavigate();

    useEffect(() => {
        loadTaskDetails();
    }, []);

    const loadTaskDetails = async() => {
        const response = await getTasks(id);
        setTask(response.data);
    }

    const editTaskDetails = async(e) => {
        console.log(task);
        e.preventDefault();
        // const response = await editTask(id, task);
        // navigate('/all');
    }

    const onValueChange = (e) => {
        // console.log(e.target.value);
        setTask({...task, [e.target.name]: e.target.value})
    }


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


                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <FormControl sx={{ width: '100%', mb: 2 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="outlined-basic"
                                label="Title"
                                variant="outlined"
                                name='title'
                                onChange={onValueChange}
                                value={title} />
                            {title ? 
                            <div className='error'>required
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
                                onChange={onValueChange}
                                value={description}
                            />
                            {description  ? 
                            <div className='error'>required
                            </div> : null}
                        </FormControl>
                        <br />



                        {title && description ? 
                        <Button className='dark:text-white' sx={{
                            marginTop: 2,
                            mb: 5
                        }} fullWidth variant="outlined" type='submit' onClick={async() =>await editTask(id, task)}>
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