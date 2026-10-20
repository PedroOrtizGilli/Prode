import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../../Servicios/auth';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.estaLogueado()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};