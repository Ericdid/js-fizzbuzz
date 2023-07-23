// Sovrascrivo la lista del HTML in Javascript
const Mylist = document.getElementById(`my-list`);
// inizio ciclo
for (let i = 1; i <= 100; i++) {
  console.log(i);
  Mylist.innerHTML += `<li>${i}</li>`;
  //   prima variabile del ciclo (Fizz {3})

  // seconda variabile (buzz (5))

  // terza variabile (fizzbuzz (3/5))
}
