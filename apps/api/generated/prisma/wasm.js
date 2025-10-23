
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
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

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  userName: 'userName',
  email: 'email',
  userProfile: 'userProfile',
  password: 'password',
  phoneNumber: 'phoneNumber',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  role: 'role',
  chatToken: 'chatToken'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  zip: 'zip',
  city: 'city',
  state: 'state',
  country: 'country',
  userId: 'userId',
  createdAt: 'createdAt',
  opponentId: 'opponentId'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionKey: 'sessionKey',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  userId: 'userId'
};

exports.Prisma.TeamAdminScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  role: 'role',
  isVerified: 'isVerified',
  createdAt: 'createdAt'
};

exports.Prisma.TeamMemberScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  role: 'role',
  createdAt: 'createdAt'
};

exports.Prisma.OpponentScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  jobTitle: 'jobTitle',
  email: 'email',
  phoneNumber: 'phoneNumber',
  zip: 'zip',
  city: 'city',
  state: 'state',
  country: 'country'
};

exports.Prisma.TeamClientScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  role: 'role',
  createdAt: 'createdAt'
};

exports.Prisma.CaseTagScalarFieldEnum = {
  id: 'id',
  label: 'label',
  caseId: 'caseId'
};

exports.Prisma.TeamMembershipScalarFieldEnum = {
  id: 'id',
  teamMemberId: 'teamMemberId',
  caseId: 'caseId',
  joinedAt: 'joinedAt'
};

exports.Prisma.ToDoListScalarFieldEnum = {
  id: 'id',
  task: 'task',
  userId: 'userId',
  isTaskChecked: 'isTaskChecked',
  taskForDate: 'taskForDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CaseScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  practiseArea: 'practiseArea',
  arrivalDate: 'arrivalDate',
  status: 'status',
  matterPriority: 'matterPriority',
  internalRefNumber: 'internalRefNumber',
  filedDate: 'filedDate',
  closedDate: 'closedDate',
  estimatedCloseDate: 'estimatedCloseDate',
  stage: 'stage',
  clientId: 'clientId',
  adminId: 'adminId',
  opponentId: 'opponentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CaseNoteScalarFieldEnum = {
  id: 'id',
  note: 'note',
  caseId: 'caseId',
  createdAt: 'createdAt'
};

exports.Prisma.CaseDocumentScalarFieldEnum = {
  id: 'id',
  caseId: 'caseId',
  documentUrl: 'documentUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CaseReminderScalarFieldEnum = {
  id: 'id',
  caseId: 'caseId',
  reminderDate: 'reminderDate',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CaseInvoiceScalarFieldEnum = {
  id: 'id',
  caseId: 'caseId',
  amount: 'amount',
  status: 'status',
  dueDate: 'dueDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CaseBillingScalarFieldEnum = {
  id: 'id',
  caseId: 'caseId',
  amount: 'amount',
  currency: 'currency',
  rateType: 'rateType',
  paymentStatus: 'paymentStatus',
  paymentMethod: 'paymentMethod',
  paymentDate: 'paymentDate',
  billingNote: 'billingNote',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DocumentScalarFieldEnum = {
  id: 'id',
  title: 'title',
  initialContent: 'initialContent',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
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
exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
  CLIENT: 'CLIENT'
};

exports.PracticeArea = exports.$Enums.PracticeArea = {
  CRIMINAL: 'CRIMINAL',
  CIVIL: 'CIVIL',
  COMMERCIAL: 'COMMERCIAL',
  ADMINISTRATIVE: 'ADMINISTRATIVE',
  LABOR: 'LABOR',
  FAMILY: 'FAMILY',
  REAL_ESTATE: 'REAL_ESTATE',
  INTELLECTUAL_PROPERTY: 'INTELLECTUAL_PROPERTY',
  ENVIRONMENTAL: 'ENVIRONMENTAL',
  TAXATION: 'TAXATION'
};

exports.CaseStatus = exports.$Enums.CaseStatus = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  PENDING: 'PENDING'
};

exports.matterPriority = exports.$Enums.matterPriority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

exports.CaseStage = exports.$Enums.CaseStage = {
  RECONCILIATION_COMMITTEE: 'RECONCILIATION_COMMITTEE',
  FIRST_INSTANCE_COURT: 'FIRST_INSTANCE_COURT',
  APPEAL_COURT: 'APPEAL_COURT',
  CASSATION_HIGH_COURT: 'CASSATION_HIGH_COURT',
  EXECUTION: 'EXECUTION',
  UNDER_SETTLEMENT: 'UNDER_SETTLEMENT',
  SETTLED_CLOSED: 'SETTLED_CLOSED',
  DISPUTE: 'DISPUTE'
};

exports.CaseRateType = exports.$Enums.CaseRateType = {
  FIXED: 'FIXED',
  HOURLY: 'HOURLY',
  RETAINER: 'RETAINER'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  BANK_TRANSFER: 'BANK_TRANSFER',
  CREDIT_CARD: 'CREDIT_CARD',
  CASH: 'CASH',
  CHEQUE: 'CHEQUE',
  ONLINE: 'ONLINE'
};

exports.Prisma.ModelName = {
  User: 'User',
  Address: 'Address',
  Session: 'Session',
  TeamAdmin: 'TeamAdmin',
  TeamMember: 'TeamMember',
  Opponent: 'Opponent',
  TeamClient: 'TeamClient',
  CaseTag: 'CaseTag',
  TeamMembership: 'TeamMembership',
  ToDoList: 'ToDoList',
  Case: 'Case',
  CaseNote: 'CaseNote',
  CaseDocument: 'CaseDocument',
  CaseReminder: 'CaseReminder',
  CaseInvoice: 'CaseInvoice',
  CaseBilling: 'CaseBilling',
  Document: 'Document'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
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
