import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

/** @title Basic datepicker */
@Component({
  selector: "datepicker-overview-example",
  templateUrl: "datepicker-overview-example.html"
})
export class DatepickerOverviewExample {
  dateGp: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dateGp = this.fb.group({
      dateControl: this.fb.control(null)
    });
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
