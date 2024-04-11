import singleton from "./script.js";

export default function firstUserLog() {
  singleton.printLogsCount();
  singleton.printLogMessage("Hello From First");
  singleton.printLogsCount();
}
