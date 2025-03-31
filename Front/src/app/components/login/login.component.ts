import Swal from 'sweetalert2';

import { AuthService } from '../../service/auth.service';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false; // Controla la visibilidad de la contraseña

  constructor(private authService: AuthService, private router: Router) {}

  rememberMe: boolean = false;

  onSubmit() {
    console.log('email: ', this.email, 'password: ', this.password);

    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          console.log('Login exitoso', response);
          localStorage.setItem('token', response.token);
          Swal.fire({
            icon: 'success',
            title: 'Login Exitoso',
            text: 'Bienvenido a la plataforma',
          }).then(() => {
            this.router.navigate(['/dashboard']); // Redirigir después del login
          });
        },
        error: (error) => {
          console.error('Error en el login', error); // Si quieres ocultarlo, elimínalo
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Correo o contraseña incorrectos',
          });
        },
      });
  }
}
