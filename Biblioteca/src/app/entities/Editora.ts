import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';

@Entity('editora')
export class Editora {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 100, nullable: false })
    nome: string;
}

export default Editora;