import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { TermsDetailDto } from '../../dtos/admin/terms.detail.dto';
import { TermsEntity } from '../../entities/terms.entity';


@Injectable()
export class TermsPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async get(): Promise<TermsDetailDto> {
    const terms = await TermsEntity.findOne({ where: {} });
    if (!terms) throw new NotFoundException('Terms not found');
    return plainToInstance(TermsDetailDto, terms, this.opts);
  }
}
