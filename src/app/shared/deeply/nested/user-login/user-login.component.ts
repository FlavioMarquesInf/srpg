import { Component, OnInit } from '@angular/core';
//  import { environment } from '@env/environment';
// import { AuthService } from '../../../../core/auth.service';

import { AuthService } from '@srpg-core/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
