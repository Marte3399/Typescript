import { Request, Response, Router } from 'express';
import Editora from '../entities/Editora';
import IEditora from '../interfaces/IEditora';
import { EditoraRepository } from '../repositories/EditoraRepository';
import { AppDataSource } from '../../database/data-source';
import { FindOneOptions } from 'typeorm';


export class EditoraController {
  
  async read(req: Request, res: Response) {
    try {
      const EditoraRepository = AppDataSource.getRepository(Editora);
      const editoras = await EditoraRepository.find();
      res.json(editoras);    
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Erros' })
    }
  }

  async create(req: Request, res: Response) {
    //criar Editora
    const {
      nome
    } = req.body
    if (!nome) {
      return res.status(400).json({ mensagem: 'O nome é obrigatório' })
    }
    try {
      const newEditora = EditoraRepository.create({
        nome
      })

      await EditoraRepository.save(newEditora)

      return res.status(201).json(newEditora)
      console.log(newEditora)
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Erros' })
    }
  }

  async update( req: Request, res: Response) {
    try {
      const { id } = req.params;
      const EditoraRepository = AppDataSource.getRepository(Editora);
      const opcoes: FindOneOptions<Editora> = {
        where: { id: Number(id) },
      };
      const editoras = await EditoraRepository.findOne(opcoes);
      if (!editoras) {
        return res.status(404).json({ message: 'Editora não encontrado' });
      }
      EditoraRepository.merge(editoras, req.body);
      const resultado = await EditoraRepository.save(editoras);
      res.json(resultado);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Erros' })
    }
  }
  
  async delete( req: Request, res: Response) {
    try {
      const { id } = req.params;
      const EditoraRepository = AppDataSource.getRepository(Editora);
      const opcoes: FindOneOptions<Editora> = {
        where: { id: Number(id) },
      };
      const editoras = await EditoraRepository.findOne(opcoes);
      if (!editoras) {
        return res.status(404).json({ message: 'Editora não encontrado' });
      }
      const resultado = await EditoraRepository.remove(editoras);
      res.json({message: 'Editora removido com sucesso'});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Erros' })
    }
  }
  
}
