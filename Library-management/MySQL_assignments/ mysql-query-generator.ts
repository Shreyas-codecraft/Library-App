import {
  AndWhereExpression,
  ColumnData,
  OrWhereExpression,
  SimpleWhereExpression,
  WhereExpression,
  WhereParamValue,
} from "./types";

const generateWhereClauseSql = <T>(whereParams: WhereExpression<T>): string => {
  const processSimpleExp = (exp: SimpleWhereExpression<T>) => {
    const whereQuery = Object.entries(exp)
      .map(([key, opts]) => {
        const columnName = `\`${key}\``;
        const paramValue: WhereParamValue = opts as WhereParamValue;
        let value = `${paramValue.value}`;
        let operator = "";
        if (paramValue.value === null) {
          if (paramValue.op === "EQUALS") {
            operator = " IS ";
          } else {
            operator = " IS NOT ";
          }
        } else {
          switch (paramValue.op) {
            case "EQUALS":
              operator = " = ";
              break;

            case "NOT_EQUALS":
              operator = " != ";
              break;

            case "STARTS_WITH":
              operator = " LIKE ";
              value = `${value}%`;
              break;

            case "NOT_STARTS_WITH":
              operator = " NOT LIKE ";
              value = `${value}%`;
              break;

            case "ENDS_WITH":
              operator = " LIKE ";
              value = `%${value}`;
              break;

            case "NOT_ENDS_WITH":
              operator = " NOT LIKE ";
              value = `%${value}`;
              break;

            case "CONTAINS":
              operator = " LIKE ";
              value = `%${value}%`;
              break;

            case "NOT_CONTAINS":
              operator = " NOT LIKE ";
              value = `%${value}%`;
              break;

            case "GREATER_THAN":
              operator = " > ";
              break;

            case "GREATER_THAN_EQUALS":
              operator = " >= ";
              break;

            case "LESSER_THAN":
              operator = " < ";
              break;

            case "LESSER_THAN_EQUALS":
              operator = " <= ";
              break;
          }
        }

        if (typeof paramValue.value === "string") {
          value = `"${value}"`;
        }
        return `${columnName} ${operator} ${value}`;
      })
      .join(" AND ");
    return whereQuery;
  };
  const whKeys = Object.keys(whereParams);

  if (whKeys.includes("AND")) {
    //it's an AndWhereExpression
    const andClause = (whereParams as AndWhereExpression<T>).AND.map((exp) =>
      generateWhereClauseSql(exp)
    )
      .filter((c) => c)
      .join(" AND ");
    return andClause ? `(${andClause})` : "";
  } else if (whKeys.includes("OR")) {
    //it's an OrWhereExpression
    const orClause = (whereParams as OrWhereExpression<T>).OR.map((exp) =>
      generateWhereClauseSql(exp)
    )
      .filter((c) => c)
      .join(" OR ");
    return orClause ? `(${orClause})` : "";
  } else {
    //it's a SimpleWhereExpression
    const simpleClause = processSimpleExp(
      whereParams as SimpleWhereExpression<T>
    );
    return simpleClause ? `(${simpleClause})` : "";
  }
};

const generateInsertSql = <T>(tableName: string, row: T): string => {
  let sql = "";
  const columnValue = Object.entries(row as object).reduce(
    (acc, [key, value]) => {
      acc.columns.push(key);
      if (typeof value === "string") acc.values.push(`"${value}"`);
      else acc.values.push(value);
      acc.columns.join(", ");
      acc.values.join(", ");
      return acc;
    },
    {
      columns: new Array<string>(),
      values: new Array<string>(),
    }
  );
  sql = `INSERT INTO \`${tableName}\` (${columnValue.columns.join(
    ", "
  )}) VALUES(${columnValue.values.join(", ")})`;
  return sql;
};

// * ((cond1 AND cond2 AND cond3 AND ...) AND (condA AND condB AND condC AND ...)) OR (condX ...)

const generateUpdateSql = <T>(
  tableName: string,
  row: Partial<T>,
  where: WhereExpression<T>
): string => {
  let sql = "";
  const update = Object.entries(row as object).reduce((acc, [key, value]) => {
    if (typeof value == "string") acc.push(`${key}="${value}"`);
    else acc.push(`${key}=${value}`);
    return acc;
  }, new Array<string>());
  const whereClause = generateWhereClauseSql(where);
  sql = `UPDATE \`${tableName}\` SET ${update.join(", ")} WHERE ${whereClause}`;
  return sql;
};

const generateDeleteSql = <T>(
  tableName: string,
  where: WhereExpression<T>
): string => {
  let sql = "";
  const whereClause = generateWhereClauseSql(where);
  sql = `DELETE FROM \`${tableName}\` WHERE ${whereClause}`;
  return sql;
};

const generateSelectSql = <T>(
  tableName: string,
  where?: WhereExpression<T>,
  offset?: number,
  limit?: number,
  columnNames?: (keyof T)[]
): string => {
  let sql;
  const columns =
    columnNames && columnNames.length > 0 ? columnNames.join(", ") : "*";
  if (where) {
    const whereClause = generateWhereClauseSql(where);

    sql = `SELECT ${columns} FROM ${tableName} WHERE ${whereClause}`;
  } else {
    sql = `SELECT ${columns} FROM ${tableName}`;
  }
  if (typeof limit !== "undefined") {
    sql += ` LIMIT ${limit}`;
  }
  if (typeof offset !== "undefined") {
    sql += ` OFFSET ${offset}`;
  }

  return sql;
};

const generateCountSql = <T>(
  tableName: string,
  where: WhereExpression<T>,
  columnName?: keyof T
): string => {
  const column = columnName ? `\`${String(columnName)}\`` : "*";
  const whereClause = generateWhereClauseSql(where);
  const sql = `SELECT COUNT(${column}) FROM \`${tableName}\` WHERE ${whereClause}`;
  return sql;
};

export const MySqlQueryGenerator = {
  generateWhereClauseSql,
  generateInsertSql,
  generateUpdateSql,
  generateDeleteSql,
  generateSelectSql,
  generateCountSql,
};
