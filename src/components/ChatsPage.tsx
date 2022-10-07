import { useState } from "react";
import Body from "./chat/Body";
import Footer from "./chat/Footer";
import Heading from "./chat/Heading";

function ChatsPage() {
  const [wantEmoji, setWantEmoji] = useState(false);
  return (
    <>
      <Heading />
      <Body wantEmoji={wantEmoji} />
      <div className="fixed bottom-0 left-0 right-0">
        <Footer wantEmoji={wantEmoji} setWantEmoji={setWantEmoji} />
      </div>
    </>
  );
}

export default ChatsPage;
