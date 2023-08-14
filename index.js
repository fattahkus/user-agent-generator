/*
 * @title user-agents-generator 🚀
 * @desc 📝 A Minimal Package to Generate unlimited user agents 🚀
 * @version 1.0.0
 * @author 🧑‍💻 DropOutLab <dropoutlab@gmail.com>
 */

const os = require('os');
const userAgentGenerator = {
  edge: function() {
    const edgeVersion = Math.floor(Math.random() * 25) + 90;
    const chromeVersion = Math.floor(Math.random() * 20) + 96;
    const safariVersion = Math.floor(Math.random() * 6) + 10;
    const webkitVersion = Math.floor(Math.random() * 700) + 500;
    const osPlatform = os.platform() === 'win32' ? 'Windows NT 10.0; Win64; x64' : 'Macintosh; Intel Mac OS X 10_15_17';
    const userAgent = `Mozilla/5.0 (${osPlatform}) AppleWebKit/${webkitVersion}.36 (KHTML, like Gecko) Chrome/${chromeVersion}.0.0.0 Safari/${webkitVersion}.36 Edg/${edgeVersion}.0.1901.203`;
    return userAgent;
  },
  chrome: function() {
    const windowsNtVersion = Math.floor(Math.random() * 3) + 7;
    const chromeVersion = Math.floor(Math.random() * 20) + 96;
    const webkitVersion = Math.floor(Math.random() * 700) + 500;
    const osPlatform = os.platform() === 'win32' ? `Windows NT ${windowsNtVersion}.0; Win64; x64` : 'Macintosh; Intel Mac OS X 10_15_17';
    const userAgent = `Mozilla/5.0 (${osPlatform}) AppleWebKit/${webkitVersion}.36 (KHTML, like Gecko) Chrome/${chromeVersion}.0.3163.100 Safari/${webkitVersion}.36`;
    return userAgent;
  },
  firefox: function() {
    const windowsNtVersion = Math.floor(Math.random() * 3) + 7;
    const firefoxVersion = Math.floor(Math.random() * 26) + 95;
    const geckoVersion = Math.floor(Math.random() * 30) + 20100101;
    const osPlatform = os.platform() === 'win32' ? `Windows NT ${windowsNtVersion}.0; Win64; x64` : 'Macintosh; Intel Mac OS X 10_15_17';
    const userAgent = `Mozilla/5.0 (${osPlatform}; rv: ${firefoxVersion}.0) Gecko/${geckoVersion} Firefox/${firefoxVersion}.0`;
    return userAgent;
  },
  safari: function() {
    const windowsNtVersion = Math.floor(Math.random() * 3) + 7;
    const safariVersion = Math.floor(Math.random() * 6) + 10;
    const webkitVersion = Math.floor(Math.random() * 700) + 500;
    const osPlatform = os.platform() === 'win32' ? `Windows NT ${windowsNtVersion}.0; Win64; x64` : 'Macintosh; Intel Mac OS X 10_15_17';
    const userAgent = `Mozilla/5.0 (${osPlatform}) AppleWebKit/${webkitVersion}.1.15 (KHTML, like Gecko) Version/${safariVersion}.1.15 Safari/${webkitVersion}.1.15`;
    return userAgent;
  },
  android: function() {
    const edgeVersion = Math.floor(Math.random() * 25) + 90;
    const androidVersion = Math.floor(Math.random() * 8) + 5;
    const chromeVersion = Math.floor(Math.random() * 20) + 96;
    const webkitVersion = Math.floor(Math.random() * 700) + 500;
    const osPlatform = Math.floor(Math.random() * 10)
    const userAgent = `Mozilla/5.0 (Linux; Android ${androidVersion}.${osPlatform}; K) AppleWebKit/5${webkitVersion}37.36 (KHTML, like Gecko) Chrome/${chromeVersion}.0.0.0 Mobile Safari/${webkitVersion}.36 EdgA/${edgeVersion}.0.1901.196`
    return userAgent;
  },
  ios: function() {
    const iosVersion = Math.floor(Math.random() * 7) + 9;
    const edgeVersion = Math.floor(Math.random() * 25) + 90;
    const safariVersion = Math.floor(Math.random() * 6) + 10;
    const webkitVersion = Math.floor(Math.random() * 700) + 500;
    const osPlatform = Math.floor(Math.random() * 10)
    const userAgent = `Mozilla/5.0 (iPhone; CPU iPhone OS ${iosVersion}_${osPlatform} like Mac OS X) AppleWebKit/${webkitVersion}.1.15 (KHTML, like Gecko) EdgiOS/${edgeVersion}.0.1901.187 Version/${safariVersion}.0 Mobile/15E148 Safari/${webkitVersion}.1`
    return userAgent;
  }
};

module.exports = userAgentGenerator;
