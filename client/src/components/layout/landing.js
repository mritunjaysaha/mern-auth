import { Link } from "react-router-dom";

export function Landing() {
    return (
        <div>
            <div>
                <div>
                    <h4>
                        <b>Build</b> a login/auth app with the <span>MERN</span>{" "}
                        stack from scratch
                    </h4>
                    <p>
                        Create a minimal full-stack app with user authentication
                        via passport and JWTs
                    </p>
                    <br />
                    <div>
                        <Link to="/register">Register</Link>
                    </div>
                    <div>
                        <Link to="/login">Log In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
