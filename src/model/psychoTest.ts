export interface PsychoTest {
  title: string
  topic: string
  authorized: boolean
}

export interface EmployeePsychoTest extends PsychoTest {
  score: number
}
