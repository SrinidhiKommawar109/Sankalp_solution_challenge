import React, { useState } from 'react';
import './Get.css'; // Make sure the corresponding styles are updated

const Get = () => {
  const [serviceRequest, setServiceRequest] = useState('');
  const [contactDetails, setContactDetails] = useState('');

  const handleRequestService = () => {
    alert(`Thank you! Your request for ${serviceRequest} has been submitted.`);
  };

  const products = [
    {
      productName: 'Medical Service',
      ngoName: 'Swasth Foundation',
      image: 'https://th.bing.com/th/id/R.f9d9a10d2e515b2e3a630a6878548a23?rik=kp%2blKykzxUBQlg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-JihDAfgHLVg%2fTvJGqvnnKtI%2fAAAAAAAAJyM%2fKDoHcekgt0w%2fs1600%2fBagForLife.jpg&ehk=i77iyiXoPk7m30hMVz5PiW92cuJyIBTSJLF84Qupof0%3d&risl=&pid=ImgRaw&r=https://www.bing.com/images/search?view=detailV2&ccid=OL6eHBay&id=0C7A0DFD9A0A970D1C7988D5A06224C1427A155A&thid=OIP.OL6eHBay7ERqzBsSpLZhDwHaEg&mediaurl=https%3a%2f%2flive.staticflickr.com%2f1825%2f41020937370_bd21aa4750.jpg&exph=304&expw=500&q=services+to+the+local+people+from+ngos&simid=608045251344012149&FORM=IRPRST&ck=FD5E3FBE3FD55DA13DE6B786227693A5&selectedIndex=48&itb=0', // Example image URL
      location: 'Hyderabad'
    },
    {
      productName: 'Food service',
      ngoName: 'Annamrita Foundation',
      image: 'https://tse2.mm.bing.net/th/id/OIP.Fg8KmoHKSC_Ml--jpiE74wHaE8?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', // Example image URL
      location: 'Bangalore'
    },
  ];

  return (
    <div className="get-page">
      <div className="get-container">
        <h1>Get Services</h1>
        <p>Explore community-driven products and services available from NGOs.</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Service Needed:
            <input
              type="text"
              value={serviceRequest}
              onChange={(e) => setServiceRequest(e.target.value)}
              placeholder="Describe the service you need"
            />
          </label>
          <label>
            Your Contact Details:
            <input
              type="text"
              value={contactDetails}
              onChange={(e) => setContactDetails(e.target.value)}
              placeholder="Enter your email or phone number"
            />
          </label>
          <button type="button" onClick={handleRequestService}>
            Request Service
          </button>
        </form>

        <h2>Available Services</h2>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.productName} />
              <h3>{product.productName}</h3>
              <p><strong>NGO:</strong> {product.ngoName}</p>
              <p><strong>Location:</strong> {product.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Get;
