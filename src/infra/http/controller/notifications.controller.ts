import { Controller, Post, Body } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });
    return notification;
  }
}

//O controller é onde nós recebemos as chamadas https e definimos o url.
//Podemos colocar por exemplo @Controller('app'), onde a url passará as ser http://localhost:3000/app.
//No @Get(), definiremos o método get de uma rota. ex @Get('login'), onde passará a ser http://localhost:3000/app/login.
