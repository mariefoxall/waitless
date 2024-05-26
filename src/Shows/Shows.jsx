import "./Shows.css";

function Exhibitions() {
  return (
    <>
      <h2>SHOWS</h2>
      <h2 className="shows-section">Upcoming:</h2>
      <div className="show">
        <a
          href="https://www.foxcabaret.com/monthly-calendar-list/2024/lambrinigirls"
          target="blank"
        >
          August 8 2024
        </a>
        <p>Fox Cabaret</p>
        <p>Vancouver BC</p>
      </div>
      <h2 className="shows-section">Previous:</h2>
      <div className="show">
        <a
          href="https://www.commodoreballroom.com/view-all/2024/5/11-doa"
          target="blank"
        >
          May 8 2024
        </a>
        <p>Commodore Ballroom</p>
        <p>Vancouver BC</p>
      </div>
    </>
  );
}

export default Exhibitions;
