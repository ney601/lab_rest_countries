import Country from "./Country";

const CountriesList = ({countries, visitedCountries, addVisitedCountries}) => {

    const mappedCountries = countries.map(country => {
        return <Country 
            country={country} 
            key={country.id}
            addVisitedCountries={addVisitedCountries} 
            />
    });

    const mappedVisitedCountries = visitedCountries.map(visitedCountry => {
        return <Country
            country={visitedCountry} 
            key={visitedCountries.id}
            addVisitedCountries={addVisitedCountries}
            />
    });

    return ( 
        <>
       
            <h2 id="countries-to-visit">Countries To Visit</h2>
            {mappedCountries}
        
            <h2 id="visited-countries">Visited Countries</h2>
            {mappedVisitedCountries}
       
        </>
     );
}
 
export default CountriesList;