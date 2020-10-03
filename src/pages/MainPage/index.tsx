import React, {FC} from "react";
import { Box } from "../../components/Box";
import { MarketBox } from "../../components/MarketBox";
import './styles.scss';

export const Main: FC = () => {
  const arrBox = ['Мои счета', 'Шаблон операции', 'Мои счета', 'Шаблон операции', 'Мои счета', 'Шаблон операции'];
  const arrMarket = [{label: 'Кредит Auto', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvTA_AFofbA780mvL8yn2hCut0C1cZhy5pyg&usqp=CAU'},
    {label: 'Депозиты', imgUrl: 'https://заказатьзеркало.бел/wp-content/themes/basic/images/woman.png'}];
  return (
    <div className="d-flex py-5">
      <div className="d-flex flex-wrap content-container">
        {arrBox.map((a) => (
          <Box name={a} />
        ))}
      </div>
      <div className="market-container">
        {arrMarket.map(({ label, imgUrl }) => (
          <MarketBox label={label} imgUrl={imgUrl} />
        ))}
      </div>
    </div>

  )
}