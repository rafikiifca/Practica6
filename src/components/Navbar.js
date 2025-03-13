import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";


function MenuIcon() {
    return null;
}

const Navbar = ()=>{
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;