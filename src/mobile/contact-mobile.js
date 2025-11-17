import './contact-mobile.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ContactMobile = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const passedInEmail = urlParams.get('email');
    const [county, setCounty] = React.useState('');
    const [state, setState] = React.useState('');
    const [type, setType] = React.useState('');
    const [email, setEmail] = React.useState(passedInEmail?passedInEmail:'');
    const [subject, setSubject] = React.useState('');
    const [body, setBody] = React.useState('');


    async function submit() {

        const url = "https://resend-loveandhope.withloveandhopeco.workers.dev/";

        const data = {
            email:email,
            state:state,
            county:county,
            type:type,
            subject:subject,
            body:body
        };

        try {
            const response = await fetch(url, {
            method: 'POST', // Specify the HTTP method as POST
            mode: 'no-cors',
            headers: {
                'content-type': 'application/json', // Indicate that the body is JSON
                'accept': 'application/json' // Indicate expected response type
            },
            body: JSON.stringify(data) // Convert the data object to a JSON string
            });

            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json(); // Parse the JSON response
            console.log('Success:', responseData);
        } catch (error) {
            console.error('Error during POST request:', error);
        }


        // Make a fetch request including `Upgrade: websocket` header.
        // The Workers Runtime will automatically handle other requirements
        // of the WebSocket protocol, like the Sec-WebSocket-Key header.
        
    }

    const handleCountyChange = (event) => {
        setCounty(event.target.value);
    };
    const handleStateChange = (event) => {
        setState(event.target.value);
        setCounty("");
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };
    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };
    const handleSubmit = () => {
        // websocket.send("MESSAGE");
        // websocket.close();
        console.log([email,state,county,type,subject,body]);
        submit();
    }


    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: theme.spacing(2),
            color: '#9b7278ff',
            '&:focus':{
                color: 'aquamarine',
            }
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: (theme.vars ?? theme).palette.background.paper,
            border: '1px solid #78c0b0ff',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: ['"Bellota Text", sans-serif'
            ].join(','),
            '&:focus': {
            borderRadius: 4,
            borderColor: 'aquamarine',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }));

    const buttonTheme = createTheme({
      palette: {
        primary: {
            main: '#9b7278ff',
            borderColor: '#9b7278ff'
        }
      },
      typography: {
        fontFamily: '"Bellota Text", sans-serif',
        fontWeightMedium: '700'
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: ({ theme }) => ({
                '&:hover': {
                    backgroundColor: '#9b7278ff',
                    color: '#FFFFFF',
                },
            }),
          },
        },
      },
    });

    return(
        <div className="contact-container">
		    <style>
                @import url('https://fonts.googleapis.com/css2?family=Bellota+Text:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=DM+Serif+Text:ital@0;1&family=MonteCarlo&display=swap');
            </style>
            <div className="contact-header">
                <h1><b>Send us a message!</b></h1>
            </div>
            <div className="contact-main-mobile">
                <div className="contact-top-component-mobile">
                    Your email
                    <input type="text" className="contact-input" value={email} onChange={handleEmailChange}/>
                </div>
                <div className="contact-top-component-mobile">
                    Subject
                    <input type="text" className="contact-input" value={subject} onChange={handleSubjectChange}/>
                </div>
                <div className="contact-top-component-mobile">
                            Which state are you contacting about?
                            <Box sx={{ minWidth: 120, paddingBottom:'2.5vh' }}>
                                <FormControl fullWidth variant="standard">
                                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={state}
                                    label="State"
                                    onChange={handleStateChange}
                                    input={<BootstrapInput />}
                                    >
                                    <MenuItem value={"Indiana"}>Indiana</MenuItem>
                                    <MenuItem value={"Michigan"}>Michigan</MenuItem>
                                    <MenuItem value={"Other"}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            {
                                (state==="Indiana")? 
                                    <div>
                                        Which county are you contacting about?
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth variant="standard">
                                                <InputLabel id="demo-simple-select-label">County</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={county}
                                                label="County"
                                                onChange={handleCountyChange}
                                                input={<BootstrapInput />}
                                                >
                                                <MenuItem value={"Allen"}>Allen</MenuItem>
                                                <MenuItem value={"Elkhart"}>Elkhart</MenuItem>
                                                <MenuItem value={"LaPorte"}>LaPorte</MenuItem>
                                                <MenuItem value={"Porter"}>Porter</MenuItem>
                                                <MenuItem value={"St. Joseph"}>St. Joseph</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div> 
                                : 
                                    (state==="Michigan")? 
                                        <div>
                                        Which county are you contacting about?
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth variant="standard">
                                                    <InputLabel id="demo-simple-select-label">County</InputLabel>
                                                    <Select
                                                    labelId="demo-customized-select-label"
                                                    id="demo-customized-select"
                                                    value={county}
                                                    label="County"
                                                    onChange={handleCountyChange}
                                                    input={<BootstrapInput />}
                                                    >
                                                    <MenuItem value={"Calhoun"}>Calhoun</MenuItem>
                                                    <MenuItem value={"Kalamazoo"}>Kalamazoo</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div> 
                                    : 
                                        <></>
                            }
                            
                </div>
                <div className="contact-top-component-mobile">
                    <div className="package-text-mobile">
                        Which <a href="/services" className="services-link-mobile"> wedding package </a> are you
                    </div>
                    <div className="package-text-mobile">
                        contacting about?
                    </div>
                    <Box sx={{ minWidth: 120, paddingBottom:'2.5vh' }}>
                        <FormControl fullWidth variant="standard">
                            <InputLabel id="demo-simple-select-label">Wedding Package</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Package"
                            onChange={handleTypeChange}
                            input={<BootstrapInput />}
                            >
                            <MenuItem value={"Just Make It Legal"}>Just Make It Legal</MenuItem>
                            <MenuItem value={"Simple and Sweet"}>Simple and Sweet</MenuItem>
                            <MenuItem value={"Our Love Story"}>Our Love Story</MenuItem>
                            <MenuItem value={"Other"}>Other/Unsure</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className="contact-info message-body-mobile">
                    Message
                    <textarea className="contact-input body-input-mobile"  value={body} onChange={handleBodyChange}/>
                </div>
                <div className="submit-button">
                    <ThemeProvider theme={buttonTheme}>
                        <Button variant='outlined' onClick={handleSubmit}>
                            SUBMIT
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
	    </div>
	);
}

export default ContactMobile;