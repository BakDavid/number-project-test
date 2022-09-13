function multiples() {
  let number = document.getElementById("test1Number").value;
  let sum = 0;
  for (let i = 0; i < number; i++) {

    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  document.getElementById("test1Result").innerHTML = sum;
}