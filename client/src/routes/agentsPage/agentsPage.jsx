import "./agentsPage.scss";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const agents = [
    {
        id: 1,
        name: "John Doe",
        role: "Senior Broker",
        phone: "+1 234 567 890",
        email: "john@estatex.com",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Real Estate Agent",
        phone: "+1 987 654 321",
        email: "jane@estatex.com",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 3,
        name: "Mike Johnson",
        role: "Property Manager",
        phone: "+1 555 123 456",
        email: "mike@estatex.com",
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 4,
        name: "Emily Davis",
        role: "Sales Executive",
        phone: "+1 444 987 654",
        email: "emily@estatex.com",
        img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
];

function AgentsPage() {
    return (
        <div className="agentsPage">
            <div className="header">
                <h1>Meet Our Agents</h1>
                <p>Our team of experienced professionals is dedicated to helping you find your dream home.</p>
            </div>

            <div className="agentsGrid">
                {agents.map((agent) => (
                    <div key={agent.id} className="agentCard">
                        <div className="imageContainer">
                            <img src={agent.img} alt={agent.name} />
                        </div>
                        <div className="info">
                            <h3>{agent.name}</h3>
                            <span className="role">{agent.role}</span>

                            <div className="contactInfo">
                                <div className="item">
                                    <FaPhoneAlt className="icon" />
                                    <span>{agent.phone}</span>
                                </div>
                            </div>

                            <button className="contactBtn">Contact Agent</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AgentsPage;
