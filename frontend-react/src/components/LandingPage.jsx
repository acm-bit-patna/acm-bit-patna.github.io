import React, { useEffect, useRef } from 'react'
import '../css/landingPage.css'
import ACMlogo from '../images/acm-logo.webp'
import Typed from 'typed.js'

export default function LandingPage() {
    //Adding tags in this array will display them on the landing page
    const tags = ['Algorithms', 'Maths', 'Adhoc', 'Greedy', 'Dp', 'Graphs']


    const el = useRef()

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: tags,
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            smartBackspace: true,
            autoInsertCss: true
        })
        return () => {
            typed.destroy()
        }
    }, [])
    
    return (
        <div>
            <div className="landing-bg"></div>
            <div className="content">
                <div className="content-part1">
                    <h1>ACM Student Chapter</h1>
                    <p>#include {"<"}
                        <span className="typed" ref={el}/>
                    {">"}</p>
                </div>
                <div className="content-part2">
                    <img src={ ACMlogo } alt="ACM logo"/>
                </div>
            </div>
        </div>
        
    )
}

