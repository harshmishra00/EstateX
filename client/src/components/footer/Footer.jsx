import "./footer.scss";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer bg-slate-50 border-t border-gray-200 text-gray-800 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <Link to="/" className="flex items-center gap-2 transform hover:scale-105 transition-transform">
                            <img src="/logo.png" alt="" className="w-8 h-8 object-contain" />
                            <span className="text-xl font-serif font-bold tracking-tight text-gray-900">EstateX</span>
                        </Link>
                        <p className="text-gray-500 text-sm font-light">
                            © {new Date().getFullYear()} EstateX. All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => {
                            let IconComponent;
                            switch (social) {
                                case 'facebook':
                                    IconComponent = FaFacebookF;
                                    break;
                                case 'twitter':
                                    IconComponent = FaTwitter;
                                    break;
                                case 'instagram':
                                    IconComponent = FaInstagram;
                                    break;
                                case 'linkedin':
                                    IconComponent = FaLinkedinIn;
                                    break;
                                default:
                                    IconComponent = null;
                            }
                            return (
                                <a key={social} href="#" className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300 text-gray-400">
                                    <span className="sr-only">{social}</span>
                                    {IconComponent && <IconComponent className="w-4 h-4" />}
                                </a>
                            );
                        })}
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
