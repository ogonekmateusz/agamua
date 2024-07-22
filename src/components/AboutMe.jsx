import photo from "../assets/photos/aboutme.png";

const AboutMe = () => {
  return (
    <div className="container-fluid d-flex justify-content-center py-5">
      <div className="row shadow bg-white p-5">
        <h1 className="mb-4">About Me</h1>
        <div className="col-12 photo col-lg-6 mb-4 mb-lg-0">
          <img
            src={photo}
            className="d-block img-fluid max-width"
            alt="About Me"
            loading="lazy"
          />
        </div>
        <div className="col-12 col-lg-6">
          <p className="lead">
            Hi. I’m Thania Certified Pro Artistic Makeup Lasalle College
            International. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed nulla sagittis eget semper semper. Euismod facilisi
            tristique duis maecenas id id.{" "}
          </p>
          <p className="lead">
            Cuum, pellentesque volutpat id. Proin augue nunc, aliquet vel
            suspendisse non consequat dignissim tempus. Nibh etiam vitae, cum
            fusce eget. Amet donec pellentesque lorem integer duis bibendum
            bibendum ac imperdiet.
          </p>
          <p className="lead">
            Hi. I’m Thania Certified Pro Artistic Makeup Lasalle College
            International. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed nulla sagittis eget semper semper. Euismod facilisi
            tristique duis maecenas id id.{" "}
          </p>
          <p className="lead">
            Cuum, pellentesque volutpat id. Proin augue nunc, aliquet vel
            suspendisse non consequat dignissim tempus. Nibh etiam vitae, cum
            fusce eget. Amet donec pellentesque lorem integer duis bibendum
            bibendum ac imperdiet.
          </p>
          <p className="lead">
            Hi. I’m Thania Certified Pro Artistic Makeup Lasalle College
            International. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed nulla sagittis eget semper semper. Euismod facilisi
            tristique duis maecenas id id.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
