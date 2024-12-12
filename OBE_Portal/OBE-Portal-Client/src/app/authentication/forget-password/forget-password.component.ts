import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.resetPasswordForm.valid) {
      // Handle the password reset logic here
      console.log('Password reset successfully:', this.resetPasswordForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
