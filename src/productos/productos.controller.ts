import { Body, Controller, Get, HttpStatus, Param, Post, Res, Put, Delete, NotFoundException, Query } from '@nestjs/common';
import { CreatePrDto } from "../dto/create-pr.dto";
import { ProductosService } from "./productos.service"; 

@Controller('productos')
export class ProductosController {
    constructor(private readonly ProductosServices: ProductosService) { }
    @Post("/create")
    async createPost(@Res() res, @Body() createPrDTO: CreatePrDto) {
        const producto = await this.ProductosServices.CreateProducts(createPrDTO);
        //@Res() res
        res.status(HttpStatus.OK).json({
            message: "Producto creado exitosamente  c:",
            producto
        })
    }
    @Get("/")
    async getProducts(@Res() res) {
        const producto = await this.ProductosServices.getProducts();
        res.status(HttpStatus.OK).json({
            message: "Todos los productos  c:",
            producto
        })
    }
    @Get("/:id")
    async getProduct(@Res() res, @Param("id") productID) {
        const producto = await this.ProductosServices.getProductsById(productID);
        if (!producto) throw new NotFoundException("El producto no existe  :c")
        //Nest nos provee NotFoundException para enviar un error.
        res.status(HttpStatus.OK).json(producto);
    }
    @Delete("/delete/:id")
    async deleteProduct(@Res() res, @Param("id") productID){
        const productDeleted = await this.ProductosServices.DeleteProducts(productID);
        if (!productDeleted) throw new NotFoundException("El producto no existe  :c")
        //Nest nos provee NotFoundException para enviar un error.
        res.status(HttpStatus.OK).json({
            message: "Producto Eliminado!  c:",
            productDeleted
        });  
    }
    @Put("/update/:id")
    async updateProduct(@Res() res, @Body() createProductDTO: CreatePrDto, @Param("id") productID) {
        const productUpdate = await this.ProductosServices.UpdateProducts(productID, createProductDTO);
        if (!productUpdate) throw new NotFoundException("El producto no existe  :c")
        res.status(HttpStatus.OK).json({
            message: "Producto Actualizado!  c:",
            productUpdate
        });  
    }
}
