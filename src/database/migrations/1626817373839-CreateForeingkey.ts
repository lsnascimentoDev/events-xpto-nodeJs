import {
    MigrationInterface, QueryRunner, TableColumn,
    TableForeignKey,
} from "typeorm";

export class CreateForeingkey1626817373839 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'participants',
            new TableColumn({ name: 'event_id', type: 'uuid', isNullable: true }),
        );

        await queryRunner.createForeignKey(
            'participants',
            new TableForeignKey({
                name: 'ParticipantsEvent',
                columnNames: ['event_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'events',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('participants', 'ParticipantsEvent');
        await queryRunner.dropColumn('participants', 'event_id');
    }

}
