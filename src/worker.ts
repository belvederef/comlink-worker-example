import * as comlink from "comlink";

export default class RenderingService {
  counter = 0;

  increaseAndLog() {
    this.counter++;
    while (this.counter < 10000000000) {
      this.counter++;
    }
    console.log("counter is = ", this.counter);
  }

  logSomething() {
    console.log("something");
  }
}

comlink.expose(RenderingService);
