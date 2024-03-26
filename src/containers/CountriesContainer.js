import { useEffect, useState } from "react";
import CountriesList from "../components/CountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    const addVisitedCountries = (country) => {
        console.log(country)
        setVisitedCountries([...visitedCountries, country]);
        
      };

    useEffect(() => {
        loadCountries();
    }, []);

    return ( 
        <>
            <h1>Country Bucket List</h1>
            <CountriesList countries={countries} visitedCountries={visitedCountries} addVisitedCountries={addVisitedCountries} />
        </>
     );
}
 
export default CountriesContainer;