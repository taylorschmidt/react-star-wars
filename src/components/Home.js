import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Home = () => {

    const [starwarsData, setStarwarsData] = useState([])

    useEffect(() => {
        axios.get('http://swapi.dev/api/starships/').then((res)=> {
            console.log(res.data.results)
            setStarwarsData(res.data.results)
        })
}, [])

const display = () => {
    return starwarsData.map((data, index)=>{
        return (
            
            <div key={index} className = "col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{data.name}</span>
                </div>
                <div className="card-action">
                <Link to={{
                pathname: `/starship/${index}`,
                state: {data}
            }} 
            key={data.name}
            >
            More Information
            </Link> 
                </div>
              </div>
            </div>
        




    
            // <li key={index}><Link to={{
            //     pathname: `/starship/${index}`,
            //     state: {data}
            // }} 
            // key={data.name}
            // >
            // {data.name}
            // </Link></li> 
        )
    })
}

    return(
        <div>
        <h1>Starwars Starships</h1>
        <div className="row">{display()}</div>
        </div>
    )
}

export default Home