/* eslint-disable no-implied-eval */
/* eslint-disable array-callback-return */
import './services-mobile.css';
import * as Papa from 'papaparse';
import { useState } from 'react';
import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community'; 
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import indiana from '../indiana-prices.png'
import michigan from '../michigan-prices.png'

ModuleRegistry.registerModules([AllCommunityModule]);

const csvFilePath = './fees.csv';

const gridTheme = themeQuartz.withParams({
    headerHeight: '70px',
    overflowWrap: 'normal',
    headerTextColor: '#9b7278ff',
    headerBackgroundColor: 'lightpink',
    headerCellHoverBackgroundColor: '#d0b6ffff',
    headerCellMovingBackgroundColor: '#9280b3ff',
    fontFamily: "Bellota Text",
    fontSize: 'large'
});

const buttonTheme = createTheme({
  palette: {
    primary: {
        main: '#2F2E2EFE',
        contrastText: 'aquamarine',
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
                backgroundColor: 'aquamarine',
                color: '#2F2E2EFE',
            },
        }),
      },
    },
  },
});

const ServicesMobile = () => {
    const [indianaFees, setIndianaFees] = useState([]);
    const [michiganFees, setMichiganFees] = useState([]);
    const [columns, setColumns] = useState([]);
        if(indianaFees.length === 0){
            fetch( csvFilePath )
                .then( response => response.text() )
                .then( responseText => { var data = Papa.parse(responseText);
                    var state = 0;
                    var cols = [];
                    var parsedIFees = [];
                    var parsedMFees = [];
                    data.data.map((fee) => {
                        if(fee[0] === "City") {
                            fee.map((c) => {
                                var width = 130;
                                if(c === "City"){
                                    width = 175
                                }
                                cols.push({field: c, width:width, headerClass:"grid-header"})
                            });
                        }
                        else if(fee[0] === "Indiana"){
                            state = 1;
                        }
                        else if(fee[0] === "Michigan"){
                            state = 2;
                        }
                        else{
                            var currentfee = {
                                    "City": `${fee[0]}`,
                                    "Just Make it Legal": `${fee[1]}`,
                                    "Simple and Sweet": `${fee[2]}`,
                                    "Love Story": `${fee[3]}`,
                                    "Rehearsal": `+${fee[4]}`
                                }
                            if(state === 1){
                                parsedIFees.push(currentfee)
                            } else if (state === 2){
                                parsedMFees.push(currentfee)
                            }
                        }
                    })
                    console.log(cols);
                    console.log(parsedIFees);
                    console.log(parsedMFees);
                    setColumns(cols);
                    setIndianaFees(parsedIFees);
                    setMichiganFees(parsedMFees);
        })
        }
        
    return(
        <div className="services-page-mobile">
            <div className="services-container-mobile">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Bellota+Text:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=DM+Serif+Text:ital@0;1&family=MonteCarlo&display=swap');
                </style>
                <div className="services-text-mobile">
                    <div className="services-offered-mobile">
                        <h1>SERVICES OFFERED</h1>
                    </div>
                    <div>
                        <h2>All Services Include</h2>
                        <ul>
                            <li>
                                Unlimited phone calls and messaging
                            </li>
                            <li>
                                Arrival 15-30 minutes prior to the ceremony 
                            </li>
                            <li>
                                Signing and Mailing of your Marriage License to the county clerk
                            </li>
                            <li>
                                Back up officiant in case of an emergency
                            </li>
                            <li>
                                Recommended Vendor List (if applicable)
                            </li>
                        </ul>
                    </div>
                    <div className="services-body-mobile">
                        <div className="service-mobile legal">
                            <h3 className="service-header-mobile"><u>Just Make it Legal</u></h3>
                            <ul className="list-mobile">
                                <li>
                                    License signing only service
                                </li>
                            </ul>
                        </div>
                        <br/>
                        <div className="service-mobile simple">
                            <h3 className="service-header-mobile"><u>"Simple and Sweet" Elopement or Mini-Ceremony</u></h3>
                            <ul className="list-mobile">
                                <li>
                                    7 - 10 minute simple ceremony​
                                </li>
                                <li>
                                    couples choose from either a religious or civil worded ceremony that is pre-written
                                </li>
                                <ul>
                                    <li>
                                        standard ceremony format:
                                    </li>
                                    <ul>
                                        <li>welcome</li>
                                        <li>declaration of intent to marry</li>
                                        <li>exchange of vows</li>
                                        <li>exchange of rings</li>
                                        <li>pronouncement</li>
                                    </ul>
                                </ul>
                                <li>
                                    A perfect solution for those intimate services with the couple and just a few guests but available to all!
                                </li>
                                <li>
                                    <b>Simple service does not mean boring!</b>  This will still be a beautiful service.
                                </li>
                            </ul>
                        </div>
                        <br/>
                        <div className="service-mobile story">
                            <h3 className="service-header-mobile"><u>"Our Love Story" Custom Ceremony</u></h3>
                            <ul className="list-mobile">
                                <li>
                                    We'll work together to develop the perfect ceremony for your special day.
                                </li>
                                <li>
                                    Consultation to gather details on your relationship and vision
                                </li>
                                <li>
                                    Fully customized ceremony including unlimited script revisions, that speaks of your personal love story
                                </li>
                                <li>
                                    Unity elements can be added
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h3>Rehearsal add-on available!</h3>
                </div>
                <div className="grids-container-mobile">
                    <div className="title-mobile">
                        Indiana
                    </div>
                    <div className="services-grid-indiana-mobile">
                        <a href={indiana} download="love-and-hope-co-indiana-prices.png">Indiana Prices</a>
                    </div>
                    <div className="title-mobile">
                        Michigan
                    </div>
                    <div className="services-grid-michigan-mobile">
                        <a href={michigan} download="love-and-hope-co-michigan-prices.png">Michigan Prices</a>
                    </div>
                    (travel fees included)
                </div>
            </div>
            <div className="buttons-container-mobile">
                <ThemeProvider theme={buttonTheme}>
                    <div className="button-mobile">
                        <Button variant="contained"onClick={() => {setTimeout('window.location.href="https://www.honeybook.com/widget/with_love_hope_co_170915/cf_id/5ff36b6e33d8122c4fc60535"', 0)}}>Ready to book your service?</Button>
                    </div>
                    <div className="button-mobile">
                        <Link to="/contact">
                            <Button variant="contained" className="button-mobile">Need additional info?</Button>
                        </Link>
                    </div>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default ServicesMobile;