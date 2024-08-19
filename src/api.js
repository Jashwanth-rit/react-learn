const http = require('http');
http.createServer((req,resp)=>{
resp.write({id:1,age:10,city:"bengaluru"},
        {id:2,age:20,city:"bengau"},
        {id:3,age:30,city:"benguru"},
        {id:4,age:40,city:"buru"})
}).listen(5000);