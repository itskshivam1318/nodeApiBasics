# nodeApiBasics
part of freecodecamp
i tried few things
1. creating basic middleware : what i understood was middleware also has access to the req and res so you can manipulate is according to need and next() is required to be passed to the middleware so the next lines of code can be executed
2. req.params : api/word/:hello
3. req.query : api/name?shivam
4. req.body : passed using post request for that need to use bodyParser.urlencoded({extended:false}) to parse the req body to string
5. express.static(): used to serve static files like css, images
6. sendFile() to serve html
