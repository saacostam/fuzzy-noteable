import { hash } from 'bcrypt';

export class PasswordHashUtil {
  static saltRounds = 10;

  static hash(password: string): Promise<string> {
    return hash(password, this.saltRounds);
  }
}
