import { Notification } from '../src/app/entities/notification';
import { NotificationRepository } from '../src/repositories/notification-repositories';

export class inMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = []; // Constante que será considerado como banco de dados em Memória.

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
// Classe que será o repositório do banco de dados.
