
import React, {useEffect, useState, Fragment} from 'react'

import {useLocation} from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'

import dictionary from './words.js'

let Form = (props) => {

    const location = useLocation()

    let [loading, setLoading] = useState(false)
    let [results, setResults] = useState(false)
    let [matches, setMatches] = useState([])


    let [firstletter, setFirstletter] = useState('')
    let [firstlettercheck, setFirstlettercheck] = useState(false)

    let [secondletter, setSecondletter] = useState('')
    let [secondlettercheck, setSecondlettercheck] = useState(false)

    let [thirdletter, setThirdletter] = useState('')
    let [thirdlettercheck, setThirdlettercheck] = useState(false)

    let [fourthletter, setFourthletter] = useState('')
    let [fourthlettercheck, setFourthlettercheck] = useState(false)

    let [fifthletter, setFifthletter] = useState('')
    let [fifthlettercheck, setFifthlettercheck] = useState(false)

    useEffect(() => {
        handleReset()
    }, [location])


    let handleChange = (event) => {
        if (event.target.name === "firstletter") {
            setFirstletter(event.target.value.toUpperCase())
        } else if (event.target.name === "secondletter"){
            setSecondletter(event.target.value.toUpperCase())
        } else if (event.target.name === "thirdletter"){
            setThirdletter(event.target.value.toUpperCase())
        } else if (event.target.name === "fourthletter"){
            setFourthletter(event.target.value.toUpperCase())
        } else if (event.target.name === "fifthletter"){
            setFifthletter(event.target.value.toUpperCase())
        } 
    }
    
    let handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        let letters = []

        if (firstletter !== "") letters.push([firstletter.toLowerCase(), firstlettercheck])
        else if (firstletter === "") letters.push(["", false])

        if (secondletter !== "") letters.push([secondletter.toLowerCase(), secondlettercheck])
        else if (secondletter === "") letters.push(["", false])

        if (thirdletter !== "") letters.push([thirdletter.toLowerCase(), thirdlettercheck])
        else if (thirdletter === "") letters.push(["", false])

        if (fourthletter !== "") letters.push([fourthletter.toLowerCase(), fourthlettercheck])
        else if (fourthletter === "") letters.push(["", false])

        if (fifthletter !== "") letters.push([fifthletter.toLowerCase(), fifthlettercheck])
        else if (fifthletter === "") letters.push(["", false])

        
        console.log(letters)
        getMatches(letters)
    }


    let getMatches = (letters) => {
        let list = dictionary;
        for ( let i = 0; i < 5; i++) {
            // Letter
            if(letters[i][1] && letters[i][0] !== "") {
                list = list.filter(element => element.charAt(i) === letters[i][0]) // right place
               
            } else if (!letters[i][1] && letters[i][0] !== "") {
                list = list.filter(element => {
                    return element.charAt(i).toLowerCase() !== letters[i][0] && element.includes(letters[i][0])
                }) // wrong place
            }
        }
  

        setMatches(list.splice(0, list.length/2))
        setLoading(false)
        setResults(true)
        
    }

    let handleReset = () => {

        setFirstletter('')
        setFirstlettercheck(false)    
        setSecondletter('')
        setSecondlettercheck(false)
        setThirdletter('')
        setThirdlettercheck(false)
        setFourthletter('')
        setFourthlettercheck(false)
        setFifthletter('')
        setFifthlettercheck(false)
        setResults(false)
        setMatches([])
        setLoading(false)
  
    }

    return (
        <Fragment>
        <Grid container component="main" sx={{ height: '90vh'}}
            alignItems="center"
            justifyContent={'center'}
        >

            <Grid item xs={12} sm={10} md={10} lg={8} component={Paper} elevation={6}  >
                <Box
                    sx={{
                    my: 8,                   
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    {/* <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOpenOutlinedIcon />
                    </Avatar> */}
                    <Typography component="h1" variant="h5" color='inherit' sx={{fontWeight: 800}}>
                        Wordle Resolver
                    </Typography>

                    {  !results ? (

                        <Box component="form" noValidate  sx={{ m: 5 }}
                            onSubmit={handleSubmit}
                        >
                            <Grid
                            direction="row"
                            container
                            alignItems="center"
                            justifyContent={'center'}
                            spacing={2}
                            >
                                <Grid 
                                    item
                                    alignItems="center"
                                    justifyContent={'center'}
                                    container
                                    direction="column"
                                    xs={6} sm={2}
                                >
                                    <Grid item>
                                    <Typography
                                        textAlign={'center'}
                                        variant="body1"
                                        sx={{fontWeight: 700}}
                                    >
                                        Letter 1
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                    <TextField
                                        margin="normal"
                                        id="firstletter"
                                        InputProps={{
                                            sx: {
                                                fontWeight: 800, 
                                                fontSize: 25, 
                                                borderRadius: 3,
                                                width: 60, 
                                                height: 60
                                            }
                                        }}
                                        name="firstletter"
                                        inputProps={{ maxLength: 1 }}
                                        onChange={handleChange}
                                        value={firstletter}
                                    />
                                    </Grid>
                                    <Grid item>
                                    <Typography
                                        sx={{mt: 2, px: 2}}
                                        textAlign={'center'}
                                        variant="body2"
                                    >
                                        Right place
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                    <Checkbox 
                                        checked={firstlettercheck}
                                        onChange={e => {
                                                setFirstlettercheck(!firstlettercheck)
                                            }
                                        } 
                                    />
                                    </Grid>    
                                </Grid>
                                <Grid 
                                    item
                                    alignItems="center"
                                    justifyContent={'center'}
                                    container
                                    direction="column"
                                    xs={6} sm={2}
                                >
                                    <Grid item>
                                    <Typography
                                        textAlign={'center'}
                                        variant="body1"
                                        sx={{fontWeight: 700}}
                                    >
                                        Letter 2
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                    <TextField
                                        margin="normal"
                                        id="secondletter"
                                        InputProps={{
                                            sx: {
                                                fontWeight: 800, 
                                                fontSize: 25, 
                                                borderRadius: 3,
                                                width: 60, 
                                                height: 60
                                            }
                                        }}
                                        name="secondletter"
                                        inputProps={{ maxLength: 1 }}
                                        onChange={handleChange}
                                        value={secondletter}
                                    />
                                    </Grid>
                                    <Grid item>
                                    <Typography
                                        sx={{mt: 2, px: 2}}
                                        textAlign={'center'}
                                        variant="body2"
                                    >
                                        Right place
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                    <Checkbox 
                                        checked={secondlettercheck}
                                        onChange={e => {
                                                setSecondlettercheck(!secondlettercheck)
                                            }
                                        } 
                                    />
                                    </Grid>    
                                </Grid>
                                <Grid 
                                    item
                                    alignItems="center"
                                    justifyContent={'center'}
                                    container
                                    direction="column"
                                    xs={6} sm={2}
                                >
                                    <Grid item>
                                    <Typography
                                        textAlign={'center'}
                                        variant="body1"
                                        sx={{fontWeight: 700}}
                                    >
                                        Letter 3
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                    <TextField
                                        margin="normal"
                                        id="thirdletter"
                                        InputProps={{
                                            sx: {
                                                fontWeight: 800, 
                                                fontSize: 25, 
                                                borderRadius: 3,
                                                width: 60, 
                                                height: 60
                                            }
                                        }}
                                        name="thirdletter"
                                        inputProps={{ maxLength: 1 }}
                                        onChange={handleChange}
                                        value={thirdletter}
                                    />
                                    </Grid>
                                    <Grid item>
                                    <Typography
                                        sx={{mt: 2, px: 2}}
                                        textAlign={'center'}
                                        variant="body2"
                                    >
                                        Right place
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                    <Checkbox 
                                        checked={thirdlettercheck}
                                        onChange={e => {
                                                setThirdlettercheck(!thirdlettercheck)
                                            }
                                        } 
                                    />
                                    </Grid>    
                                </Grid>
                                <Grid 
                                    item
                                    alignItems="center"
                                    justifyContent={'center'}
                                    container
                                    direction="column"
                                    xs={6} sm={2}
                                >
                                    <Grid item>
                                    <Typography
                                        textAlign={'center'}
                                        variant="body1"
                                        sx={{fontWeight: 700}}
                                    >
                                        Letter 4
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                    <TextField
                                        margin="normal"
                                        id="fourthletter"
                                        InputProps={{
                                            sx: {
                                                fontWeight: 800, 
                                                fontSize: 25, 
                                                borderRadius: 3,
                                                width: 60, 
                                                height: 60
                                            }
                                        }}
                                        name="fourthletter"
                                        inputProps={{ maxLength: 1 }}
                                        onChange={handleChange}
                                        value={fourthletter}
                                    />
                                    </Grid>
                                    <Grid item>
                                    <Typography
                                        sx={{mt: 2, px: 2}}
                                        textAlign={'center'}
                                        variant="body2"
                                    >
                                        Right place
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                    <Checkbox 
                                        checked={fourthlettercheck}
                                        onChange={e => {
                                                setFourthlettercheck(!fourthlettercheck)
                                            }
                                        } 
                                    />
                                    </Grid>    
                                </Grid>
                                <Grid 
                                    item
                                    alignItems="center"
                                    justifyContent={'center'}
                                    container
                                    direction="column"
                                    xs={6} sm={2}
                                >
                                    <Grid item>
                                    <Typography
                                        textAlign={'center'}
                                        variant="body1"
                                        sx={{fontWeight: 700}}
                                    >
                                        Letter 5
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                    <TextField
                                        margin="normal"
                                        id="fifthletter"
                                        InputProps={{
                                            sx: {
                                                fontWeight: 800, 
                                                fontSize: 25, 
                                                borderRadius: 3,
                                                width: 60, 
                                                height: 60
                                            }
                                        }}
                                        name="fifthletter"
                                        inputProps={{ maxLength: 1 }}
                                        onChange={handleChange}
                                        value={fifthletter}
                                    />
                                    </Grid>
                                    <Grid item>
                                    <Typography
                                        sx={{mt: 2, px: 2}}
                                        textAlign={'center'}
                                        variant="body2"
                                    >
                                        Right place
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                    <Checkbox 
                                        checked={fifthlettercheck}
                                        onChange={e => {
                                                setFifthlettercheck(!fifthlettercheck)
                                            }
                                        } 
                                    />
                                    </Grid>    
                                </Grid>
                            </Grid>

                        
                            <Button
                                type="submit"
                                fullWidth
                            
                                variant="contained"
                                sx={{ mt: 3, mb: 2,}}
                                
                            >
                            {loading ? 
                                (<CircularProgress size={30}  sx={{color: 'white'}}/>): (
                                    <Typography variant="body1" >
                                        See Possible Answers
                                    </Typography>
                                )
                            }

                            </Button>
                        
                
                        </Box>




                    ): (
                        <Fragment>
                        <Box sx={{border: 'solid 1px black', px: '15%', mt: 3}} style={{height: 400, overflowY: 'scroll'}}>
                            <List>

                                {
                                    matches.length === 0 ?  (
                                        <ListItem >
                                            <ListItemText>
                                                <Typography variant="h6">
                                                    No word match
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    ): (
                                        <Fragment>
                                            {
                                                matches.map((element, i) => (
                                                    <ListItem key={i}>
                                                        <ListItemText>
                                                            <Typography variant="h6">
                                                                {element}
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                ))
                                            }
                                        </Fragment>
                                    )
                                }
                                
                            </List>

                            
                        </Box>

                        <Button
                            variant="contained"
                            sx={{ mt: 3, mb: 2,}}   
                            onClick={handleReset}
                            color="primary"
                            >
                            <Typography variant="body1" >
                                Try Again
                            </Typography>
                        </Button>
                        </Fragment>

                    )}

                    
                </Box>
            </Grid>
        </Grid>
        </Fragment>
    )
}

export default Form;