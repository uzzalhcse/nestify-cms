import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete
} from '@nestjs/common';
import { SpecificationService } from './specification.service';
import { Specification } from './entities/specification.entity';

@Controller('specifications')
export class SpecificationController {
  constructor(private readonly specificationService: SpecificationService) {}

  @Post()
  create(@Body() specification: Specification): Promise<Specification> {
    return this.specificationService.create(specification);
  }

  @Get()
  findAll(): Promise<Specification[]> {
    return this.specificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Specification> {
    return this.specificationService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpecification: Partial<Specification>
  ): Promise<Specification> {
    return this.specificationService.update(Number(id), updateSpecification);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.specificationService.remove(Number(id));
  }
}
