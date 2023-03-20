import "./Store.css";
// import { Link } from "react-router-dom";
import data from "../data";

const Store = () => {
  return (
    <div className="container gallery">
      {data.map((picture) => (
        <div className="img-box">
          {/* <Link to={`/store/${picture.route}`}> */}
          <img className="img-sale" src={picture.source} alt={picture.name} />
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
};

export default Store;
