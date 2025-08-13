import { useState, useEffect } from "react";
import Submit from "../../assets/Submit";
import { useContext } from "react";
import { ToggleContext } from "../ToggleContext";

export default function Subscribe() {
  const { isToggled } = useContext(ToggleContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const dark = {
    backgroundColor: "#010101",
    color: "white",
  };

  const mail = {
    backgroundColor: "#010101",
    color: "white",
    border: "white solid 1px",
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const text = {
    color: "white",
    background:
      "linear-gradient(-45deg, #FEFEFE, #02AFF3, #02AFF3, #FEFEFE, #FEFEFE)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const saveToGoogleSheet = async (email) => {
    const endpoint = process.env.REACT_APP_SUBSCRIBE_ENDPOINT;
    const apiKey = process.env.REACT_APP_SUBSCRIBE_API_KEY;

    const formData = new FormData();
    formData.append("email", email);
    formData.append("apiKey", apiKey);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error("Error:", err);
      throw new Error("Network error occurred");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      console.log(email);
      const res = await saveToGoogleSheet(email);

      // Set loading to false BEFORE setting messages
      setLoading(false);

      if (res.status === "duplicate") {
        setMessage("You've already subscribed with this email.");
      } else if (res.status === "success") {
        setMessage(`✅ You're in! Check ${email} for a welcome note`);
        setEmail("");
      } else {
        setMessage("Something went wrong. Try again.");
      }
    } catch (error) {
      setLoading(false);
      setMessage("There was a problem with your subscription. Try again.");

      // Clear error message after delay
      async function delayErrorMessage() {
        await sleep(3000);
        setMessage("");
      }
      function sleep(milliseconds) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      }
      await delayErrorMessage();
    }
  };

  return (
    <div className="subscribe" id="subscribe" style={!isToggled ? dark : {}}>
      <p className="subscribeHead" id="subscribeHead">
        Ready To Get{" "}
        <span style={!isToggled ? text : {}} className="textOne">
          Funded
        </span>
        ?
      </p>
      <p className="subscribeText" id="subscribeText">
        Enter your email for early access. Our team {isMobile ? "" : <br />}{" "}
        will get in touch for personal branding.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            type="email"
            className={`emailInput ${!isToggled ? "dark-placeholder" : ""}`}
            id="emailInput"
            placeholder="Enter email"
            style={!isToggled ? mail : {}}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <Submit
            button="Subscribe"
            handleSubmit={handleSubmit}
            disable={loading}
          />
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "10px",
              }}
            >
              <p className="validateMessage">
                {" "}
                ✔️ One sec — subscribing you now!
              </p>
              <div className="loading"></div>
            </div>
          ) : (
            message && <p className="validateMessages">{message}</p>
          )}
        </div>
      </form>
    </div>
  );
}
