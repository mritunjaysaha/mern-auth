import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

function Register(props) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {},
    });

    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.history.push("/dashboard");
        }
    }, []);

    // useEffect((nextProps) => {
    //     if (nextProps.errors) {
    //         setUser((user) => ({ ...user, errors: nextProps.errors }));
    //     }
    // }, []);

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
        console.log({ props });

        props.registerUser(newUser, props.history);
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
                            <span style={{ color: "red" }}>
                                {user.errors.name}
                            </span>
                        </div>
                        <div>
                            <input
                                id="email"
                                type="text"
                                value={user.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="email">email</label>
                            <span style={{ color: "red" }}>
                                {user.errors.email}
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
                            <span style={{ color: "red" }}>
                                {user.errors.password}
                            </span>
                        </div>
                        <div>
                            <input
                                id="password2"
                                type="text"
                                value={user.password2}
                                onChange={handleChange}
                            />
                            <label htmlFor="password2">confirm password</label>
                            <span style={{ color: "red" }}>
                                {user.errors.password2}
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
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, {
    registerUser,
})(withRouter(Register));
