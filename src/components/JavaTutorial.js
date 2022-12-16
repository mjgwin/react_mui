import React from 'react'
import { Paper, Box, Typography } from '@mui/material'

export default function JavaTutorial() {
    return (
        <div>
            <Paper sx={{ backgroundColor: "lightblue", width: "70vw", height: "100vh", borderRadius: "16px"}}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mt: 5 }}
                >
                    <Typography align="center" variant="h5" color="black" sx={{ mt: 2 }}>
                        Java Tutorial
                    </Typography>
                    
                </Box>
            </Paper>
        </div>
    )
}
