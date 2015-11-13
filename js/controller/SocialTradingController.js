app.controller('SocialTradingController', function ($scope, $location, $filter) {

    $scope.summary = [
        {stock: "NASDAQ: AAPL", description: "Apple Inc.", price: 116.05, return: 201.32},
        {stock: "NASDAQ: GOOG", description: "Alphabet Inc Class C", price: 735.4, return: 150.55},
        {stock: "SGX: BN4", description: "Keppel Corporation Limited", price: 6.90, return: -23.55},
        {stock: "SGX: 42R", description: "Jumbo Group Limited", price: 0.351, return: 305.55},
    ];

    $scope.social = function () {
        $location.path("social");
    };

    $scope.socialUser1 = function () {
        $location.path("socialUser1");
    };

    $scope.renderPerformanceGraph = function () {

        console.log("rendering performance graph...");

        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
            // Create the chart
            $('#performance').highcharts({
                rangeSelector: {
                    selected: 1
                },
                title: {
                    text: 'Bettina Julian Performance'
                },
                credits: {
                    enabled: false
                },
                series: [{
                        data: data,
                        tooltip: {
                            valueDecimals: 2
                        }
                    }]
            });
        });

    }

    $scope.evaluateReturn = function (value) {
        if (value > 0) {
            return 'label label-success';
        } else if (value < 0) {
            return 'label label-danger';
        } else {
            return 'label label-warning';
        }
    };

});