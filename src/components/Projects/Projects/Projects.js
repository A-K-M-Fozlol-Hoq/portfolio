import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Project from '../Project/Project';
import './Projects.css'

const projectsData = [
    {
        "_id": "608eb0fc1336ce710f653142",
        "index": 0,
        "picture": "https://i.ibb.co/N6HM6dF/cleanBD.png",
        "name": "Clean BD",
        "url": "https://cleanbd-fozlol.web.app/"
    },
    {
        "_id": "608eb0fc459662561f02cf23",
        "index": 1,
        "picture": "https://i.ibb.co/dK44KqF/fancy-Slider.png",
        "name": "Fancy Slider",
        "url": "https://a-k-m-fozlol-hoq.github.io/fancy-slider-main/"
    },
    {
        "_id": "608eb0fc148abc58f513bb54",
        "index": 2,
        "picture": "https://i.ibb.co/HB9ZLF1/hungry-Food.png",
        "name": "Hungry Food",
        "url": "https://a-k-m-fozlol-hoq.github.io/Hungry-Monster/"
    },
    {
        "_id": "608eb0fc5855115868e1def5",
        "index": 3,
        "picture": "https://i.ibb.co/ZcVT20M/mobile-Planet.png",
        "name": "Mobile Planet",
        "url": "https://mobile-planet-fozlol.web.app/"
    },
    {
        "_id": "608eb0fc7e75d64d6ce4491b",
        "index": 4,
        "picture": "https://i.ibb.co/bRv48by/panda.png",
        "name": "Panda",
        "url": "https://a-k-m-fozlol-hoq.github.io/panda/"
    },
    {
        "_id": "608eb0fc39a0430cb90aa884",
        "index": 5,
        "picture": "https://i.ibb.co/8m8HfzL/penguin-Fashon.png",
        "name": "Penguin Fashon",
        "url": "https://a-k-m-fozlol-hoq.github.io/responsive-assignment/"
    },
    {
        "_id": "608eb0fcfe6b3dd68ab2373f",
        "index": 6,
        "picture": "https://i.ibb.co/jh2pBr9/urban-Rider.png",
        "name": "Urban Rider",
        "url": "https://speedy-fidelity-rider.web.app/"
    },
    {
        "_id": "608eb0fccac1f1bff7cd4e49",
        "index": 7,
        "picture": "https://i.ibb.co/F3KJzXN/fantasy-Premier-Leahue.png",
        "name": "Premier League",
        "url": "https://fantasy-premier-league.netlify.app"
    },
    {
        "_id": "608eb0fce508640a67f504c0",
        "index": 8,
        "picture": "https://i.ibb.co/5xf7Y6J/player-Selection.png",
        "name": "Player Selection",
        "url": "https://player-selection-assignment.netlify.app"
    }
]

const Projects = () => {
    return (
        <div className='projects-wrapper'>
            <Navbar></Navbar>
            <h1 className='text-center mt-5 mb-3'>My Recent <span className='greenyellow-highlight'>Works</span> </h1>
            <div className="divider mb-2">
            </div>
            <div className="container pb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                    {
                        projectsData.map(project => <Project
                            key={project.index}
                            project={project}
                        ></Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;