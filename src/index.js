import app from './app'
/* archivo de conexion a BD */
//import './database'

app.listen(process.env.PORT || 3000);
console.log('server on port 3000');