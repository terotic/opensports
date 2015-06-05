var OLPopups = (function() {
    var container = document.getElementById('feature-popup'),
        content = document.getElementById('feature-popup-content'),
        closer = document.getElementById('feature-popup-closer'),
        popupOverlay;

    var init = (function() {
        // Create overlay for map
        popupOverlay = new ol.Overlay(({
            element: container,
            autoPan: true,
            autoPanAnimation: {
                duration: 250
            }
        }));

        // On close element click
        closer.onclick = function() {
            popupOverlay.setPosition(undefined);
            closer.blur();

            return false;
        };
    })();

    var showPopup = function(evt) {
        var coordinate = evt.coordinate;
        var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));

        content.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>';
        popupOverlay.setPosition(coordinate);
    };

    var getPopupOverlay = function() {
        return popupOverlay;
    };

    return {
        showPopup: showPopup,
        getPopupOverlay: getPopupOverlay
    };
})();

var DialogPopups = (function() {
    var container = document.getElementById('dialog-popup'),
        content = document.getElementById('dialog-popup-content'),
        closer = document.getElementById('dialog-popup-closer');

    var init = (function() {
        // On close element click
        closer.onclick = function() {
            container.style.display = 'none';
        };
    })();

    var showPopup = function(content) {
        content.innerHTML = content;

        container.style.display = 'block';
    };

    return {
        showPopup: showPopup
    };
})();