app.controller('PortfolioController', function ($scope, $filter) {
    $scope.viewYears = [];

    $scope.includeYears = function (year) {
        var i = $.inArray(year, $scope.viewYears);
        if (i > -1) {
            $scope.viewYears.splice(i, 1);
        } else {
            $scope.viewYears.push(year);
            // custom filter in controller to handle highcharts re-rendering
            //$scope.filtered = $filter('filter')($scope.portfolio.performances, {year: year});
        }
    };

    $scope.yearFilter = function (year) {
        console.log(year.x.getFullYear());
        if ($scope.viewYears.length > 0) {
            if ($.inArray(year.x.getFullYear(), $scope.viewYears) < 0)
                return;
        }
        return year;
    };

    $scope.portfolio = {
        investments: [
            {
                type: 'Liquidity (incl. FX Products)',
                value: 3649245.38,
            },
            {
                type: 'Bonds',
                value: 500502.02,
            },
            {
                type: 'Real Estate',
                value: 7546422.13,
            },
            {
                type: 'Alternative Investment',
                value: 80302.06,
            },
            {
                type: 'Equities',
                value: 18057500.00,
            },
            {
                type: 'Precious Metals',
                value: 12500.00,
            },
            {
                type: 'Others',
                value: 35043.00,
            }
        ],
        totalValue: 33129504.21,
        performances: [
            {
                x: new Date('5/1/2015'),
                y: 29881514.59,
                
                difference: 4.45
            },
            {
                x: new Date('4/1/2015'),
                y: 28464007.04,
                difference: 7.83
            },
            {
                x: new Date('3/1/2015'),
                y: 26772015.65,
                difference: 7.22
            },
            {
                x: new Date('2/1/2015'),
                y: 24969236.76,
                difference: 6.32
            },
            {
                x: new Date('1/1/2015'),
                y: 23156113.10,
                difference: 4.98
            },
            {
                x: new Date('12/1/2014'),
                y: 19414256.42,
                difference: 5.98
            },
            {
                x: new Date('11/1/2014'),
                y: 20621823.17,
                difference: 6.22
            },
            {
                x: new Date('10/1/2014'),
                y: 21494126.29,
                difference: 4.23
            },
            {
                x: new Date('9/1/2014'),
                y: 20372132.90,
                difference: -5.22
            },
            {
                x: new Date('8/1/2014'),
                y: 20979222.46,
                difference: 2.98
            },
            {
                x: new Date('7/1/2014'),
                y: 22120492.16,
                difference: 5.44
            },
            {
                x: new Date('6/1/2014'),
                y: 23542839.81,
                difference: 6.43
            },
            {
                x: new Date('5/1/2014'),
                y: 24847113.14,
                difference: 5.54
            },
            {
                x: new Date('4/1/2014'),
                y: 23520277.29,
                difference: -5.34
            },
            {
                x: new Date('3/1/2014'),
                y: 20599058.85,
                difference: -12.42
            },
            {
                x: new Date('2/1/2014'),
                y: 22930872.32,
                difference: 11.32
            },
            {
                x: new Date('1/1/2014'),
                y: 22169567.36,
                difference: -3.32
            },
            {
                x: new Date('12/1/2013'),
                y: 18332792.63,
                difference: -7.32
            },
            {
                x: new Date('11/1/2013'),
                y: 19765637.27,
                difference: 4.32
            },
            {
                x: new Date('10/1/2013'),
                y: 18947121.62,
                difference: 7.43
            },
            {
                x: new Date('9/1/2013'),
                y: 18123121.43,
                difference: 6.23
            },
            {
                x: new Date('8/1/2013'),
                y: 17852343.84,
                difference: -8.04
            },
            {
                x: new Date('7/1/2013'),
                y: 19412347.12,
                difference: 11.84
            },
            {
                x: new Date('6/1/2013'),
                y: 17356967.54,
                difference: 13.03
            },
            {
                x: new Date('5/1/2013'),
                y: 15356322.77,
                difference: 7.75
            },
            {
                x: new Date('4/1/2013'),
                y: 14251222.27,
                difference: 2.32
            },
            {
                x: new Date('3/1/2013'),
                y: 13928403.53,
                difference: 12.06
            },
            {
                x: new Date('2/1/2013'),
                y: 12428888.67,
                difference: 3.57
            },
            {
                x: new Date('1/1/2013'),
                y: 12000000.00,
                difference: 0
            }
        ]

    };

    $scope.evaluate = function (difference) {
        if (difference > 0) {
            return 'badge bg-green';
        } else if (difference < 0) {
            return 'badge bg-red';
        } else {
            return 'badge bg-success';
        }
    };

    $scope.filtered = $scope.portfolio.performances;

});