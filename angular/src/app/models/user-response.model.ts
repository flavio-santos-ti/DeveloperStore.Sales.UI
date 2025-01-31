// user-response.model.ts
export interface Name {
  firstname: string;
  lastname: string;
}

export interface Geolocation {
  lat: string;
  long: string;
}

export interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: Geolocation;
}

export interface UserResponse {
  email: string;
  username: string;
  name: Name;
  address: Address;
  phone: string;
  status: string;
  role: string;
}