const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');
const logsFile = path.join(__dirname, 'logs.txt');

const myServer = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return res.end("");
  const log = `${new Date().toISOString()} : ${req.method} ${req.url} New Request Received \n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile(logsFile, log, (err) => {
    if (err) {
      console.error("Failed to write to log file:", err);
      res.statusCode = 500;
      return res.end("Internal Server Error");
    }

    // switch (req.url) {
    //   case '/':
    //     res.end("Home Page");
    //     break;
    //   case '/about':
    //     const userName = myUrl.query?.name;
    //     res.end(`About Page. Hi ${userName ? userName : 'Nobody'}`);
    //     break;
    //   case '/services':
    //     res.end("Services Page");
    //     break;
    //   default:
    //     res.end("404 Not Found");
    //     break;
    // }

    switch (myUrl.pathname) {
      case '/':
        res.end("Home Page");
        break;
      case '/about':
        const userName = myUrl.query.myname;
        res.end(`About Page. Hi ${userName ? userName : 'Nobody'}`);
        break;
      case '/services':
        res.end("Services Page");
        break;
      default:
        res.end("404 Not Found");
        break;
    }
  });
});

myServer.listen(8000, () => console.log('Server Started'));


