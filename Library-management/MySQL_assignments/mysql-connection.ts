import mysql, { QueryResult } from "mysql2/promise";
import { aW } from "vitest/dist/reporters-BU_vXAUX";
export interface IConnection<QR> {
  initialize(): Promise<void>;
  query: <T extends QR>(sql: string, values: any) => Promise<T>;
}
export interface IConnectionPool<QR> {
  acquireConnection(): Promise<PoolConnection<QR>>;
  acquireTransactionConnection(): Promise<TransactionPoolConnection<QR>>;
}
export abstract class StandaloneConnection<QR> implements IConnection<QR> {
  abstract initialize(): Promise<void>;
  abstract query<T extends QR>(sql: string, values: any): Promise<T>;
  abstract close(): Promise<void>;
}
export abstract class PoolConnection<QR> implements IConnection<QR> {
  abstract initialize(): Promise<void>;
  abstract query<T extends QR>(sql: string, values: any): Promise<T>;
  abstract release(): Promise<void>;
}
export abstract class TransactionConnection<QR> implements IConnection<QR> {
  abstract initialize(): Promise<void>;
  abstract query<T extends QR>(sql: string, values: any): Promise<T>;
  abstract close(): Promise<void>;
  abstract commit(): Promise<void>;
  abstract rollback(): Promise<void>;
}
export abstract class TransactionPoolConnection<QR> implements IConnection<QR> {
  abstract initialize(): Promise<void>;
  abstract query<T extends QR>(sql: string, values: any): Promise<T>;
  abstract release(): Promise<void>;
  abstract commit(): Promise<void>;
  abstract rollback(): Promise<void>;
}
// -----XXXXX-----
export class MySqlStandaloneConnection extends StandaloneConnection<QueryResult> {
  private connection: mysql.Connection | undefined;
  constructor(private readonly connectionString: string) {
    super();
  }
  async initialize() {
    if (this.connection) return;
    this.connection = await mysql.createConnection(this.connectionString);
  }
  async query<T extends QueryResult>(sql: string, values: any): Promise<T> {
    if (!this.connection) {
      await this.initialize();
    }
    const [result] = await this.connection!.query<T>(sql, values);
    return result;
  }
  async close(): Promise<void> {
    if (!this.connection) return;
    this.connection.end();
  }
}
export class MyPoolConnection extends PoolConnection<QueryResult> {
  private connection: mysql.PoolConnection | undefined;
  constructor(private readonly pool: mysql.Pool) {
    super();
  }
  async initialize() {
    if (this.connection) return;
    this.connection = await this.pool.getConnection();
  }
  async query<T extends QueryResult>(sql: string, values: any): Promise<T> {
    if (!this.connection) {
      console.log("dfgh");
      await this.initialize();
    }
    const [result] = await this.connection!.query<T>(sql, values);
    return result;
  }
  async release(): Promise<void> {
    if (!this.connection) return;
    this.pool.releaseConnection(this.connection);
    this.connection = undefined;
    if (this.connection) {
      console.log("connection is not released");
    }
  }
}
export class MyTransactionConnection extends TransactionConnection<QueryResult> {
  private connection: mysql.Connection | undefined;
  constructor(private readonly connectionString: string) {
    super();
  }
  async initialize() {
    if (this.connection) return;
    this.connection = await mysql.createConnection(this.connectionString);
    await this.connection.beginTransaction();
  }
  async query<T extends QueryResult>(sql: string, values: any): Promise<T> {
    if (!this.connection) {
      await this.initialize();
    }
    const [result] = await this.connection!.query<T>(sql, values);
    return result;
  }
  async close(): Promise<void> {
    if (!this.connection) return;
    await this.connection.end();
  }
  async commit(): Promise<void> {
    if (!this.connection) return;
    await this.connection.commit();
  }
  async rollback(): Promise<void> {
    if (!this.connection) return;
    await this.connection.rollback();
  }
}
export class MyTransactionPoolConnection extends TransactionPoolConnection<QueryResult> {
  private connection: mysql.PoolConnection | undefined;
  //   private pool: mysql.Pool;
  constructor(private readonly pool: mysql.Pool) {
    super();
    // this.pool = mysql.createPool(this.connectionString);
  }
  async initialize(): Promise<void> {
    if (!this.connection) return;
    this.connection = await this.pool.getConnection();
    await this.connection.beginTransaction();
  }
  async query<T extends mysql.QueryResult>(
    sql: string,
    values: any
  ): Promise<T> {
    if (!this.connection) {
      await this.initialize();
    }
    const [result] = await this.connection!.query<T>(sql, values);
    return result;
  }
  async release(): Promise<void> {
    if (!this.connection) return;
    this.pool.releaseConnection(this.connection);
  }
  async commit(): Promise<void> {
    if (!this.connection) return;
    await this.connection.commit();
  }
  async rollback(): Promise<void> {
    if (!this.connection) return;
    await this.connection.rollback();
  }
}
export class MyIConnectionPool implements IConnectionPool<QueryResult> {
  pool: mysql.Pool;
  constructor(private readonly connectionString: string) {
    this.pool = mysql.createPool(this.connectionString);
  }
  async acquireConnection(): Promise<PoolConnection<mysql.QueryResult>> {
    const connection = new MyPoolConnection(this.pool);
    connection.initialize();
    return connection;
  }
  async acquireTransactionConnection(): Promise<
    TransactionPoolConnection<mysql.QueryResult>
  > {
    const connection = new MyTransactionPoolConnection(this.pool);
    await connection.initialize();
    return connection;
  }
}

async function conn() {
  const x = new MyIConnectionPool(
    "mysql://user:user_password@localhost:3306/library_db"
  );
  const y = await x.acquireConnection();

  await y.initialize();
  const res = await y.query("SELECT * FROM Books WHERE id=2", []);
  console.log(res);
  await y.release();

  const res1 = await y.query("SELECT * FROM Books WHERE id=2", []);
  console.log(res1);
}

conn();
