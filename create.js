const pocketbase = require("pocketbase/cjs");

const pb = new pocketbase("http://127.0.0.1:8090")

// create a blog post


    const data = {
        title: "Axios",
        snippet: "Make http request",
        body: "Handles http request with error handling",
    }

    const record = pb.collection("blog").create(data)
    .then(
        result => console.log("blog created successfully", result))
    .catch((e) => {
        console.log("Error: ", e.message)
        console.log("Error: ", e.name)
    })