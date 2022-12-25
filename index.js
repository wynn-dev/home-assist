// simple web express server
const express = require('express');

const app = express();
var axios = require('axios');

app.get('/shutter/down', (req, res) => {

    var header = JSON.stringify(req.headers);
    var auth = req.headers.auth;
    console.log(auth);
    if (auth == 'kfTR5U2ss7dbYirUrEjS4x') {
        var data = 'devid=66DF24CA01&cmd=10&do=sendcmd&level=front';
        var config = {
        method: 'post',
        url: 'http://192.168.66.85/cgi-bin/api.cgi',
        headers: { 
            'Content-Type': 'text/plain'
        },
        data : data
        };
        axios(config)
        .then(function (response) {
            res.status(200).json({message: 'sucess'});
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.status(500).json({message: error});
            console.log(error);
        });
    } else {
        res.status(401).json({message: 'Unauthorized'});
    }

});

app.get('/shutter/up', (req, res) => {

    var header = JSON.stringify(req.headers);
    var auth = req.headers.auth;
    console.log(auth);
    if (auth == 'kfTR5U2ss7dbYirUrEjS4x') {
        var data = 'devid=66DF24CA01&cmd=9&do=sendcmd&level=front';
        var config = {
        method: 'post',
        url: 'http://192.168.66.85/cgi-bin/api.cgi',
        headers: { 
            'Content-Type': 'text/plain'
        },
        data : data
        };
        axios(config)
        .then(function (response) {
            res.status(200).json({message: 'sucess'});
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.status(500).json({message: error});
            console.log(error);
        });
    } else {
        res.status(401).json({message: 'Unauthorized'});
    }
    
});

app.listen(40000, () => {
    console.log('Example app listening on port 40000!');
});