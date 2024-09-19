import {
  BACKLOG,
  CANCELLED,
  DONE,
  HIGH,
  INPROGRESS,
  LOW,
  MEDIUM,
  NOPRIORITY,
  TODO,
  URGENT,
} from "../assets/icon";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const priorities_map = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority",
};

export const color_priorities_map = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No-priority",
};

export const icon_map = {
  "In progress": INPROGRESS,
  Todo: TODO,
  Backlog: BACKLOG,
  Done: DONE,
  Cancelled: CANCELLED,
  4: URGENT,
  3: HIGH,
  2: MEDIUM,
  1: LOW,
  0: NOPRIORITY,
};
