var Filters = (function() {
    var filters = [];

    var init = (function() {

    })();

    addFilter: function(filter) {
        filters.push(filter);
    };

    removeFilter: function(filterIndex) {
        filters.slice(filterIndex, 1);
    }

    return {
        addFilter,
        removeFilter
    };
})();