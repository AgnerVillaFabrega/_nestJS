import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductImage } from './';
import { User } from '../../auth/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({name: 'products'})
export class Product {

  @ApiProperty({
    example: '6b802693-1f2c-4b28-af0d-71776d613c3d',
    description: 'Product ID',
    uniqueItems: true
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'T-shirt Teslo',
    description: 'Product Title',
    uniqueItems: true
  })
  @Column('text', {
    unique: true,
  })
  title: string;

  @ApiProperty({
    example: 0,
    description: 'Product Price',
  })
  @Column('float', {
    default: 0,
  })
  price: number;

  @ApiProperty({
    example: 'Eiusmod enim cupidatat cupidatat in adipisicing cupidatat laborum ut proident nisi cillum. Laborum eiusmod anim eu minim deserunt culpa consectetur. Ex aute consectetur exercitation aliqua pariatur minim cillum irure. Sit ipsum eu sunt sit fugiat irure excepteur laboris ipsum sunt sit. Esse dolor minim eu aliquip.',
    description: 'Product Description',
    default:null,
    nullable: true
  })
  @Column({
    type: 'text',
    nullable: true,
  })
  desciption: string;

  @ApiProperty({
    example: 't_shirt_teslo',
    description: 'Product slug - for SEO',
    uniqueItems: true,
  })
  @Column('text', {
    unique: true,
  })
  slug: string;

  @ApiProperty({
    example: 0,
    description: 'Product stock',
  })
  @Column('int', {
    default: 0,
  })
  stock: number;

  @ApiProperty({
    example: ['XS','S','M','L','XL','XXL'],
    description: 'Product sizes',
  })
  @ApiProperty()
  @Column('text', {
    array: true,
  })
  sizes: string[];

  @ApiProperty({
    example: 'women',
    description: 'Product gender',
  })
  @Column('text')
  gender: string;

  @ApiProperty({
    example: ['sweatshirt','shirt'],
    description: 'Product tags',
  })
  @Column('text',{
    array:true,
    default: []
  })
  tags:string[];

  @ApiProperty({
    example: [
      "8528839-00-A_0_2000.jpg",
      "8528839-00-A_2.jpg"
    ],
  })
  //images
  @OneToMany(
    () => ProductImage,
    (productImage) => productImage.product,
    {
      cascade: true,
      eager:true
    }
  )
  images?:ProductImage[];

  @ManyToOne(
    () => User,
    (user) => user.product,
    {eager:true}
  )
  user:User


  @BeforeInsert()
  // @BeforeUpdate()
  checkSlug() {
    
    if (!this.slug) {
      this.slug = this.title;
    }
    this.slug = this.slug
      .toLocaleLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }

  @BeforeUpdate()
  checkSlugUpdate(){
    this.slug = this.slug
      .toLocaleLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }
}
