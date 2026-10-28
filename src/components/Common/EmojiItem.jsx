import React from "react";

const EmojiItem = ({
  emoji,
  top,
  bottom,
  left,
  right,
  fontSize = "3rem",
  opacity = 0.2,
  duration = "3s",
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top,
        bottom,
        left,
        right,
        fontSize,
        opacity,
        animation: `float ${duration} ease-in-out infinite`,
      }}
    >
      {emoji}
    </div>
  );
};

export default EmojiItem;
