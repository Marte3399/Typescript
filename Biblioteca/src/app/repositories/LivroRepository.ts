import Livro from "../entities/Livro";
import ILivro from "../interfaces/ILivro";
import { AppDataSource } from "../../database/data-source";
import { Repository, FindOneOptions } from 'typeorm';

export const livroRepository = AppDataSource.getRepository(Livro);

const getLivro = (): Promise<ILivro[]> => {
    return livroRepository.find();
}

export default { getLivro };