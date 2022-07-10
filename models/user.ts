export interface UserData {
  email: string;
  image: string;
  name: string;
  username?: string;
}

export class UserEntity {
  email: string;
  image: string;
  name: string;
  username?: string;

  constructor(user: UserData) {
    this.email = user.email;
    this.image = user.image;
    this.name = user.name;
    this.username = user.username;
  }

  get userData() {
    return {
      email: this.email,
      image: this.image,
      name: this.name,
      username: this.username,
    };
  }
}
