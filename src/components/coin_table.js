import React from "react";
import CoinRow from './coin_row'

const titles = ['#', 'Name', 'Price', 'Price Change', 'Volume'];
const CoinTable = ({coins, search}) => {
    
const filteredCoins =  coins.filter((coin) => 
coin.name.toLowerCase().includes(search.toLowerCase()) | 
coin.symbol.toLowerCase().includes(search.toLowerCase())
)

    return(
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {titles.map((title, index)=>
                    (<td key={index}>{title}</td>)
                    )}
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, index) => (
                <CoinRow coin={coin} key={index} index={index + 1}/>      
                ))};
                </tbody>
        </table>

    )
}

export default CoinTable;