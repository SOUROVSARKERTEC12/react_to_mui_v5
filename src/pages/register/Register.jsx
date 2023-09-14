import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Register() {
    return (
        <Container>
            <Box ml={50} display="flex" justifyContent="center" alignItems="center" height="100vh" width="50vh">
                <Box>
                    <Typography variant="h3" color="primary" gutterBottom>
                        <b>Social Media</b>
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Connect with friends and the world around you on Social Media
                    </Typography>
                    <Box component="form" sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label="Username"
                            variant="outlined"
                            margin="normal"
                            placeholder="Username"
                        />
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
                        <TextField
                            fullWidth
                            label="Password Again"
                            variant="outlined"
                            margin="normal"
                            placeholder="Password Again"
                            type="password"
                        />
                        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                            Sign Up
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Log into Account
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
