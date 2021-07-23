import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav
                style={{
                    backgroundColor: "red",
                    height: "4rem",
                    width: "100vw",
                }}
            >
                <div>
                    <Link to="/">
                        <i>code</i>
                        MERN
                    </Link>
                </div>
            </nav>
        </div>
    );
}
