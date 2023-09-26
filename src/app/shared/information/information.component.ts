import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { CvComponent } from '../cv/cv.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  constructor(
    private dialog: MatDialog
  ) {

  }
  ngOnInit(): void {

  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
  openCV(): void {
    const dialogRef = this.dialog.open(CvComponent, {
      width: "400px"
    });
  }
}
