import { LOGIN_URL } from "../../spotify";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
        alt="logo-spotify"
        className="logo"
      />
      <a href={LOGIN_URL} className="login-btn">
        LOG IN
      </a>
    </div>
  );
}
