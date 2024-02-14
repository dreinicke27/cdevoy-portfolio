import "../Custom.scss";
import email from "../assets/email.svg";
import message from "../assets/message.svg";
import website from "../assets/website.svg";
import calendar from "../assets/calendar.svg";
import save from "../assets/download.svg";


const ContactPillLink = (props) => {
    let icon = "";
    if (props.img === "email") {
        icon = email;
    } else if (props.img === "message") {
        icon = message;
    } else if (props.img === "website") {
        icon = website;
    } else if (props.img === "calendar") {
        icon = calendar;
    } else if (props.img === "save") {
        icon = save;
    }

    return (
        <div className="row py-3 justify-content-center">
            <div className="col-8 col-md-6 pill">
                <a className ="cursor" href={props.url} target="_blank" rel="noreferrer">
                    <div className="row justify-content-start align-items-baseline">
                        <div className="col-md-3 col-3">
                            <img src={icon} alt={icon}/>
                        </div>
                        <div className="col-md-6 col-6">
                            <p>{props.name}</p>
                        </div>
                    </div>
                </a>
            </div>


        </div>

    )
}

export default ContactPillLink;