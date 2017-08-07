(function () {

    mockCatApi.$inject = ['$q', '$httpBackend'];

    angular.module('catClicker')
        .factory('mockCatApi', mockCatApi);

    function mockCatApi($q, $httpBackend) {
        allCats = [{
            id: 1,
            name: 'cat 1',
            url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/08/09/cats.jpg',
            isVisited: false,
            voteCount: 0
        }, {
            id: 2,
            name: 'cat 2',
            url: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
            isVisited: false,
            voteCount: 0
        }, {
            id: 3,
            name: 'cat 3',
            url: 'https://s-media-cache-ak0.pinimg.com/736x/bc/f0/4e/bcf04eafebdf707b8d900f02e6d8bd70--photo-tag-touch-me.jpg',
            isVisited: false,
            voteCount: 0
        }, {
            id: 4,
            name: 'cat 4',
            url: 'https://i.ytimg.com/vi/O8nXm2OmEqQ/hqdefault.jpg',
            isVisited: false,
            voteCount: 0
        }, {
            id: 5,
            name: 'cat 5',
            url: 'https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
            isVisited: false,
            voteCount: 0
        }];

        // get all cats
        $httpBackend.whenGET('/cats').respond(allCats);

        // adds a new cat to the cats array
        $httpBackend.whenPOST('/cat').respond(function (method, url, data) {
            var cat = angular.fromJson(data);
            angular.extend(cat, {
                id: allCats.length + 1,
                isVisited: false,
                voteCount: 0
            });
            allCats.push(cat);
            return [200, cat, {}];
        });

        return {
            allCats: allCats
        };
    }
})();