import React from "react";
import { Card, CardMedia } from "material-ui";
import { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";

class RoomCard extends React.Component {
  state = {
    unitName: ""
  };

  componentDidMount() {
    fetch(
      "https://monplan-api-au-prod.appspot.com/units/" + this.props.unitCode
    )
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          unitName: data.unitName
        })
      );
  }
  render() {
    const { roomCode, roomLocation, roomPicture } = this.props;
    return (
      <Card>
        <CardMedia
          image={roomPicture}
          style={{
            height: 200
          }}
        />
        <CardContent>
          <Typography variant="subheading">{roomCode}</Typography>
          <Typography variant="title">{roomLocation}</Typography>
          <Typography variant="title">{this.state.unitName}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default RoomCard;
