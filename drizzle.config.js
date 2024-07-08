/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondbb_owner:e1Ev6QJDdBjn@ep-misty-snow-a188r6z5.ap-southeast-1.aws.neon.tech/neondbb?sslmode=require',

    }
  };