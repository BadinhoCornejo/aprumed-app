import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  Form,
  FormControl
} from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { UsersService } from "src/app/services/users/users.service";
import { MustMatch } from "../../_helpers/must-match.validator";

@Component({
  selector: "app-int-newuser",
  templateUrl: "./int-newuser.component.html",
  styleUrls: ["./int-newuser.component.sass"]
})
export class IntNewuserComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  usuario: any = {
    usuarioID: "",
    apellido: "",
    nombre: "",
    email: "",
    usrPassword: "",
    estado: "",
    sexo: "",
    telefono: "",
    tipoUsuario: {
      tipoUsuarioID: ""
    }
  };
  tiposUsuario: any = [];
  sexos: any = ["Masculino", "Femenino"];
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private snackBar: MatSnackBar
  ) {
    this.getTiposUsuario();
    this.form = this.formBuilder.group(
      {
        apellido: [this.usuario.apellido, Validators.required],
        nombre: [this.usuario.nombre, Validators.required],

        sexo: [this.usuario.sexo, Validators.required],

        telefono: [this.usuario.telefono, Validators.required],
        tipoUsuarioID: ["", Validators.required],
        email: [this.usuario.email, [Validators.required, Validators.email]],
        usrPassword: [
          this.usuario.usrPassword,
          [Validators.required, Validators.minLength(6)]
        ],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: MustMatch("usrPassword", "confirmPassword")
      }
    );
  }

  ngOnInit() {}

  getTiposUsuario() {
    this.userService.getTiposUsuario().subscribe(
      result => {
        this.tiposUsuario = result;
      },
      error => {
        console.error(JSON.stringify(error));
      }
    );
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.usuario.nombre = this.form.value.nombre;
    this.usuario.apellido = this.form.value.apellido;
    this.usuario.email = this.form.value.email;
    this.usuario.usrPassword = this.form.value.usrPassword;
    this.usuario.sexo = this.form.value.sexo;
    this.usuario.telefono = this.form.value.telefono;
    this.usuario.tipoUsuario.tipoUsuarioID = this.form.value.tipoUsuarioID;

    this.userService.addUser(this.usuario).subscribe(
      result => {
        let action = "VOLVER";
        this.snackBar.open("Usuario registrado!", action, {
          duration: 2000
        });
      },
      error => {
        console.error(JSON.stringify(error));
      }
    );
  }
}
