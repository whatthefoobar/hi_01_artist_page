import "./Home.css";
import img1 from "../assets/img/bw1.jpg";
import img2 from "../assets/img/bw2.jpg";
import img3 from "../assets/img/bw3.jpg";
import img4 from "../assets/img/bw4.jpg";
import img5 from "../assets/img/bw5.jpg";
import img6 from "../assets/img/bw6.jpg";

const Home = () => {
  return (
    <main className="main">
      <div className="container row grey">
        <section className="col text-container">
          <h2 className="intro">Hello, my name is...</h2>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              pretium fusce id velit ut tortor pretium viverra suspendisse.
              Tristique magna sit amet purus gravida quis. Lorem ipsum dolor sit
              amet consectetur. Vulputate ut pharetra sit amet aliquam id diam.
              Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam
              nulla facilisi. Sit amet porttitor eget dolor morbi non arcu
              risus. Morbi leo urna molestie at elementum. Urna cursus eget nunc
              scelerisque. Egestas pretium aenean pharetra magna.
            </p>
            <p>
              Laoreet suspendisse interdum consectetur libero id faucibus nisl
              tincidunt. Urna molestie at elementum eu facilisis sed odio.
              Porttitor rhoncus dolor purus non enim praesent. Etiam non quam
              lacus suspendisse faucibus interdum posuere lorem ipsum. Tortor id
              aliquet lectus proin nibh nisl condimentum id venenatis. Sem nulla
              pharetra diam sit amet nisl suscipit adipiscing bibendum. Lorem
              sed risus ultricies tristique nulla.
            </p>
          </div>
        </section>

        <section className="col img-container">
          <div className="img">
            <img className="preview-img" src={img1} alt="black and white 1" />
          </div>
          <div className="img">
            <img className="preview-img" src={img2} alt="black and white 2" />
          </div>
          <div className="img">
            <img className="preview-img" src={img3} alt="black and white 3" />
          </div>
          <div className="img">
            <img className="preview-img" src={img4} alt="black and white 4" />
          </div>
          <div className="img">
            <img className="preview-img" src={img5} alt="black and white 5" />
          </div>
          <div className="img">
            <img className="preview-img" src={img6} alt="black and white 6" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
