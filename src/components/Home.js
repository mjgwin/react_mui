import React from 'react'
import { Typography, Box, Paper } from '@mui/material'
import BGImage from './assets/background2.jpg'

export default function Home() {
    return (
        <div>
            <Paper sx={{backgroundImage: `url(${BGImage})`, backgroundRepeat: 'repeat-y', backgroundSize: "cover", height: '200vh', borderRadius: '16px'}}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    
                >
                    <Typography align="center" variant="h4" color="lightcoral" sx={{ mt: 3}}>
                        Welcome to MicahDev, A Portfolio Website and In-Progress Project!
                    </Typography>
                </Box>
            </Paper>
        </div>
    )
}
