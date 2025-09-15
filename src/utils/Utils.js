const { networkInterfaces } = require("os");

const express = require("express");
const app = express();

module.exports = {
  isDevelopmentEnv() {
    return app.get("env") === "development";
  },
  getLocalAddress() {
    const nets = networkInterfaces();
    const addresses = [];

    for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
        // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === "IPv4" && !net.internal) {
          addresses.push(net.address);
        }
      }
    }
    let result = "";
    addresses.forEach((a) => {
      if (result) {
        result += ", " + a;
      } else {
        result = a;
      }
    });
    return result;
  },
  logMsg(domain, method, msg) {
    const dayjs = require("dayjs");    
    console.log(`${dayjs().toISOString()} - ${method} -> ${msg}`);
  },
};
