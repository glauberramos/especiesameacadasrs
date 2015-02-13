angular.module('Species', []).
controller('speciesController', function($scope) {
    $scope.filterGrupo = {"Aves":true,"Anfíbios":true,"Invertebrados":true,"Peixes":true,"Répteis":true,"Mamíferos":true};
    $scope.filterCategoria = {"CR - Ameaçado - Criticamente em perigo": true, "EN - Ameaçado - Em perigo": true, "VU - Ameaçado - Vulnerável": true, "RE - Regionalmente extinto": true}

    $scope.getNomeComum = function(nomeComum) {
        return nomeComum.replace(/-/g, ' ');
    };

    $scope.getCriterio = function(specie) {
        return specie["Critérios"].split(' ')[0].toLowerCase();
    };

    $scope.init = function() {
        $scope.setOrganizedByCriterio();
        $scope.setOrganizedByGrupo();
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

    $scope.species = [{
        "Grupo": "Aves",
        "Nome científico": "Alectrurus risora",
        "Nomes Comuns": "tesoura-do-campo",
        "Categoria": "RE - Regionalmente extinto",
        "Critérios": "RE",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Tyrannidae",
        "url": "http://ibc.lynxeds.com/files/pictures/IMG_4440-1.JPG"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Anodorhynchus glaucus",
        "Nomes Comuns": "arara-azul-pequena",
        "Categoria": "RE - Regionalmente extinto",
        "Critérios": "RE",
        "Classe": "Aves",
        "Ordem": "Psittaciformes",
        "Familia": "Psittacidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Anodorhynchus_glaucus.jpg/220px-Anodorhynchus_glaucus.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Falco deiroleucus",
        "Nomes Comuns": "falcão-de-peito-vermelho",
        "Categoria": "RE - Regionalmente extinto",
        "Critérios": "RE",
        "Classe": "Aves",
        "Ordem": "Falconiformes",
        "Familia": "Falconidae",
        "url": "http://neotropical.birds.cornell.edu/portal/image/image_gallery?uuid=6693d3b8-d91a-4ef3-a327-9255db7b9d96&groupId=11003"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Lophornis magnificus",
        "Nomes Comuns": "topetinho-vermelho",
        "Categoria": "RE - Regionalmente extinto",
        "Critérios": "RE",
        "Classe": "Aves",
        "Ordem": "Apodiformes",
        "Familia": "Trochilidae",
        "url": "http://www.dphotographer.co.uk/users/16194/thm1024/5.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Morphnus guianensis",
        "Nomes Comuns": "uiraçu-falso",
        "Categoria": "RE - Regionalmente extinto",
        "Critérios": "RE",
        "Classe": "Aves",
        "Ordem": "Falconiformes",
        "Familia": "Accipitridae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/d/d4/Morphnus_guianensis_eating_green_snake_-Bolivia-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Penelope superciliaris",
        "Nomes Comuns": "jacupemba, jacu-velho",
        "Categoria": "RE - Regionalmente extinto",
        "Critérios": "RE",
        "Classe": "Aves",
        "Ordem": "Galliformes",
        "Familia": "Cracidae",
        "url": "http://ibc.lynxeds.com/files/pictures/213_Penelope_superciliaris_Serra_da_CapivaraPI_06_X_2008_CA.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Platyrinchus leucoryphus",
        "Nomes Comuns": "patinho-gigante",
        "Categoria": "RE - Regionalmente extinto",
        "Critérios": "RE",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Tyrannidae",
        "url": "http://cdn2.arkive.org/media/A3/A30290F5-ED67-4719-9988-6C19F48322EF/Presentation.Large/Russet-winged-spadebill-perched-on-branch.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Primolius maracana",
        "Nomes Comuns": "maracanã",
        "Categoria": "RE - Regionalmente extinto",
        "Critérios": "RE",
        "Classe": "Aves",
        "Ordem": "Psittaciformes",
        "Familia": "Psittacidae",
        "url": "http://www.free-pet-wallpapers.com/free-pet-wallpapers/free-pet-desktop-backgrounds/929158883.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Sporophila frontalis",
        "Nomes Comuns": "pixoxó",
        "Categoria": "RE - Regionalmente extinto",
        "Critérios": "RE",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Emberizidae",
        "url": "http://cdn1.arkive.org/media/0F/0F6BE849-55EF-4044-9EFE-2E7D76B7CF13/Presentation.Large/Buffy-fronted-seedeater-perched.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Sturnella defilippii",
        "Nomes Comuns": "peito-vermelho-grande",
        "Categoria": "RE - Regionalmente extinto",
        "Critérios": "RE",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Icteridae",
        "url": "http://cdn1.arkive.org/media/20/2041F655-EAE1-4B63-9AD3-149B19DD037A/Presentation.Large/Pampas-meadowlark-in-flight.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Pteronura brasiliensis",
        "Nomes Comuns": "ariranha",
        "Categoria": "RE - Regionalmente extinto",
        "Critérios": "RE",
        "Classe": "Mammalia",
        "Ordem": "Carnivora",
        "Familia": "Mustelidae",
        "url": "http://www.overbosch.de/photo_gallery/Pantanal/pantanal%20flashgallery%20Giant%20otter/bin/images/small/Giant_otter_Pteronura_brasiliensis_07.jpg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Ceratophrys ornata",
        "Nomes Comuns": "Escuerzo, Intanha, Sapo-boi, Sapo-de-chifres, Sapo-intanha, Sapo-Untanha",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B1b(i,iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Ceratophrydae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/3/3f/Argentine_Horned_Frog_(Ceratophrys_ornata)1.JPG"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Leptodactylus labyrinthicus",
        "Nomes Comuns": "rã-pimenta",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR  A2",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Leptodactylidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/b/bd/Leptodactylus_labyrinthicus.jpg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Melanophryniscus admirabilis",
        "Nomes Comuns": "sapinho-de-barriga-vermelha",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B1ab(iii)+2ab(iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Bufonidae",
        "url": "http://calphotos.berkeley.edu/imgs/512x768/0000_0000/0212/0223.jpeg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Aburria jacutinga",
        "Nomes Comuns": "jacutinga",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR C2a(i)",
        "Classe": "Aves",
        "Ordem": "Galliformes",
        "Familia": "Cracidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/a/ab/Aburria_jacutinga_-Parque_das_Aves-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Automolus leucophthalmus",
        "Nomes Comuns": "barranqueiro-de-olho-branco",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B1ab(i,ii,iii,iv); C2a(ii); D",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Furnariidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/e/e8/Automolus_leucophthalmus_-Piraju,_Sao_Paulo,_Brazil-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Coryphistera alaudina",
        "Nomes Comuns": "corredor-crestudo",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B1ac(ii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Furnariidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Coryphistera_alaudina_alaudina.jpg/250px-Coryphistera_alaudina_alaudina.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Crypturellus noctivagus",
        "Nomes Comuns": "jaó-do-litoral",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(iii); D",
        "Classe": "Aves",
        "Ordem": "Tinamiformes",
        "Familia": "Tinamidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/3/33/Crypturellus_noctivagus_zabele_2.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Dendrocincla turdina",
        "Nomes Comuns": "arapaçu-liso",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(ii,iii); C2a(i)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Dendrocolaptidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/5/55/Dendrocincla_turdina_-Vale_do_Ribeira,_Registro,_Sao_Paulo,_Brasil-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Diomedea dabbenena",
        "Nomes Comuns": "albatroz-de-tristão",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A4ade",
        "Classe": "Aves",
        "Ordem": "Procellariiformes",
        "Familia": "Diomedeidae",
        "url": "http://cdn2.arkive.org/media/F4/F4E7F153-81FA-46DE-9DBE-E4E3BEC34485/Presentation.Large/Tristan-albatross-in-flight-dorsal-view.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Dromococcyx phasianellus",
        "Nomes Comuns": "peixe-frito-verdadeiro",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR D",
        "Classe": "Aves",
        "Ordem": "Cuculiformes",
        "Familia": "Cuculidae",
        "url": "http://www.faunaparaguay.com/images/Dromococcyx%20phasianellus%20HDC%20San%20Ber%20Oct%2011.JPG"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Gubernatrix cristata",
        "Nomes Comuns": "cardeal-amarelo",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR C2a(i); D",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Emberizidae",
        "url": "http://ibc.lynxeds.com/files/pictures/Imagen_1572.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Harpia harpyja",
        "Nomes Comuns": "gavião-real",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR D",
        "Classe": "Aves",
        "Ordem": "Falconiformes",
        "Familia": "Accipitridae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/9/9d/Harpia_harpyja_-Miami_MetroZoo_-feeding-8a.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Hemitriccus orbitatus",
        "Nomes Comuns": "tiririzinho-do-mato",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR C2a(i)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Tyrannidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/c/cd/Hemitriccus_orbitatus_-Parque_Estadual_da_Serra_da_Cantareira,_Sao_Paulo,_Brazil-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Leptasthenura platensis",
        "Nomes Comuns": "rabudinho",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR D",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Furnariidae",
        "url": "http://3.bp.blogspot.com/-6HWjm43l6yk/UY5fZeti00I/AAAAAAAAJSQ/qkXiwzP_nT0/s1600/coludito+copeton+4.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Spizaetus ornatus",
        "Nomes Comuns": "gavião-de-penacho",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR C2a(i); D",
        "Classe": "Aves",
        "Ordem": "Falconiformes",
        "Familia": "Accipitridae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/5/54/Spizaetus_ornatus_crop.png"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Urubitinga coronata",
        "Nomes Comuns": "águia-cinzenta",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR C2a(ii)",
        "Classe": "Aves",
        "Ordem": "Falconiformes",
        "Familia": "Accipitridae",
        "url": "https://c2.staticflickr.com/8/7104/7179231384_f391c76837.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla renana",
        "Nomes Comuns": "Caranguejo -de-rio",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B1ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://www.scielo.br/img/revistas/nau/v21n2/a08tab01.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Narope guilhermei",
        "Nomes Comuns": "",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Nymphalidae",
        "url": "http://www.butterfliesofamerica.com/Lamas/narope0019.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Olivancillaria teaguei",
        "Nomes Comuns": "caramujo",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B1ab(iii,v)",
        "Classe": "Gastropoda",
        "Ordem": "Neogastropoda",
        "Familia": "Olividae",
        "url": "http://www.gastropods.com/Shell_Images/N-O/Olivancillaria_teaguei_2.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Stichelia pelotensis",
        "Nomes Comuns": "",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B1ab(ii,iii)+2ab(ii,iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Riodinidae",
        "url": "http://www.butterfliesofamerica.com/Lamas/stichelia0009.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Balaenoptera musculus",
        "Nomes Comuns": "Baleia-azul",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A1abd",
        "Classe": "Mammalia",
        "Ordem": "Cetacea",
        "Familia": "Balaenopteridae",
        "url": "https://pbs.twimg.com/media/A90qf_eCIAAcI_a.jpg:large"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Blastocerus dichotomus",
        "Nomes Comuns": "cervo-do-pantanal",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B1ac(ii); D",
        "Classe": "Mammalia",
        "Ordem": "Artiodactyla",
        "Familia": "Cervidae",
        "url": "http://www.faunaparaguay.com/images/Blastocerus%20dichotomus%201%20male%20itaipu%20zoo%20mar%2008.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Chrysocyon brachyurus",
        "Nomes Comuns": "lobo-guará",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR D",
        "Classe": "Mammalia",
        "Ordem": "Carnivora",
        "Familia": "Canidae",
        "url": "http://s3.amazonaws.com/everystockphoto/fspid31/55/03/94/2/chrysocyon-brachyurus-mane-5503942-o.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Myrmecophaga tridactyla",
        "Nomes Comuns": "Tamanduá-açu, Tamanduá-bandeira",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2cd",
        "Classe": "Mammalia",
        "Ordem": "Xenarthra",
        "Familia": "Myrmecophagidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/8/89/Myrmecophaga_tridactyla_-Detroit_Zoo,_Michigan,_USA-8a_(1).jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Ozotoceros bezoarticus",
        "Nomes Comuns": "veado-branco, veado-campeiro",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR C2a(i)",
        "Classe": "Mammalia",
        "Ordem": "Artiodactyla",
        "Familia": "Cervidae",
        "url": "https://themoderndayhippy.files.wordpress.com/2012/11/dsc_03061.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Panthera onca",
        "Nomes Comuns": "onça, onça-pintada, onça-preta (melânica), pintada",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR D",
        "Classe": "Mammalia",
        "Ordem": "Carnivora",
        "Familia": "Felidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/5/51/Panthera_onca_-Chester_Zoo,_Cheshire,_England-8a_(4).jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Pontoporia blainvillei",
        "Nomes Comuns": "toninha",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A4bd",
        "Classe": "Mammalia",
        "Ordem": "Cetacea",
        "Familia": "Pontoporiidae",
        "url": "http://www.cms.int/reports/small_cetaceans/data/P_blainvillei/P%20blainvillei_wurtz.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Tapirus terrestris",
        "Nomes Comuns": "anta",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR D",
        "Classe": "Mammalia",
        "Ordem": "Perissodactyla",
        "Familia": "Tapiridae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/7/75/Tapirus_terrestris_(1)_by_JM_Rosier.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Tayassu pecari",
        "Nomes Comuns": "queixada",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR C2b",
        "Classe": "Mammalia",
        "Ordem": "Artiodactyla",
        "Familia": "Tayassuidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/2/2a/Tayassu_pecari_-Brazil-8.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias adloffi",
        "Nomes Comuns": "peixe-anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/c/c9/Austrolebias_adloffi.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias alexandri",
        "Nomes Comuns": "peixe-anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://zoonews.ge/wp-content/uploads/Austrolebias-alexandri-.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias arachan",
        "Nomes Comuns": "",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.aquabid.com/uploads/fwkillifishe1299192762.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias cyaneus",
        "Nomes Comuns": "peixe-anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(i,ii,iii,iv)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://akwa-mania.mud.pl/ryby/ryby/rybya/Austrolebias%20cyaneus.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias ibicuiensis",
        "Nomes Comuns": "peixe-anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(i,ii,iii,iv)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.scielo.br/img/revistas/ni/v6n2/04f1.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias jaegari",
        "Nomes Comuns": "Peixe anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(ii,iii,iv)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.fishbase.org/images/thumbnails/jpg/tn_Aujae_u0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias juanlangi",
        "Nomes Comuns": "Peixe anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.stamps4fish.co.uk/images/FISH/Class_F%20(newworld/Austrolebias_juanlangi.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias litzi",
        "Nomes Comuns": "peixe-anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://imageshack.us/a/img850/4950/dsc09232b.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias luteoflammulatus",
        "Nomes Comuns": "peixe-anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.zipcodezoo.com/hp350/Austrolebias_luteoflammulatus_0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias nachtigalli",
        "Nomes Comuns": "peixe-anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.fishbase.org/images/thumbnails/jpg/tn_Aunac_u1.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias paucisquama",
        "Nomes Comuns": "Peixe-anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.aquabid.com/uploads/fwkillifishe1333822651.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias prognathus",
        "Nomes Comuns": "Peixe anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.ac.auone-net.jp/~adk/Megalebias%20prognathus1.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias univentripinnis",
        "Nomes Comuns": "peixe-anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.fishbase.org/images/species/Aumel_u0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias varzeae",
        "Nomes Comuns": "Peixe-anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.scielo.br/img/revistas/ni/v2n1/a03fig01.gif"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias vazferreirai",
        "Nomes Comuns": "Peixe-anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.srars.org/aphanius/aquabid/Austrolebias%20vazferreirai%20%C2%ABParque%20Rivera%C2%BB%202.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias wolterstorffi",
        "Nomes Comuns": "peixe-anual",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(i,ii,iii,iv)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.aquabid.com/uploads/fwkillifishe1290351643.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Brycon orbignyanus",
        "Nomes Comuns": "bracanjuva, piracanjuba, salmão criolo",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2cd",
        "Classe": "Osteichthyes",
        "Ordem": "Characiformes",
        "Familia": "Characidae",
        "url": "http://www.fishbase.us/images/thumbnails/jpg/tn_Brorb_u1.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Carcharhinus plumbeus",
        "Nomes Comuns": "Cação-galhudo, Tubarão-galhudo, Tubarão-sucuri",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Carcharhiniformes",
        "Familia": "Carcharhinidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/6/6e/Carcharhinus_plumbeus_georgia.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Carcharhinus signatus",
        "Nomes Comuns": "",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Carcharhiniformes",
        "Familia": "Carcharhinidae",
        "url": "http://www.flmnh.ufl.edu/fish/gallery/descript/nightshark/nightshark.JPG"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Carcharias taurus",
        "Nomes Comuns": "Cação-magona, mangona",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Lamniformes",
        "Familia": "Odontaspididae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/1/11/Carcharias_taurus_newport.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Characidium vestigipinne",
        "Nomes Comuns": "canivete",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Characiformes",
        "Familia": "Chrenuchidae",
        "url": "http://www.neotropical.com.br/imgs/ambiental.vidaselvagem1.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Galeorhinus galeus",
        "Nomes Comuns": "cação-bico-doce",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Carcharhiniformes",
        "Familia": "Triakidae",
        "url": "http://www.fishesofaustralia.net.au/Images/Image/Galeorhinus-galeus_RK.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Genidens planifrons",
        "Nomes Comuns": "Bagre, Bagre-Boca-Larga, Bagre-Cachorro, Bagre-Natal",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A4bd",
        "Classe": "Osteichthyes",
        "Ordem": "Siluriformes",
        "Familia": "Ariidae",
        "url": "http://catfishbone.acnatsci.org/Ariidae/Genidens/planifrons/images/thumbs/Genidens.planifrons.iop.thb.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Lobotes surinamensis",
        "Nomes Comuns": "brejereba, frejereba, peixe-folha, prejereba",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Osteichthyes",
        "Ordem": "PERCIFORMES",
        "Familia": "Lobotidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/9/92/Lobotes_surinamensis.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Mustelus fasciatus",
        "Nomes Comuns": "Cação-listrado, cação-malhado",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Carcharhiniformes",
        "Familia": "Triakidae",
        "url": "http://fishbase.cn/images/species/Mufas_f0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Mustelus schmitti",
        "Nomes Comuns": "cação-bico-doce, cação-sebastião, canejo, cola-fina, Tubarão-bico-doce-pintado",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Carcharhiniformes",
        "Familia": "Triakidae",
        "url": "http://www.inidep.edu.ar/wp-content/uploads/GATUZO.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Myliobatis freminvillii",
        "Nomes Comuns": "arraia-amarela, emplastro-amarelo, raia-amarela, raia-sapo",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A4b",
        "Classe": "Chondrichthyes",
        "Ordem": "Rajiformes",
        "Familia": "Myliobatidae",
        "url": "http://shark-references.com/images/species/600xNxMyliobatis-freminvillii.jpg.pagespeed.ic.ZNaH-jnG-R.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Myliobatis goodei",
        "Nomes Comuns": "arraia-amarela, emplastro-amarelo, raia-amarela, raia-sapo",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Rajiformes",
        "Familia": "Myliobatidae",
        "url": "http://www.fishbase.us/images/thumbnails/jpg/tn_Mygoo_u0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Polyprion americanus",
        "Nomes Comuns": "Cherne Poveiro",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Osteichthyes",
        "Ordem": "PERCIFORMES",
        "Familia": "Polyprionidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/6/62/Polyprion_americanus.2_-_Aquarium_Finisterrae.JPG"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Rhinobatos horkelii",
        "Nomes Comuns": "raia-viola, viola",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Rajiformes",
        "Familia": "Rhinobatidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/e/e6/Rhinobatos_horkelii.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Rhinoptera brasiliensis",
        "Nomes Comuns": "Ticonha",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2abd",
        "Classe": "Chondrichthyes",
        "Ordem": "Rajiformes",
        "Familia": "Myliobatidae",
        "url": "http://cdn2.arkive.org/media/C7/C7A55052-18DC-495B-8B36-59909A9527DF/Presentation.Large/Brazilian-cownose-ray-specimen.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Sphyrna lewini",
        "Nomes Comuns": "Cambeva, Cambeva-branca, Cambevota, Tubarão-martelo, Tubarão-martelo-entalhado, Vaca",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Carcharhiniformes",
        "Familia": "Sphyrnidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/5/5a/Sphyrna_lewini_Gervais.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Sphyrna zygaena",
        "Nomes Comuns": "Cambeva-preta, Tubarão-martelo, Tubarão-martelo-liso, Vaca",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2d",
        "Classe": "Chondrichthyes",
        "Ordem": "Carcharhiniformes",
        "Familia": "Sphyrnidae",
        "url": "http://cdn2.arkive.org/media/8F/8F530F3C-71C5-4C5A-8042-1CB5E6B4510A/Presentation.Large/Smooth-hammerhead-swimming.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Squatina argentina",
        "Nomes Comuns": "cação-anjo-de-asa-longa",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Squatiniformes",
        "Familia": "Squatinidae",
        "url": "http://www.geocities.ws/diversidad_animal/Fotos_peces/Squatina_argentina1.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Squatina guggenheim",
        "Nomes Comuns": "cação-anjo, cação-anjo-espinhoso, peixe-anjo",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Squatiniformes",
        "Familia": "Squatinidae",
        "url": "http://www.fishbase.us/images/thumbnails/jpg/tn_Sqgug_m0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Squatina occulta",
        "Nomes Comuns": "cação-anjo, cação-anjo-de-asa-curta, peixe-anjo",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Squatiniformes",
        "Familia": "Squatinidae",
        "url": "http://www.fishbase.us/images/thumbnails/jpg/tn_Sqocc_u0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Sympterygia bonapartii",
        "Nomes Comuns": "emplastro, emplastro-amarelo",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Rajiformes",
        "Familia": "Rajidae",
        "url": "http://www.boldsystems.org/pics/_w300/FARG/INIDEP-T_0214%2B1137284736.JPG"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Trichomycterus tropeiro",
        "Nomes Comuns": "cambeva, charutinho",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR B1ab(iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Siluriformes",
        "Familia": "TRICHOMYCTERIDAE",
        "url": "http://www.scielo.br/img/revistas/ni/v11n2//1679-6225-ni-11-02-0217-gf08.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Zapteryx brevirostris",
        "Nomes Comuns": "viola banjo, viola-banjo",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Rajiformes",
        "Familia": "Rhinobatidae",
        "url": "http://shark-references.com/images/species/600xNxZapteryx_brevirostris,28MUELLER,aHENLE,,1838,29.jpg.pagespeed.ic.Qnapx2oy9G.jpg"
    }, {
        "Grupo": "Répteis",
        "Nome científico": "Dermochelys coriacea",
        "Nomes Comuns": "tartaruga-de-couro, tartaruga-gigante",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2ab",
        "Classe": "Reptilia",
        "Ordem": "Testudines",
        "Familia": "Dermochelyidae",
        "url": "http://static.panoramio.com/photos/large/3905400.jpg"
    }, {
        "Grupo": "Répteis",
        "Nome científico": "Eretmochelys imbricata",
        "Nomes Comuns": "tartaruga-de-pente",
        "Categoria": "CR - Ameaçado - Criticamente em perigo",
        "Critérios": "CR A2abcde",
        "Classe": "Reptilia",
        "Ordem": "Testudines",
        "Familia": "Cheloniidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/8/86/Eretmochelys_imbricata_01.jpg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Crossodactylus schmidti",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)+2ab(iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Hylodidae",
        "url": "http://www.faunaparaguay.com/images/Crossodactylus%20schmidti%20tirol%20JP%208nov13.JPG"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Eleutherodactylus binotatus",
        "Nomes Comuns": "rã-das-matas",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(i,ii,iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Leptodactylidae",
        "url": "http://santuario-ra-bugio.htmlplanet.com/images/eleutherodactylus_binotatus-90.jpg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Hypsiboas curupi",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Hylidae",
        "url": "http://www.faunaparaguay.com/Hypsiboas%20curupi%20alberto%201.jpg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Melanophryniscus macrogranulosus",
        "Nomes Comuns": "sapinho-narigudo-de-barriga-vermelha",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)+2ab(iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Bufonidae",
        "url": "http://cdn1.arkive.org/media/2E/2EF48041-2F06-4C1E-9F09-025DFE3A4287/Presentation.Large/Torres-red-belly-toad-dorsal-view.jpg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Melanophryniscus montevidensis",
        "Nomes Comuns": "sapinho-de-barriga-vermelha-uruguaio",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)+2ab(iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Bufonidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Melanophryniscus_montevidensis01a.jpg/220px-Melanophryniscus_montevidensis01a.jpg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Melanophryniscus stelzneri dorsalis",
        "Nomes Comuns": "sapinho-de-barriga-vermelha",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(i,ii,iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Bufonidae",
        "url": "http://calphotos.berkeley.edu/imgs/512x768/0000_0000/0611/1257.jpeg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Phyllomedusa distincta",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(i,ii,iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Hylidae",
        "url": "http://calphotos.berkeley.edu/imgs/512x768/0000_0000/0702/0879.jpeg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Phyllomedusa tetraploidea",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(i,ii,iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Hylidae",
        "url": "http://christiancamargo.com.br/fauna/Perereca-macaco%20(Phyllomedusa%20tetr…loidea)/album/slides/Perereca-macaco%20(Phyllomedusa%20tetraploidea)-8.jpg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Sphaenorhynchus caramaschi",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(i,ii,iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Hylidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Sphaenorhynchus_planicola.jpg/250px-Sphaenorhynchus_planicola.jpg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Sphaenorhynchus caramaschii",
        "Nomes Comuns": "perereca-verde-do-brejo",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(i,ii,iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Hylidae",
        "url": "http://calphotos.berkeley.edu/imgs/512x768/0000_0000/0212/0950.jpeg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Thoropa saxatilis",
        "Nomes Comuns": "rã-das-pedras",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(i,ii,iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Leptodactylidae",
        "url": "http://www.kwet.de/img/album/santa_catarina/5_thoropa_saxatilis.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Accipiter poliogaster",
        "Nomes Comuns": "tauató-pintado",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN D",
        "Classe": "Aves",
        "Ordem": "Falconiformes",
        "Familia": "Accipitridae",
        "url": "http://www.birdsandbirds.com/gallery_pappagalli/arc_foto/Accipiter_poliogaster%203.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Agelasticus cyanopus",
        "Nomes Comuns": "carretão",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(iii)c(ii); D",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Icteridae",
        "url": "http://ibc.lynxeds.com/files/pictures/Agelasticus_cyanopus__MG_9351-1.JPG"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Amazona vinacea",
        "Nomes Comuns": "papagaio-de-peito-roxo",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN C2a(i)",
        "Classe": "Aves",
        "Ordem": "Psittaciformes",
        "Familia": "Psittacidae",
        "url": "http://cdn2.arkive.org/media/BD/BD010B44-9328-40B0-ADCE-51153D1CC231/Presentation.Large/Vinaceous-amazon-in-captivity.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Calidris canutus",
        "Nomes Comuns": "maçarico-de-papo-vermelho",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A3b+4ab",
        "Classe": "Aves",
        "Ordem": "Charadriiformes",
        "Familia": "Scolopacidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/3/3f/Calidris_canutus_(summer).jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Corythopis delalandi",
        "Nomes Comuns": "estalador",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(ii,iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Tyrannidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/f/fa/Corythopis_delalandi.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Diomedea exulans",
        "Nomes Comuns": "albatroz-errante, albatroz-viajeiro",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A4ad",
        "Classe": "Aves",
        "Ordem": "Procellariiformes",
        "Familia": "Diomedeidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/b/b7/Diomedea_exulans_2_-_SE_Tasmania.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Diomedea sanfordi",
        "Nomes Comuns": "albatroz-real-do-norte",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A4bce",
        "Classe": "Aves",
        "Ordem": "Procellariiformes",
        "Familia": "Diomedeidae",
        "url": "http://www.biodiversityexplorer.org/birds/diomedeidae/images/3931northernroya2l_327w.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Drymophila rubricollis",
        "Nomes Comuns": "trovoada-de-bertoni",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Thamnophilidae",
        "url": "http://m9.i.pbase.com/g1/46/683346/2/116101819.oCfv309e.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Dryocopus galeatus",
        "Nomes Comuns": "pica-pau-de-cara-amarela",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN C2a(ii)",
        "Classe": "Aves",
        "Ordem": "Piciformes",
        "Familia": "Picidae",
        "url": "http://ibc.lynxeds.com/files/pictures/701_622_C.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Eleoscytalopus indigoticus",
        "Nomes Comuns": "macuquinho",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(ii,iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Rhinocryptidae",
        "url": "http://www.worldwildlifeimages.com/birds/d/11460-7/Eleoscytalopus+indigotic…sted+Tapaculo__1245+_c_+Greg+and+Yvonne+Dean+_WorldWildlifeImages_com_.JPG"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Formicarius colma",
        "Nomes Comuns": "galinha-do-mato",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(ii,iii)+2ab(ii,iii); D",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Formicariidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/b/bc/Formicarius_colma_-Vale_do_Ribeira,_Registro,_Sao_Paulo,_Brazil-8_(1).jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Hemitriccus diops",
        "Nomes Comuns": "olho-falso",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Rhynchocyclidae",
        "url": "http://ibc.lynxeds.com/files/pictures/Drab-_breasted_Bamboo-Tyrant_Hemitriccus_diops.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Hydropsalis anomala",
        "Nomes Comuns": "curiango-do-banhado",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN C1",
        "Classe": "Aves",
        "Ordem": "Caprimulgiformes",
        "Familia": "Caprimulgidae",
        "url": "https://c2.staticflickr.com/4/3847/14372575833_fc1f5e9699.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Myrmeciza squamosa",
        "Nomes Comuns": "papa-formiga-de-grota",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(ii,iii)+2ab(ii,iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Thamnophilidae",
        "url": "http://farm4.static.flickr.com/3047/2735596651_033e141b36.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Phoebetria fusca",
        "Nomes Comuns": "piau-preto",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A4bd",
        "Classe": "Aves",
        "Ordem": "Procellariiformes",
        "Familia": "Diomedeidae",
        "url": "http://ibc.lynxeds.com/files/pictures/IMG_7358.JPG"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Polystictus pectoralis",
        "Nomes Comuns": "papa-moscas-canela, tricolino-canela",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN C2a(i)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Tyrannidae",
        "url": "http://www.ramonmollerjensen.com/data/media/87/732-Tachur-Canela-Polystictus-pectoralis-Bearded-Tachuri.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Porzana spiloptera",
        "Nomes Comuns": "sanã-cinza",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN C2b",
        "Classe": "Aves",
        "Ordem": "Gruiformes",
        "Familia": "Rallidae",
        "url": "http://ibc.lynxeds.com/files/pictures/Dot-winged-Crake.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Pterodroma incerta",
        "Nomes Comuns": "pardela-de-capuz",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(v)",
        "Classe": "Aves",
        "Ordem": "Procellariiformes",
        "Familia": "Procellariidae",
        "url": "http://ibc.lynxeds.com/files/pictures/Pterodroma_incerta_2.JPG"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Pulsatrix perspicillata",
        "Nomes Comuns": "murucututu",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN D",
        "Classe": "Aves",
        "Ordem": "Strigiformes",
        "Familia": "Strigidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/d/d4/Pulsatrix_perspicillata_-Woodland_Park_Zoo-8a_(1).jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Scytalopus iraiensis",
        "Nomes Comuns": "macuquinho-da-várzea",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Rhinocryptidae",
        "url": "http://neotropical.birds.cornell.edu/portal/image/image_gallery?uuid=533bc39b-9b20-4966-bea4-d44422977549&groupId=11003"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Selenidera maculirostris",
        "Nomes Comuns": "araçaripoca",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN D",
        "Classe": "Aves",
        "Ordem": "Piciformes",
        "Familia": "Ramphastidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/7/7c/Selenidera_maculirostris_-_male.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Spizaetus melanoleucus",
        "Nomes Comuns": "gavião-pato",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN C2a(i)",
        "Classe": "Aves",
        "Ordem": "Falconiformes",
        "Familia": "Accipitridae",
        "url": "http://gallery.globalraptors.org/main.php?g2_view=core.DownloadItem&g2_itemId=1280&g2_serialNumber=4"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Spizaetus tyrannus",
        "Nomes Comuns": "gavião-pega-macaco",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN C2a(i)",
        "Classe": "Aves",
        "Ordem": "Falconiformes",
        "Familia": "Accipitridae",
        "url": "http://ibc.lynxeds.com/files/pictures/IMG_9029.JPG"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Sporophila angolensis",
        "Nomes Comuns": "curió",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN C1",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Emberizidae",
        "url": "http://www.icesi.edu.co/wiki_aves_colombia/show_image.php?id=2846"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Sporophila melanogaster",
        "Nomes Comuns": "Bico-de-ferro, caboclinho preto, caboclinho-de-barriga-preta",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN C1",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Emberizidae",
        "url": "http://ibc.lynxeds.com/files/pictures/Sporophila_melanogaster_DF-JBB1.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Sporophila plumbea",
        "Nomes Comuns": "patativa, patativa-de-bico-amarelo, patativa-do-sul",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1b(iii,iv,v)c(iii,iv)+2b(iii,iv,v)c(iii,iv); C1",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Emberizidae",
        "url": "http://antpitta.com/images/photos/finches/Plumbeous-Seedeater-male_6407.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Stymphalornis acutirostris",
        "Nomes Comuns": "bicudinho-do-brejo",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Thamnophilidae",
        "url": "http://calphotos.berkeley.edu/imgs/512x768/0000_0000/0111/1433.jpeg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Tangara peruviana",
        "Nomes Comuns": "saíra-sapucaia",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)+2ab(iii); C2a(ii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Emberizidae",
        "url": "http://ibc.lynxeds.com/files/pictures/Saira-sapucaia_24.JPG"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Thalassarche chlororhynchos",
        "Nomes Comuns": "albatroz-de-nariz-amarelo",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A4bcd",
        "Classe": "Aves",
        "Ordem": "Procellariiformes",
        "Familia": "Diomedeidae",
        "url": "http://www.biodiversityexplorer.org/birds/diomedeidae/images/3939atlanticyellow_658w.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Thalassarche melanophris",
        "Nomes Comuns": "albatroz-de-sobrancelha-negra",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A2bd",
        "Classe": "Aves",
        "Ordem": "Procellariiformes",
        "Familia": "Diomedeidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/2/29/Thalassarche_melanophris_-_In_the_colony.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Thalasseus maximus",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN C1",
        "Classe": "Aves",
        "Ordem": "Charadriiformes",
        "Familia": "Sternidae",
        "url": "http://ibc.lynxeds.com/files/imagecache/photo_940/pictures/Thalasseus_maxima0001.Tulum.Meksyk.6.12.2007.JPG"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Veniliornis mixtus",
        "Nomes Comuns": "picapauzinho-chorão",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii); C2a(ii)",
        "Classe": "Aves",
        "Ordem": "Piciformes",
        "Familia": "Picidae",
        "url": "https://leesbirdblog.files.wordpress.com/2010/04/checkered-woodpecker-veniliornis-mixtus-by-daves-birdingpix.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla camargoi",
        "Nomes Comuns": "caranguejo-de-agua-doce, caranguejo-de-rio",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://tolweb.org/tree/ToLimages/camargoi1.300a.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla inermis",
        "Nomes Comuns": "caranguejo-de-água-doce",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://tolweb.org/tree/ToLimages/inermis1.300a.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla leptodactyla",
        "Nomes Comuns": "caranguejo-de-rio",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://tolweb.org/tree/ToLimages/abtao.250a.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla ligulata",
        "Nomes Comuns": "caranguejo-de-rio",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://tolweb.org/tolarchive/76270/20070110/tree/ToLimages/ligulata1.300a.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla manuinflata",
        "Nomes Comuns": "caranguejo -de-rio",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://i2.rgstatic.net/i/profile/9fcfd510ab8f558c24_l_2fa7d.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla obstipa",
        "Nomes Comuns": "caranguejo-de-água-doce",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii,iv)+2ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://tolweb.org/tree/ToLimages/obstipa1.300a.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla plana",
        "Nomes Comuns": "caranguejo-de-rio",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://tolweb.org/tree/ToLimages/plana1.300a.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla violacea",
        "Nomes Comuns": "caranguejo-de-água-doce",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii,iv)+2ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://tolweb.org/tree/ToLimages/violacea1.300a.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Anthinus henseli",
        "Nomes Comuns": "caracol",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ac(ii,iii)",
        "Classe": "Gastropoda",
        "Ordem": "Stylommatophora",
        "Familia": "Strophocheilidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anthinus_henselii_shell.jpg/220px-Anthinus_henselii_shell.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Badecla clarissa",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Lycaenidae",
        "url": "http://www.butterfliesofamerica.com/Lamas/lamprospilus0066.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Brevianta celelata",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Lycaenidae",
        "url": "http://www.scielo.org.co/img/revistas/bccm/v14n1/v14n1a11f4.JPG"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Contrafacia muattina",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Lycaenidae",
        "url": "http://www.butterfliesofamerica.com/o02/USNM20120513_DSC4955.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Cyanophrys bertha",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(i,ii,iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Lycaenidae",
        "url": "http://www.butterfliesofamerica.com/Lamas/cyanophrys0016.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Dynastor napoleon",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Nymphalidae",
        "url": "http://www.theinsectcollector.com/acatalog/Dynastor_napoleon_M.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Heraclides androgeus laodocus",
        "Nomes Comuns": "borboleta",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Papilionidae",
        "url": "http://www.butterfliesofamerica.com/Lamas/heraclides0032.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Megalobulimus proclivis",
        "Nomes Comuns": "aruá-alongado",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(ii,iii)",
        "Classe": "Gastropoda",
        "Ordem": "Stylommatophora",
        "Familia": "Megalobulimidae",
        "url": "http://www.biodiversitas.org.br/boletim/EAO/2008/FEVEREIRO/img/Megalobulimus_proclivis.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Melipona bicolor schenki",
        "Nomes Comuns": "guaraipo",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii,v)",
        "Classe": "Insecta",
        "Ordem": "Hymenoptera",
        "Familia": "Apidae",
        "url": "http://1.bp.blogspot.com/-yrwyobCm634/UYOPahdP_ZI/AAAAAAAACfs/akQYfANZqzM/s1600/melipona_bicolor.png"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Melipona quadrifasciata quadrifasciata",
        "Nomes Comuns": "Mandaçaia",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN D",
        "Classe": "Insecta",
        "Ordem": "Hymenoptera",
        "Familia": "Apidae",
        "url": "http://www.socialinsect-research.com/resources/MeliponaQuadrifasciata2.JPG"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Monoeca xanthopyga",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)c(iii)",
        "Classe": "Insecta",
        "Ordem": "Hymenoptera",
        "Familia": "Apidae",
        "url": "http://www.scielo.br/img/revistas/rbzool/v20n1/n1a13f1b.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Olivancillaria contortuplicata",
        "Nomes Comuns": "búzio, caramujo",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)",
        "Classe": "Gastropoda",
        "Ordem": "Neogastropoda",
        "Familia": "Olividae",
        "url": "http://www.gastropods.com/Shell_Images/N-O/Olivancillaria_contortuplicata.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Olivella formicacorsii",
        "Nomes Comuns": "caramujo",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(ii,iii)",
        "Classe": "Gastropoda",
        "Ordem": "Neogastropoda",
        "Familia": "Olividae",
        "url": "http://www.nmr-pics.nl/Olivellidae/album/slides/Olivella%20formicacorsii.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Pampasatyrus gyrtone",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Nymphalidae",
        "url": "http://www.butterfliesofamerica.com/Lamas/pampasatyrus0007.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Pseudolucia parana",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Lycaenidae",
        "url": "http://www.butterfliesofamerica.com/Lamas/pseudolucia0069.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Pseudotinea hemis",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(ii,iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Riodinidae",
        "url": "http://www.butterfliesofamerica.com/L/images/pseudotinea0005.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Stichelia dukinfieldia",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(i,iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Riodinidae",
        "url": "http://www.butterfliesofamerica.com/Lamas/stichelia0007.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Theritas (Denivia) curitibaensis",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Lycaenidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Theritas_paupera_Novara.png/220px-Theritas_paupera_Novara.png"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Alouatta caraya",
        "Nomes Comuns": "bugio-preto",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A4acde",
        "Classe": "Mammalia",
        "Ordem": "Primates",
        "Familia": "Atelidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/d/d1/Alouatta-caraya_ppia-f01.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Balaenoptera borealis",
        "Nomes Comuns": "Baleia-sei",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A1d",
        "Classe": "Mammalia",
        "Ordem": "Cetacea",
        "Familia": "Balaenopteridae",
        "url": "http://www.animalbase.uni-goettingen.de/animalbaseimage/Balaenoptera-borealis_01.JPG"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Balaenoptera physalus",
        "Nomes Comuns": "Baleia-fin",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A1d",
        "Classe": "Mammalia",
        "Ordem": "Cetacea",
        "Familia": "Balaenopteridae",
        "url": "http://marinebio.org/upload/Balaenoptera-physalus/6.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Ctenomys flamarioni",
        "Nomes Comuns": "tuco-tuco-branco, tuco-tuco-das-dunas",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1b(i,ii,iii,iv)",
        "Classe": "Mammalia",
        "Ordem": "Rodentia",
        "Familia": "Ctenomyidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/4/4b/Ctenomys_flamarioni_cropped.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Ctenomys lami",
        "Nomes Comuns": "tuco-tuco",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(i,ii,iii,iv)",
        "Classe": "Mammalia",
        "Ordem": "Rodentia",
        "Familia": "Ctenomyidae",
        "url": "http://cdn1.arkive.org/media/18/1890C887-9843-49CC-85C6-B0AABBE358D1/Presentation.Large/Lami-tuco-tuco.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Leopardus colocolo",
        "Nomes Comuns": "Gato-dos-Pampas, gato-palheiro",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN D",
        "Classe": "Mammalia",
        "Ordem": "Carnivora",
        "Familia": "Felidae",
        "url": "http://cdn2.arkive.org/media/90/90A57EA3-DD92-40A0-A7CE-239F00055FAA/Presentation.Large/Adult-pampas-cat.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Mazama americana",
        "Nomes Comuns": "veado-mateiro, veado-pardo",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN D",
        "Classe": "Mammalia",
        "Ordem": "Artiodactyla",
        "Familia": "Cervidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/8/80/Mazama_americana_by_anagoria_.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Mazama nana",
        "Nomes Comuns": "veado-bororó-do-sul, veado-mão-curta",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN C2a(i)",
        "Classe": "Mammalia",
        "Ordem": "Artiodactyla",
        "Familia": "Cervidae",
        "url": "http://www.faunaparaguay.com/Mazama%20nana%20agatha%20boveda%20itaipu%20zoo.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Pecari tajacu",
        "Nomes Comuns": "caititu, cateto, porco-do-mato, tateti",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN C2a(i)",
        "Classe": "Mammalia",
        "Ordem": "Artiodactyla",
        "Familia": "Tayassuidae",
        "url": "http://gallery.new-ecopsychology.org/photo/mammals/collared_peccary_(pecari_tajacu)2.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Puma concolor",
        "Nomes Comuns": "leão-baio, onça-parda, puma, suçuarana",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN C2a(i)",
        "Classe": "Mammalia",
        "Ordem": "Carnivora",
        "Familia": "Felidae",
        "url": "http://www.catbg.net/divi/pictures/Vidove/Puma%20concolor/puma_concolor_cub.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Sylvilagus brasiliensis",
        "Nomes Comuns": "tapiti",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(iii)",
        "Classe": "Mammalia",
        "Ordem": "Lagomorpha",
        "Familia": "Leporidae",
        "url": "http://www.ecoregistros.org/site/images/albumes/1/4981/IMG_3287-EDIT.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Wilfredomys oenax",
        "Nomes Comuns": "rato-do-mato",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(ii,iii,iv)",
        "Classe": "Mammalia",
        "Ordem": "Rodentia",
        "Familia": "Cricetidae",
        "url": "http://atwabrasil.com/wp-content/uploads/2011/12/Wilfredomys_oenax.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Atlantirivulus riograndensis",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://3.bp.blogspot.com/-kIo2dBp6Y_U/U_F7xZ3xGmI/AAAAAAAAAQI/KNlBAY-oFsQ/s1600/Atl_rio.tif"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Atlantoraja castelnaui",
        "Nomes Comuns": "emplastro-marcela, emplastro-pintado, raia-chita, raia-marcela, raia-pintada",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Rajiformes",
        "Familia": "Rajidae",
        "url": "http://cdn1.arkive.org/media/6B/6B5CB53F-C035-4286-9C99-29BD79AB5C4E/Presentation.Large/Juvenile-female-spotback-skate.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias charrua",
        "Nomes Comuns": "peixe-anual",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(i,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.zipcodezoo.com/hp350/Austrolebias_charrua_0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias minuano",
        "Nomes Comuns": "peixe anual",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(ii,iii,iv)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.biolaw.com.br/wp-content/uploads/2012/03/Austrolebias-minuano-1024x682.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias nigrofasciatus",
        "Nomes Comuns": "peixe-anual",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://images.killi.net/n/NGF/ngfx.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Austrolebias periodicus",
        "Nomes Comuns": "peixe-anual",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.petshop-zoomania.com/Tetras,Rainbows,Killi/KAB%202010%20Internat…rtrait/Guillaume%20Dethu%20-%20Austrolebias%20periodicus%20Las%20Cavas.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Bryconamericus lambari",
        "Nomes Comuns": "lambari",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(i,ii,iii)+2ab(i,ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Characiformes",
        "Familia": "Characidae",
        "url": "http://www.fishbase.se/images/thumbnails/jpg/tn_Brlam_u0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Dasyatis centroura",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A2a",
        "Classe": "Chondrichthyes",
        "Ordem": "Rajiformes",
        "Familia": "Dasyatidae",
        "url": "http://www.oceanwideimages.com/images/12585/large/roughtail-stingray-43M2755-32.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Diapoma pyrrhopteryx",
        "Nomes Comuns": "lambari",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(i,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Characiformes",
        "Familia": "Characidae",
        "url": "http://www.scielo.br/img/revistas/paz/v51n5/01f34.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Epinephelus marginatus",
        "Nomes Comuns": "Garoupa, Garoupa-verdadeira",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A2d",
        "Classe": "Osteichthyes",
        "Ordem": "PERCIFORMES",
        "Familia": "Serranidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/e/ee/Epinephelus_marginatus_(Lowe,_1834)_1.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Genidens barbus",
        "Nomes Comuns": "Bagre, Bagre-Branco, Bagre-Marinho, Bagre-Rosado",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A4bd",
        "Classe": "Osteichthyes",
        "Ordem": "Siluriformes",
        "Familia": "Ariidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/f/f7/Genidens_barbus.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Gymnotus pantherinus",
        "Nomes Comuns": "Carapo, Peixe elétrico, Sarapó",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(iii)",
        "Classe": "Osteichthyes",
        "Ordem": "GYMNOTIFORMES",
        "Familia": "GYMNOTIDAE",
        "url": "http://www.fishbase.us/images/thumbnails/jpg/tn_Gypan_u0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Gymnura altavela",
        "Nomes Comuns": "raia-borboleta, raia-manteiga",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A2b",
        "Classe": "Chondrichthyes",
        "Ordem": "Rajiformes",
        "Familia": "Gymnuridae",
        "url": "https://www.flmnh.ufl.edu/fish/Gallery/Descript/SpinybflyRay/sbflyray.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Hollandichthys multifasciatus",
        "Nomes Comuns": "lambari-listrado",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Characiformes",
        "Familia": "Characidae",
        "url": "http://editoramarcelonotare.com/images/Hollandichthys_cf_multifasciatus.jpg?200"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Mustelus canis",
        "Nomes Comuns": "bico-doce, boca-de-velha, bodinho",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A2b",
        "Classe": "Chondrichthyes",
        "Ordem": "Carcharhiniformes",
        "Familia": "Triakidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/0/06/Mustelus_canis_noaa.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Odontesthes bicudo",
        "Nomes Comuns": "peixe-rei",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(iii,iv,v)",
        "Classe": "Osteichthyes",
        "Ordem": "ATHERINIFORMES",
        "Familia": "ATHERINOPSIDAE",
        "url": "http://upload.wikimedia.org/wikipedia/commons/a/a0/Odontesthes_argentinensis_Mar_del_Plata_2.JPG"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Pogonias cromis",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A2bd",
        "Classe": "Osteichthyes",
        "Ordem": "PERCIFORMES",
        "Familia": "SCIAENIDAE",
        "url": "http://www.sms.si.edu/irlspec/images/Pogoni_cromis1.gif"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Pseudoplatystoma corruscans",
        "Nomes Comuns": "pintado, surubi, surubim, surubim-pintado",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A2cde",
        "Classe": "Osteichthyes",
        "Ordem": "Siluriformes",
        "Familia": "Pimelodidae",
        "url": "http://www.scotcat.com/images/pseudoplatystoma_corruscans3.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Rioraja agassizii",
        "Nomes Comuns": "emplastro, emplastro-liso, raia-lisa, raia-santa",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A2b",
        "Classe": "Chondrichthyes",
        "Ordem": "Rajiformes",
        "Familia": "Rajidae",
        "url": "http://cdn1.arkive.org/media/46/4620D015-FAB1-4991-809A-76AC80B2BC01/Presentation.Large/Adult-female-Rio-skate-specimen.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Salminus brasiliensis",
        "Nomes Comuns": "dourado",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A2cd",
        "Classe": "Osteichthyes",
        "Ordem": "Characiformes",
        "Familia": "Characidae",
        "url": "http://www.aquahobby.com/gallery/characins/img/Salminus_brasiliensis_1.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Steindachneridium scriptum",
        "Nomes Comuns": "bocudo, surubim, suruvi",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Siluriformes",
        "Familia": "Pimelodidae",
        "url": "https://0.academia-photos.com/10090708/3530043/4144426/s200_maria_cristina.da_silva_cortinhas.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Sympterygia acuta",
        "Nomes Comuns": "emplastro, emplastro-bicudo",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A2b",
        "Classe": "Chondrichthyes",
        "Ordem": "Rajiformes",
        "Familia": "Rajidae",
        "url": "http://www.fishbase.se/images/species/Syacu_f0.jpg"
    }, {
        "Grupo": "Répteis",
        "Nome científico": "Apostolepis quirogai",
        "Nomes Comuns": "",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(iii)",
        "Classe": "Reptilia",
        "Ordem": "Squamata",
        "Familia": "Dipsadidae",
        "url": "http://www.scielo.br/img/revistas/paz/v45n16/a01fig03.jpg"
    }, {
        "Grupo": "Répteis",
        "Nome científico": "Caretta caretta",
        "Nomes Comuns": "tartaruga-cabeçuda",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A2abcd",
        "Classe": "Reptilia",
        "Ordem": "Testudines",
        "Familia": "Cheloniidae",
        "url": "http://www.unitedcreativity.org/wp-content/uploads/2013/04/Martin_caretta_2000x1339.jpg"
    }, {
        "Grupo": "Répteis",
        "Nome científico": "Contomastix vacariensis",
        "Nomes Comuns": "lagartinho-pintado",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(ii,iii)",
        "Classe": "Reptilia",
        "Ordem": "Squamata",
        "Familia": "Teiidae",
        "url": "http://www.reptarium.cz/content/photo_rd_02/Cnemidophorus-vacariensis-03000030089_01.jpg"
    }, {
        "Grupo": "Répteis",
        "Nome científico": "Lepidochelys olivacea",
        "Nomes Comuns": "tartaruga-oliva",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN A2abcde",
        "Classe": "Reptilia",
        "Ordem": "Testudines",
        "Familia": "Cheloniidae",
        "url": "http://www.tartarugasmarinhas.pt/sites/tartarugasmarinhas.pt/files/Olive%20Ridley%20(Lepidochelys%20olivacea)%20400L.jpg"
    }, {
        "Grupo": "Répteis",
        "Nome científico": "Liolaemus arambarensis",
        "Nomes Comuns": "lagartixa-de-dunas",
        "Categoria": "EN - Ameaçado - Em perigo",
        "Critérios": "EN B1ab(ii,iii)",
        "Classe": "Reptilia",
        "Ordem": "Squamata",
        "Familia": "Liolaemidae",
        "url": "http://www.reptarium.cz/content/photo_rd_05/Liolaemus-arambarensis-03000034256_01.jpg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Itapotihyla langsdorfii",
        "Nomes Comuns": "",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B2ab(iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Hylidae",
        "url": "http://calphotos.berkeley.edu/imgs/512x768/0000_0000/0208/0552.jpeg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Melanophryniscus cambaraensis",
        "Nomes Comuns": "sapinho-verde-de-barriga-vermelha",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(i,ii,iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Bufonidae",
        "url": "http://cdn2.arkive.org/media/D2/D25BDD05-81C9-4A79-9D3E-88739A206677/Presentation.Large/Brazilian-red-belly-toad-male-dorsal-view.jpg"
    }, {
        "Grupo": "Anfíbios",
        "Nome científico": "Scinax rizibilis",
        "Nomes Comuns": "",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(i,ii,iii)+2ab(i,ii,iii)",
        "Classe": "Amphibia",
        "Ordem": "Anura",
        "Familia": "Hylidae",
        "url": "http://calphotos.berkeley.edu/imgs/512x768/1111_1111/1111/3409.jpeg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Amazona pretrei",
        "Nomes Comuns": "charão",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A2a",
        "Classe": "Aves",
        "Ordem": "Psittaciformes",
        "Familia": "Psittacidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/d/d0/Amazona_pretrei_-Rio_Grande_do_Sul_-Brazil-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Anabacerthia amaurotis",
        "Nomes Comuns": "limpa-folha-miúdo",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Furnariidae",
        "url": "http://cdn2.arkive.org/media/94/945A5493-CC6D-4480-A042-FBD1722C1263/Presentation.Large/White-browed-foliage-gleaner-calling.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Anthus nattereri",
        "Nomes Comuns": "caminheiro-grande",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A2ce+3ce+4ce; B1ab(ii,iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Motacillidae",
        "url": "http://ibc.lynxeds.com/files/pictures/Ochre-breasted_Pipit1.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Aphantochroa cirrhochloris",
        "Nomes Comuns": "beija-flor-cinza",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(ii,iii)",
        "Classe": "Aves",
        "Ordem": "Apodiformes",
        "Familia": "Trochilidae",
        "url": "http://cdn2.brooklynmuseum.org/images/opencollection/objects/size3/64.98.219_PS4.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Asthenes hudsoni",
        "Nomes Comuns": "lenheiro-platino",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Furnariidae",
        "url": "http://ibc.lynxeds.com/files/pictures/IMG_9429.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Attila rufus",
        "Nomes Comuns": "capitão-de-saíra",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Tyrannidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/e/ee/Attila_rufus_-Reserva_Guainumbi,_Sao_Luis_do_Paraitinga,_Sao_Paulo,_Brasil-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Baryphthengus ruficapillus",
        "Nomes Comuns": "juruva",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)+2ab(iii)",
        "Classe": "Aves",
        "Ordem": "Coraciiformes",
        "Familia": "Momotidae",
        "url": "http://ibc.lynxeds.com/files/pictures/Juruva-verde_11.JPG"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Capsiempis flaveola",
        "Nomes Comuns": "marianinha-amarela",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Tyrannidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/7/7a/Capsiempis_flaveola_-Costa_Rica-8_(1).jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Cinclodes pabsti",
        "Nomes Comuns": "pedreiro",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A2c+3c+4c; C1",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Furnariidae",
        "url": "http://ibc.lynxeds.com/files/pictures/Cinclodes_pabsti_Esparaiado_05_02_2012_6.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Circus cinereus",
        "Nomes Comuns": "gavião-cinza",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C2a(i)",
        "Classe": "Aves",
        "Ordem": "Falconiformes",
        "Familia": "Accipitridae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/d/dd/Circus_cinereus_-Rio_Grande_do_Sul,_Brazil_-flying-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Clibanornis dendrocolaptoides",
        "Nomes Comuns": "cisqueiro",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(ii,iii); C1",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Furnariidae",
        "url": "https://farm4.staticflickr.com/3552/5846746402_d7f9d95176_m.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Cnemotriccus fuscatus fuscatus",
        "Nomes Comuns": "guaracavuçu",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(ii,iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Tyrannidae",
        "url": "http://www.mae-da-lua.org/photos/cnemotriccus_fuscatus_00.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Colonia colonus",
        "Nomes Comuns": "viuvinha",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Tyrannidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/e/ec/Colonia_colonus_-Parque_Nacional_do_Itatiaia,_Rio_de_Janeiro,_Brazil-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Contopus cinereus",
        "Nomes Comuns": "papa-moscas-cinzento",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B2ab(ii,iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Tyrannidae",
        "url": "http://m3.i.pbase.com/o2/93/611193/1/107213883.TZbn1SBV.20081130_0520_02.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Culicivora caudacuta",
        "Nomes Comuns": "papa-moscas-do-campo",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A2ce+3ce+4ce; B1ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Tyrannidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/7/71/Culicivora_caudacuta.png"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Diomedea epomophora",
        "Nomes Comuns": "albatroz-real-do-sul",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D2",
        "Classe": "Aves",
        "Ordem": "Procellariiformes",
        "Familia": "Diomedeidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/d/d2/Diomedea_epomophora_-_SE_Tasmania_crop.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Dromococcyx pavoninus",
        "Nomes Comuns": "peixe-frito-pavonino",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Aves",
        "Ordem": "Cuculiformes",
        "Familia": "Cuculidae",
        "url": "http://focusingonwildlife.com/news/wp-content/uploads/2012/08/Dromococcyx-pavoninus-Jagaru%C3%ADna-05-06-12-IMG_16648.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Gallinago undulata",
        "Nomes Comuns": "narcejão",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A2ce+3ce+4ce; B1ab(ii,iii)",
        "Classe": "Aves",
        "Ordem": "Charadriiformes",
        "Familia": "Scolopacidae",
        "url": "http://ibc.lynxeds.com/files/pictures/giantsnipe-epv0017.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Mackenziaena severa",
        "Nomes Comuns": "borralhara",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Formicariidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/7/7f/Mackenziaena_severa_-Piraju,_Sao_Paulo,_Brazil-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Manacus manacus",
        "Nomes Comuns": "rendeira",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Pipridae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/c/c1/Manacus_manacus_male_1.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Myiarchus tyrannulus",
        "Nomes Comuns": "maria-cavaleira-de-rabo-ferrugem",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Tyrannidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/c/ca/Myiarchus_tyrannulus_-Piraju,_Sao_Paulo,_Brazil-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Myrmotherula unicolor",
        "Nomes Comuns": "choquinha-cinzenta",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(ii,iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Thamnophilidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/1/1c/Myrmotherula_unicolor_-Vale_do_Ribeira,_Registro,_Sao_Paulo,_Brazil_-male-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Parabuteo leucorrhous",
        "Nomes Comuns": "gavião-de-sobre-branco",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C2a(i)",
        "Classe": "Aves",
        "Ordem": "Falconiformes",
        "Familia": "Accipitridae",
        "url": "http://www.avesderapinabrasil.com/images/especies/P_leucorrhous.JPG"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Patagioenas plumbea",
        "Nomes Comuns": "pomba-amargosa",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Aves",
        "Ordem": "Columbiformes",
        "Familia": "Columbidae",
        "url": "http://www.discoverlife.org/IM/I_LHT/0031/320/Patagioenas_plumbea,_Plumbeous_Pigeon,I_LHT3164.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Philydor atricapillus",
        "Nomes Comuns": "limpa-folha-coroado",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Furnariidae",
        "url": "http://i1.treknature.com/photos/15097/limpa-folha-coroado.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Philydor lichtensteini",
        "Nomes Comuns": "limpa-folha-ocráceo",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B2ab(ii,iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Furnariidae",
        "url": "http://www.faunaparaguay.com/images/Philydor%20lichtensteini%20tirol%20aug05.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Phylloscartes eximius",
        "Nomes Comuns": "barbudinho",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B2ab(ii,iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Rhynchocyclidae",
        "url": "http://www.ecoregistros.org/site/images/albumes/19/6978/Phylloscartes-eximius.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Phylloscartes kronei",
        "Nomes Comuns": "maria-da-restinga",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(ii,iii)+2ab(ii,iii); C2a(i)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Rhynchocyclidae",
        "url": "http://ibc.lynxeds.com/files/pictures/kronei_IBC_1.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Piprites chloris",
        "Nomes Comuns": "papinho-amarelo",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Pipridae",
        "url": "http://ibc.lynxeds.com/files/imagecache/photo_940/pictures/Piprites_chloris_CA.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Procellaria aequinoctialis",
        "Nomes Comuns": "pardela-preta",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A4bcde",
        "Classe": "Aves",
        "Ordem": "Procellariiformes",
        "Familia": "Procellariidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/a/a3/Procellaria_aequinoctialis_1_-_SE_Tasmania.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Procellaria conspicillata",
        "Nomes Comuns": "pardela-de-óculos",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D2",
        "Classe": "Aves",
        "Ordem": "Procellariiformes",
        "Familia": "Procellariidae",
        "url": "http://cdn1.arkive.org/media/7A/7AC0D027-ADB1-4C6C-BC81-B558708A5DF0/Presentation.Large/Spectacled-petrel-in-flight-above-the-sea.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Procnias nudicollis",
        "Nomes Comuns": "araponga, ferreiro",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(i,iii); C2a(ii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Cotingidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/d/d6/Procnias_nudicollis.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Pseudastur polionotus",
        "Nomes Comuns": "gavião-pombo-branco",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C2a(i)",
        "Classe": "Aves",
        "Ordem": "Falconiformes",
        "Familia": "Accipitridae",
        "url": "http://www.avesderapinabrasil.com/images/especies/l_polionotus4.JPG"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Pseudoseisura lophotes",
        "Nomes Comuns": "coperete",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Furnariidae",
        "url": "http://www.ramonmollerjensen.com/data/media/82/568-Cacholote-Castao-Pseudoseisura-lophotes-4-800-VGB-31-07-08.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Psilorhamphus guttatus",
        "Nomes Comuns": "macuquinho-pintado",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)+2ab(iii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Rhinocryptidae",
        "url": "http://ibc.lynxeds.com/files/pictures/Psilorhamphus_guttatus_SP-SaoJosedos_Campos-.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Pteroglossus bailloni",
        "Nomes Comuns": "araçari-banana",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D1",
        "Classe": "Aves",
        "Ordem": "Piciformes",
        "Familia": "Ramphastidae",
        "url": "http://www.juanjculasso.ronjaleader.net/photos/Pteroglossus_bailloni-2742.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Pyroderus scutatus",
        "Nomes Comuns": "pavó",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C2a(i)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Cotingidae",
        "url": "http://ibc.lynxeds.com/files/pictures/pereira_292.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Saltator fuliginosus",
        "Nomes Comuns": "bico-de-pimenta",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii); C1",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Emberizidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/1/1e/Saltator_fuliginosus_-Pomerode_Zoo,_Santa_Catarina,_Brazil_-adult_male-8b.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Sporophila bouvreuil",
        "Nomes Comuns": "caboclinho, caboclinho-branco, caboclinho-coroado",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C1",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Emberizidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/f/f6/Sporophila_bouvreuil_-Mogi_das_Cruzes,_Sao_Paulo,_Brasil-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Sporophila hypoxantha",
        "Nomes Comuns": "caboclinho-de barriga-vermelha",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C1",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Emberizidae",
        "url": "http://adrianrupp.com/wp-content/uploads/2013/05/Sporophila-hypoxantha3.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Sporophila palustris",
        "Nomes Comuns": "caboclinho-de-papo-branco",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C2a(i)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Emberizidae",
        "url": "http://ibc.lynxeds.com/files/pictures/Sporophila_palustris_Argentina-Corriente-EsterosDelIbera-Ruta40.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Sporophila ruficollis",
        "Nomes Comuns": "caboclinho-de-papo-escuro",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1b(iii)c(ii)",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Emberizidae",
        "url": "http://freebirds.com.ar/images/mariano_costa/wps/wp_sporoph_rufic_1280x853.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Thalasseus acuflavidus",
        "Nomes Comuns": "",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A2c",
        "Classe": "Aves",
        "Ordem": "Charadriiformes",
        "Familia": "Sternidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/3/3f/Cabot's_Tern_(Thalasseus_acuflavidus)_RWD2.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Tinamus solitarius",
        "Nomes Comuns": "macuco",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(i,ii,iii,v)",
        "Classe": "Aves",
        "Ordem": "Tinamiformes",
        "Familia": "Tinamidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/b/b7/Tinamus_solitarius_-Parque_Estadual_da_Serra_da_Cantareira,_Sao_Paulo,_Brasil-8.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Xanthopsar flavus",
        "Nomes Comuns": "veste-amarela",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C1",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Icteridae",
        "url": "http://adrianrupp.com/wp-content/uploads/2013/05/Xanthopsar-flavus.jpg"
    }, {
        "Grupo": "Aves",
        "Nome científico": "Xolmis dominicanus",
        "Nomes Comuns": "noivinha-de-rabo-preto, tobianinha",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C1",
        "Classe": "Aves",
        "Ordem": "Passeriformes",
        "Familia": "Tyrannidae",
        "url": "http://ibc.lynxeds.com/files/pictures/IMG_2909.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Actinote catarina",
        "Nomes Comuns": "",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Nymphalidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/2/26/Actinote_pellenea.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla grisella",
        "Nomes Comuns": "caranguejo de rio, caranguejo-de-água-doce",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://fc09.deviantart.net/fs70/i/2014/116/e/d/aegla_grisella_by_x_alex-d7g51b9.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla inconspicua",
        "Nomes Comuns": "caranguejo-de-água-doce, caranguejo-de-rio",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://tolweb.org/tree/ToLimages/inconspicua1.300a.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla itacolomiensis",
        "Nomes Comuns": "caranguejo-de-água-doce, caranguejo-de-rio",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://tolweb.org/tree/ToLimages/itacolomiensis1.300a.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla serrana",
        "Nomes Comuns": "caranguejo-de-rio",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://tolweb.org/tree/ToLimages/grisella1.300a.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Aegla spinipalma",
        "Nomes Comuns": "caranguejo-de-rio",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii,iv)",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Aeglidae",
        "url": "http://tolweb.org/tree/ToLimages/spinipalma1.300a.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Corvoheteromeyenia australis",
        "Nomes Comuns": "",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D2",
        "Classe": "Demospongiae",
        "Ordem": "Haplosclerida",
        "Familia": "Spongillidae",
        "url": "http://www.scielo.br/img/revistas/rbzool/v20n2/n2a01f8.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Corvomeyenia epilithosa",
        "Nomes Comuns": "",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D2",
        "Classe": "Demospongiae",
        "Ordem": "Poecilosclerida",
        "Familia": "Metaniidae",
        "url": "http://www.scielo.br/img/revistas/rbzool/v22n4/a07fig02.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Drulia browni",
        "Nomes Comuns": "cupim-d'água",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D2",
        "Classe": "Demospongiae",
        "Ordem": "Poecilosclerida",
        "Familia": "Metaniidae",
        "url": "http://www.biodiversidade.rs.gov.br/arquivos/1165255339Drulia_browni_Bowerbank_1863.JPG"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Euryades corethrus",
        "Nomes Comuns": "",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B2ab(iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Papilionidae",
        "url": "http://www.theinsectcollector.com/acatalog/E_corethrus_M.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Heteromeyenia insignis",
        "Nomes Comuns": "",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D2",
        "Classe": "Demospongiae",
        "Ordem": "Haplosclerida",
        "Familia": "Spongillidae",
        "url": "http://www.scielo.br/img/revistas/rbzool/v24n3/a13fig13.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Melipona obscurior",
        "Nomes Comuns": "manduri",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii,v)",
        "Classe": "Insecta",
        "Ordem": "Hymenoptera",
        "Familia": "Apidae",
        "url": "http://www.rufford.org/files/Melipona%20obscurior%20mounted.JPG"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Neohelice granulata",
        "Nomes Comuns": "caranguejo-de-água-doce, catanhão, gatanhão",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A2ac+3c",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Grapsidae",
        "url": "http://fc02.deviantart.net/fs70/f/2013/363/3/1/neohelice_granulata___up_by_pabloyungblut-d6zwsz7.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Pampasatyrus quies",
        "Nomes Comuns": "",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Nymphalidae",
        "url": "http://www.butterfliesofamerica.com/Lamas/pampasatyrus0024.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Pampasatyrus reticulata",
        "Nomes Comuns": "",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Nymphalidae",
        "url": "http://v2.boldsystems.org/connect/REST/getBarcodeRepForSpecies.php?taxid=304313&iwidth=400"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Racekiela sheilae",
        "Nomes Comuns": "",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D2",
        "Classe": "Demospongiae",
        "Ordem": "Haplosclerida",
        "Familia": "Spongillidae",
        "url": "http://www.scielo.br/img/revistas/isz/v97n2/05f32.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Symmachia arion",
        "Nomes Comuns": "",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(i,iii)",
        "Classe": "Insecta",
        "Ordem": "Lepidoptera",
        "Familia": "Riodinidae",
        "url": "http://www.butterfliesofamerica.com/Lamas/symmachia0071.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Uca uruguayensis",
        "Nomes Comuns": "caranguejo-violinista, chama-maré",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A2ac+3c",
        "Classe": "Malacostraca",
        "Ordem": "Decapoda",
        "Familia": "Ocypodidae",
        "url": "http://www.fiddlercrab.info/photos/U_uruguayensis01.jpg"
    }, {
        "Grupo": "Invertebrados",
        "Nome científico": "Uruguaya corallioides",
        "Nomes Comuns": "olhos de pedra ou cabeleira de pedra",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D2",
        "Classe": "Demospongiae",
        "Ordem": "Hadromerida",
        "Familia": "Potamolepidae",
        "url": "https://lh5.googleusercontent.com/-HkvyeWgC10I/TdRYVgLWjFI/AAAAAAAAABE/TlPkHrsNam4/s1600/URUGUAYA%2BCORALOIDES.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Agouti paca",
        "Nomes Comuns": "paca",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C1",
        "Classe": "Mammalia",
        "Ordem": "Rodentia",
        "Familia": "Cuniculidae",
        "url": "http://atlasanatomiaamazonia.uab.cat/imagenes/taxonomia/19/0.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Alouatta guariba clamitans",
        "Nomes Comuns": "bugio-ruivo",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A4acde",
        "Classe": "Mammalia",
        "Ordem": "Primates",
        "Familia": "Atelidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/b/b0/Alouatta_fusca_clamitans.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Cavia magna",
        "Nomes Comuns": "Preá",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(ii,iii)",
        "Classe": "Mammalia",
        "Ordem": "Rodentia",
        "Familia": "Caviidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/4/45/Cavia_magna_(Wroclaw_zoo).JPG"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Chironectes minimus",
        "Nomes Comuns": "cuíca-d'água, cuíca-listrada",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A3c",
        "Classe": "Mammalia",
        "Ordem": "Didelphimorphia",
        "Familia": "Didelphidae",
        "url": "http://cdn1.arkive.org/media/25/2507AEBA-00CF-48C7-97FB-0C88E115F0ED/Presentation.Large/Water-opossum-in-a-stream.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Dasyprocta azarae",
        "Nomes Comuns": "cutia",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C1",
        "Classe": "Mammalia",
        "Ordem": "Rodentia",
        "Familia": "Dasyproctidae",
        "url": "https://c2.staticflickr.com/8/7001/6432230243_45b140ffd0.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Eira barbara",
        "Nomes Comuns": "irara, papa-mel",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C1",
        "Classe": "Mammalia",
        "Ordem": "Carnivora",
        "Familia": "Mustelidae",
        "url": "http://focusingonwildlife.com/news/wp-content/uploads/2013/08/Irara.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Eubalaena australis",
        "Nomes Comuns": "baleia-franca, baleia-franca-austral, baleia-franca-do-sul",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A1abcd",
        "Classe": "Mammalia",
        "Ordem": "Cetacea",
        "Familia": "Balaenidae",
        "url": "http://www.biodiversityexplorer.org/mammals/cetacea/images/5988973520_e25b65e156_658w.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Leopardus geoffroyi",
        "Nomes Comuns": "gato-do-mato-grande",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C1",
        "Classe": "Mammalia",
        "Ordem": "Carnivora",
        "Familia": "Felidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/f/f9/Leopardus_geoffroyi-2.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Leopardus pardalis",
        "Nomes Comuns": "jaguatirica",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C2a(i)",
        "Classe": "Mammalia",
        "Ordem": "Carnivora",
        "Familia": "Felidae",
        "url": "http://images.fineartamerica.com/images-medium-large/2-ocelot-leopardus-pardalis-standing-pete-oxford.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Leopardus tigrinus",
        "Nomes Comuns": "gato-do-mato-pequeno",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C1",
        "Classe": "Mammalia",
        "Ordem": "Carnivora",
        "Familia": "Felidae",
        "url": "http://cdn1.arkive.org/media/3E/3EBB5FF0-6674-45A1-82B1-8EECEFD9258D/Presentation.Large/Oncilla-resting-in-a-tree.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Leopardus wiedii",
        "Nomes Comuns": "gato-maracajá",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C1",
        "Classe": "Mammalia",
        "Ordem": "Carnivora",
        "Familia": "Felidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/3/32/Margaykat_Leopardus_wiedii.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Marmosa paraguayana",
        "Nomes Comuns": "cuíca, guaiaquica-cinza",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(i,iii)",
        "Classe": "Mammalia",
        "Ordem": "Didelphimorphia",
        "Familia": "Didelphidae",
        "url": "http://www.faunaparaguay.com/images/Micoureus%20paraguayanus%20proc%206%20jun%2008%20sylvia%20qu%20lateral.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Nasua nasua",
        "Nomes Comuns": "quati",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C1",
        "Classe": "Mammalia",
        "Ordem": "Carnivora",
        "Familia": "Procyonidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/3/3d/Nasua_nasua_climbing_tree.JPG"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Physeter macrocephalus",
        "Nomes Comuns": "Cachalote",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A1d",
        "Classe": "Mammalia",
        "Ordem": "Cetacea",
        "Familia": "Physeteridae",
        "url": "http://safonov.35photo.ru/photos/20130126/472020.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Puma yagouaroundi",
        "Nomes Comuns": "gato-mourisco, jaguarundi",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C1",
        "Classe": "Mammalia",
        "Ordem": "Carnivora",
        "Familia": "Felidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/5/56/Puma_yaguarondi.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Tamandua tetradactyla",
        "Nomes Comuns": "tamanduá de colete, tamanduá-mirim",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU C1",
        "Classe": "Mammalia",
        "Ordem": "Xenarthra",
        "Familia": "Myrmecophagidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/3/3e/Tamandua_tetradactyla_qtl1.jpg"
    }, {
        "Grupo": "Mamíferos",
        "Nome científico": "Tursiops truncatus",
        "Nomes Comuns": "Boto, Boto-da-tainha, Golfinho-fliper, Golfinho-nariz-de-garrafa",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D1",
        "Classe": "Mammalia",
        "Ordem": "Cetacea",
        "Familia": "Delphinidae",
        "url": "http://www.newswise.com/images/uploads/2007/01/22/fullsize/BND_CP.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Carcharhinus longimanus",
        "Nomes Comuns": "tubarão galha-branca oceânico, tubarão-estrangeiro",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A4bcd",
        "Classe": "Chondrichthyes",
        "Ordem": "Carcharhiniformes",
        "Familia": "Carcharhinidae",
        "url": "http://cmsdata.iucn.org/img/original/oceanic_white_tip_3_carcharhinus_longimanus_simon_rogerson.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Crenicichla empheres",
        "Nomes Comuns": "joana, Mixola",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(ii,iii,iv)",
        "Classe": "Osteichthyes",
        "Ordem": "PERCIFORMES",
        "Familia": "CICHLIDAE",
        "url": "http://www.scielo.br/img/revistas/ni/v5n4/a04fig07.gif"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Cynopoecilus fulgens",
        "Nomes Comuns": "Peixe anual",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D2",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://fishbase.sinica.edu.tw/images/species/cymel_u0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Cynopoecilus intimus",
        "Nomes Comuns": "Peixe-anual",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D2",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://fishbase.sinica.edu.tw/images/species/cymel_u0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Cynopoecilus multipapillatus",
        "Nomes Comuns": "Peixe-anual",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D2",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://www.itrainsfishes.net/content/species/cynopoe_multipapillatus_gr0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Cynopoecilus nigrovittatus",
        "Nomes Comuns": "peixe-anual",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU D2",
        "Classe": "Osteichthyes",
        "Ordem": "Cyprinodontiformes",
        "Familia": "Rivulidae",
        "url": "http://fishbase.sinica.edu.tw/images/thumbnails/jpg/tn_cymel_u0.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Lopholatilus villarii",
        "Nomes Comuns": "peixe-batata",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A2bd",
        "Classe": "Osteichthyes",
        "Ordem": "PERCIFORMES",
        "Familia": "Malacanthidae",
        "url": "http://www.fishbase.us/images/thumbnails/jpg/tn_Lovil_u2.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Pogonopoma obscurum",
        "Nomes Comuns": "cascudo-preto",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Siluriformes",
        "Familia": "LORICARIIDAE",
        "url": "http://www.auburn.edu/academic/science_math/res_area/loricariid/fish_key/Pogwerth/obscurum.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Prionace glauca",
        "Nomes Comuns": "cação-azul, mole-mole, tubarão-azul",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A2bd",
        "Classe": "Chondrichthyes",
        "Ordem": "Carcharhiniformes",
        "Familia": "Carcharhinidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/e/ea/Prionace_glauca_1.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Pseudopercis semifasciata",
        "Nomes Comuns": "Chanchito (UR), Namorado (BR), Salmón del Mar (AR)",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A2bd",
        "Classe": "Osteichthyes",
        "Ordem": "PERCIFORMES",
        "Familia": "Pinguipedidae",
        "url": "http://www.fishbase.us/images/thumbnails/jpg/tn_Pssem_u1.jpg"
    }, {
        "Grupo": "Peixes",
        "Nome científico": "Salminus brasiliensis",
        "Nomes Comuns": "dourado",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A4c; B2ab(ii,iii)",
        "Classe": "Osteichthyes",
        "Ordem": "Characiformes",
        "Familia": "Characidae",
        "url": "http://www.aquahobby.com/gallery/characins/img/Salminus_brasiliensis_1.jpg"
    }, {
        "Grupo": "Répteis",
        "Nome científico": "Atractus thalesdelemai",
        "Nomes Comuns": "",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii,iv)",
        "Classe": "Reptilia",
        "Ordem": "Squamata",
        "Familia": "Dipsadidae",
        "url": "http://www.amphibia-reptilia.com/taxonomy/Images/Wuster/Atractuspantostictus2.JPG"
    }, {
        "Grupo": "Répteis",
        "Nome científico": "Bothrops jararacussu",
        "Nomes Comuns": "jararacuçu, surucucu-dourada, surucucu-tapete, urutu-dourado",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B2ab(i,ii,iii)",
        "Classe": "Reptilia",
        "Ordem": "Squamata",
        "Familia": "Viperidae",
        "url": "http://static.panoramio.com/photos/original/9179345.jpg"
    }, {
        "Grupo": "Répteis",
        "Nome científico": "Chelonia mydas",
        "Nomes Comuns": "tartaruga-verde",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU A2ab",
        "Classe": "Reptilia",
        "Ordem": "Testudines",
        "Familia": "Cheloniidae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/6/6e/Chelonia_mydas_is_going_for_the_air_edit.jpg"
    }, {
        "Grupo": "Répteis",
        "Nome científico": "Hydrodynastes gigas",
        "Nomes Comuns": "boipevaçu",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(iii)",
        "Classe": "Reptilia",
        "Ordem": "Squamata",
        "Familia": "Colubridae",
        "url": "http://upload.wikimedia.org/wikipedia/commons/c/cf/Hydrodynastes_gigas,_male.jpg"
    }, {
        "Grupo": "Répteis",
        "Nome científico": "Liolaemus occipitalis",
        "Nomes Comuns": "lagartixa-da-praia",
        "Categoria": "VU - Ameaçado - Vulnerável",
        "Critérios": "VU B1ab(ii,iii)",
        "Classe": "Reptilia",
        "Ordem": "Squamata",
        "Familia": "Liolaemidae",
        "url": "http://www.reptarium.cz/content/photo_rd_03/Liolaemus-occipitalis-03000030834_01.jpg"
    }];

    $scope.filteredSpecies = $scope.species;
});
