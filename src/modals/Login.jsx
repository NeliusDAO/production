import { useState, useContext } from "react";
import { ToggleContext } from "../components/ToggleContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import './Popup.css'
import Submit from "../assets/Submit";

export default function Login() {
    const { isToggled } = useContext(ToggleContext);
    const [input, setInput] = useState({
        input: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    const dark = {
        color: "white",
        backgroundColor: "black",
    }

    const handleInput = (event) => {
        const { value } = event.target;
        setInput((prev) => ({
            ...prev,
            input: value
        }));
    };

    const handlePassword = (event) => {
        const { value } = event.target;
        setInput((prev) => ({
            ...prev,
            password: value
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="login" id="login" style={!isToggled ? dark : {}}>
            <div className="circleBackground"></div>
            <div className="p">
                <p>Sign into your account</p>
            </div>
            <div className="inputFrame">
                <div>
                    <input
                        id="id"
                        className="signInInput"
                        type="text"
                        placeholder="Platform ID"
                        value={input.input}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <input
                        id="password"
                        className="signInInput"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={input.password}
                        onChange={handlePassword}
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        onClick={togglePasswordVisibility}
                        style={{ cursor: "pointer", marginLeft: "10px" }}
                    />
                </div>
            </div>
            <div className="btnFrame"><Submit button='Login' /></div>
            {/* <div className="btnFrame"><button className="signIn" style={!isToggled ? dark : {}}>Sign In</button></div> */}
        </div>
    );
}