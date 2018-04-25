require(["esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/Legend",
    "esri/widgets/LayerList",
    "esri/widgets/Search",
    "esri/tasks/Locator",
    "esri/PopupTemplate",
    "esri/layers/GroupLayer",
    "esri/layers/MapImageLayer",
    "esri/symbols/SimpleMarkerSymbol",




//    "esri/layers/support/MapImage",
    
    "dojo/domReady!"], function (
        Map,
        MapView,
        FeatureLayer,
        Legend,
        LayerList,
        Search, Locator, PopupTemplate,
        GroupLayer,
        MapImageLayer, SimpleMarkerSymbol,



//        MapImage
    ) {
        //my code starts here











        var myMap = new Map({

 

            basemap: "hybrid", opacity: 0.8


        });



        var mapView = new MapView({
            map: myMap,
            center: [-111.927658, 33.420255],
            container: "viewDiv",
            zoom: 18,

        });




       




        //********************
        var vending = {
            type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
            style: "square",
            color: "blue",
            size: "8px",  // pixels
            outline: {  // autocasts as new SimpleLineSymbol()
                color: [255, 255, 0],
                width: 3  // points
            }
        };


        //********************




        // POP UPS
        var popupParking = {
            title: "Parking size or Type: {Parking_size}"
        };
        var popupDrinking = {
            title: "Does this fountain have cold water? {Yes_or_No}"
        };
        var popupBuilding = {
            title: "Building Type: {Building_Type}",
            content: "Number of Stories: {Building_Stories}"
        };

        var popupVending = {
            title: "Vending Machine Type: {Vending_Type}"
        };

        var popupTrashcans= {
            title: "Trash Type: {Trash_Type}"
        };

        var popupTables = {
            title: "Table Material Type: {Table_Material}"
        };

        var popupMisc= {
            title: "Misc Type: {MISC}"
        };

        var popupEmergency = {
            title: "Blue Emergency Lights"
        };

        var popupBikeRacks = {
            title: "Bike Rack"
        };

        var popupTransportation = {
            title: "Stop Type:  {Stop_Type}"
        };

        // END of Pop UPS


        // Start of Feature layers
        //********************
        var vendingMachine = new FeatureLayer({
            url: "https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/FightingArtichokesData_Zone3/FeatureServer/0",
            popupTemplate: popupVending,
            renderer: vending
        });
        myMap.add(vendingMachine);
        //********************
        var drinkingFountain = new FeatureLayer({
            url: "https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/FightingArtichokesData_Zone3/FeatureServer/1",
            popupTemplate: popupDrinking
        });
        myMap.add(drinkingFountain);

        var trashCans = new FeatureLayer({
            url: "https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/FightingArtichokesData_Zone3/FeatureServer/2",
            popupTemplate: popupTrashcans
        });
        myMap.add(trashCans);

        var tablesASU = new FeatureLayer({
            url: "https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/FightingArtichokesData_Zone3/FeatureServer/3",
            popupTemplate: popupTables
        });
        myMap.add(tablesASU);

        var miscellaneousStuff = new FeatureLayer({
            url: "https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/FightingArtichokesData_Zone3/FeatureServer/4",
            popupTemplate: popupMisc
        });
        myMap.add(miscellaneousStuff);

        var emergencyLights = new FeatureLayer({
            url: "https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/FightingArtichokesData_Zone3/FeatureServer/5",
            popupTemplate: popupEmergency 
        });
        myMap.add(emergencyLights);

        var bikeRacks = new FeatureLayer({
            url: "https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/FightingArtichokesData_Zone3/FeatureServer/6",
            popupTemplate: popupBikeRacks
        });
        myMap.add(bikeRacks);

        var publicTransportation = new FeatureLayer({
            url: "https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/FightingArtichokesData_Zone3/FeatureServer/7",
            popupTemplate: popupTransportation 
        });
        myMap.add(publicTransportation);

        var roadways = new FeatureLayer({
            url: "https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/FightingArtichokesData_Zone3/FeatureServer/8"
        });
        myMap.add(roadways);

        var sidewalks = new FeatureLayer({
            url: "https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/FightingArtichokesData_Zone3/FeatureServer/9"
        });
        myMap.add(sidewalks);

        var buildings = new FeatureLayer({
            url: "https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/FightingArtichokesData_Zone3/FeatureServer/10",
            popupTemplate: popupBuilding
        });
        myMap.add(buildings);

        var parkingLots = new FeatureLayer({
            url: "https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/FightingArtichokesData_Zone3/FeatureServer/11",
            popupTemplate: popupParking
            
            

        });
        myMap.add(parkingLots);



        //service
        /* var imageServer = new MapImageLayer({
             url: "http://masgis.asu.edu/arcgis/rest/services/Arizona/Kristy_Arizona_Service/MapServer",
             sublayers: [{
                 popupTemplate: {
                     title:"{NAME}"
                 }
 
             }]
 
 
 
         })
         myMap.add(imageServer)
         */





        //legend


        var legend = new Legend({
            view: mapView,
            layerInfos: [
                { layer: vendingMachine, title: 'Vending Machines' },
                { layer: drinkingFountain, title: 'Drinking Fountains' },
                { layer: trashCans, title: 'Trashcans' },
                { layer: tablesASU, title: 'Tables' },
                { layer: miscellaneousStuff, title: 'Misc' },
                { layer: emergencyLights, title: 'Emergency Lights' },
                { layer: bikeRacks, title: 'Bike Racks' },
                { layer: publicTransportation, title: 'Public Tranportation' },
                { layer: sidewalks, title: 'Sidewalks' },
                { layer: roadways, title: 'Roads' },
                { layer: parkingLots, title: 'Parking Lots' },
                { layer: buildings, title: 'Buildings' }]
        });
        mapView.ui.add(legend, "bottom-left");

        //Layer List Widget
        var layerList = new LayerList({
            view: mapView,
            listMode: "hide-children"
        });
        // Adds widget below other elements in the top left corner of the view
        mapView.ui.add(layerList, {
            position: "bottom-right"
        });




        //Search Widget

        var searchWidget = new Search({
            view: mapView,
            sources: [{
                locator: new Locator({ url: "//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer" }),
                singleLineFieldName: "SingleLine",
                name: "Custom Geocoding Service",
                localSearchOptions: {
                    minScale: 300000,
                    distance: 50000
                },
                placeholder: "Search Geocoder",
                maxResults: 15,
                maxSuggestions: 20,
                suggestionsEnabled: false,
                minSuggestCharacters: 0
            }, {
                featureLayer: miscellaneousStuff,
                searchFields: ["MISC"],
                displayField: "MISC",
                exactMatch: false,
                outFields: ["*"],
                name: "My Custom Search",
                placeholder: "example: a Bench or mailbox",
                maxResults: 15,
                maxSuggestions: 20,
                suggestionsEnabled: true,
                minSuggestCharacters: 0,
                //          zoomScale:0.5
                //  Our zoome scale did not work as we liked it too
            }]
        });
        // Adds the search widget below other elements in
        // the top left corner of the view
        mapView.ui.add(searchWidget, {
            position: "top-left",
            index: 2
        });







        //my code ends here
    });