/* eslint-disable react/prop-types */

import 'react-slideshow-image/dist/styles.css'
import spotAuthView from '/src/assets/spotifyimgs/spot1.png'
import spotMobilView from '/src/assets/spotifyimgs/spot2.png'
import spotTopTracksView from '/src/assets/spotifyimgs/spot3.png'
import spotTopArtistsView from '/src/assets/spotifyimgs/spot4.png'
import { Slide } from 'react-slideshow-image'
const Project = ({images, title, description}) => {
    
    return (
        <div className='project'>
            <div className='project-title'>{title}</div>
            <div className='project-container'> 
             <div className='slide'>
                <Slide autoplay={false}>

                    {images.map((image, index) => (
                        <div key={index}> 
                            <div className='project-img' style={{backgroundImage: `url(${image})`}}></div>
                        </div>
                    ))}
                </Slide>
             </div>
            <div className='project-desc'>{description}</div>
            </div>
        </div> 
        
    ) 
}

const Projects = () => {
    const project1Images = [
        spotAuthView,
        spotTopTracksView,
        spotTopArtistsView,
        spotMobilView
    ]

    return (
        <div className='projects'>
            <h1>Projects</h1>
            <Project 
                title = 'Spotify Statisic Tracker'
                description = " Spotify Statistics Tracker created using React, TypeScript, and Sass with the Spotify API developer tools"
                images = {project1Images}
            />
            <Project 
                title = 'Project 1'
                description = " This is a project created by react, js, html, css, and depsloutsf using sedjfklsjfs nootsfsdf sql dtabase"
                images = {project1Images}
            />
            <Project 
                title = 'Project 1'
                description = " This is a project created by react, js, html, css, and depsloutsf using sedjfklsjfs nootsfsdf sql dtabase"
                images = {project1Images}
            />
        </div>
        
        
    )
}
export default Projects