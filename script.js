const inputEl = document.querySelector("#inputEl")
const output = document.queryselector("#output")
inputEl.addEventListener ('input', countword);
function countword(){
  let textInput= inputEl.value;
  //let textLengh=textInput.split(' ').join(" ").length
  let splitted = textInput.split(' ')
  let joined = splitted.join("")
  let length =joined.length
  console.log(splitted,joined, length)
  output.innerHTML = length
  
}