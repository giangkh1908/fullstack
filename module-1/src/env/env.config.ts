export const envConfig = () => {
    return {
        port: parseInt(process.env.PORT ?? '3000', 10),
        user: process.env.USER,
    }
};

export default envConfig;