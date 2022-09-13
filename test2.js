function largestPrimeFactor() {
  let n = document.getElementById("test2Number").value;
  let i = 2;
  while (i <= n) {
    if (n % i == 0) {
      n /= i;
    } else {
      i++;
    }
  }
  document.getElementById("test2Result").innerHTML = i;
}