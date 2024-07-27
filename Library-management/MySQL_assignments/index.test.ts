import { MySqlQueryGenerator } from "./ mysql-query-generator";
import { describe, test, expect } from "vitest";
import { UserFields } from ".";
import { WhereExpression } from "./types";

describe("MySqlQueryGenerator", () => {
  const tableName = "users";

  describe("generateInsertSql", () => {
    test("should generate correct SQL for INSERT", () => {
      const userData = {
        id: 1,
        name: "John Doe",
        age: 30,
      };
      const expectedSql =
        'INSERT INTO `users` (id, name, age) VALUES(1, "John Doe", 30)';
      const insertSql = MySqlQueryGenerator.generateInsertSql(
        tableName,
        userData
      );
      expect(insertSql).toEqual(expectedSql);
    });
  });

  describe("generateUpdateSql", () => {
    test("should generate correct SQL for UPDATE", () => {
      const updateData = {
        name: "Jane Doe",
        age: 32,
      };
      const whereParams: WhereExpression<UserFields> = {
        id: { op: "EQUALS", value: 1 },
      };
      const expectedSql =
        'UPDATE `users` SET name="Jane Doe", age=32 WHERE (`id`  =  1)';
      const updateSql = MySqlQueryGenerator.generateUpdateSql(
        tableName,
        updateData,
        whereParams
      );
      expect(updateSql).toEqual(expectedSql);
    });
  });

  describe("generateDeleteSql", () => {
    test("should generate correct SQL for DELETE", () => {
      const whereParams: WhereExpression<UserFields> = {
        id: { op: "EQUALS", value: 1 },
      };
      const expectedSql = "DELETE FROM `users` WHERE (`id`  =  1)";
      const deleteSql = MySqlQueryGenerator.generateDeleteSql(
        tableName,
        whereParams
      );
      expect(deleteSql).toEqual(expectedSql);
    });
  });

  describe("generateSelectSql", () => {
    test("should generate correct SQL for SELECT", () => {
      const whereParams: WhereExpression<UserFields> = {
        id: { op: "EQUALS", value: 1 },
      };
      const expectedSql =
        "SELECT * FROM users WHERE (`id`  =  1) LIMIT 10 OFFSET 0";
      const selectSql = MySqlQueryGenerator.generateSelectSql(
        tableName,
        whereParams,
        0,
        10
      );
      expect(selectSql).toEqual(expectedSql);
    });
  });

  describe("generateCountSql", () => {
    test("should generate correct SQL for COUNT", () => {
      const whereParams: WhereExpression<UserFields> = {
        id: { op: "EQUALS", value: 1 },
      };
      const expectedSql = "SELECT COUNT(*) FROM `users` WHERE (`id`  =  1)";
      const countSql = MySqlQueryGenerator.generateCountSql(
        tableName,
        whereParams
      );
      expect(countSql).toEqual(expectedSql);
    });
  });
});
