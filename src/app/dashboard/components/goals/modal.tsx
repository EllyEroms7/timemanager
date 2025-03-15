import React from "react";

const Modal = (props: { create: boolean; createdFn: () => void }) => {
  return (
    <>
      {/* modal */}
      <div className="z-10 absolute top-0">
        {props.create && (
          <div className="bg-background h-screen w-screen absolute top-0 left-0 flex items-center justify-center ">
            <div className="bg-white p-5 rounded-lg">
              <div className="flex justify-between">
                <h1>Create new goal</h1>
                <button
                  className="bg-danger rounded-full shadow-primary shadow-[0px_0px_10px] text-center py-1 scale-50 w-fit px-4"
                  onClick={props.createdFn}
                >
                  Close
                </button>
              </div>
              <form>
                <input
                  type="text"
                  className="w-full p-2 border-2 border-gray-400 rounded-lg"
                  placeholder="Enter goal name"
                />
                <button
                  className="bg-primary rounded-full shadow-primary shadow-[0px_0px_10px] text-center py-1 scale-50 w-fit px-4"
                  type="submit"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
