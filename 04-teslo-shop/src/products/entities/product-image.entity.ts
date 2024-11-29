import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from ".";

@Entity({name: 'product_images'})
export class ProductImage{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    url:string;

    //Se agrega la relacion con la tabla product
    @ManyToOne(
        () => Product,
        (product) => product.images,
        {onDelete: 'CASCADE'}
    )
    product: Product;
}