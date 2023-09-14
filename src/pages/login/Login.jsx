import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
    return (
        <Container>
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Box>
                    <Typography variant="h1" color="primary" gutterBottom>
                       <b>Social Media</b>
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Connect with friends and the world around you on Social Media
                    </Typography>
                    <Box component="form" sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            placeholder="Email"
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            placeholder="Password"
                            type="password"
                        />
                        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                            Log In
                        </Button>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            <a href="#" className="loginForgot">
                                Forgot Password?
                            </a>
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Create a New Account
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
