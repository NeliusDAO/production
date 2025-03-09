import React, { useState, useContext } from "react";
import { ToggleContext } from "./ToggleContext"

export default function Dropdown({ socialOptions }) {
    const { isToggled } = useContext(ToggleContext)
    const [isHovered, setIsHovered] = useState(false);
    const [selectedSocial, setSelectedSocial] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleOptionClick = (social) => {
        setSelectedSocial(social);
        setIsFormVisible(true);
        setIsHovered(false);
    };

    const selectStyle = {
        width: "max-content",
        padding: "10px 20px",
        backgroundColor: "#02AFF3",
        color: "white",
        borderRadius: "50px",
        cursor: "pointer",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease",
    };

    const optionStyle = {
        width: "100%",
        padding: "10px 0",
        display: isHovered ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        position: "absolute",
        zIndex: 1000,
    };

    const optionItemStyle = {
        padding: "10px 20px",
        width: "100%",
        textAlign: "center",
        color: isToggled ? "white" : "black",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };

    const formStyle = {
        marginTop: "20px",
        textAlign: "center",
        opacity: isFormVisible ? 1 : 0,
        maxHeight: isFormVisible ? "100px" : "0",
        overflow: "hidden",
        transition: "opacity 0.5s ease, max-height 0.5s ease",
    };

    return (
        <React.Fragment>
            <div className="customSelect" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                <div
                    className="select"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={selectStyle}
                >
                    <p>Select an Option To Connect</p>
                </div>
                <div
                    className="optionItems"
                    style={optionStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {socialOptions.map((socials, index) => (
                        <div
                            key={index}
                            className="options"
                            onClick={() => handleOptionClick(socials.social)}
                            style={optionItemStyle}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#02AFF3"}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}
                        >
                            {socials.social}
                        </div>
                    ))}
                </div>
            </div>

            <div className="input" style={formStyle}>
                <form>
                    <input
                        type="text"
                        placeholder={`Enter ${selectedSocial} username`}
                        className="inputText"
                        style={{
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            width: "200px",
                        }}
                    />
                </form>
            </div>
        </React.Fragment>
    );
}

// Usage example:
// <Dropdown socialOptions={[{ social: "Facebook" }, { social: "Twitter" }, { social: "Instagram" }, { social: "Youtube" }, { social: "TikTok" }]} />
