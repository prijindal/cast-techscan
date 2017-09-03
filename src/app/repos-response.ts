import { Repo } from './repo';

export interface ReposResponse {
  incomplete_results?: Boolean,
  items: Repo[],
  total_count: number
}
