import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ProductsModule } from 'src/products/products.module';
import { SeedController } from './seed.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[
    ProductsModule,
    AuthModule
  ]
})
export class SeedModule {}
