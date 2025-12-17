import React, { useContext } from 'react'
import { Reveal } from '../animations/Reveal';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function WeSell() {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleStartSelling = () => {
        if (currentUser) {
            navigate("/add");
        } else {
            navigate("/login");
        }
    };

    return (
        <section className="py-20 bg-amber-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="lg:w-1/2">
                        <Reveal>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                We Sell Your Home <br />
                                <span className="text-amber-600">Faster & Better</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Unlock the true potential of your property with our expert selling strategies.
                                We combine market insights, premium marketing, and a vast network of buyers
                                to ensure you get the best deal in the shortest time.
                            </p>
                        </Reveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <Reveal delay={0.6} direction="right">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Maximized Value</h3>
                                        <p className="text-gray-500 text-sm">Get top dollar for your property</p>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal delay={0.8} direction="right">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Quick Turnaround</h3>
                                        <p className="text-gray-500 text-sm">Sell in weeks, not months</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <Reveal delay={1.0}>
                            <button
                                onClick={handleStartSelling}
                                className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg transform hover:-translate-y-1"
                            >
                                Start Selling Today
                            </button>
                        </Reveal>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-10 -right-10 w-full h-full bg-amber-200 rounded-3xl opacity-30 transform rotate-3"></div>
                        <Reveal direction="left" delay={0.5} duration={0.8} width="100%">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Luxury Home"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                                    <p className="text-white text-xl font-medium">Trusted by 1000+ Owners</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WeSell