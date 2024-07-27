type WhereParamValue = {
  value: string | number | null;
  op:
    | "EQUALS"
    | "NOT_EQUALS"
    | "STARTS_WITH"
    | "NOT_STARTS_WITH"
    | "ENDS_WITH"
    | "NOT_ENDS_WITH"
    | "CONTAINS"
    | "NOT_CONTAINS"
    | "GREATER_THAN"
    | "GREATER_THAN_EQUALS"
    | "LESSER_THAN"
    | "LESSER_THAN_EQUALS";
};

type Condition<T> = {
  [K in keyof T]?: WhereParamValue;
};

type LogicalCondition<T> = {
  operator: "AND" | "OR";
  conditions: (Condition<T> | LogicalCondition<T>)[];
};

const generateWhereClauseSql = <T>(
  logicalCondition: LogicalCondition<T>
): string => {
  const generateCondition = (condition: Condition<T>): string => {
    return Object.entries(condition)
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
  };

  const generateLogicalCondition = (
    logicalCondition: LogicalCondition<T>
  ): string => {
    const { operator, conditions } = logicalCondition;
    return conditions
      .map((condition) => {
        if ("operator" in condition) {
          return `(${generateLogicalCondition(
            condition as LogicalCondition<T>
          )})`;
        } else {
          return `(${generateCondition(condition as Condition<T>)})`;
        }
      })
      .join(` ${operator} `);
  };

  return generateLogicalCondition(logicalCondition);
};

// Example usage:
interface ExampleTable {
  name: string;
  age: number;
  address: string;
}

const whereClause = generateWhereClauseSql<ExampleTable>({
  operator: "AND",
  conditions: [
    {
      operator: "OR",
      conditions: [
        { name: { value: "shreyas", op: "EQUALS" } },
        { age: { value: 10, op: "GREATER_THAN" } },
      ],
    },
    { address: { value: "chikkamagalur", op: "CONTAINS" } },
  ],
});

console.log(whereClause);
// Output: ((`column1` = "value1" OR `column2` > 10) AND (`column3` LIKE "%value3%"))
