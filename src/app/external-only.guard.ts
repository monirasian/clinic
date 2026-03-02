import { CanActivateFn } from '@angular/router';

export const externalOnlyGuard: CanActivateFn = () => {
  return true;
};
