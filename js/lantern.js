// The Lantern: a full-screen list of help resources.
// It works without the database, so it works even when the shelf can't be reached.

import { LANTERN } from "./content.js";
import { el, openOverlay } from "./overlay.js";

// One card per resource: name, what it is, the words, and tap-to-call buttons.
function buildResource(resource) {
  const card = el("section", resource.emergency ? "resource resource-emergency" : "resource");

  if (resource.name) card.append(el("h3", "resource-name", resource.name));
  if (resource.detail) card.append(el("p", "resource-detail", resource.detail));
  card.append(el("p", "resource-text", resource.text));

  const actions = el("div", "resource-actions");
  resource.actions.forEach((action) => {
    const link = el("a", "action-button", action.label);
    link.href = action.href;
    if (action.external) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    actions.append(link);
  });
  card.append(actions);
  return card;
}

export function setupLantern() {
  const panel = document.getElementById("lantern");
  const button = document.getElementById("lantern-button");
  const content = document.getElementById("lantern-content");

  document.getElementById("lantern-title").textContent = LANTERN.header;
  content.append(el("p", "lantern-intro", LANTERN.intro));
  LANTERN.resources.forEach((resource) => content.append(buildResource(resource)));
  content.append(el("p", "lantern-footer", LANTERN.footer));

  // Only show the "Last checked" line once Amber has filled in a date.
  if (LANTERN.lastChecked) {
    const line = LANTERN.lastCheckedLabel.replace("{date}", LANTERN.lastChecked);
    content.append(el("p", "lantern-checked", line));
  }

  button.addEventListener("click", () => {
    if (panel.hidden) openOverlay(panel, button);
  });
}
