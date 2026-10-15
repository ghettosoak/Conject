
	// TEST 001
	strange = $scope.strange = {
		from: [
			{content:'hallo welt!'},
			{content:'guten tag!'}
		],
		to:[
			{
				id: '6d7866dd-cd6e-430d-a85f-54a18faf54f9',
				loading: false,
				selected: false,
				hovered: false,
				composite: 'hello world!',
				content:[
					{
						selected: false,
						display:'hello',
						values:[
							{
								word: 'hello',
								chosen: true
							},
							{
								word: 'howdy',
								chosen: false
							},
							{
								word: 'salutations',
								chosen: false
							}
						]
					},
					{
						selected: false,
						display:'world!',
						values:[
							{
								word: 'world',
								chosen: true
							},
							{
								word: 'planet',
								chosen: false
							},
							{
								word: 'celestial sphere',
								chosen: false
							},
							{
								word: 'globe',
								chosen: false
							}
						]
					},
				]
			},
			{
				id: 'a0da1ff4-0108-4bc9-83d3-a4d7db9c19aa',
				loading: false,
				selected: false,
				hovered: false,
				composite: 'good day!',
				content:[
					{
						selected: false,
						display:'good',
						values:[
							{
								word: 'good',
								chosen: true
							},
							{
								word: 'well',
								chosen: false
							},
							{
								word: 'fine',
								chosen: false
							}
						]
					},
					{
						selected: false,
						display:'day!',
						values:[
							{
								word: 'day',
								chosen: true
							},
							{
								word: 'twenty-four-hour period',
								chosen: false
							},
							{
								word: 'peak',
								chosen: false
							},
							{
								word: 'age',
								chosen: false
							}
						]
					},
				]
			}
		]
	}

	mother = $scope.mother = {
		from: [
			{content:'how are you?'},
			{content:'how is the weather?'}
		],
		to:[
			{
				id: 'c8eb9b9b-2a5e-4209-afc0-ccc721a7129f',
				loading: false,
				selected: false,
				hovered: false,
				composite: 'wie gehts dir?',
				content:[
					{
						selected: false,
						display:'wie',
						values:[
							{
								word: 'wie',
								chosen: true
							},
							{
								word: 'etwa',
								chosen: false
							},
							{
								word: 'bspw.',
								chosen: false
							}
						]
					},
					{
						selected: false,
						display:'gehts',
						values:[
							{
								word: 'gehts',
								chosen: true
							},
							{
								word: 'geht\'s',
								chosen: false
							},
							{
								word: 'geht es',
								chosen: false
							}
						]
					},
					{
						selected: false,
						display:'dir?',
						values:[]
					},
				]
			},
			{
				id: '74b7757e-a345-46cc-cad8-1d9b49577e29',
				loading: false,
				selected: false,
				hovered: false,
				composite: 'wie ist das wetter?',
				content:[
					{
						selected: false,
						display:'wie',
						values:[
							{
								word: 'wie',
								chosen: true
							},
							{
								word: 'etwa',
								chosen: false
							},
							{
								word: 'bspw.',
								chosen: false
							}
						]
					},
					{
						selected: false,
						display:'ist',
						values:[]
					},
					{
						selected: false,
						display:'das',
						values:[
							{
								word: 'das',
								chosen: true
							},
							{
								word: 'dies',
								chosen: true
							},
							{
								word: 'welches',
								chosen: true
							}
						]
					},
					{
						selected: false,
						display:'wetter?',
						values:[
							{
								word: 'wetter',
								chosen: true
							},
							{
								word: 'klima',
								chosen: false
							},
							{
								word: 'wetterlage',
								chosen: false
							}
						]
					},
				]
			},
		]
	};

	// TEST 002

	strange = $scope.strange = {
		from: [
			{ content: 'test content 01', },
			{ content: 'test content 02', },
			{ content: 'test content 03', },
			{ content: 'test content 04', },
			{ content: 'test content 05', },
			{ content: 'test content 06', },
			{ content: 'test content 07', },
			{ content: 'test content 08', },
			{ content: 'test content 09', },
			{ content: 'test content 10', },
			{ content: 'test content 11', },
			{ content: 'test content 12', },
			{ content: 'test content 13', },
			{ content: 'test content 14', },
			{ content: 'test content 15', },
		],
		to: [
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT01', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT02', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT03', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT04', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT05', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT06', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT07', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT08', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT09', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT10', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT11', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT12', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT13', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT14', values:[] }, ] },
			{ id: randomizr(), loading: false, selected: false, hovered: false, composite: '', content: [ { selected: false, display: 'CONTENT15', values:[] }, ] },
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

	// TEST 003
	strange = $scope.strange = {
		from: [
			{content:'one line!'},
			{content:'Mauris facilisis orci vel mauris iaculis ut aliquet lectus cursus. Donec vehicula feugiat porta. Ut vitae lorem eros. Morbi nec hendrerit augue!'},
			{content:'one line!'},
		],
		to:[
			{
				id: randomizr(),
				loading: false,
				selected: false,
				hovered: false,
				composite: 'Mauris facilisis orci vel mauris iaculis ut aliquet lectus cursus. Donec vehicula feugiat porta. Ut vitae lorem eros. Morbi nec hendrerit augue!',
				content:[
					{ selected: false, display: 'Mauris', values:[] },
					{ selected: false, display: 'facilisis', values:[] },
					{ selected: false, display: 'orci', values:[] },
					{ selected: false, display: 'vel', values:[] },
					{ selected: false, display: 'mauris', values:[] },
					{ selected: false, display: 'iaculis', values:[] },
					{ selected: false, display: 'ut', values:[] },
					{ selected: false, display: 'aliquet', values:[] },
					{ selected: false, display: 'lectus', values:[] },
					{ selected: false, display: 'cursus.', values:[] },
					{ selected: false, display: 'Donec', values:[] },
					{ selected: false, display: 'vehicula', values:[] },
					{ selected: false, display: 'feugiat', values:[] },
					{ selected: false, display: 'porta.', values:[] },
					{ selected: false, display: 'Ut', values:[] },
					{ selected: false, display: 'vitae', values:[] },
					{ selected: false, display: 'lorem', values:[] },
					{ selected: false, display: 'eros.', values:[] },
					{ selected: false, display: 'Morbi', values:[] },
					{ selected: false, display: 'nec', values:[] },
					{ selected: false, display: 'hendrerit', values:[] },
					{ selected: false, display: 'augue!', values:[] },
				]
			},
			{
				id: randomizr(),
				loading: false,
				selected: false,
				hovered: false,
				composite: 'one line!',
				content:[
					{ selected: false, display:'one', values:[] },
					{ selected: false, display:'line!', values:[] },
				]
			},	
			{
				id: randomizr(),
				loading: false,
				selected: false,
				hovered: false,
				composite: 'one line!',
				content:[
					{ selected: false, display:'one', values:[] },
					{ selected: false, display:'line!', values:[] },
				]
			},			
		]
	}

	mother = $scope.mother = {
		from: [
			{content:'one line!'},
			{content:'Mauris facilisis orci vel mauris iaculis ut aliquet lectus cursus. Donec vehicula feugiat porta. Ut vitae lorem eros. Morbi nec hendrerit augue!'}
		],
		to:[
			{
				id: randomizr(),
				loading: false,
				selected: false,
				hovered: false,
				composite: 'Mauris facilisis orci vel mauris iaculis ut aliquet lectus cursus. Donec vehicula feugiat porta. Ut vitae lorem eros. Morbi nec hendrerit augue!',
				content:[
					{ selected: false, display: 'Mauris', values:[] },
					{ selected: false, display: 'facilisis', values:[] },
					{ selected: false, display: 'orci', values:[] },
					{ selected: false, display: 'vel', values:[] },
					{ selected: false, display: 'mauris', values:[] },
					{ selected: false, display: 'iaculis', values:[] },
					{ selected: false, display: 'ut', values:[] },
					{ selected: false, display: 'aliquet', values:[] },
					{ selected: false, display: 'lectus', values:[] },
					{ selected: false, display: 'cursus.', values:[] },
					{ selected: false, display: 'Donec', values:[] },
					{ selected: false, display: 'vehicula', values:[] },
					{ selected: false, display: 'feugiat', values:[] },
					{ selected: false, display: 'porta.', values:[] },
					{ selected: false, display: 'Ut', values:[] },
					{ selected: false, display: 'vitae', values:[] },
					{ selected: false, display: 'lorem', values:[] },
					{ selected: false, display: 'eros.', values:[] },
					{ selected: false, display: 'Morbi', values:[] },
					{ selected: false, display: 'nec', values:[] },
					{ selected: false, display: 'hendrerit', values:[] },
					{ selected: false, display: 'augue!', values:[] },
				]
			},
			{
				id: randomizr(),
				loading: false,
				selected: false,
				hovered: false,
				composite: 'one line!',
				content:[
					{ selected: false, display:'one', values:[] },
					{ selected: false, display:'line!', values:[] },
				]
			},			
		]
	};