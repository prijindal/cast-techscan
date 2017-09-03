import { User } from './user';

export interface Repo {
  owner: User;
  name: String;
  description: String;
}
