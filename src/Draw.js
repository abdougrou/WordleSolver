
import React, {useEffect, useState, Fragment, useRef} from 'react'

import {useLocation} from 'react-router-dom';

//import vision from '@google-cloud/vision';
//import vision from "react-cloud-vision-api";
// import axios from 'axios'

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

let Draw = (props) => {

    // vision.init({ auth: 'api -key'})
    const location = useLocation()

    const [draw1, setDraw1] = useState(false)
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


    const canvasRef1 = useRef(null)
    const canvasRef2 = useRef(null)
    const canvasRef3 = useRef(null)
    const canvasRef4 = useRef(null)
    const canvasRef5 = useRef(null)

    const contextRef1 = useRef(null)
    const contextRef2 = useRef(null)
    const contextRef3 = useRef(null)
    const contextRef4 = useRef(null)
    const contextRef5 = useRef(null)

    useEffect(() => {

    
        let canvas1 = canvasRef1.current
        let context1 = canvas1.getContext("2d")
        context1.scale(2,2)
        context1.lineCap = "round"
        context1.strokeStyle ="blue"
        context1.lineWidth = 5
        contextRef1.current = context1

        let canvas2 = canvasRef2.current
        let context2 = canvas2.getContext("2d")
        context2.scale(2,2)
        context2.lineCap = "round"
        context2.strokeStyle ="blue"
        context2.lineWidth = 5
        contextRef2.current = context2

        let canvas3 = canvasRef3.current
        let context3 = canvas3.getContext("2d")
        context3.scale(2,2)
        context3.lineCap = "round"
        context3.strokeStyle ="blue"
        context3.lineWidth = 5
        contextRef3.current = context3

        let canvas4 = canvasRef4.current
        let context4 = canvas4.getContext("2d")
        context4.scale(2,2)
        context4.lineCap = "round"
        context4.strokeStyle ="blue"
        context4.lineWidth = 5
        contextRef4.current = context4

        let canvas5 = canvasRef5.current
        let context5 = canvas5.getContext("2d")
        context5.scale(2,2)
        context5.lineCap = "round"
        context5.strokeStyle ="blue"
        context5.lineWidth = 5
        contextRef5.current = context5
        
       
    }, [])




    useEffect(() => {
        handleReset()
    }, [location])



    let startDrawing = ({nativeEvent}) => {
        setDraw1(true)
        const {offsetX, offsetY} = nativeEvent;
        let contextRef;
        if (nativeEvent.srcElement.id === 'id1'){
            contextRef = contextRef1
        } else if (nativeEvent.srcElement.id === "id2"){
            contextRef = contextRef2
        } else if (nativeEvent.srcElement.id === "id3"){
            contextRef = contextRef3
        } else if (nativeEvent.srcElement.id === "id4"){
            contextRef = contextRef4
        } else if (nativeEvent.srcElement.id === "id5"){
            contextRef = contextRef5
        }
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX, offsetY)


    }

    let finishDrawing = (event) => {

        let contextRef;
        if (event.target.id === 'id1'){
            contextRef = contextRef1
        } else if (event.target.id === "id2"){
            contextRef = contextRef2
        } else if (event.target.id === "id3"){
            contextRef = contextRef3
        } else if (event.target.id === "id4"){
            contextRef = contextRef4
        } else if (event.target.id === "id5"){
            contextRef = contextRef5
        }

        let c = document.getElementById(event.target.id)
        contextRef.current.closePath()
        let dataURL = c.toDataURL('image/png')
        console.log(dataURL)

        if (event.target.id === 'id1'){
            setFirstletter(dataURL)
        } else if (event.target.id === "id2"){
            setSecondletter(dataURL)
        } else if (event.target.id === "id3"){
            setThirdletter(dataURL)
        } else if (event.target.id === "id4"){
            setFourthletter(dataURL)
        } else if (event.target.id === "id5"){
            setFifthletter(dataURL)
        }



        fetch(`https://api.ocr.space/parse/imageurl?apikey=K84507537888957&url=https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`)
        .then((res) => {
            res.json()
        })
        .then((data) => {
            console.log(data)
        })
        // const req = new vision.Request({
        //     image: new vision.Image({
        //       base64: dataURL,
        //     }),
        //     features: [
        //       new vision.Feature('TEXT_DETECTION', 4),
        //     ]
        // })

  
 
        
        setDraw1(false)
    }

    let draw = ({nativeEvent}) => {
        if (draw1){
            const {offsetX, offsetY} = nativeEvent;
            let contextRef;
            if (nativeEvent.srcElement.id === 'id1'){
                contextRef = contextRef1
            } else if (nativeEvent.srcElement.id === "id2"){
                contextRef = contextRef2
            } else if (nativeEvent.srcElement.id === "id3"){
                contextRef = contextRef3
            } else if (nativeEvent.srcElement.id === "id4"){
                contextRef = contextRef4
            } else if (nativeEvent.srcElement.id === "id5"){
                contextRef = contextRef5
            }
            contextRef.current.lineTo(offsetX, offsetY)
            contextRef.current.stroke()
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
                                        <Box sx={{border: 'solid 1px black', mt: 2, borderRadius: 2, mx: 2, width: 90, height: 90}}>
                                        <canvas 
                                            id="id1" 
                                            style={{width: 100, height: 90}}
                                            onMouseDown={startDrawing}
                                            onMouseUp={finishDrawing}
                                            onMouseMove={draw}
                                            ref={canvasRef1}
                                        ></canvas>
                                        </Box>
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
                                        <Box sx={{border: 'solid 1px black', mt: 2, borderRadius: 2, mx: 2}}>
                                        <canvas 
                                            id="id2" 
                                            style={{width: 100, height: 90}}
                                            onMouseDown={startDrawing}
                                            onMouseUp={finishDrawing}
                                            onMouseMove={draw}
                                            ref={canvasRef2}
                                        ></canvas>
                                        </Box>
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
                                        <Box sx={{border: 'solid 1px black', mt: 2, borderRadius: 2, mx: 2}}>
                                        <canvas 
                                            id="id3" 
                                            style={{width: 100, height: 90}}
                                            onMouseDown={startDrawing}
                                            onMouseUp={finishDrawing}
                                            onMouseMove={draw}
                                            ref={canvasRef3}
                                        ></canvas>
                                        </Box>
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
                                        <Box sx={{border: 'solid 1px black', mt: 2, borderRadius: 2, mx: 2}}>
                                        <canvas 
                                            id="id4" 
                                            style={{width: 100, height: 90}}
                                            onMouseDown={startDrawing}
                                            onMouseUp={finishDrawing}
                                            onMouseMove={draw}
                                            ref={canvasRef4}
                                        ></canvas>
                                        </Box>
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
                                        <Box sx={{border: 'solid 1px black', mt: 2, borderRadius: 2, mx: 2}}>
                                        <canvas 
                                            id="id5" 
                                            style={{width: 100, height: 90}}
                                            onMouseDown={startDrawing}
                                            onMouseUp={finishDrawing}
                                            onMouseMove={draw}
                                            ref={canvasRef5}
                                        ></canvas>
                                        </Box>
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

export default Draw;