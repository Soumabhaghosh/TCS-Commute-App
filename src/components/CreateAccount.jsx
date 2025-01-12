import React, { useState } from 'react';
import '../styles/CreateAccount.css'; // Import your CSS

const CreateAccount = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        employeeId: '',
        newPassword: '',
        repeatPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to server)
        console.log(formData);
        alert("Form submitted successfully")
    };

    const pages = [
        {
            title: 'Personal Information',
            content: (
                <div >
                    <h1>Hello</h1>

                    <p>Thank you for connecting,</p>

                    <h2>Basic details</h2>
                    <label htmlFor="name">Enter your name please</label>
                    <input type="text" id="name" placeholder="Click here & type" />
                    <label htmlFor="employeeId">Employee ID</label>
                    <input type="text" id="employeeId" placeholder="Click here & type" />
                    <h2>Set your password</h2>
                    <label htmlFor="newPassword">New password</label>
                    <input type="password" id="newPassword" placeholder="Click here & type" />
                    <div className="password-requirements">At least 8 characters and 2 numbers</div>
                    <label htmlFor="repeatPassword">Repeat new password</label>
                    <input type="password" id="repeatPassword" placeholder="Click here & type" />

                </div>
            ),
        },
        {
            title: 'Account Details',
            content: (
                <div>
                    <h2>Global presence</h2>

                    <div class="form-group">
                        <div>
                            <label for="geography">Geography</label>
                            <select id="geography">
                                <option>Europe</option>
                                <option>Asia</option>
                                <option>North America</option>
                            </select>
                        </div>
                        <div>
                            <label for="operatingCountry">Operating country</label>
                            <select id="operatingCountry">
                                <option>Australia</option>
                                <option>USA</option>
                                <option>India</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <label for="officeCity">TCS office city</label>
                            <input type="text" id="officeCity" placeholder="Type here eg, Pune" />
                        </div>
                        <div>
                            <label for="baseLocation">Base location</label>
                            <select id="baseLocation">
                                <option>Select</option>
                            </select>
                        </div>
                    </div>

                    <h2>Account and project details</h2>

                    <div class="form-group">
                        <div>
                            <label for="accountName">TCS Account name</label>
                            <select id="accountName">
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <label for="projectName">TCS Project name</label>
                            <select id="projectName">
                                <option>Select</option>
                            </select>
                        </div>
                    </div>

                </div>
            ),
        },
        {
            title: 'Preferences',
            content: (
                <div>
                    <input type="checkbox" id="newsletter" />
                    <label htmlFor="newsletter">Subscribe to newsletter</label>
                </div>
            ),
        },
    ];

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="create-account-container">
            <div className="slider-container" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
                {pages.map((page, index) => (
                    <div key={index} className="page">
                        <h2>{page.title}</h2>
                        {page.content}
                    </div>
                ))}
            </div>
            <div className="navigation-buttons">
                <button onClick={handlePrevious} disabled={currentPage === 0}>
                    Previous
                </button>
                <button onClick={handleNext} disabled={currentPage === pages.length - 1}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default CreateAccount;