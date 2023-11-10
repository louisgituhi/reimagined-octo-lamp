const pocketbase = require("pocketbase/cjs");

const pb = new pocketbase("http://127.0.0.1:8090")

// fetch all blogs at once via getFullList

const records = pb.collection("blog").getFullList({
    sorted: '-created'
})
.then(
    result => console.log("DATA: ", result)
)
.catch((e) => {
    console.log("ERROR: ", e.name)
    console.log("ERROR: ", e.message)
})