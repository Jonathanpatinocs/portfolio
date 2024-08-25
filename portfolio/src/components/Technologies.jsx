/* eslint-disable react/prop-types */
import javascriptLogo from '/src/assets/javascriptlogo.png'
import htmlLogo from '/src/assets/htmllogo.svg'
import cssLogo from '/src/assets/csslogo.png'
import typescriptLogo from '/src/assets/typescriptlogo.png'
import nodejsLogo from '/src/assets/nodejslogo.png'
import mongodbLogo from '/src/assets/mongodblogo.svg'
import expressjsLogo from '/src/assets/expressjslogo.webp'
import reactLogo from '/src/assets/react.svg'
import pythonLogo from '/src/assets/python-logo.png'
import flaskLogo from '/src/assets/Flask.png'
const TechCard = ({tech, logo}) => {
    return (
        <div className="techCard">
            <img src={logo} />
            {tech}
        </div>
    )
}

const TechSection = ({techCards, name}) => {
    return (
        <div className="techSection">
            <h2>{name}</h2>
            <div className='techCards'>
                {techCards.map(techCards => <TechCard tech={techCards.technology} logo={techCards.logo} key={techCards.technology}/>)}
            </div>
        </div>
    )
}

const Technologies = () => {
    const frontend = [
        {
            technology: 'Javascript',
            logo: javascriptLogo,
        },
        {
            technology: 'HTML',
            logo: htmlLogo
        },
        {
            technology: 'CSS',
            logo: cssLogo
        },
        {
            technology: 'Typescript',
            logo: typescriptLogo
        },
        {
            technology: 'React',
            logo: reactLogo
        },
    ]
    const backend = [
        {
            technology: 'Python',
            logo: pythonLogo
        },
        {
            technology: 'Node.js',
            logo: nodejsLogo
        },
        {
            technology: 'Mongo.db',
            logo: mongodbLogo
        },
        {
            technology: 'Flask',
            logo: flaskLogo
        },
        {
            technology: 'Express.js',
            logo: expressjsLogo
        },
    ]
    return (
        <div className='technologies'>
            <h1>Technologies</h1>
            <div className='technologiesSection'>
                <TechSection techCards={frontend} name='Front End'/>
                <TechSection techCards={backend} name='Back End' />
            </div>
            
        </div>
    )
}



export default Technologies