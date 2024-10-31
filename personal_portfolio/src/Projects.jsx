import leftArrow from './assets/arrow.backward.svg'
import {useState} from "react"
import { useEffect } from "react";
import './App.css'
import Card from "./Card.jsx"
import wordhuntsrc from "./assets/wordhunt.png"
const cardList = [
    {"img_src":"https://github.com/DmitriiPavlov/diseaseSimulator/raw/main/simulationrunning.png",
     "git_link":"https://github.com/DmitriiPavlov/diseaseSimulator",
     "description" : "A customizable simulation that allows the user to customize the population density, the infectiousness of the virus and resilience of the population.",
     "concepts":"Java, libGdx, Bezier curves"},

     {"img_src":"https://private-user-images.githubusercontent.com/31421520/382119792-78db13f5-335b-46c8-a947-0b8d713797cc.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA0MTIzNjYsIm5iZiI6MTczMDQxMjA2NiwicGF0aCI6Ii8zMTQyMTUyMC8zODIxMTk3OTItNzhkYjEzZjUtMzM1Yi00NmM4LWE5NDctMGI4ZDcxMzc5N2NjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDMxVDIyMDEwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg2NDZlOTA0ZDYzYzY3NzRlMTcwYjliOGI1NDQxN2RiZWM5N2RhMzhlOTc2ZTE2ZmJkOTNkYjVjZjcyZmIxMGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.hQzo_z9rSlsRgWzjHhukKbWebM-LpQ5PfLMvRqnBzOM",
        "git_link":"https://github.com/DmitriiPavlov/least_squres/tree/main",
        "description" : "A classroom demonstration tool that generates the line of best fit on the fly using my own linear algebra library."
        ,"concepts":"C, Raylib,Linear Algebra"},
    {"img_src":"https://github.com/DmitriiPavlov/wizardsAndGhosts/raw/main/gamerunning2.png",
            "git_link":"https://github.com/DmitriiPavlov/wizardsAndGhosts",
            "description" : "A mini-game built from scratch, with level loading capability."
            ,"concepts":"Java, libGdx"}
            ,
    {"img_src":"https://github.com/DmitriiPavlov/wizardsAndGhosts/blob/main/leveleditor.png?raw=true",
        "git_link":"https://github.com/DmitriiPavlov/wizardsAndGhosts",
        "description" : "A level editor for my mini game, seriliazes the level into text file."
        ,"concepts":"Java, libGdx"},

    {"img_src":"https://github.com/DmitriiPavlov/waveSimulator/blob/main/wavesimulation.png?raw=true",
        "git_link":"https://github.com/DmitriiPavlov/waveSimulator/blob/main/wavesimulation.png",
        "description" : "A real time simulation of wavelike motion using a multithreaded differential equation solver."
        ,"concepts":"C++,Raylib,GLSL,Runge-Kutta Approximation"},

    {"img_src":wordhuntsrc,
        "git_link":"https://github.com/DmitriiPavlov/DmitriiPavlov.github.io",
        "description" : "A website that can solve the popular word hunt game pzzules on the fly."
        ,"concepts":"Vanilla JS, HTML, CSS"},
]

export default function Projects(){
    const [index,setIndex] = useState(5);
    const slideRight = () =>{
        setIndex((index+1)%cardList.length);
    }
    const slideLeft =  () =>{
        setIndex((cardList.length+index-1)%cardList.length);
    }
    useEffect(() => {
        // Preload images by adding link tags to the head
        cardList.forEach(card => {
            const link = document.createElement("link");
            link.rel = "preload";
            link.href = card.img_src;
            link.as = "image";
            document.head.appendChild(link);
        });

        

    }, []);

    return(
    <>
       <div className="slide projcontainer">
            <button className="icon-button" onClick = {slideLeft}>
            {<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23.7598" height="18.916">
 <g>
  <path d="M0 9.45312C0 9.7168 0.107422 9.96094 0.322266 10.1562L8.76953 18.6133C8.98438 18.8086 9.19922 18.9062 9.45312 18.9062C9.99023 18.9062 10.3906 18.5156 10.3906 17.9883C10.3906 17.7344 10.3027 17.4805 10.1367 17.3047L6.70898 13.8477L2.14844 9.63867L1.92383 10.1855L5.77148 10.4004L22.4609 10.4004C23.0078 10.4004 23.3984 10 23.3984 9.45312C23.3984 8.89648 23.0078 8.50586 22.4609 8.50586L5.77148 8.50586L1.92383 8.71094L2.14844 9.26758L6.70898 5.05859L10.1367 1.5918C10.3027 1.41602 10.3906 1.17188 10.3906 0.917969C10.3906 0.390625 9.99023 0 9.45312 0C9.19922 0 8.96484 0.0878906 8.71094 0.341797L0.322266 8.74023C0.107422 8.94531 0 9.18945 0 9.45312Z" fill="#FFFFFF"/>
 </g>
</svg>}
            </button>
            <Card 
    img_src={cardList[index].img_src} 
    git_link={cardList[index].git_link} 
    description={cardList[index].description}
    concepts={cardList[index].concepts}    

/>
            <button className="icon-button" onClick = {slideRight}>
            {<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23.4035" height="18.9186">
 <g>
  <rect height="18.9186" opacity="0" width="23.4035" x="0" y="0"/>
  <path d="M23.4035 9.45127C23.4035 9.18592 23.2869 8.94772 23.0748 8.7462L14.687 0.341255C14.4362 0.0954706 14.1975 0 13.9427 0C13.4175 0 13.0145 0.392484 13.0145 0.917141C13.0145 1.17193 13.0939 1.42119 13.2743 1.59106L16.6942 5.05817L21.2566 9.26685L21.4798 8.70851L17.6329 8.49693L0.945072 8.49693C0.393784 8.49693 0.00128507 8.89998 0.00128507 9.45127C0.00128507 10.0026 0.393784 10.4056 0.945072 10.4056L17.6329 10.4056L21.4798 10.194L21.2566 9.64622L16.6942 13.8444L13.2743 17.3115C13.0994 17.4758 13.0145 17.7306 13.0145 17.9854C13.0145 18.51 13.4175 18.9025 13.9427 18.9025C14.1975 18.9025 14.4251 18.807 14.6372 18.6111L23.0748 10.1563C23.2869 9.95481 23.4035 9.71661 23.4035 9.45127Z" fill="#ffffff" fill-opacity="0.85"/>
 </g>
</svg>}
            </button>
       </div>
       
    </>)
}