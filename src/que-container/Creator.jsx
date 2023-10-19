import { useRef, useState } from "react";

export default function Creator({ obj }) {
  const [open, setOpen] = useState(false);
  const btn = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          setOpen((prev) => !prev);
          const rotateScale = open ? 0 : 180;
          btn.current.animate(
            {
              transform: `rotate(${rotateScale}deg) `,
            },
            { duration: 300, easing: "ease-out", fill: "forwards" }
          );
        }}>
        <h3>{obj["question"]} </h3>
        <svg
          ref={btn}
          className={!open ? "arrow" : "rotate-arrow"}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12">
          <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
        </svg>
      </button>

      <p className={open ? "show-que" : "vanish"}>{obj["answer"]}</p>
    </div>
  );
}
