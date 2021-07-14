import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import { Navbar } from "./components/layout/navbar";
import { Landing } from "./components/layout/landing";
import { Register } from "./components/auth/register";
import { Login } from "./components/auth/login";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </div>
        </BrowserRouter>
    );
}

export default App;
