
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
    Bid: 'Bid'
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
      modelProps: 'snsSubmission' | 'user' | 'kycDocument' | 'bike' | 'order' | 'bid'
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