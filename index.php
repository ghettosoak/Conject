<!doctype html>
<html lang="en" ng-app="conjecture">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <title>[CON.JECT]</title>

    <link rel="shortcut icon" href="img/favicon.ico" />
    <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />

    <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="css/master.css" />
</head>

<body id="ng-app">
	<div 
		id="master" 
		ng-controller="MainCtrl"	
		data-ng-init="init()"	
		ng-mousemove="shadeTuner($event)"
		ng-mouseup="shadeTunerSwitch($event)"
		ng-class="{resizedText: tooMuchText}"
	>

		<div class="language_marker strange_from" ng-click="layoverClick('lay open open_langselect_from')" ng-class="{pardon: shadeTunerToggle}" ng-style="{ 'height' : vert }">
			<span ng-bind="tongueUser.strange"></span>
		</div>
		<div class="language_marker strange_to"   ng-click="layoverClick('lay open open_langselect_to')" ng-class="{pardon: shadeTunerToggle}" ng-style="{ 'height' : vert }">
			<span ng-bind="tongueUser.mother"></span>
		</div>
		<div class="language_marker mother_from"  ng-click="layoverClick('lay open open_langselect_from')" ng-class="{pardon: shadeTunerToggle}" ng-style="{ 'height' : antivert }">
			<span ng-bind="tongueUser.mother"></span>
		</div>
		<div class="language_marker mother_to"    ng-click="layoverClick('lay open open_langselect_to')" ng-class="{pardon: shadeTunerToggle}" ng-style="{ 'height' : antivert }">
			<span ng-bind="tongueUser.strange"></span>
		</div>

		<div class="direction strange"
			ng-style="{ 
				'height' : vert
			}">

			<div class="language strange_from">
				
				<div 
					class="interact"
					back
				>
					<div class="block" 
						ng-repeat="block in strange.from track by $index"
						ng-mouseenter="strange.to[$index].hovered = true"
						ng-mouseleave="strange.to[$index].hovered = false"
						ng-class="{
							hovered:  strange.to[$index].hovered
						}"
					>
						<span 
							class="closer"
							ng-click="closeBlock($event, $index, 'strange')"
						></span>
						<textarea 
							class="strange_from_textarea" 
							ng-model="block.content"
							ng-keydown="from($event, $index, 'strange')"
							ng-keyup="from($event, $index, 'strange')"
							init-focus
							stopit>
						</textarea>
						<div class="copy"><span class="delicate">{{ block.content }}</span></div>
					</div>
				</div>

				<div class="shade"
					ng-class="{pardon: shadeTunerToggle}">
						
					<div class="expand">
						<div class="block" ng-repeat="block in strange.from track by $index">
							<div class="shadow">{{ block.content }}</div>
						</div>
					</div>
				</div>
				
			</div>

			<div class="language strange_to">

				<div 
					class="interact"
					ground
				>
					<div class="block" 
						ng-repeat="block in strange.to track by $index" 
						ng-click="actualBlockFocused($event, block, false)"
						ng-mouseenter="block.hovered = true"
						ng-mouseleave="block.hovered = false"
						ng-class="{
							loading : block.loading,
							selected: block.selected,
							hovered:  block.hovered
						}"
					>
						<span 
							class="closer"
							ng-click="closeBlock($event, $index, 'strange')"
						></span>
						<div class="loader"></div>
						
						<a href=""
							class="actualBlock" 
							clip-copy="getTextToCopyBlock(block)" 
							ng-focus="actualBlockFocused($event, block, true)" 
							ng-blur="block.selected = false;"
							ng-keydown="to($event, $index, 'strange')"
							ng-keyup="to($event, $index, 'strange')"
							ng-click="toCopy($event)">
							<p>{{block.composite}}</p>
						</a>

						<span class="word" 
							ng-repeat="content in block.content"
						>
							<span 
								symmetry
								class="actual display"
								ng-click="content.selected = true"
								ng-hide="content.selected === true"
								ng-mouseover="synonymous(content.display, $index, $parent.$index, 'strange')"
							>
								{{content.display}}
							</span>
							<span 
								class="actual copier"
								clip-copy="getTextToCopyWord(content.display)"
								ng-show="content.selected === true"
								ng-click="content.selected = false"
							>
								{{content.display}}
							</span>
							<ul>
								<li 
									class="symmetrical"
									alignment
									ng-repeat="value in content.values track by $index"
									ng-click="symmetrical(value.word, $parent.$index, $parent.$parent.$index, 'strange', $event); $event.stopPropagation();"
									ng-class="{chosen : value.chosen}"
								>
									{{value.word}}
								</li>
							</ul>
						</span>
					</div>
				</div>

				<div class="shade"
					ng-class="{pardon: shadeTunerToggle}">
					<div class="expand">
						<div class="block" ng-repeat="block in strange.to track by $index">
							<div class="shadow">
								<span class="word" 
									ng-repeat="(key, content) in block.content track by $index"
								>
									{{content.display}}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="direction mother"
			ng-style="{ 
				'height' : antivert
			}">
			
		

			<div class="language mother_from">		

				<div 
					class="interact"
					back
				>
					<div class="block"
						ng-repeat="block in mother.from track by $index"
						ng-mouseenter="mother.to[$index].hovered = true"
						ng-mouseleave="mother.to[$index].hovered = false"
						ng-class="{
							hovered:  mother.to[$index].hovered
						}"
					>
						<span 
							class="closer"
							ng-click="closeBlock($event, $index, 'mother')"
						></span>
						<textarea 
							class="mother_from_textarea" 
							ng-model="block.content"
							ng-keydown="from($event, $index, 'mother')"
							ng-keyup="from($event, $index, 'mother')"
							init-focus
							stopit>
						</textarea>
						<div class="copy"><span class="delicate">{{ block.content }}</span></div>
					</div>
				</div>	

				<div class="shade"
					ng-class="{pardon: shadeTunerToggle}">

					<div class="expand">
						<div class="block" ng-repeat="block in mother.from track by $index">
							<div class="shadow">{{ block.content }}</div>
						</div>
					</div>
				</div>

			</div>

			<div class="language mother_to">

				<div 
					class="interact"
					ground
				>
					<div class="block" 
						initFocus
						ng-repeat="block in mother.to track by $index" 
						ng-click="actualBlockFocused($event, block, false)"
						ng-mouseenter="block.hovered = true"
						ng-mouseleave="block.hovered = false"
						ng-class="{
							loading : block.loading,
							selected: block.selected,
							hovered:  block.hovered
						}"
					>
						<span 
							class="closer"
							ng-click="closeBlock($event, $index, 'mother')"
						></span>
						<div class="loader"></div>

						<a href=""
							class="actualBlock" 
							clip-copy="getTextToCopyBlock(block)" 
							ng-focus="block.selected = true;" 
							ng-blur="block.selected = false;"
							ng-keydown="to($event, $index, 'mother')"
							ng-keyup="to($event, $index, 'mother')"
							ng-click="toCopy($event)">
							<p>{{block.composite}}</p>
						</a>

						<span class="word" 
							ng-repeat="content in block.content"
						>
							<span 
								symmetry
								class="actual display"
								ng-click="content.selected = true"
								ng-hide="content.selected === true"
								ng-mouseover="synonymous(content.display, $index, $parent.$index, 'mother')"
							>
								{{content.display}}
							</span>
							<span 
								class="actual copier"
								clip-copy="getTextToCopyWord(content.display)"
								ng-show="content.selected === true"
								ng-click="content.selected = false"
							>
								{{content.display}}
							</span>
							<ul>
								<li 
									class="symmetrical"
									alignment
									ng-repeat="value in content.values track by $index"
									ng-click="symmetrical(value.word, $parent.$index, $parent.$parent.$index, 'mother', $event); $event.stopPropagation();"
									ng-class="{chosen : value.chosen}"
								>
									{{value.word}}
								</li>
							</ul>
						</span>
					</div>
				</div>

				<div class="shade"
					ng-class="{pardon: shadeTunerToggle}">
					<div class="expand">
						<div class="block" ng-repeat="block in mother.to track by $index">
							<div class="shadow">
								<span class="word" 
									ng-repeat="(key, content) in block.content track by $index"
								>
									{{content.display}}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="quadrat"
			ng-class="{ic: shadeTunerToggle}"
			ng-style="{ 
				'top' : vert,
				'left' : horiz
			}">
			<div class="spin">
				<div class="unlock"
					ng-click="layoverClick('lay')"
				></div>
				<div class="quadrant one"   ng-mousedown="shadeTunerSwitch($event)" ></div>
				<div class="quadrant two"   ng-mousedown="shadeTunerSwitch($event)" ></div>
				<div class="quadrant three" ng-mousedown="shadeTunerSwitch($event)" ></div>
				<div class="quadrant four"  ng-mousedown="shadeTunerSwitch($event)" ></div>
			</div>
		</div>

		<div id="loadover" class="layers lay">
			<div class="LO_1  LO_odd  "></div> <div class="LO_2  LO_even "></div> <div class="LO_3  LO_odd  "></div> <div class="LO_4  LO_even "></div> <div class="LO_5  LO_odd  "></div> <div class="LO_6  LO_even "></div> <div class="LO_7  LO_odd  "></div> <div class="LO_8  LO_even "></div> <div class="LO_9  LO_odd  "></div> <div class="LO_10 LO_even "></div> <div class="LO_11 LO_odd  "></div> <div class="LO_12 LO_even "></div> <div class="LO_13 LO_odd  "></div> <div class="LO_14 LO_even "></div> <div class="LO_15 LO_odd  "></div> <div class="LO_16 LO_even "></div> <div class="LO_17 LO_odd  "></div> <div class="LO_18 LO_even "></div> <div class="LO_19 LO_odd  "></div> <div class="LO_20 LO_even "></div> <div class="LO_21 LO_odd  "></div> <div class="LO_22 LO_even "></div> <div class="LO_23 LO_odd  "></div> <div class="LO_24 LO_even "></div> <div class="LO_25 LO_odd  "></div> <div class="LO_26 LO_even "></div> <div class="LO_27 LO_odd  "></div> <div class="LO_28 LO_even "></div> <div class="LO_29 LO_odd  "></div> <div class="LO_30 LO_even "></div> <div class="LO_31 LO_odd  "></div> <div class="LO_32 LO_even "></div> <div class="LO_33 LO_odd  "></div> <div class="LO_34 LO_even "></div> <div class="LO_35 LO_odd  "></div> <div class="LO_36 LO_even "></div> <div class="LO_37 LO_odd  "></div> <div class="LO_38 LO_even "></div> <div class="LO_39 LO_odd  "></div> <div class="LO_40 LO_even "></div> <div class="LO_41 LO_odd  "></div> <div class="LO_42 LO_even "></div> <div class="LO_43 LO_odd  "></div> <div class="LO_44 LO_even "></div> <div class="LO_45 LO_odd  "></div> <div class="LO_46 LO_even "></div> <div class="LO_47 LO_odd  "></div> <div class="LO_48 LO_even "></div> <div class="LO_49 LO_odd  "></div> <div class="LO_50 LO_even "></div>
		</div>

		<div id="layover" class="layers lay">
			<div class="closer" ng-click="layoverClick('lay')"><span></span></div>
			<div class="layover_interior">
			
				<div class="about">
					<h1><span><span ng-click="layoverClick('lay open open_about')">About</span></span></h1>
					<div class="layover_content">
						<div class="layover_content_interior">
							<p><span class="inlineLogo">[con.ject]</span> is yet another pet project of Mike Fischer.</p>

							<p>It is set in Julieta Ulanovsky’s Montserrat, and Sebastian Kosch’s Crimson.</p>

							<p>It is built with <a href="https://angularjs.org/" target="_blank">Angular.js</a>.</p>

							<p>It utilizes <a href="http://thesaurus.altervista.org/" target="_blank">Altervista's Thesaurus</a> for synonyms, and <a href="http://mymemory.translated.net/doc/spec.php" target="_blank">the MyMemory Translate API</a> for translation.</p>

							<p>It is born out of, among other things, the frustration of needing to quickly and efficiently go between languages in one concise place, in the scale of sentences and words. </p>

							<p>It is still very much in beta.</p>

							<p>I would dearly appreciate any <a href="mailto:e@ject.ch">feedback</a> you might have.</p>

							<p>&copy; 2015 Mike Fischer</p>
						</div>
					</div>
				</div>
				<div class="help">
					<h1><span><span ng-click="layoverClick('lay open open_help'); helpInit();">How to use</span></span></h1>
					<div class="layover_content">
						<div class="layover_content_interior">

							<p><span class="inlineLogo">[con.ject]</span> works just like your favorite translator, but even better.</p>

							<p>
								Press 
								<span class="buttons">
									<span class="mac">cmd</span>
									<span class="windows">ctrl</span> + 
									<span>enter</span> 
								</span>
								to translate your text.
							</p>

							<p>All translated words have synonyms.</p>

							<p>Don't even think about selecting text with your grubby cursor.</p>

							<p>Copy a word by double clicking it.</p>

							<p>Copy a block by double clicking its background.</p>

							<p>The keyboard shortcuts you're used to, like</p>

							<p>
								<span class="buttons">									
									<span class="mac">cmd</span>
									<span class="windows">ctrl</span> + 
									<span>c</span>,
								</span>

								<span class="buttons">
									<span class="mac">cmd</span>
									<span class="windows">ctrl</span> + 
									<span>v</span>,		
								</span>					
							</p>

							<p>
								<span class="buttons"><span>&#8593;</span>,</span>
								<span class="buttons"><span>&#8595;</span>,</span>
								<span class="buttons"><span>tab</span>,</span>
								<span class="buttons">
									<span>shift</span> + 
									<span>tab</span>,
								</span>
							</p>

							<p>etc.; all work like they should, where appropriate.</p>

							<p>The diamond in the middle resizes the two halves.</p>

							<div class="quadratShowing">
								<div class="quadrat">
									<div class="spin">
										<div class="quadrant one"  ></div>
										<div class="quadrant two"  ></div>
										<div class="quadrant three"></div>
										<div class="quadrant four" ></div>
									</div>
								</div>
							</div>

							<p>The circle inside the diamond brings you back to the main menu.</p>

							<div class="quadratShowing">
								<div class="quadrat ic ">
									<div class="spin">
										<div class="unlock"></div>
										<div class="quadrant one"  ></div>
										<div class="quadrant two"  ></div>
										<div class="quadrant three"></div>
										<div class="quadrant four" ></div>
									</div>
								</div>
							</div>

							<p>Pretty neat, huh?</p>

							<p>If you have an idea for <span class="inlineLogo">[con.ject]</span>, <a href="mailto:e@ject.ch">I’d love to hear it</a>.</p>

						</div>
					</div>
				</div>
				<div class="hello">
					<h1 class="logo"><span><span ng-click="layoverClick('')">[CON.JECT]</span></span></h1>
					<h1 class="pep"><span><span ng-click="layoverClick('')">Let's go!</span></span></h1>
				</div>
				<div class="langselect_from">
					<h1>
						<span>
							<span ng-click="layoverClick('lay open open_langselect_from')">
								Foreign Tongue (<span class="lang-{{tongueUser.strange}}" ng-bind="tongueUser.strange"></span>)
							</span>
						</span>
					</h1>

					<div class="layover_content unturned">
						<div class="layover_content_interior">
							<li
								ng-repeat="(key, data) in tongueAvailable"
								ng-click="setTongue('strange', key)"
							><span><span>{{data.display}} <span>({{data.translate}})</span></span></span></li>
						</div>
					</div>
				</div>
				<div class="langselect_to">
					<h1>
						<span>
							<span ng-click="layoverClick('lay open open_langselect_to')">
								Familiar Tongue (<span ng-bind="tongueUser.mother"></span>)
							</span>
						</span>
					</h1>

					<div class="layover_content unturned">
						<div class="layover_content_interior">
							<li
								ng-repeat="(key, data) in tongueAvailable"
								ng-click="setTongue('mother', key)"
							><span><span>{{data.display}} <span>({{data.translate}})</span></span></span></li>
						</div>
					</div>
				</div>

			</div>
		</div>

	</div>

<script type="text/javascript">

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while ( c.charAt(0)==' ' ) c = c.substring(1, c.length);
			if ( c.indexOf(nameEQ) == 0 ) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}

	var lay_loadover = document.getElementById('loadover');
	var lay_layover = document.getElementById('layover');

	if ( readCookie('okaytheygotit') === 'true' ){
		// $layers.removeClass().addClass('layers')
		lay_loadover.className = 'layers'
		lay_layover.className = 'layers'
	}
	else if ( !readCookie('okaytheygotit') ){
		// $layers.removeClass().addClass('layers lay')
		lay_loadover.className = 'layers lay'
		lay_layover.className = 'layers lay'
	}

</script>

<script type="text/javascript" src="js/master-m.js"></script>

</body>

</html>