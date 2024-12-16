import "./Bio.css";
import bioData from "../../Content/bio.json";

function Bio() {
  return (
    <div className="bio">
      <div className="bio-container">
        <header className="bio-main-header">A Glimpse of who I Am</header>
        <p className="bio-paragraph">
          {bioData.map((paragraph, index) => (
            <p key={index}>
              {paragraph.split(/(`[^`]+`)/g).map((part, idx) =>
                part.startsWith("`") && part.endsWith("`") ? (
                  <span key={idx} className="highlight">
                    {part.slice(1, -1)}
                  </span>
                ) : (
                  part
                )
              )}
            </p>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Bio;
