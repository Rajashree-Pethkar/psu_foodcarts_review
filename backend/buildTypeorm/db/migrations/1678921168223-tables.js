export class tables1678921168223 {
    name = 'tables1678921168223';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "foodcarts" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "hours" character varying NOT NULL, "about" character varying NOT NULL, "image" character varying NOT NULL, "category" character varying NOT NULL, "rating" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8c5f5eb6640a2717385dc17ad75" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reviewimages" ("id" SERIAL NOT NULL, "image" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "reviewId" integer, CONSTRAINT "PK_f46c8724ac461f7ea78e9b08c30" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reviews" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "rating" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "foodcartId" integer, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reviewreactions" ("id" SERIAL NOT NULL, "reaction" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "reviewId" integer, "userId" integer, CONSTRAINT "PK_4429f92663e3e53b9022491ccec" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "reviewimages" ADD CONSTRAINT "FK_52701447097e948636e98ca8a17" FOREIGN KEY ("reviewId") REFERENCES "reviews"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_7ed5659e7139fc8bc039198cc1f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_f9137ca904e75c5af2d2836e817" FOREIGN KEY ("foodcartId") REFERENCES "foodcarts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviewreactions" ADD CONSTRAINT "FK_4e8f66b3838d39dba81aa45b2b6" FOREIGN KEY ("reviewId") REFERENCES "reviews"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviewreactions" ADD CONSTRAINT "FK_a9ab9b065f1aba3cbd1d152d19d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "reviewreactions" DROP CONSTRAINT "FK_a9ab9b065f1aba3cbd1d152d19d"`);
        await queryRunner.query(`ALTER TABLE "reviewreactions" DROP CONSTRAINT "FK_4e8f66b3838d39dba81aa45b2b6"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_f9137ca904e75c5af2d2836e817"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_7ed5659e7139fc8bc039198cc1f"`);
        await queryRunner.query(`ALTER TABLE "reviewimages" DROP CONSTRAINT "FK_52701447097e948636e98ca8a17"`);
        await queryRunner.query(`DROP TABLE "reviewreactions"`);
        await queryRunner.query(`DROP TABLE "reviews"`);
        await queryRunner.query(`DROP TABLE "reviewimages"`);
        await queryRunner.query(`DROP TABLE "foodcarts"`);
    }
}
//# sourceMappingURL=1678921168223-tables.js.map