import { useState } from "react";
import { Link } from "react-router-dom";

export function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {},
    });

    function handleChange(e) {
        setUser((user) => ({
            ...user,
            [e.target.id]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: user.name,
            email: user.email,
            password: user.password,
            password2: user.password2,
        };

        console.log({ newUser });
    }

    return (
        <div>
            <div>
                <div>
                    <Link to="/">Back to Home</Link>
                    <h4>
                        <b>Register</b> below
                    </h4>
                    <p>
                        Already have an account? <Link to="/login">Log in</Link>
                    </p>
                </div>
                <form noValidate onSubmit={handleSubmit}>
                    <div>
                        <input
                            id="name"
                            type="text"
                            value={user.name}
                            error={user.errors.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div>
                        <input
                            id="email"
                            type="email"
                            value={user.email}
                            error={user.errors.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input
                            id="password"
                            type="password"
                            value={user.password}
                            error={user.errors.password}
                            onChange={handleChange}
                        />
                        <label htmlFor="password"> Password</label>
                    </div>
                    <div>
                        <input
                            id="password2"
                            type="password"
                            value={user.password}
                            error={user.errors.password}
                            onChange={handleChange}
                        />
                        <label htmlFor="password2">Confirm Password</label>
                    </div>
                    <div>
                        <button type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
