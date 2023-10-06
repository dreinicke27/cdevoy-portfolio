import ContactPillLink from "./contactPillLink";

const PillList = () => {

    const data = [{"id":0, "name": "Message", "url": "sms:+12066194021", "img": "message"},
                    {"id":1, "name": "Email", "url": "mailto:group6.cole@gmail.com", "img": "email"}, 
                    {"id":2, "name": "Calendar", "url": "https://calendly.com/group6-cole/15-minute-discovery", "img": "calendar"}, 
                    {"id":3, "name": "Website", "url": "https://www.coledevoy.com/", "img": "website"}]

    const pillComponents = data.map((pill) => {
        return (
          <ContactPillLink
            key={pill.id}
            id={pill.id}
            name={pill.name}
            link={pill.url}
            img={pill.img}
          />
        );
      });
    
      return (
        <div>
          {pillComponents}
        </div>
      );
}

export default PillList;