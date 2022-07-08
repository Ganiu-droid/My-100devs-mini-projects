const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

//create a server
const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page)
    if(page == '/'){
        fs.readFile('pages/index.html', (err, data) => {
          res.writeHead(200, {'Content-Type': 'text/html'})
          res.write(data)
          res.end()
        })
    }
    else if (page == '/register'){
        fs.readFile('pages/register.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
          })
    }
    else if (page == '/login'){
        fs.readFile('pages/login.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
          })
    }

    else if(page == '/api'){
        if('student' in params){
            if(params['student'] == 'leon'){
                res.writeHead(200, {'Content-Type': 'application/json'});
                const objToJson = {
                    name: "leon",
                    status: 'employed',
                    currentOccupation: "Baller"
                }
                res.end(JSON.stringify(objToJson));
            }
        }
        else if(params['student'] != 'leon'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            const objToJson = {
                name: "unknown",
                status: 'unknown',
                currentOccupation: "unknown"
            }
        }

    }
    else{
        figlet('404!!', function(err, data){
            if(err){
                console.log('Something went wrong');
                console.log(err)
                return;
            }
            res.write(data);
            res.end();
        })
    }
})
//specify port for the server to listen
server.listen(8000)