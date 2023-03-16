import { Entity } from 'typeorm';
@Entity()
export class OAuthUser {
  provider: string;
  providerId: string;
  email: string;
  name: string;
  picture: string;
  username?: string;
}
