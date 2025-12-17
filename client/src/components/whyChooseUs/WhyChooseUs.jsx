import React from 'react';
import { Reveal } from '../animations/Reveal';

function WhyChooseUs() {
    const benefits = [
        {
            id: 1,
            number: "01",
            title: "Trusted Reputation",
            description: "Over 16 years of excellence in the real estate market, building trust one home at a time.",
        },
        {
            id: 2,
            number: "02",
            title: "Wide Range of Properties",
            description: "From cozy city apartments to sprawling luxury villas, we have the perfect match for every lifestyle.",
        },
        {
            id: 3,
            number: "03",
            title: "Transparent Process",
            description: "No hidden fees, no surprises. We believe in complete transparency and honesty in every transaction.",
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    <div className="lg:col-span-4">
                        <Reveal>
                            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-3 block">Our Promise</span>
                            <h2 className="text-4xl lg:text-5xl font-serif font-medium text-gray-900 mb-6 leading-tight">
                                Why Choose Us?
                            </h2>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                                We don't just find you a place to live; we find you a place to call home. Experience the difference with our dedicated team.
                            </p>
                        </Reveal>
                        <Reveal delay={0.5} direction="right">
                            <div className="h-px w-24 bg-amber-500"></div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <Reveal key={benefit.id} delay={0.4 + (index * 0.2)} direction="up" width="100%">
                                <div className="group relative p-6 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl hover:-translate-y-1 h-full">
                                    <span className="text-6xl font-serif text-gray-100 absolute top-4 right-4 group-hover:text-amber-50 transition-colors duration-300 select-none">
                                        {benefit.number}
                                    </span>
                                    <div className="relative z-10 pt-8">
                                        <h3 className="text-xl font-serif font-medium text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed text-sm">
                                            {benefit.description}
                                        </p>
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

export default WhyChooseUs;
