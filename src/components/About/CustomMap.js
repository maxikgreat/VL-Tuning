import React, {Component} from "react"
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

const road = "https://www.google.com/maps/dir//Avtorynok+Losk,+Pisochyn,+Kharkiv+Oblast,+Ukraina,+62416/@49.9712196,36.1260029,17z/data=!4m16!1m6!3m5!1s0x41279f5f9bd74f5b:0xbabed12f55def1e!2sAvtorynok+Losk!8m2!3d49.9712162!4d36.1281916!4m8!1m0!1m5!1m1!1s0x41279f5f9bd74f5b:0xbabed12f55def1e!2m2!1d36.1281916!2d49.9712162!3e3"
const mapStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px'
};

export class CustomMap extends Component {

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map
                disableDefaultUI={true}
                google={this.props.google}
                initialCenter={{
                    lat: 49.9707355,
                    lng: 36.1268766
                }}
                zoom={14}
                styles = {[
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#ffffff'}] // color of city town pgt
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#ffffff'}] // color of labels
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#263c3f'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#ffffff'}] // park
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#38414e'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9ca5b3'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#85000f'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#f3d19c'}]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#2f3948'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#17263c'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#515c6d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#17263c'}]
                }
                    ]}
                style={mapStyles}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={<a target="_blank" href = {road}>Создать маршрут</a>}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAWdCFNK0PUmU6jgG0257Y4Kd6FZSexkYs'
})(CustomMap);
