export class User {
  id?: string;
  name!: string;
  email!: string;

  private constructor({ name, email }: User) {
    return Object.assign(this, { name, email });
  }

  static create({ name, email }: User) {
    return new User({ name, email });
  }
}
