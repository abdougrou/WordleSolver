
import React, {Fragment} from 'react'
import './App.css';


import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Form from './Form'
import Draw from './Draw';

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

function App() {
  return (
    <Fragment>

    <Router>
    
      <AppBar  position="static" sx={{backgroundColor: 'primary', zIndex: 10}}>
        <Container>
          <Toolbar  sx={{alignItems: 'center', justifyContent: 'center'}}>
              <Button sx={{color: 'white'}} component={Link} to="/">
                  Type
              </Button>
              <Button sx={{color: 'white'}} component={Link} to="/draw">
                  Draw
              </Button>
              <Button sx={{color: 'white'}} component={Link} to="/speak" >
                  Speak
              </Button>
            </Toolbar>
          </Container>
      </AppBar>

      <Routes>
        <Route exact path="/" element={<Form/>} /> 
        <Route exact path="/draw" element={<Draw/>} /> 
        <Route exact path="/speak" element={<Form/>} /> 
      </Routes>

    </Router>

    </Fragment>
  );
}

export default App;
