/* eslint-disable react/prop-types */

import 'react-slideshow-image/dist/styles.css'

/* Spotify Project Images */
import spotAuthView from '/src/assets/spotifyimgs/spot1.png'
import spotMobilView from '/src/assets/spotifyimgs/spot2.png'
import spotTopTracksView from '/src/assets/spotifyimgs/spot3.png'
import spotTopArtistsView from '/src/assets/spotifyimgs/spot4.png'

/* System Design Project Images */
import ganttChart from '/src/assets/sysdesignimgs/sysdesimg1.png'
import profileWindow from '/src/assets/sysdesignimgs/sysdesimg2.png'
import floorPlan from '/src/assets/sysdesignimgs/sysdesimg3.png'
import classDiagram from '/src/assets/sysdesignimgs/sysdesimg4.png'

/* Tumblr API Project Images    */
import tumblrFull from '/src/assets/tmbrimg/tmbrfull.png'
import tumblrMobile from '/src/assets/tmbrimg/tmbrmobile.png'

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
    const spotifyProjectImgs = [
        spotAuthView,
        spotTopTracksView,
        spotTopArtistsView,
        spotMobilView
    ]
    const sysdesImgs = [
        floorPlan,
        profileWindow,
        ganttChart,
        classDiagram
    ]
    const tumblrProjectImgs = [
        tumblrFull,
        tumblrMobile
    ]

    return (
        <div className='projects'>
            <h1>Projects</h1>
            <Project 
                title = 'Spotify Statisic Tracker'
                description = " Spotify Statistics Tracker created using React, TypeScript, and Sass with the Spotify API developer tools"
                images = {spotifyProjectImgs}
            />
            <Project 
                title = 'My Personal Web'
                description = "Indie-web inspired personal website. Acts as a personal alternative to social media and online identity. Built with React and Flask using Tumblr API tools."
                images = {tumblrProjectImgs}
            />
            <Project 
                title = 'System Design Course Project'
                description = "System design for a restaurant application to make tasks easier and efficient."
                images = {sysdesImgs}
            />
        </div>
        
        
    )
}
export default Projects