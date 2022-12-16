import React from 'react'
import { Box, Button, Menu, MenuItem, Paper, Stack, Typography, ListItemText } from '@mui/material'
import BGImage from './assets/background2.jpg'
import PythonTutorial from './PythonTutorial';
import JavaTutorial from './JavaTutorial';
import JSTutorial from './JSTutorial';

export default function Tutorials() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [component, setComponent] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (component) => {
        setAnchorEl(null);
        setComponent(component);
    };

    return (
        <div>
            <Paper sx={{ backgroundImage: `url(${BGImage})`, backgroundRepeat: 'repeat-y', backgroundSize: "cover", height: '200vh', borderRadius: '16px' }}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack spacing={6}>
                        <Typography align="center" variant="h4" color="lightcoral" sx={{ mt: 3 }}>
                            Coding Tutorials
                        </Typography>
                        <Button onClick={handleClick} variant="contained" color="primary"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Typography align="center" variant="h6">
                                Select Coding Language
                            </Typography>
                        </Button>
                        <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose("none")}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                            PaperProps={{ sx: { width: '150px', backgroundColor: "lightblue" } }}
                        >
                            <MenuItem onClick={() => handleClose("python")}>
                                <ListItemText style={{ textAlign: "center" }}>Python</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => handleClose("java")}>
                                <ListItemText style={{ textAlign: "center" }}>Java</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => handleClose("js")}>
                                <ListItemText style={{ textAlign: "center" }}>Javascript</ListItemText>
                            </MenuItem>
                        </Menu>

                    </Stack>

                </Box>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mt: 5 }}
                >
                    {component === "python" ? <PythonTutorial /> :
                        component === "java" ? <JavaTutorial /> :
                            component === "js" ? <JSTutorial /> : null}
                </Box>
            </Paper>
        </div>
    )
}
