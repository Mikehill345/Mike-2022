
const fs = require('fs');
let jwt = require('jsonwebtoken');

let privateKey = fs.readFileSync('./private.key','utf8');
let publicKey = fs.readFileSync('./public.key','utf8');

let payload = { };
payload.userName = "mike";
payload.userId = "11223344"
payload.role = "Admin";

console.log("\n Payload: " + JSON.stringify(payload));

let iss = "Mike";
let exp = "24h";

let signOptions = {
    issuer : iss,
    expiresIn: exp,
    algorithm: "RS256"
};
// Create the JWT Token
let token = jwt.sign(payload, privateKey, signOptions);

// Send this token to the client so that it can be used in subsecuent request
console.log("\n Token: " + token);


//==================================================================================
//                      token verification
//==================================================================================
let verifyOptions = { 
    issuer : iss,
    maxAge: exp,
    algorithms: ["RS256"]
};
let verified = jwt.verify(token, publicKey, verifyOptions);
console.log("\n Verified: " + JSON.stringify(verified));

let decoded = jwt.decode(token, {complete: true});
console.log("\n Docoded Header: " + JSON.stringify( decoded.header));
console.log("\n Docoded Payload: " +  JSON.stringify(decoded.payload));
console.log("\n Details for the user " + payload.userId + " is sent back to client")
//process.exitCode = 0;