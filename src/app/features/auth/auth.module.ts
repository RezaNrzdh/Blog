import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { ForgetComponent } from "./forget/forget.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    declarations: [
        ForgetComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ]
})
export class AuthModule {}