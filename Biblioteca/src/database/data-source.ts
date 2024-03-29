import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateLivroTable1711561973550} from './migrations/1711561973550-CreateLivroTable';
import { CreateEditoraTable1711675488650} from './migrations/1711675488650-CreateEditoraTable';
import Livro from "../app/entities/Livro";
import Editora from "../app/entities/Editora";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123@mudar",
    database: "projeto_biblioteca",
    synchronize: true,
    logging: false,
    entities: [Editora, Livro ],
    migrations: [CreateEditoraTable1711675488650, CreateLivroTable1711561973550],
    subscribers: [],
})
