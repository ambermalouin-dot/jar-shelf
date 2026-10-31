// Opening a jar and showing its notes as folded papers.
// Tap a folded paper and it unfolds.
//
// For now the notes are the 3 hard-coded samples from content.js, and every
// jar shows the same 3. Phase 3 swaps them for real notes.

import { NOTES, SAMPLE_NOTES } from "./content.js";
import { el, openOverlay } from "./overlay.js";

// A short beginning of the note, shown on the folded paper.
function preview(body) {
  const words = body.split(" ");
  return words.length > 7 ? words.slice(0, 7).join(" ") + "…" : body;
}

function stampImage(stamp, altText) {
  const img = el("img");
  img.src = `./assets/svg/stamps/stamp-${stamp}.svg`;
  img.alt = altText;
  img.width = 48;
  img.height = 48;
  return img;
}

// Build one note: a folded paper (button) plus the unfolded paper under it.
function buildNote(note) {
  const wrapper = el("article", "note");
  const bodyId = `${note.id}-body`;

  const fold = el("button", "note-fold");
  fold.type = "button";
  fold.setAttribute("aria-expanded", "false");
  fold.setAttribute("aria-controls", bodyId);
  const smallStamp = stampImage(note.stamp, "");
  smallStamp.className = "stamp-small";
  fold.append(smallStamp, el("span", "note-preview", preview(note.body)));

  const body = el("div", "note-body");
  body.id = bodyId;
  const inner = el("div", "note-body-inner");
  const paper = el("div", "note-paper");
  paper.append(el("p", "note-text", note.body));

  const footer = el("div", "note-footer");
  const bigStamp = stampImage(note.stamp, NOTES.stampAlt[note.stamp]);
  bigStamp.className = "stamp-large";
  footer.append(bigStamp);
  if (note.is_keeper) footer.append(el("span", "keeper-label", NOTES.keeperLabel));
  paper.append(footer);

  inner.append(paper);
  body.append(inner);
  wrapper.append(fold, body);

  fold.addEventListener("click", () => {
    const nowOpen = !wrapper.classList.contains("open");
    wrapper.classList.toggle("open", nowOpen);
    fold.setAttribute("aria-expanded", String(nowOpen));
  });

  return wrapper;
}

// Open the jar panel. "prompt" is only given for Tonight's Jar.
export function showJar(jar, trigger, prompt) {
  const view = document.getElementById("jar-view");
  const promptLine = document.getElementById("jar-view-prompt");
  const list = document.getElementById("note-list");

  document.getElementById("jar-view-title").textContent = jar.name;

  promptLine.hidden = !prompt;
  promptLine.textContent = prompt || "";

  list.replaceChildren(...SAMPLE_NOTES.map(buildNote));

  view.scrollTop = 0;
  openOverlay(view, trigger);
}
