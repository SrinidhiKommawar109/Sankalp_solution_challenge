import React from 'react';
import './Jobs.css'; // Ensure the CSS file exists and has relevant styles

const Camp = () => {
  const jobs = [
    {
      name: "Women's Empowerment",
      ngoName: "SEWA",
      duration: "10-20 days",
      location: "India",
      image: "https://www.cadilapharma.com/ast/uploads/2019/07/Cadila-Pharmaceuticals-Khatla-Bharat-Initiative--e1571315574763.jpg",
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScAMN8wTzg4ul-g_shgBGvg7uXnokjFILVKC3rdoahNNIi0Bw/viewform?usp=sharing'
    },
    {
      name: "Revive Handloom Revival",
      ngoName: "Fabindia Foundation",
      duration: "15-30 days",
      location: "Rural",
      image: "https://tse4.mm.bing.net/th/id/OIP.aG6hx88da0dw4W9etvNFxAHaEK?rs=1&pid=ImgDetMain",
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScAMN8wTzg4ul-g_shgBGvg7uXnokjFILVKC3rdoahNNIi0Bw/viewform?usp=sharing'
  
    },
    {
      name: "Usha Silai School Initiative",
      ngoName: "Usha International",
      duration: "7-10 days",
      location: "Rural",
      image: "https://tse4.mm.bing.net/th/id/OIP.4-vxyjfFVUXTuNq2sPvhCwHaEw?rs=1&pid=ImgDetMain",
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScAMN8wTzg4ul-g_shgBGvg7uXnokjFILVKC3rdoahNNIi0Bw/viewform?usp=sharing'
  
    },
    {
      name: "Sustainable Livelihoods",
      ngoName: "Heifer International",
      duration: "5-7 days",
      location: "Telangana",
      image: "https://tse2.mm.bing.net/th/id/OIP.eFdHCAmqIpcU_Nlg2aLGIgHaD6?w=324&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScAMN8wTzg4ul-g_shgBGvg7uXnokjFILVKC3rdoahNNIi0Bw/viewform?usp=sharing'
  
    },
  ];

  return (
    <div className="jobs-container">
      <h1>Job Opportunities with NGOs</h1>
      <div className="job-cards">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <img src={job.image} alt={job.name} className="job-image" />
            <div className="job-details">
              <h2>{job.name}</h2>
              <p><strong>NGO Name:</strong> {job.ngoName}</p>
              <p><strong>Duration:</strong> {job.duration}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <a href={job.formLink} target="_blank" rel="noopener noreferrer">
                <button className="apply-button">Apply Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Camp;
