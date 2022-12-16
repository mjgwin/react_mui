import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme  } from '@mui/material/styles'
import Tutorials from './components/Tutorials'

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    }
  }
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={themeDark}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          

        </Routes>
      </ThemeProvider>

    </div>
  )
}

export default App
