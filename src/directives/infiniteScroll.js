app.directive('infiniteScroll', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('scroll', function () {
                if ((element[0].scrollTop + element[0].offsetHeight) == element[0].scrollHeight) {
                    scope.$apply(attrs.infinitescroll);
                }
            })
        }
    }
})