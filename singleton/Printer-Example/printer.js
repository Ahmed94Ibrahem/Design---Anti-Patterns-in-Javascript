class Printer {
  constructor() {
    this.printerInstance = null;
    this.countNumber = 0;
  }

  print() {
    console.log("Printed");
    console.log(this.countNumber);
    this.countNumber++;
  }

  static getInstance() {
    if (!this.printerInstance) this.printerInstance = new Printer();
    return this.printerInstance;
  }
}

const firstPrinter = Printer.getInstance();
const secondPrinter = Printer.getInstance();
firstPrinter.print();
firstPrinter.print();
firstPrinter.print();
firstPrinter.print();
firstPrinter.print();
firstPrinter.print();
secondPrinter.print();
