// Small helpers shared by the panels (jar view, Drawer, Lantern).

// Make an element: el("p", "some-class", "Some text").
// Text is always added with textContent, which is safe for any words.
export function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// Panels that are open right now. The last one is on top.
const openPanels = [];

// Show a panel. "trigger" is the button that opened it, so focus can go back there.
export function openOverlay(panel, trigger) {
  panel.hidden = false;
  openPanels.push({ panel, trigger });
  document.body.classList.add("overlay-open");
  panel.focus();
}

export function closeOverlay(panel) {
  const index = openPanels.findIndex((p) => p.panel === panel);
  if (index === -1) return;
  const [{ trigger }] = openPanels.splice(index, 1);
  panel.hidden = true;
  if (openPanels.length === 0) document.body.classList.remove("overlay-open");
  if (trigger) trigger.focus();
}

// The Escape key closes the top panel.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && openPanels.length > 0) {
    closeOverlay(openPanels[openPanels.length - 1].panel);
  }
});
