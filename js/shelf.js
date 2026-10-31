// The shelf page: starts everything up.

import { HEADER, SHELF, SITE, UI } from "./content.js";
import { startLighting } from "./lighting.js";
import { setupJars } from "./jars.js";
import { setupLantern } from "./lantern.js";
import { setupDrawer } from "./drawer.js";
import { closeOverlay } from "./overlay.js";

startLighting();

// Words that live in content.js
document.getElementById("tagline").textContent = SITE.tagline;
document.getElementById("record-label").textContent = SHELF.recordPlayerLabel;
document.getElementById("lantern-button").setAttribute("aria-label", HEADER.lanternLabel);
document.getElementById("drawer-button").setAttribute("aria-label", HEADER.drawerLabel);
document.getElementById("drawer").setAttribute("aria-labelledby", "drawer-title");

// Every close button closes the panel it sits in.
document.querySelectorAll("[data-close]").forEach((button) => {
  button.textContent = UI.close;
  button.addEventListener("click", () => closeOverlay(button.closest(".overlay")));
});

setupJars();
setupLantern();
setupDrawer();

// The Record Player is only a placeholder for now. Sound comes in a later phase.
