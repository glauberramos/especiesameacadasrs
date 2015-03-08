// ############### get images on google images for animal species
// $(species).each(function(index, element) {
// 	google.load('search', '1');
// 	var imageSearch;

// 	var searchComplete = function() {
// 		if (imageSearch.results && imageSearch.results.length > 0) {
// 	    	var url = imageSearch.results[0].unescapedUrl;

// 	    	console.log(imageSearch.results[0]);
// 	    	// $('#specie' + index).attr('src', url);

// 	    	element['url'] = url;
// 	    	element['source'] = imageSearch.results[0].originalContextUrl;
// 		}
// 	}

// 	var onLoad = function() {	
// 		imageSearch = new google.search.ImageSearch();
// 	    imageSearch.setSearchCompleteCallback(this, searchComplete, null);

// 	    imageSearch.execute(element["Nome científico"]);
// 	    google.search.Search.getBranding('branding');
// 	};

// 	google.setOnLoadCallback(onLoad);
// });

// Parse.initialize("LEIS9Ae6fMWOVoFxihLmEi0moBfGYb6CsrtYyRZn", "7SEvsIu2sbTDVJU8VAGaBuaShzdTBDkHt80sSvD1");

// var Specie = Parse.Object.extend("specie");
// var query = new Parse.Query(Specie);


// $(species).each(function(index, element) {
// 	var specie = new Specie();
// 	specie.set('scientificName', element['Nome científico']);
// 	specie.set('group', element['Grupo']);
// 	specie.set('commonName', element['Nomes Comuns']);
// 	specie.set('category', element['Categoria']);
// 	specie.set('criteria', element['Critérios']);
// 	specie.set('class', element['Classe']);
// 	specie.set('order', element['Ordem']);
// 	specie.set('family', element['Familia']);
// 	specie.set('url', element['url']);
// 	specie.set('source', element['source']);
// 	specie.save();
// });

// document.addEventListener("DOMContentLoaded", function(event) { 
// 	$(cactus).each(function(index, element) {
// 		var specie = $('<div class="specie"><h1>' + 
// 			element[0] + '</h1>' +
// 			'<img id="specie' + index + '" /></div>');
// 		$('#species').append(specie);
// 	});
// });

// $(cactus).each(function(index, element) {
// 	google.load('search', '1');
// 	var imageSearch;

// 	var searchComplete = function() {
// 		if (imageSearch.results && imageSearch.results.length > 0) {
// 	    	var url = imageSearch.results[0].unescapedUrl;

// 	    	console.log(imageSearch.results[0]);
// 	    	$('#specie' + index).attr('src', url);

// 	    	element['url'] = url;
// 		}
// 	}

// 	var onLoad = function() {	
// 		imageSearch = new google.search.ImageSearch();
// 	    imageSearch.setSearchCompleteCallback(this, searchComplete, null);

// 	    imageSearch.execute(element[0]);
// 	    google.search.Search.getBranding('branding');
// 	};

// 	google.setOnLoadCallback(onLoad);
// });