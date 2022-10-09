import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AngularMaterialModule } from "../angular-material.module";
import { ProfileComponent } from "./profile.component";


@NgModule({
  declarations:[
    ProfileComponent
  ],
  imports:[
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule{}
