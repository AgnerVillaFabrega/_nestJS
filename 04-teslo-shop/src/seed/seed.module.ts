import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ProductsModule } from 'src/products/products.module';
import { SeedController } from './seed.controller';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[ProductsModule]
})
export class SeedModule {}
