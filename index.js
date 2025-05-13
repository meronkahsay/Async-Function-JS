//You are building a reminder feature for a task management app. Write an async function that sends a reminder (simulated with console.log) after a delay using setTimeout. The function should return a Promise that resolves after 3 seconds with the message "Reminder sent to user!", and you should await it to log the message.


async function sendReminder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Sending reminder");
      resolve("Reminder sent to user!");
    }, 3000);
  });
}

async function runReminder() {
  const mseage = await sendReminder();
  console.log(mseage); 
}

runReminder();

//In a startup's DevOps dashboard, implement a setInterval function that checks server status every 5 seconds by calling an async function checkServer() that returns a Promise resolving to "Server is running" or rejecting with "Server down". Use .then() and .catch() to handle the result and stop the interval after 30 seconds using clearInterval.


async function checkServer() {
  return Math.random() > 0.3 ? Promise.resolve("Server is running"): Promise.reject("Server down");
}


const intervalId = setInterval(() => {
  checkServer()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
}, 5000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Stopped checking server.");
}, 3000);
 
checkServer();


//You're building a system to show multiple notifications to a user. Create an async function showNotifications that takes an array of messages and shows each message 1 second apart using await and setTimeout wrapped in a Promise. After all messages are shown, log "All notifications sent".

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showNotifications(messages) {
  for (let msseage of messages) {
    await delay(1000);
    console.log(msseage);
  }
  console.log("All notifications sent");
}

showNotifications(["Hello!", "Meeting at 3 PM", "Don't forget to submit report"]);

//In your startup’s API integration, write an async function fetchDataWithRetry() that tries to fetch data from a mock API (use Promise.reject() for failure), retries up to 3 times with a 2-second delay between attempts using setTimeout, and resolves with "Data fetched" or logs "Failed after 3 attempts" if all fail.

function mockAPI() {
  return Math.random() > 0.7? Promise.resolve("Data fetched") : Promise.reject("Fetch failed");
}

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function fetchDataWithRetry() {
  let attempts = 0;

  while (attempts < 3) {
    try {
      const data = await mockAPI();
      console.log(data);
      return;
    } catch (err) {
      console.error(err);
      attempts++;
      if (attempts < 3) {
        await delay(2000);
      }
    }
  }

  console.log("Failed after 3 attempts");
}

fetchDataWithRetry();

//You’re building a countdown timer for a product launch. Write a function that takes a number n and logs the countdown every second using setInterval. Once it reaches 0, stop the interval and call an async function launchProduct() that returns a resolved Promise with "Product Launched!" and logs it.

function launchProduct() {
  return Promise.resolve("Product Launched!");
}

function startCountdown(n) {
  const timer = setInterval(async () => {
    console.log(n);
    if (n === 0) {
      clearInterval(timer);
      const result = await launchProduct();
      console.log(result);
    }
    n--;
  }, 1000);
}

startCountdown(5);



