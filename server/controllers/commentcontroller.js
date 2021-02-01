'use strict';
const axios = require('axios');

exports.getComments = async (req, res) => {
    try {
        const commentUrl = "https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/db";
        const response = await axios.get(commentUrl);
        let comments = response.data.comments;

        res.render("home", {
            comments: comments
        });
    } catch (error) {
        console.error(error);
    }

}