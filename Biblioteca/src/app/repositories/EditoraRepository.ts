import Editora from "../entities/Editora";
import IEditora from "../interfaces/IEditora";
import { AppDataSource } from "../../database/data-source";
import { Repository, FindOneOptions } from 'typeorm';

export const EditoraRepository = AppDataSource.getRepository(Editora);

const getEditora = (): Promise<IEditora[]> => {
    return EditoraRepository.find();
}

export default { getEditora };