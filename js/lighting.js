// Day and night lighting.
// Day is 6 AM to 7 PM on the visitor's own clock; night is 7 PM to 6 AM.
// This just sets data-lighting="day" or "night" on <html>; the CSS does the rest.
//
// To preview a mode without waiting, add ?lighting=night or ?lighting=day
// to the end of the web address.

function chooseLighting() {
  const forced = new URLSearchParams(window.location.search).get("lighting");
  if (forced === "day" || forced === "night") return forced;

  const hour = new Date().getHours();
  return hour >= 6 && hour < 19 ? "day" : "night";
}

export function startLighting() {
  const apply = () => {
    document.documentElement.dataset.lighting = chooseLighting();
  };
  apply();
  // Check once a minute so the shelf changes if someone leaves it open.
  setInterval(apply, 60 * 1000);
}
