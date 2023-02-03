## YODLR Take Home

### Front End
The client application is built using VueJS 3. For styling CSS, Tailwind is employed. Axios is used for API calls.  

### Back End
The server application is written in NodeJS using the Epress Framework. There is no DB just a static file holding intial user information. All users added will be removed when the server is halted.

### Notes
The application is fully responsive and handles all basic CRUD operations.

### Running locally
To run this application locally perform the following steps :
```
$: git clone https://github.com/kdjordan/yodlr
$: cd into yodlr-main
$: cd into client folder
$: npm i
$: npm run dev
**now the client is running**

$: cd ../server
$: npm i 
$: npm run start
**now the server is running**
```