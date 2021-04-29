const express = require ('express');
const app = express();
//const port = 8080;
const port process.envPORT;
const path = require ('path');
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res) => {
	res.fileSend('/index.html')
});

app.listen (port, () => {
	console.log('listening at localhost:${port}')
});
