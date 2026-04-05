import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseReviewListAdminDto } from '../../dtos/admin/courseReview.list.admin.dto';
import { CourseReviewEntity } from '../../entities/courseReviews.entity';


@Injectable()
export class CourseReviewsAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<CourseReviewListAdminDto[]> {
    const list = await CourseReviewEntity.find({ order: { created: 'DESC' } });
    return plainToInstance(CourseReviewListAdminDto, list, this.opts);
  }

  async getByCourse(courseId: number): Promise<CourseReviewListAdminDto[]> {
    const list = await CourseReviewEntity.find({
      where: { courseId },
      order: { created: 'DESC' },
    });
    return plainToInstance(CourseReviewListAdminDto, list, this.opts);
  }

  async delete(id: number): Promise<void> {
    const review = await CourseReviewEntity.findOneBy({ id });
    if (review) await CourseReviewEntity.remove(review);
  }
}
