import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToggleContext } from "./ToggleContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { isToggled } = useContext(ToggleContext);
  const dark = {
    // backgroundColor: '#0c0c3f',
    backgroundColor: "#010101",
    color: "white",
  };

  const white = {
    color: "white",
  };
  return (
    <footer style={!isToggled ? dark : {}}>
      <div className="date">
        <p>© {year} Nelius. All rights reserved</p>
      </div>
      <div className="footer-socials">
        <Link
          to="https://www.tiktok.com/@neliusdao"
          className="footer-items"
          style={!isToggled ? white : {}}
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </Link>
        <Link
          to="https://www.youtube.com/@neliusdao"
          className="footer-items"
          style={!isToggled ? white : {}}
          target="_blank"
        >
          YouTube
        </Link>
        <Link
          to="https://www.facebook.com/neliusDAO"
          className="footer-items"
          style={!isToggled ? white : {}}
          target="_blank"
        >
          Facebook
        </Link>
      </div>
      <div className="terms">
        <p>Privacy - Terms</p>
      </div>
    </footer>
  );
}