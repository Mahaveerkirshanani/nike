import React from "react";

// Fake team member details
const teamMembers = [
  {
    name: "Mahavaeer kumar",
    role: "CEO & Founder",
    description:
      "Mahaveer kumar is CEO and Full Stack Web Developer .",
    imgURL: "/banner/WhatsApp Image 2024-07-19 at 12.05.12_a4b17941.jpg",
  },
  {
    name: "David Johnson",
    role: "Head of Design",
    description:
      "David is the creative mind behind our innovative designs, ensuring our products are both stylish and functional.",
    imgURL: "/banner/doll.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Marketing Director",
    description:
      "Sophia drives our marketing strategies and campaigns, helping us reach new audiences and grow our brand.",
    imgURL: "/banner/doll1.jpg",
  },
  {
    name: "Michael Brown",
    role: "Customer Support Lead",
    description:
      "Michael ensures that our customers receive exceptional support, addressing their queries and concerns promptly.",
    imgURL: "/banner/profile.jpg",
  },
];

const OurTeam: React.FC = () => {
  return (
    <section className="px-5 lg:px-12 py-12 bg-gray-100" id="about-us">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Meet Our <span className="text-[#FB7185]">Team</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Our team is dedicated to bringing you the best products and
          experiences. Learn more about the people behind our brand.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 text-center"
          >
            <img
              src={member.imgURL}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#FB7185]"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 tracking-wider">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2 font-semibold tracking-widest ">{member.role}</p>
            <p className="text-gray-500 tracking-wider font-semibold text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
