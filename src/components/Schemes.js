import React from 'react';
import { Link } from 'react-router-dom';
import './Schemes.css'; // Style as needed
import s_investment from './images/s_investment.jpg';
import s_govt from './images/s_govt.png';
import s_emp from './images/s_emp.jpg';

const Schemes = () => {
    return (
        <div>
            <section className="category-selection"> 
    <h2>Explore the Available Schemes</h2>
    <p style={{ textAlign: "center" }}>
        Select a category below to explore more about the specific schemes that can help you grow financially, personally, and professionally.
    </p>
</section>
            <div className="schemes-container">
                <Link to="/schemes/investment" className="scheme-link">
                    <img src={s_investment} alt="Investment Schemes" />
                    <h3>Investment Schemes</h3>
                    <p>Discover various financial schemes that can help you grow your savings, plan for retirement, and achieve long-term financial goals. </p>
                </Link>

                <Link to="/schemes/government" className="scheme-link">
                    <img src={s_govt} alt="Government Schemes" />
                    <h3>Government Schemes</h3>
                    <p>Access government-backed programs offering financial assistance, education support, healthcare benefits , and more.</p>
                </Link>

                <Link to="/schemes/business" className="scheme-link">
                    <img src={s_emp} alt="Employment & Business Schemes" />
                    <h3>Employment & Business Schemes</h3>
                    <p>Explore opportunities for job seekers and entrepreneurs, including skill development programs, funding for startups, to build a successful career.</p>
                </Link>
            </div>
            <section className="information-section">
                <h2>Why Are Schemes Important?</h2>
                <p>Schemes provide crucial opportunities for individuals to improve their financial, social, and professional well-being. Efficient utilization of these schemes can lead to numerous advantages:</p>
                <ul>
                    <li><strong>Financial Growth:</strong> Investment schemes help individuals grow their wealth by providing access to various financial products.</li>
                    <li><strong>Government Support:</strong> Government schemes offer financial support and services in education, healthcare, welfare, and more.</li>
                    <li><strong>Career Development:</strong> Employment and business schemes can open doors to new job opportunities and help entrepreneurs grow their businesses.</li>
                </ul>
                <h3> Efficient Use of Schemes:</h3>
                <ul>
                    <li><strong>Maximized Benefits:</strong> By understanding and utilizing the schemes effectively, you can access maximum benefits and improve your overall quality of life.</li>
                    <li><strong>Financial Independence:</strong> Investment and government schemes can provide financial independence, particularly in the long term.</li>
                    <li><strong>Career and Business Success:</strong> Employment and business schemes enable skill development and help individuals create a successful career or business.</li>
                </ul>
            </section>
        </div>
    );
};

export default Schemes;
