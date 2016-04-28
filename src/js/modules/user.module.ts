export interface User {
  id: number;
  name: string;
  passwd: string;
  permissions: Array<string>;
}