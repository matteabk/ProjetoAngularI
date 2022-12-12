import { IconText } from './../../models/icon-text.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() public socialMedias!: IconText[];
  @Output() public formDataOutput: EventEmitter<FormGroup> = new EventEmitter();

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(11),
        Validators.maxLength(11)
      ]],
      message: [null, [Validators.required]],
    });

  }

  public onSubmit(): void {
    this.formDataOutput.emit(this.contactForm);
    this.contactForm.reset();
  }

  public keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  get f() { return this.contactForm.controls; }
}
