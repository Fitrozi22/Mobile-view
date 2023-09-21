import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Success = () => {
    return (
        <>
        <Navbar />
        <div className="min-h-[650px] flex items-center">
            
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                        Thank you for ordering our services !
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Your order has been placed successfully.
                    </div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline">Transportation@bluebird.com</div>

                    <Link href="/" className="font-bold mt-5">
                        Continue Ordering
                    </Link>
                </div>
        </div>
        </>
    );
};

export default Success;
