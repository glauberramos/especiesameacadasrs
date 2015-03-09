angular.module('Species', []).
controller('speciesController', function($scope) {
    $scope.filterGrupo = {"Aves":true,"Anfíbios":true,"Invertebrados":true,"Peixes":true,"Répteis":true,"Mamíferos":true};
    $scope.filterCategoria = {"RE - Regionalmente extinto": true, "CR - Ameaçado - Criticamente em perigo": true, "EN - Ameaçado - Em perigo": true, "VU - Ameaçado - Vulnerável": true}

    $scope.getNomeComum = function(nomeComum) {
        return nomeComum.replace(/-/g, ' ');
    };

    $scope.getCriterio = function(specie) {
        return specie["Critérios"].split(' ')[0].toLowerCase();
    };

    $scope.species = [];
    $scope.filteredSpecies = [];

    $scope.loadData = function() {
        Parse.initialize("LEIS9Ae6fMWOVoFxihLmEi0moBfGYb6CsrtYyRZn", "7SEvsIu2sbTDVJU8VAGaBuaShzdTBDkHt80sSvD1");

        var Specie = Parse.Object.extend("specie");
        var query = new Parse.Query(Specie);
        query.limit(300);

        query.find({
            success: function(results) {
                $(results).each(function() {
                    var especime = {
                        "Grupo": this.get('group'),
                        "Nome científico": this.get('scientificName'),
                        "Nomes Comuns": this.get('commonName'),
                        "Categoria": this.get('category'),
                        "Critérios": this.get('criteria'),
                        "Classe": this.get('class'),
                        "Ordem": this.get('order'),
                        "Familia": this.get('family'),
                        "url": this.get('url'),
                        "source": this.get('source'),
                        "id": this.id
                    };

                    $scope.species.push(especime);
                });

                $scope.filteredSpecies = $scope.species;
                $scope.setOrganizedByCriterio();
                $scope.setOrganizedByGrupo();
                $scope.$apply();
            }
        });
    };

    $scope.populateModal = function(id) {
        Parse.initialize("LEIS9Ae6fMWOVoFxihLmEi0moBfGYb6CsrtYyRZn", "7SEvsIu2sbTDVJU8VAGaBuaShzdTBDkHt80sSvD1");

        var Specie = Parse.Object.extend("specie");
        var query = new Parse.Query(Specie);
        query.equalTo("objectId", id);

        query.find({
            success: function(results) {
                var especime = {
                    "Grupo": results[0].get('group'),
                    "Nome científico": results[0].get('scientificName'),
                    "Nomes Comuns": results[0].get('commonName'),
                    "Categoria": results[0].get('category'),
                    "Critérios": results[0].get('criteria'),
                    "Classe": results[0].get('class'),
                    "Ordem": results[0].get('order'),
                    "Familia": results[0].get('family'),
                    "url": results[0].get('url'),
                    "source": results[0].get('source'),
                    "id": results[0].id
                };

                $scope.originalObject = results[0];
                $scope.viewSpecie = especime;
                $scope.$apply();
            }
        });
    };

    $scope.saveObject = function() {
        $scope.originalObject.set('scientificName', $scope.viewSpecie['Nome científico']);
        $scope.originalObject.set('group', $scope.viewSpecie['Grupo']);
        $scope.originalObject.set('commonName', $scope.viewSpecie['Nomes Comuns']);
        $scope.originalObject.set('category', $scope.viewSpecie['Categoria']);
        $scope.originalObject.set('criteria', $scope.viewSpecie['Critérios']);
        $scope.originalObject.set('class', $scope.viewSpecie['Classe']);
        $scope.originalObject.set('order', $scope.viewSpecie['Ordem']);
        $scope.originalObject.set('family', $scope.viewSpecie['Familia']);
        $scope.originalObject.set('url', $scope.viewSpecie['url']);
        $scope.originalObject.set('source', $scope.viewSpecie['source']);
        $scope.originalObject.save();

        window.location.hash = '';

        // $scope.loadData();
    }

    $scope.init = function() {
        $scope.loadData();
    };

    $scope.setOrganizedByGrupo = function() {
        $scope.organizedByGrupo = {};

        $($scope.filteredSpecies).each(function() {
            if($scope.organizedByGrupo[this["Grupo"]]) {
                $scope.organizedByGrupo[this["Grupo"]].push(this);
            } else {
                $scope.organizedByGrupo[this["Grupo"]] = [ this ];
            }
        });
    };

    $scope.setOrganizedByCriterio = function() {
        $scope.organized = {};

        $($scope.filteredSpecies).each(function() {
            if($scope.organized[$scope.getCriterio(this)]) {
                $scope.organized[$scope.getCriterio(this)].push(this);
            } else {
                $scope.organized[$scope.getCriterio(this)] = [ this ];
            }
        });
    };

    $scope.filter = function($event) {
        var checkbox = $event.target;
        
        if ($(checkbox).attr('grupo')) {
            $scope.filterGrupo[$(checkbox).attr('grupo')] = checkbox.checked;
        } else {
            $scope.filterCategoria[$(checkbox).attr('categoria')] = checkbox.checked;
        }

        $scope.filteredSpecies = [];

        $($scope.species).each(function(index, element) {
            if($scope.filterGrupo[element["Grupo"]] === true && $scope.filterCategoria[element["Categoria"]] ) {
                $scope.filteredSpecies.push(element);
            }
        });

        $scope.setOrganizedByCriterio();
        $scope.setOrganizedByGrupo();
    };
});
