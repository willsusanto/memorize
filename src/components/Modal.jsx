import { useRef, useEffect } from "react";
import GameOver from "../assets/game-over.png";

const Modal = ({ isModalOpen }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isModalOpen) {
      dialogRef.current.showModal();
      return;
    }

    dialogRef.current.close();
  }, [isModalOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="w-2/5 rounded-lg bg-slate-200 p-3 flex flex-col items-center"
    >
        <h1>Game Over!</h1>
        <img src={GameOver}></img>
    </dialog>
  );
};

export default Modal;
