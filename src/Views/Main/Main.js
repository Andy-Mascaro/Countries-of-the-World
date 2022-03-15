import React from 'react';
import { useEffect, useState} from 'react';
import { fetchCountries } from '../../services/Country';
import './Main.css';
import CountryCard from '../../Components/CountryCard/CountryCard';

export default function Main() {
 (
    
    const [setCountry] = useState([]);

    useEffect(() => {
        const fetch = async () => {
        const resp = await fetchCountries();
        setCountry(resp);
        };
        fetch();
    }, []);

    return (
        div className="main">main
          {CountryCard.map((item) => (
          <CountryCard  key={name.id} name={name.name} iso2={iso.iso}
         
        </div>
    )
    })

    
  );
}
