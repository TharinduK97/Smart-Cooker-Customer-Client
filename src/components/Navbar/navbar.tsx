import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
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
                    <Link to="/orders" className="btn btn-ghost btn-sm rounded-btn" >
                        Orders
                    </Link>
                    <Link to="/transactions" className="btn btn-ghost btn-sm rounded-btn">
                        Transactions
                    </Link>
                    

                </div>
            </div>
            <div className="flex-none pr-4">
            <Link to="/profile" className="btn btn-ghost btn-sm rounded-btn">
                        Profile
                    </Link>

            </div>

            <div className="flex-none pr-4">
            <Link to="/login" className="btn btn-ghost btn-sm rounded-btn">
                        Login
                    </Link>

            </div>

            <div className="flex-none pr-4">
            <a className="btn btn-ghost btn-sm rounded-btn">
                        Log out
                    </a>

            </div>
        </div>

    )
}

export default Navbar