import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateParticipant1626746113204 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "participants",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "sector",
                        type: "varchar"
                    },
                    {
                        name: "sponso",
                        type: "boolean",
                        default: "false"
                    },
                    {
                        name: "value",
                        type: "integer"

                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("participants");
    }

}
