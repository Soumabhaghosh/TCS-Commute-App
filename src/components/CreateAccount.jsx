import React, { useState } from 'react';
import '../styles/CreateAccount.css'; // Import your CSS

const CreateAccount = () => {
    const [currentPage, setCurrentPage] = useState(0);
   const [formData,setFormData]= useState({
    name:'',
    employeeId:'',
    newPassword:'',
    repeatPassword:'',
    geography:'',
    operatingCountry:'',
    officeCity:'',
    baseLocation:'',
    accountName:'',
    projectName:'',
  })
  const handleChange = (e)=>{
    setFormData(prev => ({...prev,[e.target.name]:e.target.value}))
  }

    const pages = [
        {
            title: 'Personal Information',
            content: (
                <div >
                    <h1>Hello</h1>

                    <p>Thank you for connecting,</p>

                    <h2>Basic details</h2>
                    <label htmlFor="name">Enter your name please</label>
                    <input type="text" id="name" placeholder="Click here & type" name="name" value={formData.name} onChange={handleChange}/>

                    <label htmlFor="employeeId">Employee ID</label>
                    <input type="text" id="employeeId" name="employeeId" placeholder="Click here & type" value={formData.employeeId} onChange={handleChange}/>
                    <h2>Set your password</h2>

                    <label htmlFor="newPassword">New password</label>
                    <input type="password" id="newPassword" name="newPassword" placeholder="Click here & type" value={formData.newPassword} onChange={handleChange}/>
        
                    <div className="password-requirements">At least 8 characters and 2 numbers</div>

                    <label htmlFor="repeatPassword">Repeat new password</label>
                    <input type="password" id="repeatPassword" placeholder="Click here & type" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange}/>

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
                            <select id="geography" name="geography" value={formData.geography}  onChange={handleChange}>
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
                            <input type="text" id="officeCity" placeholder="Type here eg, Pune" name="officeCity" value={formData.officeCity} onChange={handleChange}/>
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
                <div>
                    <input type="checkbox" id="newsletter" />
                    <label id="news-letter" htmlFor="newsletter">Subscribe to newsletter</label>
                </div>
            ),
        },
    ];

    const handleNext = () => {
        
            if(currentPage==2){
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
                <button onClick={handlePrevious} disabled={currentPage === 0}>
                    Back
                </button>
                <button onClick={handleNext} >
                {(currentPage==1)&&<>Proceed</>}  {(currentPage==0)&&<>Confirm</>} {(currentPage==2)&&<>Calculate</>}
                </button>
            </div>
        </div>
    );
};

export default CreateAccount;