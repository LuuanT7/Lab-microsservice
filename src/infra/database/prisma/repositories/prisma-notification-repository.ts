import { NotificationRepository } from '../../../../repositories/notification-repositories';
import { Notification } from '../../../../app/entities/notification';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notifications.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt
      }
    });
  }
}
