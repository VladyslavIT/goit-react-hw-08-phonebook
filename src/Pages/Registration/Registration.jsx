import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useUserSignupMutation } from 'redux/auth/authApi';
import { useState } from 'react';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link
        color="inherit"
        href="https://github.com/VladyslavIT"
        target="_blank"
      >
        VladyslavIT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Registration() {
  const [createUser] = useUserSignupMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      name,
      email,
      password
    };
    createUser(newUser);
    reset();
  };
  const inputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'firstName':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
       case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
    const reset = () => {
    setName('');
      setEmail('');
      setPassword('');
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component="h1" variant="h5">
            Registration
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={inputChange}
                  value={name}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
            
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  onChange={inputChange}
                  value={email}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  helperText='Email must contain @gmail.com'
                  inputProps={{ className: 'input', pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+$" }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  onChange={inputChange}
                  value={password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  helperText='Password must be at least 7 characters'
                  inputProps={{ className: 'input', pattern: "{7,20}" }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <NavLink to="/login" variant="body2">
                  Already have an account? Login
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};


