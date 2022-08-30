import express from 'express'
import defaultRouter from "./router/default.router";
import chansonRouter from './router/chanson.router';
import paroleRouter from './router/parole.router';
import { myDataSource } from './config/datasource';

// creation de la connexion à la db
myDataSource.initialize()
    .then(() => {
        console.log("connection successful");
    })
    .catch((error) => {
        console.log("error: " + error);
    })

const app = express()
const port = 3000

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());

app.use(defaultRouter)
app.use('/chanson',chansonRouter)
app.use('/paroles', paroleRouter)

app.listen(port, () => {
    console.log('server lancé sur le port ' + port)
})
