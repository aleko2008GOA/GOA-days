function Add({ formData }){
    function handleSubmit(e){
        e.preventDefault();

        const data = {
            name: e.target.elements.name.value,
            age: e.target.elements.age.value,
            email: e.target.elements.email.value,
            phone: e.target.elements.phone.value,
        }

        formData(data);
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <span>
                <label htmlFor="name">Name:</label>
                <input type = 'text' name = 'name' id = 'name' required/>
            </span>
            <span>
                <label htmlFor="age">Age:</label>
                <input type = 'number' name = 'age' id = 'age' required/>
            </span>
            <span>
                <label htmlFor="email">Email:</label>
                <input type = 'email' name = 'email' id = 'email' required/>
            </span>
            <span>
                <label htmlFor="phone">Phone number:</label>
                <input type = "tel" name = 'phone' id = 'phone' required/>
            </span>
            <span>
                <input type = 'submit' value = 'Add User' />
                <input type = 'reset' value = 'Cancle' />
            </span>
        </form>
    );
}

export default Add;