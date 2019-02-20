function writeResult (status, msg, data, total=0) {
  return JSON.stringify({status: status, msg: msg, list: data, total})
}
let writeHead = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Allow-Headers": "x-request-with , content-type",
  'Content-Type': 'text/plain; charset=utf-8'
}
module.exports.writeResult = writeResult;
module.exports.writeHead = writeHead;
