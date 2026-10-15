function randomizr(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = ( d + Math.random() * 16 ) % 16 | 0;
        d = Math.floor( d / 16 );
        return (c == 'x' ? r : ( r & 0x7 | 0x8 ) ).toString(16);
    });
    return uuid;
};

function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

// READCOOKIE IS IN HEADER

function eraseCookie(name) {
	createCookie(name,"",-1);
}


var $html = $('html'),
	$window = $(window),
	$layers = $('.layers'),
	map = [],
	strange,
	mother;

$window.load(function(){
	if (

		( window.navigator.platform === 'Mac68K') ||
		( window.navigator.platform === 'MacPPC') ||
		( window.navigator.platform === 'MacIntel')
	){
		$('html').addClass('cmd');
	}
});


var shadeScroller;

var app = angular.module('conjecture', [])

.controller('MainCtrl', function($window, $scope, $http, $interval, $timeout) {

	$timeout(function(){

		$html.addClass('angularOnline');
	}, 1000)


	// 	                                                                        
	// 	88b           d88   ,ad8888ba,   88888888ba,   88888888888 88           
	// 	888b         d888  d8"'    `"8b  88      `"8b  88          88           
	// 	88`8b       d8'88 d8'        `8b 88        `8b 88          88           
	// 	88 `8b     d8' 88 88          88 88         88 88aaaaa     88           
	// 	88  `8b   d8'  88 88          88 88         88 88"""""     88           
	// 	88   `8b d8'   88 Y8,        ,8P 88         8P 88          88           
	// 	88    `888'    88  Y8a.    .a8P  88      .a8P  88          88           
	// 	88     `8'     88   `"Y8888Y"'   88888888Y"'   88888888888 88888888888  
	// 	                                                                        
	// 	                                                                        

	// LIVE
	strange = $scope.strange = {
		from: [
			{
				content: ''
			}
		],
		to: [
			{
				id: randomizr(),
				loading: false,
				selected: false,
				hovered: false,
				composite: '',
				content: []
			}
		]
	}
	mother = $scope.mother = {
		from: [
			{
				content: ''
			}
		],
		to: [
			{
				id: randomizr(),
				loading: false,
				selected: false,
				hovered: false,
				composite: '',
				content: []
			}
		]
	}


	// 	                                                                               
	// 	888888888888 ,ad8888ba,   888b      88   ,ad8888ba,  88        88 88888888888  
	// 	     88     d8"'    `"8b  8888b     88  d8"'    `"8b 88        88 88           
	// 	     88    d8'        `8b 88 `8b    88 d8'           88        88 88           
	// 	     88    88          88 88  `8b   88 88            88        88 88aaaaa      
	// 	     88    88          88 88   `8b  88 88      88888 88        88 88"""""      
	// 	     88    Y8,        ,8P 88    `8b 88 Y8,        88 88        88 88           
	// 	     88     Y8a.    .a8P  88     `8888  Y8a.    .a88 Y8a.    .a8P 88           
	// 	     88      `"Y8888Y"'   88      `888   `"Y88888P"   `"Y8888Y"'  88888888888  
	// 	                                                                               
	// 	                                                                               

	$scope.tongueAvailable = {
		'it' :{ display: 'Italian',    translate: 'it', thesaurus:'it_IT' },
		'fr' :{ display: 'French',     translate: 'fr', thesaurus:'fr_FR' },
		'de' :{ display: 'German',     translate: 'de', thesaurus:'de_DE' },
		'en' :{ display: 'English',    translate: 'en', thesaurus:'en_US' },
		'el' :{ display: 'Greek',      translate: 'el', thesaurus:'el_GR' },
		'es' :{ display: 'Spanish',    translate: 'es', thesaurus:'es_ES' },
		'no' :{ display: 'Norwegian',  translate: 'no', thesaurus:'no_NO' },
		'pt' :{ display: 'Portuguese', translate: 'pt', thesaurus:'pt_PT' },
		'ro' :{ display: 'Romanian',   translate: 'ro', thesaurus:'ro_RO' },
		'ru' :{ display: 'Russian',    translate: 'ru', thesaurus:'ru_RU' },
		'sk' :{ display: 'Slovakian',  translate: 'sk', thesaurus:'sk_SK' },
	}

	$scope.tongueUser = {
		strange: 'de',
		mother: 'en'
	};

	if ( readCookie('tongue_strange') )
		$scope.tongueUser.strange = readCookie('tongue_strange')

	if ( readCookie('tongue_mother') )
		$scope.tongueUser.mother = readCookie('tongue_mother')

	$scope.setTongue = function(direction, tongue){
		$scope.tongueUser[direction] = tongue;
		createCookie('tongue_' + direction, tongue);
	}

	$scope.setup = false;

	$scope.init = function(){
		$timeout(function(){
			$scope.setup = true;
			$('.strange_from').find('.block').first().find('textarea').focus()
		}, 400)
	}

	$scope.tooMuchText = false;
 
	

	// 	                                                     
	// 	  ,ad8888ba,   ,ad8888ba,   88888888ba 8b        d8  
	// 	 d8"'    `"8b d8"'    `"8b  88      "8b Y8,    ,8P   
	// 	d8'          d8'        `8b 88      ,8P  Y8,  ,8P    
	// 	88           88          88 88aaaaaa8P'   "8aa8"     
	// 	88           88          88 88""""""'      `88'      
	// 	Y8,          Y8,        ,8P 88              88       
	// 	 Y8a.    .a8P Y8a.    .a8P  88              88       
	// 	  `"Y8888Y"'   `"Y8888Y"'   88              88       
	// 	                                                     
	// 	                                                     

	$scope.getTextToCopyBlock = function(block){
		var returnal = '';
		for (var i = 0; i < block.content.length; i++){
			returnal += block.content[i].display + ' ';
		}
		return returnal;
	}

	$scope.getTextToCopyWord = function(word){		
		return word;
	}

	$scope.actualBlockFocused = function($event, block, isActualBlock){
		block.selected = true;

		for (var i = 0; i < strange.to.length; i++){
			if ( strange.to[i].id !== block.id )
				strange.to[i].selected = false;
		}

		for (var i = 0; i < mother.to.length; i++){
			if ( mother.to[i].id !== block.id )
				mother.to[i].selected = false;
		}

		var selection = window.getSelection(),
			range = document.createRange(),
			text;

		if (isActualBlock)
			text = $($event.target).children()[0];
		else
			text = $($event.target).find('.actualBlock').children()[0];

        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);

	}

	// 	                                                                                                                     
	// 	888888888888 88888888ba         db        888b      88  ad88888ba  88                 db   888888888888 88888888888  
	// 	     88      88      "8b       d88b       8888b     88 d8"     "8b 88                d88b       88      88           
	// 	     88      88      ,8P      d8'`8b      88 `8b    88 Y8,         88               d8'`8b      88      88           
	// 	     88      88aaaaaa8P'     d8'  `8b     88  `8b   88 `Y8aaaaa,   88              d8'  `8b     88      88aaaaa      
	// 	     88      88""""88'      d8YaaaaY8b    88   `8b  88   `"""""8b, 88             d8YaaaaY8b    88      88"""""      
	// 	     88      88    `8b     d8""""""""8b   88    `8b 88         `8b 88            d8""""""""8b   88      88           
	// 	     88      88     `8b   d8'        `8b  88     `8888 Y8a     a8P 88           d8'        `8b  88      88           
	// 	     88      88      `8b d8'          `8b 88      `888  "Y88888P"  88888888888 d8'          `8b 88      88888888888  
	// 	                                                                                                                     
	// 	                                                                                                                     

	$scope.translate = function(query, target, language){

		if (!query || query.trim() === '') return;

		var other = (language === 'strange') ? 'mother' : 'strange';
		var direction =
			$scope.tongueAvailable[ $scope.tongueUser[language] ].translate +
			'|' +
			$scope.tongueAvailable[ $scope.tongueUser[other] ].translate;

		var block = $scope[language].to[target];
		if (!block) return;

		block.loading = true;

		function fail(){
			block.loading = false;
			block.composite = '(translation failed — try again)';
			block.content = [];
			$scope.$evalAsync();
		}

		$.ajax({
			type: 'GET',
			url: 'https://api.mymemory.translated.net/get',
			data: { q: query, langpair: direction },
			dataType: 'json'
		}).done( function(response){

			// MyMemory reports quota / errors inside a 200 body
			if (
				!response || !response.responseData ||
				String(response.responseStatus) !== '200' ||
				response.quotaFinished
			){
				return fail();
			}

			var incoming = response.responseData.translatedText.split(/\s+/).filter(Boolean),
				composite = '';

			block.content = [];

			for (var i = 0; i < incoming.length; i++){
				composite += incoming[i] + ' ';

				block.content.push({
					selected: false,
					display: incoming[i],
					fetched: false,
					values: [
						{
							word: incoming[i],
							chosen: true
						}
					]
				});
			}

			block.loading = false;
			block.composite = composite;

			$scope.$apply();

			$scope.equalizer(language, target);
		}).fail( fail );
	}

	// 	                                                                                                                   
	// 	888888888888 88        88 88888888888 ad88888ba        db       88        88 88888888ba  88        88  ad88888ba   
	// 	     88      88        88 88         d8"     "8b      d88b      88        88 88      "8b 88        88 d8"     "8b  
	// 	     88      88        88 88         Y8,             d8'`8b     88        88 88      ,8P 88        88 Y8,          
	// 	     88      88aaaaaaaa88 88aaaaa    `Y8aaaaa,      d8'  `8b    88        88 88aaaaaa8P' 88        88 `Y8aaaaa,    
	// 	     88      88""""""""88 88"""""      `"""""8b,   d8YaaaaY8b   88        88 88""""88'   88        88   `"""""8b,  
	// 	     88      88        88 88                 `8b  d8""""""""8b  88        88 88    `8b   88        88         `8b  
	// 	     88      88        88 88         Y8a     a8P d8'        `8b Y8a.    .a8P 88     `8b  Y8a.    .a8P Y8a     a8P  
	// 	     88      88        88 88888888888 "Y88888P" d8'          `8b `"Y8888Y"'  88      `8b  `"Y8888Y"'   "Y88888P"   
	// 	                                                                                                                   
	// 	                                                                                                                                                                                                                

	$scope.synonymous = function(query, word, target, language){

		var theLang = (language === 'strange') ? 'mother' : 'strange';

		var block = $scope[language].to[target];
		var entry = block && block.content[word];

		// one lookup per word; mouseover fires constantly
		if (!entry || entry.fetched || entry.fetching) return;

		// strip punctuation attached to the token before looking it up
		var clean = query.replace(/[!@#$%^&*()_+=\[\]{}|\\<>,.?\/~`:;"“”„«»¿¡]+/g, '').trim();
		if (clean === '') return;

		entry.fetching = true;

		$.ajax({
			type: 'GET',
			dataType: 'json',
			timeout: 8000,
			url: 'api/synonyms',
			data: {
				word: clean,
				language: $scope.tongueAvailable[ $scope.tongueUser[ theLang ] ].thesaurus
			}
		}).done( function(response){

			entry.fetching = false;
			entry.fetched = true;

			var seen = {};
			seen[ entry.display ] = true;

			var lists = (response && response.response) || [];

			for (var k = 0; k < lists.length; k++){
				var raw = lists[k] && lists[k].list && lists[k].list.synonyms;
				if (!raw) continue;

				var reactions = raw.split('|');

				for (var j = 0; j < reactions.length; j++){
					var w = reactions[j].replace(/\s*\(.*?\)\s*$/, '').trim();

					if (w && !seen[w] && entry.values.length < 25){
						seen[w] = true;
						entry.values.push({ word: w, chosen: false });
					}
				}
			}

			$scope.$apply();

			$scope.equalizer(language, target);
		}).fail( function(){
			// the API errors on unknown words; don't hammer it with retries
			entry.fetching = false;
			entry.fetched = true;
		});

	}

	$scope.symmetrical = function(value, contentTarget, languageTarget, language, $event){

		for (var i = 0; i < $scope[language].to[languageTarget].content[contentTarget].values.length; i++){
			$scope[language].to[languageTarget].content[contentTarget].values[i].chosen = false;

			if ($scope[language].to[languageTarget].content[contentTarget].values[i].word === value)
				$scope[language].to[languageTarget].content[contentTarget].values[i].chosen = true;
		}

		var punct = $scope[language].to[languageTarget].content[contentTarget].display
			.match(/[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\{\}\|\\\<\>\,\.\?\/\~\`]/);

		if (
			(punct != null) && 
			!value.match(/[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\{\}\|\\\<\>\,\.\?\/\~\`]/)
		){
			value += punct;
		}

		$scope[language].to[languageTarget].content[contentTarget].display = value;

		var subComposite = '';

		for (var i = 0; i < $scope[language].to[languageTarget].content.length; i++){
			subComposite += $scope[language].to[languageTarget].content[i].display + ' ';
		}

		$scope[language].to[languageTarget].composite = subComposite;

	}

	// 	                                                                                                                                    
	// 	 ad88888ba  88        88        db        88888888ba,   88888888888 888888888888 88        88 888b      88 88888888888 88888888ba   
	// 	d8"     "8b 88        88       d88b       88      `"8b  88               88      88        88 8888b     88 88          88      "8b  
	// 	Y8,         88        88      d8'`8b      88        `8b 88               88      88        88 88 `8b    88 88          88      ,8P  
	// 	`Y8aaaaa,   88aaaaaaaa88     d8'  `8b     88         88 88aaaaa          88      88        88 88  `8b   88 88aaaaa     88aaaaaa8P'  
	// 	  `"""""8b, 88""""""""88    d8YaaaaY8b    88         88 88"""""          88      88        88 88   `8b  88 88"""""     88""""88'    
	// 	        `8b 88        88   d8""""""""8b   88         8P 88               88      88        88 88    `8b 88 88          88    `8b    
	// 	Y8a     a8P 88        88  d8'        `8b  88      .a8P  88               88      Y8a.    .a8P 88     `8888 88          88     `8b   
	// 	 "Y88888P"  88        88 d8'          `8b 88888888Y"'   88888888888      88       `"Y8888Y"'  88      `888 88888888888 88      `8b  
	// 	                                                                                                                                    
	// 	      

	$scope.antivert = $scope.vert = (window.innerHeight / 2).toFixed(1);
	$scope.antihoriz = $scope.horiz = (window.innerWidth / 2).toFixed(1);

	$scope.shadeTunerToggle = false;
	$scope.shadeDrag = {};

	$scope.shadeTunerSwitch = function(e){
		if (e.type === 'mousedown'){
			$scope.shadeTunerToggle = true;
			$scope.shadeDrag['vert'] = e.screenY;
			$scope.shadeDrag['horiz'] = e.screenX;
		}else{ // MOUSEUP
			$scope.shadeTunerToggle = false;
		}
	}

	$scope.shadeTuner = function(e){
		if ($scope.shadeTunerToggle){

			$scope.vert = e.clientY;

			$scope.antivert = window.innerHeight - e.clientY;
		}
	}

	// 	                                                                                          
	// 	88                 db   8b        d8 ,ad8888ba,  8b           d8 88888888888 88888888ba   
	// 	88                d88b   Y8,    ,8P d8"'    `"8b `8b         d8' 88          88      "8b  
	// 	88               d8'`8b   Y8,  ,8P d8'        `8b `8b       d8'  88          88      ,8P  
	// 	88              d8'  `8b   "8aa8"  88          88  `8b     d8'   88aaaaa     88aaaaaa8P'  
	// 	88             d8YaaaaY8b   `88'   88          88   `8b   d8'    88"""""     88""""88'    
	// 	88            d8""""""""8b   88    Y8,        ,8P    `8b d8'     88          88    `8b    
	// 	88           d8'        `8b  88     Y8a.    .a8P      `888'      88          88     `8b   
	// 	88888888888 d8'          `8b 88      `"Y8888Y"'        `8'       88888888888 88      `8b  
	// 	                                                                                          
	// 


	$scope.layoverClick = function(target){
		if (target === '')
			createCookie('okaytheygotit', 'true')

		$layers.removeClass().addClass('layers ' + target)
	}

	//                                                                            
	//  88        88 88888888888 88          88888888ba  88888888888 88888888ba   
	//  88        88 88          88          88      "8b 88          88      "8b  
	//  88        88 88          88          88      ,8P 88          88      ,8P  
	//  88aaaaaaaa88 88aaaaa     88          88aaaaaa8P' 88aaaaa     88aaaaaa8P'  
	//  88""""""""88 88"""""     88          88""""""'   88"""""     88""""88'    
	//  88        88 88          88          88          88          88    `8b    
	//  88        88 88          88          88          88          88     `8b   
	//  88        88 88888888888 88888888888 88          88888888888 88      `8b  
	//                                                                            

	$scope.helperCount = 1;

	$scope.helperMove = function(direction){

		if (direction === 'left' && $scope.helperCount > 0 )
			$scope.helperCount--;
		else if (direction === 'right' && $scope.helperCount < 14 )
			$scope.helperCount++; 

	}

	$scope.helperRepeat = function(){
		console.log('REPEAT')
		var localCount = $scope.helperCount;
		$scope.helperCount = null;

		$timeout(function(){
			$scope.helperCount = localCount;
		}, 10);
	}

	$scope.helpInit = function(){
		console.log('yeah!')
	}

	// 	                                                                                                                                                                 
	// 	88888888ba  88          ,ad8888ba,     ,ad8888ba,  88      a8P       ,ad8888ba,   ,ad8888ba,   888b      88 888888888888 88888888ba    ,ad8888ba,   88           
	// 	88      "8b 88         d8"'    `"8b   d8"'    `"8b 88    ,88'       d8"'    `"8b d8"'    `"8b  8888b     88      88      88      "8b  d8"'    `"8b  88           
	// 	88      ,8P 88        d8'        `8b d8'           88  ,88"        d8'          d8'        `8b 88 `8b    88      88      88      ,8P d8'        `8b 88           
	// 	88aaaaaa8P' 88        88          88 88            88,d88'         88           88          88 88  `8b   88      88      88aaaaaa8P' 88          88 88           
	// 	88""""""8b, 88        88          88 88            8888"88,        88           88          88 88   `8b  88      88      88""""88'   88          88 88           
	// 	88      `8b 88        Y8,        ,8P Y8,           88P   Y8b       Y8,          Y8,        ,8P 88    `8b 88      88      88    `8b   Y8,        ,8P 88           
	// 	88      a8P 88         Y8a.    .a8P   Y8a.    .a8P 88     "88,      Y8a.    .a8P Y8a.    .a8P  88     `8888      88      88     `8b   Y8a.    .a8P  88           
	// 	88888888P"  88888888888 `"Y8888Y"'     `"Y8888Y"'  88       Y8b      `"Y8888Y"'   `"Y8888Y"'   88      `888      88      88      `8b   `"Y8888Y"'   88888888888  
	// 	                                                                                                                                                                 
	// 	                                                                                                                                                                 

	$scope.addBlock = function(e, i, t){

		console.log(e, i, t)
		$timeout(function(){ 
			$scope[t].from 
				.splice(i + 1, 0, 
				{
					content: e
				}
			);

			$scope[t].to
				.splice(i + 1, 0, 
				{
					id: randomizr(),
					loading: false, 
					selected: false, 
					hovered: false, 
					composite: '',
					content:[]
				}
			);

			$scope.$apply();
		});
	}

	$scope.closeBlock = function(e, i, t){
		$scope[t].from.splice(i, 1);
		$scope[t].to.splice(i, 1);

		if ($scope[t].from.length === 0)
			$scope.addBlock('', -1, t);
	}

	$scope.sizeCheck = _.debounce(function(query_d, target_d, language_d){ 
		$scope.sizeCheck_direct();
	}, 1000);

	$scope.sizeCheck_direct = function(query_d, target_d, language_d){

		var $strange_from = $('.strange_from'),
			$strange_from_height = 0;

			$strange_to = $('.strange_to'),
			$strange_to_height = 0;

		$strange_from.find('.block').each(function(e){
			$strange_from_height += $(this).outerHeight(true);

			$scope.tooMuchText = ($strange_from_height > $scope.vert) ? true : false;

			$scope.$apply();
		});

		$strange_to.find('.block').each(function(e){
			$strange_to_height += $(this).outerHeight(true);

			$scope.tooMuchText = ($strange_to_height > $scope.vert) ? true : false;

			$scope.$apply();
		});
	};

	$scope.equalizer = function(direction, target){
		var height_from = $('.language.' + direction + '_from').find('.block').eq(target).outerHeight()
		var height_to = $('.language.' + direction + '_to').find('.block').eq(target).outerHeight()

		if ( height_from > height_to)
			$('.language.' + direction + '_to').find('.block').eq(target).css('height', height_from)
		else
			$('.language.' + direction + '_from').find('.block').eq(target).css('height', height_to)
	};

	// $timeout(function(){
	// 	$scope.equalizer('strange', 0);

	// },1000)


	// 	                                                          
	// 	88888888888 88888888ba    ,ad8888ba,   88b           d88  
	// 	88          88      "8b  d8"'    `"8b  888b         d888  
	// 	88          88      ,8P d8'        `8b 88`8b       d8'88  
	// 	88aaaaa     88aaaaaa8P' 88          88 88 `8b     d8' 88  
	// 	88"""""     88""""88'   88          88 88  `8b   d8'  88  
	// 	88          88    `8b   Y8,        ,8P 88   `8b d8'   88  
	// 	88          88     `8b   Y8a.    .a8P  88    `888'    88  
	// 	88          88      `8b   `"Y8888Y"'   88     `8'     88  
	// 	                                                          
	// 	                                                          

	$scope.from = function(e, i, t){
		var that = e;
		map[that.keyCode] = that.type == 'keydown';

		// console.log(i)

		// GET CARET
		var currentCaret = $(that.target)[0].selectionStart;
		var theValue = that.target.value;

		var $theSizer = $(that.target).siblings('.copy');

		$theSizer.html(
			'<span class="delicate">' +
			theValue.substring(0, currentCaret) + 
			'<span class="hiddenCaret"></span>' + 
			theValue.substring(currentCaret, theValue.length) +
			'</span>'
		);

		if (  // COMMAND / CTRL + ENTER
				(map[13] && map[17]) ||
				(map[13] && map[91]) ||
				(map[13] && map[93]) 
		){

			that.preventDefault();
			$scope.translate($scope[t].from[i].content, i, t);
			clearMap();
		}

		// ENTER
		else if (map[13]){ 
			that.preventDefault();

			$scope.addBlock('', i, t);

			clearMap();
		}

		// CMD + DEL
		else if (
			map[17] && map[8] ||
			map[91] && map[8] ||
			map[93] && map[8]
		){ 
			that.preventDefault();

			$(that.target).parent().prev('.block').find('textarea').focus();

			$scope[t].from.splice(i, 1);
			$scope[t].to.splice(i, 1);

			clearMap();

			if ($scope[t].from.length === 0) $scope.addBlock('', i, t);
		}

		// DELETE
		else if (map[8]){ 
			if (
				(that.target.value == '') && 
				($scope[t].from.length > 1) // make sure we're not deleting the last bit!
			){ 
				that.preventDefault();
				console.log(that.target)

				$(that.target).parent().prev('.block').find('textarea').focus();

				$scope[t].from.splice(i, 1);
				$scope[t].to.splice(i, 1);

				clearMap();

				if ($scope[t].from.length === 0) $scope.addBlock('', i, t);
			}
		}

		// TAB / CMD + RIGHT
		else if (
			(map[9]) || 
			(map[91] && map[39]) ||
			(map[17] && map[39])
		){ // TAB
			that.preventDefault();

			$('.' + t + '_to .interact').find('.block').eq(i).find('.actualBlock').focus()
			clearMap();
		}

		// CMD + DOWN / CTRL + DOWN
		else if (
			(map[93] && map [40]) || 
			(map[91] && map [40]) || 
			(map[17] && map [40]) 
		){
			$('.mother_from .interact').find('.block').last().find('textarea').focus();
			clearMap();
		}

		// CMD + UP / CTRL + UP
		else if (
			(map[93] && map [38]) || 
			(map[91] && map [38]) || 
			(map[17] && map [38]) 
		){
			$('.strange_from .interact').find('.block').last().find('textarea').focus();
			clearMap();
		}

		// PASTE
		else if (
			(map[17] && map[86]) || 
			(map[91] && map[86]) ||
			(map[93] && map[86]) 
		){

			$timeout(function(){

				var theContent = $scope[t].from[i].content.split('\n');

				console.log(theContent);

				for (var l = 0; l < theContent.length; l++){
					if (theContent[l] === '') theContent.splice(l, 1);
				}

					$scope[t].from[i].content = '';
					$scope[t].from[i].content = theContent[0];

					// console.log(theContent[0])
				$timeout(function(){
					$scope.$apply();
					$scope.from(e, i, t);
				}, 100);

				console.log(theContent);
				
		    	// $timeout(function(){

					// $scope[t].from[i].content = theContent[0];

				$scope.translate(theContent[0], i, t);

				for (var l = 1; l < theContent.length; l++){
					$scope.addBlock(theContent[l], i, t);
				}

				$timeout(function(){

					for (var m = 1; m < theContent.length; m++){
		    			$scope.translate(theContent[m], i + m, t);
					}

				}, 200);

					// console.log(theContent.indexOf('\n'))
		    // 		if ( theContent.length > 500 ){
		    // 			// alert('Whoa! \n\nThat\'s a little big for [CON.JECT}. Try selecting a smaller snippet, like a sentence. Or, break it up across multiple boxes.');

		    // 			var breakIndex = theContent.lastIndexOf('.')
		    			
		    // 			$scope.translate(theContent.substring(0, breakIndex), i, t);

		    // 			$timeout(function(){
		    // 				$scope.addBlock(theContent.substring(breakIndex, Infinity), i, t)

		    // 				$timeout(function(){

				  //   			$scope.translate(theContent.substring(breakIndex, Infinity), i + 1, t);
		    // 				}, 200);

		    // 			}, 200);
		    // 		}
		    // 		else
						// $scope.translate($scope[t].from[i].content, i, t);

					clearMap();
		    	// }, 200)
			}, 500); 
		}

		// UP ARROW
		else if (map[38]){ 

			$timeout(function(){ 

				if (
					( $theSizer.find('.hiddenCaret').position().top < 14 ) &&
					( $(that.target).parent().prev('.block').length > 0 )
				){
					that.preventDefault();

					var $prevTA = $(that.target).parent().prev('.block').find('textarea');
					
					var prevTACount = $prevTA.val().length;

					$prevTA.focus()[0]
					.setSelectionRange(10000, 10000);

					clearMap();
				}

			})

		}

		// DOWN ARROW
		else if (map[40]){ 

			$timeout(function(){ 

				if ($theSizer.find('.hiddenCaret').position().top >= ($theSizer.height() - 30)){
					that.preventDefault();

					var $nextTA = $(that.target).parent().next('.block').find('textarea');
					var nextTACount = $nextTA.val().length;

					$nextTA.focus()[0]
					.setSelectionRange(nextTACount-currentCaret, nextTACount-currentCaret);

					clearMap();
				}

			});
		}

		// $scope.sizeCheck();

		// $scope.equalizer_debounce(t, i);

		function clearMap(){
			map = [];
			$timeout(function(){
				$scope.$apply();
			});
		}
	}

	// 	                           
	// 	888888888888 ,ad8888ba,    
	// 	     88     d8"'    `"8b   
	// 	     88    d8'        `8b  
	// 	     88    88          88  
	// 	     88    88          88  
	// 	     88    Y8,        ,8P  
	// 	     88     Y8a.    .a8P   
	// 	     88      `"Y8888Y"'    
	// 	                           
	// 	                           

	$scope.to = function(e, i, t){
		var that = e;
		map[that.keyCode] = that.type == 'keydown';

		// CMD + DOWN / CTRL + DOWN
		if (
			(map[91] && map [40]) || 
			(map[17] && map [40]) 
		){
			$('.mother_to .interact').find('.block').first().find('.actualBlock').focus();
			clearMap();
		}

		// CMD + UP / CTRL + UP
		else if (
			(map[91] && map [38]) || 
			(map[17] && map [38]) 
		){
			$('.strange_to .interact').find('.block').last().find('.actualBlock').focus();
			clearMap();
		}

		// UP ARROW
		else if (map[38]){ 
        	$timeout(function(){
				if ( $(that.target).parent().prev('.block').length > 0 )
					$(that.target).parent().prev('.block').find('.actualBlock').focus();
				else
					$('.strange_to .interact').find('.block').last().find('.actualBlock').focus();

				clearMap();
			})
		}

		// DOWN ARROW
		else if (map[40]){ 
        	$timeout(function(){
				if ( $(that.target).parent().next('.block').length > 0 )
					$(that.target).parent().next('.block').find('.actualBlock').focus();
				else
					$('.mother_to .interact').find('.block').first().find('.actualBlock').focus();

				clearMap();
			})
		}

		// CMD + DEL / DEL
		else if (
			(map[91] && map[8]) ||  
			(map[8]) 				
		){
			that.preventDefault();

			$(that.target).parent().prev('.block').find('textarea').focus();

			$scope[t].from.splice(i, 1);
			$scope[t].to.splice(i, 1);

			clearMap();

			if ($scope[t].from.length === 0){
				$scope.addBlock('', i, t);
				$('.' + t + '_from').find('.block').last().find('textarea').focus();
			}
		}

		// SHIFT + TAB / LEFT ARROW
		else if (
			(map[9] && map[16]) ||  
			(map[37]) 				
		){
			that.preventDefault();
			$('.' + t + '_from .interact').find('.block').eq(i).find('textarea').focus();
			clearMap();
		}

		function clearMap(){
			map = [];
			$scope.$apply();
		}

	}
})

.directive('initFocus', [ '$timeout', 
	function($timeout) {
	    return {
	        restrict: 'A', 
	        link: function(scope, element, attrs) {
	        	$timeout(function(){
	            	scope.$parent.setup && element.focus();
	        	})
	        }
	    };
	}
])

.directive('symmetry', [ '$timeout', 
	function($timeout) {
	    return {
	        restrict: 'A', 
	        link: function(scope, element, attrs) {
	        	var $elem = $(element);
        	    $elem.on('click', function (e) {
        	    	e.stopPropagation();
    	    		$elem.parent().addClass('open')
        	    		.siblings().removeClass('open')
        	    });
	        }
	    };
	}
])

.directive('back', [ '$timeout', 
	function($timeout) {
	    return {
	        restrict: 'A', 
	        link: function(scope, element, attrs) {
	        	var $elem = $(element);
        	    $elem.on('click', function (e) {
        	    	$elem.find('.block').last().find('textarea').focus();

        	    	if ($elem.find('.block').last().find('textarea').val() !== ''){
        	    		// var t = 

        	    		scope.addBlock(
        	    			'',
        	    			$elem.find('.block').length - 1,
        	    			$elem.parent().attr('class').split(' ')[1].split('_')[0]
    	    			)
        	    	}
	        	    // console.log(scope)
	        	    // console.log($elem.parent().attr('class').split(' ')[1].split('_'))
        	    });

        	    $elem.on('scroll', function(){
        	    	var $that = $(this);

        	    	var backScroll = $that.scrollTop();

        	    	$that.parent().siblings('.language').children('.interact')
        	    		.scrollTop( backScroll )
    	    		
    	    		shadeScroller($that, backScroll);
        	    })

	    		shadeScroller = _.debounce(function($thatOne, targetScroll){
	    			$thatOne.siblings('.shade').find('.expand')
        	    		.scrollTop( targetScroll )

	    			$thatOne.parent().siblings('.language').find('.expand')
        	    		.scrollTop( targetScroll )
	    		}, 1000);	    		

	        }
	    };
	}
])

.directive('ground', [ '$timeout', 
	function($timeout) {
	    return {
	        restrict: 'A', 
	        link: function(scope, element, attrs) {
	        	var $elem = $(element);

        	    $elem.on('click', function (e) {
        	    	$('.word').removeClass('open')
        	    	// $('.block').removeClass('selected')
        	    });

        	    $elem.on('scroll', function(){
        	    	var $that = $(this);

        	    	var groundScroll = $that.scrollTop();

        	    	$that.parent().siblings('.language').children('.interact')
        	    		.scrollTop( groundScroll )


    	    		shadeScroller($that, groundScroll);
        	    });

	    		shadeScroller = _.debounce(function($thatOne, targetScroll ){
	    			$thatOne.siblings('.shade').find('.expand')
        	    		.scrollTop( targetScroll )

	    			$thatOne.parent().siblings('.language').find('.expand')
        	    		.scrollTop( targetScroll )
	    		}, 1000);	
	        }
	    };
	}
])

// Replaces the Flash-based ngClip: copies the evaluated clip-copy expression on click
.directive('clipCopy', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('click', function () {
                var text = scope.$eval(attrs.clipCopy);

                if (text === undefined || text === null) return;
                text = String(text).trim();

                function fallback(){
                    var ta = document.createElement('textarea');
                    ta.value = text;
                    ta.style.position = 'fixed';
                    ta.style.opacity = '0';
                    document.body.appendChild(ta);
                    ta.select();
                    try { document.execCommand('copy'); } catch (err) {}
                    document.body.removeChild(ta);
                }

                if (navigator.clipboard && navigator.clipboard.writeText)
                    navigator.clipboard.writeText(text).catch(fallback);
                else
                    fallback();
            });
        }
    };
})

.directive('stopit', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.bind('click', function (e) {
                e.stopPropagation();
            });
        }
    };
});









