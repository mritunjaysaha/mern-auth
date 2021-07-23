import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div style={{ height: "75vh", backgroundColor: "yellow" }}>
            <div>
                <div>
                    <h4>
                        <b>Build</b> a login/auth app with the <span>MERN</span>{" "}
                        stack from scratch{" "}
                    </h4>
                    <p>
                        Create a (minimal) full-stack app with user
                        authentication via passport and JWTs
                    </p>
                    <br />
                    <div>
                        <Link
                            to="/register"
                            style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                            }}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                            Register
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/login"
                            style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                            }}
                            className="btn btn-large btn-flat waves-effect white black-text"
                        >
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
