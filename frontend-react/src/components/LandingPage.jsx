import React, { useState } from 'react'
import '../css/landingPage.css'
import ACMlogo from '../images/acm-logo.webp'
export default function LandingPage() {
    const [ arr, useArr ] = useState()

    return (
        <div>
            <div id="hero"></div>
            <div className="content">
                <div className="part1">
                    <h1>ACM Student Chapter</h1>
                    <h2>#include {"<"}{arr}{">"}</h2>
                </div>
                <div className="part2">
                    <img src={ ACMlogo } alt="ACM logo"/>
                </div>
            </div>
        </div>
        
    )
}

