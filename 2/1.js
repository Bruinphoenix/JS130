(function countDown(number) {
  if (number < 0) return;
  console.log(number);
  countDown(number - 1);
})(7);