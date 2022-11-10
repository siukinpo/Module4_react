import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [PetModule, InvoiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// const 新人類 = 復必泰(new 你())
// @苗撚()
// class 你{

// }
