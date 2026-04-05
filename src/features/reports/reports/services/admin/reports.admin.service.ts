import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ReportListAdminDto } from '../../dtos/admin/report.list.admin.dto';
import { ReportEntity } from '../../entities/reports.entity';


@Injectable()
export class ReportsAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<ReportListAdminDto[]> {
    const list = await ReportEntity.find({
      relations: ['category'],
      order: { created: 'DESC' },
    });
    return plainToInstance(ReportListAdminDto, list, this.opts);
  }

  async delete(id: number): Promise<void> {
    const report = await ReportEntity.findOneBy({ id });
    if (report) await ReportEntity.remove(report);
  }
}
