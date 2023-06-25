import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

function changeTextContent(element: HTMLTitleElement | Element | null) {
  if (!element) return;

  element.textContent = import.meta.env.VITE_PROJECT_NAME;
}

(function () {
  const title = document.querySelector("title");
  changeTextContent(title);

  const heading = document.querySelector(".sr-only");
  changeTextContent(heading);

  const shareBtn = document.querySelector("#share");
  if (!shareBtn) return;

  shareBtn.addEventListener("click", function () {
    const popover = document.querySelector("#popover");
    if (!popover) return;

    popover.classList.remove("hidden");
    popover.classList.add("flex");

    shareBtn.classList.add("bg-east-bay");
    shareBtn.querySelector("svg")?.classList.remove("fill-east-bay");
    shareBtn.querySelector("svg")?.classList.add("fill-alice-blue");
  });
})();
