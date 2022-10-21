import Pool, { } from 'pg-pool'
import { } from 'dotenv/config'

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Connected to PostgreSql Successfully....');
});

export default pool