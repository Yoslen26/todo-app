import pg from 'pg';
import {DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER} from './config.js';

const dbClient = new pg.Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT,
    //Solo para AWS
    ssl:{
        rejectUnauthorized: false
    }
})


/*
const client = await dbClient.connect();
const {rows}= await client.query("SELECT NOW()");
console.log(rows);
client.release();
*/
export { dbClient };