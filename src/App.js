import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Root from "./components/Root"
import {ToastContainer} from "react-toastify";
import {BrowserRouter as Router} from 'react-router-dom';
import UserRoute from "./Routes";

const App = ({current_user}) => (
    <Router>
        <React.Fragment>
                <UserRoute/>
        </React.Fragment>
        {/* <Root />
        <ToastContainer/> */}
    </Router>
)
export default App