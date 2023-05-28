import { useRef } from "react";
import { useAuth } from "../../hooks/useAuth";

export const useLoginProps = () => {
  const [, setToken] = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const onLogin = (e) => {
    e.preventDefault();


    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    let data = {
      email,
      password,
    };



    fetch("https://invoices-8ehs.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if(res.status===200){
          return res.json()
        }

        alert ('Email or password incorrect')
      })
      .then((data) => setToken(data))
      .catch((err) => console.log(err));
  };
  return { onLogin, emailRef, passwordRef };
};
