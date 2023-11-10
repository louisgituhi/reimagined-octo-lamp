const pocketbase = require("pocketbase/cjs");

const pb = new pocketbase("http://127.0.0.1:8090")


pb.collection("blog").delete("c6ipywljsmklf28")
.then(
    result => console.log("blog deleted", result)
)
.catch((e) => {
    console.log("Error: ", e.name)
    console.log("Error: ", e.message)
})