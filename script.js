console.log("Hello");
setTimeout(() => {
  console.log("World");
}, 1000);
console.log("!");

function sayHello(a,b,callback) {
    console.log(a + b);
    callback();
  }
  mycall = () => {
    console.log("World");
  };

  sayHello(1,2,mycall);

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 1000);
  });
  promise.then((value) => {
    console.log(value);
  });

  async function sayHello() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello");
      }, 1000);
    });
    let result = await promise;
    console.log(result);
  }
  sayHello();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));
