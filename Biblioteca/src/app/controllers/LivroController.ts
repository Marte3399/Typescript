import { Request, Response, Router } from 'express';
import Livro from '../entities/Livro';
import ILivro from '../interfaces/ILivro';
import { livroRepository } from '../repositories/LivroRepository';
import { AppDataSource } from '../../database/data-source';
import { FindOneOptions } from 'typeorm';


export class LivroController {
  
  async read(req: Request, res: Response) {
    try {
      const livroRepository = AppDataSource.getRepository(Livro);
      const livros = await livroRepository.find();
      res.json(livros);    
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Erros' })
    }
  }

  async create(req: Request, res: Response) {
    //criar livro
    const {
      titulo,
      autor,
      ISBN,
      ano,
      editora
    } = req.body
    if (!titulo) {
      return res.status(400).json({ mensagem: 'O titulo é obrigatório' })
    }
    if (!autor) {
      return res.status(400).json({ mensagem: 'O autor é obrigatório' })
    }
    if (!ISBN) {
      return res.status(400).json({ mensagem: 'O ISBN é obrigatório' })
    }
    if (!ano) {
      return res.status(400).json({ mensagem: 'O ano é obrigatório' })
    }
    if (!editora) {
      return res.status(400).json({ mensagem: 'O editora é obrigatório' })
    }
    try {
      const newLivro = livroRepository.create({
        titulo,
        autor,
        ISBN,
        ano,
        editora
      })

      await livroRepository.save(newLivro)

      return res.status(201).json(newLivro)
      console.log(newLivro)
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Erros' })
    }
  }

  async update( req: Request, res: Response) {
    try {
      const { id } = req.params;
      const livroRepository = AppDataSource.getRepository(Livro);
      const opcoes: FindOneOptions<Livro> = {
        where: { id: Number(id) },
      };
      const livro = await livroRepository.findOne(opcoes);
      if (!livro) {
        return res.status(404).json({ message: 'Livro não encontrado' });
      }
      livroRepository.merge(livro, req.body);
      const resultado = await livroRepository.save(livro);
      res.json(resultado);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Erros' })
    }
  }
  
  async delete( req: Request, res: Response) {
    try {
      const { id } = req.params;
      const livroRepository = AppDataSource.getRepository(Livro);
      const opcoes: FindOneOptions<Livro> = {
        where: { id: Number(id) },
      };
      const livro = await livroRepository.findOne(opcoes);
      if (!livro) {
        return res.status(404).json({ message: 'Livro não encontrado' });
      }
      const resultado = await livroRepository.remove(livro);
      res.json({message: 'Livro removido com sucesso'});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Erros' })
    }
  }
  
}
