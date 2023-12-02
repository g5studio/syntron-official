import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() total: number = 0;
  @Input() perPage: number = 8;

  @Output() changePage = new EventEmitter<number>();

  pages: number[] = [];
  currentPage: number = 1;
  readonly id = `pagination-${Math.random().toString(36).substring(2)}`;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['total']) {
      this.pages = Array.from({length: Math.ceil(this.total / this.perPage)}, (_, index) => index + 1);
    }
  }

  mouseDownChangeClass(id: string, page: number) {
    if (page === this.currentPage) return;
    const element = document.getElementById(`${id}_${page}`);
    element?.classList.remove('border-primary-4--hover', 'text-primary-4--hover');
  }

  mouseUpChangeClass(id: string, page: number) {
    if (page === this.currentPage) return;
    const element = document.getElementById(`${id}_${page}`);
    element?.classList.add('border-primary-4--hover', 'text-primary-4--hover');
  }

  onChangePage(page: number) {
    if (page === this.currentPage) return;
    this.currentPage = page;
    this.changePage.emit(page);
  }

  isShowPageButton(page: number) {
    return this.currentPage === page ||
      (page === this.currentPage + 1 || page === this.currentPage - 1) ||
      (this.currentPage <= 4 && page <= 5) ||
      (this.currentPage >= this.pages.length - 3 && page >= this.pages.length - 4);
  }

}
