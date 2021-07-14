import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div>
            <nav>
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
