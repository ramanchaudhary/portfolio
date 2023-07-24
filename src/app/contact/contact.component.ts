import { Component } from '@angular/core';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private dialog: MatDialog) {}
  
  isHover: boolean = false;
  showTemplate: boolean = false;

  onMouseEnter() {
    this.isHover = true;
  }

  onMouseLeave() {
    this.isHover = false;
  }

  openContactDialog() {
    this.dialog.open(ContactDialogComponent, {
      width: '400px', // Set the desired width for the dialog
    });
  }
}
