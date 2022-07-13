import initSqlJs, {
  Database as SqlDatabase,
  QueryExecResult,
  SqlJsStatic,
} from "sql.js";

import { Table, TableRow } from "../models/table/index.js";
import { Database } from "./database.js";

export class SQLiteDatabase implements Database {
  sql: SqlJsStatic;

  database: SqlDatabase;

  async initialize() {
    this.sql = await initSqlJs({
      locateFile: (file) =>
        // When running in Jest, sql.js is unable to resolve the sql-wasm package from the CDN
        process.env.JEST_WORKER_ID !== undefined
          ? "./node_modules/sql.js/dist/sql-wasm.wasm"
          : `https://sql.js.org/dist/${file}`,
    });
    this.database = new this.sql.Database();
  }

  createTable(table: Table) {
    if (table.rows?.length > 0) {
      const createTableSql = `CREATE TABLE IF NOT EXISTS ${table.tableName} (
        ${this.getColumnTypes(table.rows[0]).join(", ")}
      );`;
      this.database.run(createTableSql);
    }

    if (table.rows?.length > 0 && Object.keys(table.rows[0]).length > 0) {
      table.rows?.forEach((row) => {
        const insertRowSql = `INSERT INTO ${table.tableName} VALUES (
          ${Object.keys(row)
            .map((columnName) => `:${columnName}`)
            .join(", ")}
        );`;
        const bindParams = Object.keys(row).reduce(
          (acc, columnName) => ({
            ...acc,
            [`:${columnName}`]: row[columnName].value,
          }),
          {}
        );
        this.database.exec(insertRowSql, bindParams);
      });
    }
  }

  /**
   * Maps types of TableRow into allowed types in SQLite, used for creating a table schema
   * @param row row.type contains the type of column it is
   * @returns array of row name and type, ex ["number_of_likes integer", "username text"]
   */
  // eslint-disable-next-line class-methods-use-this
  private getColumnTypes(row: TableRow): string[] {
    const columnNameType: string[] = [];
    Object.keys(row).forEach((columnName) => {
      const columnType = row[columnName].type;
      switch (columnType) {
        case "bool":
          columnNameType.push(`${columnName} integer`);
          break;
        case "float":
          columnNameType.push(`${columnName} real`);
          break;
        default:
          columnNameType.push(`${columnName} ${columnType}`);
          break;
      }
    });
    return columnNameType;
  }

  getDatabase(): SqlDatabase {
    return this.database;
  }

  exportDatabase(): Uint8Array {
    return this.database.export();
  }

  runQuery(query: string): QueryExecResult[] {
    return this.database.exec(query);
  }
}
