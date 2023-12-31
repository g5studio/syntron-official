import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() type: 'healthcare' | 'pill' | 'dns' | 'backup' = 'healthcare';

  constructor() { }

  ngOnInit(): void {
  }

  getPseudoClass(): string {
    switch (this.type) {
      case 'healthcare':
        return 'bg-primary-4__before bg-primary-3__after';
      case 'pill':
        return 'bg-azure-2__before bg-azure-1__after';
      case 'dns':
        return 'bg-cyan-2__before bg-cyan-1__after';
      case 'backup':
        return 'bg-green-2__before bg-green-1__after';
    }
  }

  getImg(type: "healthcare" | "pill" | "dns" | "backup") {
    switch (type) {
      case 'healthcare':
        return 'assets/img/iStock/iStock-1210904793.jpg';
      case 'pill':
        return 'assets/img/iStock/iStock-1288255694.jpg';
      case 'dns':
        return 'assets/img/iStock/iStock-1053603796.jpg';
      case 'backup':
        return 'assets/img/iStock/iStock-1422149137.jpg';
    }
  }
}
