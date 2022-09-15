const NodeRSA = require('node-rsa')

const key = new NodeRSA({ b:1024 }) // public and private key

let encryptedString = key.encrypt(process.ENV.SECRET, 'base64') // public


// console.log(encryptedString)

//rag36/GJUraMNkW4+A7W8aUi7uH1iajgk/iisp4Os3OkQk0fi5fD8o2+W5SrsqElLfGdX2ljXdpbiI9HeVcsq5lqIDY3LBU/+sacqn7gqcnrzP3QJEZxFoiItE97s+Elkx5iKvBi9E/7La9WUheyzr4pPY+fdO7mXaNHtJp9Jfw=

let decryptedString = key.decrypt(encryptedString, 'utf8') // private

// console.log(decryptedString)

let publicKey = key.exportKey('public')
let privateKey = key.exportKey('private')

// console.log(publicKey)
// console.log(privateKey)

public_key = fs.readFileSync('./public.key','utf8');


private_key = fs.readFileSync('./private.key','utf8')

let key_private = new NodeRSA(private_key)
let key_public = new NodeRSA(public_key)

let encryptString = key_public.encrypt(process.ENV.SECRET, 'base64')

// console.log(encryptString)

// let decryptString = key_private.decrypt('')
