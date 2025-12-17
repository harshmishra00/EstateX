import React from "react";

const teamMembers = [
    {
        id: 1,
        name: "Harsh Mishra",
        role: "Lead Developer",
        bio: "Full Stack Developer passionate about building scalable web applications. Expert in React and Node.js.",
        avatar: "https://avatars.githubusercontent.com/u/99369047?v=4",
        github: "https://github.com/harshmishra00",
        stats: { repos: "25+", followers: "50+", following: "10+" }
    },
    {
        id: 2,
        name: "Deepak",
        role: "Backend Engineer",
        bio: "Specialist in database optimization and server-side logic. Ensuring smooth data flow and security.",
        avatar: "https://github.com/adarshh8.png",
        github: "https://github.com/adarshh8",
        stats: { repos: "15+", followers: "30+", following: "20+" }
    },
    {
        id: 3,
        name: "Jatin",
        role: "UI/UX Designer",
        bio: "Creative designer focused on crafting intuitive and beautiful user interfaces that delight users.",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com",
        stats: { repos: "10+", followers: "100+", following: "50+" }
    }
];

function AboutUs() {
    return (
        <div className="h-full overflow-y-auto bg-slate-50">

            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="bg-white rounded-3xl shadow-lg p-8 text-center transition-transform hover:-translate-y-2 duration-300">
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-slate-200 object-cover"
                            />

                            <h2 className="text-2xl font-semibold text-gray-900">{member.name}</h2>
                            <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full mt-2 font-medium">
                                {member.role}
                            </span>
                            <p className="text-slate-500 mt-4 mb-6">{member.bio}</p>

                            <div className="flex justify-around border-t border-slate-100 pt-6">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{member.stats.repos}</h3>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide">Repos</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{member.stats.followers}</h3>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide">Followers</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{member.stats.following}</h3>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide">Following</p>
                                </div>
                            </div>

                            <a
                                href={member.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block mt-8 px-6 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 transition w-full"
                            >
                                Visit Profile
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
