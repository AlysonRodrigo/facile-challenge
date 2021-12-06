import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { taskModule } from './tasks/shared/task.module';

@Module({
  imports: [taskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
