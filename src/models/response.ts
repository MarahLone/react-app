export interface IResponse<T> {
  status: boolean;
  data: T;
  pager?: IPager;
}

export interface IPager {
  current_page: number;
  per_page: number;
  total: number;
}
