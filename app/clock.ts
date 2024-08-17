import clock, { TickEvent } from "clock";
import document from "document";

/** Angle offset for time hands. They point downward by default, so this is needed. */
const ANGLE_OFFSET = 180;

/** Angle interval for one minute/second. */
const ANGLE_MIN_SEC = 360 / 60;

/** Angle interval for one hour. */
const ANGLE_HOUR = 360 / 12;

const hourHand = document.getElementById("g-hour-hand")! as GroupElement;
const minuteHand = document.getElementById("g-minute-hand")! as GroupElement;
const secondHand = document.getElementById("g-second-hand")! as GroupElement;

export function init() {
  clock.granularity = "seconds";
  clock.addEventListener("tick", onTick);
}

function onTick(event: TickEvent) {
  const date = event.date;

  setHour(date);
  setMinute(date);
  setSecond(date);
}

function setHour(date: Date) {
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();

  const angle = ANGLE_OFFSET + ANGLE_HOUR * hours + (ANGLE_HOUR / 60) * minutes;

  setAngle(hourHand, angle);
}

function setMinute(date: Date) {
  const angle = ANGLE_OFFSET + date.getMinutes() * ANGLE_MIN_SEC;

  setAngle(minuteHand, angle);
}

function setSecond(date: Date) {
  const angle = ANGLE_OFFSET + date.getSeconds() * ANGLE_MIN_SEC;

  setAngle(secondHand, angle);
}

function setAngle(elem: GroupElement, angle: number) {
  elem.groupTransform!.rotate.angle = angle % 360;
}
