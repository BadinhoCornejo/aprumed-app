import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsersService } from "../../../services/users/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  user: any;

  constructor(
    private _usersService: UsersService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.form = _formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      usrPassword: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this._usersService.verificarAcceso(this.form.value).subscribe(
      result => {
        this.user = result;
        this.user && localStorage.setItem("user", JSON.stringify(this.user));
        this.user.tipoUsuario.tipoUsuarioID === 1
          ? this._router.navigate(["/"])
          : this._router.navigate(["/admin"]);
      },
      error => {
        console.error(JSON.stringify(error));
      }
    );
  }
}
