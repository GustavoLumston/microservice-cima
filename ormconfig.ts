import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { User } from './src/user/user.entity';

const config: MysqlConnectionOptions =  {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'cima_db_1',
      entities: [User],
      synchronize: true,

}

export default config;