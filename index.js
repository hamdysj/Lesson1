

const fs = require('fs');
const http = require('http');
const url = require('url');

/////////////////////////////////////////////////////////////////
//FILES
/*
//Blocking & Synchronous Way: Executes LineByLine
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about avocado ${textIn}. \n Created on ${Date.now}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log("File Written");
*/

/*
//Non-Blocking & Asynchronous Way: Uses Callback Functions
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if(err) return console.log("ERROR ");
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./txt/finals.txt', `${data2}\n${data3}`, (err, data3) => {
                console.log('File written successfully');       
            })
        });
    });
});
console.log("Will execute first");
*/

////////////////////////////////////////////////////////////////////////////////
//SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res)=>{
    const pathName = req.url;

   if(pathName === '/' || pathName === '/overview')
   {
    res.end('Welcome to Overview');
   }
   else if(pathName === '/product')
    {
    res.end('Welcome to Overview');
   } 
   else if(pathName === '/api')
   {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);
   }
   else{
       res.writeHead(404, {'Content-type': 'text/html'});
       res.end('<h1>Page not Found!</h1>')
   }
});

server.listen(8000, '127.0.0.1', () =>{
    console.log("Listening to port 8000");
});