import React from "react";

function EmojiInfo(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.emojiName}>
          {props.image}
        </span>
        <span>{props.emojiName}</span>
      </dt>
      <dd>{props.emojiDescription}</dd>
    </div>
  );
}

export default EmojiInfo;
