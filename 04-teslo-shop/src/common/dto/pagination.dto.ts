import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto{
    
    @ApiProperty({
        default: 10,
        description:'How many row do u need',
        
    })
    @IsOptional()
    @IsPositive()
    //Transformar
    @Type(()=> Number) //enableImplicitConversions:true
    limit?: number;

    @ApiProperty({
        default: 0,
        description:'How many row do u want to skip',
    })
    @IsOptional()
    @Min(0)
    @Type(()=> Number) //enableImplicitConversions:true
    offset?:number;
}