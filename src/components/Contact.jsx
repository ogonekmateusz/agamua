import React from "react";

const Contact = () => {
  return (
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
      {/* <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9944.121073696197!2d-0.20317336773824077!3d51.45760069883039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605f77875968d%3A0xc2961d78b6fc068a!2sWandsworth%2C%20Londyn%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1722504407595!5m2!1spl!2spl"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </div>
  );
};

export default Contact;
