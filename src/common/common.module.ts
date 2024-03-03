import { Module } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PaginationModule } from '../pagination/pagination.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), PaginationModule],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CommonModule {}