import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { TermsDetailDto } from '../../dtos/admin/terms.detail.dto';
import { TermsEntity } from '../../entities/terms.entity';
import { TermsUpdateAdminDto } from '../../dtos/admin/terms.update.admin.dto';


@Injectable()
export class TermsAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async get(): Promise<TermsDetailDto> {
    const terms = await TermsEntity.findOne({ where: {} });
    if (!terms) throw new NotFoundException('Terms not found');
    return plainToInstance(TermsDetailDto, terms, this.opts);
  }

  async update(payload: TermsUpdateAdminDto): Promise<TermsDetailDto> {
    let terms = await TermsEntity.findOne({ where: {} });
    if (!terms) {
      terms = TermsEntity.create(payload as TermsEntity);
    } else {
      terms.content = payload.content;
    }
    await TermsEntity.save(terms);
    return plainToInstance(TermsDetailDto, terms, this.opts);
  }
}
