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
import back from "../assets/back.svg";
import "../Custom.scss";
import { useState } from 'react';
import { PopupButton } from 'react-calendly';

const Home = () => {
    const [about, setAbout] = useState(false);

    const displayButton = about ? "d-none" : "btn btn-sm btn-light px-4 rounded-lg fw-bold"; 
    const displayCarrot = about ? "mx-auto" : "d-none";

    const onExpand = () => {
        setAbout(!about);
    };


    return (
    <div>
        <div>
            <img src={hero} alt="CD headshot" className="bg-img img-fluid"/>
            <div className="container px-4 py-5 card-img-overlay"> 
                <div className="row align-items-center pb-md-5 pt-3 pt-sm-5">
                <div className="col-10 col-md-8 col-lg-6 py-md-5">
                    <h1 className="display-5 fw-bold text-light">Experience Design Made Simple</h1>
                    <div class="gap-3 d-flex pt-md-5">
                        <button type="button" className="btn btn-light px-4 rounded-lg" data-bs-toggle="modal" data-bs-target="#calendlyModal">LET'S WORK TOGETHER</button>
                        <a href="#about"><button type="button" className="btn btn-outline-light px-4 rounded-lg">ABOUT ME</button></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <section className="container py-5">
            <div className="row justify-content-evenly" id="about">
                <div className="col-12 col-sm-5 py-3 py-sm-5">
                    <h2 className="text-secondary">Hi, I’m Cole.  I’m a total experience designer with expertise in multiple disciplines</h2>
                </div>
                <div className="col-12 col-sm-4 py-3 py-sm-5"><p className="text-secondary">I'm honored to serve in facilitation, strategy, and design capacities 
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
                    <div className="col-1 offset-8">
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

        <div className="modal fade" id="calendlyModal" tabindex="-1" aria-labelledby="calendlyModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="calendlyModalLabel">Let's Work Together</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="modal-split">
                        <div className="row justify-content-evenly">
                            <div className="col-3 border border-dark-subtle text-center p-3">
                                <h4>Book Me!</h4>
                                <p className="pb-3">Lorem ipsum is made up text to be used as a placeholder. It helps to see approximately the length of text that will be appropriate.</p>
                                <ul>
                                    <li><span className="closeList">reason one</span></li>
                                    <li><span className="closeList">reason two</span></li>
                                    <li><span className="closeList">reason three</span></li>
                                </ul>
                                <PopupButton className="btn btn-dark"
                                    url="https://calendly.com/group6-cole?background_color=f2f2f2&text_color=212529&primary_color=212529"
                                    rootElement={document.getElementById("root")}
                                    text="Book"
                                />
                            </div>
                            <div className="col-3 border border-dark-subtle text-center p-3">
                                <h4>Book Me!</h4>
                                <p className="pb-3">Lorem ipsum is made up text to be used as a placeholder. It helps to see approximately the length of text that will be appropriate.</p>
                                <ul>
                                    <li><span className="closeList">reason one</span></li>
                                    <li><span className="closeList">reason two</span></li>
                                    <li><span className="closeList">reason three</span></li>
                                </ul>
                                <PopupButton className="btn btn-dark"
                                    url="https://calendly.com/group6-cole?background_color=f2f2f2&text_color=212529&primary_color=212529"
                                    rootElement={document.getElementById("root")}
                                    text="Book"
                                />
                            </div>
                            <div className="col-3 border border-dark-subtle text-center p-3">
                                <h4>Get a Quote</h4>
                                <p className="pb-3">Lorem ipsum is made up text to be used as a placeholder. It helps to see approximately the length of text that will be appropriate.</p>
                                <ul>
                                    <li><span className="closeList">reason one</span></li>
                                    <li><span className="closeList">reason two</span></li>
                                    <li><span className="closeList">reason three</span></li>
                                </ul>
                                <button className="btn btn-dark" data-bs-target="#contactFormModal" data-bs-toggle="modal">Go</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                </div>
                </div>
            </div>
        </div>

        <div className="modal" id="contactFormModal" aria-hidden="true" aria-labelledby="contactFormModal" tabindex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered fadeInRight animated">
                <div className="modal-content">
                <div className="modal-header">
                    <img src={back} alt="back" className="mx-2" data-bs-toggle="modal" data-bs-target="#calendlyModal" height="24"/>
                    <h1 className="modal-title fs-5" id="contactFormModal">Get a Quote</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="container">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input type="name" className="form-control" id="inputName"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputOrg" className="form-label">Organization</label>
                            <input type="password" className="form-control" id="inputOrg"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputReason" className="form-label">Select your reason for reaching out</label>
                            <select id="inputReason" className="form-select">
                            <option selected>Choose...</option>
                            <option>I have a project</option>
                            <option>Event/Speaker</option>
                            <option>Career</option>
                            <option>Press/Media</option>
                            <option>General</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input type="text" className="form-control" id="inputEmail"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPhone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="inputPhone"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputPref" className="form-label">Contact Preference</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="contactPref" id="contactPref1" value="email"/>
                                <label className="form-check-label" htmlFor="contactPref1">
                                    Email
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="contactPref" id="contactPref2" value="phone"/>
                                <label className="form-check-label" htmlFor="contactPref2">
                                    Phone
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="notes" className="form-label">Notes</label>
                            <textarea className="form-control" id="message" name="message" rows="4"></textarea>
                        </div>
                        <div className="col-12 offset-10 pb-3">
                            <button type="submit" class="btn btn-dark">Submit</button>
                        </div>
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
