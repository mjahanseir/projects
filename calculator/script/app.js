let result = document.getElementById("result");

let inputNum = (n) => (result.innerHTML += n);

let NumberCalculator = () => {
  result.innerHTML = result.innerHTML.replace("÷", "/");
  result.innerHTML = eval(result.innerHTML);
};

let AC = () => (result.innerHTML = "");

let C = () => {
  result.innerHTML = result.innerHTML.slice(0, -1);
};
