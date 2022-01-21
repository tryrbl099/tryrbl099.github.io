import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Signup.css";
import axios from "../axios";

function Signup() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    const handleSignup = (e) => {
        e.preventDefault();

        const form = {
            first_name: firstName,
            last_name: lastName,
            address: address,
            contact_number: contactNumber,
            email: email,
            password: password,
            re_password: repassword,
            normal_user: true,
        };

        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            contactNumber === "" ||
            address === "" ||
            password === "" ||
            repassword === ""
        ) {
            alert("fill all the fields");
        } else if (!pattern.test(email)) {
            alert("Invalid Email");
        } else if (password !== repassword) {
            alert("Password does not match");
        } else {
            axios.post("/auth/register", form).then((res) => {
                alert("Sign Up Successful");
                navigate("/login");
            });
        }
    };

    return (
        <div className='signup'>
            <div className='signup__formContainer'>
                <div className='signup__imageContainer'></div>
                <div className='signup__form'>
                    <form className='was-validated'>
                        <div className='mb-3'>
                            <label className='form-label'>First Name</label>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Last Name</label>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Address</label>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Contact Number</label>
                            <input
                                type='number'
                                className='form-control'
                                onChange={(e) =>
                                    setContactNumber(e.target.value)
                                }
                                value={contactNumber}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label is-valid'>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Ex. user@gmail.com'
                                pattern='.+@gmail\.com'
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
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Re-Password</label>
                            <input
                                type='password'
                                className='form-control'
                                onChange={(e) => setRepassword(e.target.value)}
                                value={repassword}
                                required
                            />
                        </div>
                        <button
                            onClick={handleSignup}
                            type='submit'
                            className='btn btn-primary'>
                            Sign Up
                        </button>{" "}
                        <br />
                        <small>Already have an Account?</small>{" "}
                        <Link to='/login'>Login</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
