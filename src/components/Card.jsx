import { useState } from "react";

function Card({ title }) {
  const [liked, setLiked] = useState(false);

  function handleToggleLike() {
    setLiked(!liked);
  }

  return (
    <div className={`card ${liked ? "card--liked" : ""}`}>
      <h2 className="card__title">{title}</h2>
      
      <span className={`card__status ${liked ? "card__status--liked" : ""}`}>
        {liked ? "❤️ Liked" : "🤍 Not liked"}
      </span>

      <button
        className={`card__button ${liked ? "card__button--unlike" : ""}`}
        onClick={handleToggleLike}
      >
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default Card;
