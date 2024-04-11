import singleton from "./script.js";

export default function secondUserLog() {
  singleton.printLogsCount();
  singleton.printLogMessage("Hello from second");
  singleton.printLogsCount();
}
