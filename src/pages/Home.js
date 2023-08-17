import hero from "../assets/colepic_glitch.png";
import stanford from "../assets/stanford.svg";
import aer from "../assets/aer.svg";
import bcbs from "../assets/bcbs.svg";
import berkeley from "../assets/berkeley.svg";
import bmo from "../assets/bmo.svg";
import cc from "../assets/cc.svg";
import commbank from "../assets/commbank.svg";
import cs from "../assets/credit_suisse.svg";


const Home = () => {
    return (
    <div>
        <div>
            <img src={hero} alt="CD headshot" className="bg-img img-fluid"/>
            <div className="container px-4 py-5 card-img-overlay">
                <div className="row h-100 align-items-center">
                <div className="col-lg-6 py-5">
                    <h1 className="display-5 fw-bold text-light">Experience Design Made Simple</h1>
                    <div class="d-grid gap-3 d-md-flex justify-content-md-start py-5">
                        <button type="button" className="btn btn-light px-4 me-md-2 rounded-lg">LET'S WORK TOGETHER</button>
                        <button type="button" className="btn btn-outline-light px-4 rounded-lg">ABOUT ME</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <section className="container py-5">
            <div className="row justify-content-evenly">
                <div className="col-5 py-5">
                    <h2>Hi, I’m Cole.  I’m a total experience designer with expertise in multiple disciplines</h2>
                </div>
                <div className="col-4 py-5">I'm honored to serve in facilitation, strategy, and design capacities 
                alongside skilled teams across diverse domains. Together we address complex product and service 
                design challenges and bring to life experiences that promote a sustainable and inclusive future.
                <div id="more" className="collapse py-3">
                <p>My journey has been one of continuous growth, and I take 
                pride in crafting elegant solutions that enrich people's lives. Total Experience Design includes 
                starting with a deep understanding of the challenges and the services currently in place to solve 
                them. Well-versed in graphic design, UI, visual design, and UX and interaction design as well as 
                service design, strategy, and implementation consulting services. With Nielsen/Norman Group UX 
                Management certification and a certification with distinction in Design Leadership from the 
                University of Pennsylvania, I possess a diverse skill set to create exceptional experiences.</p>
                
                <p>Practicing extreme empathy and participatory design, I prioritize problem/solution fit. 
                Core to my values is accessibility and equity, driving my commitment to experiences accessible 
                to all. I excel in training non-design teams in design thinking, helping them tailor problem-solving
                 strategies to their unique organizational needs.</p></div>
                    <div className="col-1 offset-8">
                        <button className="btn btn-sm btn-light px-4 rounded-lg fw-bold" data-bs-toggle="collapse" data-bs-target="#more">more</button>
                    </div>
                </div>
            </div>
            <hr className="hr w-75 mx-auto"/>
        </section>
        <section className="container pb-5 text-center">
            <h2 className="mx-auto">Some orgs I'm proud to have worked with</h2>
            <div className="row py-5">
                <div class="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={stanford} className="thumbnail img-responsive" alt="stanford"/>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={cs} className="thumbnail img-responsive" alt="credit suisse"/>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={cc} className="thumbnail img-responsive" alt="cc"/>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={aer} className="thumbnail img-responsive" alt="aer"/>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={bcbs} className="thumbnail img-responsive" alt="blue cross blue shield"/>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={berkeley} className="thumbnail img-responsive" alt="berkeley"/>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={bmo} className="thumbnail img-responsive" alt="bmo"/>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12 py-3">
                    <img src={commbank} className="thumbnail img-responsive" alt="comm bank"/>
                </div>
            </div>
        </section>
        <section>
            <div className="bg-dark py-5">
            <div className="container text-center py-3">
                <h3 className="display-6 text-light w-75 mx-auto py-3">“User-centered design means working with your users all throughout the project.”</h3>
                <p className="lead text-light w-75 mx-auto pt-3">DON NORMAN,</p>
                <p className="lead text-light w-75 mx-auto pb-3">FATHER OF UX DESIGN</p>
            </div>    
            </div>
        </section>
    </div>
    );
}

export default Home;