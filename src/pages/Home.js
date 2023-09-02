import hero from "../assets/coledevoywebhero.jpg";
import stanford from "../assets/stanford.svg";
import aer from "../assets/aer.svg";
import bcbs from "../assets/bcbs.svg";
import berkeley from "../assets/berkeley.svg";
import bmo from "../assets/bmo.svg";
import cc from "../assets/cc.svg";
import commbank from "../assets/commbank.svg";
import cs from "../assets/credit_suisse.svg";
import upCarrot from "../assets/upCarrot.svg";
import "../Custom.scss";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const INITIAL_FORM_DATA = {
    name: "",
    org: "",
    email: "",
    phone: "",
    pref: "Email", 
    reason: "I need help with a project", 
    notes: ""
  };

const Home = () => {
    const [about, setAbout] = useState(false);
    const displayButton = about ? "d-none" : "btn btn-sm btn-light px-4 rounded-lg fw-bold"; 
    const displayCarrot = about ? "mx-auto" : "d-none";

    const onExpand = () => {
        setAbout(!about);
    };

    const onAboutClick = () => {
        if (about === false) {
            setAbout(!about);
        };
    };

    //contact form fields
    const [sumbitMessage, setSubmitMessage] = useState('');
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const handleChange = (event) => {
        const newFormData = {
        ...formData,
        [event.target.name]: event.target.value,
        };
        setFormData(newFormData);
    };

    const [error, setError] = useState('');

    const validateInput = () => {
        if (!formData.email.includes("@") && formData.phone.length !== 10) {
            setError("Please enter a valid email address. Please enter a valid phone number with no punctuation.");
            return false;
        } else if (!formData.email.includes("@")) {
            setError("Please enter a valid email address.");
            return false;
        } else if (formData.phone.length !== 10) {
            setError("Please enter a valid phone number with no punctuation.");
            return false;
        } else {
            return true;
        }
        };
      

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const isValid = validateInput();
        if (isValid) {
            emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE_CONTACT, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setSubmitMessage("Success! Your message has been submitted. We will reply ASAP.");
                    setFormData(INITIAL_FORM_DATA);
                    setError("");
                }, (error) => {
                    console.log(error.text);
                    setSubmitMessage("");
                });
        } else {
            return;
        }
        };

    return (
    <div>
        <div>
            <img src={hero} alt="CD headshot" className="bg-img img-fluid"/>
            <div className="container px-4 py-5 card-img-overlay min-vh-25"> 
                <div className="row align-items-center pb-md-5 pt-5 pt-sm-5">
                <div className="col-10 col-md-8 col-lg-6 py-md-5">
                    <h1 className="display-5 fw-bold text-light">Experience Design Made Simple</h1>
                    <div className="gap-3 d-flex pt-md-5">
                        <button type="button" className="btn btn-light px-sm-4 rounded-lg" data-bs-toggle="modal" data-bs-target="#contactModal">LET'S WORK TOGETHER</button>
                        <a href="#about"><button type="button" className="btn btn-outline-light px-sm-4 rounded-lg" data-bs-toggle="collapse" data-bs-target="#more" onClick={onAboutClick}>ABOUT ME</button></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <section className="container py-5"id="about">
            <div className="row justify-content-evenly">
                <div className="col-xs-12 col-sm-5 py-3 py-sm-5">
                    <h2 className="text-secondary">Hi, I’m Cole.  I’m a total experience designer with expertise in multiple disciplines</h2>
                </div>
                <div className="col-xs-12 col-sm-4 py-3 py-sm-5"><p className="text-secondary">I'm honored to serve in facilitation, strategy, and design capacities 
                alongside skilled teams across diverse domains. Together we address complex product and service 
                design challenges and bring to life experiences that promote a sustainable and inclusive future.</p>
                    <div id="more" className="collapse pb-3">
                        <p className="text-secondary">My journey has been one of continuous growth, and I take 
                        pride in crafting elegant solutions that enrich people's lives. Total Experience Design includes 
                        starting with a deep understanding of the challenges and the services currently in place to solve 
                        them. Well-versed in graphic design, UI, visual design, and UX and interaction design as well as 
                        service design, strategy, and implementation consulting services. With Nielsen/Norman Group UX 
                        Management certification and a certification with distinction in Design Leadership from the 
                        University of Pennsylvania, I possess a diverse skill set to create exceptional experiences.</p>
                        
                        <p className="text-secondary">Practicing extreme empathy and participatory design, I prioritize problem/solution fit. 
                        Core to my values is accessibility and equity, driving my commitment to experiences accessible 
                        to all. I excel in training non-design teams in design thinking, helping them tailor problem-solving
                        strategies to their unique organizational needs.</p>
                    </div>
                    <div className="col-1 offset-8 d-block">
                        <button className={displayButton} data-bs-toggle="collapse" data-bs-target="#more" onClick={onExpand}>more</button>
                    </div>
                </div>
                <div className="text-center">
                    <img src={upCarrot} alt="collapse read more" className={displayCarrot} data-bs-toggle="collapse" data-bs-target="#more" onClick={onExpand}/>
                </div>
            </div>
            <hr className="hr w-75 mx-auto"/>
        </section>
        <section className="container pb-5 text-center">
            <h2 className="mx-auto text-secondary">Some orgs I'm proud to have worked with</h2>
            <div className="row py-5">
                <div className="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={stanford} className="thumbnail img-responsive" alt="stanford"/>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={cs} className="thumbnail img-responsive" alt="credit suisse"/>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={cc} className="thumbnail img-responsive" alt="cc"/>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={aer} className="thumbnail img-responsive" alt="aer"/>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={bcbs} className="thumbnail img-responsive" alt="blue cross blue shield"/>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={berkeley} className="thumbnail img-responsive" alt="berkeley"/>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={bmo} className="thumbnail img-responsive" alt="bmo"/>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={commbank} className="thumbnail img-responsive" alt="comm bank"/>
                </div>
            </div>
        </section>
        <section>
            <div className="bg-dark py-5">
            <div className="container text-center py-3">
                <h4 className="display-6 text-light w-80 mx-auto py-3">“User-centered design means working with your users all throughout the project.”</h4>
                <p className="lead text-light w-75 mx-auto pt-3">DON NORMAN,</p>
                <p className="lead text-light w-75 mx-auto pb-3">FATHER OF UX DESIGN</p>
            </div>    
            </div>
        </section>

        <div className="modal" id="contactModal" aria-hidden="true" aria-labelledby="contactModal" tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered fadeInRight animated">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="contactFormModal"> Contact</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="container">
                    <form ref={form} className="row g-3" onSubmit={sendEmail}>
                        <div className="col-md-6">
                            <label htmlFor="inputName" className="form-label">Name *</label>
                            <input type="name" className="form-control" id="inputName" name="name" required value={formData.name} onChange={handleChange}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputOrg" className="form-label">Organization *</label>
                            <input type="text" className="form-control" id="inputOrg" name="org" required value={formData.org} onChange={handleChange}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputReason" className="form-label">Select your reason for reaching out</label>
                            <select id="inputReason" className="form-select" name="reason" value={formData.reason} onChange={handleChange}>
                            <option value="I need help with a project">I need help with a project</option>
                            <option value="I’m looking for an event host or speaker">I’m looking for an event host or speaker</option>
                            <option value="I’m looking for a job">I’m looking for a job</option>
                            <option value="I have a press/media request">I have a press/media request</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail" className="form-label">Email *</label>
                            <input type="text" className="form-control" id="inputEmail" name="email" required value={formData.email} onChange={handleChange}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPhone" className="form-label">Phone *</label>
                            <input type="text" className="form-control" id="inputPhone" name="phone" required value={formData.phone} onChange={handleChange}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputPref" className="form-label">Contact Preference</label>
                            <select id="inputPref" className="form-select" name="pref" value={formData.pref} onChange={handleChange}>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                            <option value="no preference">No preference</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label htmlFor="notes" className="form-label">Notes</label>
                            <textarea className="form-control" id="message" name="notes" rows="4" value={formData.notes} onChange={handleChange}></textarea>
                        </div>
                        <div className="col-12 offset-10 pb-3">
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </div>
                        <span className="text-danger">{error}</span>
                        <span>{sumbitMessage}</span>
                    </form>
                </div>
                <div className="modal-footer">
                </div>
                </div>
                </div>
            </div>
        </div>


    </div>


    );
}

export default Home;





