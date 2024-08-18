function delayLog() {
  for (var index = 1; index <= 10; index++) {
    setTimeout(() => console.log(index), (index * 1000));
  }
}
delayLog();