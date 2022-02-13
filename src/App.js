
import React, {Fragment, useState} from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Form from './Form'
import Draw from './Draw';

import createTheme from '@mui/material/styles/createTheme';
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import LightModeIcon from '@mui/icons-material/LightMode';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThemeProvider from '@mui/material/styles/ThemeProvider';


// black: #333333
// white: white
// blue: #008ff0

export const light = {
  palette: {
    primary: {
      main: '#008ff0',
      contrastText: '#222b45',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#333333',
    },
    warning: {
      main: '#FFFFFF',
      contrastText: '#333333',
    },
    success: {
      main: '#008ff0',
    },
    background: {
      default: "#544A7D", 
    },
  }
}

// Dark Color Palette:
// black: #222b45
// #FFFFFF: #FFFFFF
// blue: #008ff0

export const dark = {
  palette: {
    primary: {
      main: '#222b45',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#222b45',
      contrastText: '#333333',
    },
    success: {
      main: '#FFFFFF',
    },
    background: {
      default: "#544A7D", 
    },
  },

}





function App() {

  const [theme, setTheme] = useState(false);
  const icon = theme ? <LightModeIcon sx={{ color: "secondary"}} /> : <AcUnitIcon sx={{ color: "secondary"}} />;
  let appliedTheme = createTheme(theme ? light : dark);
  appliedTheme = responsiveFontSizes(appliedTheme)

  let handleChange = () => {

    let root = document.getElementById("root")
    if (theme) {
      document.body.style.backgroundColor = "#222b45"
    } else {
      document.body.style.backgroundColor = "white"
    }

    setTheme(!theme)
  }

  return (
    <Fragment>
    <ThemeProvider theme={appliedTheme}>
    <Router>

      <Button 
        style={{borderRadius: 50, position: 'absolute', right: '0', top: '0', zIndex: 10, width: '30px', height: '50px', alignItems: 'center' }}
        onClick={handleChange}
        sx={{mt: 0.4, mr: 0}}
        color="secondary">
          {icon}
      </Button>
      <AppBar  position="static" sx={{backgroundColor: 'primary', zIndex: 10}}>
        <Container>
          <Toolbar sx={{alignItems: 'center', justifyContent: 'center'}}>
              <Button sx={{color: 'white'}} component={Link} to="/">
                <Typography variant="body1" sx={{fontWeight: 700}}>
                  Word, My World ❤️
                </Typography>
              </Button>
              {/* <Button sx={{color: 'white'}} component={Link} to="/draw">
                  Draw
              </Button>
              <Button sx={{color: 'white'}} component={Link} to="/speak" >
                  Speak
              </Button> */}
            </Toolbar>
          </Container>
      </AppBar>

      <Routes>
        <Route exact path="/" element={<Form/>} /> 
        {/* <Route exact path="/draw" element={<Draw/>} /> 
        <Route exact path="/speak" element={<Form/>} />  */}
      </Routes>

    </Router>
   </ThemeProvider>
    </Fragment>
  );
}

export default App;
