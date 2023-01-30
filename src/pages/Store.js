import "./Store.css";
import sale1 from "../assets/img/g1.jpg";
import sale2 from "../assets/img/g2.jpg";
import sale3 from "../assets/img/g3.jpg";
import sale4 from "../assets/img/g4.jpg";
import sale5 from "../assets/img/g5.jpg";
import sale6 from "../assets/img/g6.jpg";
import sale7 from "../assets/img/g7.jpg";
import sale8 from "../assets/img/g8.jpg";
import sale9 from "../assets/img/g9.jpg";
import sale10 from "../assets/img/g10.jpg";

const Store = () => {
  return (
    <div className="container gallery">
      <div className="img-box">
        <img className="img-sale" src={sale1} alt="sale no 1" />
        {/* <h5>Test title - 40$</h5>  */}
      </div>
      <div className="img-box">
        <img className="img-sale" src={sale2} alt="" />
        {/* <h5>Test title</h5>  */}
      </div>
      <div className="img-box">
        <img className="img-sale" src={sale3} alt="" />
        {/* <h5>Test title - 40$</h5>  */}
      </div>
      <div className="img-box">
        <img className="img-sale" src={sale4} alt="" />
        {/* <h5>Test title - 40$</h5>  */}
      </div>
      <div className="img-box">
        <img className="img-sale" src={sale5} alt="" />
        {/* <h5>Test title - 40$</h5>  */}
      </div>
      <div className="img-box">
        <img className="img-sale" src={sale6} alt="" />
        {/* <h5>Test title - 40$</h5>  */}
      </div>
      <div className="img-box">
        <img className="img-sale" src={sale7} alt="" />
        {/* <h5>Test title - 40$</h5>  */}
      </div>
      <div className="img-box">
        <img className="img-sale" src={sale8} alt="" />
        {/* <h5>Test title - 40$</h5>  */}
      </div>
      <div className="img-box">
        <img className="img-sale" src={sale9} alt="" />
        {/* <h5>Test title - 40$</h5>  */}
      </div>
      <div className="img-box">
        <img className="img-sale" src={sale10} alt="" />
        {/* <h5>Test title - 40$</h5>  */}
      </div>
    </div>
  );
};

export default Store;
