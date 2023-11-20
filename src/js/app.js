console.log("hello webpack");
// function myFunction() {
//     let text = document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML =
//     text.replace("Microsoft","Webpack");
//   }
//   myFunction();

  class MyComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<div class="bg-blue-200 w-max h-12 text-2xl mx-auto my-2 px-5 py-0">Web Components</div>`;
    }
  }
  customElements.define('my-component', MyComponent);

  const host = document.querySelector("#host");
  const shadow = host.attachShadow({ mode: "open" });
  const span = document.createElement("span");
  span.textContent = "I'm in the shadow DOM";
  shadow.appendChild(span);
  console.log(host.shadowRoot);


  class Todotems extends HTMLElement {
    connectedCallback() {
      this.innerHTML = "my todo list";
    }
  }

  customElements.define("todo-list", Todotems);