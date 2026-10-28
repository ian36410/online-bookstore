import { computed, Service, signal } from '@angular/core';

@Service()
export class Auth {
    private userNameState = signal<string | null>(null);
    readonly userName = this.userNameState.asReadonly();
    readonly isLoggedIn = computed(() => this.userNameState() !== null);

    login(username: string, password: string): boolean{
        if(username === 'reader' && password === '123456'){
            this.userNameState.set('讀者');
            return true;
        }
        return false;
    }
}
