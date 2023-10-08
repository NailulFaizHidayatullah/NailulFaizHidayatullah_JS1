//if,else,nested-if

let nilai = 86;

console.log("");
if (nilai >= 90) {
    //if
    console.log("Nilai Anda A");
} else if (nilai >= 85) {
    console.log("Nilai Anda B +");
    //nested if
} else if (nilai >= 80) {
    console.log("Nilai Anda B");
} else if (nilai >= 75) {
    console.log("Nilai Anda C +");
} else if (nilai >= 70) {
    console.log("Nilai Anda C");
} else {
    //else
    console.log("Nilai Anda D");
}
console.log("");

// switch case
let hewan = "Serigala";

switch (hewan) {
    case "Macan":
        console.log("Ini hewan Macan");
        break;
    case "Serigala":
        console.log("Ini hewan Serigala");
        break;
    case "Singa":
        console.log("Ini hewan Singa");
        break;
    default:
        console.log("Hewan ini tidak terdapat di dalam list");
}
console.log("");

// for statement
for (let i = 1; i <= 10; i++) {
    console.log("Iterasi ke-" + i);
}
console.log("");

// while, do while
let x = 1;

do {
    console.log("Nilai x: " + x);
    x++;
} while (x <= 10);
console.log("");

// function
function pangkat(a, b) {
    return a ** b;
}

let hasil = pangkat(7, 2);
console.log("Hasil perpangkatan: " + hasil);
console.log("");