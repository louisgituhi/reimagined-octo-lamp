const pocketbase = require("pocketbase/cjs");

const pb = new pocketbase("http://127.0.0.1:8090")


// update a blog

const data = {
    title: "Express js",
    snippet: "nicely encapsulates node js",
    body: "Use the command -npm install express- and have fun",
}

const record = pb.collection("blog").update("wrvh0qwtb9nydhy", data)
// takes time hence a promise
.then(
    result => console.log("Successfully updated blog: " + result)
)
.catch((e) =>{
console.log("Error" + e.name)
console.log("Error" + e.message)
})