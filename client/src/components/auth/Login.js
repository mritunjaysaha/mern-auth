import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

function Login(props) {
    const [user, setUser] = useState({ email: "", password: "", errors: {} });

    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.history.push("/dashboard");
        }
    }, []);

    // useEffect((nextProps) => {
    //     if (nextProps.auth.isAuthenticated) {
    //         props.history.push("/dashboard");
    //     }

    //     if (nextProps.errors) {
    //         setUser((user) => ({ ...user, errors: nextProps.errors }));
    //     }
    // }, []);

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

        props.loginUser(userData);
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
                            <span className="red-text">
                                {user.errors.email}
                                {user.errors.emailnotfound}
                            </span>
                        </div>
                        <div>
                            <input
                                id="password"
                                type="text"
                                value={user.password}
                                onChange={handleChange}
                            />
                            <label htmlFor="password">password</label>
                            <span className="red-text">
                                {user.errors.password}
                                {user.errors.passwordincorrect}
                            </span>
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
