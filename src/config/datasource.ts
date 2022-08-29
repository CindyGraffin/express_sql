import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3001,
    username: 'root',
    password: 'root',
    database: 'songs',
    entities: ["src/entities/*.ts"],
    logging: true,
    synchronize: true
});