import { Pool } from "pg";

// Configura tu conexión a PostgreSQL
const pool = new Pool({
  user: "ut57splqhsv7kai3avju",
  host: "bs8koylofzbml2j7ig6z-postgresql.services.clever-cloud.com",
  database: "bs8koylofzbml2j7ig6z",
  password: "8jpt9OYz2UTdxi3LJTl6tm1Nt0VSi6",
  port: 50013,
});

export default pool;
