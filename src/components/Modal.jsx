import { useRef, useEffect } from "react";
import GameOver from "../assets/game-over.png";
import Success from "../assets/success.png";
import config from "../data/config.json";

const Modal = ({ isModalOpen, resetGame, mode }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const modalTimeoutDelay = setTimeout(() => {
      if (!dialogRef.current) return;

      if (isModalOpen) {
        dialogRef.current.showModal();
        return;
      } else {
        dialogRef.current.close();
      }
    }, 0);

    return () => clearTimeout(modalTimeoutDelay);
  }, [isModalOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="w-3/4 rounded-lg bg-slate-200 shadow-[0px_5px_16px_1px_rgba(0,0,0,0.5)] md:w-2/4 lg:w-1/4"
    >
      <div className="mt-2 flex flex-col items-center justify-between gap-4 p-3">
        {mode === config.MODAL_MODE.GAME_OVER && (
          <>
            <h1 className="text-3xl font-bold">Game Over!</h1>
            <img src={GameOver} className="h-52"></img>
          </>
        )}
        {mode === config.MODAL_MODE.SUCCESS && (
          <>
            <h1 className="text-3xl font-bold">Congratulations!</h1>
            <img src={Success} className="h-52"></img>
          </>
        )}

        <button
          onClick={resetGame}
          className="bg-light-gold hover:bg-dark-gold rounded-lg px-4 py-2 text-xl transition duration-200"
        >
          Restart!
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
