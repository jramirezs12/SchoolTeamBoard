import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-matter',
  templateUrl: './register-matter.component.html',
  styleUrls: ['./register-matter.component.css'],
})
export class RegisterMatterComponent implements OnInit {
  registerDataMatter: any;
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerDataMatter = {};
    this.message = '';
  }

  ngOnInit(): void {}

  registerMatter(){}

  openSnackBarSuccessfull(){}

  openSnackBarError(){}
}