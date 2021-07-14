import { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
    const [user, setUser] = useState({ email: "", password: "", errors: {} });

    function handleChange(e) {
        setUser((user) => ({ ...user, [e.target.id]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            email: user.email,
            password: user.password,
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
                            <Link to="/register">Register</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={handleSubmit}>
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
                            <label htmlFor="password">Password</label>
                        </div>
                        <div>
                            <button type="submit">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
