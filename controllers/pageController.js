
const path = require('path');
const fs = require('fs');
const { json } = require('express');

const nodemailer = require('nodemailer');








const addPeople = (req, res) => {
    res.render('add', {
        "title": "Mail Send"
    })
    

}
const storeData = (req, res) => {
    
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'sakib082249@gmail.com',
            pass: 'nywpzumfgyisttsw'
            
        }
    });

    transport.sendMail({
        from: 'sakib082249@gmail.com',
        to: req.body.email,
        subject: 'Welcome to Learning',
        html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Tamplate</title>
    <style>
        body{
            background-color: rgba(176, 181, 185, 0.137);
        }
        .container{
            height: fit-content;
            width: 450px;
            margin: auto;
            background-color: rgba(21, 144, 60, 0.612);
            margin-top: 30px;
            padding: 10px;
            border-radius: 6px;

        }
        #logo{
            margin: auto;
            
        }
        #logo img{
            height: 90px;
            width: 90px;
            margin: auto;
            border-radius: 50%;
            display: block;
        }
        #bodyimg{
            width: 100%;
            border-radius: 6px;
            margin-top: 30px;

            
        }
        h1{
            font-size: 25px;
            text-align: center;
            margin-bottom: 20px;
        }
        #button{
            display: block;
            background-color: rgb(21, 169, 51);
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            color: white;
            text-decoration: none;
            padding: 10px;
            border-radius: 20px;
        }
        #button:hover{
            background-color: rgb(20, 199, 56);
        }

        

    </style>
</head>
<body>
    <div class="container">
        <a id="logo" href="https://www.youtube.com/channel/UCy0RQGDFo89OctNs9JopJJA">
            <img src="https://yt3.googleusercontent.com/ytc/AMLnZu-8B0oDDaTIKnZUFbQEOE-4oIu4JaHxzRNF5BpsWg=s176-c-k-c0x00ffffff-no-rj" alt="">
        </a>
        <img id="bodyimg" src="https://miro.medium.com/max/1400/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg" alt="">
        
        <h1> Start your Programming Journey With us...</h1>
        <a id="button" href="https://www.youtube.com/channel/UCy0RQGDFo89OctNs9JopJJA">Let's Start</a>
   
    </div>
</body>
</html>
        `
    })

    res.json(req.body);
}


module.exports = {
    addPeople,
    storeData

    
}