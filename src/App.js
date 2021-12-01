import {useEffect, useState} from 'react';
import './App.css';
import CoinTable from './components/coin_table';
import axios from 'axios';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    console.log(res.data);
    setCoins(res.data);
  }

  useEffect(() => {
    getData();
  },[])

  return (
      <div className="container">
        <div className="row">
          <input type="text" placeholder="Search" className='form-control bg-dark text-light mt-4 text-center border-0' onChange={e => setSearch(e.target.value)}/>
          
        <CoinTable coins={coins} search={search}/>
      </div>
      </div>

      
  
  );
}

export default App;
