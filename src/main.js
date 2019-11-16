require("babel-runtime/regenerator");
require("webpack-hot-middleware/client?reload=true");
require("./main.styl");
require("./images/link.jpg");
require("./index.html");

// alert("bonjour les hommes et les femmes");


var a = async (args) => {
    const { a, b } = args
    await console.log("bonjour les hommes et les femmes ",a, b)
    console.log("Done")
};

a({a: 1, b:2})

console.log('bonjour madame.');


