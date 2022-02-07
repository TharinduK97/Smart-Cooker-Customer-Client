import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from '../../services/authenticationService';
import { removeTokens } from "../../services/localStorage";
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();

    const onLogOut = () => {
        removeTokens();
        navigate('/');
    };
    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
            <div className="flex-none px-2 mx-2">

                <Link to="/">
                    <span className="text-lg font-bold">
                        Smart Cookers
                    </span>
                </Link>

            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="items-stretch hidden lg:flex">

                    

                    {isAuthenticated() ?
                        <Link to="/orders" className="btn btn-ghost btn-sm rounded-btn" >
                            Orders
                        </Link>
                        : <p></p>}
                    {/* <Link to="/orders" className="btn btn-ghost btn-sm rounded-btn" >
                        Orders
                    </Link> */}

                    {isAuthenticated() ?
                        <Link to="/transactions" className="btn btn-ghost btn-sm rounded-btn">
                            Transactions
                        </Link>
                        : <p></p>}

                </div>
            </div>
            <div className="flex-none pr-4">
                {isAuthenticated() ?
                    <Link to="/profile" className="btn btn-ghost btn-sm rounded-btn">
                        Profile
                    </Link>
                    : <p></p>}


            </div>

            <div className="flex-none pr-4">
                {!isAuthenticated() ?
                    <Link to="/login" className="btn btn-ghost btn-sm rounded-btn">
                        Login
                    </Link>
                    : <p></p>}


            </div>

            <div className="flex-none pr-4">
                {isAuthenticated() ?
                    <a className="btn btn-ghost btn-sm rounded-btn" onClick={onLogOut}
                    >
                        Log out
                    </a>
                    : <p></p>}


            </div>
        </div>

    )
}

export default Navbar