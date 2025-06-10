export interface IData {
  id: number;
  size: number | undefined;
  hire_period_days: number | undefined;
  transport_cost?: null;
  per_tonne_cost?: null;
  price_before_vat: number | undefined;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: Date;
  updated_at: Date;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  pic?: string;
}

export interface IDataArray {
  data: IData[];
}
