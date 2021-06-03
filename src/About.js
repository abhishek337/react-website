import React from 'react'
import Comman from './Comman'
import abt from '../src/img/search.png'

const About = () => {
    return (
        <div>
            <Comman 
            name="Improve Your SEO With"
            imgsrc={abt}
            visit="/contact"
            btname="Contact Us"
            desc="We have the team of talented peoples for your Buisness needs.
            We believe in Simple, Creative & Flexible Design Standards with a Retina & Responsive Approach. "
            />
        </div>
    )
}

export default About
