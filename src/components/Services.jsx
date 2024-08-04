import photo1 from "../assets/photos/graduation.png"
import photo2 from "../assets/photos/shot.png"
import photo3 from "../assets/photos/wedding.png"
const Services = () => {
    const services = [{
        photo:photo1,
        title:"Graduation",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima facere quos libero, deserunt mollitia nesciunt sapiente ex asperiores illum maxime, itaque esse earum laudantium? Adipisci id corporis vitae tempore."
    },{
        photo:photo2,
        title:"Photo Shot",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima facere quos libero, deserunt mollitia nesciunt sapiente ex asperiores illum maxime, itaque esse earum laudantium? Adipisci id corporis vitae tempore."
    },{
        photo:photo3,
        title:"Wedding",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima facere quos libero, deserunt mollitia nesciunt sapiente ex asperiores illum maxime, itaque esse earum laudantium? Adipisci id corporis vitae tempore."
    }]

    return ( 
        <div id="Services" className=" services-bg d-flex align-items-center">
            <div className="services-container d-flex align-items-center justify-content-around">
                <div className="services-des d-flex flex-column w-25">
                    <div className="s-des-top">NEW COLLECTION</div>
                    <div className="s-des-title">BRING NEW MAKEUP TRENDS</div>
                    <div className="s-des-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima facere quos libero, deserunt mollitia nesciunt sapiente ex asperiores illum maxime, itaque esse earum laudantium? Adipisci id corporis vitae tempore.</div>
                    <div className="s-des-more">View More</div>
                </div>
                {
                    services.map((service,index)=>(
                    <div className="services-example d-flex flex-column" key={index}>
                        <img className="s-example-photo" src={service.photo} alt={service.title}/>
                        <div className="s-example-title">{service.title}</div>
                        <div className="s-example-text">{service.description}</div>
                    </div>
                    ))
                }

            </div>
        </div>
     );
}
 
export default Services;