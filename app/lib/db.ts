import mysql from 'mysql2/promise'
import fs from 'fs'
import path from 'path'


const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: Number( process.env.DB_PORT),

    ssl: {
      ca: fs.readFileSync(
        path.join(process.cwd(), 'ca.pem')
      )
    }

})


export default pool