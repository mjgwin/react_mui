import React, { useState } from 'react'
import { Box } from '@mui/system'
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"
import {Link} from 'react-router-dom'
import Chad from './assets/chad.jpeg'

const pages = ["Home", "Tutorials", "Projects", "About"];

export default function Navbar() {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseMenu = (event) => {
        setAnchorElNav(null);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static" sx={{borderRadius: '16px'}}>
                    <Toolbar>
                        <Typography noWrap component="div"
                            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
                            <img src={Chad} style={{ width: 60, height: 40 }} alt="CHAD" />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} component={Link} to={page === "Home" ? "/" : `/${page}`} onClick={handleCloseMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    component={Link}
                                    to={page === "Home" ? "/" : `/${page}`}
                                    onClick={handleCloseMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
