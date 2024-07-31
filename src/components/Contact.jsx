const Contact = () => {
  return (
    <>
      <header className="header d-flex justify-content-center align-items-center mb-5">
        <h1>Contact Me</h1>
      </header>

      <div className="formBox d-flex container">
        <div className="leftSide">
          <h1>
            I would love to hear from you. Feel free to reach out to me
            directly.
          </h1>
          <p className="lead">
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
              id="title"
              name="title"
              required
              className="short"
              placeholder="First Name"
            />
            <input
              type="text"
              id="title"
              name="title"
              required
              className="short"
              placeholder="Last Name"
            />
            <input
              type="email"
              id="title"
              name="title"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Subject"
              required
            />

            <textarea
              id="body"
              name="body"
              required
              placeholder="Your Message"
            ></textarea>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
