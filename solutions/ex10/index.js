
const util = require('util');
const http = require('http');
const port = process.env.PORT || 8080;
const { exec } = require('child_process');

var volpath = process.env.VOLUMEPATH || "./"

const requestHandler = (request, response) => {
  console.log(request.url);
  exec('ls '+volpath, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    response.end(stdout.toString());
  });
 }

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is listening on ${port}`);
})

function fileList(dir) {
  return fs.readdirSync(dir).reduce(function(list, file) {
    var name = path.join(dir, file);
    var isDir = fs.statSync(name).isDirectory();
    return list.concat(isDir ? fileList(name) : [name]);
  }, []);
}


