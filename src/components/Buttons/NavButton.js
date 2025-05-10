import { DownArrow } from "@/svgs/NavIcons";

export default function NavButton({ visible, handlelcick, isScrolled }) {
  return (
    <button
      className={`lg:hidden md:hidden mx-3 `}
      onClick={handlelcick}
      aria-label="Phone Nav toggle"
    >
      <DownArrow width={"10vw"} color={`${isScrolled ? "#fff" : "#000"}`} />
    </button>
  );
}
