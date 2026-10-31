// The Drawer.
// For now it only shows the house rules. Settings, your notes, and the rest
// are added in a later phase.

import { DRAWER, HOUSE_RULES } from "./content.js";
import { el, openOverlay } from "./overlay.js";

export function setupDrawer() {
  const panel = document.getElementById("drawer");
  const button = document.getElementById("drawer-button");
  const content = document.getElementById("drawer-content");

  document.getElementById("drawer-title").textContent = DRAWER.houseRulesHeading;

  const list = el("ol", "house-rules");
  HOUSE_RULES.forEach((rule) => {
    const item = el("li");
    item.append(el("strong", null, rule.title), " ", rule.text);
    list.append(item);
  });
  content.append(list);

  button.addEventListener("click", () => {
    if (panel.hidden) openOverlay(panel, button);
  });
}
