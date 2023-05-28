import "./login.css";
import { useLoginProps } from "./login.props";
import { hoc } from "../../../utils/hoc";

export const Login = hoc(useLoginProps, ({onLogin, emailRef, passwordRef}) => {
    return (
      <div className="MainLoginDiv">
        <div className="loginDiv">
          <div>
            <h2 className="forTitle">Login</h2>
          </div>
          <form onSubmit={onLogin} className="loginForm" action="login">
            <div className="miniDivLogin">
              <label className="loginLabel" htmlFor="Email">
                Email
              </label>
              <input ref={emailRef} className="loginInput" id="Email" type="Email" placeholder="Email"  required/>
            </div>
            <div className="miniDivLogin">
              <label className="loginLabel" htmlFor="password">
                Password
              </label>
              <input ref={passwordRef} className="loginInput" id="password" type="Password" placeholder="Password" required />
            </div>
            <button className="loginButton">Login</button>
          </form>
        </div>
      </div>
    );
  });
