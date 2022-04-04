
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../modify-content/modify-content.component';


@Component({
  selector: 'app-dialog-add-content',
  templateUrl: './dialog-add-content.component.html',
  styleUrls: ['./dialog-add-content.component.scss']
})
export class DialogAddContentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogAddContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
