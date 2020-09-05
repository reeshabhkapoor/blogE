import React from "react";
import "./Login.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
          profilePic: result.additionalUserInfo.profile.picture,
        });
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <FacebookIcon fontSize="large" />
        <div style={{ fontWeight: "900", fontSize: "60px" }}>blogE</div>
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
