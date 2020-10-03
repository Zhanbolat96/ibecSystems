import React, {FC} from "react";
import { Props } from './props';
import './styles.scss';

export const MarketBox: FC<Props> = ({ label, imgUrl }: Props) => {
  return (
    <div className="market-box">
      <img src={imgUrl} />
      <p>{label}</p>
    </div>
  )
}