const Country = ({country, addVisitedCountries}) => {

    return ( 
        <>
            <li>
                {country.name.common} 
                <p>{country.capital}</p>
            </li>
      
      <button onClick={() => addVisitedCountries(country)}> Visited </button>
   
    </>
     );
}
 
export default Country;
