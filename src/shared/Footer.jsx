import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer bg-stone-800 text-white p-10 grid grid-cols-1 md:grid-cols-10 justify-around items-center">
            <div className="md:col-span-3 space-y-3">
                <div className="flex flex-row md:flex-col lg:flex-row items-center gap-3">
                    <img className="w-16 h-16" src="/sprint.png" alt="" />
                    <h2 className="text-4xl font-bold">SprintSphere</h2>
                </div>
                <p className="text-base">SprintSphere: Your ultimate platform for organizing and joining marathons. Connect, manage, and participate with ease through our streamlined system.</p>

            </div>
            <div className="md:col-span-1">

            </div>
            <div className="md:col-span-2">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div className="md:col-span-2">
                <h6 className="footer-title">Fundraising</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div className="md:col-span-2">

                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-3 text-3xl">
                    <Link to="https://www.facebook.com/profile.php?id=100095084532947">
                        <FaFacebook />
                    </Link>
                    <FaTwitter />
                    <Link to="https://www.instagram.com/__hydro_carbon__">
                        <FaInstagram />
                    </Link>
                    <Link to="https://www.linkedin.com/in/istiaq-ahsan">
                        <FaLinkedin />
                    </Link>
                </div>

            </div>


        </div>
    );
};

export default Footer;