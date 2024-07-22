// import { FactoryProvider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';

export const mongoDbProvider: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    uri: `${configService.get<string>('mongoDb.uri')}${configService.get('mongoDb.dbname')}`,
    authSource: 'admin',
  }),
};

// export const schemasProvider = {
//   provide: 'Shemas',
//   name: 'Schemas',
//   useFactory: () => {
//     return {
//       place: {
//         name: { type: String, required: true },
//         latitude: { type: Number, required: true },
//         longitude: { type: Number, required: true },
//       },
//       driver: {
//         name: { type: String, required: true },
//         age: { type: Number, required: true },
//         license: { type: String, required: true },
//       },
//       rides: {
//         driver: { type: 'ObjectId', ref: 'Driver' },
//         place: { type: 'ObjectId', ref: 'Place' },
//         date: { type: Date, required: true },
//       },
//     };
//   },
// };
