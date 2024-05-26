import "./Home.css";
import bandPic from "../assets/waitless-band.jpeg";

function Home() {
  return (
    <div className="home-page">
      <img
        className="band-pic"
        src={bandPic}
        alt="Four members of the band Wait//less piled up in theatre seats"
      />{" "}
    </div>
  );
}

export default Home;
