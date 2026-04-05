import { Injectable, NotFoundException } from '@nestjs/common';
import { ReportCreatePublicDto } from '../../dtos/public/report.create.public.dto';
import { ReportCategoryEntity } from '../../../reportCategories/entities/reportCategories.entity';
import { ReportEntity } from '../../entities/reports.entity';


@Injectable()
export class ReportsPublicService {
  async create(userId: number, payload: ReportCreatePublicDto): Promise<{ message: string }> {
    const category = await ReportCategoryEntity.findOneBy({ id: payload.categoryId });
    if (!category) throw new NotFoundException('Report category with given id not found');
    const report = ReportEntity.create({
      userId, categoryId: payload.categoryId,
      target: payload.target, targetId: payload.targetId,
      description: payload.description,
      created: new Date().toISOString(),
    } as ReportEntity);
    await ReportEntity.save(report);
    return { message: 'Report submitted successfully' };
  }
}