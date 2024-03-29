import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLivroTable1711561973550 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'livro',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'titulo',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'autor',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'ISBN',
                        type: 'bigint',
                        isNullable: false
                    },
                    {
                        name: 'ano',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'editora',
                        type: 'int',
                        isNullable: false
                    }
                ]
            })
        )    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('livro')
    }

}
