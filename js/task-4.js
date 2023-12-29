const form = document.querySelector(".login-form");
    form.addEventListener('submit', onFormSubmit)
    function onFormSubmit(event) {
        event.preventDefault();
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        const userData = {
            email, 
            password
        }

        if (!Object.values(userData).every(value => value !== '')) {
            alert('All form fields must be filled in');
            return;
          }

        console.log(userData);

        form.reset();
    }

