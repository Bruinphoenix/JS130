function startCounting() {
  let count = 1;
  return setInterval(() => {
    console.log(count);
    count++;
  }, 1000);
}

let id = startCounting();

function stopCounting(id) {
  clearInterval(id);
}

setTimeout(() => stopCounting(id), 10000);