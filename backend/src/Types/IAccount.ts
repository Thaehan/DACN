export interface IAccount {
  username: string
  password: string
  role?: 'admin' | 'teacher' | 'student'
  major_id?: string
}
