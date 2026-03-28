// bỏ toàn bộ biến môi trường vào trong 1 object envConfig
// cực kì thuận lời cho việc gọi biến môi trường trong project
const envConfig = () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
  name: process.env.NAME || 'NestJS',
  description:
    process.env.DESCRIPTION ||
    'NestJS is a framework for building server-side applications',
  nestedConfig: {
    a: process.env.A ?? '1',
    b: process.env.B ?? '2',
    c: process.env.C ?? '3',
  },
  // key fake
  openApiKey: process.env.OPEN_API_KEY ?? '1234567890',
  database: {
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: parseInt(process.env.DATABASE_PORT ?? '3306', 10),
    username: process.env.DATABASE_USERNAME ?? 'root',
    password: process.env.DATABASE_PASSWORD ?? '19082003',
    database: process.env.DATABASE_NAME ?? 'test',
  },
});

export default envConfig;