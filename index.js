const { download } = require('./download');
const express = require("express");
const PORT = 3000;


function init () {
    
    const app = express();
    app.use(express.json());

    app.get('/home', (req, res) => {
        const content = req.body.URL;
        const state = req.body.state;
        
        if(!(content.includes("https://www.youtube.com/watch?v="))){
            return res.status(404).json({
                error: "Invalid Link"
            });
        }

        download({content, state});

        return res.status(200).json({
            body: "Valid"
        });
    });

    app.listen(PORT, () => {
        console.log(`App is Listening on PORT:${PORT}`);
    });

}

init();