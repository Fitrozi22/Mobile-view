const array1 = [0, 3, 4, 5, 31];
const array2 = [4, 6, 8, 30];
const hasilGabungan = [];

let index1 = 0;
let index2 = 0;

while (index1 < array1.length && index2 < array2.length) {
  if (array1[index1] < array2[index2]) {
    hasilGabungan.push(array1[index1]);
    index1++;
  } else {
    hasilGabungan.push(array2[index2]);
    index2++;
  }
}


for (let i = index1; i < array1.length; i++) {
  hasilGabungan.push(array1[i]);
}


for (let i = index2; i < array2.length; i++) {
  hasilGabungan.push(array2[i]);
}

console.log(hasilGabungan);

