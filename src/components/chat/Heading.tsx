import { IoArrowBackOutline, IoEllipsisVertical } from "react-icons/io5";

function Heading() {
  return (
    <div className="sticky z-20 bg-base-200 flex items-center justify-between left-0 right-0 h-16">
      <div className="flex flex-row items-center">
        <IoArrowBackOutline className="mx-2 hover:bg-base-300 w-11 h-11 p-2 rounded-full text-base-content" />
        <div className="avatar w-11 h-11">
          <img
            src="https://source.unsplash.com/user/c_v_r/100x100"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="flex text-base-content flex-col ml-2">
          <h3 className="text-[22px] -mb-1 font-semibold font-[Georgia]">
            Mahir Alam
          </h3>
          <div className="flex flex-row items-center space-x-2">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-sm font-bold text-base-content/70 font-mono">
              Typing...
            </span>
          </div>
        </div>
      </div>
      <IoEllipsisVertical className="mx-2 hover:bg-base-300 w-11 h-11 p-2 rounded-full fill-base-content" />
    </div>
  );
}

export default Heading;
