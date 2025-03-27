let con = document.getElementById("container");
const html = (val) => {
  ans = `<div class="container">
        <div class="text">
            $ : ${val}
        </div>
    </div>`;
  return ans;
};
let arr = [
  "Initializing Hacking",
  "Reading your files",
  "Password file detected",
  "Sending all password files and personal information to server",
  "Cleaning up",
];

async function display(val){
    let randNum = Math.random()*7;
    var prom = new Promise((ressolve,reject)=>{
        setTimeout(()=>{
            con.innerHTML = con.innerHTML+html(val);
            ressolve("Done")
        },randNum*1000)
    })
    return prom;
}
async function main(){
    for (const msg of arr){
        await display(msg);
        console.log(msg);
    }
}
main();