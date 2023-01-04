import "./App.css";
import { useRef, useEffect } from "react";
import ArcGISMap from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";
import MapView from "@arcgis/core/views/MapView";

function App() {
  const mapContainer = useRef(null);
  esriConfig.apiKey = "YOUR_API_KEY";
  useEffect(() => {
    if (mapContainer.current) {
      const map = new ArcGISMap({
        basemap: "gray-vector",
      });
      const view = new MapView({
        container: mapContainer.current,
        map: map,
        zoom: 10,
        center: [-77.1, 38.85],
      });
    }
  }, []);
  return (
    <div className="App">
      <h1>ArcGIS JS MAP using Capacitor</h1>
      <div ref={mapContainer} className="map"></div>
    </div>
  );
}

export default App;
