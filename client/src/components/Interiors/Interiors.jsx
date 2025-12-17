import React from 'react';
import { Reveal } from '../animations/Reveal';

const interiors = [
    {
        id: 1,
        category: "Living Room",
        title: "Modern Minimalist Lounge",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Clean lines, neutral tones, and abundant natural light create a serene, uncluttered gathering space.",
        size: "large"
    },
    {
        id: 2,
        category: "Master Bedroom",
        title: "Cozy Scandinavian Retreat",
        image: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Soft textures and warm wood finishes designed for ultimate relaxation.",
        size: "small"
    },
    {
        id: 3,
        category: "Home Office",
        title: "Executive Workspace",
        image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Productivity meets style with ergonomic furniture and smart lighting solutions.",
        size: "small"
    }
];

function Interiors() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <Reveal>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Curated Interiors</h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-xl text-gray-500 font-light">
                                Explore our portfolio of award-winning interior designs. From concept to creation, we craft spaces that reflect your unique personality.
                            </p>
                        </Reveal>
                    </div>
                    <Reveal delay={0.4}>
                        <button to="/all-apartments" className="mt-8 md:mt-0 px-8 py-3 border border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300">
                            View All Designs
                        </button>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <Reveal direction="zoom" delay={0.2} width="100%">
                        <div className="group relative overflow-hidden rounded-3xl h-[400px] md:h-[600px] cursor-pointer">
                            <img
                                src={interiors[0].image}
                                alt={interiors[0].title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <span className="text-amber-400 text-sm font-bold tracking-wider uppercase mb-2 block">
                                        {interiors[0].category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-3">
                                        {interiors[0].title}
                                    </h3>
                                    <p className="text-gray-300 text-lg max-w-lg hidden md:block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {interiors[0].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>


                    <div className="flex flex-col gap-8 h-[600px]">
                        {interiors.slice(1).map((item, index) => (
                            <Reveal key={item.id} delay={0.4 + (index * 0.2)} direction="right" width="100%" className="flex-1">
                                <div className="group relative h-full overflow-hidden rounded-3xl cursor-pointer">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90">
                                        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-1 block">
                                                {item.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Interiors;
