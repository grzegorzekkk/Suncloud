import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  @Input() buttonStyle: object = {};
  @Output() accept: EventEmitter<any> = new EventEmitter();

  modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openConfirmDialog(confirmDialog) {
    this.modalRef = this.modalService.open(confirmDialog, { centered: true, size: 'sm' });
  }

  confirmDialogAction() {
    this.accept.emit();
    this.modalRef.close();
  }

}
