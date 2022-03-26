import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ProductosModule,
    MongooseModule.forRoot("mongodb+srv://Leandro:123@clusterdemo.eullt.mongodb.net/test", {
      useNewUrlParser: true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
