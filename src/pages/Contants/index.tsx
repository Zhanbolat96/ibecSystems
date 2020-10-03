import React, {FC} from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export const Contacts: FC = () => {
  const style = {width: '1000px', height: '500px'}
  const mapData = {
    center: [43.26416468623409,76.92990970668644],
    zoom: 10,
  };

  const coordinates = [
    [43.26416468623409,76.92990970668644],
    [43.22949306350192,76.94672277445464]
  ];
  return (
    <div className="map-card m-5">
      <YMaps>
        <Map defaultState={mapData} width={style.width} height={style.height} >
          {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
        </Map>
      </YMaps>
    </div>
    )
}