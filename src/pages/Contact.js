import "../Custom.scss";
import contact from "../assets/colecontactbg.jpeg";
import linkedin from "../assets/circle_buttons/LinkedIn.svg";
import instagram from "../assets/circle_buttons/instagram.svg";
import whatsapp from "../assets/circle_buttons/whatsapp.svg";
import PillList from "../components/pillList";
import ContactPillLink from "../components/contactPillLink";


const Contact = () => {
    const save = {"id":4, "name": "Save Info", "url": "", "img": "save"}

    return (
        <div className="dark">
            <img className="img-fluid bg-img" src={contact} alt="Cole Devoy headshot"></img>
            <div className="py-3 px-5 card-img-overlay container"><h3 className="text-light px-5 bold">Cole Devoy</h3></div>
                <div className="container text-center">
                    <h2 className="text-light">Multidisciplinary Artist</h2>
                    <h2 className="text-light pb-3">Experience Designer</h2>
                    <div className="row justify-content-center"><div className="col-md-6 col-8 text-center">
                    <div className="row justify-content-evenly">
                        <div className="col">
                            <a href="https://www.linkedin.com/in/coledevoy/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"></img></a>
                        </div>
                        <div className="col">
                            <a href="https://www.instagram.com/icholino/" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram"></img></a>
                        </div>
                        <div className="col">
                            <a href="https://wa.me/12066194021" target="_blank" rel="noreferrer"><img src={whatsapp} alt="Whatsapp"></img></a>
                        </div>
                    </div>
                    </div></div>
                    <div>
                        <PillList/>
                    </div>
                    <hr className="divider py-3"/>
                    <ContactPillLink key={save.id} id={save.id} name={save.name} link={save.url} img={save.img}/>
                    
                
                </div>
            
            
        </div>
    )

}

export default Contact;
