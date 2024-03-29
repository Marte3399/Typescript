import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';

@Entity('livro')
export class Livro {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 100, nullable: false })
    titulo: string;

    @Column('varchar', { length: 100, nullable: false })
    autor: string;

    @Column('bigint', { nullable: false })
    ISBN: bigint;

    @Column('int', { nullable: false })
    ano: number;

    @Column('int', { nullable: false })
    editora: number;
}

export default Livro;