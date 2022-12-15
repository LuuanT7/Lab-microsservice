import { Notification } from 'src/app/entities/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
