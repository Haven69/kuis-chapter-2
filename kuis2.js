console.log("versi 1");
for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
      const num = + j;
      row += num+" ";
    }
    console.log(row);
  }

  console.log("versi 2");
  for (let a = 1; a <= 10; a++) {
    let tag = "";
    for (let b = 1; b <= 10; b++) {
      const tag1 = + b;
      tag += "#";
    }
    console.log(tag);
  }