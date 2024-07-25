const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container d-flex">
                <div className="footer-links d-flex flex-column">
                    <div className="f-links-title">Quick Links</div>
                    <div className="f-links-element">About</div>
                    <div className="f-links-element">Services</div>
                    <div className="f-links-element">Contanct</div>
                </div>
                <div className="footer-contact d-flex">
                    <div className="f-contact-block">
                        <div className="f-contact-title">Contacts</div>
                        <div className="f-contact-bold-element">Phone</div>
                        <div className="f-contact-element">+62 887 0103 01</div>
                        <div className="f-contact-bold-element">Email</div>
                        <div className="f-contact-element">by.thaniaptr@gmail,com</div>
                    </div>
                    <div className="f-contact-block">
                        <div className="f-contact-bold-element">Instagram</div>
                        <div className="f-contact-element">agaMalinowska</div>
                        <div className="f-contact-bold-element">WhatsApp</div>
                        <div className="f-contact-element">+62 887 0103 01</div>
                    </div>
                    <div className="f-contact-block">
                        <div className="f-contact-bold-element">Location</div>
                        <div className="f-contact-element">Londyn</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;