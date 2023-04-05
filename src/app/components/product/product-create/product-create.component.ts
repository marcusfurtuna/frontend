import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    nome: '',
    rg: '',
    cpf:'',
    tipo_pessoa:'',
    situacao: true,
    cnpj: '',
    ie: ''

  }
  isPJ: boolean = true;
  isPF: boolean = true;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  onFirstGroupChange() {
    this.isPF = true;
    this.isPJ = true;
    if(this.product.tipo_pessoa == "PF") {
      this.isPJ = false;
    } else {
      this.isPF = false;
    }
  }

  createProduct():void {

    console.log(this.product);
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage("Cliente criado!")
      this.router.navigate(['/products'])
    })
  }

  cancel():void{
  this.router.navigate(['/products'])
  }

}
