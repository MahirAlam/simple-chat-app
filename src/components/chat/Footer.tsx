import EmojiPicker, {
  EmojiStyle,
  SuggestionMode,
  Theme,
} from "emoji-picker-react";
import React from "react";
import { BiPaperPlane } from "react-icons/bi";

interface ChatFooterProps {
  wantEmoji: boolean;
  setWantEmoji: React.Dispatch<React.SetStateAction<boolean>>;
}

function Footer({ wantEmoji, setWantEmoji }: ChatFooterProps) {
  const [inputMessage, setInputMessage] = React.useState("");
  const [selectedEmoji, setSelectedEmoji] = React.useState<string>();
  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputMessage(e.target.value);
  };
  React.useEffect(() => {
    if (selectedEmoji) {
      setInputMessage((prevInput) => prevInput + selectedEmoji);
    }
  }, [selectedEmoji, setInputMessage]);

  return (
    <>
      <div className="bg-base-300 z-50 items-center right-0 flex left-0 h-14">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setWantEmoji((prevWanting: boolean) => !prevWanting);
          }}
          className="w-9 p-1 rounded mx-2 focus:bg-base-200 hover:bg-base-200"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f642.png"
            alt="emoji panel"
          />
        </button>
        <form className="flex flex-row w-full items-center self-center justify-center align-middle">
          <input
            type="text"
            onChange={(e) => {
              handleMessage(e);
            }}
            value={inputMessage}
            placeholder="Type here"
            className="input font-noto-emoji bg-base-200 input-ghost h-11 text-xl focus:bg-base-200 input-sm w-full"
          />
          <button
            type="button"
            className="p-2 rounded-full m-2 bg-base-300 text-base-content text-2xl hover:bg-base-200/50"
          >
            <BiPaperPlane />
          </button>
        </form>
      </div>
      {wantEmoji ? (
        <EmojiPicker
          onEmojiClick={(emoji) => {
            setSelectedEmoji(emoji.emoji);
          }}
          autoFocusSearch={false}
          theme={Theme.LIGHT}
          previewConfig={{ showPreview: false }}
          lazyLoadEmojis
          suggestedEmojisMode={SuggestionMode.RECENT}
          searchPlaceHolder="Filter Emojis"
          emojiStyle={EmojiStyle.GOOGLE}
        />
      ) : null}
    </>
  );
}

export default Footer;
