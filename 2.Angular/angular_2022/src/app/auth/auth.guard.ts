import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (_route, state) => {
  return true;
};
