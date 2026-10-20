import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../../Servicios/auth';

export const adminGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.getUsuario()?.rol === 'administrador') {
    return true;
  }

  router.navigate(['/']);
  return false;
};