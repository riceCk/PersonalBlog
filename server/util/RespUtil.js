function writeResult (status, msg, data) {
  return JSON.stringify({status: status, msg: msg, list: data})
}
let writeHead = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Allow-Headers": "x-request-with , content-type",
  'Content-Type': 'text/plain; charset=utf-8'
}
module.exports.writeResult = writeResult;
module.exports.writeHead = writeHead;
