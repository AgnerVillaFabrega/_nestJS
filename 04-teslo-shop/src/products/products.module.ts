import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AuthModule } from 'src/auth/auth.module';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product,ProductImage } from './entities';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports:[
    TypeOrmModule.forFeature([
      // Se importan todas las entidades del proyecto
      Product,
      ProductImage,
    ]),
    AuthModule,
  ],
  exports:[
    ProductsService,
    TypeOrmModule,
  ]
})
export class ProductsModule {}
