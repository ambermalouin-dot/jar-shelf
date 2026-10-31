// The jars on the shelf: Tonight's Jar and the Jar Cluster (the 5 topic jars).

import { JARS, PROMPTS, SHELF } from "./content.js";
import { el } from "./overlay.js";
import { showJar } from "./notes.js";

// TEMPORARY: picks a prompt from the visitor's own date.
// Phase 3 replaces this with the real prompt from the database
// (which changes at 5 AM Eastern time).
function todaysPrompt() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - startOfYear) / 86400000);
  return PROMPTS[dayOfYear % PROMPTS.length];
}

// "Tonight · Friday, October 31"
function todayLine() {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return SHELF.tonightDateLine.replace("{date}", date);
}

function setupTonight() {
  const tonight = JARS[0];
  const prompt = todaysPrompt();
  const button = document.getElementById("tonight-jar");

  document.getElementById("tonight-label").textContent = tonight.name;
  document.getElementById("tonight-date").textContent = todayLine();
  document.getElementById("tonight-prompt").textContent = prompt;
  document.getElementById("tonight-note").textContent = SHELF.promptChangesNote;

  button.addEventListener("click", () => showJar(tonight, button, prompt));
}

function setupCluster() {
  const button = document.getElementById("cluster-button");
  const list = document.getElementById("cluster-jars");

  document.getElementById("cluster-label").textContent = SHELF.clusterButton;

  // The 5 topic jars (everything except Tonight's Jar).
  JARS.slice(1).forEach((jar) => {
    const item = el("li");
    const jarButton = el("button", "shelf-object jar-button");
    jarButton.type = "button";
    jarButton.setAttribute("aria-haspopup", "dialog");

    const art = el("img", "jar-art-small");
    art.src = jar.art;
    art.alt = "";
    art.width = 120;
    art.height = 150;

    jarButton.append(art, el("span", "object-label", jar.name));
    jarButton.addEventListener("click", () => showJar(jar, jarButton));
    item.append(jarButton);
    list.append(item);
  });

  // Tap the cluster to show or hide the 5 jars.
  button.addEventListener("click", () => {
    const opening = list.hidden;
    list.hidden = !opening;
    button.setAttribute("aria-expanded", String(opening));
  });
}

export function setupJars() {
  setupTonight();
  setupCluster();
}
