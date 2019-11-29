import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private toggle = false;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  toggleRegister(event) {
    event.target.active = !this.toggle;
  }

  onSelect() {
    this.router.navigate(['login']);
  }

}
