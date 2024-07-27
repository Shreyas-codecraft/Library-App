import mysql, { QueryResult } from "mysql2/promise";
import { Query } from "mysql2/typings/mysql/lib/protocol/sequences/Query";
export interface IConnection<QR, C> {
  initialize(): Promise<C | undefined>;
  query: <T extends QR>(sql: string, values: any) => Promise<T>;
}

export interface IConnectionPool<
  QR,
  C extends mysql.PoolConnection,
  T extends mysql.PoolConnection
> {
  acquireConnection(): Promise<PoolConnection<QR, C>>;
  acquireTransactionConnection(): Promise<TransactionPoolConnection<QR, C>>;
}

export abstract class StandaloneConnection<QR, C extends mysql.Connection>
  implements IConnection<QR, C>
{
  abstract initialize(): Promise<C | undefined>;
  abstract query<T extends QR>(sql: string, values: any): Promise<T>;
  abstract close(): Promise<void>;
}

export abstract class PoolConnection<QR, C extends mysql.PoolConnection>
  implements IConnection<QR, C>
{
  abstract initialize(): Promise<C | undefined>;
  abstract query<T extends QR>(sql: string, values: any): Promise<T>;
  abstract release(): Promise<void>;
}

export abstract class TransactionConnection<QR, C extends mysql.Connection>
  implements IConnection<QR, C>
{
  abstract initialize(): Promise<C | undefined>;
  abstract query<T extends QR>(sql: string, values: any): Promise<T>;
  abstract close(): Promise<void>;
  abstract commit(): Promise<void>;
  abstract rollback(): Promise<void>;
}

export abstract class TransactionPoolConnection<
  QR,
  C extends mysql.PoolConnection
> implements IConnection<QR, C>
{
  abstract initialize(): Promise<C | undefined>;
  abstract query<T extends QR>(sql: string, values: any): Promise<T>;
  abstract release(): Promise<void>;
  abstract commit(): Promise<void>;
  abstract rollback(): Promise<void>;
}

// -----XXXXX-----

export class MySqlStandaloneConnection<
  QR extends QueryResult,
  C extends mysql.Connection
> extends StandaloneConnection<QR, C> {
  private connection: mysql.Connection | undefined;
  constructor(private readonly connectionString: string) {
    super();
  }

  async initialize() {
    if (this.connection) return;
    this.connection = await mysql.createConnection(this.connectionString);
    return this.connection;
  }
  async query<QR>(sql: string, values: any): Promise<QR> {
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
  private pool: mysql.Pool;

  constructor(private readonly connectionString: string) {
    super();
    this.pool = mysql.createPool(this.connectionString);
  }
  async initialize() {
    const connection = await this.pool.getConnection();
    return connection;
  }
  async query<T extends QueryResult>(sql: string, values: any): Promise<T> {
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
  private pool: mysql.Pool;

  constructor(private readonly connectionString: string) {
    super();
    this.pool = mysql.createPool(this.connectionString);
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
  private pool: mysql.Pool;
  private connection: mysql.PoolConnection | undefined;
  constructor(private readonly connectionString: string) {
    this.pool = mysql.createPool(connectionString);
  }
  async acquireConnection(): Promise<PoolConnection<mysql.QueryResult>> {
    const connection = new MyPoolConnection(this.connectionString);
    connection.initialize();
    return connection;
  }
  async acquireTransactionConnection(): Promise<
    TransactionPoolConnection<mysql.QueryResult>
  > {
    const connection = new MyTransactionPoolConnection(this.connectionString);
    await connection.initialize();
    return connection;
  }
}
