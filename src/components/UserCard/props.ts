export type Props = {
  readonly user: UserDetails;
}

export type UserDetails = {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly website: string;
  readonly address: Address;
  readonly company: Company;
}

type Address = {
  readonly city: string;
  readonly street: string;
}

type Company = {
  readonly name: string;
}