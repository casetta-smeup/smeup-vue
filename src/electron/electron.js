let fs;

if (typeof window.require === "function") {
  fs = window.require("fs");
}

class Electron {
  constructor() {}

  writeToFile(value) {
    if (fs) {
      fs.writeFile("/tmp/fromVue.txt", value, "UTF-8", this.handleError);
    }
  }

  handleError(err) {
    if (err) {
      alert("An error ocurred creating the file " + err.message);
    }
  }
}

export { Electron };
