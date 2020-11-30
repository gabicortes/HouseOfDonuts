import React from "react";
import { loadBingApi, Microsoft } from "./BingMapLoader";
import Logo from "./Logo-small.png";

export default class BingMap extends React.Component {
  mapRef = React.createRef();

  componentDidMount() {
    loadBingApi().then(() => {
      const map = new Microsoft.Maps.Map(this.mapRef.current, {
        center: new Microsoft.Maps.Location(
          this.props.mapOptions.lat,
          this.props.mapOptions.lng
        ),
        zoom: 15,
      });
      if (this.props.mapOptions) {
        map.setOptions(this.props.mapOptions);
      }

      const center = map.getCenter();

      const pin = new Microsoft.Maps.Pushpin(center, {
        icon: Logo,
        anchor: new Microsoft.Maps.Point(0, 0),
      });

      map.entities.push(pin);
      

      this.mapRef = map;
    });
  }

  render() {
    return <div className={this.props.className} ref={this.mapRef} />;
  }
}
