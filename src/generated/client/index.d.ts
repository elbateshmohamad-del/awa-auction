
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SnsSubmission
 * 
 */
export type SnsSubmission = $Result.DefaultSelection<Prisma.$SnsSubmissionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model KycDocument
 * 
 */
export type KycDocument = $Result.DefaultSelection<Prisma.$KycDocumentPayload>
/**
 * Model Bike
 * 
 */
export type Bike = $Result.DefaultSelection<Prisma.$BikePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Bid
 * 
 */
export type Bid = $Result.DefaultSelection<Prisma.$BidPayload>
/**
 * Model Container
 * 
 */
export type Container = $Result.DefaultSelection<Prisma.$ContainerPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model SystemSetting
 * 
 */
export type SystemSetting = $Result.DefaultSelection<Prisma.$SystemSettingPayload>
/**
 * Model ImportLog
 * 
 */
export type ImportLog = $Result.DefaultSelection<Prisma.$ImportLogPayload>
/**
 * Model AdminTask
 * 
 */
export type AdminTask = $Result.DefaultSelection<Prisma.$AdminTaskPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SnsSubmissions
 * const snsSubmissions = await prisma.snsSubmission.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SnsSubmissions
   * const snsSubmissions = await prisma.snsSubmission.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.snsSubmission`: Exposes CRUD operations for the **SnsSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SnsSubmissions
    * const snsSubmissions = await prisma.snsSubmission.findMany()
    * ```
    */
  get snsSubmission(): Prisma.SnsSubmissionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.kycDocument`: Exposes CRUD operations for the **KycDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KycDocuments
    * const kycDocuments = await prisma.kycDocument.findMany()
    * ```
    */
  get kycDocument(): Prisma.KycDocumentDelegate<ExtArgs>;

  /**
   * `prisma.bike`: Exposes CRUD operations for the **Bike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bikes
    * const bikes = await prisma.bike.findMany()
    * ```
    */
  get bike(): Prisma.BikeDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.bid`: Exposes CRUD operations for the **Bid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bids
    * const bids = await prisma.bid.findMany()
    * ```
    */
  get bid(): Prisma.BidDelegate<ExtArgs>;

  /**
   * `prisma.container`: Exposes CRUD operations for the **Container** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Containers
    * const containers = await prisma.container.findMany()
    * ```
    */
  get container(): Prisma.ContainerDelegate<ExtArgs>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs>;

  /**
   * `prisma.systemSetting`: Exposes CRUD operations for the **SystemSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSetting.findMany()
    * ```
    */
  get systemSetting(): Prisma.SystemSettingDelegate<ExtArgs>;

  /**
   * `prisma.importLog`: Exposes CRUD operations for the **ImportLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImportLogs
    * const importLogs = await prisma.importLog.findMany()
    * ```
    */
  get importLog(): Prisma.ImportLogDelegate<ExtArgs>;

  /**
   * `prisma.adminTask`: Exposes CRUD operations for the **AdminTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminTasks
    * const adminTasks = await prisma.adminTask.findMany()
    * ```
    */
  get adminTask(): Prisma.AdminTaskDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SnsSubmission: 'SnsSubmission',
    User: 'User',
    KycDocument: 'KycDocument',
    Bike: 'Bike',
    Order: 'Order',
    Bid: 'Bid',
    Container: 'Container',
    Reservation: 'Reservation',
    SystemSetting: 'SystemSetting',
    ImportLog: 'ImportLog',
    AdminTask: 'AdminTask'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'snsSubmission' | 'user' | 'kycDocument' | 'bike' | 'order' | 'bid' | 'container' | 'reservation' | 'systemSetting' | 'importLog' | 'adminTask'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      SnsSubmission: {
        payload: Prisma.$SnsSubmissionPayload<ExtArgs>
        fields: Prisma.SnsSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SnsSubmissionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SnsSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SnsSubmissionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SnsSubmissionPayload>
          }
          findFirst: {
            args: Prisma.SnsSubmissionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SnsSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SnsSubmissionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SnsSubmissionPayload>
          }
          findMany: {
            args: Prisma.SnsSubmissionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SnsSubmissionPayload>[]
          }
          create: {
            args: Prisma.SnsSubmissionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SnsSubmissionPayload>
          }
          createMany: {
            args: Prisma.SnsSubmissionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SnsSubmissionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SnsSubmissionPayload>
          }
          update: {
            args: Prisma.SnsSubmissionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SnsSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SnsSubmissionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SnsSubmissionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SnsSubmissionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SnsSubmissionPayload>
          }
          aggregate: {
            args: Prisma.SnsSubmissionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSnsSubmission>
          }
          groupBy: {
            args: Prisma.SnsSubmissionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SnsSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SnsSubmissionCountArgs<ExtArgs>,
            result: $Utils.Optional<SnsSubmissionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      KycDocument: {
        payload: Prisma.$KycDocumentPayload<ExtArgs>
        fields: Prisma.KycDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KycDocumentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KycDocumentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>
          }
          findFirst: {
            args: Prisma.KycDocumentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KycDocumentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>
          }
          findMany: {
            args: Prisma.KycDocumentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>[]
          }
          create: {
            args: Prisma.KycDocumentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>
          }
          createMany: {
            args: Prisma.KycDocumentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.KycDocumentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>
          }
          update: {
            args: Prisma.KycDocumentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>
          }
          deleteMany: {
            args: Prisma.KycDocumentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KycDocumentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KycDocumentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>
          }
          aggregate: {
            args: Prisma.KycDocumentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKycDocument>
          }
          groupBy: {
            args: Prisma.KycDocumentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KycDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.KycDocumentCountArgs<ExtArgs>,
            result: $Utils.Optional<KycDocumentCountAggregateOutputType> | number
          }
        }
      }
      Bike: {
        payload: Prisma.$BikePayload<ExtArgs>
        fields: Prisma.BikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BikeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BikeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          findFirst: {
            args: Prisma.BikeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BikeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          findMany: {
            args: Prisma.BikeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>[]
          }
          create: {
            args: Prisma.BikeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          createMany: {
            args: Prisma.BikeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BikeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          update: {
            args: Prisma.BikeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          deleteMany: {
            args: Prisma.BikeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BikeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BikeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          aggregate: {
            args: Prisma.BikeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBike>
          }
          groupBy: {
            args: Prisma.BikeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BikeCountArgs<ExtArgs>,
            result: $Utils.Optional<BikeCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Bid: {
        payload: Prisma.$BidPayload<ExtArgs>
        fields: Prisma.BidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BidFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BidFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findFirst: {
            args: Prisma.BidFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BidFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findMany: {
            args: Prisma.BidFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          create: {
            args: Prisma.BidCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          createMany: {
            args: Prisma.BidCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BidDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          update: {
            args: Prisma.BidUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          deleteMany: {
            args: Prisma.BidDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BidUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BidUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          aggregate: {
            args: Prisma.BidAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBid>
          }
          groupBy: {
            args: Prisma.BidGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BidGroupByOutputType>[]
          }
          count: {
            args: Prisma.BidCountArgs<ExtArgs>,
            result: $Utils.Optional<BidCountAggregateOutputType> | number
          }
        }
      }
      Container: {
        payload: Prisma.$ContainerPayload<ExtArgs>
        fields: Prisma.ContainerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContainerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContainerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          findFirst: {
            args: Prisma.ContainerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContainerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          findMany: {
            args: Prisma.ContainerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>[]
          }
          create: {
            args: Prisma.ContainerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          createMany: {
            args: Prisma.ContainerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContainerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          update: {
            args: Prisma.ContainerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          deleteMany: {
            args: Prisma.ContainerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContainerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContainerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          aggregate: {
            args: Prisma.ContainerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContainer>
          }
          groupBy: {
            args: Prisma.ContainerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContainerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContainerCountArgs<ExtArgs>,
            result: $Utils.Optional<ContainerCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>,
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      SystemSetting: {
        payload: Prisma.$SystemSettingPayload<ExtArgs>
        fields: Prisma.SystemSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findMany: {
            args: Prisma.SystemSettingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          create: {
            args: Prisma.SystemSettingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          createMany: {
            args: Prisma.SystemSettingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SystemSettingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          update: {
            args: Prisma.SystemSettingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SystemSettingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSystemSetting>
          }
          groupBy: {
            args: Prisma.SystemSettingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SystemSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingCountArgs<ExtArgs>,
            result: $Utils.Optional<SystemSettingCountAggregateOutputType> | number
          }
        }
      }
      ImportLog: {
        payload: Prisma.$ImportLogPayload<ExtArgs>
        fields: Prisma.ImportLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImportLogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImportLogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportLogPayload>
          }
          findFirst: {
            args: Prisma.ImportLogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImportLogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportLogPayload>
          }
          findMany: {
            args: Prisma.ImportLogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportLogPayload>[]
          }
          create: {
            args: Prisma.ImportLogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportLogPayload>
          }
          createMany: {
            args: Prisma.ImportLogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImportLogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportLogPayload>
          }
          update: {
            args: Prisma.ImportLogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportLogPayload>
          }
          deleteMany: {
            args: Prisma.ImportLogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImportLogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImportLogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImportLogPayload>
          }
          aggregate: {
            args: Prisma.ImportLogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImportLog>
          }
          groupBy: {
            args: Prisma.ImportLogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImportLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImportLogCountArgs<ExtArgs>,
            result: $Utils.Optional<ImportLogCountAggregateOutputType> | number
          }
        }
      }
      AdminTask: {
        payload: Prisma.$AdminTaskPayload<ExtArgs>
        fields: Prisma.AdminTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminTaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminTaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminTaskPayload>
          }
          findFirst: {
            args: Prisma.AdminTaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminTaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminTaskPayload>
          }
          findMany: {
            args: Prisma.AdminTaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminTaskPayload>[]
          }
          create: {
            args: Prisma.AdminTaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminTaskPayload>
          }
          createMany: {
            args: Prisma.AdminTaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminTaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminTaskPayload>
          }
          update: {
            args: Prisma.AdminTaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminTaskPayload>
          }
          deleteMany: {
            args: Prisma.AdminTaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminTaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminTaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminTaskPayload>
          }
          aggregate: {
            args: Prisma.AdminTaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdminTask>
          }
          groupBy: {
            args: Prisma.AdminTaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminTaskCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminTaskCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    kycDocuments: number
    orders: number
    bids: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kycDocuments?: boolean | UserCountOutputTypeCountKycDocumentsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    bids?: boolean | UserCountOutputTypeCountBidsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKycDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KycDocumentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }



  /**
   * Count Type BikeCountOutputType
   */

  export type BikeCountOutputType = {
    orders: number
    bids: number
  }

  export type BikeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | BikeCountOutputTypeCountOrdersArgs
    bids?: boolean | BikeCountOutputTypeCountBidsArgs
  }

  // Custom InputTypes

  /**
   * BikeCountOutputType without action
   */
  export type BikeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BikeCountOutputType
     */
    select?: BikeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BikeCountOutputType without action
   */
  export type BikeCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * BikeCountOutputType without action
   */
  export type BikeCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }



  /**
   * Models
   */

  /**
   * Model SnsSubmission
   */

  export type AggregateSnsSubmission = {
    _count: SnsSubmissionCountAggregateOutputType | null
    _avg: SnsSubmissionAvgAggregateOutputType | null
    _sum: SnsSubmissionSumAggregateOutputType | null
    _min: SnsSubmissionMinAggregateOutputType | null
    _max: SnsSubmissionMaxAggregateOutputType | null
  }

  export type SnsSubmissionAvgAggregateOutputType = {
    id: number | null
    initialViews: number | null
    initialLikes: number | null
    verifiedViews: number | null
    verifiedLikes: number | null
    verifiedShares: number | null
  }

  export type SnsSubmissionSumAggregateOutputType = {
    id: number | null
    initialViews: number | null
    initialLikes: number | null
    verifiedViews: number | null
    verifiedLikes: number | null
    verifiedShares: number | null
  }

  export type SnsSubmissionMinAggregateOutputType = {
    id: number | null
    userId: string | null
    bikeId: string | null
    platform: string | null
    postUrl: string | null
    status: string | null
    initialViews: number | null
    initialLikes: number | null
    verifiedViews: number | null
    verifiedLikes: number | null
    verifiedShares: number | null
    rewardGranted: string | null
    metricsJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SnsSubmissionMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    bikeId: string | null
    platform: string | null
    postUrl: string | null
    status: string | null
    initialViews: number | null
    initialLikes: number | null
    verifiedViews: number | null
    verifiedLikes: number | null
    verifiedShares: number | null
    rewardGranted: string | null
    metricsJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SnsSubmissionCountAggregateOutputType = {
    id: number
    userId: number
    bikeId: number
    platform: number
    postUrl: number
    status: number
    initialViews: number
    initialLikes: number
    verifiedViews: number
    verifiedLikes: number
    verifiedShares: number
    rewardGranted: number
    metricsJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SnsSubmissionAvgAggregateInputType = {
    id?: true
    initialViews?: true
    initialLikes?: true
    verifiedViews?: true
    verifiedLikes?: true
    verifiedShares?: true
  }

  export type SnsSubmissionSumAggregateInputType = {
    id?: true
    initialViews?: true
    initialLikes?: true
    verifiedViews?: true
    verifiedLikes?: true
    verifiedShares?: true
  }

  export type SnsSubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    bikeId?: true
    platform?: true
    postUrl?: true
    status?: true
    initialViews?: true
    initialLikes?: true
    verifiedViews?: true
    verifiedLikes?: true
    verifiedShares?: true
    rewardGranted?: true
    metricsJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SnsSubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    bikeId?: true
    platform?: true
    postUrl?: true
    status?: true
    initialViews?: true
    initialLikes?: true
    verifiedViews?: true
    verifiedLikes?: true
    verifiedShares?: true
    rewardGranted?: true
    metricsJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SnsSubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    bikeId?: true
    platform?: true
    postUrl?: true
    status?: true
    initialViews?: true
    initialLikes?: true
    verifiedViews?: true
    verifiedLikes?: true
    verifiedShares?: true
    rewardGranted?: true
    metricsJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SnsSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SnsSubmission to aggregate.
     */
    where?: SnsSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnsSubmissions to fetch.
     */
    orderBy?: SnsSubmissionOrderByWithRelationInput | SnsSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SnsSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnsSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnsSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SnsSubmissions
    **/
    _count?: true | SnsSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SnsSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SnsSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnsSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnsSubmissionMaxAggregateInputType
  }

  export type GetSnsSubmissionAggregateType<T extends SnsSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSnsSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSnsSubmission[P]>
      : GetScalarType<T[P], AggregateSnsSubmission[P]>
  }




  export type SnsSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnsSubmissionWhereInput
    orderBy?: SnsSubmissionOrderByWithAggregationInput | SnsSubmissionOrderByWithAggregationInput[]
    by: SnsSubmissionScalarFieldEnum[] | SnsSubmissionScalarFieldEnum
    having?: SnsSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnsSubmissionCountAggregateInputType | true
    _avg?: SnsSubmissionAvgAggregateInputType
    _sum?: SnsSubmissionSumAggregateInputType
    _min?: SnsSubmissionMinAggregateInputType
    _max?: SnsSubmissionMaxAggregateInputType
  }

  export type SnsSubmissionGroupByOutputType = {
    id: number
    userId: string
    bikeId: string
    platform: string
    postUrl: string
    status: string
    initialViews: number | null
    initialLikes: number | null
    verifiedViews: number | null
    verifiedLikes: number | null
    verifiedShares: number | null
    rewardGranted: string | null
    metricsJson: string | null
    createdAt: Date
    updatedAt: Date
    _count: SnsSubmissionCountAggregateOutputType | null
    _avg: SnsSubmissionAvgAggregateOutputType | null
    _sum: SnsSubmissionSumAggregateOutputType | null
    _min: SnsSubmissionMinAggregateOutputType | null
    _max: SnsSubmissionMaxAggregateOutputType | null
  }

  type GetSnsSubmissionGroupByPayload<T extends SnsSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnsSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SnsSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnsSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SnsSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SnsSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bikeId?: boolean
    platform?: boolean
    postUrl?: boolean
    status?: boolean
    initialViews?: boolean
    initialLikes?: boolean
    verifiedViews?: boolean
    verifiedLikes?: boolean
    verifiedShares?: boolean
    rewardGranted?: boolean
    metricsJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["snsSubmission"]>

  export type SnsSubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    bikeId?: boolean
    platform?: boolean
    postUrl?: boolean
    status?: boolean
    initialViews?: boolean
    initialLikes?: boolean
    verifiedViews?: boolean
    verifiedLikes?: boolean
    verifiedShares?: boolean
    rewardGranted?: boolean
    metricsJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SnsSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SnsSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      bikeId: string
      platform: string
      postUrl: string
      status: string
      initialViews: number | null
      initialLikes: number | null
      verifiedViews: number | null
      verifiedLikes: number | null
      verifiedShares: number | null
      rewardGranted: string | null
      metricsJson: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["snsSubmission"]>
    composites: {}
  }


  type SnsSubmissionGetPayload<S extends boolean | null | undefined | SnsSubmissionDefaultArgs> = $Result.GetResult<Prisma.$SnsSubmissionPayload, S>

  type SnsSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SnsSubmissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SnsSubmissionCountAggregateInputType | true
    }

  export interface SnsSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SnsSubmission'], meta: { name: 'SnsSubmission' } }
    /**
     * Find zero or one SnsSubmission that matches the filter.
     * @param {SnsSubmissionFindUniqueArgs} args - Arguments to find a SnsSubmission
     * @example
     * // Get one SnsSubmission
     * const snsSubmission = await prisma.snsSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SnsSubmissionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SnsSubmissionFindUniqueArgs<ExtArgs>>
    ): Prisma__SnsSubmissionClient<$Result.GetResult<Prisma.$SnsSubmissionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SnsSubmission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SnsSubmissionFindUniqueOrThrowArgs} args - Arguments to find a SnsSubmission
     * @example
     * // Get one SnsSubmission
     * const snsSubmission = await prisma.snsSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SnsSubmissionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SnsSubmissionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SnsSubmissionClient<$Result.GetResult<Prisma.$SnsSubmissionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SnsSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsSubmissionFindFirstArgs} args - Arguments to find a SnsSubmission
     * @example
     * // Get one SnsSubmission
     * const snsSubmission = await prisma.snsSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SnsSubmissionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SnsSubmissionFindFirstArgs<ExtArgs>>
    ): Prisma__SnsSubmissionClient<$Result.GetResult<Prisma.$SnsSubmissionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SnsSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsSubmissionFindFirstOrThrowArgs} args - Arguments to find a SnsSubmission
     * @example
     * // Get one SnsSubmission
     * const snsSubmission = await prisma.snsSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SnsSubmissionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SnsSubmissionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SnsSubmissionClient<$Result.GetResult<Prisma.$SnsSubmissionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SnsSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsSubmissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SnsSubmissions
     * const snsSubmissions = await prisma.snsSubmission.findMany()
     * 
     * // Get first 10 SnsSubmissions
     * const snsSubmissions = await prisma.snsSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const snsSubmissionWithIdOnly = await prisma.snsSubmission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SnsSubmissionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SnsSubmissionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnsSubmissionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SnsSubmission.
     * @param {SnsSubmissionCreateArgs} args - Arguments to create a SnsSubmission.
     * @example
     * // Create one SnsSubmission
     * const SnsSubmission = await prisma.snsSubmission.create({
     *   data: {
     *     // ... data to create a SnsSubmission
     *   }
     * })
     * 
    **/
    create<T extends SnsSubmissionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SnsSubmissionCreateArgs<ExtArgs>>
    ): Prisma__SnsSubmissionClient<$Result.GetResult<Prisma.$SnsSubmissionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SnsSubmissions.
     *     @param {SnsSubmissionCreateManyArgs} args - Arguments to create many SnsSubmissions.
     *     @example
     *     // Create many SnsSubmissions
     *     const snsSubmission = await prisma.snsSubmission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SnsSubmissionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SnsSubmissionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SnsSubmission.
     * @param {SnsSubmissionDeleteArgs} args - Arguments to delete one SnsSubmission.
     * @example
     * // Delete one SnsSubmission
     * const SnsSubmission = await prisma.snsSubmission.delete({
     *   where: {
     *     // ... filter to delete one SnsSubmission
     *   }
     * })
     * 
    **/
    delete<T extends SnsSubmissionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SnsSubmissionDeleteArgs<ExtArgs>>
    ): Prisma__SnsSubmissionClient<$Result.GetResult<Prisma.$SnsSubmissionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SnsSubmission.
     * @param {SnsSubmissionUpdateArgs} args - Arguments to update one SnsSubmission.
     * @example
     * // Update one SnsSubmission
     * const snsSubmission = await prisma.snsSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SnsSubmissionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SnsSubmissionUpdateArgs<ExtArgs>>
    ): Prisma__SnsSubmissionClient<$Result.GetResult<Prisma.$SnsSubmissionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SnsSubmissions.
     * @param {SnsSubmissionDeleteManyArgs} args - Arguments to filter SnsSubmissions to delete.
     * @example
     * // Delete a few SnsSubmissions
     * const { count } = await prisma.snsSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SnsSubmissionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SnsSubmissionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SnsSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SnsSubmissions
     * const snsSubmission = await prisma.snsSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SnsSubmissionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SnsSubmissionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SnsSubmission.
     * @param {SnsSubmissionUpsertArgs} args - Arguments to update or create a SnsSubmission.
     * @example
     * // Update or create a SnsSubmission
     * const snsSubmission = await prisma.snsSubmission.upsert({
     *   create: {
     *     // ... data to create a SnsSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SnsSubmission we want to update
     *   }
     * })
    **/
    upsert<T extends SnsSubmissionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SnsSubmissionUpsertArgs<ExtArgs>>
    ): Prisma__SnsSubmissionClient<$Result.GetResult<Prisma.$SnsSubmissionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SnsSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsSubmissionCountArgs} args - Arguments to filter SnsSubmissions to count.
     * @example
     * // Count the number of SnsSubmissions
     * const count = await prisma.snsSubmission.count({
     *   where: {
     *     // ... the filter for the SnsSubmissions we want to count
     *   }
     * })
    **/
    count<T extends SnsSubmissionCountArgs>(
      args?: Subset<T, SnsSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SnsSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SnsSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SnsSubmissionAggregateArgs>(args: Subset<T, SnsSubmissionAggregateArgs>): Prisma.PrismaPromise<GetSnsSubmissionAggregateType<T>>

    /**
     * Group by SnsSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SnsSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SnsSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SnsSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SnsSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnsSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SnsSubmission model
   */
  readonly fields: SnsSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SnsSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SnsSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SnsSubmission model
   */ 
  interface SnsSubmissionFieldRefs {
    readonly id: FieldRef<"SnsSubmission", 'Int'>
    readonly userId: FieldRef<"SnsSubmission", 'String'>
    readonly bikeId: FieldRef<"SnsSubmission", 'String'>
    readonly platform: FieldRef<"SnsSubmission", 'String'>
    readonly postUrl: FieldRef<"SnsSubmission", 'String'>
    readonly status: FieldRef<"SnsSubmission", 'String'>
    readonly initialViews: FieldRef<"SnsSubmission", 'Int'>
    readonly initialLikes: FieldRef<"SnsSubmission", 'Int'>
    readonly verifiedViews: FieldRef<"SnsSubmission", 'Int'>
    readonly verifiedLikes: FieldRef<"SnsSubmission", 'Int'>
    readonly verifiedShares: FieldRef<"SnsSubmission", 'Int'>
    readonly rewardGranted: FieldRef<"SnsSubmission", 'String'>
    readonly metricsJson: FieldRef<"SnsSubmission", 'String'>
    readonly createdAt: FieldRef<"SnsSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"SnsSubmission", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * SnsSubmission findUnique
   */
  export type SnsSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsSubmission
     */
    select?: SnsSubmissionSelect<ExtArgs> | null
    /**
     * Filter, which SnsSubmission to fetch.
     */
    where: SnsSubmissionWhereUniqueInput
  }


  /**
   * SnsSubmission findUniqueOrThrow
   */
  export type SnsSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsSubmission
     */
    select?: SnsSubmissionSelect<ExtArgs> | null
    /**
     * Filter, which SnsSubmission to fetch.
     */
    where: SnsSubmissionWhereUniqueInput
  }


  /**
   * SnsSubmission findFirst
   */
  export type SnsSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsSubmission
     */
    select?: SnsSubmissionSelect<ExtArgs> | null
    /**
     * Filter, which SnsSubmission to fetch.
     */
    where?: SnsSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnsSubmissions to fetch.
     */
    orderBy?: SnsSubmissionOrderByWithRelationInput | SnsSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SnsSubmissions.
     */
    cursor?: SnsSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnsSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnsSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SnsSubmissions.
     */
    distinct?: SnsSubmissionScalarFieldEnum | SnsSubmissionScalarFieldEnum[]
  }


  /**
   * SnsSubmission findFirstOrThrow
   */
  export type SnsSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsSubmission
     */
    select?: SnsSubmissionSelect<ExtArgs> | null
    /**
     * Filter, which SnsSubmission to fetch.
     */
    where?: SnsSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnsSubmissions to fetch.
     */
    orderBy?: SnsSubmissionOrderByWithRelationInput | SnsSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SnsSubmissions.
     */
    cursor?: SnsSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnsSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnsSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SnsSubmissions.
     */
    distinct?: SnsSubmissionScalarFieldEnum | SnsSubmissionScalarFieldEnum[]
  }


  /**
   * SnsSubmission findMany
   */
  export type SnsSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsSubmission
     */
    select?: SnsSubmissionSelect<ExtArgs> | null
    /**
     * Filter, which SnsSubmissions to fetch.
     */
    where?: SnsSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnsSubmissions to fetch.
     */
    orderBy?: SnsSubmissionOrderByWithRelationInput | SnsSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SnsSubmissions.
     */
    cursor?: SnsSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnsSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnsSubmissions.
     */
    skip?: number
    distinct?: SnsSubmissionScalarFieldEnum | SnsSubmissionScalarFieldEnum[]
  }


  /**
   * SnsSubmission create
   */
  export type SnsSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsSubmission
     */
    select?: SnsSubmissionSelect<ExtArgs> | null
    /**
     * The data needed to create a SnsSubmission.
     */
    data: XOR<SnsSubmissionCreateInput, SnsSubmissionUncheckedCreateInput>
  }


  /**
   * SnsSubmission createMany
   */
  export type SnsSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SnsSubmissions.
     */
    data: SnsSubmissionCreateManyInput | SnsSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SnsSubmission update
   */
  export type SnsSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsSubmission
     */
    select?: SnsSubmissionSelect<ExtArgs> | null
    /**
     * The data needed to update a SnsSubmission.
     */
    data: XOR<SnsSubmissionUpdateInput, SnsSubmissionUncheckedUpdateInput>
    /**
     * Choose, which SnsSubmission to update.
     */
    where: SnsSubmissionWhereUniqueInput
  }


  /**
   * SnsSubmission updateMany
   */
  export type SnsSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SnsSubmissions.
     */
    data: XOR<SnsSubmissionUpdateManyMutationInput, SnsSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which SnsSubmissions to update
     */
    where?: SnsSubmissionWhereInput
  }


  /**
   * SnsSubmission upsert
   */
  export type SnsSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsSubmission
     */
    select?: SnsSubmissionSelect<ExtArgs> | null
    /**
     * The filter to search for the SnsSubmission to update in case it exists.
     */
    where: SnsSubmissionWhereUniqueInput
    /**
     * In case the SnsSubmission found by the `where` argument doesn't exist, create a new SnsSubmission with this data.
     */
    create: XOR<SnsSubmissionCreateInput, SnsSubmissionUncheckedCreateInput>
    /**
     * In case the SnsSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SnsSubmissionUpdateInput, SnsSubmissionUncheckedUpdateInput>
  }


  /**
   * SnsSubmission delete
   */
  export type SnsSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsSubmission
     */
    select?: SnsSubmissionSelect<ExtArgs> | null
    /**
     * Filter which SnsSubmission to delete.
     */
    where: SnsSubmissionWhereUniqueInput
  }


  /**
   * SnsSubmission deleteMany
   */
  export type SnsSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SnsSubmissions to delete
     */
    where?: SnsSubmissionWhereInput
  }


  /**
   * SnsSubmission without action
   */
  export type SnsSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsSubmission
     */
    select?: SnsSubmissionSelect<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    permissions: string | null
    createdAt: Date | null
    updatedAt: Date | null
    preferredCurrency: string | null
    memberType: string | null
    phoneNumber: string | null
    address: string | null
    corporateName: string | null
    corporateRegNum: string | null
    representative: string | null
    memberId: string | null
    kycStatus: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    permissions: string | null
    createdAt: Date | null
    updatedAt: Date | null
    preferredCurrency: string | null
    memberType: string | null
    phoneNumber: string | null
    address: string | null
    corporateName: string | null
    corporateRegNum: string | null
    representative: string | null
    memberId: string | null
    kycStatus: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    permissions: number
    createdAt: number
    updatedAt: number
    preferredCurrency: number
    memberType: number
    phoneNumber: number
    address: number
    corporateName: number
    corporateRegNum: number
    representative: number
    memberId: number
    kycStatus: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
    preferredCurrency?: true
    memberType?: true
    phoneNumber?: true
    address?: true
    corporateName?: true
    corporateRegNum?: true
    representative?: true
    memberId?: true
    kycStatus?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
    preferredCurrency?: true
    memberType?: true
    phoneNumber?: true
    address?: true
    corporateName?: true
    corporateRegNum?: true
    representative?: true
    memberId?: true
    kycStatus?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
    preferredCurrency?: true
    memberType?: true
    phoneNumber?: true
    address?: true
    corporateName?: true
    corporateRegNum?: true
    representative?: true
    memberId?: true
    kycStatus?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string | null
    role: string
    permissions: string | null
    createdAt: Date
    updatedAt: Date
    preferredCurrency: string
    memberType: string
    phoneNumber: string | null
    address: string | null
    corporateName: string | null
    corporateRegNum: string | null
    representative: string | null
    memberId: string | null
    kycStatus: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    preferredCurrency?: boolean
    memberType?: boolean
    phoneNumber?: boolean
    address?: boolean
    corporateName?: boolean
    corporateRegNum?: boolean
    representative?: boolean
    memberId?: boolean
    kycStatus?: boolean
    kycDocuments?: boolean | User$kycDocumentsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    bids?: boolean | User$bidsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    preferredCurrency?: boolean
    memberType?: boolean
    phoneNumber?: boolean
    address?: boolean
    corporateName?: boolean
    corporateRegNum?: boolean
    representative?: boolean
    memberId?: boolean
    kycStatus?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kycDocuments?: boolean | User$kycDocumentsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    bids?: boolean | User$bidsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      kycDocuments: Prisma.$KycDocumentPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      bids: Prisma.$BidPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string | null
      role: string
      permissions: string | null
      createdAt: Date
      updatedAt: Date
      preferredCurrency: string
      memberType: string
      phoneNumber: string | null
      address: string | null
      corporateName: string | null
      corporateRegNum: string | null
      representative: string | null
      memberId: string | null
      kycStatus: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    kycDocuments<T extends User$kycDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, User$kycDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, 'findMany'> | Null>;

    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    bids<T extends User$bidsArgs<ExtArgs> = {}>(args?: Subset<T, User$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly permissions: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly preferredCurrency: FieldRef<"User", 'String'>
    readonly memberType: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly corporateName: FieldRef<"User", 'String'>
    readonly corporateRegNum: FieldRef<"User", 'String'>
    readonly representative: FieldRef<"User", 'String'>
    readonly memberId: FieldRef<"User", 'String'>
    readonly kycStatus: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.kycDocuments
   */
  export type User$kycDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KycDocumentInclude<ExtArgs> | null
    where?: KycDocumentWhereInput
    orderBy?: KycDocumentOrderByWithRelationInput | KycDocumentOrderByWithRelationInput[]
    cursor?: KycDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KycDocumentScalarFieldEnum | KycDocumentScalarFieldEnum[]
  }


  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * User.bids
   */
  export type User$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model KycDocument
   */

  export type AggregateKycDocument = {
    _count: KycDocumentCountAggregateOutputType | null
    _min: KycDocumentMinAggregateOutputType | null
    _max: KycDocumentMaxAggregateOutputType | null
  }

  export type KycDocumentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    fileUrl: string | null
    status: string | null
    rejectionReason: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KycDocumentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    fileUrl: string | null
    status: string | null
    rejectionReason: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KycDocumentCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    fileUrl: number
    status: number
    rejectionReason: number
    reviewedBy: number
    reviewedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KycDocumentMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    fileUrl?: true
    status?: true
    rejectionReason?: true
    reviewedBy?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KycDocumentMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    fileUrl?: true
    status?: true
    rejectionReason?: true
    reviewedBy?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KycDocumentCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    fileUrl?: true
    status?: true
    rejectionReason?: true
    reviewedBy?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KycDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycDocument to aggregate.
     */
    where?: KycDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycDocuments to fetch.
     */
    orderBy?: KycDocumentOrderByWithRelationInput | KycDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KycDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KycDocuments
    **/
    _count?: true | KycDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KycDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KycDocumentMaxAggregateInputType
  }

  export type GetKycDocumentAggregateType<T extends KycDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateKycDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKycDocument[P]>
      : GetScalarType<T[P], AggregateKycDocument[P]>
  }




  export type KycDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KycDocumentWhereInput
    orderBy?: KycDocumentOrderByWithAggregationInput | KycDocumentOrderByWithAggregationInput[]
    by: KycDocumentScalarFieldEnum[] | KycDocumentScalarFieldEnum
    having?: KycDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KycDocumentCountAggregateInputType | true
    _min?: KycDocumentMinAggregateInputType
    _max?: KycDocumentMaxAggregateInputType
  }

  export type KycDocumentGroupByOutputType = {
    id: string
    userId: string
    type: string
    fileUrl: string
    status: string
    rejectionReason: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: KycDocumentCountAggregateOutputType | null
    _min: KycDocumentMinAggregateOutputType | null
    _max: KycDocumentMaxAggregateOutputType | null
  }

  type GetKycDocumentGroupByPayload<T extends KycDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KycDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KycDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KycDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], KycDocumentGroupByOutputType[P]>
        }
      >
    >


  export type KycDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    fileUrl?: boolean
    status?: boolean
    rejectionReason?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycDocument"]>

  export type KycDocumentSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    fileUrl?: boolean
    status?: boolean
    rejectionReason?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KycDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $KycDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KycDocument"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      fileUrl: string
      status: string
      rejectionReason: string | null
      reviewedBy: string | null
      reviewedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kycDocument"]>
    composites: {}
  }


  type KycDocumentGetPayload<S extends boolean | null | undefined | KycDocumentDefaultArgs> = $Result.GetResult<Prisma.$KycDocumentPayload, S>

  type KycDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KycDocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KycDocumentCountAggregateInputType | true
    }

  export interface KycDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KycDocument'], meta: { name: 'KycDocument' } }
    /**
     * Find zero or one KycDocument that matches the filter.
     * @param {KycDocumentFindUniqueArgs} args - Arguments to find a KycDocument
     * @example
     * // Get one KycDocument
     * const kycDocument = await prisma.kycDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KycDocumentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KycDocumentFindUniqueArgs<ExtArgs>>
    ): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one KycDocument that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KycDocumentFindUniqueOrThrowArgs} args - Arguments to find a KycDocument
     * @example
     * // Get one KycDocument
     * const kycDocument = await prisma.kycDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KycDocumentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KycDocumentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first KycDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentFindFirstArgs} args - Arguments to find a KycDocument
     * @example
     * // Get one KycDocument
     * const kycDocument = await prisma.kycDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KycDocumentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KycDocumentFindFirstArgs<ExtArgs>>
    ): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first KycDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentFindFirstOrThrowArgs} args - Arguments to find a KycDocument
     * @example
     * // Get one KycDocument
     * const kycDocument = await prisma.kycDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KycDocumentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KycDocumentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more KycDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KycDocuments
     * const kycDocuments = await prisma.kycDocument.findMany()
     * 
     * // Get first 10 KycDocuments
     * const kycDocuments = await prisma.kycDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kycDocumentWithIdOnly = await prisma.kycDocument.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KycDocumentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KycDocumentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a KycDocument.
     * @param {KycDocumentCreateArgs} args - Arguments to create a KycDocument.
     * @example
     * // Create one KycDocument
     * const KycDocument = await prisma.kycDocument.create({
     *   data: {
     *     // ... data to create a KycDocument
     *   }
     * })
     * 
    **/
    create<T extends KycDocumentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KycDocumentCreateArgs<ExtArgs>>
    ): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many KycDocuments.
     *     @param {KycDocumentCreateManyArgs} args - Arguments to create many KycDocuments.
     *     @example
     *     // Create many KycDocuments
     *     const kycDocument = await prisma.kycDocument.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KycDocumentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KycDocumentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KycDocument.
     * @param {KycDocumentDeleteArgs} args - Arguments to delete one KycDocument.
     * @example
     * // Delete one KycDocument
     * const KycDocument = await prisma.kycDocument.delete({
     *   where: {
     *     // ... filter to delete one KycDocument
     *   }
     * })
     * 
    **/
    delete<T extends KycDocumentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KycDocumentDeleteArgs<ExtArgs>>
    ): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one KycDocument.
     * @param {KycDocumentUpdateArgs} args - Arguments to update one KycDocument.
     * @example
     * // Update one KycDocument
     * const kycDocument = await prisma.kycDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KycDocumentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KycDocumentUpdateArgs<ExtArgs>>
    ): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more KycDocuments.
     * @param {KycDocumentDeleteManyArgs} args - Arguments to filter KycDocuments to delete.
     * @example
     * // Delete a few KycDocuments
     * const { count } = await prisma.kycDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KycDocumentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KycDocumentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KycDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KycDocuments
     * const kycDocument = await prisma.kycDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KycDocumentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KycDocumentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KycDocument.
     * @param {KycDocumentUpsertArgs} args - Arguments to update or create a KycDocument.
     * @example
     * // Update or create a KycDocument
     * const kycDocument = await prisma.kycDocument.upsert({
     *   create: {
     *     // ... data to create a KycDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KycDocument we want to update
     *   }
     * })
    **/
    upsert<T extends KycDocumentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KycDocumentUpsertArgs<ExtArgs>>
    ): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of KycDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentCountArgs} args - Arguments to filter KycDocuments to count.
     * @example
     * // Count the number of KycDocuments
     * const count = await prisma.kycDocument.count({
     *   where: {
     *     // ... the filter for the KycDocuments we want to count
     *   }
     * })
    **/
    count<T extends KycDocumentCountArgs>(
      args?: Subset<T, KycDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KycDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KycDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KycDocumentAggregateArgs>(args: Subset<T, KycDocumentAggregateArgs>): Prisma.PrismaPromise<GetKycDocumentAggregateType<T>>

    /**
     * Group by KycDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KycDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KycDocumentGroupByArgs['orderBy'] }
        : { orderBy?: KycDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KycDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKycDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KycDocument model
   */
  readonly fields: KycDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KycDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KycDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the KycDocument model
   */ 
  interface KycDocumentFieldRefs {
    readonly id: FieldRef<"KycDocument", 'String'>
    readonly userId: FieldRef<"KycDocument", 'String'>
    readonly type: FieldRef<"KycDocument", 'String'>
    readonly fileUrl: FieldRef<"KycDocument", 'String'>
    readonly status: FieldRef<"KycDocument", 'String'>
    readonly rejectionReason: FieldRef<"KycDocument", 'String'>
    readonly reviewedBy: FieldRef<"KycDocument", 'String'>
    readonly reviewedAt: FieldRef<"KycDocument", 'DateTime'>
    readonly createdAt: FieldRef<"KycDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"KycDocument", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * KycDocument findUnique
   */
  export type KycDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KycDocument to fetch.
     */
    where: KycDocumentWhereUniqueInput
  }


  /**
   * KycDocument findUniqueOrThrow
   */
  export type KycDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KycDocument to fetch.
     */
    where: KycDocumentWhereUniqueInput
  }


  /**
   * KycDocument findFirst
   */
  export type KycDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KycDocument to fetch.
     */
    where?: KycDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycDocuments to fetch.
     */
    orderBy?: KycDocumentOrderByWithRelationInput | KycDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycDocuments.
     */
    cursor?: KycDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycDocuments.
     */
    distinct?: KycDocumentScalarFieldEnum | KycDocumentScalarFieldEnum[]
  }


  /**
   * KycDocument findFirstOrThrow
   */
  export type KycDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KycDocument to fetch.
     */
    where?: KycDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycDocuments to fetch.
     */
    orderBy?: KycDocumentOrderByWithRelationInput | KycDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycDocuments.
     */
    cursor?: KycDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycDocuments.
     */
    distinct?: KycDocumentScalarFieldEnum | KycDocumentScalarFieldEnum[]
  }


  /**
   * KycDocument findMany
   */
  export type KycDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KycDocuments to fetch.
     */
    where?: KycDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycDocuments to fetch.
     */
    orderBy?: KycDocumentOrderByWithRelationInput | KycDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KycDocuments.
     */
    cursor?: KycDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycDocuments.
     */
    skip?: number
    distinct?: KycDocumentScalarFieldEnum | KycDocumentScalarFieldEnum[]
  }


  /**
   * KycDocument create
   */
  export type KycDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a KycDocument.
     */
    data: XOR<KycDocumentCreateInput, KycDocumentUncheckedCreateInput>
  }


  /**
   * KycDocument createMany
   */
  export type KycDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KycDocuments.
     */
    data: KycDocumentCreateManyInput | KycDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * KycDocument update
   */
  export type KycDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a KycDocument.
     */
    data: XOR<KycDocumentUpdateInput, KycDocumentUncheckedUpdateInput>
    /**
     * Choose, which KycDocument to update.
     */
    where: KycDocumentWhereUniqueInput
  }


  /**
   * KycDocument updateMany
   */
  export type KycDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KycDocuments.
     */
    data: XOR<KycDocumentUpdateManyMutationInput, KycDocumentUncheckedUpdateManyInput>
    /**
     * Filter which KycDocuments to update
     */
    where?: KycDocumentWhereInput
  }


  /**
   * KycDocument upsert
   */
  export type KycDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the KycDocument to update in case it exists.
     */
    where: KycDocumentWhereUniqueInput
    /**
     * In case the KycDocument found by the `where` argument doesn't exist, create a new KycDocument with this data.
     */
    create: XOR<KycDocumentCreateInput, KycDocumentUncheckedCreateInput>
    /**
     * In case the KycDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KycDocumentUpdateInput, KycDocumentUncheckedUpdateInput>
  }


  /**
   * KycDocument delete
   */
  export type KycDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * Filter which KycDocument to delete.
     */
    where: KycDocumentWhereUniqueInput
  }


  /**
   * KycDocument deleteMany
   */
  export type KycDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycDocuments to delete
     */
    where?: KycDocumentWhereInput
  }


  /**
   * KycDocument without action
   */
  export type KycDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KycDocumentInclude<ExtArgs> | null
  }



  /**
   * Model Bike
   */

  export type AggregateBike = {
    _count: BikeCountAggregateOutputType | null
    _avg: BikeAvgAggregateOutputType | null
    _sum: BikeSumAggregateOutputType | null
    _min: BikeMinAggregateOutputType | null
    _max: BikeMaxAggregateOutputType | null
  }

  export type BikeAvgAggregateOutputType = {
    startPrice: number | null
    currentPrice: number | null
    overallGrade: number | null
    engineGrade: number | null
    frontGrade: number | null
    exteriorGrade: number | null
    rearGrade: number | null
    electricGrade: number | null
    frameGrade: number | null
  }

  export type BikeSumAggregateOutputType = {
    startPrice: number | null
    currentPrice: number | null
    overallGrade: number | null
    engineGrade: number | null
    frontGrade: number | null
    exteriorGrade: number | null
    rearGrade: number | null
    electricGrade: number | null
    frameGrade: number | null
  }

  export type BikeMinAggregateOutputType = {
    id: string | null
    bdsId: string | null
    lane: string | null
    auctionNumber: string | null
    auctionDate: string | null
    name: string | null
    maker: string | null
    makerConfirmed: boolean | null
    region: string | null
    inspectionStatus: string | null
    listingType: string | null
    vin: string | null
    engineNumber: string | null
    mileage: string | null
    documentMileage: string | null
    pastMileage: string | null
    color: string | null
    displacement: string | null
    firstRegistration: string | null
    inspection: string | null
    hasParts: string | null
    registrationNumber: string | null
    startPrice: number | null
    currentPrice: number | null
    result: string | null
    historicalRates: string | null
    overallGrade: number | null
    engineGrade: number | null
    frontGrade: number | null
    exteriorGrade: number | null
    rearGrade: number | null
    electricGrade: number | null
    frameGrade: number | null
    awaGrade: string | null
    inspectionDetails: string | null
    awaReport: string | null
    sellerDeclaration: string | null
    images: string | null
    videoUrls: string | null
    remarks: string | null
    status: string | null
    importedAt: Date | null
    updatedAt: Date | null
  }

  export type BikeMaxAggregateOutputType = {
    id: string | null
    bdsId: string | null
    lane: string | null
    auctionNumber: string | null
    auctionDate: string | null
    name: string | null
    maker: string | null
    makerConfirmed: boolean | null
    region: string | null
    inspectionStatus: string | null
    listingType: string | null
    vin: string | null
    engineNumber: string | null
    mileage: string | null
    documentMileage: string | null
    pastMileage: string | null
    color: string | null
    displacement: string | null
    firstRegistration: string | null
    inspection: string | null
    hasParts: string | null
    registrationNumber: string | null
    startPrice: number | null
    currentPrice: number | null
    result: string | null
    historicalRates: string | null
    overallGrade: number | null
    engineGrade: number | null
    frontGrade: number | null
    exteriorGrade: number | null
    rearGrade: number | null
    electricGrade: number | null
    frameGrade: number | null
    awaGrade: string | null
    inspectionDetails: string | null
    awaReport: string | null
    sellerDeclaration: string | null
    images: string | null
    videoUrls: string | null
    remarks: string | null
    status: string | null
    importedAt: Date | null
    updatedAt: Date | null
  }

  export type BikeCountAggregateOutputType = {
    id: number
    bdsId: number
    lane: number
    auctionNumber: number
    auctionDate: number
    name: number
    maker: number
    makerConfirmed: number
    region: number
    inspectionStatus: number
    listingType: number
    vin: number
    engineNumber: number
    mileage: number
    documentMileage: number
    pastMileage: number
    color: number
    displacement: number
    firstRegistration: number
    inspection: number
    hasParts: number
    registrationNumber: number
    startPrice: number
    currentPrice: number
    result: number
    historicalRates: number
    overallGrade: number
    engineGrade: number
    frontGrade: number
    exteriorGrade: number
    rearGrade: number
    electricGrade: number
    frameGrade: number
    awaGrade: number
    inspectionDetails: number
    awaReport: number
    sellerDeclaration: number
    images: number
    videoUrls: number
    remarks: number
    status: number
    importedAt: number
    updatedAt: number
    _all: number
  }


  export type BikeAvgAggregateInputType = {
    startPrice?: true
    currentPrice?: true
    overallGrade?: true
    engineGrade?: true
    frontGrade?: true
    exteriorGrade?: true
    rearGrade?: true
    electricGrade?: true
    frameGrade?: true
  }

  export type BikeSumAggregateInputType = {
    startPrice?: true
    currentPrice?: true
    overallGrade?: true
    engineGrade?: true
    frontGrade?: true
    exteriorGrade?: true
    rearGrade?: true
    electricGrade?: true
    frameGrade?: true
  }

  export type BikeMinAggregateInputType = {
    id?: true
    bdsId?: true
    lane?: true
    auctionNumber?: true
    auctionDate?: true
    name?: true
    maker?: true
    makerConfirmed?: true
    region?: true
    inspectionStatus?: true
    listingType?: true
    vin?: true
    engineNumber?: true
    mileage?: true
    documentMileage?: true
    pastMileage?: true
    color?: true
    displacement?: true
    firstRegistration?: true
    inspection?: true
    hasParts?: true
    registrationNumber?: true
    startPrice?: true
    currentPrice?: true
    result?: true
    historicalRates?: true
    overallGrade?: true
    engineGrade?: true
    frontGrade?: true
    exteriorGrade?: true
    rearGrade?: true
    electricGrade?: true
    frameGrade?: true
    awaGrade?: true
    inspectionDetails?: true
    awaReport?: true
    sellerDeclaration?: true
    images?: true
    videoUrls?: true
    remarks?: true
    status?: true
    importedAt?: true
    updatedAt?: true
  }

  export type BikeMaxAggregateInputType = {
    id?: true
    bdsId?: true
    lane?: true
    auctionNumber?: true
    auctionDate?: true
    name?: true
    maker?: true
    makerConfirmed?: true
    region?: true
    inspectionStatus?: true
    listingType?: true
    vin?: true
    engineNumber?: true
    mileage?: true
    documentMileage?: true
    pastMileage?: true
    color?: true
    displacement?: true
    firstRegistration?: true
    inspection?: true
    hasParts?: true
    registrationNumber?: true
    startPrice?: true
    currentPrice?: true
    result?: true
    historicalRates?: true
    overallGrade?: true
    engineGrade?: true
    frontGrade?: true
    exteriorGrade?: true
    rearGrade?: true
    electricGrade?: true
    frameGrade?: true
    awaGrade?: true
    inspectionDetails?: true
    awaReport?: true
    sellerDeclaration?: true
    images?: true
    videoUrls?: true
    remarks?: true
    status?: true
    importedAt?: true
    updatedAt?: true
  }

  export type BikeCountAggregateInputType = {
    id?: true
    bdsId?: true
    lane?: true
    auctionNumber?: true
    auctionDate?: true
    name?: true
    maker?: true
    makerConfirmed?: true
    region?: true
    inspectionStatus?: true
    listingType?: true
    vin?: true
    engineNumber?: true
    mileage?: true
    documentMileage?: true
    pastMileage?: true
    color?: true
    displacement?: true
    firstRegistration?: true
    inspection?: true
    hasParts?: true
    registrationNumber?: true
    startPrice?: true
    currentPrice?: true
    result?: true
    historicalRates?: true
    overallGrade?: true
    engineGrade?: true
    frontGrade?: true
    exteriorGrade?: true
    rearGrade?: true
    electricGrade?: true
    frameGrade?: true
    awaGrade?: true
    inspectionDetails?: true
    awaReport?: true
    sellerDeclaration?: true
    images?: true
    videoUrls?: true
    remarks?: true
    status?: true
    importedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bike to aggregate.
     */
    where?: BikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bikes to fetch.
     */
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bikes
    **/
    _count?: true | BikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BikeMaxAggregateInputType
  }

  export type GetBikeAggregateType<T extends BikeAggregateArgs> = {
        [P in keyof T & keyof AggregateBike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBike[P]>
      : GetScalarType<T[P], AggregateBike[P]>
  }




  export type BikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BikeWhereInput
    orderBy?: BikeOrderByWithAggregationInput | BikeOrderByWithAggregationInput[]
    by: BikeScalarFieldEnum[] | BikeScalarFieldEnum
    having?: BikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BikeCountAggregateInputType | true
    _avg?: BikeAvgAggregateInputType
    _sum?: BikeSumAggregateInputType
    _min?: BikeMinAggregateInputType
    _max?: BikeMaxAggregateInputType
  }

  export type BikeGroupByOutputType = {
    id: string
    bdsId: string
    lane: string | null
    auctionNumber: string | null
    auctionDate: string | null
    name: string
    maker: string | null
    makerConfirmed: boolean
    region: string | null
    inspectionStatus: string | null
    listingType: string | null
    vin: string | null
    engineNumber: string | null
    mileage: string | null
    documentMileage: string | null
    pastMileage: string | null
    color: string | null
    displacement: string | null
    firstRegistration: string | null
    inspection: string | null
    hasParts: string | null
    registrationNumber: string | null
    startPrice: number
    currentPrice: number
    result: string | null
    historicalRates: string | null
    overallGrade: number | null
    engineGrade: number | null
    frontGrade: number | null
    exteriorGrade: number | null
    rearGrade: number | null
    electricGrade: number | null
    frameGrade: number | null
    awaGrade: string | null
    inspectionDetails: string | null
    awaReport: string | null
    sellerDeclaration: string | null
    images: string | null
    videoUrls: string | null
    remarks: string | null
    status: string
    importedAt: Date
    updatedAt: Date
    _count: BikeCountAggregateOutputType | null
    _avg: BikeAvgAggregateOutputType | null
    _sum: BikeSumAggregateOutputType | null
    _min: BikeMinAggregateOutputType | null
    _max: BikeMaxAggregateOutputType | null
  }

  type GetBikeGroupByPayload<T extends BikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BikeGroupByOutputType[P]>
            : GetScalarType<T[P], BikeGroupByOutputType[P]>
        }
      >
    >


  export type BikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bdsId?: boolean
    lane?: boolean
    auctionNumber?: boolean
    auctionDate?: boolean
    name?: boolean
    maker?: boolean
    makerConfirmed?: boolean
    region?: boolean
    inspectionStatus?: boolean
    listingType?: boolean
    vin?: boolean
    engineNumber?: boolean
    mileage?: boolean
    documentMileage?: boolean
    pastMileage?: boolean
    color?: boolean
    displacement?: boolean
    firstRegistration?: boolean
    inspection?: boolean
    hasParts?: boolean
    registrationNumber?: boolean
    startPrice?: boolean
    currentPrice?: boolean
    result?: boolean
    historicalRates?: boolean
    overallGrade?: boolean
    engineGrade?: boolean
    frontGrade?: boolean
    exteriorGrade?: boolean
    rearGrade?: boolean
    electricGrade?: boolean
    frameGrade?: boolean
    awaGrade?: boolean
    inspectionDetails?: boolean
    awaReport?: boolean
    sellerDeclaration?: boolean
    images?: boolean
    videoUrls?: boolean
    remarks?: boolean
    status?: boolean
    importedAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Bike$ordersArgs<ExtArgs>
    bids?: boolean | Bike$bidsArgs<ExtArgs>
    _count?: boolean | BikeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bike"]>

  export type BikeSelectScalar = {
    id?: boolean
    bdsId?: boolean
    lane?: boolean
    auctionNumber?: boolean
    auctionDate?: boolean
    name?: boolean
    maker?: boolean
    makerConfirmed?: boolean
    region?: boolean
    inspectionStatus?: boolean
    listingType?: boolean
    vin?: boolean
    engineNumber?: boolean
    mileage?: boolean
    documentMileage?: boolean
    pastMileage?: boolean
    color?: boolean
    displacement?: boolean
    firstRegistration?: boolean
    inspection?: boolean
    hasParts?: boolean
    registrationNumber?: boolean
    startPrice?: boolean
    currentPrice?: boolean
    result?: boolean
    historicalRates?: boolean
    overallGrade?: boolean
    engineGrade?: boolean
    frontGrade?: boolean
    exteriorGrade?: boolean
    rearGrade?: boolean
    electricGrade?: boolean
    frameGrade?: boolean
    awaGrade?: boolean
    inspectionDetails?: boolean
    awaReport?: boolean
    sellerDeclaration?: boolean
    images?: boolean
    videoUrls?: boolean
    remarks?: boolean
    status?: boolean
    importedAt?: boolean
    updatedAt?: boolean
  }

  export type BikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Bike$ordersArgs<ExtArgs>
    bids?: boolean | Bike$bidsArgs<ExtArgs>
    _count?: boolean | BikeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bike"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      bids: Prisma.$BidPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bdsId: string
      lane: string | null
      auctionNumber: string | null
      auctionDate: string | null
      name: string
      maker: string | null
      makerConfirmed: boolean
      region: string | null
      inspectionStatus: string | null
      listingType: string | null
      vin: string | null
      engineNumber: string | null
      mileage: string | null
      documentMileage: string | null
      pastMileage: string | null
      color: string | null
      displacement: string | null
      firstRegistration: string | null
      inspection: string | null
      hasParts: string | null
      registrationNumber: string | null
      startPrice: number
      currentPrice: number
      result: string | null
      historicalRates: string | null
      overallGrade: number | null
      engineGrade: number | null
      frontGrade: number | null
      exteriorGrade: number | null
      rearGrade: number | null
      electricGrade: number | null
      frameGrade: number | null
      awaGrade: string | null
      inspectionDetails: string | null
      awaReport: string | null
      sellerDeclaration: string | null
      images: string | null
      videoUrls: string | null
      remarks: string | null
      status: string
      importedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bike"]>
    composites: {}
  }


  type BikeGetPayload<S extends boolean | null | undefined | BikeDefaultArgs> = $Result.GetResult<Prisma.$BikePayload, S>

  type BikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BikeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BikeCountAggregateInputType | true
    }

  export interface BikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bike'], meta: { name: 'Bike' } }
    /**
     * Find zero or one Bike that matches the filter.
     * @param {BikeFindUniqueArgs} args - Arguments to find a Bike
     * @example
     * // Get one Bike
     * const bike = await prisma.bike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BikeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BikeFindUniqueArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bike that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BikeFindUniqueOrThrowArgs} args - Arguments to find a Bike
     * @example
     * // Get one Bike
     * const bike = await prisma.bike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BikeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BikeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeFindFirstArgs} args - Arguments to find a Bike
     * @example
     * // Get one Bike
     * const bike = await prisma.bike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BikeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BikeFindFirstArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeFindFirstOrThrowArgs} args - Arguments to find a Bike
     * @example
     * // Get one Bike
     * const bike = await prisma.bike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BikeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BikeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bikes
     * const bikes = await prisma.bike.findMany()
     * 
     * // Get first 10 Bikes
     * const bikes = await prisma.bike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bikeWithIdOnly = await prisma.bike.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BikeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BikeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bike.
     * @param {BikeCreateArgs} args - Arguments to create a Bike.
     * @example
     * // Create one Bike
     * const Bike = await prisma.bike.create({
     *   data: {
     *     // ... data to create a Bike
     *   }
     * })
     * 
    **/
    create<T extends BikeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BikeCreateArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bikes.
     *     @param {BikeCreateManyArgs} args - Arguments to create many Bikes.
     *     @example
     *     // Create many Bikes
     *     const bike = await prisma.bike.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BikeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BikeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bike.
     * @param {BikeDeleteArgs} args - Arguments to delete one Bike.
     * @example
     * // Delete one Bike
     * const Bike = await prisma.bike.delete({
     *   where: {
     *     // ... filter to delete one Bike
     *   }
     * })
     * 
    **/
    delete<T extends BikeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BikeDeleteArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bike.
     * @param {BikeUpdateArgs} args - Arguments to update one Bike.
     * @example
     * // Update one Bike
     * const bike = await prisma.bike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BikeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BikeUpdateArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bikes.
     * @param {BikeDeleteManyArgs} args - Arguments to filter Bikes to delete.
     * @example
     * // Delete a few Bikes
     * const { count } = await prisma.bike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BikeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BikeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bikes
     * const bike = await prisma.bike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BikeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BikeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bike.
     * @param {BikeUpsertArgs} args - Arguments to update or create a Bike.
     * @example
     * // Update or create a Bike
     * const bike = await prisma.bike.upsert({
     *   create: {
     *     // ... data to create a Bike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bike we want to update
     *   }
     * })
    **/
    upsert<T extends BikeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BikeUpsertArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeCountArgs} args - Arguments to filter Bikes to count.
     * @example
     * // Count the number of Bikes
     * const count = await prisma.bike.count({
     *   where: {
     *     // ... the filter for the Bikes we want to count
     *   }
     * })
    **/
    count<T extends BikeCountArgs>(
      args?: Subset<T, BikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BikeAggregateArgs>(args: Subset<T, BikeAggregateArgs>): Prisma.PrismaPromise<GetBikeAggregateType<T>>

    /**
     * Group by Bike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BikeGroupByArgs['orderBy'] }
        : { orderBy?: BikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bike model
   */
  readonly fields: BikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders<T extends Bike$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Bike$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    bids<T extends Bike$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Bike$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bike model
   */ 
  interface BikeFieldRefs {
    readonly id: FieldRef<"Bike", 'String'>
    readonly bdsId: FieldRef<"Bike", 'String'>
    readonly lane: FieldRef<"Bike", 'String'>
    readonly auctionNumber: FieldRef<"Bike", 'String'>
    readonly auctionDate: FieldRef<"Bike", 'String'>
    readonly name: FieldRef<"Bike", 'String'>
    readonly maker: FieldRef<"Bike", 'String'>
    readonly makerConfirmed: FieldRef<"Bike", 'Boolean'>
    readonly region: FieldRef<"Bike", 'String'>
    readonly inspectionStatus: FieldRef<"Bike", 'String'>
    readonly listingType: FieldRef<"Bike", 'String'>
    readonly vin: FieldRef<"Bike", 'String'>
    readonly engineNumber: FieldRef<"Bike", 'String'>
    readonly mileage: FieldRef<"Bike", 'String'>
    readonly documentMileage: FieldRef<"Bike", 'String'>
    readonly pastMileage: FieldRef<"Bike", 'String'>
    readonly color: FieldRef<"Bike", 'String'>
    readonly displacement: FieldRef<"Bike", 'String'>
    readonly firstRegistration: FieldRef<"Bike", 'String'>
    readonly inspection: FieldRef<"Bike", 'String'>
    readonly hasParts: FieldRef<"Bike", 'String'>
    readonly registrationNumber: FieldRef<"Bike", 'String'>
    readonly startPrice: FieldRef<"Bike", 'Int'>
    readonly currentPrice: FieldRef<"Bike", 'Int'>
    readonly result: FieldRef<"Bike", 'String'>
    readonly historicalRates: FieldRef<"Bike", 'String'>
    readonly overallGrade: FieldRef<"Bike", 'Float'>
    readonly engineGrade: FieldRef<"Bike", 'Float'>
    readonly frontGrade: FieldRef<"Bike", 'Float'>
    readonly exteriorGrade: FieldRef<"Bike", 'Float'>
    readonly rearGrade: FieldRef<"Bike", 'Float'>
    readonly electricGrade: FieldRef<"Bike", 'Float'>
    readonly frameGrade: FieldRef<"Bike", 'Float'>
    readonly awaGrade: FieldRef<"Bike", 'String'>
    readonly inspectionDetails: FieldRef<"Bike", 'String'>
    readonly awaReport: FieldRef<"Bike", 'String'>
    readonly sellerDeclaration: FieldRef<"Bike", 'String'>
    readonly images: FieldRef<"Bike", 'String'>
    readonly videoUrls: FieldRef<"Bike", 'String'>
    readonly remarks: FieldRef<"Bike", 'String'>
    readonly status: FieldRef<"Bike", 'String'>
    readonly importedAt: FieldRef<"Bike", 'DateTime'>
    readonly updatedAt: FieldRef<"Bike", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Bike findUnique
   */
  export type BikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bike to fetch.
     */
    where: BikeWhereUniqueInput
  }


  /**
   * Bike findUniqueOrThrow
   */
  export type BikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bike to fetch.
     */
    where: BikeWhereUniqueInput
  }


  /**
   * Bike findFirst
   */
  export type BikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bike to fetch.
     */
    where?: BikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bikes to fetch.
     */
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bikes.
     */
    cursor?: BikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bikes.
     */
    distinct?: BikeScalarFieldEnum | BikeScalarFieldEnum[]
  }


  /**
   * Bike findFirstOrThrow
   */
  export type BikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bike to fetch.
     */
    where?: BikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bikes to fetch.
     */
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bikes.
     */
    cursor?: BikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bikes.
     */
    distinct?: BikeScalarFieldEnum | BikeScalarFieldEnum[]
  }


  /**
   * Bike findMany
   */
  export type BikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bikes to fetch.
     */
    where?: BikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bikes to fetch.
     */
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bikes.
     */
    cursor?: BikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bikes.
     */
    skip?: number
    distinct?: BikeScalarFieldEnum | BikeScalarFieldEnum[]
  }


  /**
   * Bike create
   */
  export type BikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Bike.
     */
    data: XOR<BikeCreateInput, BikeUncheckedCreateInput>
  }


  /**
   * Bike createMany
   */
  export type BikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bikes.
     */
    data: BikeCreateManyInput | BikeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Bike update
   */
  export type BikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Bike.
     */
    data: XOR<BikeUpdateInput, BikeUncheckedUpdateInput>
    /**
     * Choose, which Bike to update.
     */
    where: BikeWhereUniqueInput
  }


  /**
   * Bike updateMany
   */
  export type BikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bikes.
     */
    data: XOR<BikeUpdateManyMutationInput, BikeUncheckedUpdateManyInput>
    /**
     * Filter which Bikes to update
     */
    where?: BikeWhereInput
  }


  /**
   * Bike upsert
   */
  export type BikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Bike to update in case it exists.
     */
    where: BikeWhereUniqueInput
    /**
     * In case the Bike found by the `where` argument doesn't exist, create a new Bike with this data.
     */
    create: XOR<BikeCreateInput, BikeUncheckedCreateInput>
    /**
     * In case the Bike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BikeUpdateInput, BikeUncheckedUpdateInput>
  }


  /**
   * Bike delete
   */
  export type BikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter which Bike to delete.
     */
    where: BikeWhereUniqueInput
  }


  /**
   * Bike deleteMany
   */
  export type BikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bikes to delete
     */
    where?: BikeWhereInput
  }


  /**
   * Bike.orders
   */
  export type Bike$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Bike.bids
   */
  export type Bike$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }


  /**
   * Bike without action
   */
  export type BikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
  }



  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalAmount: number | null
    exchangeRate: number | null
  }

  export type OrderSumAggregateOutputType = {
    totalAmount: number | null
    exchangeRate: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bikeId: string | null
    totalAmount: number | null
    currency: string | null
    exchangeRate: number | null
    paymentMethod: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bikeId: string | null
    totalAmount: number | null
    currency: string | null
    exchangeRate: number | null
    paymentMethod: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    bikeId: number
    totalAmount: number
    currency: number
    exchangeRate: number
    paymentMethod: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalAmount?: true
    exchangeRate?: true
  }

  export type OrderSumAggregateInputType = {
    totalAmount?: true
    exchangeRate?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    bikeId?: true
    totalAmount?: true
    currency?: true
    exchangeRate?: true
    paymentMethod?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    bikeId?: true
    totalAmount?: true
    currency?: true
    exchangeRate?: true
    paymentMethod?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    bikeId?: true
    totalAmount?: true
    currency?: true
    exchangeRate?: true
    paymentMethod?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    bikeId: string
    totalAmount: number
    currency: string
    exchangeRate: number
    paymentMethod: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bikeId?: boolean
    totalAmount?: boolean
    currency?: boolean
    exchangeRate?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bike?: boolean | BikeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    bikeId?: boolean
    totalAmount?: boolean
    currency?: boolean
    exchangeRate?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bike?: boolean | BikeDefaultArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bike: Prisma.$BikePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bikeId: string
      totalAmount: number
      currency: string
      exchangeRate: number
      paymentMethod: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    bike<T extends BikeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BikeDefaultArgs<ExtArgs>>): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly bikeId: FieldRef<"Order", 'String'>
    readonly totalAmount: FieldRef<"Order", 'Int'>
    readonly currency: FieldRef<"Order", 'String'>
    readonly exchangeRate: FieldRef<"Order", 'Float'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
  }



  /**
   * Model Bid
   */

  export type AggregateBid = {
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  export type BidAvgAggregateOutputType = {
    amount: number | null
  }

  export type BidSumAggregateOutputType = {
    amount: number | null
  }

  export type BidMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bikeId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    createdAt: Date | null
  }

  export type BidMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bikeId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    createdAt: Date | null
  }

  export type BidCountAggregateOutputType = {
    id: number
    userId: number
    bikeId: number
    amount: number
    currency: number
    status: number
    createdAt: number
    _all: number
  }


  export type BidAvgAggregateInputType = {
    amount?: true
  }

  export type BidSumAggregateInputType = {
    amount?: true
  }

  export type BidMinAggregateInputType = {
    id?: true
    userId?: true
    bikeId?: true
    amount?: true
    currency?: true
    status?: true
    createdAt?: true
  }

  export type BidMaxAggregateInputType = {
    id?: true
    userId?: true
    bikeId?: true
    amount?: true
    currency?: true
    status?: true
    createdAt?: true
  }

  export type BidCountAggregateInputType = {
    id?: true
    userId?: true
    bikeId?: true
    amount?: true
    currency?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type BidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bid to aggregate.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bids
    **/
    _count?: true | BidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BidMaxAggregateInputType
  }

  export type GetBidAggregateType<T extends BidAggregateArgs> = {
        [P in keyof T & keyof AggregateBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBid[P]>
      : GetScalarType<T[P], AggregateBid[P]>
  }




  export type BidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
    orderBy?: BidOrderByWithAggregationInput | BidOrderByWithAggregationInput[]
    by: BidScalarFieldEnum[] | BidScalarFieldEnum
    having?: BidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BidCountAggregateInputType | true
    _avg?: BidAvgAggregateInputType
    _sum?: BidSumAggregateInputType
    _min?: BidMinAggregateInputType
    _max?: BidMaxAggregateInputType
  }

  export type BidGroupByOutputType = {
    id: string
    userId: string
    bikeId: string
    amount: number
    currency: string
    status: string
    createdAt: Date
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  type GetBidGroupByPayload<T extends BidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BidGroupByOutputType[P]>
            : GetScalarType<T[P], BidGroupByOutputType[P]>
        }
      >
    >


  export type BidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bikeId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bike?: boolean | BikeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectScalar = {
    id?: boolean
    userId?: boolean
    bikeId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type BidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bike?: boolean | BikeDefaultArgs<ExtArgs>
  }


  export type $BidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bid"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bike: Prisma.$BikePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bikeId: string
      amount: number
      currency: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["bid"]>
    composites: {}
  }


  type BidGetPayload<S extends boolean | null | undefined | BidDefaultArgs> = $Result.GetResult<Prisma.$BidPayload, S>

  type BidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BidFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BidCountAggregateInputType | true
    }

  export interface BidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bid'], meta: { name: 'Bid' } }
    /**
     * Find zero or one Bid that matches the filter.
     * @param {BidFindUniqueArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BidFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BidFindUniqueArgs<ExtArgs>>
    ): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bid that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BidFindUniqueOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BidFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BidFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BidFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BidFindFirstArgs<ExtArgs>>
    ): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BidFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BidFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bids
     * const bids = await prisma.bid.findMany()
     * 
     * // Get first 10 Bids
     * const bids = await prisma.bid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bidWithIdOnly = await prisma.bid.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BidFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BidFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bid.
     * @param {BidCreateArgs} args - Arguments to create a Bid.
     * @example
     * // Create one Bid
     * const Bid = await prisma.bid.create({
     *   data: {
     *     // ... data to create a Bid
     *   }
     * })
     * 
    **/
    create<T extends BidCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BidCreateArgs<ExtArgs>>
    ): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bids.
     *     @param {BidCreateManyArgs} args - Arguments to create many Bids.
     *     @example
     *     // Create many Bids
     *     const bid = await prisma.bid.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BidCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BidCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bid.
     * @param {BidDeleteArgs} args - Arguments to delete one Bid.
     * @example
     * // Delete one Bid
     * const Bid = await prisma.bid.delete({
     *   where: {
     *     // ... filter to delete one Bid
     *   }
     * })
     * 
    **/
    delete<T extends BidDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BidDeleteArgs<ExtArgs>>
    ): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bid.
     * @param {BidUpdateArgs} args - Arguments to update one Bid.
     * @example
     * // Update one Bid
     * const bid = await prisma.bid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BidUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BidUpdateArgs<ExtArgs>>
    ): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bids.
     * @param {BidDeleteManyArgs} args - Arguments to filter Bids to delete.
     * @example
     * // Delete a few Bids
     * const { count } = await prisma.bid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BidDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BidDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BidUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BidUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bid.
     * @param {BidUpsertArgs} args - Arguments to update or create a Bid.
     * @example
     * // Update or create a Bid
     * const bid = await prisma.bid.upsert({
     *   create: {
     *     // ... data to create a Bid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bid we want to update
     *   }
     * })
    **/
    upsert<T extends BidUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BidUpsertArgs<ExtArgs>>
    ): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidCountArgs} args - Arguments to filter Bids to count.
     * @example
     * // Count the number of Bids
     * const count = await prisma.bid.count({
     *   where: {
     *     // ... the filter for the Bids we want to count
     *   }
     * })
    **/
    count<T extends BidCountArgs>(
      args?: Subset<T, BidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BidAggregateArgs>(args: Subset<T, BidAggregateArgs>): Prisma.PrismaPromise<GetBidAggregateType<T>>

    /**
     * Group by Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BidGroupByArgs['orderBy'] }
        : { orderBy?: BidGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bid model
   */
  readonly fields: BidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    bike<T extends BikeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BikeDefaultArgs<ExtArgs>>): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bid model
   */ 
  interface BidFieldRefs {
    readonly id: FieldRef<"Bid", 'String'>
    readonly userId: FieldRef<"Bid", 'String'>
    readonly bikeId: FieldRef<"Bid", 'String'>
    readonly amount: FieldRef<"Bid", 'Int'>
    readonly currency: FieldRef<"Bid", 'String'>
    readonly status: FieldRef<"Bid", 'String'>
    readonly createdAt: FieldRef<"Bid", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Bid findUnique
   */
  export type BidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }


  /**
   * Bid findUniqueOrThrow
   */
  export type BidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }


  /**
   * Bid findFirst
   */
  export type BidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }


  /**
   * Bid findFirstOrThrow
   */
  export type BidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }


  /**
   * Bid findMany
   */
  export type BidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bids to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }


  /**
   * Bid create
   */
  export type BidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to create a Bid.
     */
    data: XOR<BidCreateInput, BidUncheckedCreateInput>
  }


  /**
   * Bid createMany
   */
  export type BidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Bid update
   */
  export type BidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to update a Bid.
     */
    data: XOR<BidUpdateInput, BidUncheckedUpdateInput>
    /**
     * Choose, which Bid to update.
     */
    where: BidWhereUniqueInput
  }


  /**
   * Bid updateMany
   */
  export type BidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
  }


  /**
   * Bid upsert
   */
  export type BidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The filter to search for the Bid to update in case it exists.
     */
    where: BidWhereUniqueInput
    /**
     * In case the Bid found by the `where` argument doesn't exist, create a new Bid with this data.
     */
    create: XOR<BidCreateInput, BidUncheckedCreateInput>
    /**
     * In case the Bid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BidUpdateInput, BidUncheckedUpdateInput>
  }


  /**
   * Bid delete
   */
  export type BidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter which Bid to delete.
     */
    where: BidWhereUniqueInput
  }


  /**
   * Bid deleteMany
   */
  export type BidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bids to delete
     */
    where?: BidWhereInput
  }


  /**
   * Bid without action
   */
  export type BidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BidInclude<ExtArgs> | null
  }



  /**
   * Model Container
   */

  export type AggregateContainer = {
    _count: ContainerCountAggregateOutputType | null
    _avg: ContainerAvgAggregateOutputType | null
    _sum: ContainerSumAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  export type ContainerAvgAggregateOutputType = {
    capacity: number | null
    filled: number | null
  }

  export type ContainerSumAggregateOutputType = {
    capacity: number | null
    filled: number | null
  }

  export type ContainerMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    status: string | null
    destination: string | null
    capacity: number | null
    filled: number | null
    etd: string | null
    eta: string | null
    price: string | null
    features: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContainerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    status: string | null
    destination: string | null
    capacity: number | null
    filled: number | null
    etd: string | null
    eta: string | null
    price: string | null
    features: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContainerCountAggregateOutputType = {
    id: number
    name: number
    type: number
    status: number
    destination: number
    capacity: number
    filled: number
    etd: number
    eta: number
    price: number
    features: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContainerAvgAggregateInputType = {
    capacity?: true
    filled?: true
  }

  export type ContainerSumAggregateInputType = {
    capacity?: true
    filled?: true
  }

  export type ContainerMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    destination?: true
    capacity?: true
    filled?: true
    etd?: true
    eta?: true
    price?: true
    features?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContainerMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    destination?: true
    capacity?: true
    filled?: true
    etd?: true
    eta?: true
    price?: true
    features?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContainerCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    destination?: true
    capacity?: true
    filled?: true
    etd?: true
    eta?: true
    price?: true
    features?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContainerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Container to aggregate.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Containers
    **/
    _count?: true | ContainerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContainerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContainerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContainerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContainerMaxAggregateInputType
  }

  export type GetContainerAggregateType<T extends ContainerAggregateArgs> = {
        [P in keyof T & keyof AggregateContainer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContainer[P]>
      : GetScalarType<T[P], AggregateContainer[P]>
  }




  export type ContainerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerWhereInput
    orderBy?: ContainerOrderByWithAggregationInput | ContainerOrderByWithAggregationInput[]
    by: ContainerScalarFieldEnum[] | ContainerScalarFieldEnum
    having?: ContainerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContainerCountAggregateInputType | true
    _avg?: ContainerAvgAggregateInputType
    _sum?: ContainerSumAggregateInputType
    _min?: ContainerMinAggregateInputType
    _max?: ContainerMaxAggregateInputType
  }

  export type ContainerGroupByOutputType = {
    id: string
    name: string
    type: string
    status: string
    destination: string
    capacity: number
    filled: number
    etd: string | null
    eta: string | null
    price: string | null
    features: string
    createdAt: Date
    updatedAt: Date
    _count: ContainerCountAggregateOutputType | null
    _avg: ContainerAvgAggregateOutputType | null
    _sum: ContainerSumAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  type GetContainerGroupByPayload<T extends ContainerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContainerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContainerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContainerGroupByOutputType[P]>
            : GetScalarType<T[P], ContainerGroupByOutputType[P]>
        }
      >
    >


  export type ContainerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    destination?: boolean
    capacity?: boolean
    filled?: boolean
    etd?: boolean
    eta?: boolean
    price?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["container"]>

  export type ContainerSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    destination?: boolean
    capacity?: boolean
    filled?: boolean
    etd?: boolean
    eta?: boolean
    price?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ContainerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Container"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      status: string
      destination: string
      capacity: number
      filled: number
      etd: string | null
      eta: string | null
      price: string | null
      features: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["container"]>
    composites: {}
  }


  type ContainerGetPayload<S extends boolean | null | undefined | ContainerDefaultArgs> = $Result.GetResult<Prisma.$ContainerPayload, S>

  type ContainerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContainerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContainerCountAggregateInputType | true
    }

  export interface ContainerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Container'], meta: { name: 'Container' } }
    /**
     * Find zero or one Container that matches the filter.
     * @param {ContainerFindUniqueArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContainerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContainerFindUniqueArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Container that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContainerFindUniqueOrThrowArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContainerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContainerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Container that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindFirstArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContainerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContainerFindFirstArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Container that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindFirstOrThrowArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContainerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContainerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Containers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Containers
     * const containers = await prisma.container.findMany()
     * 
     * // Get first 10 Containers
     * const containers = await prisma.container.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const containerWithIdOnly = await prisma.container.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContainerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContainerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Container.
     * @param {ContainerCreateArgs} args - Arguments to create a Container.
     * @example
     * // Create one Container
     * const Container = await prisma.container.create({
     *   data: {
     *     // ... data to create a Container
     *   }
     * })
     * 
    **/
    create<T extends ContainerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContainerCreateArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Containers.
     *     @param {ContainerCreateManyArgs} args - Arguments to create many Containers.
     *     @example
     *     // Create many Containers
     *     const container = await prisma.container.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContainerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContainerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Container.
     * @param {ContainerDeleteArgs} args - Arguments to delete one Container.
     * @example
     * // Delete one Container
     * const Container = await prisma.container.delete({
     *   where: {
     *     // ... filter to delete one Container
     *   }
     * })
     * 
    **/
    delete<T extends ContainerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContainerDeleteArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Container.
     * @param {ContainerUpdateArgs} args - Arguments to update one Container.
     * @example
     * // Update one Container
     * const container = await prisma.container.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContainerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContainerUpdateArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Containers.
     * @param {ContainerDeleteManyArgs} args - Arguments to filter Containers to delete.
     * @example
     * // Delete a few Containers
     * const { count } = await prisma.container.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContainerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContainerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Containers
     * const container = await prisma.container.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContainerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContainerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Container.
     * @param {ContainerUpsertArgs} args - Arguments to update or create a Container.
     * @example
     * // Update or create a Container
     * const container = await prisma.container.upsert({
     *   create: {
     *     // ... data to create a Container
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Container we want to update
     *   }
     * })
    **/
    upsert<T extends ContainerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContainerUpsertArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerCountArgs} args - Arguments to filter Containers to count.
     * @example
     * // Count the number of Containers
     * const count = await prisma.container.count({
     *   where: {
     *     // ... the filter for the Containers we want to count
     *   }
     * })
    **/
    count<T extends ContainerCountArgs>(
      args?: Subset<T, ContainerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContainerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContainerAggregateArgs>(args: Subset<T, ContainerAggregateArgs>): Prisma.PrismaPromise<GetContainerAggregateType<T>>

    /**
     * Group by Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContainerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContainerGroupByArgs['orderBy'] }
        : { orderBy?: ContainerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContainerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContainerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Container model
   */
  readonly fields: ContainerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Container.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContainerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Container model
   */ 
  interface ContainerFieldRefs {
    readonly id: FieldRef<"Container", 'String'>
    readonly name: FieldRef<"Container", 'String'>
    readonly type: FieldRef<"Container", 'String'>
    readonly status: FieldRef<"Container", 'String'>
    readonly destination: FieldRef<"Container", 'String'>
    readonly capacity: FieldRef<"Container", 'Int'>
    readonly filled: FieldRef<"Container", 'Int'>
    readonly etd: FieldRef<"Container", 'String'>
    readonly eta: FieldRef<"Container", 'String'>
    readonly price: FieldRef<"Container", 'String'>
    readonly features: FieldRef<"Container", 'String'>
    readonly createdAt: FieldRef<"Container", 'DateTime'>
    readonly updatedAt: FieldRef<"Container", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Container findUnique
   */
  export type ContainerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where: ContainerWhereUniqueInput
  }


  /**
   * Container findUniqueOrThrow
   */
  export type ContainerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where: ContainerWhereUniqueInput
  }


  /**
   * Container findFirst
   */
  export type ContainerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Containers.
     */
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }


  /**
   * Container findFirstOrThrow
   */
  export type ContainerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Containers.
     */
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }


  /**
   * Container findMany
   */
  export type ContainerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Filter, which Containers to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }


  /**
   * Container create
   */
  export type ContainerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * The data needed to create a Container.
     */
    data: XOR<ContainerCreateInput, ContainerUncheckedCreateInput>
  }


  /**
   * Container createMany
   */
  export type ContainerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Containers.
     */
    data: ContainerCreateManyInput | ContainerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Container update
   */
  export type ContainerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * The data needed to update a Container.
     */
    data: XOR<ContainerUpdateInput, ContainerUncheckedUpdateInput>
    /**
     * Choose, which Container to update.
     */
    where: ContainerWhereUniqueInput
  }


  /**
   * Container updateMany
   */
  export type ContainerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Containers.
     */
    data: XOR<ContainerUpdateManyMutationInput, ContainerUncheckedUpdateManyInput>
    /**
     * Filter which Containers to update
     */
    where?: ContainerWhereInput
  }


  /**
   * Container upsert
   */
  export type ContainerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * The filter to search for the Container to update in case it exists.
     */
    where: ContainerWhereUniqueInput
    /**
     * In case the Container found by the `where` argument doesn't exist, create a new Container with this data.
     */
    create: XOR<ContainerCreateInput, ContainerUncheckedCreateInput>
    /**
     * In case the Container was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContainerUpdateInput, ContainerUncheckedUpdateInput>
  }


  /**
   * Container delete
   */
  export type ContainerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Filter which Container to delete.
     */
    where: ContainerWhereUniqueInput
  }


  /**
   * Container deleteMany
   */
  export type ContainerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Containers to delete
     */
    where?: ContainerWhereInput
  }


  /**
   * Container without action
   */
  export type ContainerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
  }



  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    containerId: string | null
    bikeIds: string | null
    shippingAddress: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    containerId: string | null
    bikeIds: string | null
    shippingAddress: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    userId: number
    containerId: number
    bikeIds: number
    shippingAddress: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationMinAggregateInputType = {
    id?: true
    userId?: true
    containerId?: true
    bikeIds?: true
    shippingAddress?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    userId?: true
    containerId?: true
    bikeIds?: true
    shippingAddress?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    userId?: true
    containerId?: true
    bikeIds?: true
    shippingAddress?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    userId: string
    containerId: string
    bikeIds: string
    shippingAddress: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ReservationCountAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    containerId?: boolean
    bikeIds?: boolean
    shippingAddress?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    userId?: boolean
    containerId?: boolean
    bikeIds?: boolean
    shippingAddress?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      containerId: string
      bikeIds: string
      shippingAddress: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }


  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReservationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reservation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReservationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReservationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
    **/
    create<T extends ReservationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reservations.
     *     @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     *     @example
     *     // Create many Reservations
     *     const reservation = await prisma.reservation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReservationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
    **/
    delete<T extends ReservationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReservationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReservationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReservationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
    **/
    upsert<T extends ReservationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Reservation model
   */ 
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly userId: FieldRef<"Reservation", 'String'>
    readonly containerId: FieldRef<"Reservation", 'String'>
    readonly bikeIds: FieldRef<"Reservation", 'String'>
    readonly shippingAddress: FieldRef<"Reservation", 'String'>
    readonly status: FieldRef<"Reservation", 'String'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }


  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
  }


  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }


  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
  }


  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
  }



  /**
   * Model SystemSetting
   */

  export type AggregateSystemSetting = {
    _count: SystemSettingCountAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  export type SystemSettingMinAggregateOutputType = {
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type SystemSettingMaxAggregateOutputType = {
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type SystemSettingCountAggregateOutputType = {
    key: number
    value: number
    description: number
    updatedAt: number
    _all: number
  }


  export type SystemSettingMinAggregateInputType = {
    key?: true
    value?: true
    description?: true
    updatedAt?: true
  }

  export type SystemSettingMaxAggregateInputType = {
    key?: true
    value?: true
    description?: true
    updatedAt?: true
  }

  export type SystemSettingCountAggregateInputType = {
    key?: true
    value?: true
    description?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSetting to aggregate.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingMaxAggregateInputType
  }

  export type GetSystemSettingAggregateType<T extends SystemSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSetting[P]>
      : GetScalarType<T[P], AggregateSystemSetting[P]>
  }




  export type SystemSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingWhereInput
    orderBy?: SystemSettingOrderByWithAggregationInput | SystemSettingOrderByWithAggregationInput[]
    by: SystemSettingScalarFieldEnum[] | SystemSettingScalarFieldEnum
    having?: SystemSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingCountAggregateInputType | true
    _min?: SystemSettingMinAggregateInputType
    _max?: SystemSettingMaxAggregateInputType
  }

  export type SystemSettingGroupByOutputType = {
    key: string
    value: string
    description: string | null
    updatedAt: Date
    _count: SystemSettingCountAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  type GetSystemSettingGroupByPayload<T extends SystemSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectScalar = {
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }


  export type $SystemSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      description: string | null
      updatedAt: Date
    }, ExtArgs["result"]["systemSetting"]>
    composites: {}
  }


  type SystemSettingGetPayload<S extends boolean | null | undefined | SystemSettingDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingPayload, S>

  type SystemSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemSettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemSettingCountAggregateInputType | true
    }

  export interface SystemSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSetting'], meta: { name: 'SystemSetting' } }
    /**
     * Find zero or one SystemSetting that matches the filter.
     * @param {SystemSettingFindUniqueArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SystemSettingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SystemSettingFindUniqueArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SystemSetting that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SystemSettingFindUniqueOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SystemSettingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemSettingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SystemSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SystemSettingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemSettingFindFirstArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SystemSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SystemSettingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemSettingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const systemSettingWithKeyOnly = await prisma.systemSetting.findMany({ select: { key: true } })
     * 
    **/
    findMany<T extends SystemSettingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemSettingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SystemSetting.
     * @param {SystemSettingCreateArgs} args - Arguments to create a SystemSetting.
     * @example
     * // Create one SystemSetting
     * const SystemSetting = await prisma.systemSetting.create({
     *   data: {
     *     // ... data to create a SystemSetting
     *   }
     * })
     * 
    **/
    create<T extends SystemSettingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemSettingCreateArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SystemSettings.
     *     @param {SystemSettingCreateManyArgs} args - Arguments to create many SystemSettings.
     *     @example
     *     // Create many SystemSettings
     *     const systemSetting = await prisma.systemSetting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SystemSettingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemSettingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemSetting.
     * @param {SystemSettingDeleteArgs} args - Arguments to delete one SystemSetting.
     * @example
     * // Delete one SystemSetting
     * const SystemSetting = await prisma.systemSetting.delete({
     *   where: {
     *     // ... filter to delete one SystemSetting
     *   }
     * })
     * 
    **/
    delete<T extends SystemSettingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SystemSettingDeleteArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SystemSetting.
     * @param {SystemSettingUpdateArgs} args - Arguments to update one SystemSetting.
     * @example
     * // Update one SystemSetting
     * const systemSetting = await prisma.systemSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SystemSettingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemSettingUpdateArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SystemSettingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemSettingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSetting = await prisma.systemSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SystemSettingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SystemSettingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemSetting.
     * @param {SystemSettingUpsertArgs} args - Arguments to update or create a SystemSetting.
     * @example
     * // Update or create a SystemSetting
     * const systemSetting = await prisma.systemSetting.upsert({
     *   create: {
     *     // ... data to create a SystemSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSetting we want to update
     *   }
     * })
    **/
    upsert<T extends SystemSettingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SystemSettingUpsertArgs<ExtArgs>>
    ): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSetting.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingCountArgs>(
      args?: Subset<T, SystemSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemSettingAggregateArgs>(args: Subset<T, SystemSettingAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingAggregateType<T>>

    /**
     * Group by SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSetting model
   */
  readonly fields: SystemSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SystemSetting model
   */ 
  interface SystemSettingFieldRefs {
    readonly key: FieldRef<"SystemSetting", 'String'>
    readonly value: FieldRef<"SystemSetting", 'String'>
    readonly description: FieldRef<"SystemSetting", 'String'>
    readonly updatedAt: FieldRef<"SystemSetting", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * SystemSetting findUnique
   */
  export type SystemSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }


  /**
   * SystemSetting findUniqueOrThrow
   */
  export type SystemSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }


  /**
   * SystemSetting findFirst
   */
  export type SystemSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }


  /**
   * SystemSetting findFirstOrThrow
   */
  export type SystemSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }


  /**
   * SystemSetting findMany
   */
  export type SystemSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }


  /**
   * SystemSetting create
   */
  export type SystemSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * The data needed to create a SystemSetting.
     */
    data: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
  }


  /**
   * SystemSetting createMany
   */
  export type SystemSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SystemSetting update
   */
  export type SystemSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * The data needed to update a SystemSetting.
     */
    data: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
    /**
     * Choose, which SystemSetting to update.
     */
    where: SystemSettingWhereUniqueInput
  }


  /**
   * SystemSetting updateMany
   */
  export type SystemSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingUpdateManyMutationInput, SystemSettingUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingWhereInput
  }


  /**
   * SystemSetting upsert
   */
  export type SystemSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * The filter to search for the SystemSetting to update in case it exists.
     */
    where: SystemSettingWhereUniqueInput
    /**
     * In case the SystemSetting found by the `where` argument doesn't exist, create a new SystemSetting with this data.
     */
    create: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
    /**
     * In case the SystemSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
  }


  /**
   * SystemSetting delete
   */
  export type SystemSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter which SystemSetting to delete.
     */
    where: SystemSettingWhereUniqueInput
  }


  /**
   * SystemSetting deleteMany
   */
  export type SystemSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingWhereInput
  }


  /**
   * SystemSetting without action
   */
  export type SystemSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
  }



  /**
   * Model ImportLog
   */

  export type AggregateImportLog = {
    _count: ImportLogCountAggregateOutputType | null
    _avg: ImportLogAvgAggregateOutputType | null
    _sum: ImportLogSumAggregateOutputType | null
    _min: ImportLogMinAggregateOutputType | null
    _max: ImportLogMaxAggregateOutputType | null
  }

  export type ImportLogAvgAggregateOutputType = {
    bikesImported: number | null
  }

  export type ImportLogSumAggregateOutputType = {
    bikesImported: number | null
  }

  export type ImportLogMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    bikesImported: number | null
    errors: string | null
  }

  export type ImportLogMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    bikesImported: number | null
    errors: string | null
  }

  export type ImportLogCountAggregateOutputType = {
    id: number
    timestamp: number
    bikesImported: number
    errors: number
    _all: number
  }


  export type ImportLogAvgAggregateInputType = {
    bikesImported?: true
  }

  export type ImportLogSumAggregateInputType = {
    bikesImported?: true
  }

  export type ImportLogMinAggregateInputType = {
    id?: true
    timestamp?: true
    bikesImported?: true
    errors?: true
  }

  export type ImportLogMaxAggregateInputType = {
    id?: true
    timestamp?: true
    bikesImported?: true
    errors?: true
  }

  export type ImportLogCountAggregateInputType = {
    id?: true
    timestamp?: true
    bikesImported?: true
    errors?: true
    _all?: true
  }

  export type ImportLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportLog to aggregate.
     */
    where?: ImportLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportLogs to fetch.
     */
    orderBy?: ImportLogOrderByWithRelationInput | ImportLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImportLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImportLogs
    **/
    _count?: true | ImportLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImportLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImportLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportLogMaxAggregateInputType
  }

  export type GetImportLogAggregateType<T extends ImportLogAggregateArgs> = {
        [P in keyof T & keyof AggregateImportLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImportLog[P]>
      : GetScalarType<T[P], AggregateImportLog[P]>
  }




  export type ImportLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportLogWhereInput
    orderBy?: ImportLogOrderByWithAggregationInput | ImportLogOrderByWithAggregationInput[]
    by: ImportLogScalarFieldEnum[] | ImportLogScalarFieldEnum
    having?: ImportLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportLogCountAggregateInputType | true
    _avg?: ImportLogAvgAggregateInputType
    _sum?: ImportLogSumAggregateInputType
    _min?: ImportLogMinAggregateInputType
    _max?: ImportLogMaxAggregateInputType
  }

  export type ImportLogGroupByOutputType = {
    id: string
    timestamp: Date
    bikesImported: number
    errors: string
    _count: ImportLogCountAggregateOutputType | null
    _avg: ImportLogAvgAggregateOutputType | null
    _sum: ImportLogSumAggregateOutputType | null
    _min: ImportLogMinAggregateOutputType | null
    _max: ImportLogMaxAggregateOutputType | null
  }

  type GetImportLogGroupByPayload<T extends ImportLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportLogGroupByOutputType[P]>
            : GetScalarType<T[P], ImportLogGroupByOutputType[P]>
        }
      >
    >


  export type ImportLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    bikesImported?: boolean
    errors?: boolean
  }, ExtArgs["result"]["importLog"]>

  export type ImportLogSelectScalar = {
    id?: boolean
    timestamp?: boolean
    bikesImported?: boolean
    errors?: boolean
  }


  export type $ImportLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImportLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      bikesImported: number
      errors: string
    }, ExtArgs["result"]["importLog"]>
    composites: {}
  }


  type ImportLogGetPayload<S extends boolean | null | undefined | ImportLogDefaultArgs> = $Result.GetResult<Prisma.$ImportLogPayload, S>

  type ImportLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImportLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImportLogCountAggregateInputType | true
    }

  export interface ImportLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImportLog'], meta: { name: 'ImportLog' } }
    /**
     * Find zero or one ImportLog that matches the filter.
     * @param {ImportLogFindUniqueArgs} args - Arguments to find a ImportLog
     * @example
     * // Get one ImportLog
     * const importLog = await prisma.importLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImportLogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImportLogFindUniqueArgs<ExtArgs>>
    ): Prisma__ImportLogClient<$Result.GetResult<Prisma.$ImportLogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ImportLog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImportLogFindUniqueOrThrowArgs} args - Arguments to find a ImportLog
     * @example
     * // Get one ImportLog
     * const importLog = await prisma.importLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImportLogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImportLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImportLogClient<$Result.GetResult<Prisma.$ImportLogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ImportLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportLogFindFirstArgs} args - Arguments to find a ImportLog
     * @example
     * // Get one ImportLog
     * const importLog = await prisma.importLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImportLogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImportLogFindFirstArgs<ExtArgs>>
    ): Prisma__ImportLogClient<$Result.GetResult<Prisma.$ImportLogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ImportLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportLogFindFirstOrThrowArgs} args - Arguments to find a ImportLog
     * @example
     * // Get one ImportLog
     * const importLog = await prisma.importLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImportLogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImportLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImportLogClient<$Result.GetResult<Prisma.$ImportLogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ImportLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportLogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImportLogs
     * const importLogs = await prisma.importLog.findMany()
     * 
     * // Get first 10 ImportLogs
     * const importLogs = await prisma.importLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const importLogWithIdOnly = await prisma.importLog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImportLogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImportLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportLogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ImportLog.
     * @param {ImportLogCreateArgs} args - Arguments to create a ImportLog.
     * @example
     * // Create one ImportLog
     * const ImportLog = await prisma.importLog.create({
     *   data: {
     *     // ... data to create a ImportLog
     *   }
     * })
     * 
    **/
    create<T extends ImportLogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImportLogCreateArgs<ExtArgs>>
    ): Prisma__ImportLogClient<$Result.GetResult<Prisma.$ImportLogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ImportLogs.
     *     @param {ImportLogCreateManyArgs} args - Arguments to create many ImportLogs.
     *     @example
     *     // Create many ImportLogs
     *     const importLog = await prisma.importLog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImportLogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImportLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImportLog.
     * @param {ImportLogDeleteArgs} args - Arguments to delete one ImportLog.
     * @example
     * // Delete one ImportLog
     * const ImportLog = await prisma.importLog.delete({
     *   where: {
     *     // ... filter to delete one ImportLog
     *   }
     * })
     * 
    **/
    delete<T extends ImportLogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImportLogDeleteArgs<ExtArgs>>
    ): Prisma__ImportLogClient<$Result.GetResult<Prisma.$ImportLogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ImportLog.
     * @param {ImportLogUpdateArgs} args - Arguments to update one ImportLog.
     * @example
     * // Update one ImportLog
     * const importLog = await prisma.importLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImportLogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImportLogUpdateArgs<ExtArgs>>
    ): Prisma__ImportLogClient<$Result.GetResult<Prisma.$ImportLogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ImportLogs.
     * @param {ImportLogDeleteManyArgs} args - Arguments to filter ImportLogs to delete.
     * @example
     * // Delete a few ImportLogs
     * const { count } = await prisma.importLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImportLogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImportLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImportLogs
     * const importLog = await prisma.importLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImportLogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImportLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImportLog.
     * @param {ImportLogUpsertArgs} args - Arguments to update or create a ImportLog.
     * @example
     * // Update or create a ImportLog
     * const importLog = await prisma.importLog.upsert({
     *   create: {
     *     // ... data to create a ImportLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImportLog we want to update
     *   }
     * })
    **/
    upsert<T extends ImportLogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImportLogUpsertArgs<ExtArgs>>
    ): Prisma__ImportLogClient<$Result.GetResult<Prisma.$ImportLogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ImportLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportLogCountArgs} args - Arguments to filter ImportLogs to count.
     * @example
     * // Count the number of ImportLogs
     * const count = await prisma.importLog.count({
     *   where: {
     *     // ... the filter for the ImportLogs we want to count
     *   }
     * })
    **/
    count<T extends ImportLogCountArgs>(
      args?: Subset<T, ImportLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImportLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImportLogAggregateArgs>(args: Subset<T, ImportLogAggregateArgs>): Prisma.PrismaPromise<GetImportLogAggregateType<T>>

    /**
     * Group by ImportLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImportLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImportLogGroupByArgs['orderBy'] }
        : { orderBy?: ImportLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImportLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImportLog model
   */
  readonly fields: ImportLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImportLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImportLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ImportLog model
   */ 
  interface ImportLogFieldRefs {
    readonly id: FieldRef<"ImportLog", 'String'>
    readonly timestamp: FieldRef<"ImportLog", 'DateTime'>
    readonly bikesImported: FieldRef<"ImportLog", 'Int'>
    readonly errors: FieldRef<"ImportLog", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ImportLog findUnique
   */
  export type ImportLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportLog
     */
    select?: ImportLogSelect<ExtArgs> | null
    /**
     * Filter, which ImportLog to fetch.
     */
    where: ImportLogWhereUniqueInput
  }


  /**
   * ImportLog findUniqueOrThrow
   */
  export type ImportLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportLog
     */
    select?: ImportLogSelect<ExtArgs> | null
    /**
     * Filter, which ImportLog to fetch.
     */
    where: ImportLogWhereUniqueInput
  }


  /**
   * ImportLog findFirst
   */
  export type ImportLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportLog
     */
    select?: ImportLogSelect<ExtArgs> | null
    /**
     * Filter, which ImportLog to fetch.
     */
    where?: ImportLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportLogs to fetch.
     */
    orderBy?: ImportLogOrderByWithRelationInput | ImportLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportLogs.
     */
    cursor?: ImportLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportLogs.
     */
    distinct?: ImportLogScalarFieldEnum | ImportLogScalarFieldEnum[]
  }


  /**
   * ImportLog findFirstOrThrow
   */
  export type ImportLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportLog
     */
    select?: ImportLogSelect<ExtArgs> | null
    /**
     * Filter, which ImportLog to fetch.
     */
    where?: ImportLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportLogs to fetch.
     */
    orderBy?: ImportLogOrderByWithRelationInput | ImportLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportLogs.
     */
    cursor?: ImportLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportLogs.
     */
    distinct?: ImportLogScalarFieldEnum | ImportLogScalarFieldEnum[]
  }


  /**
   * ImportLog findMany
   */
  export type ImportLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportLog
     */
    select?: ImportLogSelect<ExtArgs> | null
    /**
     * Filter, which ImportLogs to fetch.
     */
    where?: ImportLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportLogs to fetch.
     */
    orderBy?: ImportLogOrderByWithRelationInput | ImportLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImportLogs.
     */
    cursor?: ImportLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportLogs.
     */
    skip?: number
    distinct?: ImportLogScalarFieldEnum | ImportLogScalarFieldEnum[]
  }


  /**
   * ImportLog create
   */
  export type ImportLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportLog
     */
    select?: ImportLogSelect<ExtArgs> | null
    /**
     * The data needed to create a ImportLog.
     */
    data: XOR<ImportLogCreateInput, ImportLogUncheckedCreateInput>
  }


  /**
   * ImportLog createMany
   */
  export type ImportLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImportLogs.
     */
    data: ImportLogCreateManyInput | ImportLogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ImportLog update
   */
  export type ImportLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportLog
     */
    select?: ImportLogSelect<ExtArgs> | null
    /**
     * The data needed to update a ImportLog.
     */
    data: XOR<ImportLogUpdateInput, ImportLogUncheckedUpdateInput>
    /**
     * Choose, which ImportLog to update.
     */
    where: ImportLogWhereUniqueInput
  }


  /**
   * ImportLog updateMany
   */
  export type ImportLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImportLogs.
     */
    data: XOR<ImportLogUpdateManyMutationInput, ImportLogUncheckedUpdateManyInput>
    /**
     * Filter which ImportLogs to update
     */
    where?: ImportLogWhereInput
  }


  /**
   * ImportLog upsert
   */
  export type ImportLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportLog
     */
    select?: ImportLogSelect<ExtArgs> | null
    /**
     * The filter to search for the ImportLog to update in case it exists.
     */
    where: ImportLogWhereUniqueInput
    /**
     * In case the ImportLog found by the `where` argument doesn't exist, create a new ImportLog with this data.
     */
    create: XOR<ImportLogCreateInput, ImportLogUncheckedCreateInput>
    /**
     * In case the ImportLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImportLogUpdateInput, ImportLogUncheckedUpdateInput>
  }


  /**
   * ImportLog delete
   */
  export type ImportLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportLog
     */
    select?: ImportLogSelect<ExtArgs> | null
    /**
     * Filter which ImportLog to delete.
     */
    where: ImportLogWhereUniqueInput
  }


  /**
   * ImportLog deleteMany
   */
  export type ImportLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportLogs to delete
     */
    where?: ImportLogWhereInput
  }


  /**
   * ImportLog without action
   */
  export type ImportLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportLog
     */
    select?: ImportLogSelect<ExtArgs> | null
  }



  /**
   * Model AdminTask
   */

  export type AggregateAdminTask = {
    _count: AdminTaskCountAggregateOutputType | null
    _min: AdminTaskMinAggregateOutputType | null
    _max: AdminTaskMaxAggregateOutputType | null
  }

  export type AdminTaskMinAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    description: string | null
    permissionId: string | null
    completed: boolean | null
    createdAt: Date | null
    dueDate: Date | null
    assignedToName: string | null
  }

  export type AdminTaskMaxAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    description: string | null
    permissionId: string | null
    completed: boolean | null
    createdAt: Date | null
    dueDate: Date | null
    assignedToName: string | null
  }

  export type AdminTaskCountAggregateOutputType = {
    id: number
    type: number
    title: number
    description: number
    permissionId: number
    completed: number
    createdAt: number
    dueDate: number
    assignedToName: number
    _all: number
  }


  export type AdminTaskMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    permissionId?: true
    completed?: true
    createdAt?: true
    dueDate?: true
    assignedToName?: true
  }

  export type AdminTaskMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    permissionId?: true
    completed?: true
    createdAt?: true
    dueDate?: true
    assignedToName?: true
  }

  export type AdminTaskCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    permissionId?: true
    completed?: true
    createdAt?: true
    dueDate?: true
    assignedToName?: true
    _all?: true
  }

  export type AdminTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminTask to aggregate.
     */
    where?: AdminTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminTasks to fetch.
     */
    orderBy?: AdminTaskOrderByWithRelationInput | AdminTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminTasks
    **/
    _count?: true | AdminTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminTaskMaxAggregateInputType
  }

  export type GetAdminTaskAggregateType<T extends AdminTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminTask[P]>
      : GetScalarType<T[P], AggregateAdminTask[P]>
  }




  export type AdminTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminTaskWhereInput
    orderBy?: AdminTaskOrderByWithAggregationInput | AdminTaskOrderByWithAggregationInput[]
    by: AdminTaskScalarFieldEnum[] | AdminTaskScalarFieldEnum
    having?: AdminTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminTaskCountAggregateInputType | true
    _min?: AdminTaskMinAggregateInputType
    _max?: AdminTaskMaxAggregateInputType
  }

  export type AdminTaskGroupByOutputType = {
    id: string
    type: string
    title: string
    description: string | null
    permissionId: string
    completed: boolean
    createdAt: Date
    dueDate: Date | null
    assignedToName: string | null
    _count: AdminTaskCountAggregateOutputType | null
    _min: AdminTaskMinAggregateOutputType | null
    _max: AdminTaskMaxAggregateOutputType | null
  }

  type GetAdminTaskGroupByPayload<T extends AdminTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminTaskGroupByOutputType[P]>
            : GetScalarType<T[P], AdminTaskGroupByOutputType[P]>
        }
      >
    >


  export type AdminTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    permissionId?: boolean
    completed?: boolean
    createdAt?: boolean
    dueDate?: boolean
    assignedToName?: boolean
  }, ExtArgs["result"]["adminTask"]>

  export type AdminTaskSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    permissionId?: boolean
    completed?: boolean
    createdAt?: boolean
    dueDate?: boolean
    assignedToName?: boolean
  }


  export type $AdminTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminTask"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      title: string
      description: string | null
      permissionId: string
      completed: boolean
      createdAt: Date
      dueDate: Date | null
      assignedToName: string | null
    }, ExtArgs["result"]["adminTask"]>
    composites: {}
  }


  type AdminTaskGetPayload<S extends boolean | null | undefined | AdminTaskDefaultArgs> = $Result.GetResult<Prisma.$AdminTaskPayload, S>

  type AdminTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminTaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminTaskCountAggregateInputType | true
    }

  export interface AdminTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminTask'], meta: { name: 'AdminTask' } }
    /**
     * Find zero or one AdminTask that matches the filter.
     * @param {AdminTaskFindUniqueArgs} args - Arguments to find a AdminTask
     * @example
     * // Get one AdminTask
     * const adminTask = await prisma.adminTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminTaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminTaskFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminTaskClient<$Result.GetResult<Prisma.$AdminTaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AdminTask that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminTaskFindUniqueOrThrowArgs} args - Arguments to find a AdminTask
     * @example
     * // Get one AdminTask
     * const adminTask = await prisma.adminTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminTaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminTaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminTaskClient<$Result.GetResult<Prisma.$AdminTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AdminTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTaskFindFirstArgs} args - Arguments to find a AdminTask
     * @example
     * // Get one AdminTask
     * const adminTask = await prisma.adminTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminTaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminTaskFindFirstArgs<ExtArgs>>
    ): Prisma__AdminTaskClient<$Result.GetResult<Prisma.$AdminTaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AdminTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTaskFindFirstOrThrowArgs} args - Arguments to find a AdminTask
     * @example
     * // Get one AdminTask
     * const adminTask = await prisma.adminTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminTaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminTaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminTaskClient<$Result.GetResult<Prisma.$AdminTaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AdminTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminTasks
     * const adminTasks = await prisma.adminTask.findMany()
     * 
     * // Get first 10 AdminTasks
     * const adminTasks = await prisma.adminTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminTaskWithIdOnly = await prisma.adminTask.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminTaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminTaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminTaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AdminTask.
     * @param {AdminTaskCreateArgs} args - Arguments to create a AdminTask.
     * @example
     * // Create one AdminTask
     * const AdminTask = await prisma.adminTask.create({
     *   data: {
     *     // ... data to create a AdminTask
     *   }
     * })
     * 
    **/
    create<T extends AdminTaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminTaskCreateArgs<ExtArgs>>
    ): Prisma__AdminTaskClient<$Result.GetResult<Prisma.$AdminTaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AdminTasks.
     *     @param {AdminTaskCreateManyArgs} args - Arguments to create many AdminTasks.
     *     @example
     *     // Create many AdminTasks
     *     const adminTask = await prisma.adminTask.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminTaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminTaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminTask.
     * @param {AdminTaskDeleteArgs} args - Arguments to delete one AdminTask.
     * @example
     * // Delete one AdminTask
     * const AdminTask = await prisma.adminTask.delete({
     *   where: {
     *     // ... filter to delete one AdminTask
     *   }
     * })
     * 
    **/
    delete<T extends AdminTaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminTaskDeleteArgs<ExtArgs>>
    ): Prisma__AdminTaskClient<$Result.GetResult<Prisma.$AdminTaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AdminTask.
     * @param {AdminTaskUpdateArgs} args - Arguments to update one AdminTask.
     * @example
     * // Update one AdminTask
     * const adminTask = await prisma.adminTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminTaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminTaskUpdateArgs<ExtArgs>>
    ): Prisma__AdminTaskClient<$Result.GetResult<Prisma.$AdminTaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AdminTasks.
     * @param {AdminTaskDeleteManyArgs} args - Arguments to filter AdminTasks to delete.
     * @example
     * // Delete a few AdminTasks
     * const { count } = await prisma.adminTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminTaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminTaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminTasks
     * const adminTask = await prisma.adminTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminTaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminTaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminTask.
     * @param {AdminTaskUpsertArgs} args - Arguments to update or create a AdminTask.
     * @example
     * // Update or create a AdminTask
     * const adminTask = await prisma.adminTask.upsert({
     *   create: {
     *     // ... data to create a AdminTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminTask we want to update
     *   }
     * })
    **/
    upsert<T extends AdminTaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminTaskUpsertArgs<ExtArgs>>
    ): Prisma__AdminTaskClient<$Result.GetResult<Prisma.$AdminTaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AdminTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTaskCountArgs} args - Arguments to filter AdminTasks to count.
     * @example
     * // Count the number of AdminTasks
     * const count = await prisma.adminTask.count({
     *   where: {
     *     // ... the filter for the AdminTasks we want to count
     *   }
     * })
    **/
    count<T extends AdminTaskCountArgs>(
      args?: Subset<T, AdminTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminTaskAggregateArgs>(args: Subset<T, AdminTaskAggregateArgs>): Prisma.PrismaPromise<GetAdminTaskAggregateType<T>>

    /**
     * Group by AdminTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminTaskGroupByArgs['orderBy'] }
        : { orderBy?: AdminTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminTask model
   */
  readonly fields: AdminTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AdminTask model
   */ 
  interface AdminTaskFieldRefs {
    readonly id: FieldRef<"AdminTask", 'String'>
    readonly type: FieldRef<"AdminTask", 'String'>
    readonly title: FieldRef<"AdminTask", 'String'>
    readonly description: FieldRef<"AdminTask", 'String'>
    readonly permissionId: FieldRef<"AdminTask", 'String'>
    readonly completed: FieldRef<"AdminTask", 'Boolean'>
    readonly createdAt: FieldRef<"AdminTask", 'DateTime'>
    readonly dueDate: FieldRef<"AdminTask", 'DateTime'>
    readonly assignedToName: FieldRef<"AdminTask", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AdminTask findUnique
   */
  export type AdminTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminTask
     */
    select?: AdminTaskSelect<ExtArgs> | null
    /**
     * Filter, which AdminTask to fetch.
     */
    where: AdminTaskWhereUniqueInput
  }


  /**
   * AdminTask findUniqueOrThrow
   */
  export type AdminTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminTask
     */
    select?: AdminTaskSelect<ExtArgs> | null
    /**
     * Filter, which AdminTask to fetch.
     */
    where: AdminTaskWhereUniqueInput
  }


  /**
   * AdminTask findFirst
   */
  export type AdminTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminTask
     */
    select?: AdminTaskSelect<ExtArgs> | null
    /**
     * Filter, which AdminTask to fetch.
     */
    where?: AdminTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminTasks to fetch.
     */
    orderBy?: AdminTaskOrderByWithRelationInput | AdminTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminTasks.
     */
    cursor?: AdminTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminTasks.
     */
    distinct?: AdminTaskScalarFieldEnum | AdminTaskScalarFieldEnum[]
  }


  /**
   * AdminTask findFirstOrThrow
   */
  export type AdminTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminTask
     */
    select?: AdminTaskSelect<ExtArgs> | null
    /**
     * Filter, which AdminTask to fetch.
     */
    where?: AdminTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminTasks to fetch.
     */
    orderBy?: AdminTaskOrderByWithRelationInput | AdminTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminTasks.
     */
    cursor?: AdminTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminTasks.
     */
    distinct?: AdminTaskScalarFieldEnum | AdminTaskScalarFieldEnum[]
  }


  /**
   * AdminTask findMany
   */
  export type AdminTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminTask
     */
    select?: AdminTaskSelect<ExtArgs> | null
    /**
     * Filter, which AdminTasks to fetch.
     */
    where?: AdminTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminTasks to fetch.
     */
    orderBy?: AdminTaskOrderByWithRelationInput | AdminTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminTasks.
     */
    cursor?: AdminTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminTasks.
     */
    skip?: number
    distinct?: AdminTaskScalarFieldEnum | AdminTaskScalarFieldEnum[]
  }


  /**
   * AdminTask create
   */
  export type AdminTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminTask
     */
    select?: AdminTaskSelect<ExtArgs> | null
    /**
     * The data needed to create a AdminTask.
     */
    data: XOR<AdminTaskCreateInput, AdminTaskUncheckedCreateInput>
  }


  /**
   * AdminTask createMany
   */
  export type AdminTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminTasks.
     */
    data: AdminTaskCreateManyInput | AdminTaskCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AdminTask update
   */
  export type AdminTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminTask
     */
    select?: AdminTaskSelect<ExtArgs> | null
    /**
     * The data needed to update a AdminTask.
     */
    data: XOR<AdminTaskUpdateInput, AdminTaskUncheckedUpdateInput>
    /**
     * Choose, which AdminTask to update.
     */
    where: AdminTaskWhereUniqueInput
  }


  /**
   * AdminTask updateMany
   */
  export type AdminTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminTasks.
     */
    data: XOR<AdminTaskUpdateManyMutationInput, AdminTaskUncheckedUpdateManyInput>
    /**
     * Filter which AdminTasks to update
     */
    where?: AdminTaskWhereInput
  }


  /**
   * AdminTask upsert
   */
  export type AdminTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminTask
     */
    select?: AdminTaskSelect<ExtArgs> | null
    /**
     * The filter to search for the AdminTask to update in case it exists.
     */
    where: AdminTaskWhereUniqueInput
    /**
     * In case the AdminTask found by the `where` argument doesn't exist, create a new AdminTask with this data.
     */
    create: XOR<AdminTaskCreateInput, AdminTaskUncheckedCreateInput>
    /**
     * In case the AdminTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminTaskUpdateInput, AdminTaskUncheckedUpdateInput>
  }


  /**
   * AdminTask delete
   */
  export type AdminTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminTask
     */
    select?: AdminTaskSelect<ExtArgs> | null
    /**
     * Filter which AdminTask to delete.
     */
    where: AdminTaskWhereUniqueInput
  }


  /**
   * AdminTask deleteMany
   */
  export type AdminTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminTasks to delete
     */
    where?: AdminTaskWhereInput
  }


  /**
   * AdminTask without action
   */
  export type AdminTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminTask
     */
    select?: AdminTaskSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SnsSubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bikeId: 'bikeId',
    platform: 'platform',
    postUrl: 'postUrl',
    status: 'status',
    initialViews: 'initialViews',
    initialLikes: 'initialLikes',
    verifiedViews: 'verifiedViews',
    verifiedLikes: 'verifiedLikes',
    verifiedShares: 'verifiedShares',
    rewardGranted: 'rewardGranted',
    metricsJson: 'metricsJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SnsSubmissionScalarFieldEnum = (typeof SnsSubmissionScalarFieldEnum)[keyof typeof SnsSubmissionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    permissions: 'permissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    preferredCurrency: 'preferredCurrency',
    memberType: 'memberType',
    phoneNumber: 'phoneNumber',
    address: 'address',
    corporateName: 'corporateName',
    corporateRegNum: 'corporateRegNum',
    representative: 'representative',
    memberId: 'memberId',
    kycStatus: 'kycStatus'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KycDocumentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    fileUrl: 'fileUrl',
    status: 'status',
    rejectionReason: 'rejectionReason',
    reviewedBy: 'reviewedBy',
    reviewedAt: 'reviewedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KycDocumentScalarFieldEnum = (typeof KycDocumentScalarFieldEnum)[keyof typeof KycDocumentScalarFieldEnum]


  export const BikeScalarFieldEnum: {
    id: 'id',
    bdsId: 'bdsId',
    lane: 'lane',
    auctionNumber: 'auctionNumber',
    auctionDate: 'auctionDate',
    name: 'name',
    maker: 'maker',
    makerConfirmed: 'makerConfirmed',
    region: 'region',
    inspectionStatus: 'inspectionStatus',
    listingType: 'listingType',
    vin: 'vin',
    engineNumber: 'engineNumber',
    mileage: 'mileage',
    documentMileage: 'documentMileage',
    pastMileage: 'pastMileage',
    color: 'color',
    displacement: 'displacement',
    firstRegistration: 'firstRegistration',
    inspection: 'inspection',
    hasParts: 'hasParts',
    registrationNumber: 'registrationNumber',
    startPrice: 'startPrice',
    currentPrice: 'currentPrice',
    result: 'result',
    historicalRates: 'historicalRates',
    overallGrade: 'overallGrade',
    engineGrade: 'engineGrade',
    frontGrade: 'frontGrade',
    exteriorGrade: 'exteriorGrade',
    rearGrade: 'rearGrade',
    electricGrade: 'electricGrade',
    frameGrade: 'frameGrade',
    awaGrade: 'awaGrade',
    inspectionDetails: 'inspectionDetails',
    awaReport: 'awaReport',
    sellerDeclaration: 'sellerDeclaration',
    images: 'images',
    videoUrls: 'videoUrls',
    remarks: 'remarks',
    status: 'status',
    importedAt: 'importedAt',
    updatedAt: 'updatedAt'
  };

  export type BikeScalarFieldEnum = (typeof BikeScalarFieldEnum)[keyof typeof BikeScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bikeId: 'bikeId',
    totalAmount: 'totalAmount',
    currency: 'currency',
    exchangeRate: 'exchangeRate',
    paymentMethod: 'paymentMethod',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const BidScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bikeId: 'bikeId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type BidScalarFieldEnum = (typeof BidScalarFieldEnum)[keyof typeof BidScalarFieldEnum]


  export const ContainerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    status: 'status',
    destination: 'destination',
    capacity: 'capacity',
    filled: 'filled',
    etd: 'etd',
    eta: 'eta',
    price: 'price',
    features: 'features',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContainerScalarFieldEnum = (typeof ContainerScalarFieldEnum)[keyof typeof ContainerScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    containerId: 'containerId',
    bikeIds: 'bikeIds',
    shippingAddress: 'shippingAddress',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const SystemSettingScalarFieldEnum: {
    key: 'key',
    value: 'value',
    description: 'description',
    updatedAt: 'updatedAt'
  };

  export type SystemSettingScalarFieldEnum = (typeof SystemSettingScalarFieldEnum)[keyof typeof SystemSettingScalarFieldEnum]


  export const ImportLogScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    bikesImported: 'bikesImported',
    errors: 'errors'
  };

  export type ImportLogScalarFieldEnum = (typeof ImportLogScalarFieldEnum)[keyof typeof ImportLogScalarFieldEnum]


  export const AdminTaskScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    description: 'description',
    permissionId: 'permissionId',
    completed: 'completed',
    createdAt: 'createdAt',
    dueDate: 'dueDate',
    assignedToName: 'assignedToName'
  };

  export type AdminTaskScalarFieldEnum = (typeof AdminTaskScalarFieldEnum)[keyof typeof AdminTaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SnsSubmissionWhereInput = {
    AND?: SnsSubmissionWhereInput | SnsSubmissionWhereInput[]
    OR?: SnsSubmissionWhereInput[]
    NOT?: SnsSubmissionWhereInput | SnsSubmissionWhereInput[]
    id?: IntFilter<"SnsSubmission"> | number
    userId?: StringFilter<"SnsSubmission"> | string
    bikeId?: StringFilter<"SnsSubmission"> | string
    platform?: StringFilter<"SnsSubmission"> | string
    postUrl?: StringFilter<"SnsSubmission"> | string
    status?: StringFilter<"SnsSubmission"> | string
    initialViews?: IntNullableFilter<"SnsSubmission"> | number | null
    initialLikes?: IntNullableFilter<"SnsSubmission"> | number | null
    verifiedViews?: IntNullableFilter<"SnsSubmission"> | number | null
    verifiedLikes?: IntNullableFilter<"SnsSubmission"> | number | null
    verifiedShares?: IntNullableFilter<"SnsSubmission"> | number | null
    rewardGranted?: StringNullableFilter<"SnsSubmission"> | string | null
    metricsJson?: StringNullableFilter<"SnsSubmission"> | string | null
    createdAt?: DateTimeFilter<"SnsSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"SnsSubmission"> | Date | string
  }

  export type SnsSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    platform?: SortOrder
    postUrl?: SortOrder
    status?: SortOrder
    initialViews?: SortOrderInput | SortOrder
    initialLikes?: SortOrderInput | SortOrder
    verifiedViews?: SortOrderInput | SortOrder
    verifiedLikes?: SortOrderInput | SortOrder
    verifiedShares?: SortOrderInput | SortOrder
    rewardGranted?: SortOrderInput | SortOrder
    metricsJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnsSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SnsSubmissionWhereInput | SnsSubmissionWhereInput[]
    OR?: SnsSubmissionWhereInput[]
    NOT?: SnsSubmissionWhereInput | SnsSubmissionWhereInput[]
    userId?: StringFilter<"SnsSubmission"> | string
    bikeId?: StringFilter<"SnsSubmission"> | string
    platform?: StringFilter<"SnsSubmission"> | string
    postUrl?: StringFilter<"SnsSubmission"> | string
    status?: StringFilter<"SnsSubmission"> | string
    initialViews?: IntNullableFilter<"SnsSubmission"> | number | null
    initialLikes?: IntNullableFilter<"SnsSubmission"> | number | null
    verifiedViews?: IntNullableFilter<"SnsSubmission"> | number | null
    verifiedLikes?: IntNullableFilter<"SnsSubmission"> | number | null
    verifiedShares?: IntNullableFilter<"SnsSubmission"> | number | null
    rewardGranted?: StringNullableFilter<"SnsSubmission"> | string | null
    metricsJson?: StringNullableFilter<"SnsSubmission"> | string | null
    createdAt?: DateTimeFilter<"SnsSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"SnsSubmission"> | Date | string
  }, "id">

  export type SnsSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    platform?: SortOrder
    postUrl?: SortOrder
    status?: SortOrder
    initialViews?: SortOrderInput | SortOrder
    initialLikes?: SortOrderInput | SortOrder
    verifiedViews?: SortOrderInput | SortOrder
    verifiedLikes?: SortOrderInput | SortOrder
    verifiedShares?: SortOrderInput | SortOrder
    rewardGranted?: SortOrderInput | SortOrder
    metricsJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SnsSubmissionCountOrderByAggregateInput
    _avg?: SnsSubmissionAvgOrderByAggregateInput
    _max?: SnsSubmissionMaxOrderByAggregateInput
    _min?: SnsSubmissionMinOrderByAggregateInput
    _sum?: SnsSubmissionSumOrderByAggregateInput
  }

  export type SnsSubmissionScalarWhereWithAggregatesInput = {
    AND?: SnsSubmissionScalarWhereWithAggregatesInput | SnsSubmissionScalarWhereWithAggregatesInput[]
    OR?: SnsSubmissionScalarWhereWithAggregatesInput[]
    NOT?: SnsSubmissionScalarWhereWithAggregatesInput | SnsSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SnsSubmission"> | number
    userId?: StringWithAggregatesFilter<"SnsSubmission"> | string
    bikeId?: StringWithAggregatesFilter<"SnsSubmission"> | string
    platform?: StringWithAggregatesFilter<"SnsSubmission"> | string
    postUrl?: StringWithAggregatesFilter<"SnsSubmission"> | string
    status?: StringWithAggregatesFilter<"SnsSubmission"> | string
    initialViews?: IntNullableWithAggregatesFilter<"SnsSubmission"> | number | null
    initialLikes?: IntNullableWithAggregatesFilter<"SnsSubmission"> | number | null
    verifiedViews?: IntNullableWithAggregatesFilter<"SnsSubmission"> | number | null
    verifiedLikes?: IntNullableWithAggregatesFilter<"SnsSubmission"> | number | null
    verifiedShares?: IntNullableWithAggregatesFilter<"SnsSubmission"> | number | null
    rewardGranted?: StringNullableWithAggregatesFilter<"SnsSubmission"> | string | null
    metricsJson?: StringNullableWithAggregatesFilter<"SnsSubmission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SnsSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SnsSubmission"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    permissions?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    preferredCurrency?: StringFilter<"User"> | string
    memberType?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    corporateName?: StringNullableFilter<"User"> | string | null
    corporateRegNum?: StringNullableFilter<"User"> | string | null
    representative?: StringNullableFilter<"User"> | string | null
    memberId?: StringNullableFilter<"User"> | string | null
    kycStatus?: StringFilter<"User"> | string
    kycDocuments?: KycDocumentListRelationFilter
    orders?: OrderListRelationFilter
    bids?: BidListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    permissions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    preferredCurrency?: SortOrder
    memberType?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    corporateName?: SortOrderInput | SortOrder
    corporateRegNum?: SortOrderInput | SortOrder
    representative?: SortOrderInput | SortOrder
    memberId?: SortOrderInput | SortOrder
    kycStatus?: SortOrder
    kycDocuments?: KycDocumentOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    bids?: BidOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    memberId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    permissions?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    preferredCurrency?: StringFilter<"User"> | string
    memberType?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    corporateName?: StringNullableFilter<"User"> | string | null
    corporateRegNum?: StringNullableFilter<"User"> | string | null
    representative?: StringNullableFilter<"User"> | string | null
    kycStatus?: StringFilter<"User"> | string
    kycDocuments?: KycDocumentListRelationFilter
    orders?: OrderListRelationFilter
    bids?: BidListRelationFilter
  }, "id" | "email" | "memberId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    permissions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    preferredCurrency?: SortOrder
    memberType?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    corporateName?: SortOrderInput | SortOrder
    corporateRegNum?: SortOrderInput | SortOrder
    representative?: SortOrderInput | SortOrder
    memberId?: SortOrderInput | SortOrder
    kycStatus?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    permissions?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    preferredCurrency?: StringWithAggregatesFilter<"User"> | string
    memberType?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    corporateName?: StringNullableWithAggregatesFilter<"User"> | string | null
    corporateRegNum?: StringNullableWithAggregatesFilter<"User"> | string | null
    representative?: StringNullableWithAggregatesFilter<"User"> | string | null
    memberId?: StringNullableWithAggregatesFilter<"User"> | string | null
    kycStatus?: StringWithAggregatesFilter<"User"> | string
  }

  export type KycDocumentWhereInput = {
    AND?: KycDocumentWhereInput | KycDocumentWhereInput[]
    OR?: KycDocumentWhereInput[]
    NOT?: KycDocumentWhereInput | KycDocumentWhereInput[]
    id?: StringFilter<"KycDocument"> | string
    userId?: StringFilter<"KycDocument"> | string
    type?: StringFilter<"KycDocument"> | string
    fileUrl?: StringFilter<"KycDocument"> | string
    status?: StringFilter<"KycDocument"> | string
    rejectionReason?: StringNullableFilter<"KycDocument"> | string | null
    reviewedBy?: StringNullableFilter<"KycDocument"> | string | null
    reviewedAt?: DateTimeNullableFilter<"KycDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"KycDocument"> | Date | string
    updatedAt?: DateTimeFilter<"KycDocument"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type KycDocumentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type KycDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KycDocumentWhereInput | KycDocumentWhereInput[]
    OR?: KycDocumentWhereInput[]
    NOT?: KycDocumentWhereInput | KycDocumentWhereInput[]
    userId?: StringFilter<"KycDocument"> | string
    type?: StringFilter<"KycDocument"> | string
    fileUrl?: StringFilter<"KycDocument"> | string
    status?: StringFilter<"KycDocument"> | string
    rejectionReason?: StringNullableFilter<"KycDocument"> | string | null
    reviewedBy?: StringNullableFilter<"KycDocument"> | string | null
    reviewedAt?: DateTimeNullableFilter<"KycDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"KycDocument"> | Date | string
    updatedAt?: DateTimeFilter<"KycDocument"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type KycDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KycDocumentCountOrderByAggregateInput
    _max?: KycDocumentMaxOrderByAggregateInput
    _min?: KycDocumentMinOrderByAggregateInput
  }

  export type KycDocumentScalarWhereWithAggregatesInput = {
    AND?: KycDocumentScalarWhereWithAggregatesInput | KycDocumentScalarWhereWithAggregatesInput[]
    OR?: KycDocumentScalarWhereWithAggregatesInput[]
    NOT?: KycDocumentScalarWhereWithAggregatesInput | KycDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KycDocument"> | string
    userId?: StringWithAggregatesFilter<"KycDocument"> | string
    type?: StringWithAggregatesFilter<"KycDocument"> | string
    fileUrl?: StringWithAggregatesFilter<"KycDocument"> | string
    status?: StringWithAggregatesFilter<"KycDocument"> | string
    rejectionReason?: StringNullableWithAggregatesFilter<"KycDocument"> | string | null
    reviewedBy?: StringNullableWithAggregatesFilter<"KycDocument"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"KycDocument"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"KycDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KycDocument"> | Date | string
  }

  export type BikeWhereInput = {
    AND?: BikeWhereInput | BikeWhereInput[]
    OR?: BikeWhereInput[]
    NOT?: BikeWhereInput | BikeWhereInput[]
    id?: StringFilter<"Bike"> | string
    bdsId?: StringFilter<"Bike"> | string
    lane?: StringNullableFilter<"Bike"> | string | null
    auctionNumber?: StringNullableFilter<"Bike"> | string | null
    auctionDate?: StringNullableFilter<"Bike"> | string | null
    name?: StringFilter<"Bike"> | string
    maker?: StringNullableFilter<"Bike"> | string | null
    makerConfirmed?: BoolFilter<"Bike"> | boolean
    region?: StringNullableFilter<"Bike"> | string | null
    inspectionStatus?: StringNullableFilter<"Bike"> | string | null
    listingType?: StringNullableFilter<"Bike"> | string | null
    vin?: StringNullableFilter<"Bike"> | string | null
    engineNumber?: StringNullableFilter<"Bike"> | string | null
    mileage?: StringNullableFilter<"Bike"> | string | null
    documentMileage?: StringNullableFilter<"Bike"> | string | null
    pastMileage?: StringNullableFilter<"Bike"> | string | null
    color?: StringNullableFilter<"Bike"> | string | null
    displacement?: StringNullableFilter<"Bike"> | string | null
    firstRegistration?: StringNullableFilter<"Bike"> | string | null
    inspection?: StringNullableFilter<"Bike"> | string | null
    hasParts?: StringNullableFilter<"Bike"> | string | null
    registrationNumber?: StringNullableFilter<"Bike"> | string | null
    startPrice?: IntFilter<"Bike"> | number
    currentPrice?: IntFilter<"Bike"> | number
    result?: StringNullableFilter<"Bike"> | string | null
    historicalRates?: StringNullableFilter<"Bike"> | string | null
    overallGrade?: FloatNullableFilter<"Bike"> | number | null
    engineGrade?: FloatNullableFilter<"Bike"> | number | null
    frontGrade?: FloatNullableFilter<"Bike"> | number | null
    exteriorGrade?: FloatNullableFilter<"Bike"> | number | null
    rearGrade?: FloatNullableFilter<"Bike"> | number | null
    electricGrade?: FloatNullableFilter<"Bike"> | number | null
    frameGrade?: FloatNullableFilter<"Bike"> | number | null
    awaGrade?: StringNullableFilter<"Bike"> | string | null
    inspectionDetails?: StringNullableFilter<"Bike"> | string | null
    awaReport?: StringNullableFilter<"Bike"> | string | null
    sellerDeclaration?: StringNullableFilter<"Bike"> | string | null
    images?: StringNullableFilter<"Bike"> | string | null
    videoUrls?: StringNullableFilter<"Bike"> | string | null
    remarks?: StringNullableFilter<"Bike"> | string | null
    status?: StringFilter<"Bike"> | string
    importedAt?: DateTimeFilter<"Bike"> | Date | string
    updatedAt?: DateTimeFilter<"Bike"> | Date | string
    orders?: OrderListRelationFilter
    bids?: BidListRelationFilter
  }

  export type BikeOrderByWithRelationInput = {
    id?: SortOrder
    bdsId?: SortOrder
    lane?: SortOrderInput | SortOrder
    auctionNumber?: SortOrderInput | SortOrder
    auctionDate?: SortOrderInput | SortOrder
    name?: SortOrder
    maker?: SortOrderInput | SortOrder
    makerConfirmed?: SortOrder
    region?: SortOrderInput | SortOrder
    inspectionStatus?: SortOrderInput | SortOrder
    listingType?: SortOrderInput | SortOrder
    vin?: SortOrderInput | SortOrder
    engineNumber?: SortOrderInput | SortOrder
    mileage?: SortOrderInput | SortOrder
    documentMileage?: SortOrderInput | SortOrder
    pastMileage?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    displacement?: SortOrderInput | SortOrder
    firstRegistration?: SortOrderInput | SortOrder
    inspection?: SortOrderInput | SortOrder
    hasParts?: SortOrderInput | SortOrder
    registrationNumber?: SortOrderInput | SortOrder
    startPrice?: SortOrder
    currentPrice?: SortOrder
    result?: SortOrderInput | SortOrder
    historicalRates?: SortOrderInput | SortOrder
    overallGrade?: SortOrderInput | SortOrder
    engineGrade?: SortOrderInput | SortOrder
    frontGrade?: SortOrderInput | SortOrder
    exteriorGrade?: SortOrderInput | SortOrder
    rearGrade?: SortOrderInput | SortOrder
    electricGrade?: SortOrderInput | SortOrder
    frameGrade?: SortOrderInput | SortOrder
    awaGrade?: SortOrderInput | SortOrder
    inspectionDetails?: SortOrderInput | SortOrder
    awaReport?: SortOrderInput | SortOrder
    sellerDeclaration?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    videoUrls?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    status?: SortOrder
    importedAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    bids?: BidOrderByRelationAggregateInput
  }

  export type BikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bdsId?: string
    AND?: BikeWhereInput | BikeWhereInput[]
    OR?: BikeWhereInput[]
    NOT?: BikeWhereInput | BikeWhereInput[]
    lane?: StringNullableFilter<"Bike"> | string | null
    auctionNumber?: StringNullableFilter<"Bike"> | string | null
    auctionDate?: StringNullableFilter<"Bike"> | string | null
    name?: StringFilter<"Bike"> | string
    maker?: StringNullableFilter<"Bike"> | string | null
    makerConfirmed?: BoolFilter<"Bike"> | boolean
    region?: StringNullableFilter<"Bike"> | string | null
    inspectionStatus?: StringNullableFilter<"Bike"> | string | null
    listingType?: StringNullableFilter<"Bike"> | string | null
    vin?: StringNullableFilter<"Bike"> | string | null
    engineNumber?: StringNullableFilter<"Bike"> | string | null
    mileage?: StringNullableFilter<"Bike"> | string | null
    documentMileage?: StringNullableFilter<"Bike"> | string | null
    pastMileage?: StringNullableFilter<"Bike"> | string | null
    color?: StringNullableFilter<"Bike"> | string | null
    displacement?: StringNullableFilter<"Bike"> | string | null
    firstRegistration?: StringNullableFilter<"Bike"> | string | null
    inspection?: StringNullableFilter<"Bike"> | string | null
    hasParts?: StringNullableFilter<"Bike"> | string | null
    registrationNumber?: StringNullableFilter<"Bike"> | string | null
    startPrice?: IntFilter<"Bike"> | number
    currentPrice?: IntFilter<"Bike"> | number
    result?: StringNullableFilter<"Bike"> | string | null
    historicalRates?: StringNullableFilter<"Bike"> | string | null
    overallGrade?: FloatNullableFilter<"Bike"> | number | null
    engineGrade?: FloatNullableFilter<"Bike"> | number | null
    frontGrade?: FloatNullableFilter<"Bike"> | number | null
    exteriorGrade?: FloatNullableFilter<"Bike"> | number | null
    rearGrade?: FloatNullableFilter<"Bike"> | number | null
    electricGrade?: FloatNullableFilter<"Bike"> | number | null
    frameGrade?: FloatNullableFilter<"Bike"> | number | null
    awaGrade?: StringNullableFilter<"Bike"> | string | null
    inspectionDetails?: StringNullableFilter<"Bike"> | string | null
    awaReport?: StringNullableFilter<"Bike"> | string | null
    sellerDeclaration?: StringNullableFilter<"Bike"> | string | null
    images?: StringNullableFilter<"Bike"> | string | null
    videoUrls?: StringNullableFilter<"Bike"> | string | null
    remarks?: StringNullableFilter<"Bike"> | string | null
    status?: StringFilter<"Bike"> | string
    importedAt?: DateTimeFilter<"Bike"> | Date | string
    updatedAt?: DateTimeFilter<"Bike"> | Date | string
    orders?: OrderListRelationFilter
    bids?: BidListRelationFilter
  }, "id" | "bdsId">

  export type BikeOrderByWithAggregationInput = {
    id?: SortOrder
    bdsId?: SortOrder
    lane?: SortOrderInput | SortOrder
    auctionNumber?: SortOrderInput | SortOrder
    auctionDate?: SortOrderInput | SortOrder
    name?: SortOrder
    maker?: SortOrderInput | SortOrder
    makerConfirmed?: SortOrder
    region?: SortOrderInput | SortOrder
    inspectionStatus?: SortOrderInput | SortOrder
    listingType?: SortOrderInput | SortOrder
    vin?: SortOrderInput | SortOrder
    engineNumber?: SortOrderInput | SortOrder
    mileage?: SortOrderInput | SortOrder
    documentMileage?: SortOrderInput | SortOrder
    pastMileage?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    displacement?: SortOrderInput | SortOrder
    firstRegistration?: SortOrderInput | SortOrder
    inspection?: SortOrderInput | SortOrder
    hasParts?: SortOrderInput | SortOrder
    registrationNumber?: SortOrderInput | SortOrder
    startPrice?: SortOrder
    currentPrice?: SortOrder
    result?: SortOrderInput | SortOrder
    historicalRates?: SortOrderInput | SortOrder
    overallGrade?: SortOrderInput | SortOrder
    engineGrade?: SortOrderInput | SortOrder
    frontGrade?: SortOrderInput | SortOrder
    exteriorGrade?: SortOrderInput | SortOrder
    rearGrade?: SortOrderInput | SortOrder
    electricGrade?: SortOrderInput | SortOrder
    frameGrade?: SortOrderInput | SortOrder
    awaGrade?: SortOrderInput | SortOrder
    inspectionDetails?: SortOrderInput | SortOrder
    awaReport?: SortOrderInput | SortOrder
    sellerDeclaration?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    videoUrls?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    status?: SortOrder
    importedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BikeCountOrderByAggregateInput
    _avg?: BikeAvgOrderByAggregateInput
    _max?: BikeMaxOrderByAggregateInput
    _min?: BikeMinOrderByAggregateInput
    _sum?: BikeSumOrderByAggregateInput
  }

  export type BikeScalarWhereWithAggregatesInput = {
    AND?: BikeScalarWhereWithAggregatesInput | BikeScalarWhereWithAggregatesInput[]
    OR?: BikeScalarWhereWithAggregatesInput[]
    NOT?: BikeScalarWhereWithAggregatesInput | BikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bike"> | string
    bdsId?: StringWithAggregatesFilter<"Bike"> | string
    lane?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    auctionNumber?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    auctionDate?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    name?: StringWithAggregatesFilter<"Bike"> | string
    maker?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    makerConfirmed?: BoolWithAggregatesFilter<"Bike"> | boolean
    region?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    inspectionStatus?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    listingType?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    vin?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    engineNumber?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    mileage?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    documentMileage?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    pastMileage?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    color?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    displacement?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    firstRegistration?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    inspection?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    hasParts?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    registrationNumber?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    startPrice?: IntWithAggregatesFilter<"Bike"> | number
    currentPrice?: IntWithAggregatesFilter<"Bike"> | number
    result?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    historicalRates?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    overallGrade?: FloatNullableWithAggregatesFilter<"Bike"> | number | null
    engineGrade?: FloatNullableWithAggregatesFilter<"Bike"> | number | null
    frontGrade?: FloatNullableWithAggregatesFilter<"Bike"> | number | null
    exteriorGrade?: FloatNullableWithAggregatesFilter<"Bike"> | number | null
    rearGrade?: FloatNullableWithAggregatesFilter<"Bike"> | number | null
    electricGrade?: FloatNullableWithAggregatesFilter<"Bike"> | number | null
    frameGrade?: FloatNullableWithAggregatesFilter<"Bike"> | number | null
    awaGrade?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    inspectionDetails?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    awaReport?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    sellerDeclaration?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    images?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    videoUrls?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Bike"> | string | null
    status?: StringWithAggregatesFilter<"Bike"> | string
    importedAt?: DateTimeWithAggregatesFilter<"Bike"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bike"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    bikeId?: StringFilter<"Order"> | string
    totalAmount?: IntFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    exchangeRate?: FloatFilter<"Order"> | number
    paymentMethod?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    bike?: XOR<BikeRelationFilter, BikeWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    bike?: BikeOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    bikeId?: StringFilter<"Order"> | string
    totalAmount?: IntFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    exchangeRate?: FloatFilter<"Order"> | number
    paymentMethod?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    bike?: XOR<BikeRelationFilter, BikeWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    bikeId?: StringWithAggregatesFilter<"Order"> | string
    totalAmount?: IntWithAggregatesFilter<"Order"> | number
    currency?: StringWithAggregatesFilter<"Order"> | string
    exchangeRate?: FloatWithAggregatesFilter<"Order"> | number
    paymentMethod?: StringWithAggregatesFilter<"Order"> | string
    status?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type BidWhereInput = {
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    id?: StringFilter<"Bid"> | string
    userId?: StringFilter<"Bid"> | string
    bikeId?: StringFilter<"Bid"> | string
    amount?: IntFilter<"Bid"> | number
    currency?: StringFilter<"Bid"> | string
    status?: StringFilter<"Bid"> | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    bike?: XOR<BikeRelationFilter, BikeWhereInput>
  }

  export type BidOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    bike?: BikeOrderByWithRelationInput
  }

  export type BidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    userId?: StringFilter<"Bid"> | string
    bikeId?: StringFilter<"Bid"> | string
    amount?: IntFilter<"Bid"> | number
    currency?: StringFilter<"Bid"> | string
    status?: StringFilter<"Bid"> | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    bike?: XOR<BikeRelationFilter, BikeWhereInput>
  }, "id">

  export type BidOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: BidCountOrderByAggregateInput
    _avg?: BidAvgOrderByAggregateInput
    _max?: BidMaxOrderByAggregateInput
    _min?: BidMinOrderByAggregateInput
    _sum?: BidSumOrderByAggregateInput
  }

  export type BidScalarWhereWithAggregatesInput = {
    AND?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    OR?: BidScalarWhereWithAggregatesInput[]
    NOT?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bid"> | string
    userId?: StringWithAggregatesFilter<"Bid"> | string
    bikeId?: StringWithAggregatesFilter<"Bid"> | string
    amount?: IntWithAggregatesFilter<"Bid"> | number
    currency?: StringWithAggregatesFilter<"Bid"> | string
    status?: StringWithAggregatesFilter<"Bid"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
  }

  export type ContainerWhereInput = {
    AND?: ContainerWhereInput | ContainerWhereInput[]
    OR?: ContainerWhereInput[]
    NOT?: ContainerWhereInput | ContainerWhereInput[]
    id?: StringFilter<"Container"> | string
    name?: StringFilter<"Container"> | string
    type?: StringFilter<"Container"> | string
    status?: StringFilter<"Container"> | string
    destination?: StringFilter<"Container"> | string
    capacity?: IntFilter<"Container"> | number
    filled?: IntFilter<"Container"> | number
    etd?: StringNullableFilter<"Container"> | string | null
    eta?: StringNullableFilter<"Container"> | string | null
    price?: StringNullableFilter<"Container"> | string | null
    features?: StringFilter<"Container"> | string
    createdAt?: DateTimeFilter<"Container"> | Date | string
    updatedAt?: DateTimeFilter<"Container"> | Date | string
  }

  export type ContainerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    destination?: SortOrder
    capacity?: SortOrder
    filled?: SortOrder
    etd?: SortOrderInput | SortOrder
    eta?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContainerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContainerWhereInput | ContainerWhereInput[]
    OR?: ContainerWhereInput[]
    NOT?: ContainerWhereInput | ContainerWhereInput[]
    name?: StringFilter<"Container"> | string
    type?: StringFilter<"Container"> | string
    status?: StringFilter<"Container"> | string
    destination?: StringFilter<"Container"> | string
    capacity?: IntFilter<"Container"> | number
    filled?: IntFilter<"Container"> | number
    etd?: StringNullableFilter<"Container"> | string | null
    eta?: StringNullableFilter<"Container"> | string | null
    price?: StringNullableFilter<"Container"> | string | null
    features?: StringFilter<"Container"> | string
    createdAt?: DateTimeFilter<"Container"> | Date | string
    updatedAt?: DateTimeFilter<"Container"> | Date | string
  }, "id">

  export type ContainerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    destination?: SortOrder
    capacity?: SortOrder
    filled?: SortOrder
    etd?: SortOrderInput | SortOrder
    eta?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContainerCountOrderByAggregateInput
    _avg?: ContainerAvgOrderByAggregateInput
    _max?: ContainerMaxOrderByAggregateInput
    _min?: ContainerMinOrderByAggregateInput
    _sum?: ContainerSumOrderByAggregateInput
  }

  export type ContainerScalarWhereWithAggregatesInput = {
    AND?: ContainerScalarWhereWithAggregatesInput | ContainerScalarWhereWithAggregatesInput[]
    OR?: ContainerScalarWhereWithAggregatesInput[]
    NOT?: ContainerScalarWhereWithAggregatesInput | ContainerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Container"> | string
    name?: StringWithAggregatesFilter<"Container"> | string
    type?: StringWithAggregatesFilter<"Container"> | string
    status?: StringWithAggregatesFilter<"Container"> | string
    destination?: StringWithAggregatesFilter<"Container"> | string
    capacity?: IntWithAggregatesFilter<"Container"> | number
    filled?: IntWithAggregatesFilter<"Container"> | number
    etd?: StringNullableWithAggregatesFilter<"Container"> | string | null
    eta?: StringNullableWithAggregatesFilter<"Container"> | string | null
    price?: StringNullableWithAggregatesFilter<"Container"> | string | null
    features?: StringWithAggregatesFilter<"Container"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Container"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Container"> | Date | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    userId?: StringFilter<"Reservation"> | string
    containerId?: StringFilter<"Reservation"> | string
    bikeIds?: StringFilter<"Reservation"> | string
    shippingAddress?: StringFilter<"Reservation"> | string
    status?: StringFilter<"Reservation"> | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    containerId?: SortOrder
    bikeIds?: SortOrder
    shippingAddress?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    userId?: StringFilter<"Reservation"> | string
    containerId?: StringFilter<"Reservation"> | string
    bikeIds?: StringFilter<"Reservation"> | string
    shippingAddress?: StringFilter<"Reservation"> | string
    status?: StringFilter<"Reservation"> | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    containerId?: SortOrder
    bikeIds?: SortOrder
    shippingAddress?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    userId?: StringWithAggregatesFilter<"Reservation"> | string
    containerId?: StringWithAggregatesFilter<"Reservation"> | string
    bikeIds?: StringWithAggregatesFilter<"Reservation"> | string
    shippingAddress?: StringWithAggregatesFilter<"Reservation"> | string
    status?: StringWithAggregatesFilter<"Reservation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type SystemSettingWhereInput = {
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    key?: StringFilter<"SystemSetting"> | string
    value?: StringFilter<"SystemSetting"> | string
    description?: StringNullableFilter<"SystemSetting"> | string | null
    updatedAt?: DateTimeFilter<"SystemSetting"> | Date | string
  }

  export type SystemSettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    value?: StringFilter<"SystemSetting"> | string
    description?: StringNullableFilter<"SystemSetting"> | string | null
    updatedAt?: DateTimeFilter<"SystemSetting"> | Date | string
  }, "key">

  export type SystemSettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: SystemSettingCountOrderByAggregateInput
    _max?: SystemSettingMaxOrderByAggregateInput
    _min?: SystemSettingMinOrderByAggregateInput
  }

  export type SystemSettingScalarWhereWithAggregatesInput = {
    AND?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    OR?: SystemSettingScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"SystemSetting"> | string
    value?: StringWithAggregatesFilter<"SystemSetting"> | string
    description?: StringNullableWithAggregatesFilter<"SystemSetting"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSetting"> | Date | string
  }

  export type ImportLogWhereInput = {
    AND?: ImportLogWhereInput | ImportLogWhereInput[]
    OR?: ImportLogWhereInput[]
    NOT?: ImportLogWhereInput | ImportLogWhereInput[]
    id?: StringFilter<"ImportLog"> | string
    timestamp?: DateTimeFilter<"ImportLog"> | Date | string
    bikesImported?: IntFilter<"ImportLog"> | number
    errors?: StringFilter<"ImportLog"> | string
  }

  export type ImportLogOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bikesImported?: SortOrder
    errors?: SortOrder
  }

  export type ImportLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImportLogWhereInput | ImportLogWhereInput[]
    OR?: ImportLogWhereInput[]
    NOT?: ImportLogWhereInput | ImportLogWhereInput[]
    timestamp?: DateTimeFilter<"ImportLog"> | Date | string
    bikesImported?: IntFilter<"ImportLog"> | number
    errors?: StringFilter<"ImportLog"> | string
  }, "id">

  export type ImportLogOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bikesImported?: SortOrder
    errors?: SortOrder
    _count?: ImportLogCountOrderByAggregateInput
    _avg?: ImportLogAvgOrderByAggregateInput
    _max?: ImportLogMaxOrderByAggregateInput
    _min?: ImportLogMinOrderByAggregateInput
    _sum?: ImportLogSumOrderByAggregateInput
  }

  export type ImportLogScalarWhereWithAggregatesInput = {
    AND?: ImportLogScalarWhereWithAggregatesInput | ImportLogScalarWhereWithAggregatesInput[]
    OR?: ImportLogScalarWhereWithAggregatesInput[]
    NOT?: ImportLogScalarWhereWithAggregatesInput | ImportLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImportLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ImportLog"> | Date | string
    bikesImported?: IntWithAggregatesFilter<"ImportLog"> | number
    errors?: StringWithAggregatesFilter<"ImportLog"> | string
  }

  export type AdminTaskWhereInput = {
    AND?: AdminTaskWhereInput | AdminTaskWhereInput[]
    OR?: AdminTaskWhereInput[]
    NOT?: AdminTaskWhereInput | AdminTaskWhereInput[]
    id?: StringFilter<"AdminTask"> | string
    type?: StringFilter<"AdminTask"> | string
    title?: StringFilter<"AdminTask"> | string
    description?: StringNullableFilter<"AdminTask"> | string | null
    permissionId?: StringFilter<"AdminTask"> | string
    completed?: BoolFilter<"AdminTask"> | boolean
    createdAt?: DateTimeFilter<"AdminTask"> | Date | string
    dueDate?: DateTimeNullableFilter<"AdminTask"> | Date | string | null
    assignedToName?: StringNullableFilter<"AdminTask"> | string | null
  }

  export type AdminTaskOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    permissionId?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    assignedToName?: SortOrderInput | SortOrder
  }

  export type AdminTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminTaskWhereInput | AdminTaskWhereInput[]
    OR?: AdminTaskWhereInput[]
    NOT?: AdminTaskWhereInput | AdminTaskWhereInput[]
    type?: StringFilter<"AdminTask"> | string
    title?: StringFilter<"AdminTask"> | string
    description?: StringNullableFilter<"AdminTask"> | string | null
    permissionId?: StringFilter<"AdminTask"> | string
    completed?: BoolFilter<"AdminTask"> | boolean
    createdAt?: DateTimeFilter<"AdminTask"> | Date | string
    dueDate?: DateTimeNullableFilter<"AdminTask"> | Date | string | null
    assignedToName?: StringNullableFilter<"AdminTask"> | string | null
  }, "id">

  export type AdminTaskOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    permissionId?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    assignedToName?: SortOrderInput | SortOrder
    _count?: AdminTaskCountOrderByAggregateInput
    _max?: AdminTaskMaxOrderByAggregateInput
    _min?: AdminTaskMinOrderByAggregateInput
  }

  export type AdminTaskScalarWhereWithAggregatesInput = {
    AND?: AdminTaskScalarWhereWithAggregatesInput | AdminTaskScalarWhereWithAggregatesInput[]
    OR?: AdminTaskScalarWhereWithAggregatesInput[]
    NOT?: AdminTaskScalarWhereWithAggregatesInput | AdminTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminTask"> | string
    type?: StringWithAggregatesFilter<"AdminTask"> | string
    title?: StringWithAggregatesFilter<"AdminTask"> | string
    description?: StringNullableWithAggregatesFilter<"AdminTask"> | string | null
    permissionId?: StringWithAggregatesFilter<"AdminTask"> | string
    completed?: BoolWithAggregatesFilter<"AdminTask"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AdminTask"> | Date | string
    dueDate?: DateTimeNullableWithAggregatesFilter<"AdminTask"> | Date | string | null
    assignedToName?: StringNullableWithAggregatesFilter<"AdminTask"> | string | null
  }

  export type SnsSubmissionCreateInput = {
    userId: string
    bikeId: string
    platform: string
    postUrl: string
    status?: string
    initialViews?: number | null
    initialLikes?: number | null
    verifiedViews?: number | null
    verifiedLikes?: number | null
    verifiedShares?: number | null
    rewardGranted?: string | null
    metricsJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnsSubmissionUncheckedCreateInput = {
    id?: number
    userId: string
    bikeId: string
    platform: string
    postUrl: string
    status?: string
    initialViews?: number | null
    initialLikes?: number | null
    verifiedViews?: number | null
    verifiedLikes?: number | null
    verifiedShares?: number | null
    rewardGranted?: string | null
    metricsJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnsSubmissionUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    postUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    initialViews?: NullableIntFieldUpdateOperationsInput | number | null
    initialLikes?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedViews?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedLikes?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedShares?: NullableIntFieldUpdateOperationsInput | number | null
    rewardGranted?: NullableStringFieldUpdateOperationsInput | string | null
    metricsJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnsSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    postUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    initialViews?: NullableIntFieldUpdateOperationsInput | number | null
    initialLikes?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedViews?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedLikes?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedShares?: NullableIntFieldUpdateOperationsInput | number | null
    rewardGranted?: NullableStringFieldUpdateOperationsInput | string | null
    metricsJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnsSubmissionCreateManyInput = {
    id?: number
    userId: string
    bikeId: string
    platform: string
    postUrl: string
    status?: string
    initialViews?: number | null
    initialLikes?: number | null
    verifiedViews?: number | null
    verifiedLikes?: number | null
    verifiedShares?: number | null
    rewardGranted?: string | null
    metricsJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnsSubmissionUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    postUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    initialViews?: NullableIntFieldUpdateOperationsInput | number | null
    initialLikes?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedViews?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedLikes?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedShares?: NullableIntFieldUpdateOperationsInput | number | null
    rewardGranted?: NullableStringFieldUpdateOperationsInput | string | null
    metricsJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnsSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    postUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    initialViews?: NullableIntFieldUpdateOperationsInput | number | null
    initialLikes?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedViews?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedLikes?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedShares?: NullableIntFieldUpdateOperationsInput | number | null
    rewardGranted?: NullableStringFieldUpdateOperationsInput | string | null
    metricsJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: string
    permissions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredCurrency?: string
    memberType?: string
    phoneNumber?: string | null
    address?: string | null
    corporateName?: string | null
    corporateRegNum?: string | null
    representative?: string | null
    memberId?: string | null
    kycStatus?: string
    kycDocuments?: KycDocumentCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: string
    permissions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredCurrency?: string
    memberType?: string
    phoneNumber?: string | null
    address?: string | null
    corporateName?: string | null
    corporateRegNum?: string | null
    representative?: string | null
    memberId?: string | null
    kycStatus?: string
    kycDocuments?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredCurrency?: StringFieldUpdateOperationsInput | string
    memberType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    corporateName?: NullableStringFieldUpdateOperationsInput | string | null
    corporateRegNum?: NullableStringFieldUpdateOperationsInput | string | null
    representative?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: StringFieldUpdateOperationsInput | string
    kycDocuments?: KycDocumentUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredCurrency?: StringFieldUpdateOperationsInput | string
    memberType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    corporateName?: NullableStringFieldUpdateOperationsInput | string | null
    corporateRegNum?: NullableStringFieldUpdateOperationsInput | string | null
    representative?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: StringFieldUpdateOperationsInput | string
    kycDocuments?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: string
    permissions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredCurrency?: string
    memberType?: string
    phoneNumber?: string | null
    address?: string | null
    corporateName?: string | null
    corporateRegNum?: string | null
    representative?: string | null
    memberId?: string | null
    kycStatus?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredCurrency?: StringFieldUpdateOperationsInput | string
    memberType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    corporateName?: NullableStringFieldUpdateOperationsInput | string | null
    corporateRegNum?: NullableStringFieldUpdateOperationsInput | string | null
    representative?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredCurrency?: StringFieldUpdateOperationsInput | string
    memberType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    corporateName?: NullableStringFieldUpdateOperationsInput | string | null
    corporateRegNum?: NullableStringFieldUpdateOperationsInput | string | null
    representative?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: StringFieldUpdateOperationsInput | string
  }

  export type KycDocumentCreateInput = {
    id?: string
    type: string
    fileUrl: string
    status?: string
    rejectionReason?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutKycDocumentsInput
  }

  export type KycDocumentUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    fileUrl: string
    status?: string
    rejectionReason?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KycDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutKycDocumentsNestedInput
  }

  export type KycDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycDocumentCreateManyInput = {
    id?: string
    userId: string
    type: string
    fileUrl: string
    status?: string
    rejectionReason?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KycDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BikeCreateInput = {
    id?: string
    bdsId: string
    lane?: string | null
    auctionNumber?: string | null
    auctionDate?: string | null
    name: string
    maker?: string | null
    makerConfirmed?: boolean
    region?: string | null
    inspectionStatus?: string | null
    listingType?: string | null
    vin?: string | null
    engineNumber?: string | null
    mileage?: string | null
    documentMileage?: string | null
    pastMileage?: string | null
    color?: string | null
    displacement?: string | null
    firstRegistration?: string | null
    inspection?: string | null
    hasParts?: string | null
    registrationNumber?: string | null
    startPrice?: number
    currentPrice?: number
    result?: string | null
    historicalRates?: string | null
    overallGrade?: number | null
    engineGrade?: number | null
    frontGrade?: number | null
    exteriorGrade?: number | null
    rearGrade?: number | null
    electricGrade?: number | null
    frameGrade?: number | null
    awaGrade?: string | null
    inspectionDetails?: string | null
    awaReport?: string | null
    sellerDeclaration?: string | null
    images?: string | null
    videoUrls?: string | null
    remarks?: string | null
    status?: string
    importedAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutBikeInput
    bids?: BidCreateNestedManyWithoutBikeInput
  }

  export type BikeUncheckedCreateInput = {
    id?: string
    bdsId: string
    lane?: string | null
    auctionNumber?: string | null
    auctionDate?: string | null
    name: string
    maker?: string | null
    makerConfirmed?: boolean
    region?: string | null
    inspectionStatus?: string | null
    listingType?: string | null
    vin?: string | null
    engineNumber?: string | null
    mileage?: string | null
    documentMileage?: string | null
    pastMileage?: string | null
    color?: string | null
    displacement?: string | null
    firstRegistration?: string | null
    inspection?: string | null
    hasParts?: string | null
    registrationNumber?: string | null
    startPrice?: number
    currentPrice?: number
    result?: string | null
    historicalRates?: string | null
    overallGrade?: number | null
    engineGrade?: number | null
    frontGrade?: number | null
    exteriorGrade?: number | null
    rearGrade?: number | null
    electricGrade?: number | null
    frameGrade?: number | null
    awaGrade?: string | null
    inspectionDetails?: string | null
    awaReport?: string | null
    sellerDeclaration?: string | null
    images?: string | null
    videoUrls?: string | null
    remarks?: string | null
    status?: string
    importedAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutBikeInput
    bids?: BidUncheckedCreateNestedManyWithoutBikeInput
  }

  export type BikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bdsId?: StringFieldUpdateOperationsInput | string
    lane?: NullableStringFieldUpdateOperationsInput | string | null
    auctionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    auctionDate?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    maker?: NullableStringFieldUpdateOperationsInput | string | null
    makerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    listingType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    engineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    documentMileage?: NullableStringFieldUpdateOperationsInput | string | null
    pastMileage?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    displacement?: NullableStringFieldUpdateOperationsInput | string | null
    firstRegistration?: NullableStringFieldUpdateOperationsInput | string | null
    inspection?: NullableStringFieldUpdateOperationsInput | string | null
    hasParts?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    startPrice?: IntFieldUpdateOperationsInput | number
    currentPrice?: IntFieldUpdateOperationsInput | number
    result?: NullableStringFieldUpdateOperationsInput | string | null
    historicalRates?: NullableStringFieldUpdateOperationsInput | string | null
    overallGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    engineGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frontGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    exteriorGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    rearGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    electricGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frameGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    awaGrade?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    awaReport?: NullableStringFieldUpdateOperationsInput | string | null
    sellerDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutBikeNestedInput
    bids?: BidUpdateManyWithoutBikeNestedInput
  }

  export type BikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bdsId?: StringFieldUpdateOperationsInput | string
    lane?: NullableStringFieldUpdateOperationsInput | string | null
    auctionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    auctionDate?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    maker?: NullableStringFieldUpdateOperationsInput | string | null
    makerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    listingType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    engineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    documentMileage?: NullableStringFieldUpdateOperationsInput | string | null
    pastMileage?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    displacement?: NullableStringFieldUpdateOperationsInput | string | null
    firstRegistration?: NullableStringFieldUpdateOperationsInput | string | null
    inspection?: NullableStringFieldUpdateOperationsInput | string | null
    hasParts?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    startPrice?: IntFieldUpdateOperationsInput | number
    currentPrice?: IntFieldUpdateOperationsInput | number
    result?: NullableStringFieldUpdateOperationsInput | string | null
    historicalRates?: NullableStringFieldUpdateOperationsInput | string | null
    overallGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    engineGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frontGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    exteriorGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    rearGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    electricGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frameGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    awaGrade?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    awaReport?: NullableStringFieldUpdateOperationsInput | string | null
    sellerDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutBikeNestedInput
    bids?: BidUncheckedUpdateManyWithoutBikeNestedInput
  }

  export type BikeCreateManyInput = {
    id?: string
    bdsId: string
    lane?: string | null
    auctionNumber?: string | null
    auctionDate?: string | null
    name: string
    maker?: string | null
    makerConfirmed?: boolean
    region?: string | null
    inspectionStatus?: string | null
    listingType?: string | null
    vin?: string | null
    engineNumber?: string | null
    mileage?: string | null
    documentMileage?: string | null
    pastMileage?: string | null
    color?: string | null
    displacement?: string | null
    firstRegistration?: string | null
    inspection?: string | null
    hasParts?: string | null
    registrationNumber?: string | null
    startPrice?: number
    currentPrice?: number
    result?: string | null
    historicalRates?: string | null
    overallGrade?: number | null
    engineGrade?: number | null
    frontGrade?: number | null
    exteriorGrade?: number | null
    rearGrade?: number | null
    electricGrade?: number | null
    frameGrade?: number | null
    awaGrade?: string | null
    inspectionDetails?: string | null
    awaReport?: string | null
    sellerDeclaration?: string | null
    images?: string | null
    videoUrls?: string | null
    remarks?: string | null
    status?: string
    importedAt?: Date | string
    updatedAt?: Date | string
  }

  export type BikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bdsId?: StringFieldUpdateOperationsInput | string
    lane?: NullableStringFieldUpdateOperationsInput | string | null
    auctionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    auctionDate?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    maker?: NullableStringFieldUpdateOperationsInput | string | null
    makerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    listingType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    engineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    documentMileage?: NullableStringFieldUpdateOperationsInput | string | null
    pastMileage?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    displacement?: NullableStringFieldUpdateOperationsInput | string | null
    firstRegistration?: NullableStringFieldUpdateOperationsInput | string | null
    inspection?: NullableStringFieldUpdateOperationsInput | string | null
    hasParts?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    startPrice?: IntFieldUpdateOperationsInput | number
    currentPrice?: IntFieldUpdateOperationsInput | number
    result?: NullableStringFieldUpdateOperationsInput | string | null
    historicalRates?: NullableStringFieldUpdateOperationsInput | string | null
    overallGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    engineGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frontGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    exteriorGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    rearGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    electricGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frameGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    awaGrade?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    awaReport?: NullableStringFieldUpdateOperationsInput | string | null
    sellerDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bdsId?: StringFieldUpdateOperationsInput | string
    lane?: NullableStringFieldUpdateOperationsInput | string | null
    auctionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    auctionDate?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    maker?: NullableStringFieldUpdateOperationsInput | string | null
    makerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    listingType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    engineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    documentMileage?: NullableStringFieldUpdateOperationsInput | string | null
    pastMileage?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    displacement?: NullableStringFieldUpdateOperationsInput | string | null
    firstRegistration?: NullableStringFieldUpdateOperationsInput | string | null
    inspection?: NullableStringFieldUpdateOperationsInput | string | null
    hasParts?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    startPrice?: IntFieldUpdateOperationsInput | number
    currentPrice?: IntFieldUpdateOperationsInput | number
    result?: NullableStringFieldUpdateOperationsInput | string | null
    historicalRates?: NullableStringFieldUpdateOperationsInput | string | null
    overallGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    engineGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frontGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    exteriorGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    rearGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    electricGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frameGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    awaGrade?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    awaReport?: NullableStringFieldUpdateOperationsInput | string | null
    sellerDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    totalAmount: number
    currency?: string
    exchangeRate?: number
    paymentMethod?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    bike: BikeCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId: string
    bikeId: string
    totalAmount: number
    currency?: string
    exchangeRate?: number
    paymentMethod?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    bike?: BikeUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    userId: string
    bikeId: string
    totalAmount: number
    currency?: string
    exchangeRate?: number
    paymentMethod?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBidsInput
    bike: BikeCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateInput = {
    id?: string
    userId: string
    bikeId: string
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
  }

  export type BidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBidsNestedInput
    bike?: BikeUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateManyInput = {
    id?: string
    userId: string
    bikeId: string
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
  }

  export type BidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerCreateInput = {
    id?: string
    name: string
    type: string
    status: string
    destination: string
    capacity: number
    filled: number
    etd?: string | null
    eta?: string | null
    price?: string | null
    features?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContainerUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    status: string
    destination: string
    capacity: number
    filled: number
    etd?: string | null
    eta?: string | null
    price?: string | null
    features?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContainerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    filled?: IntFieldUpdateOperationsInput | number
    etd?: NullableStringFieldUpdateOperationsInput | string | null
    eta?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    features?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    filled?: IntFieldUpdateOperationsInput | number
    etd?: NullableStringFieldUpdateOperationsInput | string | null
    eta?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    features?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerCreateManyInput = {
    id?: string
    name: string
    type: string
    status: string
    destination: string
    capacity: number
    filled: number
    etd?: string | null
    eta?: string | null
    price?: string | null
    features?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContainerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    filled?: IntFieldUpdateOperationsInput | number
    etd?: NullableStringFieldUpdateOperationsInput | string | null
    eta?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    features?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    filled?: IntFieldUpdateOperationsInput | number
    etd?: NullableStringFieldUpdateOperationsInput | string | null
    eta?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    features?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateInput = {
    id?: string
    userId: string
    containerId: string
    bikeIds?: string
    shippingAddress: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    userId: string
    containerId: string
    bikeIds?: string
    shippingAddress: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    containerId?: StringFieldUpdateOperationsInput | string
    bikeIds?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    containerId?: StringFieldUpdateOperationsInput | string
    bikeIds?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyInput = {
    id?: string
    userId: string
    containerId: string
    bikeIds?: string
    shippingAddress: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    containerId?: StringFieldUpdateOperationsInput | string
    bikeIds?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    containerId?: StringFieldUpdateOperationsInput | string
    bikeIds?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingCreateInput = {
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type SystemSettingUncheckedCreateInput = {
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type SystemSettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingCreateManyInput = {
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type SystemSettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportLogCreateInput = {
    id?: string
    timestamp?: Date | string
    bikesImported: number
    errors?: string
  }

  export type ImportLogUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    bikesImported: number
    errors?: string
  }

  export type ImportLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bikesImported?: IntFieldUpdateOperationsInput | number
    errors?: StringFieldUpdateOperationsInput | string
  }

  export type ImportLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bikesImported?: IntFieldUpdateOperationsInput | number
    errors?: StringFieldUpdateOperationsInput | string
  }

  export type ImportLogCreateManyInput = {
    id?: string
    timestamp?: Date | string
    bikesImported: number
    errors?: string
  }

  export type ImportLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bikesImported?: IntFieldUpdateOperationsInput | number
    errors?: StringFieldUpdateOperationsInput | string
  }

  export type ImportLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bikesImported?: IntFieldUpdateOperationsInput | number
    errors?: StringFieldUpdateOperationsInput | string
  }

  export type AdminTaskCreateInput = {
    id?: string
    type?: string
    title: string
    description?: string | null
    permissionId?: string
    completed?: boolean
    createdAt?: Date | string
    dueDate?: Date | string | null
    assignedToName?: string | null
  }

  export type AdminTaskUncheckedCreateInput = {
    id?: string
    type?: string
    title: string
    description?: string | null
    permissionId?: string
    completed?: boolean
    createdAt?: Date | string
    dueDate?: Date | string | null
    assignedToName?: string | null
  }

  export type AdminTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissionId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissionId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminTaskCreateManyInput = {
    id?: string
    type?: string
    title: string
    description?: string | null
    permissionId?: string
    completed?: boolean
    createdAt?: Date | string
    dueDate?: Date | string | null
    assignedToName?: string | null
  }

  export type AdminTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissionId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissionId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SnsSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    platform?: SortOrder
    postUrl?: SortOrder
    status?: SortOrder
    initialViews?: SortOrder
    initialLikes?: SortOrder
    verifiedViews?: SortOrder
    verifiedLikes?: SortOrder
    verifiedShares?: SortOrder
    rewardGranted?: SortOrder
    metricsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnsSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    initialViews?: SortOrder
    initialLikes?: SortOrder
    verifiedViews?: SortOrder
    verifiedLikes?: SortOrder
    verifiedShares?: SortOrder
  }

  export type SnsSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    platform?: SortOrder
    postUrl?: SortOrder
    status?: SortOrder
    initialViews?: SortOrder
    initialLikes?: SortOrder
    verifiedViews?: SortOrder
    verifiedLikes?: SortOrder
    verifiedShares?: SortOrder
    rewardGranted?: SortOrder
    metricsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnsSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    platform?: SortOrder
    postUrl?: SortOrder
    status?: SortOrder
    initialViews?: SortOrder
    initialLikes?: SortOrder
    verifiedViews?: SortOrder
    verifiedLikes?: SortOrder
    verifiedShares?: SortOrder
    rewardGranted?: SortOrder
    metricsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnsSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    initialViews?: SortOrder
    initialLikes?: SortOrder
    verifiedViews?: SortOrder
    verifiedLikes?: SortOrder
    verifiedShares?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type KycDocumentListRelationFilter = {
    every?: KycDocumentWhereInput
    some?: KycDocumentWhereInput
    none?: KycDocumentWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type BidListRelationFilter = {
    every?: BidWhereInput
    some?: BidWhereInput
    none?: BidWhereInput
  }

  export type KycDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    preferredCurrency?: SortOrder
    memberType?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    corporateName?: SortOrder
    corporateRegNum?: SortOrder
    representative?: SortOrder
    memberId?: SortOrder
    kycStatus?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    preferredCurrency?: SortOrder
    memberType?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    corporateName?: SortOrder
    corporateRegNum?: SortOrder
    representative?: SortOrder
    memberId?: SortOrder
    kycStatus?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    preferredCurrency?: SortOrder
    memberType?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    corporateName?: SortOrder
    corporateRegNum?: SortOrder
    representative?: SortOrder
    memberId?: SortOrder
    kycStatus?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type KycDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KycDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KycDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BikeCountOrderByAggregateInput = {
    id?: SortOrder
    bdsId?: SortOrder
    lane?: SortOrder
    auctionNumber?: SortOrder
    auctionDate?: SortOrder
    name?: SortOrder
    maker?: SortOrder
    makerConfirmed?: SortOrder
    region?: SortOrder
    inspectionStatus?: SortOrder
    listingType?: SortOrder
    vin?: SortOrder
    engineNumber?: SortOrder
    mileage?: SortOrder
    documentMileage?: SortOrder
    pastMileage?: SortOrder
    color?: SortOrder
    displacement?: SortOrder
    firstRegistration?: SortOrder
    inspection?: SortOrder
    hasParts?: SortOrder
    registrationNumber?: SortOrder
    startPrice?: SortOrder
    currentPrice?: SortOrder
    result?: SortOrder
    historicalRates?: SortOrder
    overallGrade?: SortOrder
    engineGrade?: SortOrder
    frontGrade?: SortOrder
    exteriorGrade?: SortOrder
    rearGrade?: SortOrder
    electricGrade?: SortOrder
    frameGrade?: SortOrder
    awaGrade?: SortOrder
    inspectionDetails?: SortOrder
    awaReport?: SortOrder
    sellerDeclaration?: SortOrder
    images?: SortOrder
    videoUrls?: SortOrder
    remarks?: SortOrder
    status?: SortOrder
    importedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BikeAvgOrderByAggregateInput = {
    startPrice?: SortOrder
    currentPrice?: SortOrder
    overallGrade?: SortOrder
    engineGrade?: SortOrder
    frontGrade?: SortOrder
    exteriorGrade?: SortOrder
    rearGrade?: SortOrder
    electricGrade?: SortOrder
    frameGrade?: SortOrder
  }

  export type BikeMaxOrderByAggregateInput = {
    id?: SortOrder
    bdsId?: SortOrder
    lane?: SortOrder
    auctionNumber?: SortOrder
    auctionDate?: SortOrder
    name?: SortOrder
    maker?: SortOrder
    makerConfirmed?: SortOrder
    region?: SortOrder
    inspectionStatus?: SortOrder
    listingType?: SortOrder
    vin?: SortOrder
    engineNumber?: SortOrder
    mileage?: SortOrder
    documentMileage?: SortOrder
    pastMileage?: SortOrder
    color?: SortOrder
    displacement?: SortOrder
    firstRegistration?: SortOrder
    inspection?: SortOrder
    hasParts?: SortOrder
    registrationNumber?: SortOrder
    startPrice?: SortOrder
    currentPrice?: SortOrder
    result?: SortOrder
    historicalRates?: SortOrder
    overallGrade?: SortOrder
    engineGrade?: SortOrder
    frontGrade?: SortOrder
    exteriorGrade?: SortOrder
    rearGrade?: SortOrder
    electricGrade?: SortOrder
    frameGrade?: SortOrder
    awaGrade?: SortOrder
    inspectionDetails?: SortOrder
    awaReport?: SortOrder
    sellerDeclaration?: SortOrder
    images?: SortOrder
    videoUrls?: SortOrder
    remarks?: SortOrder
    status?: SortOrder
    importedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BikeMinOrderByAggregateInput = {
    id?: SortOrder
    bdsId?: SortOrder
    lane?: SortOrder
    auctionNumber?: SortOrder
    auctionDate?: SortOrder
    name?: SortOrder
    maker?: SortOrder
    makerConfirmed?: SortOrder
    region?: SortOrder
    inspectionStatus?: SortOrder
    listingType?: SortOrder
    vin?: SortOrder
    engineNumber?: SortOrder
    mileage?: SortOrder
    documentMileage?: SortOrder
    pastMileage?: SortOrder
    color?: SortOrder
    displacement?: SortOrder
    firstRegistration?: SortOrder
    inspection?: SortOrder
    hasParts?: SortOrder
    registrationNumber?: SortOrder
    startPrice?: SortOrder
    currentPrice?: SortOrder
    result?: SortOrder
    historicalRates?: SortOrder
    overallGrade?: SortOrder
    engineGrade?: SortOrder
    frontGrade?: SortOrder
    exteriorGrade?: SortOrder
    rearGrade?: SortOrder
    electricGrade?: SortOrder
    frameGrade?: SortOrder
    awaGrade?: SortOrder
    inspectionDetails?: SortOrder
    awaReport?: SortOrder
    sellerDeclaration?: SortOrder
    images?: SortOrder
    videoUrls?: SortOrder
    remarks?: SortOrder
    status?: SortOrder
    importedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BikeSumOrderByAggregateInput = {
    startPrice?: SortOrder
    currentPrice?: SortOrder
    overallGrade?: SortOrder
    engineGrade?: SortOrder
    frontGrade?: SortOrder
    exteriorGrade?: SortOrder
    rearGrade?: SortOrder
    electricGrade?: SortOrder
    frameGrade?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BikeRelationFilter = {
    is?: BikeWhereInput
    isNot?: BikeWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    exchangeRate?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    exchangeRate?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BidCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BidAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BidMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BidMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bikeId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BidSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ContainerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    destination?: SortOrder
    capacity?: SortOrder
    filled?: SortOrder
    etd?: SortOrder
    eta?: SortOrder
    price?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContainerAvgOrderByAggregateInput = {
    capacity?: SortOrder
    filled?: SortOrder
  }

  export type ContainerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    destination?: SortOrder
    capacity?: SortOrder
    filled?: SortOrder
    etd?: SortOrder
    eta?: SortOrder
    price?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContainerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    destination?: SortOrder
    capacity?: SortOrder
    filled?: SortOrder
    etd?: SortOrder
    eta?: SortOrder
    price?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContainerSumOrderByAggregateInput = {
    capacity?: SortOrder
    filled?: SortOrder
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    containerId?: SortOrder
    bikeIds?: SortOrder
    shippingAddress?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    containerId?: SortOrder
    bikeIds?: SortOrder
    shippingAddress?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    containerId?: SortOrder
    bikeIds?: SortOrder
    shippingAddress?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImportLogCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bikesImported?: SortOrder
    errors?: SortOrder
  }

  export type ImportLogAvgOrderByAggregateInput = {
    bikesImported?: SortOrder
  }

  export type ImportLogMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bikesImported?: SortOrder
    errors?: SortOrder
  }

  export type ImportLogMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bikesImported?: SortOrder
    errors?: SortOrder
  }

  export type ImportLogSumOrderByAggregateInput = {
    bikesImported?: SortOrder
  }

  export type AdminTaskCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    permissionId?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    dueDate?: SortOrder
    assignedToName?: SortOrder
  }

  export type AdminTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    permissionId?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    dueDate?: SortOrder
    assignedToName?: SortOrder
  }

  export type AdminTaskMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    permissionId?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    dueDate?: SortOrder
    assignedToName?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KycDocumentCreateNestedManyWithoutUserInput = {
    create?: XOR<KycDocumentCreateWithoutUserInput, KycDocumentUncheckedCreateWithoutUserInput> | KycDocumentCreateWithoutUserInput[] | KycDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycDocumentCreateOrConnectWithoutUserInput | KycDocumentCreateOrConnectWithoutUserInput[]
    createMany?: KycDocumentCreateManyUserInputEnvelope
    connect?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BidCreateNestedManyWithoutUserInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type KycDocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<KycDocumentCreateWithoutUserInput, KycDocumentUncheckedCreateWithoutUserInput> | KycDocumentCreateWithoutUserInput[] | KycDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycDocumentCreateOrConnectWithoutUserInput | KycDocumentCreateOrConnectWithoutUserInput[]
    createMany?: KycDocumentCreateManyUserInputEnvelope
    connect?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type KycDocumentUpdateManyWithoutUserNestedInput = {
    create?: XOR<KycDocumentCreateWithoutUserInput, KycDocumentUncheckedCreateWithoutUserInput> | KycDocumentCreateWithoutUserInput[] | KycDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycDocumentCreateOrConnectWithoutUserInput | KycDocumentCreateOrConnectWithoutUserInput[]
    upsert?: KycDocumentUpsertWithWhereUniqueWithoutUserInput | KycDocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KycDocumentCreateManyUserInputEnvelope
    set?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    disconnect?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    delete?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    connect?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    update?: KycDocumentUpdateWithWhereUniqueWithoutUserInput | KycDocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KycDocumentUpdateManyWithWhereWithoutUserInput | KycDocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KycDocumentScalarWhereInput | KycDocumentScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BidUpdateManyWithoutUserNestedInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutUserInput | BidUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutUserInput | BidUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BidUpdateManyWithWhereWithoutUserInput | BidUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type KycDocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<KycDocumentCreateWithoutUserInput, KycDocumentUncheckedCreateWithoutUserInput> | KycDocumentCreateWithoutUserInput[] | KycDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycDocumentCreateOrConnectWithoutUserInput | KycDocumentCreateOrConnectWithoutUserInput[]
    upsert?: KycDocumentUpsertWithWhereUniqueWithoutUserInput | KycDocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KycDocumentCreateManyUserInputEnvelope
    set?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    disconnect?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    delete?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    connect?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    update?: KycDocumentUpdateWithWhereUniqueWithoutUserInput | KycDocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KycDocumentUpdateManyWithWhereWithoutUserInput | KycDocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KycDocumentScalarWhereInput | KycDocumentScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutUserInput | BidUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutUserInput | BidUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BidUpdateManyWithWhereWithoutUserInput | BidUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutKycDocumentsInput = {
    create?: XOR<UserCreateWithoutKycDocumentsInput, UserUncheckedCreateWithoutKycDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutKycDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutKycDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutKycDocumentsInput, UserUncheckedCreateWithoutKycDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutKycDocumentsInput
    upsert?: UserUpsertWithoutKycDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKycDocumentsInput, UserUpdateWithoutKycDocumentsInput>, UserUncheckedUpdateWithoutKycDocumentsInput>
  }

  export type OrderCreateNestedManyWithoutBikeInput = {
    create?: XOR<OrderCreateWithoutBikeInput, OrderUncheckedCreateWithoutBikeInput> | OrderCreateWithoutBikeInput[] | OrderUncheckedCreateWithoutBikeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBikeInput | OrderCreateOrConnectWithoutBikeInput[]
    createMany?: OrderCreateManyBikeInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BidCreateNestedManyWithoutBikeInput = {
    create?: XOR<BidCreateWithoutBikeInput, BidUncheckedCreateWithoutBikeInput> | BidCreateWithoutBikeInput[] | BidUncheckedCreateWithoutBikeInput[]
    connectOrCreate?: BidCreateOrConnectWithoutBikeInput | BidCreateOrConnectWithoutBikeInput[]
    createMany?: BidCreateManyBikeInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutBikeInput = {
    create?: XOR<OrderCreateWithoutBikeInput, OrderUncheckedCreateWithoutBikeInput> | OrderCreateWithoutBikeInput[] | OrderUncheckedCreateWithoutBikeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBikeInput | OrderCreateOrConnectWithoutBikeInput[]
    createMany?: OrderCreateManyBikeInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutBikeInput = {
    create?: XOR<BidCreateWithoutBikeInput, BidUncheckedCreateWithoutBikeInput> | BidCreateWithoutBikeInput[] | BidUncheckedCreateWithoutBikeInput[]
    connectOrCreate?: BidCreateOrConnectWithoutBikeInput | BidCreateOrConnectWithoutBikeInput[]
    createMany?: BidCreateManyBikeInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateManyWithoutBikeNestedInput = {
    create?: XOR<OrderCreateWithoutBikeInput, OrderUncheckedCreateWithoutBikeInput> | OrderCreateWithoutBikeInput[] | OrderUncheckedCreateWithoutBikeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBikeInput | OrderCreateOrConnectWithoutBikeInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBikeInput | OrderUpsertWithWhereUniqueWithoutBikeInput[]
    createMany?: OrderCreateManyBikeInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBikeInput | OrderUpdateWithWhereUniqueWithoutBikeInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBikeInput | OrderUpdateManyWithWhereWithoutBikeInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BidUpdateManyWithoutBikeNestedInput = {
    create?: XOR<BidCreateWithoutBikeInput, BidUncheckedCreateWithoutBikeInput> | BidCreateWithoutBikeInput[] | BidUncheckedCreateWithoutBikeInput[]
    connectOrCreate?: BidCreateOrConnectWithoutBikeInput | BidCreateOrConnectWithoutBikeInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutBikeInput | BidUpsertWithWhereUniqueWithoutBikeInput[]
    createMany?: BidCreateManyBikeInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutBikeInput | BidUpdateWithWhereUniqueWithoutBikeInput[]
    updateMany?: BidUpdateManyWithWhereWithoutBikeInput | BidUpdateManyWithWhereWithoutBikeInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutBikeNestedInput = {
    create?: XOR<OrderCreateWithoutBikeInput, OrderUncheckedCreateWithoutBikeInput> | OrderCreateWithoutBikeInput[] | OrderUncheckedCreateWithoutBikeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBikeInput | OrderCreateOrConnectWithoutBikeInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBikeInput | OrderUpsertWithWhereUniqueWithoutBikeInput[]
    createMany?: OrderCreateManyBikeInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBikeInput | OrderUpdateWithWhereUniqueWithoutBikeInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBikeInput | OrderUpdateManyWithWhereWithoutBikeInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutBikeNestedInput = {
    create?: XOR<BidCreateWithoutBikeInput, BidUncheckedCreateWithoutBikeInput> | BidCreateWithoutBikeInput[] | BidUncheckedCreateWithoutBikeInput[]
    connectOrCreate?: BidCreateOrConnectWithoutBikeInput | BidCreateOrConnectWithoutBikeInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutBikeInput | BidUpsertWithWhereUniqueWithoutBikeInput[]
    createMany?: BidCreateManyBikeInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutBikeInput | BidUpdateWithWhereUniqueWithoutBikeInput[]
    updateMany?: BidUpdateManyWithWhereWithoutBikeInput | BidUpdateManyWithWhereWithoutBikeInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type BikeCreateNestedOneWithoutOrdersInput = {
    create?: XOR<BikeCreateWithoutOrdersInput, BikeUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BikeCreateOrConnectWithoutOrdersInput
    connect?: BikeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type BikeUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<BikeCreateWithoutOrdersInput, BikeUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BikeCreateOrConnectWithoutOrdersInput
    upsert?: BikeUpsertWithoutOrdersInput
    connect?: BikeWhereUniqueInput
    update?: XOR<XOR<BikeUpdateToOneWithWhereWithoutOrdersInput, BikeUpdateWithoutOrdersInput>, BikeUncheckedUpdateWithoutOrdersInput>
  }

  export type UserCreateNestedOneWithoutBidsInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    connect?: UserWhereUniqueInput
  }

  export type BikeCreateNestedOneWithoutBidsInput = {
    create?: XOR<BikeCreateWithoutBidsInput, BikeUncheckedCreateWithoutBidsInput>
    connectOrCreate?: BikeCreateOrConnectWithoutBidsInput
    connect?: BikeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    upsert?: UserUpsertWithoutBidsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBidsInput, UserUpdateWithoutBidsInput>, UserUncheckedUpdateWithoutBidsInput>
  }

  export type BikeUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<BikeCreateWithoutBidsInput, BikeUncheckedCreateWithoutBidsInput>
    connectOrCreate?: BikeCreateOrConnectWithoutBidsInput
    upsert?: BikeUpsertWithoutBidsInput
    connect?: BikeWhereUniqueInput
    update?: XOR<XOR<BikeUpdateToOneWithWhereWithoutBidsInput, BikeUpdateWithoutBidsInput>, BikeUncheckedUpdateWithoutBidsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type KycDocumentCreateWithoutUserInput = {
    id?: string
    type: string
    fileUrl: string
    status?: string
    rejectionReason?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KycDocumentUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    fileUrl: string
    status?: string
    rejectionReason?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KycDocumentCreateOrConnectWithoutUserInput = {
    where: KycDocumentWhereUniqueInput
    create: XOR<KycDocumentCreateWithoutUserInput, KycDocumentUncheckedCreateWithoutUserInput>
  }

  export type KycDocumentCreateManyUserInputEnvelope = {
    data: KycDocumentCreateManyUserInput | KycDocumentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    totalAmount: number
    currency?: string
    exchangeRate?: number
    paymentMethod?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bike: BikeCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    bikeId: string
    totalAmount: number
    currency?: string
    exchangeRate?: number
    paymentMethod?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BidCreateWithoutUserInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
    bike: BikeCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutUserInput = {
    id?: string
    bikeId: string
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
  }

  export type BidCreateOrConnectWithoutUserInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput>
  }

  export type BidCreateManyUserInputEnvelope = {
    data: BidCreateManyUserInput | BidCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type KycDocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: KycDocumentWhereUniqueInput
    update: XOR<KycDocumentUpdateWithoutUserInput, KycDocumentUncheckedUpdateWithoutUserInput>
    create: XOR<KycDocumentCreateWithoutUserInput, KycDocumentUncheckedCreateWithoutUserInput>
  }

  export type KycDocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: KycDocumentWhereUniqueInput
    data: XOR<KycDocumentUpdateWithoutUserInput, KycDocumentUncheckedUpdateWithoutUserInput>
  }

  export type KycDocumentUpdateManyWithWhereWithoutUserInput = {
    where: KycDocumentScalarWhereInput
    data: XOR<KycDocumentUpdateManyMutationInput, KycDocumentUncheckedUpdateManyWithoutUserInput>
  }

  export type KycDocumentScalarWhereInput = {
    AND?: KycDocumentScalarWhereInput | KycDocumentScalarWhereInput[]
    OR?: KycDocumentScalarWhereInput[]
    NOT?: KycDocumentScalarWhereInput | KycDocumentScalarWhereInput[]
    id?: StringFilter<"KycDocument"> | string
    userId?: StringFilter<"KycDocument"> | string
    type?: StringFilter<"KycDocument"> | string
    fileUrl?: StringFilter<"KycDocument"> | string
    status?: StringFilter<"KycDocument"> | string
    rejectionReason?: StringNullableFilter<"KycDocument"> | string | null
    reviewedBy?: StringNullableFilter<"KycDocument"> | string | null
    reviewedAt?: DateTimeNullableFilter<"KycDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"KycDocument"> | Date | string
    updatedAt?: DateTimeFilter<"KycDocument"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    bikeId?: StringFilter<"Order"> | string
    totalAmount?: IntFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    exchangeRate?: FloatFilter<"Order"> | number
    paymentMethod?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type BidUpsertWithWhereUniqueWithoutUserInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutUserInput, BidUncheckedUpdateWithoutUserInput>
    create: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput>
  }

  export type BidUpdateWithWhereUniqueWithoutUserInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutUserInput, BidUncheckedUpdateWithoutUserInput>
  }

  export type BidUpdateManyWithWhereWithoutUserInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutUserInput>
  }

  export type BidScalarWhereInput = {
    AND?: BidScalarWhereInput | BidScalarWhereInput[]
    OR?: BidScalarWhereInput[]
    NOT?: BidScalarWhereInput | BidScalarWhereInput[]
    id?: StringFilter<"Bid"> | string
    userId?: StringFilter<"Bid"> | string
    bikeId?: StringFilter<"Bid"> | string
    amount?: IntFilter<"Bid"> | number
    currency?: StringFilter<"Bid"> | string
    status?: StringFilter<"Bid"> | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
  }

  export type UserCreateWithoutKycDocumentsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: string
    permissions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredCurrency?: string
    memberType?: string
    phoneNumber?: string | null
    address?: string | null
    corporateName?: string | null
    corporateRegNum?: string | null
    representative?: string | null
    memberId?: string | null
    kycStatus?: string
    orders?: OrderCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutKycDocumentsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: string
    permissions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredCurrency?: string
    memberType?: string
    phoneNumber?: string | null
    address?: string | null
    corporateName?: string | null
    corporateRegNum?: string | null
    representative?: string | null
    memberId?: string | null
    kycStatus?: string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutKycDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKycDocumentsInput, UserUncheckedCreateWithoutKycDocumentsInput>
  }

  export type UserUpsertWithoutKycDocumentsInput = {
    update: XOR<UserUpdateWithoutKycDocumentsInput, UserUncheckedUpdateWithoutKycDocumentsInput>
    create: XOR<UserCreateWithoutKycDocumentsInput, UserUncheckedCreateWithoutKycDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKycDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKycDocumentsInput, UserUncheckedUpdateWithoutKycDocumentsInput>
  }

  export type UserUpdateWithoutKycDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredCurrency?: StringFieldUpdateOperationsInput | string
    memberType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    corporateName?: NullableStringFieldUpdateOperationsInput | string | null
    corporateRegNum?: NullableStringFieldUpdateOperationsInput | string | null
    representative?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutKycDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredCurrency?: StringFieldUpdateOperationsInput | string
    memberType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    corporateName?: NullableStringFieldUpdateOperationsInput | string | null
    corporateRegNum?: NullableStringFieldUpdateOperationsInput | string | null
    representative?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderCreateWithoutBikeInput = {
    id?: string
    totalAmount: number
    currency?: string
    exchangeRate?: number
    paymentMethod?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutBikeInput = {
    id?: string
    userId: string
    totalAmount: number
    currency?: string
    exchangeRate?: number
    paymentMethod?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutBikeInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutBikeInput, OrderUncheckedCreateWithoutBikeInput>
  }

  export type OrderCreateManyBikeInputEnvelope = {
    data: OrderCreateManyBikeInput | OrderCreateManyBikeInput[]
    skipDuplicates?: boolean
  }

  export type BidCreateWithoutBikeInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutBikeInput = {
    id?: string
    userId: string
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
  }

  export type BidCreateOrConnectWithoutBikeInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutBikeInput, BidUncheckedCreateWithoutBikeInput>
  }

  export type BidCreateManyBikeInputEnvelope = {
    data: BidCreateManyBikeInput | BidCreateManyBikeInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutBikeInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutBikeInput, OrderUncheckedUpdateWithoutBikeInput>
    create: XOR<OrderCreateWithoutBikeInput, OrderUncheckedCreateWithoutBikeInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutBikeInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutBikeInput, OrderUncheckedUpdateWithoutBikeInput>
  }

  export type OrderUpdateManyWithWhereWithoutBikeInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutBikeInput>
  }

  export type BidUpsertWithWhereUniqueWithoutBikeInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutBikeInput, BidUncheckedUpdateWithoutBikeInput>
    create: XOR<BidCreateWithoutBikeInput, BidUncheckedCreateWithoutBikeInput>
  }

  export type BidUpdateWithWhereUniqueWithoutBikeInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutBikeInput, BidUncheckedUpdateWithoutBikeInput>
  }

  export type BidUpdateManyWithWhereWithoutBikeInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutBikeInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: string
    permissions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredCurrency?: string
    memberType?: string
    phoneNumber?: string | null
    address?: string | null
    corporateName?: string | null
    corporateRegNum?: string | null
    representative?: string | null
    memberId?: string | null
    kycStatus?: string
    kycDocuments?: KycDocumentCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: string
    permissions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredCurrency?: string
    memberType?: string
    phoneNumber?: string | null
    address?: string | null
    corporateName?: string | null
    corporateRegNum?: string | null
    representative?: string | null
    memberId?: string | null
    kycStatus?: string
    kycDocuments?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type BikeCreateWithoutOrdersInput = {
    id?: string
    bdsId: string
    lane?: string | null
    auctionNumber?: string | null
    auctionDate?: string | null
    name: string
    maker?: string | null
    makerConfirmed?: boolean
    region?: string | null
    inspectionStatus?: string | null
    listingType?: string | null
    vin?: string | null
    engineNumber?: string | null
    mileage?: string | null
    documentMileage?: string | null
    pastMileage?: string | null
    color?: string | null
    displacement?: string | null
    firstRegistration?: string | null
    inspection?: string | null
    hasParts?: string | null
    registrationNumber?: string | null
    startPrice?: number
    currentPrice?: number
    result?: string | null
    historicalRates?: string | null
    overallGrade?: number | null
    engineGrade?: number | null
    frontGrade?: number | null
    exteriorGrade?: number | null
    rearGrade?: number | null
    electricGrade?: number | null
    frameGrade?: number | null
    awaGrade?: string | null
    inspectionDetails?: string | null
    awaReport?: string | null
    sellerDeclaration?: string | null
    images?: string | null
    videoUrls?: string | null
    remarks?: string | null
    status?: string
    importedAt?: Date | string
    updatedAt?: Date | string
    bids?: BidCreateNestedManyWithoutBikeInput
  }

  export type BikeUncheckedCreateWithoutOrdersInput = {
    id?: string
    bdsId: string
    lane?: string | null
    auctionNumber?: string | null
    auctionDate?: string | null
    name: string
    maker?: string | null
    makerConfirmed?: boolean
    region?: string | null
    inspectionStatus?: string | null
    listingType?: string | null
    vin?: string | null
    engineNumber?: string | null
    mileage?: string | null
    documentMileage?: string | null
    pastMileage?: string | null
    color?: string | null
    displacement?: string | null
    firstRegistration?: string | null
    inspection?: string | null
    hasParts?: string | null
    registrationNumber?: string | null
    startPrice?: number
    currentPrice?: number
    result?: string | null
    historicalRates?: string | null
    overallGrade?: number | null
    engineGrade?: number | null
    frontGrade?: number | null
    exteriorGrade?: number | null
    rearGrade?: number | null
    electricGrade?: number | null
    frameGrade?: number | null
    awaGrade?: string | null
    inspectionDetails?: string | null
    awaReport?: string | null
    sellerDeclaration?: string | null
    images?: string | null
    videoUrls?: string | null
    remarks?: string | null
    status?: string
    importedAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutBikeInput
  }

  export type BikeCreateOrConnectWithoutOrdersInput = {
    where: BikeWhereUniqueInput
    create: XOR<BikeCreateWithoutOrdersInput, BikeUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredCurrency?: StringFieldUpdateOperationsInput | string
    memberType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    corporateName?: NullableStringFieldUpdateOperationsInput | string | null
    corporateRegNum?: NullableStringFieldUpdateOperationsInput | string | null
    representative?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: StringFieldUpdateOperationsInput | string
    kycDocuments?: KycDocumentUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredCurrency?: StringFieldUpdateOperationsInput | string
    memberType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    corporateName?: NullableStringFieldUpdateOperationsInput | string | null
    corporateRegNum?: NullableStringFieldUpdateOperationsInput | string | null
    representative?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: StringFieldUpdateOperationsInput | string
    kycDocuments?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BikeUpsertWithoutOrdersInput = {
    update: XOR<BikeUpdateWithoutOrdersInput, BikeUncheckedUpdateWithoutOrdersInput>
    create: XOR<BikeCreateWithoutOrdersInput, BikeUncheckedCreateWithoutOrdersInput>
    where?: BikeWhereInput
  }

  export type BikeUpdateToOneWithWhereWithoutOrdersInput = {
    where?: BikeWhereInput
    data: XOR<BikeUpdateWithoutOrdersInput, BikeUncheckedUpdateWithoutOrdersInput>
  }

  export type BikeUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    bdsId?: StringFieldUpdateOperationsInput | string
    lane?: NullableStringFieldUpdateOperationsInput | string | null
    auctionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    auctionDate?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    maker?: NullableStringFieldUpdateOperationsInput | string | null
    makerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    listingType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    engineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    documentMileage?: NullableStringFieldUpdateOperationsInput | string | null
    pastMileage?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    displacement?: NullableStringFieldUpdateOperationsInput | string | null
    firstRegistration?: NullableStringFieldUpdateOperationsInput | string | null
    inspection?: NullableStringFieldUpdateOperationsInput | string | null
    hasParts?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    startPrice?: IntFieldUpdateOperationsInput | number
    currentPrice?: IntFieldUpdateOperationsInput | number
    result?: NullableStringFieldUpdateOperationsInput | string | null
    historicalRates?: NullableStringFieldUpdateOperationsInput | string | null
    overallGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    engineGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frontGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    exteriorGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    rearGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    electricGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frameGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    awaGrade?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    awaReport?: NullableStringFieldUpdateOperationsInput | string | null
    sellerDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutBikeNestedInput
  }

  export type BikeUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    bdsId?: StringFieldUpdateOperationsInput | string
    lane?: NullableStringFieldUpdateOperationsInput | string | null
    auctionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    auctionDate?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    maker?: NullableStringFieldUpdateOperationsInput | string | null
    makerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    listingType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    engineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    documentMileage?: NullableStringFieldUpdateOperationsInput | string | null
    pastMileage?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    displacement?: NullableStringFieldUpdateOperationsInput | string | null
    firstRegistration?: NullableStringFieldUpdateOperationsInput | string | null
    inspection?: NullableStringFieldUpdateOperationsInput | string | null
    hasParts?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    startPrice?: IntFieldUpdateOperationsInput | number
    currentPrice?: IntFieldUpdateOperationsInput | number
    result?: NullableStringFieldUpdateOperationsInput | string | null
    historicalRates?: NullableStringFieldUpdateOperationsInput | string | null
    overallGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    engineGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frontGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    exteriorGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    rearGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    electricGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frameGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    awaGrade?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    awaReport?: NullableStringFieldUpdateOperationsInput | string | null
    sellerDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutBikeNestedInput
  }

  export type UserCreateWithoutBidsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: string
    permissions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredCurrency?: string
    memberType?: string
    phoneNumber?: string | null
    address?: string | null
    corporateName?: string | null
    corporateRegNum?: string | null
    representative?: string | null
    memberId?: string | null
    kycStatus?: string
    kycDocuments?: KycDocumentCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBidsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    role?: string
    permissions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredCurrency?: string
    memberType?: string
    phoneNumber?: string | null
    address?: string | null
    corporateName?: string | null
    corporateRegNum?: string | null
    representative?: string | null
    memberId?: string | null
    kycStatus?: string
    kycDocuments?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBidsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
  }

  export type BikeCreateWithoutBidsInput = {
    id?: string
    bdsId: string
    lane?: string | null
    auctionNumber?: string | null
    auctionDate?: string | null
    name: string
    maker?: string | null
    makerConfirmed?: boolean
    region?: string | null
    inspectionStatus?: string | null
    listingType?: string | null
    vin?: string | null
    engineNumber?: string | null
    mileage?: string | null
    documentMileage?: string | null
    pastMileage?: string | null
    color?: string | null
    displacement?: string | null
    firstRegistration?: string | null
    inspection?: string | null
    hasParts?: string | null
    registrationNumber?: string | null
    startPrice?: number
    currentPrice?: number
    result?: string | null
    historicalRates?: string | null
    overallGrade?: number | null
    engineGrade?: number | null
    frontGrade?: number | null
    exteriorGrade?: number | null
    rearGrade?: number | null
    electricGrade?: number | null
    frameGrade?: number | null
    awaGrade?: string | null
    inspectionDetails?: string | null
    awaReport?: string | null
    sellerDeclaration?: string | null
    images?: string | null
    videoUrls?: string | null
    remarks?: string | null
    status?: string
    importedAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutBikeInput
  }

  export type BikeUncheckedCreateWithoutBidsInput = {
    id?: string
    bdsId: string
    lane?: string | null
    auctionNumber?: string | null
    auctionDate?: string | null
    name: string
    maker?: string | null
    makerConfirmed?: boolean
    region?: string | null
    inspectionStatus?: string | null
    listingType?: string | null
    vin?: string | null
    engineNumber?: string | null
    mileage?: string | null
    documentMileage?: string | null
    pastMileage?: string | null
    color?: string | null
    displacement?: string | null
    firstRegistration?: string | null
    inspection?: string | null
    hasParts?: string | null
    registrationNumber?: string | null
    startPrice?: number
    currentPrice?: number
    result?: string | null
    historicalRates?: string | null
    overallGrade?: number | null
    engineGrade?: number | null
    frontGrade?: number | null
    exteriorGrade?: number | null
    rearGrade?: number | null
    electricGrade?: number | null
    frameGrade?: number | null
    awaGrade?: string | null
    inspectionDetails?: string | null
    awaReport?: string | null
    sellerDeclaration?: string | null
    images?: string | null
    videoUrls?: string | null
    remarks?: string | null
    status?: string
    importedAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutBikeInput
  }

  export type BikeCreateOrConnectWithoutBidsInput = {
    where: BikeWhereUniqueInput
    create: XOR<BikeCreateWithoutBidsInput, BikeUncheckedCreateWithoutBidsInput>
  }

  export type UserUpsertWithoutBidsInput = {
    update: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBidsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
  }

  export type UserUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredCurrency?: StringFieldUpdateOperationsInput | string
    memberType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    corporateName?: NullableStringFieldUpdateOperationsInput | string | null
    corporateRegNum?: NullableStringFieldUpdateOperationsInput | string | null
    representative?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: StringFieldUpdateOperationsInput | string
    kycDocuments?: KycDocumentUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredCurrency?: StringFieldUpdateOperationsInput | string
    memberType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    corporateName?: NullableStringFieldUpdateOperationsInput | string | null
    corporateRegNum?: NullableStringFieldUpdateOperationsInput | string | null
    representative?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: StringFieldUpdateOperationsInput | string
    kycDocuments?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BikeUpsertWithoutBidsInput = {
    update: XOR<BikeUpdateWithoutBidsInput, BikeUncheckedUpdateWithoutBidsInput>
    create: XOR<BikeCreateWithoutBidsInput, BikeUncheckedCreateWithoutBidsInput>
    where?: BikeWhereInput
  }

  export type BikeUpdateToOneWithWhereWithoutBidsInput = {
    where?: BikeWhereInput
    data: XOR<BikeUpdateWithoutBidsInput, BikeUncheckedUpdateWithoutBidsInput>
  }

  export type BikeUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bdsId?: StringFieldUpdateOperationsInput | string
    lane?: NullableStringFieldUpdateOperationsInput | string | null
    auctionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    auctionDate?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    maker?: NullableStringFieldUpdateOperationsInput | string | null
    makerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    listingType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    engineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    documentMileage?: NullableStringFieldUpdateOperationsInput | string | null
    pastMileage?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    displacement?: NullableStringFieldUpdateOperationsInput | string | null
    firstRegistration?: NullableStringFieldUpdateOperationsInput | string | null
    inspection?: NullableStringFieldUpdateOperationsInput | string | null
    hasParts?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    startPrice?: IntFieldUpdateOperationsInput | number
    currentPrice?: IntFieldUpdateOperationsInput | number
    result?: NullableStringFieldUpdateOperationsInput | string | null
    historicalRates?: NullableStringFieldUpdateOperationsInput | string | null
    overallGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    engineGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frontGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    exteriorGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    rearGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    electricGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frameGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    awaGrade?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    awaReport?: NullableStringFieldUpdateOperationsInput | string | null
    sellerDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutBikeNestedInput
  }

  export type BikeUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bdsId?: StringFieldUpdateOperationsInput | string
    lane?: NullableStringFieldUpdateOperationsInput | string | null
    auctionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    auctionDate?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    maker?: NullableStringFieldUpdateOperationsInput | string | null
    makerConfirmed?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    listingType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    engineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    documentMileage?: NullableStringFieldUpdateOperationsInput | string | null
    pastMileage?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    displacement?: NullableStringFieldUpdateOperationsInput | string | null
    firstRegistration?: NullableStringFieldUpdateOperationsInput | string | null
    inspection?: NullableStringFieldUpdateOperationsInput | string | null
    hasParts?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    startPrice?: IntFieldUpdateOperationsInput | number
    currentPrice?: IntFieldUpdateOperationsInput | number
    result?: NullableStringFieldUpdateOperationsInput | string | null
    historicalRates?: NullableStringFieldUpdateOperationsInput | string | null
    overallGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    engineGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frontGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    exteriorGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    rearGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    electricGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    frameGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    awaGrade?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    awaReport?: NullableStringFieldUpdateOperationsInput | string | null
    sellerDeclaration?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutBikeNestedInput
  }

  export type KycDocumentCreateManyUserInput = {
    id?: string
    type: string
    fileUrl: string
    status?: string
    rejectionReason?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: string
    bikeId: string
    totalAmount: number
    currency?: string
    exchangeRate?: number
    paymentMethod?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidCreateManyUserInput = {
    id?: string
    bikeId: string
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
  }

  export type KycDocumentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycDocumentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycDocumentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bike?: BikeUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bike?: BikeUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bikeId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyBikeInput = {
    id?: string
    userId: string
    totalAmount: number
    currency?: string
    exchangeRate?: number
    paymentMethod?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidCreateManyBikeInput = {
    id?: string
    userId: string
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutBikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutBikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutBikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUpdateWithoutBikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutBikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyWithoutBikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BikeCountOutputTypeDefaultArgs instead
     */
    export type BikeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BikeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SnsSubmissionDefaultArgs instead
     */
    export type SnsSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SnsSubmissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KycDocumentDefaultArgs instead
     */
    export type KycDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KycDocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BikeDefaultArgs instead
     */
    export type BikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BikeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BidDefaultArgs instead
     */
    export type BidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BidDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContainerDefaultArgs instead
     */
    export type ContainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContainerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationDefaultArgs instead
     */
    export type ReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemSettingDefaultArgs instead
     */
    export type SystemSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemSettingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImportLogDefaultArgs instead
     */
    export type ImportLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImportLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminTaskDefaultArgs instead
     */
    export type AdminTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminTaskDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}