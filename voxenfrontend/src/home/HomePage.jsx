import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/sauce" className="btn btn-primary">
        Sauce Page
      </Link>
    </div>
  );
}

export default HomePage;
