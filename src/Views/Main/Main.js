import { useEffect, useState } from 'react';
import { fetchCountries } from '../../services/Country';
import './Main.css';
import CountryCard from '../../Components/CountryCard/CountryCard';

export default function Main() {
  const [Country, setCountry] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const resp = await fetchCountries();
      setCountry(resp);
    };
    fetch();
  }, []);

  return (
    <div className="main">main
      {Country.map((item) => (
        <CountryCard key={item.id} name={item.name} iso2={item.iso} /> 
      ))}
    </div>
    
    

    
  );
}
