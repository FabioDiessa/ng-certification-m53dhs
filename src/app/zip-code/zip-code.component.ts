import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-zip-code',
  templateUrl: './zip-code.component.html',
  styleUrls: ['./zip-code.component.css'],
})
export class ZipCodeComponent implements OnInit {
  addZipCodeForm: FormGroup;
  zipCode: FormControl;
  zipCodes: string[] = [];
  cityNotFound: boolean = false;
  alreadyInsertCity: boolean = false;
  constructor() {}

  ngOnInit() {
    this.zipCodes = JSON.parse(localStorage.getItem('zipCodes'));
    if (!this.zipCodes) this.zipCodes = [];
    this.zipCode = new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9].*'),
      Validators.maxLength(5),
      Validators.minLength(5),
    ]);
    this.addZipCodeForm = new FormGroup({
      zipCode: this.zipCode,
    });
  }

  addLocation(insertZipCode: FormControl) {
    if (this.zipCodes?.indexOf(insertZipCode.value) > -1) {
      this.alreadyInsertCity = true;
    } else {
      this.zipCodes.push(insertZipCode.value);
      localStorage.setItem('zipCodes', JSON.stringify(this.zipCodes));
      this.zipCode.setValue('');
      this.zipCode.markAsPristine();
      this.zipCode.markAsUntouched();
      this.zipCode.updateValueAndValidity();
    }
  }

  validateZipCode() {
    return this.zipCode.valid || this.zipCode.untouched;
  }

  removeCity(event: string) {
    this.zipCodes.splice(this.zipCodes.indexOf(event), 1);
    localStorage.setItem('zipCodes', JSON.stringify(this.zipCodes));
  }
}
