// Sovrascrivo la lista del HTML in Javascript
const Mylist = document.getElementById(`my-list`);
// inizio ciclo
for (let i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log("fizzbuzz");
  else if (i % 5 == 0) console.log("buzz");
  else if (i % 3 == 0) console.log("fizz");
  else console.log(i);
}
