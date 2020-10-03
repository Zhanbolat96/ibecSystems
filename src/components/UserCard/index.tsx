import React, {FC} from "react";
import { Props } from "./props";

export const UserCard: FC<Props> = ({user}: Props) => {
  return (
    <div className="col-4">
      <h5>{`Имя: ${user.name}`}</h5>
      <p>{`Почта: ${user.email}`}</p>
      <p>{`Телефон: ${user.phone}`}</p>
      <p>{`Сайт: ${user.website}`}</p>
      <p>{`Город: ${user.address.city} Улица: ${user.address.street}`}</p>
      <p>{`Компания: ${user.company.name}`}</p>
    </div>
  )
}