import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setActiveUser } from "../features/userSlice";
import "../css/Login.css";
import axios from "../axios";

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("fill all the fields");
        } else if (!pattern.test(email)) {
            alert("Invalid email");
        } else {
            axios
                .post("/api/v1/token/login/", {
                    email: email,
                    password: password,
                })
                .then((res) => {
                    console.log(res.data);
                    dispatch(
                        setToken({
                            token: res.data.auth_token,
                        })
                    );
                    localStorage.setItem("token", res.data.auth_token);

                    axios
                        .get("/auth/me", {
                            headers: {
                                Authorization: `Token ${res.data.auth_token}`,
                            },
                        })
                        .then((response) => {
                            console.log(response.data);
                            localStorage.setItem("user", response.data);
                            dispatch(
                                setActiveUser({
                                    user: response.data,
                                })
                            );
                        });
                    navigate("/");
                    window.location.reload(false);
                })

                .catch((error) => {
                    alert("Invalid Credentials");
                });
        }
    };

    return (
        <div className='login'>
            <div className='login__pictureContainer'></div>
            <div className='login__formContainer'>
                <div className='container login__form'>
                    <form className='was-validated'>
                        <div className='mb-3'>
                            <label className='form-label'>Email address</label>
                            <input
                                type='email'
                                className='form-control'
                                id='exampleInputEmail1'
                                aria-describedby='emailHelp'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                id='exampleInputPassword1'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                        </div>
                        <button
                            onClick={handleLogin}
                            type='submit'
                            className='btn btn-primary'>
                            Login
                        </button>{" "}
                        <small>Don't have an Account?</small>{" "}
                        <Link to='/signup'>Sign Up</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
