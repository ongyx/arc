import clock from "clock";
import document from "document";

const timeLabel = document.getElementById("time")! as TextElement;
const dateLabel = document.getElementById("date")! as TextElement;
const infoLabel = document.getElementById("info")! as TextElement;

function init() {
  clock.granularity = "minutes";
  clock.addEventListener("tick", (event) => {
    const date = event.date;

    timeLabel.text = date.toLocaleTimeString();
    dateLabel.text = date.toLocaleDateString();
    infoLabel.text = "Hello World!";
  });
}

init();
