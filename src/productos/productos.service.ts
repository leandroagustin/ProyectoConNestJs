import { Injectable, Param } from '@nestjs/common';
import { CreatePrDto } from 'src/dto/create-pr.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Producto } from './interfaces/productos.interface';

@Injectable()
export class ProductosService {
    //POO
    constructor(@InjectModel("Productos") private readonly productModel: Model<Producto>) { }
    
    async getProducts(): Promise<Producto[]> {
        //Promise<Producto[]> esto esta basado en un apromesa entonces js me entiende y no marca como error.
        const productos = await this.productModel.find();
        return productos;
    };
    async getProductsById(productoID: string): Promise<Producto>{
        //productoID? con el signo de interrogacion le estas diciendo a JS que este parametro es opcional.
            const productos = await this.productModel.findById(productoID);
            return productos;
    };
    
    async CreateProducts(createProductDTO):Promise<Producto>{
        const producto = new this.productModel(createProductDTO);
        return await producto.save();
    };
    async DeleteProducts(productoID: string): Promise<Producto>{
        const productoEliminado = await this.productModel.findByIdAndDelete(productoID);
        return productoEliminado;
    };
    async UpdateProducts(ProductID: string, createProductDTO: CreatePrDto): Promise<Producto>{
        const productoActualizado = await this.productModel.findByIdAndUpdate(ProductID, createProductDTO, { new: true });
        return productoActualizado;
    };
};
