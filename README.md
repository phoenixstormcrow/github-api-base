# github-api-base
Node module providing basic functionality required for all github api calls.

## Installation

`npm install github-api-base`

## Usage

```
> var base = require('github-api-base')

> base
{ base: 'https://api.github.com',
  version: 3,
  headers:
   { Accept: 'application/vnd.github.v3+json',
     'User-Agent': 'node_v0.11.14_x64_linux' } }

> base.toString() === base.base
true
> base + "/users/phoenixstormcrow"
'https://api.github.com/users/phoenixstormcrow'
```

The module exports an object with the fields shown above. `base.headers['User-Agent']` is writable, all other properties are not.

The default User-Agent header is constructed from

```
`node_${process.version}_${process.arch}_${process.platform}`
```

so your value may differ. (I think I saw this technique used somewhere while screwing around on the internet. Unsure to whom credit is due.)

 `.toString` is provided as a convenience for composing api urls.


```
> var base = require('github-api-base')
> var request = require('request')
> var user = 'phoenixstormcrow'
> var opts = {
... url: base + "/users/" + user,
... headers: base.headers
... }

> request(opts, function (err, response, body) { console.log(response.statusCode); })
200
```

Feedback is very welcome.
