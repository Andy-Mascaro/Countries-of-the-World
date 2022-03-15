import React from 'react';
import { useEffect, useState} from 'react/cjs/react.production.min';
import './Main.css';

export default function Main() {
  return (
    
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fetch = async () => {
        const resp = await fetchCountries();
        setCountries(resp);
        };
        fetch();
    }, []);
    // return (
    //     <div className="main">main
    //     {countries.map((item) => (
    //      <CountryCard  key={item.id} 
    //     ))}
    //     </div>
    )
    })

    
  );
}
