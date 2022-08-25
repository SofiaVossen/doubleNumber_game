function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // multiply x with 2
    let text = x*2;
    document.getElementById("demo").innerHTML = text;
  }