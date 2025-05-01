import pg from 'pg';

const dbClient = new pg.Pool({
    host: "riverson-todo.cbuucgiqsve2.us-west-2.rds.amazonaws.com",
    user: "postgres",
    password: "Password.123",
    database: "todo",
    port: "5432",
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