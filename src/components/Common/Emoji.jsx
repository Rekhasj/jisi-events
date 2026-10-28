import React from "react";
import EmojiItem from "./EmojiItem";

const Emoji = () => {
  return (
    <>
      <EmojiItem
        emoji="🎈"
        top="20%"
        left="10%"
        fontSize="4rem"
        duration="3s"
      />
      {/* <EmojiItem
        emoji="🏵️"
        bottom="40%"
        left="10%"
        fontSize="4rem"
        duration="3s"
      /> */}
      {/* <EmojiItem
        emoji="✨"
        bottom="30%"
        left="5%"
        fontSize="3rem"
        duration="4s"
      /> */}
      <EmojiItem
        emoji="🎁"
        bottom="10%"
        left="10%"
        fontSize="3.5rem"
        duration="3.5s"
      />
      <EmojiItem
        emoji="💍"
        top="20%"
        right="10%"
        fontSize="3.5rem"
        duration="3.5s"
      />
      {/* <EmojiItem
        emoji="☔"
        bottom="20%"
        right="20%"
        fontSize="3.5rem"
        duration="3.5s"
      /> */}
      <EmojiItem
        emoji="🪅"
        bottom="10%"
        right="10%"
        fontSize="3.5rem"
        duration="3.5s"
      />
    </>
  );
};

export default Emoji;
