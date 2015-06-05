var popups = (function() {
    var container = document.getElementById('popup'),
        content = document.getElementById('popup-content'),
        closer = document.getElementById('popup-closer'),
        overlay;

    var init = function() {
        // Create overlay for map
        overlay = new ol.Overlay(({
            element: container,
            autoPan: true,
            autoPanAnimation: {
                duration: 250
            }
        }));

        // On close element click
        closer.onclick = function() {
            overlay.setPosition(undefined);
            closer.blur();

            return false;
        };
    };

    var getOverlay = function() {
        return overlay;
    };

    return {
        popupOverlay: getOverlay
    }
})();