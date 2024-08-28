import Swal from 'sweetalert2'


const ContactMe = () => {
    const access_key = "8034dfa5-68f3-4d48-b713-4f4d523ffa90"
    const formSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", access_key);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message has been sent!",
                icon: "success",
                background: "#76ABAE",
                color: "#EEEEEE"
              });
          console.log("Success", res);
        }
      };

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