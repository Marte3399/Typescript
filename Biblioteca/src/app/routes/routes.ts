import { Router, Request, Response } from 'express';
import { LivroController } from '../controllers/LivroController';
import { EditoraController } from '../controllers/EditoraController';
import { AppDataSource } from "../../database/data-source";

const router = Router();

router.get('/livro', new LivroController().read);

router.post('/livro', new LivroController().create);

router.put('/livro/:id', new LivroController().update);

router.delete('/livro/:id', new LivroController().delete);


router.get('/editora', new EditoraController().read);

router.post('/editora', new EditoraController().create);

router.put('/editora/:id', new EditoraController().update);

router.delete('/editora/:id', new EditoraController().delete);

export default router;