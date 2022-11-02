interface IClassOfStudent {
  class_id: string
  regular_point: Number[]
  midterm_point: Number
  final_point: Number
}

export interface IStudent {
  user_id: string
  administrativeInfo: {
    first_name: string
    last_name: string
    birthday: Date
    gender: 'Male' | 'Female'
    email: string
    phone_number: string
    identification_number: string
  }
  classes: IClassOfStudent[]
}
