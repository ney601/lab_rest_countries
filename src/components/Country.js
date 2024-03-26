const Country = ({country, addVisitedCountries}) => {

    return ( 
        <>
            <li>
                {country.name.common} {country.flag}
                <p>Capital: {country.capital}</p>
                <p>
                    <a href={country.maps.googleMaps}>Google Maps</a>
                </p>
            </li>
      
      <button onClick={() => addVisitedCountries(country)}> Visited </button>
   
    </>
     );
}
 
export default Country;
