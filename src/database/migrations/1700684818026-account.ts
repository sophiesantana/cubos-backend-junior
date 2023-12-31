import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Account1700684818026 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "account",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                        
                    },
                    {
                        name: "branch",
                        type: "varchar"
                    },
                    {
                        name: "account",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "balance",
                        type: "int",
                        default: 0
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("account");
    }

}
