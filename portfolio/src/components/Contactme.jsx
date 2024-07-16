


const ContactMe = () => {
    const formSubmit = (e) => {
        e.preventDefault()
        console.log('submit');
        
    }
    return (
        <div className="contactMe">
            <h1>Send me a message!</h1>
            
            <form onSubmit={formSubmit} id="contactMeForm">
                <div id="labels">
                    <label htmlFor="name">Full Name: </label>
                    <label htmlFor="email">Email: </label>
                    <label htmlFor="message">Message: </label>
                </div>
                <div id="inputs">
                    <input type="text" name="name" id="name" required/>
                    <input type='email' name="email" id="email" required/>
                    <textarea name="message" id="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ContactMe