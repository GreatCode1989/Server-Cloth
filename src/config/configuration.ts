import { registerAs } from '@nestjs/config/dist';
import { sqlConfig } from './sql.config';

export const databaseConfig = registerAs('database', () => ({
  sql: {
    ...sqlConfig(),
  },
}));
