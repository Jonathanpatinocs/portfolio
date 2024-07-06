import ksuLogo from '/src/assets/ksu-logo.png'

const Aboutme = () => {
    return (
        <div className="aboutme">
            <h1>Nice to meet you! <br /> I&apos;m <span>Jonathan Patino.</span></h1>
            <div className="aboutme_description">
                Based in Metro Atlanta, I am third year Software Engineering major at <span>Kennesaw State University</span>. 
                Passionate and always learning, I am excited to see where I go from here! Outside of programming, I also enjoy music, video games, 
                and skateboading!
            </div>
            <center><img src={ksuLogo} alt="Kennesaw State University Logo" height="100px"/></center>
        </div>
    )
}

export default Aboutme