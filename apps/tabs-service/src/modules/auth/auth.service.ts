import { hash } from 'bcrypt';
import { Injectable } from '@nestjs/common';

import { AUTH_CONFIG } from '../../config'

@Injectable()
export class AuthService {
    async hashPasword(plaintTextPassword: string): Promise<string>{
        return hash(plaintTextPassword, AUTH_CONFIG.SALT_ROUNDS);
    }
}
