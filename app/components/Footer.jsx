import React from "react";
import Image from "next/image";
// Import Image
import logo from "../../public/logo.svg";
const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex justify-between">
                <span><Image src={ logo } alt="logo" width={ 150 } height={ 150 } /></span>
                <p className="text-slate-600">All rights reserved. </p>
            </div>
        </footer>
    );
};

export default Footer;
