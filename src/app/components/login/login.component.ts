import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService
            ) { }
  ngOnInit(): void {
    this.criarForm();
  }
  criarForm(){
    this.formLogin = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  logar(){

    if(this.formLogin.invalid) return window.alert("Usuário ou senha invalidos")

    var usuario = this.formLogin.getRawValue() as IUsuario;

    this.usuarioService.logar(usuario).subscribe((response) => {

        if(!response.sucesso){
          // this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
          //   duration: 3000
          // });
          // window.alert("vtfd")
          console.log("deu ruim")
        }
    })
  }
}
