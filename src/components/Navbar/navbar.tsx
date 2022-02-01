import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
            <div className="flex-none px-2 mx-2">
                <a >
                    <span className="text-lg font-bold">
                        Smart Cookers
                    </span>
                </a>

            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="items-stretch hidden lg:flex">
                    <a className="btn btn-ghost btn-sm rounded-btn" >
                        Orders
                    </a>
                    <a className="btn btn-ghost btn-sm rounded-btn">
                        Transactions
                    </a>
                    

                </div>
            </div>


            <div className="flex-none pr-4">
            <a className="btn btn-ghost btn-sm rounded-btn">
                        Login
                    </a>

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