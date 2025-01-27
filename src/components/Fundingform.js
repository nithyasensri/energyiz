import React from 'react';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark, faBuilding, faHouse, faHouseLaptop } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

const Fundingform = () => {
    const [maindata, setData] = useState(true)
    // const [que, setQue] = useState(true);
    const [qustep, setQustep] = useState(1);

    const [step, setStep] = useState(0); // Step state to track progress
    const [propertyType, setPropertyType] = useState(""); // Stores the selected property type
    const [subType, setSubType] = useState(""); // Stores the selected sub-type
    const [rooms, setRooms] = useState([]); // Stores room options for display
    const [showRestart, setShowRestart] = useState(true);

    const [conditionType, setConditionType] = useState('')
    const [noroom, setNoRoom] = useState()
    const [insulationtype, setInsulationtype] = useState('')
    const [content, setContent] = useState(false)

    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleYes = () => {
        // setQue(false); 
        setStep(1);
        setShowRestart(false);
        setProgress((prevProgress) => {
            // Ensure progress does not exceed 100%
            const newProgress = prevProgress + 20;
            return newProgress > 100 ? 100 : newProgress;
        });
    };

    const handleNo = () => {
        setQustep((prevQustep) => prevQustep + 1); // Move to the next step
    };

    const handlePropertyType = (type) => {
        setPropertyType(type);

        // Set sub-types and room options based on property type
        if (type === "Flat") {
            setSubType("Flat Options");
            setRooms([1, 2]);
        } else if (type === "House" || type === "Bungalow") {
            setSubType("House/Bungalow Options");
            setRooms([1, 2, 3, 4, 5, 6]);
        }
        setProgress((prevProgress) => {
            // Ensure progress does not exceed 100%
            const newProgress = prevProgress + 20;
            return newProgress > 100 ? 100 : newProgress;
        });

        // setStep(2); // Move to sub-type and room selection step
    };

    const prevPage = () => {

        if (step === 1) {
            setShowRestart(true)
            setStep(0)
        }
        else {
            setShowRestart(true)
            setStep((prevQustep) => prevQustep - 1)
        }
        setProgress((prevProgress) => {
            // Ensure progress does not exceed 100%
            const newProgress = prevProgress - 20;
            return newProgress > 100 ? 100 : newProgress;
        });

    }

    const nextPage = () => {
        setStep((prevQustep) => {
            const newStep = prevQustep + 1;

            // Check the condition based on the updated step
            if (newStep === 4) {
                console.log('step');
                setContent(true);
                setData(false);
            }

            return newStep;
        })
        setProgress((prevProgress) => {
            // Ensure progress does not exceed 100%
            const newProgress = prevProgress + 20;
            return newProgress > 100 ? 100 : newProgress;
        });

    }


    const [progress, setProgress] = useState(25); // State to track progress

    const [formData, setFormData] = useState({
        first: "",
        last: "",
        address1: "",
        address2: "",
        option: "",
        city: "",
        postcode: "",
        phone: "",
        email: "",
        dob: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        const data = {
            Name: formData.first,
            Last: formData.last,
            Address1: formData.address1,
            Address2: formData.address2,
            City: formData.city,
            Postcode: formData.postcode,
            Phone: formData.phone,
            Email: formData.email,
            Dob: formData.dob,
            Preferred: formData.option
        }
        axios.post("https://api.sheetbest.com/sheets/c8bd00cc-bc6f-4394-a91b-582b2e713e2a", data)
            .then((res) => console.log(res))

        setTimeout(() => {
            setIsSubmitted(true); 
        }, 1000);
    };

    console.log(subType,insulationtype)
    return (
        <div>
            <Row className='justify-content-center'>
                <Col md={10}>
                    <div style={{ padding: "20px", textAlign: "center" }}>
                        <p>See if you're Eligible</p>
                        <h2 style={{ "fontFamily": "font6" }}>Funding Form</h2>
                        <div
                            style={{
                                width: "100%",
                                height: "30px",
                                backgroundColor: "#f3f3f3",
                                borderRadius: "5px",
                                overflow: "hidden",
                                marginBottom: "10px",
                            }}>
                            <div
                                style={{
                                    width: `${progress}%`,
                                    height: "100%",
                                    backgroundColor: "rgb(0, 185, 214)",
                                    transition: "width 0.3s ease",
                                }}
                            />
                        </div>
                        <p>{progress}%</p>
                    </div>
                </Col>
                <Col md={10}>
                    {maindata && (<div>
                        <h5 style={{ "height": "30px", "background": "grey", "lineHeight": "30px", "paddingLeft": "20px", "color": "#fff" }}>Do you potentially qualify for funding?</h5>
                        <div className='funfing'>
                            <ul>
                                <li>Pension Guarantee Credit</li>
                                <li>Income-related Employment and Support Allowance (ESA)</li>
                                <li>Income-based Jobseeker's Allowance (JSA)</li>
                                <li>Income Support</li>
                                <li>Tax Credits (Child Tax Credits and Working Tax Credits)</li>
                                <li>Universal Credit</li>
                                <li>Warm Home Discount Scheme Rebate</li>
                                <li>Working Tax Credit (WTC)</li>
                                <li>Housing Benefit</li>
                                <li>Pension Credit Saving Credit</li>
                            </ul>
                        </div>
                        <div>
                            <Row className='justify-content-center' style={{ "marginBottom": "20px" }}>
                                <Col md={8} style={{ "textAlign": 'center' }}>
                                    {showRestart && qustep >= 1 && (
                                        <div>
                                            <button className='fundingbtn' onClick={handleYes}>
                                                <div>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </div>
                                                Yes
                                            </button>
                                            <button className='fundingbtn' onClick={handleNo}>
                                                <div> <FontAwesomeIcon icon={faCircleXmark} /></div>
                                                No
                                            </button>
                                        </div>
                                    )}
                                    {showRestart && qustep >= 2 && (
                                        <div>
                                            <h5>Do you have a combined household income of less than £31,000?</h5>
                                            <button className='fundingbtn' onClick={handleYes}>
                                                <div>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </div>
                                                Yes
                                            </button>
                                            <button className='fundingbtn' onClick={handleNo}>
                                                <div> <FontAwesomeIcon icon={faCircleXmark} /></div>
                                                No
                                            </button>
                                        </div>
                                    )}
                                    {showRestart && qustep >= 3 && (
                                        <div>
                                            <h5>Does anybody in your household suffer with a health condition?</h5>
                                            <button className='fundingbtn' onClick={handleYes}>
                                                <div>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </div>
                                                Yes
                                            </button>
                                            <button className='fundingbtn' onClick={handleNo}>
                                                <div> <FontAwesomeIcon icon={faCircleXmark} /></div>
                                                No
                                            </button>
                                        </div>
                                    )}
                                    {showRestart && qustep >= 4 && (
                                        <div><p>
                                            This covers things like a heart condition, lung condition (including asthma), limited mobility, immunosupression, mental health condition, or is aged over 65 and is vulnerable to the cold.</p></div>
                                    )}
                                </Col>
                            </Row>

                            <Row className='justify-content-center'>
                                <Col md={8} style={{ "textAlign": 'center' }}>
                                    {step === 1 && (
                                        <div>
                                            <h3>Select a Property Type:</h3>
                                            <button className='fundingbtn' onClick={() => handlePropertyType("Flat")}>
                                                <FontAwesomeIcon icon={faBuilding} />Flat</button>
                                            <button className='fundingbtn' onClick={() => handlePropertyType("House")}>
                                                <FontAwesomeIcon icon={faHouse} />House</button>
                                            <button className='fundingbtn' onClick={() => handlePropertyType("Bungalow")}>
                                                <FontAwesomeIcon icon={faHouseLaptop} />Bungalow</button>
                                            <br />
                                            {propertyType && (
                                                <div>
                                                    <button className="prevbtn" onClick={prevPage}>Prev</button>
                                                    <button className="nextbtn" onClick={nextPage}>Next</button>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div>
                                            <h5>
                                                {propertyType === "Flat"
                                                    ? "Select a Flat Type:"
                                                    : "Select a House/Bungalow Type:"}
                                            </h5>
                                            {propertyType === "Flat" && (
                                                <>
                                                    <button className='fundingbtn' onClick={() => setConditionType("Terraced")}>Terraced</button>
                                                    <button className='fundingbtn' onClick={() => setConditionType("Mid-Terrace")}>Mid-Terrace</button>
                                                </>
                                            )}
                                            {(propertyType === "House" || propertyType === "Bungalow") && (
                                                <>
                                                    <button className='fundingbtn' onClick={() => setConditionType("Semi-Detached")}>Semi-Detached</button>
                                                    <button className='fundingbtn' onClick={() => setConditionType("Detached")}>Detached</button>
                                                    <button className='fundingbtn' onClick={() => setConditionType("MidTerraced")}>Terraced</button>
                                                    <button className='fundingbtn' onClick={() => setConditionType("EndTerraced")}>Terraced</button>
                                                </>
                                            )}
                                            <h5>Select Number of Rooms:</h5>
                                            {rooms.map((room) => (
                                                <button className='robtn' onClick={() => setNoRoom(room)} key={room}>{room}</button>
                                            ))}
                                            <button className="prevbtn" onClick={prevPage}>Prev</button>
                                            <button className="nextbtn" onClick={nextPage}>
                                                Next
                                            </button>

                                        </div>
                                    )}

                                    {(step === 3) ? (
                                        conditionType && noroom ? (
                                            <>
                                                <button className='fundingbtn insul' onClick={() => setInsulationtype("Cavity Wall Insulation")}>Cavity Wall Insulation</button>
                                                <button className='fundingbtn insul' onClick={() => setInsulationtype("Internal Wall Insulation")}>Internal Wall Insulation</button>
                                                <button className='fundingbtn insul' onClick={() => setInsulationtype("External Wall Insulation")}>External Wall Insulation</button>
                                                <button className='fundingbtn insul' onClick={() => setInsulationtype("Roof Insulation")}>Roof Insulation</button>
                                                <button className='fundingbtn insul' onClick={() => setInsulationtype("Solid Fuel")}>Solid Fuel</button>
                                                <button className='fundingbtn insul' onClick={() => setInsulationtype("Air Source Heat Pump")}>Air Source Heat Pump</button>
                                                <Col md={12}>
                                                    <button className="prevbtn" onClick={prevPage}>Prev</button>
                                                    <button className="nextbtn" onClick={nextPage}>
                                                        Next</button>
                                                </Col>
                                            </>
                                        ) : (<p style={{ "color": "red", "fontWeight": "Bold" }}>Have to select House type & No. of Rooms</p>)) : null}
                                </Col>
                            </Row>
                        </div>
                    </div>)}
                </Col>
                <Col md={10} className='final-form'>
               
                    {content && (
                        <form onSubmit={handleSubmit}>
                            <div><h5 style={{ "height": "30px", "background": "grey", "lineHeight": "30px", "paddingLeft": "20px", "color": "#fff" }}>Your Details</h5>
                                <Row>
                                    <Col md={12}>
                                        <div className='final-form'>Name <span className="nam-str">*</span></div>
                                    </Col>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={5}>
                                                <div>
                                                    <input type="text" name="first" placeholder="First Name" onChange={handleChange} required />
                                                </div>
                                            </Col>
                                            <Col md={5}>
                                                <div>
                                                    <input type="text" name="last" placeholder="First Name" onChange={handleChange} required />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    {isSubmitted && <p className="suc" color='green'>Data submitted successfully!</p>}
                                    <Col md={12}>
                                        <div className='final-form'>Address <span className="nam-str">*</span></div>
                                        <p className='final-form1'>Street Address</p>
                                        <input type="text" name="address1" onChange={handleChange} required />
                                        <p className='final-form'>Address Line2</p>
                                        <input type="text" name="address2" onChange={handleChange} required />
                                    </Col>
                                    <Col md={12}>
                                        <Col md={5}>
                                            <div className='final-form1'><p>City</p> </div>
                                            <input type="text" name="city" onChange={handleChange} required />
                                        </Col>
                                        <Col md={5}>
                                            <div className='final-form1'><p>Postcode</p> </div>
                                            <input type="text" name="postcode" onChange={handleChange} required />
                                        </Col>
                                    </Col>
                                    <Col md={12}>
                                        <Col md={5}>
                                            <div className='final-form1'>Phone <span className="nam-str">*</span></div>
                                            <input type="text" name="phone" onChange={handleChange} required />
                                        </Col>
                                        <Col md={5}>
                                            <div className='final-form1'>Email <span className="nam-str">*</span></div>
                                            <input type="text" name="email" onChange={handleChange} required />
                                        </Col>
                                    </Col>
                                    <Col md={12}>
                                        <Col md={5}>
                                            <div className='final-form1'>Date of Birth<span className="nam-str">*</span></div>
                                            <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder='dd/mm/yyy' required />
                                        </Col>
                                    </Col>
                                    <Col md={12}>
                                        <Col md={10}>
                                            <div className='final-form1'>Preffered to Contact<span className="nam-str">*</span></div>
                                            <Col md={3} className='final-form1'>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="option"
                                                        value="Telephone"
                                                        checked={formData.option === "Telephone"}
                                                        onChange={handleChange}
                                                    />
                                                    Telephone
                                                </label>
                                            </Col>
                                            <Col md={3} className='final-form1'>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="option"
                                                        value="Email"
                                                        checked={formData.option === "Email"}
                                                        onChange={handleChange}
                                                    />
                                                    Email
                                                </label>
                                            </Col>
                                            <Col md={3} className='final-form1'>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="option"
                                                        value="Either is fine"
                                                        checked={formData.option === "Either is fine"}
                                                        onChange={handleChange}
                                                    />
                                                    Either is fine
                                                </label>
                                            </Col>
                                        </Col>
                                    </Col>
                                </Row>
                            </div>
                            <Col>
                                <button className="prevbtn" onClick={prevPage}>Prev</button>
                                <button type="submit" className="theme_button submit-btn ">
                                    Submit
                                </button>
                            </Col>
                        </form>
                    )}
                </Col>
            </Row>


        </div>
    );
};

export default Fundingform;