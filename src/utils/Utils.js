const { networkInterfaces } = require("os");

const express = require("express");
const app = express();
const {
  uniqueNamesGenerator,
  names,
  adjectives,
  animals,
  colors,
  starWars,
  countries,
} = require("unique-names-generator");

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
  getRandomName() {
    const config = {
      dictionaries: [names],
    };
    return uniqueNamesGenerator(config);
  },
  getRandomCrazyName() {
    const config = {
      dictionaries: [colors, adjectives, animals],
      separator: " ",
      style: "upperCase",
    };
    return uniqueNamesGenerator(config);
  },
  getRandomColorCountry() {
    const config = {
      dictionaries: [colors, countries],
      separator: " ",
      style: "upperCase",
    };
    return uniqueNamesGenerator(config);
  },
  getRandomStarWarsName() {
    const config = {
      dictionaries: [starWars],
    };
    return uniqueNamesGenerator(config);
  },
  logMsg(domain, method, msg) {
    const dayjs = require("dayjs");
    const debug = require("debug")(`smart_backend:${domain}`);
    debug(`${dayjs().toISOString()} - ${method} -> ${msg}`);
  },
};
