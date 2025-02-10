import React, { useState } from 'react';
import '../styles/CreateAccount.css'; // Import your CSS
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const CreateAccount = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [transportCount, setTransportCount] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        employeeId: '',
        newPassword: '',
        repeatPassword: '',
        geography: '',
        operatingCountry: '',
        officeCity: '',
        baseLocation: '',
        accountName: '',
        projectName: '',
        transportData: [{ mode: "Car", fuel: "Diesel", distance: "" }]
    })
    const handleChange = (e) => {
        const count = parseInt(e.target.value) || 1;
        setTransportCount(count);

        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
        setFormData((prev) => {
            const newData = { ...prev }

            while (newData.transportData.length < count) {
                newData.transportData.push({ mode: "Car", fuel: "Diesel", distance: "" })
            }

            newData.transportData = newData.transportData.slice(0, count)
            return newData
        })
    }
    const handleInputChange = (index, field, value) => {
        const updatedData = {...formData};
        updatedData.transportData[index][field] = value;
        setFormData(updatedData);
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
                    <input type="text" id="name" placeholder="Click here & type" name="name" value={formData.name} onChange={handleChange} />

                    <label htmlFor="employeeId">Employee ID</label>
                    <input type="text" id="employeeId" name="employeeId" placeholder="Click here & type" value={formData.employeeId} onChange={handleChange} />
                    <h2>Set your password</h2>

                    <label htmlFor="newPassword">New password</label>
                    <input type="password" id="newPassword" name="newPassword" placeholder="Click here & type" value={formData.newPassword} onChange={handleChange} />

                    <div className="password-requirements">At least 8 characters and 2 numbers</div>

                    <label htmlFor="repeatPassword">Repeat new password</label>
                    <input type="password" id="repeatPassword" placeholder="Click here & type" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} />

                </div>
            ),
        },
        {
            title: 'Account Details',
            content: (
                <div>
                    <h2>Global presence</h2>

                    <div className="form-group">
                        <div>
                            <label htmlFor="geography">Geography</label>
                            <select id="geography" name="geography" value={formData.geography} onChange={handleChange}>
                                <option value="Europe">Europe</option>
                                <option value="Asia">Asia</option>
                                <option value="North America">North America</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="operatingCountry">Operating country</label>
                            <select id="operatingCountry" name="operatingCountry" value={formData.operatingCountry} onChange={handleChange}>
                                <option value="Austrelia">Australia</option>
                                <option value="USA">USA</option>
                                <option value="India">India</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="officeCity">TCS office city</label>
                            <input type="text" id="officeCity" placeholder="Type here eg, Pune" name="officeCity" value={formData.officeCity} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="baseLocation">Base location</label>
                            <select id="baseLocation" name="baseLocation" value={formData.baseLocation} onChange={handleChange}>
                                <option value="Kolkata">Kolkata</option>
                            </select>
                        </div>
                    </div>

                    <h2>Account and project details</h2>

                    <div className="form-group">
                        <div>
                            <label htmlFor="accountName">TCS Account name</label>
                            <select id="accountName" name="accountName" value={formData.value} onChange={handleChange}>
                                <option value="Utilities">Utilities</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="projectName">TCS Project name</label>
                            <select id="projectName" name="projectName" value={formData.projectName} onChange={handleChange}>
                                <option value="Engie SA">Engie SA</option>
                            </select>
                        </div>
                    </div>

                </div>
            ),
        },
        {
            title: 'Preferences',
            content: (
                <>
                    <h2>Calculate your carbon emissions</h2>
                    <label>Number of modes of transport you use daily: </label>
                    <input
                        type="number"
                        value={transportCount}
                        min="1"
                        max="5"
                        onChange={handleChange}
                    />

                    {Array.from({ length: transportCount }, (_, i) => (
                        <div key={i} className="transport-section" style={{ display: 'flex', gap: '15px', marginTop: '10px', width: '100%' }}>
                            <span>{i + 1}.</span>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label style={{ fontSize: '12px' }}>Transport mode</label>
                                <select style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '150px' }} value={formData.transportData[i]?.mode}
                                    onChange={(e) => handleInputChange(i, "mode", e.target.value)}>
                                    <option>Car</option>
                                    <option>Train</option>
                                    <option>Bicycle</option>
                                    <option>Bus</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label style={{ fontSize: '12px' }}>Fuel type</label>
                                <select style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '150px' }} value={formData.transportData[i]?.fuel}
                                    onChange={(e) => handleInputChange(i, "fuel", e.target.value)}>
                                    <option>Diesel</option>
                                    <option>Petrol</option>
                                    <option>Electric</option>
                                    <option>NA</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label style={{ fontSize: '12px' }}>Distance</label>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input type="number" placeholder="Enter" style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} value={formData.transportData[i]?.distance}
                                        onChange={(e) => handleInputChange(i, "distance", e.target.value)} />
                                    <span style={{ marginLeft: '5px' }}>km</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </>
            ),
        },
    ];

    const handleNext = () => {

        if (currentPage == 2) {
            console.log(formData);

        }




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
                {(currentPage == 0) ? <Link to='/'><Button onClick={handlePrevious} variant="solid" colorPalette="green" size="md" p={3}> Back </Button></ Link> : <Button onClick={handlePrevious} variant="solid" colorPalette="green" size="md" p={3}> Back </Button>}

                <Button onClick={handleNext} variant="solid" colorPalette="green" size="md" p={3}>
                    {(currentPage == 1) && <>Proceed</>}  {(currentPage == 0) && <>Confirm</>} {(currentPage == 2) && <>Calculate</>}
                </Button>
            </div>
        </div>
    );
};

export default CreateAccount;