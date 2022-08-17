import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { InfoApiService } from '../service/info-api-service.service';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css'],
})
export class CrudOperationComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'country',
    'contactNumber',
  ];

  constructor(private dialog: MatDialog, private api: InfoApiService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  openDialog() {
    this.dialog
      .open(DialogComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val == 'save') {
          this.getAllUsers();
        }
      });
  }

  getAllUsers() {
    this.api.getInfo().subscribe({
      next: (Response) => {
        this.dataSource = new MatTableDataSource(Response);
      },
      error: (error) => {
        alert('Error while displaying Info');
      },
    });
  }
  updateInfo(element: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: element,
    });
  }
  deleteInfo() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
