import React from 'react'
import Comman from './Comman'
import SEO from '../src/img/search-engine.png'

const Home = () => {
    return (
        <div>
            <Comman 
            name="Improve Your SEO With"
            imgsrc={SEO}
            visit="/service"
            btname="Let,s Start"
            desc=" We Provide a Strong Solutions to Business."
            />
        </div>
    )
}

export default Home
