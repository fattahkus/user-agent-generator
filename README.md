
# User Agents Generator

> This is a Node.js module that provides a simple way to generate user agent strings for various web browsers and mobile devices. The generated user agents can be used in web scraping or automation scripts to mimic the behavior of real users.Change user agents dynamically easily using this package.

## Usage

1.  **Install the module in your project:**

```bash
npm install user-agents-generator
```

2. **Import the module in your script:**

```javascript
const userAgentGenerator = require('user-agents-generator');
```

3. **Use the module's methods to generate user agents for different browsers and devices:**

```javascript
const chromeUserAgent = userAgentGenerator.chrome();
const firefoxUserAgent = userAgentGenerator.firefox();
const safariUserAgent = userAgentGenerator.safari();
const androidUserAgent = userAgentGenerator.android();
const iosUserAgent = userAgentGenerator.ios();
```
4. **Pass the generated user agent string to your Puppeteer automation scripts:**

```javascript

const puppeteer = require('puppeteer');
const chromeUserAgent = userAgentGenerator.chrome();
(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    //You can setup more additional args later on.
    args: [`--user-agent=${chromeUserAgent}`]
  });
  const page = await browser.newPage();

  // Write your code here instead of Navigating into `example.com` 🚀
	console.log('🚀 Navigate into example.com');
	await page.goto('https://example.com', { waitUntil: 'domcontentloaded'});

  // your automation code here

	console.log('☑️ Broser Closed');
  await browser.close();
})();
```

## API

### `userAgentGenerator.edge()`

Generates a user agent string for the Microsoft Edge browser.

### `userAgentGenerator.chrome()`

Generates a user agent string for the Google Chrome browser.

### `userAgentGenerator.firefox()`

Generates a user agent string for the Mozilla Firefox browser.

### `userAgentGenerator.safari()`

Generates a user agent string for the Apple Safari browser.

### `userAgentGenerator.android()`

Generates a user agent string for an Android device.

### `userAgentGenerator.ios()`

Generates a user agent string for an iOS device.

## License

This module is released under the MIT License.