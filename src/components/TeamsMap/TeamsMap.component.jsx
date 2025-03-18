import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Grid from '@mui/material/Grid2';
import "leaflet/dist/leaflet.css";
import L from 'leaflet'



const TeamsMap = ({ teams }) => {

  const customIcon = (badgeUrl) => {
    return L.icon({
      iconUrl: badgeUrl,
      iconSize: [38, 38]
    })
  }


  return (
    <Grid container justifyContent="center" alignItems="center" sx={{height: '500', width: '500'}}>
      <MapContainer center={[40.11256837189704, -100.54488716132614]} zoom={3} style={{ height: 500, width: 500 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      {teams.map((team) => (
        <Marker position={team.coordinates} icon={customIcon(team.strBadge)}>
          <Popup>
            <h3>{team.strTeam}</h3>
            <h4>{team.arena}</h4>
            </Popup>
        </Marker>
      ))}
      
      </MapContainer>
    </Grid>
  );
}



export default TeamsMap