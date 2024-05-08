export interface LoginInterface {
  email: string;
  password: string;
}

export class LoginModel {
  email: string;
  password: string;

  constructor(data?: LoginInterface) {
    this.email = data?.email || '';
    this.password = data?.password || '';
  }
}
