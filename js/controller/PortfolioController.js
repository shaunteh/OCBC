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
                value: 36492.38,
            },
            {
                type: 'Bonds',
                value: 5005.02,
            },
            {
                type: 'Real Estate',
                value: 75464.13,
            },
            {
                type: 'Alternative Investment',
                value: 803.06,
            },
            {
                type: 'Equities',
                value: 180575.00,
            },
            {
                type: 'Precious Metals',
                value: 125.00,
            },
            {
                type: 'Others',
                value: 350.00,
            }
        ],
        totalValue: 331295.21,
        performances: [
            {
                x: new Date('5/1/2015'),
                y: 298815.59,
                
                difference: 4.45
            },
            {
                x: new Date('4/1/2015'),
                y: 284640.04,
                difference: 7.83
            },
            {
                x: new Date('3/1/2015'),
                y: 267720.65,
                difference: 7.22
            },
            {
                x: new Date('2/1/2015'),
                y: 249692.76,
                difference: 6.32
            },
            {
                x: new Date('1/1/2015'),
                y: 231561.10,
                difference: 4.98
            },
            {
                x: new Date('12/1/2014'),
                y: 194142.42,
                difference: 5.98
            },
            {
                x: new Date('11/1/2014'),
                y: 206218.17,
                difference: 6.22
            },
            {
                x: new Date('10/1/2014'),
                y: 214941.29,
                difference: 4.23
            },
            {
                x: new Date('9/1/2014'),
                y: 203721.90,
                difference: -5.22
            },
            {
                x: new Date('8/1/2014'),
                y: 209792.46,
                difference: 2.98
            },
            {
                x: new Date('7/1/2014'),
                y: 221204.16,
                difference: 5.44
            },
            {
                x: new Date('6/1/2014'),
                y: 235428.81,
                difference: 6.43
            },
            {
                x: new Date('5/1/2014'),
                y: 248471.14,
                difference: 5.54
            },
            {
                x: new Date('4/1/2014'),
                y: 235202.29,
                difference: -5.34
            },
            {
                x: new Date('3/1/2014'),
                y: 205990.85,
                difference: -12.42
            },
            {
                x: new Date('2/1/2014'),
                y: 229308.32,
                difference: 11.32
            },
            {
                x: new Date('1/1/2014'),
                y: 221695.36,
                difference: -3.32
            },
            {
                x: new Date('12/1/2013'),
                y: 183327.63,
                difference: -7.32
            },
            {
                x: new Date('11/1/2013'),
                y: 197656.27,
                difference: 4.32
            },
            {
                x: new Date('10/1/2013'),
                y: 189471.62,
                difference: 7.43
            },
            {
                x: new Date('9/1/2013'),
                y: 181231.43,
                difference: 6.23
            },
            {
                x: new Date('8/1/2013'),
                y: 178523.84,
                difference: -8.04
            },
            {
                x: new Date('7/1/2013'),
                y: 194123.12,
                difference: 11.84
            },
            {
                x: new Date('6/1/2013'),
                y: 173569.54,
                difference: 13.03
            },
            {
                x: new Date('5/1/2013'),
                y: 153563.77,
                difference: 7.75
            },
            {
                x: new Date('4/1/2013'),
                y: 142512.27,
                difference: 2.32
            },
            {
                x: new Date('3/1/2013'),
                y: 139284.53,
                difference: 12.06
            },
            {
                x: new Date('2/1/2013'),
                y: 124288.67,
                difference: 3.57
            },
            {
                x: new Date('1/1/2013'),
                y: 120000.00,
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
