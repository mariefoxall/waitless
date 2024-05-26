import "./Videos.css";

export default function Videos() {
  return (
    <>
      <h2>VIDEOS</h2>
      <div className="video">
        <iframe
          className="video-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1Z1wVogZjXM?si=G1evFivtxBEVOLTA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>{" "}
      </div>
    </>
  );
}
