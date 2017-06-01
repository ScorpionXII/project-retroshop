import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalId = '';
  @Input() modalTitle = 'Modal Title';
  @Input() closeButton = true;

  @ViewChild('modalRoot') modalRef: ElementRef;
  modalElement = null;

  constructor() { }

  ngOnInit() {
    this.modalElement = $(this.modalRef.nativeElement);
  }

  show() {
    this.modalElement.modal('show');
  }

}
