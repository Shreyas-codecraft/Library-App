import "dotenv/config";
import mysql from "mysql2/promise";
import { MySqlQueryGenerator } from "./ mysql-query-generator";
import { NumberOperator, StringOperator } from "./types";
function consoleDir(param: any) {
  console.dir(param, {
    showHidden: false,
    depth: null,
    colors: true,
  });
}

const tableName = "trainees";

export interface UserFields {
  id: string;
  name: string;
  email: string;
  address: string;
  dob: string;
  age: number;
}

const selectSql = `
    SELECT * FROM ${tableName}
`;
const countSql = `
    SELECT COUNT(*) AS \`count\` FROM ${tableName}
`;
const insertSql = `
    INSERT INTO ${tableName} (
        \`name\`, 
        \`email\`, 
        \`dob\`, 
        \`address\`,\`age\`
    ) VALUES (
        'Krishanu',
        'krishanu@codecraft.co.in',
        '1990-09-21',
        'Kolkata, West Bengal',
        31
    )
`;

function getSelect(
  columnNames: string[] = [],
  conditions: string[] = []
): string {
  const columns = columnNames.length > 0 ? columnNames.join(", ") : "*";
  const whereClause =
    conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";
  const query = `SELECT ${columns} FROM ${tableName} ${whereClause};`;
  return query;
}

// function getInsert(columnNames: string[], valuenames: string[]) {
//   const columns = columnNames.join(",");
//   const values = valuenames.join(",");
//   const query = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;
//   return query;
// }

function getUpdate(
  columnNames: string[],
  valueNames: string[],
  conditions: string[]
) {
  const setClause = columnNames
    .map((column, index) => `${column} = "${valueNames[index]}"`)
    .join(", ");

  const whereClause =
    conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

  return `UPDATE ${tableName} SET ${setClause} ${whereClause}`;
}

function getDelete(delConditions: string[]): string {
  const whereClause =
    delConditions.length > 0 ? `WHERE ${delConditions.join(" AND ")}` : "";
  const query = `DELETE FROM ${tableName} ${whereClause}`;
  return query;
}

const updateSql = `
    UPDATE ${tableName} SET
        \`name\` = 'Krishanu Dey',
        \`address\` = 'Berhampore, Murshidabd, West Bengal'
    WHERE 
        \`email\` = "krishanu@codecraft.co.in"
`;

const deleteSql = `
    DELETE FROM ${tableName} WHERE \`email\` = "krishanu@codecraft.co.in" AND \`name\` = "Krishanu Dey"
`;

async function runQuery(
  connection: mysql.PoolConnection,
  label: string,
  sql: string
) {
  try {
    console.log(`---${label.toUpperCase()} RESULT---`);
    const [result] = await connection.query(sql);
    consoleDir(result);
    console.log("\n\n\n");
  } catch (err) {
    consoleDir(err);
  }
}

async function main() {
  try {
    const pool = mysql.createPool(process.env.DATABASE_URL!);
    const connection = await pool.getConnection();

    await runQuery(connection, "select", selectSql);
    await runQuery(connection, "count", countSql);
    const selectQuery = getSelect(["email"], [`name="Krishanu"`]);

    const insertQuery = MySqlQueryGenerator.generateInsertSql(tableName, {
      name: "Krishanu",
      email: "krishanu@codecraft.co.in",
      dob: "1990-09-21",
      address: "Kolkata, West Bengal",
      age: 31,
    });
    const updateQuery = getUpdate(
      ["name", "address"],
      ["Shreyas", "Chikkamagalur"],
      [`email = "krishanu@codecraft.co.in"`]
    );
    console.log("-------------------------->", updateQuery);
    await runQuery(connection, "insert", insertQuery);
    await runQuery(
      connection,
      "select",
      MySqlQueryGenerator.generateSelectSql<UserFields>(
        tableName,
        {
          AND: [
            {
              email: {
                op: "EQUALS" as StringOperator,
                value: "krishanu@codecraft.co.in",
              },
            },
            {
              age: {
                op: "EQUALS" as NumberOperator,
                value: 31,
              },
            },
          ],
        },
        0,
        3
      )
    );
    await runQuery(
      connection,
      "count",
      MySqlQueryGenerator.generateCountSql<UserFields>(
        tableName,

        {
          email: {
            op: "EQUALS",
            value: "krishanu@codecraft.co.in",
          },
        },

        "email"
      )
    );

    await runQuery(
      connection,
      "update",
      MySqlQueryGenerator.generateUpdateSql<UserFields>(
        tableName,
        {
          name: "Shreyas",
          address: "Chikkamagalur",
        },
        {
          email: {
            op: "EQUALS" as StringOperator,
            value: "krishanu@codecraft.co.in",
          },
        }
      )
    );
    await runQuery(
      connection,
      "select",
      MySqlQueryGenerator.generateSelectSql<UserFields>(
        tableName,
        {
          AND: [
            {
              email: {
                op: "EQUALS" as StringOperator,
                value: "krishanu@codecraft.co.in",
              },
            },
            {
              age: {
                op: "EQUALS" as NumberOperator,
                value: 31,
              },
            },
          ],
        },
        0,
        3,
        ["name", "dob"]
      )
    );
    await runQuery(
      connection,
      "count",
      MySqlQueryGenerator.generateCountSql(tableName, {
        email: {
          op: "EQUALS",
          value: "krishanu@codecraft.co.in",
        },
      })
    );

    const delQuery = getDelete([
      `email="krishanu@codecraft.co.in" AND name="Shreyas"`,
    ]);
    await runQuery(
      connection,
      "delete",
      MySqlQueryGenerator.generateDeleteSql<UserFields>(tableName, {
        AND: [
          {
            email: {
              op: "EQUALS" as StringOperator,
              value: "krishanu@codecraft.co.in",
            },
          },
          {
            age: {
              op: "EQUALS" as NumberOperator,
              value: 31,
            },
          },
        ],
      })
    );
    await runQuery(
      connection,
      "select",
      MySqlQueryGenerator.generateSelectSql<UserFields>(
        tableName,
        {
          AND: [
            {
              email: {
                op: "EQUALS" as StringOperator,
                value: "krishanu@codecraft.co.in",
              },
            },
            {
              age: {
                op: "EQUALS" as NumberOperator,
                value: 31,
              },
            },
          ],
        },
        0,
        3,
        ["name", "dob"]
      )
    );
    await runQuery(connection, "count", countSql);

    connection.release();
    pool.end();
  } catch (err) {
    consoleDir(err);
  }
}

main();
