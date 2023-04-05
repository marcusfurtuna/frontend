import { Component, OnInit, ViewChild} from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  
  products: Product[] = [];
  displayedColumns = ['nome','tipo_pessoa','situacao', 'action']
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
     
    });
  }


 
}
