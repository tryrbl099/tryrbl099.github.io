import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    selectUser,
    selectToken,
    setActiveUser,
    setToken,
} from "./features/userSlice";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Order from "./components/Order";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ListSubmitted from "./components/ListSubmitted";
import ViewSubmitted from "./components/ViewSubmitted";
import TechnologyStack from "./components/TechnologyStack";
import Users from "./components/Users";
import Services from "./components/Services";
import axios from "./axios";

function App() {
    const token = useSelector(selectToken);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            axios
                .get("/auth/me", {
                    headers: {
                        Authorization: `Token ${localStorage.getItem("token")}`,
                    },
                })
                .then((response) => {
                    dispatch(
                        setActiveUser({
                            user: response.data,
                        })
                    );
                });
        }
    }, [dispatch]);
    return (
        <Router>
            <>
                {!token ? (
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                    </Routes>
                ) : (
                    <div className='app'>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/order' element={<Order />} />
                            <Route
                                path='/list-submitted'
                                element={<ListSubmitted />}
                            />
                            <Route
                                path='/view-submitted'
                                element={<ViewSubmitted />}
                            />
                            <Route path='/users' element={<Users />} />
                            <Route
                                path='/technology-stack'
                                element={<TechnologyStack />}
                            />
                            <Route path='/users' element={<Users />} />
                            <Route path='/services' element={<Services />} />
                        </Routes>
                    </div>
                )}
            </>
        </Router>
    );
}

export default App;
