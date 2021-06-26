const https = require('https');
let data = "";
https.get("https://jsonplaceholder.typicode.com/users",(res)=>{
    res.on('data',(chunk) => {
        data += chunk;
    });
    res.on('end', () => {
         data = JSON.parse(data)
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name);   
        }
    })
})
