// user.model.ts
export interface User {
  email: string;
  username: string;
  firstname: string; 
  lastname: string;  
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
  status: string;
  role: string;
  token?: string; // Optional token, in case it needs to be stored.
}