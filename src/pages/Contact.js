import "./Contact.css";
import artist from "../assets/img/artist1.jpeg";

const Contact = () => {
  return (
    <main className="contact">
      <article className="container row grey">
        <div className="col contact-text">
          <h2 className="contact-intro">About me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            velit debitis saepe rem incidunt qui deleniti vel iste neque
            commodi, id, recusandae, ab ullam aperiam doloremque itaque
            laboriosam necessitatibus illo! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita velit debitis saepe rem
            incidunt qui deleniti vel iste neque commodi, id, recusandae, ab
            ullam aperiam doloremque itaque laboriosam necessitatibus illo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            velit debitis saepe rem incidunt qui deleniti vel iste neque
            commodi, id, recusandae, ab ullam aperiam doloremque itaque
            laboriosam necessitatibus illo! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita velit debitis saepe rem
            incidunt qui deleniti vel iste neque commodi, id, recusandae, ab
            ullam aperiam doloremque itaque laboriosam necessitatibus illo!
          </p>
          <br />
          <br />
          <br />
          <h4>Let's talk.</h4>
          <p>Email: artist@photography.com</p>

          <h4>Social Media:</h4>
          <p>Instagram: @iheartpics</p>
        </div>
        <div className="col">
          <img className="contact-img" src={artist} alt="portrait" />
        </div>
      </article>
    </main>
  );
};

export default Contact;
