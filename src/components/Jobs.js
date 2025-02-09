import React from 'react';
import './Camp.css';
import { useNavigate } from 'react-router-dom';

const jobData = [
  {
    ngoName: 'Helping Hands',
    jobRole: 'Volunteer Coordinator',
    criteria: 'Excellent communication skills, prior volunteer experience preferred',
    location: 'Mumbai, India',
    image: 'https://th.bing.com/th/id/R.6a74a45263a71ebe8451dfccced125d3?rik=NhhMi6INJDo%2bvg&riu=http%3a%2f%2fchurchofgodlittleton.com%2fwp-content%2fuploads%2f2013%2f12%2fhelpinghands1.png&ehk=B3tfV9u3FxCyWvAZ6L8p4ZQ9dc6oSdsWYVrlcdsvi8I%3d&risl=&pid=ImgRaw&r=0',
    formLink : 'https://docs.google.com/forms/d/e/1FAIpQLScAMN8wTzg4ul-g_shgBGvg7uXnokjFILVKC3rdoahNNIi0Bw/viewform?usp=sharing'
  
    
    //  // Replace with actual image URLs
  },
  {
    ngoName: 'Green Earth Initiative',
    jobRole: 'Environment Analyst',
    criteria: 'Degree in Environmental Science, passion for sustainability',
    location: 'Bangalore, India',
    image: 'https://th.bing.com/th/id/R.a687abb4bbb03443bc838fb67583b165?rik=%2fld2uAPTFIlcvw&riu=http%3a%2f%2fwww.green-rootz.com%2fwp-content%2fuploads%2f2015%2f09%2fGlobal_Reach.png&ehk=a8BxcOqh7zCY7cLFKpELUhWY1eZz%2f4qI2JqqnJU0BQw%3d&risl=&pid=ImgRaw&r=0',
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScAMN8wTzg4ul-g_shgBGvg7uXnokjFILVKC3rdoahNNIi0Bw/viewform?usp=sharing'
  },
  {
    ngoName: 'Care for All',
    jobRole: 'Healthcare Assistant',
    criteria: 'Background in healthcare, willingness to travel',
    location: 'Delhi, India',
    image:'https://tse1.mm.bing.net/th/id/OIP.nLNbCqsIsjAGfzVN7TaZEAHaE8?rs=1&pid=ImgDetMain',
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScAMN8wTzg4ul-g_shgBGvg7uXnokjFILVKC3rdoahNNIi0Bw/viewform?usp=sharing'
  
    },
];

const Jobs = () => {
  const navigate = useNavigate(); // Move useNavigate inside the component

  const handleCampaignNavigation = () => {
    navigate('/Camp'); // Navigate to the campaign page
  };

  return (
    <div className="jobs-container">
      <h1>Available Job Opportunities</h1>
      <div className="cards">
        {jobData.map((job, index) => (
          <div className="card" key={index}>
            <img src={job.image} alt={job.ngoName} />
            <div className="card-content">
              <h2>{job.ngoName}</h2>
              <p><strong>Job Role:</strong> {job.jobRole}</p>
              <p><strong>Criteria:</strong> {job.criteria}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <a href={job.formLink} target="_blank" rel="noopener noreferrer">
                <button className="apply-button">Apply Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="unskilled-section">
        <h2>Are you unskilled?</h2>
        <button className="campaign-button" onClick={handleCampaignNavigation}>
          Explore Campaigns to Learn and Earn
        </button>
      </div>
    </div>
  );
};

export default Jobs;
