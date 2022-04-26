import React from "react";
import "./contact.css";


export default function contact() {
  return (
    <div  id="contact_page">
      <div className="container" >
        <form id="contact" action="" method="post">
          <h3>Contact Form</h3>
          <h4>I will reach out to you soon</h4>
          <fieldset>
            <input placeholder="Your name" type="text" tabindex="1" required />
          </fieldset>
          <fieldset>
            <input
              placeholder="Email Address"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Phone Number"
              type="tel"
              tabindex="3"
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your message here..."
              tabindex="4"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              className="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  );
}


