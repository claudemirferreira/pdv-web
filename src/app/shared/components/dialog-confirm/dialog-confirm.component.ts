import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

  ok(){
    console.log('ok');
    this.closeDialog('ok');
  }

  cancel(){
    console.log('cancel');
    this.closeDialog('cancel');
  }

  closeDialog(action: string) {
    this.dialogRef.close(action);
  }

}
