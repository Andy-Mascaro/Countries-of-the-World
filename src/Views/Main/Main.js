import { useEffect, useState } from 'react';
import { fetchCountries } from '../../services/Country';
import './Main.css';
import CountryCard from '../../Components/CountryCard/CountryCard';
import Filter from '../../Components/Filter';


export default function Main() {
  const [Country, setCountry] = useState([]);
  const [loading, setLoading] = useState('true');
  const [search, setSearch] = useState('Africa');
  const continents = ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'];

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
      }, 2200);
    };
    fetch();
  }, []);

  const filterContinents = () => {
    return Country.filter((country) => search === country.continent);
  };

  if (loading) return <div className='loader'></div>;

  return (
    
    
    <div>  
      <div className='filter'>
        <Filter 
          continents={continents}
          setSearch={setSearch}/>
    
        {filterContinents().map((item) => (
          <CountryCard key={item.id} name={item.name} iso2={item.iso2} /> 
        ))}
      </div>
    </div>
  );
}
