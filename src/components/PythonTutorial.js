import { Paper, Box, Typography} from '@mui/material'
import React from 'react'

export default function PythonTutorial() {

    const tutorialSections = ["Variables", "Functions", "Conditionals"]

    return (
        <div>
            <Paper sx={{ backgroundColor: "lightblue", width: "70vw", height: "100vh", borderRadius: "16px" }}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mt: 5 }}
                >
                    <Typography align="center" variant="h5" color="black" sx={{ mt: 2 }}>
                        Python Tutorial
                    </Typography>
                </Box>
            </Paper>
        </div>
    )
}
