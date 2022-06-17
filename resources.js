console.log("Hello World")
console.log("JavaScrpt is working")

// Replace URL with your url
const url = "./joblist.json";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });