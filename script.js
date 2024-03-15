mapboxgl.accessToken = 'pk.eyJ1Ijoia3Nob2VzdGVyIiwiYSI6ImNsdG9jOXN3djBoMnYyaW1zYnRuZ3VkYzYifQ.Z976OphNTmOc_8gG7O6khQ';

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/kshoester/cltqs99fy034801qedunp7lji',
    center: [-79.39, 43.66],
    zoom: 12,
});

map.on('load', () => {
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'feature',
                    'properties': {
                        'name': 'Sidney Smith Hall'
                    },
                    'geometry': {
                        'coordinates': [-79.39865237301687,
                            43.662343395037766
                        ],
                        'type': 'Point'
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }
    });

    map.addSource('buildings-data', {
        type: 'geojson',
        data: 'https://kshoester.github.io/wk5-exer/wk5-data/buildings.geojson'
    });

    map.addLayer({
        'id': 'buildings-point',
        'type': 'circle',
        'source': 'buildings-data',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#007cbf'
        }
    });
});