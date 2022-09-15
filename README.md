
**__To Start the server in the command line it's npm run server I built this using mongoDB__**

**__to check to see if the server is live it will display in the terminal or if you go to http://localhost:5000/__**

**__to set a New Key to the Mongo Server use the endpoint__**

### POST Request to `http://localhost:5000/api/newKey`

This post request will save the keys to the database along with the password and the signature this also hashs and salts the password to be saved in the database

###### Request Body #######

- Required Fields

```
{
	"publicKey":"Key",
	"privateKey":"private",
	"message":"Secret Message",
	"sign":"xxxx",
	"password":"password"
}
```


###### Returns ######

```
{
	"message": "Wow, it saved",
	"client": {
		"publicKey": "-----BEGIN PUBLIC KEY-----\r\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC99qbr5G7A1jt2k3cn/QvKTwO6\r\natiXUHypZ05Kizfto3us354cfBhJA0qPFu9h7AZloSutdLtno3lCideIDwZwqKAl\r\nPQBjcWzZWvhKzrj01kRO31Rhp1met7RXsXyPPPMfVkSRUd8uG7tmOVzm5jFDTiR4\r\n49saoSoqFlHOnArSMwIDAQAB\r\n-----END PUBLIC KEY-----",
		"privateKey": "-----BEGIN RSA PRIVATE KEY-----\r\nMIICWwIBAAKBgQC99qbr5G7A1jt2k3cn/QvKTwO6atiXUHypZ05Kizfto3us354c\r\nfBhJA0qPFu9h7AZloSutdLtno3lCideIDwZwqKAlPQBjcWzZWvhKzrj01kRO31Rh\r\np1met7RXsXyPPPMfVkSRUd8uG7tmOVzm5jFDTiR449saoSoqFlHOnArSMwIDAQAB\r\nAoGAe5wFMBg7rUV5+gWpEp9JTcKupV4jRAr+o2jye/UtVnf74Ri9lMF3OANpP8Tn\r\nzes8mmMOvdbon16zaAWz9vf38rRWB2tJfXDd2DwMbjQ4N2kYEZS6VnllkW0fzma3\r\nh82BLCBGtIxnHLgSoE5N0kcFUI0YQethJhX1q9mtMJxoXrECQQD1W5MPdEZHsEGk\r\n9tBbuuaqM4WtnlTatwPqVdMKFenvZqL38RGah7Pbb2DmwPnkC1S/jfEpbxMv6Mve\r\nbMXr9SArAkEAxjP8bhMbKXDZ/0yLf/yJ72PPXdWCwT27BDSmVwIwBWqSIHc8cHpO\r\ndryNOeNEv/kXdx4DTZq0u1QTHjzF1AsKGQJARva8ewzLQvLEmbzVGKLfEj0incuc\r\niUHDvSQjjNg3uAk8e2/bApHbQE1ffn40CHQKh/i61pwMtZ+kT2mweQWFzwJAG9wa\r\n024kF0MhoV0lDqx0xw2EjHACnR8MNp8f8oMANQKx35ZjDHxkoxQF1ek4NLPStI+n\r\nbzUbymka9tkcBZ43oQJAPS8/kgeRlrQXGOip5yrmHcXP4qjGVrEbZAMRSJ/mENJn\r\nihThZVvNgA3STjda/J3egiOP+ABjIJD30KSd+PRjFw==\r\n-----END RSA PRIVATE KEY-----",
		"message": "This is a cool message",
		"password": "$2a$10$qCQuhkjRMO2k/zSl1V1GYes.C05DBhAy5WOOWJK87UDD1wMokoyxq",
		"sign": "xxxx",
		"_id": "63238d1f0fb177b10132fb92",
		"createdAt": "2022-09-15T20:37:51.679Z",
		"updatedAt": "2022-09-15T20:37:51.679Z",
		"__v": 0
	}
}
```



#### POST Request `http://localhost:5000/api/publicKeySearch`

This post request will sent the public key over to the database along with the password and verify the password which allows it to post the message and the signature to the console.

###### Request Body #######

- Required Fields


```
{
	"password":"PASSWORD",
"publicKey": "-----BEGIN PUBLIC KEY-----\r\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC99qbr5G7A1jt2k3cn/QvKTwO6\r\natiXUHypZ05Kizfto3us354cfBhJA0qPFu9h7AZloSutdLtno3lCideIDwZwqKAl\r\nPQBjcWzZWvhKzrj01kRO31Rhp1met7RXsXyPPPMfVkSRUd8uG7tmOVzm5jFDTiR4\r\n49saoSoqFlHOnArSMwIDAQAB\r\n-----END PUBLIC KEY-----"
}
```

##### Returns ######

```
{
	"message": "Success!"
}

```


##### Console Response ######

 ```
{ message: 'This is a cool message', signature: 'mike' }

```


####POST Request `http://localhost:5000/api/findSignature`

This post request allows anyone to send the signature over to veryify if it's the original signature and returns whether or not it is correct and verified.

###### Request Body #####

- Required Fields

```
{
	"sign":"xxxx"
}
```

##### Returns ######

```
{
	"message": "verified"
}
```

##### Console Returns #####

`Verified`
