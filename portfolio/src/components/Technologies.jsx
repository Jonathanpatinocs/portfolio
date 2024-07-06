/* eslint-disable react/prop-types */
import javascriptLogo from '/src/assets/javascriptlogo.png'
import htmlLogo from '/src/assets/htmllogo.svg'
import cssLogo from '/src/assets/csslogo.png'
import typescriptLogo from '/src/assets/typescriptlogo.png'
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
    const languages = [
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
        }

  
    ]
    return (
        <div className='technologies'>
            <h1>Technologies</h1>
            <TechSection techCards={languages} name='Languages'/>
        </div>
    )
}



export default Technologies