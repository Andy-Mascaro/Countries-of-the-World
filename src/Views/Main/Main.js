import { useEffect, useState } from 'react';
import { fetchCountries } from '../../services/Country';
import './Main.css';
import CountryCard from '../../Components/CountryCard/CountryCard';
import { Filter } from '../../Components/Filter';


export default function Main() {
  const [Country, setCountry] = useState([]);
  const [loading, setLoading] = useState('true');
  const [search, setSearch] = useState('');
  const [types, setTypes] = useState([]);


  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchCountries();
        setCountry(resp);
      } catch (e) {
        alert(e.message);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fetch();
  }, []);

  const Filter = () => {
    return types.filter((country) => types === country.continent);
  };
  

  if (loading) return <div className='loading'>Checking Countries</div>;

  return (
    
    
    <div className="main">
      <div> 
        <Filter 
          search={search}
          setSearch={setSearch}
          types={types} />  
        {Country.map((item) => (
          <CountryCard key={item.id} name={item.name} iso2={item.iso2} /> 
        ))}
      </div>
    </div>
  );
}
