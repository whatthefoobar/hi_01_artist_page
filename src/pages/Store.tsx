import "./Store.css";
// import { Link } from "react-router-dom";
import data from "../data";

const Store: React.FC = () => {
  return (
    <div className="container gallery">
      {data.map((picture) => (
        <div className="img-box" key={picture.id}>
          {/* <Link to={`/store/${picture.route}`}> */}
          <img className="img-sale" src={picture.source} alt={picture.name} />
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
};

export default Store;
