import pino from 'pino';

const logger = pino({
    transport: {
        target: 'pino-pretty',
        timesTamp: () => `,"time":"${new Date().toISOString()}"`,
        options: {
            colorize: true,
        },
    }
})

export default logger;