// async function getData() {
//   return new Promise((ressolve, reject) => {
//     setTimeout(() => {
//       ressolve(20);
//     }, 3000);
//   });
// }

async function getData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let x = await data.json();
    return x;
}

async function main() {
  console.log("Program Started");
  console.log("Loading Data");
  let val = await getData();
  console.log(val)
  console.log("Data fetched ");
  console.log("\n");
}
main()
