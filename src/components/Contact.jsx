import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contactContent">
        <div className="formBox d-flex container">
          <div className="leftSide">
            <h1>
              I would love to hear from you. Feel free to reach out to me
              directly.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              magni natus corporis doloribus ipsa perspiciatis, vero autem quo
              minus distinctio minima? Modi nam soluta odit corrupti ullam
              dolorem, dolores ut.
            </p>
          </div>
          <div className="rightSide">
            <form>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="short"
                placeholder="First Name"
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="short"
                placeholder="Last Name"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2486.8425705504123!2d-0.21863100000000002!3d51.442685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f3a41022297%3A0x5cdbb865962556ae!2sRadley%20Lodge%2C%2025%20Inner%20Park%20Rd%2C%20London%20SW19%206DG%2C%20UK!5e0!3m2!1sen!2sus!4v1722599917940!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
