/* eslint-disable react/prop-types */

import 'react-slideshow-image/dist/styles.css'
import projectimg1 from '/src/assets/projectimg1.jpg'
import projectimg2 from '/src/assets/projectimg2.png'
import projectimg3 from '/src/assets/projectimg3.png'
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
        projectimg1,
        projectimg2,
        projectimg3
    ]

    return (
        <div className='projects'>
            <h1>Projects</h1>
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
            <Project 
                title = 'Project 1'
                description = " This is a project created by react, js, html, css, and depsloutsf using sedjfklsjfs nootsfsdf sql dtabase"
                images = {project1Images}
            />
        </div>
        
        
    )
}
export default Projects