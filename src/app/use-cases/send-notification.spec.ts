import { inMemoryNotificationRepository } from '../../../test/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('Send a Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new inMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'exemple-recipient-id',
      content: 'This is a notification',
      category: 'social'
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    // esperado que no repositório haja pelo menos um item no array

    expect(notificationRepository.notifications[0]).toEqual(notification);
    // esperado que no repositório o item que ocupa a posição [0] seja igual(toEqual) a notification
  });
});
