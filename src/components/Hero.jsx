import { Link } from "react-router-dom";
import photo from "../assets/photos/image.png";

const Hero = () => {
    return (
        <div className="hero-wrapper d-flex justify-content-center">   
            <div className="hero d-flex">
                <div className="hero-info d-flex flex-column mt-5">
                    <div className="hero-title mb-4">PROFESSIONAL <br/> MAKEUP ARTIST</div>
                    <div className="hero-des mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, pariatur quasi. Magnam maiores dolor dolore necessitatibus? Eveniet atque consequuntur eum quam numquam harum quaerat recusandae tempora itaque veritatis, expedita commodi.</div>
                    <button className="hero-btn">
                        <Link to="/contact" className="d-flex justify-content-center align-items-center btn-link">Contact Me</Link>
                    </button>
                </div>
                <div className="hero-photo d-flex justify-content-end">
                    <img src={photo} alt="woman"/>
                </div>
            </div>
        </div>  
    );
}
 
export default Hero;
