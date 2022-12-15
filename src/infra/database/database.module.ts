import { Module } from '@nestjs/common';
import { NotificationRepository } from '../../repositories/notification-repositories';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notification-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository
      // Quer dizer que toda vez em quem uma classe receber o NotificationRepository,
      //iremos devolver para ela o PrismaNotificationsRepository
    }
  ],
  exports: [NotificationRepository]
})
export class DatabaseModule {}
