class User {
  constructor() {
    if (User.instance == null) {
      this.logs = [];
      this.instance = this;
    }
    return this.instance;
  }

  printLogsCount() {
    console.log(`${this.logs.length} Logs`);
  }

  printLogMessage(message) {
    this.logs.push(message);
    console.log(message);
  }
}

const singleton = new User();
Object.freeze(singleton);
export default singleton;
