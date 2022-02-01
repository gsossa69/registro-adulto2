import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-formulariop',
  templateUrl: './formulariop.component.html',
  styleUrls: ['./formulariop.component.css']
})
export class FormulariopComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'complete este campo';
    }

    return this.email.hasError('email') ? 'no es valido' : '';
  }
  ngOnInit(): void {
  }

}
