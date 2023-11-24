import { useState } from "react";

const Password = () => {

    const INITIAL_PASSWORD = ""
    const INITIAL_ERROR = "d-none"

    const [password, setPassword] = useState(INITIAL_PASSWORD);
    const [error, setError] = useState(INITIAL_ERROR)

    const handleChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setError(INITIAL_ERROR)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== "password") {
            setError("d-inline text-danger py-3")
        } else {
            setPassword(INITIAL_PASSWORD);
            window.open(
                'https://google.com',
                '_blank' 
              );
        };
    };


    return (
        <div className="container vh-100 pt-5">
            <form className="row g-3 align-items-center h-50 justify-content-center" onSubmit={handleSubmit}>
                <div className="col-md-8">
                    <label htmlFor="passwordValidation" className="form-label h2">Enter Password</label>
                    <input type="text" className="form-control" id="passwordValidation" value={password} onChange={handleChange} required/>
                    <div className={error}>Password is incorrect.</div>
                </div>
                <div className="col offset-9 pb-3">
                    <button className="btn btn-dark" type="submit" onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )

};

export default Password;