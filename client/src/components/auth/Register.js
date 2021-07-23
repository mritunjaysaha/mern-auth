import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {},
    });

    function handleChange(e) {
        setUser((user) => ({ ...user, [e.target.id]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { name, email, password, password2 } = user;
        const newUser = {
            name,
            email,
            password,
            password2,
        };

        console.log({ newUser });
    }

    return (
        <div>
            <div>
                <div>
                    <Link to="/">Back to home</Link>

                    <div>
                        <h4>
                            <b>Register</b> below
                        </h4>
                        <p>
                            Already have an account?{" "}
                            <Link to="/login">Log in</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={handleSubmit}>
                        <div>
                            <input
                                id="name"
                                type="text"
                                value={user.name}
                                onChange={handleChange}
                            />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div>
                            <input
                                id="email"
                                type="text"
                                value={user.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="email">email</label>
                        </div>
                        <div>
                            <input
                                id="password"
                                type="text"
                                value={user.password}
                                onChange={handleChange}
                            />
                            <label htmlFor="password">password</label>
                        </div>
                        <div>
                            <input
                                id="password2"
                                type="text"
                                value={user.password2}
                                onChange={handleChange}
                            />
                            <label htmlFor="password2">confirm password</label>
                        </div>
                        <div>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                }}
                                type="submit"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
