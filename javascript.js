let MaxSpend = 0;
let MaxStrip;

function SetStripHeight (strip_id, tooltip_id, height) {
  let strip = document.getElementById(strip_id);
  let tooltip = document.getElementById(tooltip_id);

  if(height > MaxSpend) {
    MaxSpend = height;
    MaxStrip = strip;
  }

  strip.style.height = height * 1.6 + "%";
  tooltip.textContent = "$" + height;
}

SetStripHeight("strip-mon", "tooltip-mon", 17.45);
SetStripHeight("strip-tue", "tooltip-tue", 34.91);
SetStripHeight("strip-wed", "tooltip-wed", 52.36);
SetStripHeight("strip-thu", "tooltip-thu", 31.07);
SetStripHeight("strip-fri", "tooltip-fri", 23.39);
SetStripHeight("strip-sat", "tooltip-sat", 43.28);
SetStripHeight("strip-sun", "tooltip-sun", 25.48);
MaxStrip.style.backgroundColor = "hsl(186, 34%, 60%)";