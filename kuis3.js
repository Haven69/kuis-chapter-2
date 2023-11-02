console.log("jumlah N = 7");
for (let d = 1; d <= 7; d++) {
  let hastag = "";
  for (let e = 1; e <= 14; e++) {
    if ((d + e) % 2 === 0) {
      hastag += "  ";
    } else {
      hastag += "#";
    }
  }
  console.log(hastag);
}