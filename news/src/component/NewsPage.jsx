import React, { useEffect, useState } from 'react'
import Cart from './Cart'

const NewsPage = () => {
    const [search, setSearch] = useState();
    const [data, setData] = useState(null);
    const API_KEY = "5110c0b992214a90a04f45a6b323beaf";

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const result =await response.json();
        // console.log(result.articles)
        setData(result.articles)
        
    }
    const inputHandle = (e) => {
        // console.log(e.target.value)
        setSearch(e.target.value);
    }

    useEffect(() => {
        getData();
    }, [])
    
    const userInput = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <nav>
                <h1>News React</h1>
                <div className='search'>
                    <input type="text"placeholder='Search Here' onChange={inputHandle}  value={search}/>
                    <button onClick={getData}>Search</button>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </nav>
            <div className="subhead">
                <button onClick={userInput} value="sports">Sports</button>
                <button onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="movies">Movies</button>
                <button onClick={userInput} value="arts">Arts</button>
                <button onClick={userInput} value="technologies">Technologies</button>
                <button onClick={userInput} value="world">world</button>
            </div>

            <div>
               {data?<Cart data={data} />:null} 
           </div>

        </div>
    )
}

export default NewsPage