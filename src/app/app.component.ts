import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  configNome :NgOtpInputConfig = {
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '40px',
      'height': '40px'
    }
  };

  @ViewChild('d2InputField') d2InputField?: ElementRef;
  @ViewChild('d3InputField') d3InputField?: ElementRef;

  form: FormGroup;
  nome?: string;
  total?: number;

  /*constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      d1: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      d2: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      m1: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      m2: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      a1: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      a2: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      a3: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      a4: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]]
    });
  }*/

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      d1: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      d2: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      d3: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]]
    });
  }

  /*onNameInput() {
    if (this.form.get('d1')?.valid) {
      // Set focus to the other input field
      this.otherInputField.nativeElement.focus();
    }
  }*/

  d1Input() {
    if (this.form.get('d1')?.valid) {
      // Set focus to the other input field
      this.d2InputField?.nativeElement.focus();
    }
  }

  d2Input() {
    if (this.form.get('d2')?.valid) {
      // Set focus to the other input field
      this.d3InputField?.nativeElement.focus();
    }
  }

  submitForm() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      console.log('Otp: ', this.nome);
    }
  }

  onOtpChangeNome(otpNome: string) {
    this.nome = otpNome;
    this.total = this.nome.length;

  }


}
