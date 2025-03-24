console.log("Hello World");
console.log("Hello Earth");

setTimeout(()=>{
    console.log("Inside setTimeout.");
},0);
setTimeout(() => {
    console.log("I an inside second set timeout");
}, 0);
console.log("Everything executed");

const callback =(arg)=>{
    console.log(arg);
}
const loadScript = (src,callback)=>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload =callback("Gyan");
    document.head.append(sc);
}
loadScript("google.com",callback)