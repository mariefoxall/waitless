import "./Music.css";

export default function Music() {
  return (
    <>
      <h2>MUSIC</h2>
      <iframe
        className="bandcamp-iframe"
        src="https://bandcamp.com/EmbeddedPlayer/track=3625602466/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/transparent=true/"
        seamless
      >
        <a href="https://waitless1.bandcamp.com/track/another-year">
          Another Year by WAIT//LESS
        </a>
      </iframe>
    </>
  );
}
