import githubLogo from '/src/assets/github-mark.png'
import linkedinLogo from '/src/assets/linkedin.png'

const IconRow = () => {
    return (
        <div className="navbarLogos">
            <div className="logo"><a href="https://github.com/Jonathanpatinocs" target="_blank" rel="noopener noreferrer"> <img src={githubLogo} alt="Github link" /></a></div>
            <div className="logo"><a href="https://www.linkedin.com/in/jonathan-patino-5a443b294" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="LinkedIn link"/></a></div>
        </div>
    )
}
const Navbar = () => {
    return (
        <div className="navbar">
            <div className='navbar_name'><h1>jonathanpatino.</h1></div>
            <IconRow />
        </div>
    )
}


export default Navbar