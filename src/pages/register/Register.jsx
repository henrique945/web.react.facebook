import './register.css';

export default function Register() {
  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="register-left">
          <h3 className="register-logo">Facebook</h3>
          <span className="register-desc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="register-right">
          <div className="register-box">
            <input placeholder="Username" className="register-input" />
            <input placeholder="Email" className="register-input" />
            <input placeholder="Password" className="register-input" />
            <input placeholder="Password Again" className="register-input" />
            <button className="register-button">Sign Up</button>
            <button className="register-login-button">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
