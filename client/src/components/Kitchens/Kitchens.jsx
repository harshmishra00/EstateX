import React from 'react';
import { Reveal } from '../animations/Reveal';

const kitchens = [
    {
        id: 1,
        title: "Modern Island Kitchen",
        description: "Spacious and elegant designs perfect for contemporary homes.",
        image: "https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        title: "L-Shaped Modular",
        description: "Efficient use of corner spaces with premium finishes.",
        image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        title: "Compact Parallel",
        description: "Ideal for maximizing workflow in narrow spaces.",
        image: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        title: "Luxury U-Shaped",
        description: "The ultimate culinary workspace with ample storage.",
        image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

function Kitchens() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
                            Premium Modular Kitchens
                        </h2>
                    </Reveal>
                    <Reveal delay={0.3} width="100%">
                        <p className="mt-4 text-xl text-gray-500 text-center">
                            Discover our exclusive range of modular kitchens designed for style and functionality.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {kitchens.map((kitchen, index) => (
                        <Reveal key={kitchen.id} delay={index * 0.2} direction="up" width="100%">
                            <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-full">
                                <div className="aspect-w-3 aspect-h-4 h-64 md:h-80">
                                    <img
                                        src={kitchen.image}
                                        alt={kitchen.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-white text-xl font-bold mb-1">{kitchen.title}</h3>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        {kitchen.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Kitchens;