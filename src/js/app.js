console.log("hello webpack");
function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.replace("Microsoft","Webpack");
  }
  myFunction();