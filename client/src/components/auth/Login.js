import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState({ email: "", password: "", errors: {} });

    function handleChange(e) {
        setUser((user) => ({ ...user, [e.target.id]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const { email, password } = user;

        const userData = {
            email,
            password,
        };

        console.log({ userData });
    }

    return (
        <div>
            <div>
                <div>
                    <Link to="/">Back to home</Link>
                    <div>
                        <h4>
                            <b>Log in</b> below
                        </h4>
                        <p>
                            Don't have an account?{" "}
                            <Link to="register">Register</Link>
                        </p>
                    </div>

                    <form noValidate onSubmit={handleSubmit}>
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
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                }}
                                type="submit"
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
