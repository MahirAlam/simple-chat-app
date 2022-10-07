function Body({ wantEmoji }: { wantEmoji: boolean }) {
  return (
    <div
      className={`mx-1 ${
        wantEmoji ? "mb-[385px]" : "mb-16"
      } space-y-4 flex-grow flex items-end overflow-x-auto`}
    >
      <div className="space-y-4  w-full flex flex-col">
        <div className="self-start font-noto-emoji text-[17px] shadow max-w-[17rem] text-base-content bg-base-300 p-3 rounded-lg relative mr-4 left-8">
          <div className="avatar w-5 absolute -left-7 bottom-[5px]">
            <img
              src="https://source.unsplash.com/user/c_v_r/100x100"
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="h-2 w-2 bg-base-300 rotate-45 transform -left-1 bottom-[12px] absolute" />
          fefefe efer 🫠 Lorem, ipsum dolor sit amet consectetur
        </div>
        <div className="self-end font-noto-emoji text-[17px] shadow max-w-[17rem] text-primary-content bg-primary p-3 rounded-lg relative ml-4 right-8">
          <div className="avatar w-5 absolute -right-7 bottom-[5px]">
            <img
              src="https://source.unsplash.com/user/c_v_r/100x100"
              alt=""
              className="rounded-full"
            />
          </div>
          <div className=" h-2 w-2 bg-primary rotate-45 transform -right-1 bottom-[12px] absolute" />
          fefefe efer Lorem, ipsum dolor sit amet
        </div>
      </div>
    </div>
  );
}

export default Body;
