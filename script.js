// // ##############################################login age ###########################################
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});


// console.log("hello world")
// #########################################contact form #########################################

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData.entries());

    // fetch('https://your-backend-url/send-email', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(response => {
    //     if (response.ok) {
    //         alert('Message sent successfully!');
    //     } else {
    //         alert('There was a problem sending your message.');
    //     }
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     alert('There was a problem sending your message.');
    // });

    function validateForm(event) {
        // Get form elements
        const first_name = document.getElementById('first_name').value;
        const last_name = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const number = document.getElementById('number').value;
    
        // Check if fields are empty
        if (!first_name || !last_name || !email || !number) {
            alert('Please fill out all fields.');
            event.preventDefault(); // Prevent form submission
        }
    }

    alert('Thank you for contacting Noble Care, ' + document.getElementById('name').value + '!');
    this.reset(); // Reset the form fields
});




