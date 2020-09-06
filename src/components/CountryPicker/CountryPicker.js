import React, {useState, useEffect} from 'react';
import './countrypicker-style.css'
import {NativeSelect, FormControl} from '@material-ui/core'
// import {countryData} from '../../api'

const CountryPicker = ({handleCountryChange}) => {
    const [countrys, setCountrys] = useState([])
    useEffect(() => {
       fetch('https://covid19.mathdro.id/api/countries')
       .then(res => res.json())
       .then(data => setCountrys(data.countries))


    }, [setCountrys])
    // console.log(countrys.map(con => con.name))
    return (
        <div className="country-container">
            <h1>Pick Country</h1>
            <FormControl >
                <NativeSelect defaultValue="" onClick={ (e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>

                    {
                      countrys.map((country, i )=> <option key={i} value={country.name}>{country.name}</option>)
                    }
                    
                </NativeSelect>
            </FormControl>

        </div>
    );
};

export default CountryPicker;