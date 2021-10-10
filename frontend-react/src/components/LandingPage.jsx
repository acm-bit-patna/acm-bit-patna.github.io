import React, { useEffect, useRef } from "react";
import "../css/landingPage.css";
import ACMlogo from "../images/acm-logo.webp";
import Typed from "typed.js";
import { Zoom, Stack, Fab } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function SiteButton(props) {
    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {
        setChecked((prev) => !prev);
    }, []);

    return (
        <Zoom
            in={checked}
            style={{ transitionDelay: checked ? "1750ms" : "0ms" }}
        >
            <Fab
                className="social-sites"
                size="small"
                href={props.link}
                target="_blank"
            >
                {props.tag}
            </Fab>
        </Zoom>
    )
}

function SocialSites() {
    
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            style={{ position: "fixed",
                    bottom: "10px",
                    width: "100%" }}
        >
            <SiteButton 
                link="https://linkedin.com"
                tag={<LinkedInIcon />}
            />
            <SiteButton 
                link="https://instagram.com"
                tag={<InstagramIcon />}
            />
            <SiteButton 
                link="https://github.com"
                tag={<GitHubIcon />}
            />
            
        </Stack>
    );
}

export default function LandingPage() {
    //Adding tags in this array will display them on the landing page
    const tags = ["Algorithms", "Maths", "Adhoc", "Greedy", "Dp", "Graphs"];

    const el = useRef();

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: tags,
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            smartBackspace: true,
            autoInsertCss: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <div className="landing-bg"></div>
            <div className="content">
                <div className="content-part1">
                    <h1>ACM Student Chapter</h1>
                    <p>
                        #include {"<"}
                        <span className="typed" ref={el} />
                        {">"}
                    </p>
                </div>
                <div className="content-part2">
                    <img src={ACMlogo} alt="ACM logo" />
                </div>
            </div>
            <SocialSites />
        </div>
    );
}
