import React from 'react';
import data1 from '../assets/post-install-26-carrington-2.png'
import data2 from '../assets/23-usher-lane-post-install-2.png'
import data3 from '../assets/istock-480954618-xl-loft.jpg'
import data4 from '../assets/87-croydon-post-install-2.jpg'

import '../App.css'
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
const Accordition = () => {
    const accordionData = [
        {
            id: 1,
            title: "External Wall Insulation",
            client: "Ian Clemit",
            image: data1,
            description: "IZ Team engaged with me, talking through any worries or concerns I had about the project. They showed a high degree of professionalism and competence. The work rate is phenomenal, the final finish is of a very high standard with the attention to detail amazing, thanks Guys for all you have done."
        },
        {
            id: 2,
            title: "External Wall Insulation",
            client: "David Long",
            image: data2,
            description:
                "I simply cannot recommend this company enough. High quality workmanship, polite, tidy, nothing was ever a problem I could go on & on. IZ team were a pleasure to deal with throughout. Any small issues that cropped up during the works were swiftly dealt with. I am beyond delighted with the result. Thank you all",
        },
        {
            id: 3,
            title: "Underfloor & Loft Insulation",
            client: "Abdul Hafeez",
            image: data3,
            description:
                "IZ Energy Ltd installed under floor and loft insulation in my home under government green home grant. Once grant was approved, IZ Energy seamlessly arranged installation within a week of approval of grant The workmanship of the worker was exceptional. I had recently installed laminate flooring, they removed it carefully and after installation install it back perfectly. To be honest it look better than before. During the installation, IZ energy customer service manager inspected the quality of work. I would delightedly recommend IZ Energy."
        },
        {
            id: 4,
            title: "Solar Pv",
            image: data4,
            description:
                "This is the description for Accordion Item 3. It contains even more details about the item.",
        },

    ];

    const [activeIndex, setActiveIndex] = useState(0); // Default to first item

    const handleAccordionClick = (index) => {
        setActiveIndex(index); // Set the active index
    };

    return (
        <Row>
            <Col xs={12} style={{ "background": "#F5F5F5" }}>
                <Row className="justify-content-center">
                    <Col md={9} className="certifiedList" >
                    <h3>Our Testimonial</h3>
                        <div style={{  marginTop: "20px", display: "flex" }}>
                            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img
                                    src={accordionData[activeIndex].image}
                                    alt={accordionData[activeIndex].title}
                                    style={{
                                        width: "90%",
                                        height: "auto",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                        transition: "all 0.5s ease-in-out",
                                    }}
                                />
                            </div>

                            {/* Right Side: Accordion */}
                            <div style={{ flex: 1, padding: "20px" }}>
                                {accordionData.map((item, index) => (
                                    <div key={item.id} style={{ marginBottom: "10px" }}>
                                        <button
                                            onClick={() => handleAccordionClick(index)}
                                            style={{
                                                width: "100%",
                                                padding: "15px",
                                                border: "none",
                                                backgroundColor: activeIndex === index ? "#007BFF" : "#f0f0f0",
                                                color: activeIndex === index ? "#fff" : "#000",
                                                textAlign: "left",
                                                fontWeight: "bold",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                                marginBottom: "5px",
                                            }}
                                        >
                                            {item.title}
                                        </button>

                                        {activeIndex === index && (
                                            <div className='item-description'>
                                                <p>{item.description}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};





export default Accordition;