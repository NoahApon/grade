// CS10 Grade Calculator

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //input
  let c = +document.getElementById("clientOne").value;

  let s = +document.getElementById("structuredOne").value;

  let S = +document.getElementById("structuredTwo").value;

  let C = +document.getElementById("clientTwo").value;

  let a = +document.getElementById("project").value;
  //process
  let average = (c + s + S + C + a) / 5;
  let msg = `grade = ${average}`;

  document.getElementById("output").innerHTML = average;
}
