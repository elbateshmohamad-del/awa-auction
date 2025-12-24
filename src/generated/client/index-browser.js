
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SnsSubmissionScalarFieldEnum = {
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

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.KycDocumentScalarFieldEnum = {
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

exports.Prisma.BikeScalarFieldEnum = {
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

exports.Prisma.OrderScalarFieldEnum = {
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

exports.Prisma.BidScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  bikeId: 'bikeId',
  amount: 'amount',
  currency: 'currency',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  SnsSubmission: 'SnsSubmission',
  User: 'User',
  KycDocument: 'KycDocument',
  Bike: 'Bike',
  Order: 'Order',
  Bid: 'Bid'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
