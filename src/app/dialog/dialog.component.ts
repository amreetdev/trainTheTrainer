import { Component, Inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfoApiService } from '../service/info-api-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  addInfoForm!: FormGroup;
  actionBtn: string = 'Save';
  constructor(
    private formbuilder: FormBuilder,
    private api: InfoApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.addInfoForm = this.formbuilder.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(12),
      ]),
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.addInfoForm.controls['id'].setValue(this.editData.id);
      this.addInfoForm.controls['name'].setValue(this.editData.name);
      this.addInfoForm.controls['email'].setValue(this.editData.email);
      this.addInfoForm.controls['country'].setValue(this.editData.country);
      this.addInfoForm.controls['contactNumber'].setValue(
        this.editData.contactNumber
      );
    }
  }

  addInformation() {
    if (!this.editData) {
      if (this.addInfoForm.valid) {
        this.api.postInfo(this.addInfoForm.value).subscribe({
          next: (Response: any) => {
            console.log(this.addInfoForm.value);
            alert('Info added successfully');
            this.addInfoForm.reset();
            this.dialogRef.close('User Saved');
          },
          error: () => {
            alert('Error');
          },
        });
      }
    } else {
      this.updateUsers();
    }
  }
  updateUsers() {
    this.api.updateInfo(this.addInfoForm.value, this.editData.id).subscribe({
      next: (Response: any) => {
        alert('User info updated successfully!');
        this.addInfoForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert('Error while updating user Info.');
      },
    });
  }
}
