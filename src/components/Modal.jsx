import { useRef, useEffect } from "react";
import GameOver from "../assets/game-over.png";

const Modal = ({ isModalOpen }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isModalOpen) {
      dialogRef.current.showModal();
      return;
    } else {
      dialogRef.current.close();
    }
  }, [isModalOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="w-1/4 rounded-lg bg-slate-200 shadow-[0px_5px_16px_1px_rgba(0,0,0,0.5)]"
    >
      <div className="mt-2 flex flex-col items-center justify-between gap-4 p-3">
        <h1 className="text-3xl font-bold">Game Over!</h1>
        <img src={GameOver} className="h-52"></img>
        <button className="bg-light-gold hover:bg-dark-gold rounded-lg px-4 py-2 text-xl transition duration-200">
          Restart!
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
