import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [successText, setSuccessText] = useState("");
  const [errorText, setErrorText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.React_App_SERVICE_ID}`,
        `${process.env.React_App_TEMPLATE_ID}`,
        form.current,
        `${process.env.React_App_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessText("Successful!");
          setTimeout(() => {
            setSuccessText("");
          }, 5000);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setErrorText("Email incorrect!");
          setTimeout(() => {
            setErrorText("");
          }, 5000);
        }
      );
  };
  return (
    <>
      <br />
      <br />
      <ul>
        {successText ? (
          <li style={{ color: "green" }}> {successText} </li>
        ) : (
          <li>Subscribe to our Weekly Newsletter!</li>
        )}
      </ul>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <p>{errorText}</p>
          <input
            name="user_email"
            type="email"
            placeholder="Send us your email to get info on our giveaways!"
            required
          />
          <button class="submit-btn">Subscribe</button>
        </div>
      </form>
    </>
  );
};

export default Form;
