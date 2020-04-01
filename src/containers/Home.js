import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from "../containers/Header";
import Chart from "../containers/Chart";
import { useHistory } from "react-router";
import DATA from "../components/Data";


function Home() {

    let history = useHistory();

    // access the URL to get the country
    const[myCountry, setCountry] = useState('DO');

    // Axios
    useEffect(() => {
        axios
            .get(`${myCountry}`)
            .then(function(response) {
                console.log("response",response.config.url);
            })
            .catch(function(error) {
                console.log(error)
            })

    }, [myCountry]);

    // update Country in URL
    useEffect(() => {
        let searchParams = history.location.search;
        let urlParams = new URLSearchParams(searchParams);
        let myCountry = urlParams.get("country")

        if (urlParams.has("country")) {
            urlParams.set("country", `${myCountry}`)
            setCountry(myCountry);
        }

    }, [history]);


    // getting the arrays to access the data
    const dataArray = DATA.filter(item => item.myCode === myCountry)
    console.log("data", dataArray)
    const resultArray = dataArray.map(item => item.result)[0];
    console.log("result", resultArray);
    const speciesArray = resultArray.map(item => item.scientific_name);
    console.log("species", speciesArray);

    /* ---- ---- */


    const[species, setSpecies] = useState(speciesArray[0]);
    console.log("what is the species 1", speciesArray[0]);

    // update species in URL
    useEffect(() => {
        let searchParams2 = history.location.search;
        let urlParams2 = new URLSearchParams(searchParams2);
        let species = urlParams2.get("species")

        if (urlParams2.has("species")) {
            urlParams2.set("species", `${species}`);
            setSpecies(species);
        }
    }, [history]);

    console.log("what is the species 2", speciesArray[0]);

    const countryMap = dataArray[0].countryMap;
    console.log('history', history)

    return(
        <div>

            <div class="Introduction">
                <h1> Spring Break? </h1>
                <h3> For many college students, Spring Break serves as a time of relaxation from midterm exams and other assignments and to finally break away from the
                    last few weeks of winter. To fully rejuvenate, many countries with tropical environments and warm temperatures have become some of the hottest Spring Break
                    destinations. </h3>
                <h3>However, with the rise of tourism affecting the countries, <span> how are endangered species living in these countries impacted?</span></h3>
                
            </div>

            <Chart/>

            <div className="ContentWrapper">
                <div className="SpeciesList">
                    <Header/>
                    <div class="Listing">
                        <div class="MapSize"> 
                            <img src={countryMap} />
                        </div>
                        <h3> List of Endangered Species: </h3>
                        {speciesArray.map(item => <p> <a href = {`/?country=${myCountry}&species=${item}`}> {item} </a> </p>)}
                    </div>
                            
                </div>
                <div className="NarWrapper">
                    <iframe width="100%" height="100%" src={`https://en.wikipedia.org/wiki/Special:Search?search=${species}`}> </iframe>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
