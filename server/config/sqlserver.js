import sql from 'mssql';
import config from './config.js';

export default {
   connect: async () => {
        try {
           const db= await sql.connect(config);
            console.log("Sql server has connected ......")
            return db;
        } catch (err) {
            console.log(err);
        }
    }
}


