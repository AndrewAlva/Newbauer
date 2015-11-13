$(document).ready(function(){
	// LINKS
		$('.gotonoticias').click(function(event) {
			window.location.href = "noticias.html";
		});

		$('.gotoproducts').click(function(event) {
			window.location.href = "productos.html";
		});

		$('#linkDistribuidores').click(function() {
			window.location.href = "distribuidores.html";
		});
	// END LINKS

	// FOOTER HEIGHT ANIMATION
		$('.shiftheight').click(function(event) {
			$('.outindex').toggleClass('altomenus');
			$('#subnoticia').toggleClass('suboutindex');
			$('#subproducto').toggleClass('suboutindex');
			$('#subpromocion').toggleClass('suboutindex');
			$('.barrafinal').toggleClass('bfoutindex');
			$('.footprint').toggleClass('fpoutindex');
			$('.bfincontact').toggleClass('openbfincontact');
			$('.fpincontact').toggleClass('openfpincontact');

			// double thinking
			$('.inProducts').toggleClass('altomenus');
			$('.barraFinalProducts').toggleClass('bfinProducts');
			$('.productsFootPrint').toggleClass('fpinProducts');

			// corner 3 hidding
			$('.corner3').toggleClass('crystal');

		});
	// END FOOTER HEIGHT ANIMATION

	

	// NOSOTROS CONTENIDO
		$('#bauerclick').click(function(){
			$('#bauerclick').addClass('act');
			$('#bauerclick').removeClass('noact');
			$('#bauercontent').show('5000');

			$('#misionclick').addClass('noact');
			$('#misionclick').removeClass('act');
			$('#misioncontent').hide('500');

			$('#visionclick').addClass('noact');
			$('#visionclick').removeClass('act');
			$('#visioncontent').hide('500');

			$('#filosclick').addClass('noact');
			$('#filosclick').removeClass('act');
			$('#filoscontent').hide('500');

			$('#pho-newbauer').delay('500').show('5000');
			$('#pho-mision').hide('500');
			$('#pho-vision').hide('500');
			$('#pho-filosofia').hide('500');
			$('#pho-valores').hide('500');

			$('#valoresclick').addClass('noact');
			$('#valoresclick').removeClass('act');
			$('#valorescontent').hide('500');

		});

		$('#misionclick').click(function(){
			$('#misionclick').addClass('act');
			$('#misionclick').removeClass('noact');
			$('#misioncontent').show('5000');

			$('#bauerclick').addClass('noact');
			$('#bauerclick').removeClass('act');
			$('#bauercontent').hide('500');

			$('#visionclick').addClass('noact');
			$('#visionclick').removeClass('act');
			$('#visioncontent').hide('500');

			$('#filosclick').addClass('noact');
			$('#filosclick').removeClass('act');
			$('#filoscontent').hide('500');

			$('#pho-mision').delay('500').show('5000');
			$('#pho-newbauer').hide('500');
			$('#pho-vision').hide('500');
			$('#pho-filosofia').hide('500');
			$('#pho-valores').hide('500');

			$('#valoresclick').addClass('noact');
			$('#valoresclick').removeClass('act');
			$('#valorescontent').hide('500');

		});

		$('#visionclick').click(function(){
			$('#visionclick').addClass('act');
			$('#visionclick').removeClass('noact');
			$('#visioncontent').show('5000');

			$('#misionclick').addClass('noact');
			$('#misionclick').removeClass('act');
			$('#misioncontent').hide('500');

			$('#bauerclick').addClass('noact');
			$('#bauerclick').removeClass('act');
			$('#bauercontent').hide('500');

			$('#filosclick').addClass('noact');
			$('#filosclick').removeClass('act');
			$('#filoscontent').hide('500');

			$('#pho-vision').delay('500').show('5000');
			$('#pho-mision').hide('500');
			$('#pho-newbauer').hide('500');
			$('#pho-filosofia').hide('500');
			$('#pho-valores').hide('500');

			$('#valoresclick').addClass('noact');
			$('#valoresclick').removeClass('act');
			$('#valorescontent').hide('500');

		});

		$('#filosclick').click(function(){
			$('#filosclick').addClass('act');
			$('#filosclick').removeClass('noact');
			$('#filoscontent').show('5000');

			$('#misionclick').addClass('noact');
			$('#misionclick').removeClass('act');
			$('#misioncontent').hide('500');

			$('#visionclick').addClass('noact');
			$('#visionclick').removeClass('act');
			$('#visioncontent').hide('500');

			$('#bauerclick').addClass('noact');
			$('#bauerclick').removeClass('act');
			$('#bauercontent').hide('500');

			$('#pho-filosofia').delay('500').show('5000');
			$('#pho-mision').hide('500');
			$('#pho-vision').hide('500');
			$('#pho-newbauer').hide('500');
			$('#pho-valores').hide('500');

			$('#valoresclick').addClass('noact');
			$('#valoresclick').removeClass('act');
			$('#valorescontent').hide('500');

		});

		$('#valoresclick').click(function(){
			$('#valoresclick').addClass('act');
			$('#valoresclick').removeClass('noact');
			$('#valorescontent').show('5000');


			$('#misionclick').addClass('noact');
			$('#misionclick').removeClass('act');
			$('#misioncontent').hide('500');

			$('#visionclick').addClass('noact');
			$('#visionclick').removeClass('act');
			$('#visioncontent').hide('500');

			$('#bauerclick').addClass('noact');
			$('#bauerclick').removeClass('act');
			$('#bauercontent').hide('500');

			$('#filosclick').addClass('noact');
			$('#filosclick').removeClass('act');
			$('#filoscontent').hide('500');

			$('#pho-valores').delay('500').show('5000');
			$('#pho-filosofia').hide('500');
			$('#pho-mision').hide('500');
			$('#pho-vision').hide('500');
			$('#pho-newbauer').hide('500');

		});
	// NOSOTROS CONTENIDO


	// BENEFICIOS CONTENIDO

		$('#benclick').click(function(){
			$('#benclick').addClass('act');
			$('#benclick').removeClass('noact');

			$('#disclick').addClass('noact');
			$('#disclick').removeClass('act');

			$('#bencontent').show('5000');
			$('#discontent').hide('500');

			$('#pho-beneficios').delay('500').show('5000');
			$('#pho-distribucion').hide('500');

		});

		$('#disclick').click(function(){
			$('#benclick').addClass('noact');
			$('#benclick').removeClass('act');

			$('#disclick').addClass('act');
			$('#disclick').removeClass('noact');

			$('#discontent').show('5000');
			$('#bencontent').hide('500');

			$('#pho-distribucion').delay('500').show('5000');
			$('#pho-beneficios').hide('500');
			

		});
	// END BENEFICIOS CONTENIDO


	////////////////////////////////INIT PRODUCTOS VIEJO////////////////////////////////
		$('#title-fdeamonio').click(function(){
			$('#prod-fdeamonio').show('5000');
			$('#pho-fdeamonio').delay('500').show('5000');
			$('#title-fdeamonio').addClass('prod-act');

			$('#prod-fmonopotasico').hide('500');
			$('#prod-ndeamonio').hide('500');
			$('#prod-ndecalcio').hide('500');
			$('#prod-ndemagnesio').hide('500');
			$('#prod-ndepotasio').hide('500');
			$('#prod-ndezinc').hide('500');
			$('#prod-uan32').hide('500');

			$('#pho-fmonopotasico').hide('500');
			$('#pho-ndeamonio').hide('500');
			$('#pho-ndecalcio').hide('500');
			$('#pho-ndemagnesio').hide('500');
			$('#pho-ndepotasio').hide('500');
			$('#pho-ndezinc').hide('500');
			$('#pho-uan32').hide('500');

			$('#title-fmonopotasico').removeClass('prod-act');
			$('#title-ndeamonio').removeClass('prod-act');
			$('#title-ndecalcio').removeClass('prod-act');
			$('#title-ndemagnesio').removeClass('prod-act');
			$('#title-ndepotasio').removeClass('prod-act');
			$('#title-ndezinc').removeClass('prod-act');
			$('#title-uan32').removeClass('prod-act');
		});

		$('#title-fmonopotasico').click(function(){
			$('#prod-fmonopotasico').show('5000');
			$('#pho-fmonopotasico').delay('500').show('5000');
			$('#title-fmonopotasico').addClass('prod-act');

			$('#prod-fdeamonio').hide('500');
			$('#prod-ndeamonio').hide('500');
			$('#prod-ndecalcio').hide('500');
			$('#prod-ndemagnesio').hide('500');
			$('#prod-ndepotasio').hide('500');
			$('#prod-ndezinc').hide('500');
			$('#prod-uan32').hide('500');

			$('#pho-fdeamonio').hide('500');
			$('#pho-ndeamonio').hide('500');
			$('#pho-ndecalcio').hide('500');
			$('#pho-ndemagnesio').hide('500');
			$('#pho-ndepotasio').hide('500');
			$('#pho-ndezinc').hide('500');
			$('#pho-uan32').hide('500');

			$('#title-fdeamonio').removeClass('prod-act');
			$('#title-ndeamonio').removeClass('prod-act');
			$('#title-ndecalcio').removeClass('prod-act');
			$('#title-ndemagnesio').removeClass('prod-act');
			$('#title-ndepotasio').removeClass('prod-act');
			$('#title-ndezinc').removeClass('prod-act');
			$('#title-uan32').removeClass('prod-act');
		});

		$('#title-ndeamonio').click(function(){
			$('#prod-ndeamonio').show('5000');
			$('#pho-ndeamonio').delay('500').show('5000');
			$('#title-ndeamonio').addClass('prod-act');

			$('#prod-fdeamonio').hide('500');
			$('#prod-fmonopotasico').hide('500');
			$('#prod-ndecalcio').hide('500');
			$('#prod-ndemagnesio').hide('500');
			$('#prod-ndepotasio').hide('500');
			$('#prod-ndezinc').hide('500');
			$('#prod-uan32').hide('500');

			$('#pho-fdeamonio').hide('500');
			$('#pho-fmonopotasico').hide('500');
			$('#pho-ndecalcio').hide('500');
			$('#pho-ndemagnesio').hide('500');
			$('#pho-ndepotasio').hide('500');
			$('#pho-ndezinc').hide('500');
			$('#pho-uan32').hide('500');

			$('#title-fdeamonio').removeClass('prod-act');
			$('#title-fmonopotasico').removeClass('prod-act');
			$('#title-ndecalcio').removeClass('prod-act');
			$('#title-ndemagnesio').removeClass('prod-act');
			$('#title-ndepotasio').removeClass('prod-act');
			$('#title-ndezinc').removeClass('prod-act');
			$('#title-uan32').removeClass('prod-act');
		});

		$('#title-ndecalcio').click(function(){
			$('#prod-ndecalcio').show('5000');
			$('#pho-ndecalcio').delay('500').show('5000');
			$('#title-ndecalcio').addClass('prod-act');

			$('#prod-fmonopotasico').hide('500');
			$('#prod-ndeamonio').hide('500');
			$('#prod-fdeamonio').hide('500');
			$('#prod-ndemagnesio').hide('500');
			$('#prod-ndepotasio').hide('500');
			$('#prod-ndezinc').hide('500');
			$('#prod-uan32').hide('500');

			$('#pho-fmonopotasico').hide('500');
			$('#pho-ndeamonio').hide('500');
			$('#pho-fdeamonio').hide('500');
			$('#pho-ndemagnesio').hide('500');
			$('#pho-ndepotasio').hide('500');
			$('#pho-ndezinc').hide('500');
			$('#pho-uan32').hide('500');

			$('#title-fmonopotasico').removeClass('prod-act');
			$('#title-ndeamonio').removeClass('prod-act');
			$('#title-fdeamonio').removeClass('prod-act');
			$('#title-ndemagnesio').removeClass('prod-act');
			$('#title-ndepotasio').removeClass('prod-act');
			$('#title-ndezinc').removeClass('prod-act');
			$('#title-uan32').removeClass('prod-act');
		});

		$('#title-ndemagnesio').click(function(){
			$('#prod-ndemagnesio').show('5000');
			$('#pho-ndemagnesio').delay('500').show('5000');
			$('#title-ndemagnesio').addClass('prod-act');

			$('#prod-fmonopotasico').hide('500');
			$('#prod-ndeamonio').hide('500');
			$('#prod-ndecalcio').hide('500');
			$('#prod-fdeamonio').hide('500');
			$('#prod-ndepotasio').hide('500');
			$('#prod-ndezinc').hide('500');
			$('#prod-uan32').hide('500');

			$('#pho-fmonopotasico').hide('500');
			$('#pho-ndeamonio').hide('500');
			$('#pho-ndecalcio').hide('500');
			$('#pho-fdeamonio').hide('500');
			$('#pho-ndepotasio').hide('500');
			$('#pho-ndezinc').hide('500');
			$('#pho-uan32').hide('500');

			$('#title-fmonopotasico').removeClass('prod-act');
			$('#title-ndeamonio').removeClass('prod-act');
			$('#title-ndecalcio').removeClass('prod-act');
			$('#title-fdeamonio').removeClass('prod-act');
			$('#title-ndepotasio').removeClass('prod-act');
			$('#title-ndezinc').removeClass('prod-act');
			$('#title-uan32').removeClass('prod-act');
		});

		$('#title-ndepotasio').click(function(){
			$('#prod-ndepotasio').show('5000');
			$('#pho-ndepotasio').delay('500').show('5000');
			$('#title-ndepotasio').addClass('prod-act');

			$('#prod-fmonopotasico').hide('500');
			$('#prod-ndeamonio').hide('500');
			$('#prod-ndecalcio').hide('500');
			$('#prod-ndemagnesio').hide('500');
			$('#prod-fdeamonio').hide('500');
			$('#prod-ndezinc').hide('500');
			$('#prod-uan32').hide('500');

			$('#pho-fmonopotasico').hide('500');
			$('#pho-ndeamonio').hide('500');
			$('#pho-ndecalcio').hide('500');
			$('#pho-ndemagnesio').hide('500');
			$('#pho-fdeamonio').hide('500');
			$('#pho-ndezinc').hide('500');
			$('#pho-uan32').hide('500');

			$('#title-fmonopotasico').removeClass('prod-act');
			$('#title-ndeamonio').removeClass('prod-act');
			$('#title-ndecalcio').removeClass('prod-act');
			$('#title-ndemagnesio').removeClass('prod-act');
			$('#title-fdeamonio').removeClass('prod-act');
			$('#title-ndezinc').removeClass('prod-act');
			$('#title-uan32').removeClass('prod-act');
		});

		$('#title-ndezinc').click(function(){
			$('#prod-ndezinc').show('5000');
			$('#pho-ndezinc').delay('500').show('5000');
			$('#title-ndezinc').addClass('prod-act');

			$('#prod-fmonopotasico').hide('500');
			$('#prod-ndeamonio').hide('500');
			$('#prod-ndecalcio').hide('500');
			$('#prod-ndemagnesio').hide('500');
			$('#prod-ndepotasio').hide('500');
			$('#prod-fdeamonio').hide('500');
			$('#prod-uan32').hide('500');

			$('#pho-fmonopotasico').hide('500');
			$('#pho-ndeamonio').hide('500');
			$('#pho-ndecalcio').hide('500');
			$('#pho-ndemagnesio').hide('500');
			$('#pho-ndepotasio').hide('500');
			$('#pho-fdeamonio').hide('500');
			$('#pho-uan32').hide('500');

			$('#title-fmonopotasico').removeClass('prod-act');
			$('#title-ndeamonio').removeClass('prod-act');
			$('#title-ndecalcio').removeClass('prod-act');
			$('#title-ndemagnesio').removeClass('prod-act');
			$('#title-ndepotasio').removeClass('prod-act');
			$('#title-fdeamonio').removeClass('prod-act');
			$('#title-uan32').removeClass('prod-act');
		});

		$('#title-uan32').click(function(){
			$('#prod-uan32').show('5000');
			$('#pho-uan32').delay('500').show('5000');
			$('#title-uan32').addClass('prod-act');

			$('#prod-fmonopotasico').hide('500');
			$('#prod-ndeamonio').hide('500');
			$('#prod-ndecalcio').hide('500');
			$('#prod-ndemagnesio').hide('500');
			$('#prod-ndepotasio').hide('500');
			$('#prod-ndezinc').hide('500');
			$('#prod-fdeamonio').hide('500');

			$('#pho-fmonopotasico').hide('500');
			$('#pho-ndeamonio').hide('500');
			$('#pho-ndecalcio').hide('500');
			$('#pho-ndemagnesio').hide('500');
			$('#pho-ndepotasio').hide('500');
			$('#pho-ndezinc').hide('500');
			$('#pho-fdeamonio').hide('500');

			$('#title-fmonopotasico').removeClass('prod-act');
			$('#title-ndeamonio').removeClass('prod-act');
			$('#title-ndecalcio').removeClass('prod-act');
			$('#title-ndemagnesio').removeClass('prod-act');
			$('#title-ndepotasio').removeClass('prod-act');
			$('#title-ndezinc').removeClass('prod-act');
			$('#title-fdeamonio').removeClass('prod-act');
		});
	////////////////////////////////END PRODUCTOS VIEJO////////////////////////////////

	//////////////////////////////// INIT PRODUCTOS NUEVO ////////////////////////////////
		setTimeout(function(){
			$('.productsNavBars').removeClass('showProductsBars');
		},500);

		$('#newNavCalcium').click(function() {
			$('#iconCalcium').addClass('currentBlock');
			$('#iconZinc').removeClass('currentBlock');
			$('#icon8-24-0').removeClass('currentBlock');
			$('#iconMKP').removeClass('currentBlock');
			$('#iconUan32').removeClass('currentBlock');
			$('#iconNS40').removeClass('currentBlock');
			$('#iconMagnesium').removeClass('currentBlock');
			$('#iconNitratos').removeClass('currentBlock');
			$('#iconAmmonium').removeClass('currentBlock');
			$('#iconPotasium').removeClass('currentBlock');

			$('#newLetterCalcium').removeClass('SlideOut');
			$('#newLetterZinc').addClass('SlideOut');
			$('#newLetter8-24-0').addClass('SlideOut');
			$('#newLetterMKP').addClass('SlideOut');
			$('#newLetterUan32').addClass('SlideOut');
			$('#newLetterNS40').addClass('SlideOut');
			$('#newLetterMagnesium').addClass('SlideOut');
			$('#newLetterNitratos').addClass('SlideOut');
			$('#newLetterAmmonium').addClass('SlideOut');
			$('#newLetterPotasium').addClass('SlideOut');

			$('#newCalciumInfo').removeClass('SlideOut');
			$('#newZincInfo').addClass('SlideOut');
			$('#new8-24-0Info').addClass('SlideOut');
			$('#newMKPInfo').addClass('SlideOut');
			$('#newUan32Info').addClass('SlideOut');
			$('#newNS40Info').addClass('SlideOut');
			$('#newMagnesiumInfo').addClass('SlideOut');
			$('#newNitratosInfo').addClass('SlideOut');
			$('#newAmmoniumInfo').addClass('SlideOut');
			$('#newPotasiumInfo').addClass('SlideOut');

			$('#newCalciumInfo').addClass('inFront');
			$('#newZincInfo').removeClass('inFront');
			$('#new8-24-0Info').removeClass('inFront');
			$('#newMKPInfo').removeClass('inFront');
			$('#newUan32Info').removeClass('inFront');
			$('#newNS40Info').removeClass('inFront');
			$('#newMagnesiumInfo').removeClass('inFront');
			$('#newNitratosInfo').removeClass('inFront');
			$('#newAmmoniumInfo').removeClass('inFront');
			$('#newPotasiumInfo').removeClass('inFront');
		});

		$('#newNavZinc').click(function() {
			$('#iconCalcium').removeClass('currentBlock');
			$('#iconZinc').addClass('currentBlock');
			$('#icon8-24-0').removeClass('currentBlock');
			$('#iconMKP').removeClass('currentBlock');
			$('#iconUan32').removeClass('currentBlock');
			$('#iconNS40').removeClass('currentBlock');
			$('#iconMagnesium').removeClass('currentBlock');
			$('#iconNitratos').removeClass('currentBlock');
			$('#iconAmmonium').removeClass('currentBlock');
			$('#iconPotasium').removeClass('currentBlock');

			$('#newLetterCalcium').addClass('SlideOut');
			$('#newLetterZinc').removeClass('SlideOut');
			$('#newLetter8-24-0').addClass('SlideOut');
			$('#newLetterMKP').addClass('SlideOut');
			$('#newLetterUan32').addClass('SlideOut');
			$('#newLetterNS40').addClass('SlideOut');
			$('#newLetterMagnesium').addClass('SlideOut');
			$('#newLetterNitratos').addClass('SlideOut');
			$('#newLetterAmmonium').addClass('SlideOut');
			$('#newLetterPotasium').addClass('SlideOut');

			$('#newCalciumInfo').addClass('SlideOut');
			$('#newZincInfo').removeClass('SlideOut');
			$('#new8-24-0Info').addClass('SlideOut');
			$('#newMKPInfo').addClass('SlideOut');
			$('#newUan32Info').addClass('SlideOut');
			$('#newNS40Info').addClass('SlideOut');
			$('#newMagnesiumInfo').addClass('SlideOut');
			$('#newNitratosInfo').addClass('SlideOut');
			$('#newAmmoniumInfo').addClass('SlideOut');
			$('#newPotasiumInfo').addClass('SlideOut');

			$('#newCalciumInfo').removeClass('inFront');
			$('#newZincInfo').addClass('inFront');
			$('#new8-24-0Info').removeClass('inFront');
			$('#newMKPInfo').removeClass('inFront');
			$('#newUan32Info').removeClass('inFront');
			$('#newNS40Info').removeClass('inFront');
			$('#newMagnesiumInfo').removeClass('inFront');
			$('#newNitratosInfo').removeClass('inFront');
			$('#newAmmoniumInfo').removeClass('inFront');
			$('#newPotasiumInfo').removeClass('inFront');
		});

		$('#newNav8-24-0').click(function() {
			$('#iconCalcium').removeClass('currentBlock');
			$('#iconZinc').removeClass('currentBlock');
			$('#icon8-24-0').addClass('currentBlock');
			$('#iconMKP').removeClass('currentBlock');
			$('#iconUan32').removeClass('currentBlock');
			$('#iconNS40').removeClass('currentBlock');
			$('#iconMagnesium').removeClass('currentBlock');
			$('#iconNitratos').removeClass('currentBlock');
			$('#iconAmmonium').removeClass('currentBlock');
			$('#iconPotasium').removeClass('currentBlock');

			$('#newLetterCalcium').addClass('SlideOut');
			$('#newLetterZinc').addClass('SlideOut');
			$('#newLetter8-24-0').removeClass('SlideOut');
			$('#newLetterMKP').addClass('SlideOut');
			$('#newLetterUan32').addClass('SlideOut');
			$('#newLetterNS40').addClass('SlideOut');
			$('#newLetterMagnesium').addClass('SlideOut');
			$('#newLetterNitratos').addClass('SlideOut');
			$('#newLetterAmmonium').addClass('SlideOut');
			$('#newLetterPotasium').addClass('SlideOut');

			$('#newCalciumInfo').addClass('SlideOut');
			$('#newZincInfo').addClass('SlideOut');
			$('#new8-24-0Info').removeClass('SlideOut');
			$('#newMKPInfo').addClass('SlideOut');
			$('#newUan32Info').addClass('SlideOut');
			$('#newNS40Info').addClass('SlideOut');
			$('#newMagnesiumInfo').addClass('SlideOut');
			$('#newNitratosInfo').addClass('SlideOut');
			$('#newAmmoniumInfo').addClass('SlideOut');
			$('#newPotasiumInfo').addClass('SlideOut');

			$('#newCalciumInfo').removeClass('inFront');
			$('#newZincInfo').removeClass('inFront');
			$('#new8-24-0Info').addClass('inFront');
			$('#newMKPInfo').removeClass('inFront');
			$('#newUan32Info').removeClass('inFront');
			$('#newNS40Info').removeClass('inFront');
			$('#newMagnesiumInfo').removeClass('inFront');
			$('#newNitratosInfo').removeClass('inFront');
			$('#newAmmoniumInfo').removeClass('inFront');
			$('#newPotasiumInfo').removeClass('inFront');
		});

		$('#newNavMKP').click(function() {
			$('#iconCalcium').removeClass('currentBlock');
			$('#iconZinc').removeClass('currentBlock');
			$('#icon8-24-0').removeClass('currentBlock');
			$('#iconMKP').addClass('currentBlock');
			$('#iconUan32').removeClass('currentBlock');
			$('#iconNS40').removeClass('currentBlock');
			$('#iconMagnesium').removeClass('currentBlock');
			$('#iconNitratos').removeClass('currentBlock');
			$('#iconAmmonium').removeClass('currentBlock');
			$('#iconPotasium').removeClass('currentBlock');

			$('#newLetterCalcium').addClass('SlideOut');
			$('#newLetterZinc').addClass('SlideOut');
			$('#newLetter8-24-0').addClass('SlideOut');
			$('#newLetterMKP').removeClass('SlideOut');
			$('#newLetterUan32').addClass('SlideOut');
			$('#newLetterNS40').addClass('SlideOut');
			$('#newLetterMagnesium').addClass('SlideOut');
			$('#newLetterNitratos').addClass('SlideOut');
			$('#newLetterAmmonium').addClass('SlideOut');
			$('#newLetterPotasium').addClass('SlideOut');

			$('#newCalciumInfo').addClass('SlideOut');
			$('#newZincInfo').addClass('SlideOut');
			$('#new8-24-0Info').addClass('SlideOut');
			$('#newMKPInfo').removeClass('SlideOut');
			$('#newUan32Info').addClass('SlideOut');
			$('#newNS40Info').addClass('SlideOut');
			$('#newMagnesiumInfo').addClass('SlideOut');
			$('#newNitratosInfo').addClass('SlideOut');
			$('#newAmmoniumInfo').addClass('SlideOut');
			$('#newPotasiumInfo').addClass('SlideOut');

			$('#newCalciumInfo').removeClass('inFront');
			$('#newZincInfo').removeClass('inFront');
			$('#new8-24-0Info').removeClass('inFront');
			$('#newMKPInfo').addClass('inFront');
			$('#newUan32Info').removeClass('inFront');
			$('#newNS40Info').removeClass('inFront');
			$('#newMagnesiumInfo').removeClass('inFront');
			$('#newNitratosInfo').removeClass('inFront');
			$('#newAmmoniumInfo').removeClass('inFront');
			$('#newPotasiumInfo').removeClass('inFront');
		});

		$('#newNavUan32').click(function() {
			$('#iconCalcium').removeClass('currentBlock');
			$('#iconZinc').removeClass('currentBlock');
			$('#icon8-24-0').removeClass('currentBlock');
			$('#iconMKP').removeClass('currentBlock');
			$('#iconUan32').addClass('currentBlock');
			$('#iconNS40').removeClass('currentBlock');
			$('#iconMagnesium').removeClass('currentBlock');
			$('#iconNitratos').removeClass('currentBlock');
			$('#iconAmmonium').removeClass('currentBlock');
			$('#iconPotasium').removeClass('currentBlock');

			$('#newLetterCalcium').addClass('SlideOut');
			$('#newLetterZinc').addClass('SlideOut');
			$('#newLetter8-24-0').addClass('SlideOut');
			$('#newLetterMKP').addClass('SlideOut');
			$('#newLetterUan32').removeClass('SlideOut');
			$('#newLetterNS40').addClass('SlideOut');
			$('#newLetterMagnesium').addClass('SlideOut');
			$('#newLetterNitratos').addClass('SlideOut');
			$('#newLetterAmmonium').addClass('SlideOut');
			$('#newLetterPotasium').addClass('SlideOut');

			$('#newCalciumInfo').addClass('SlideOut');
			$('#newZincInfo').addClass('SlideOut');
			$('#new8-24-0Info').addClass('SlideOut');
			$('#newMKPInfo').addClass('SlideOut');
			$('#newUan32Info').removeClass('SlideOut');
			$('#newNS40Info').addClass('SlideOut');
			$('#newMagnesiumInfo').addClass('SlideOut');
			$('#newNitratosInfo').addClass('SlideOut');
			$('#newAmmoniumInfo').addClass('SlideOut');
			$('#newPotasiumInfo').addClass('SlideOut');

			$('#newCalciumInfo').removeClass('inFront');
			$('#newZincInfo').removeClass('inFront');
			$('#new8-24-0Info').removeClass('inFront');
			$('#newMKPInfo').removeClass('inFront');
			$('#newUan32Info').addClass('inFront');
			$('#newNS40Info').removeClass('inFront');
			$('#newMagnesiumInfo').removeClass('inFront');
			$('#newNitratosInfo').removeClass('inFront');
			$('#newAmmoniumInfo').removeClass('inFront');
			$('#newPotasiumInfo').removeClass('inFront');
		});

		$('#newNavNS40').click(function() {
			$('#iconCalcium').removeClass('currentBlock');
			$('#iconZinc').removeClass('currentBlock');
			$('#icon8-24-0').removeClass('currentBlock');
			$('#iconMKP').removeClass('currentBlock');
			$('#iconUan32').removeClass('currentBlock');
			$('#iconNS40').addClass('currentBlock');
			$('#iconMagnesium').removeClass('currentBlock');
			$('#iconNitratos').removeClass('currentBlock');
			$('#iconAmmonium').removeClass('currentBlock');
			$('#iconPotasium').removeClass('currentBlock');

			$('#newLetterCalcium').addClass('SlideOut');
			$('#newLetterZinc').addClass('SlideOut');
			$('#newLetter8-24-0').addClass('SlideOut');
			$('#newLetterMKP').addClass('SlideOut');
			$('#newLetterUan32').addClass('SlideOut');
			$('#newLetterNS40').removeClass('SlideOut');
			$('#newLetterMagnesium').addClass('SlideOut');
			$('#newLetterNitratos').addClass('SlideOut');
			$('#newLetterAmmonium').addClass('SlideOut');
			$('#newLetterPotasium').addClass('SlideOut');

			$('#newCalciumInfo').addClass('SlideOut');
			$('#newZincInfo').addClass('SlideOut');
			$('#new8-24-0Info').addClass('SlideOut');
			$('#newMKPInfo').addClass('SlideOut');
			$('#newUan32Info').addClass('SlideOut');
			$('#newNS40Info').removeClass('SlideOut');
			$('#newMagnesiumInfo').addClass('SlideOut');
			$('#newNitratosInfo').addClass('SlideOut');
			$('#newAmmoniumInfo').addClass('SlideOut');
			$('#newPotasiumInfo').addClass('SlideOut');

			$('#newCalciumInfo').removeClass('inFront');
			$('#newZincInfo').removeClass('inFront');
			$('#new8-24-0Info').removeClass('inFront');
			$('#newMKPInfo').removeClass('inFront');
			$('#newUan32Info').removeClass('inFront');
			$('#newNS40Info').addClass('inFront');
			$('#newMagnesiumInfo').removeClass('inFront');
			$('#newNitratosInfo').removeClass('inFront');
			$('#newAmmoniumInfo').removeClass('inFront');
			$('#newPotasiumInfo').removeClass('inFront');
		});

		$('#newNavMagnesium').click(function() {
			$('#iconCalcium').removeClass('currentBlock');
			$('#iconZinc').removeClass('currentBlock');
			$('#icon8-24-0').removeClass('currentBlock');
			$('#iconMKP').removeClass('currentBlock');
			$('#iconUan32').removeClass('currentBlock');
			$('#iconNS40').removeClass('currentBlock');
			$('#iconMagnesium').addClass('currentBlock');
			$('#iconNitratos').removeClass('currentBlock');
			$('#iconAmmonium').removeClass('currentBlock');
			$('#iconPotasium').removeClass('currentBlock');

			$('#newLetterCalcium').addClass('SlideOut');
			$('#newLetterZinc').addClass('SlideOut');
			$('#newLetter8-24-0').addClass('SlideOut');
			$('#newLetterMKP').addClass('SlideOut');
			$('#newLetterUan32').addClass('SlideOut');
			$('#newLetterNS40').addClass('SlideOut');
			$('#newLetterMagnesium').removeClass('SlideOut');
			$('#newLetterNitratos').addClass('SlideOut');
			$('#newLetterAmmonium').addClass('SlideOut');
			$('#newLetterPotasium').addClass('SlideOut');

			$('#newCalciumInfo').addClass('SlideOut');
			$('#newZincInfo').addClass('SlideOut');
			$('#new8-24-0Info').addClass('SlideOut');
			$('#newMKPInfo').addClass('SlideOut');
			$('#newUan32Info').addClass('SlideOut');
			$('#newNS40Info').addClass('SlideOut');
			$('#newMagnesiumInfo').removeClass('SlideOut');
			$('#newNitratosInfo').addClass('SlideOut');
			$('#newAmmoniumInfo').addClass('SlideOut');
			$('#newPotasiumInfo').addClass('SlideOut');

			$('#newCalciumInfo').removeClass('inFront');
			$('#newZincInfo').removeClass('inFront');
			$('#new8-24-0Info').removeClass('inFront');
			$('#newMKPInfo').removeClass('inFront');
			$('#newUan32Info').removeClass('inFront');
			$('#newNS40Info').removeClass('inFront');
			$('#newMagnesiumInfo').addClass('inFront');
			$('#newNitratosInfo').removeClass('inFront');
			$('#newAmmoniumInfo').removeClass('inFront');
			$('#newPotasiumInfo').removeClass('inFront');
		});

		$('#newNavNitratos').click(function() {
			$('#iconCalcium').removeClass('currentBlock');
			$('#iconZinc').removeClass('currentBlock');
			$('#icon8-24-0').removeClass('currentBlock');
			$('#iconMKP').removeClass('currentBlock');
			$('#iconUan32').removeClass('currentBlock');
			$('#iconNS40').removeClass('currentBlock');
			$('#iconMagnesium').removeClass('currentBlock');
			$('#iconNitratos').addClass('currentBlock');
			$('#iconAmmonium').removeClass('currentBlock');
			$('#iconPotasium').removeClass('currentBlock');

			$('#newLetterCalcium').addClass('SlideOut');
			$('#newLetterZinc').addClass('SlideOut');
			$('#newLetter8-24-0').addClass('SlideOut');
			$('#newLetterMKP').addClass('SlideOut');
			$('#newLetterUan32').addClass('SlideOut');
			$('#newLetterNS40').addClass('SlideOut');
			$('#newLetterMagnesium').addClass('SlideOut');
			$('#newLetterNitratos').removeClass('SlideOut');
			$('#newLetterAmmonium').addClass('SlideOut');
			$('#newLetterPotasium').addClass('SlideOut');

			$('#newCalciumInfo').addClass('SlideOut');
			$('#newZincInfo').addClass('SlideOut');
			$('#new8-24-0Info').addClass('SlideOut');
			$('#newMKPInfo').addClass('SlideOut');
			$('#newUan32Info').addClass('SlideOut');
			$('#newNS40Info').addClass('SlideOut');
			$('#newMagnesiumInfo').addClass('SlideOut');
			$('#newNitratosInfo').removeClass('SlideOut');
			$('#newAmmoniumInfo').addClass('SlideOut');
			$('#newPotasiumInfo').addClass('SlideOut');

			$('#newCalciumInfo').removeClass('inFront');
			$('#newZincInfo').removeClass('inFront');
			$('#new8-24-0Info').removeClass('inFront');
			$('#newMKPInfo').removeClass('inFront');
			$('#newUan32Info').removeClass('inFront');
			$('#newNS40Info').removeClass('inFront');
			$('#newMagnesiumInfo').removeClass('inFront');
			$('#newNitratosInfo').addClass('inFront');
			$('#newAmmoniumInfo').removeClass('inFront');
			$('#newPotasiumInfo').removeClass('inFront');
		});

		$('#newNavAmmonium').click(function() {
			$('#iconCalcium').removeClass('currentBlock');
			$('#iconZinc').removeClass('currentBlock');
			$('#icon8-24-0').removeClass('currentBlock');
			$('#iconMKP').removeClass('currentBlock');
			$('#iconUan32').removeClass('currentBlock');
			$('#iconNS40').removeClass('currentBlock');
			$('#iconMagnesium').removeClass('currentBlock');
			$('#iconNitratos').removeClass('currentBlock');
			$('#iconAmmonium').addClass('currentBlock');
			$('#iconPotasium').removeClass('currentBlock');

			$('#newLetterCalcium').addClass('SlideOut');
			$('#newLetterZinc').addClass('SlideOut');
			$('#newLetter8-24-0').addClass('SlideOut');
			$('#newLetterMKP').addClass('SlideOut');
			$('#newLetterUan32').addClass('SlideOut');
			$('#newLetterNS40').addClass('SlideOut');
			$('#newLetterMagnesium').addClass('SlideOut');
			$('#newLetterNitratos').addClass('SlideOut');
			$('#newLetterAmmonium').removeClass('SlideOut');
			$('#newLetterPotasium').addClass('SlideOut');

			$('#newCalciumInfo').addClass('SlideOut');
			$('#newZincInfo').addClass('SlideOut');
			$('#new8-24-0Info').addClass('SlideOut');
			$('#newMKPInfo').addClass('SlideOut');
			$('#newUan32Info').addClass('SlideOut');
			$('#newNS40Info').addClass('SlideOut');
			$('#newMagnesiumInfo').addClass('SlideOut');
			$('#newNitratosInfo').addClass('SlideOut');
			$('#newAmmoniumInfo').removeClass('SlideOut');
			$('#newPotasiumInfo').addClass('SlideOut');

			$('#newCalciumInfo').removeClass('inFront');
			$('#newZincInfo').removeClass('inFront');
			$('#new8-24-0Info').removeClass('inFront');
			$('#newMKPInfo').removeClass('inFront');
			$('#newUan32Info').removeClass('inFront');
			$('#newNS40Info').removeClass('inFront');
			$('#newMagnesiumInfo').removeClass('inFront');
			$('#newNitratosInfo').removeClass('inFront');
			$('#newAmmoniumInfo').addClass('inFront');
			$('#newPotasiumInfo').removeClass('inFront');
		});

		$('#newNavPotasium').click(function() {
			$('#iconCalcium').removeClass('currentBlock');
			$('#iconZinc').removeClass('currentBlock');
			$('#icon8-24-0').removeClass('currentBlock');
			$('#iconMKP').removeClass('currentBlock');
			$('#iconUan32').removeClass('currentBlock');
			$('#iconNS40').removeClass('currentBlock');
			$('#iconMagnesium').removeClass('currentBlock');
			$('#iconNitratos').removeClass('currentBlock');
			$('#iconAmmonium').removeClass('currentBlock');
			$('#iconPotasium').addClass('currentBlock');

			$('#newLetterCalcium').addClass('SlideOut');
			$('#newLetterZinc').addClass('SlideOut');
			$('#newLetter8-24-0').addClass('SlideOut');
			$('#newLetterMKP').addClass('SlideOut');
			$('#newLetterUan32').addClass('SlideOut');
			$('#newLetterNS40').addClass('SlideOut');
			$('#newLetterMagnesium').addClass('SlideOut');
			$('#newLetterNitratos').addClass('SlideOut');
			$('#newLetterAmmonium').addClass('SlideOut');
			$('#newLetterPotasium').removeClass('SlideOut');

			$('#newCalciumInfo').addClass('SlideOut');
			$('#newZincInfo').addClass('SlideOut');
			$('#new8-24-0Info').addClass('SlideOut');
			$('#newMKPInfo').addClass('SlideOut');
			$('#newUan32Info').addClass('SlideOut');
			$('#newNS40Info').addClass('SlideOut');
			$('#newMagnesiumInfo').addClass('SlideOut');
			$('#newNitratosInfo').addClass('SlideOut');
			$('#newAmmoniumInfo').addClass('SlideOut');
			$('#newPotasiumInfo').removeClass('SlideOut');

			$('#newCalciumInfo').removeClass('inFront');
			$('#newZincInfo').removeClass('inFront');
			$('#new8-24-0Info').removeClass('inFront');
			$('#newMKPInfo').removeClass('inFront');
			$('#newUan32Info').removeClass('inFront');
			$('#newNS40Info').removeClass('inFront');
			$('#newMagnesiumInfo').removeClass('inFront');
			$('#newNitratosInfo').removeClass('inFront');
			$('#newAmmoniumInfo').removeClass('inFront');
			$('#newPotasiumInfo').addClass('inFront');
		});
	//////////////////////////////// END PRODUCTOS NUEVO ////////////////////////////////



	////////////////////////////////INIT NOTICIAS////////////////////////////////
		$('#noticlick1').click(function(event) {
			/* Act on the event */
			$('#noticia1').delay('500').show('5000');
			$('#pho-noti1').delay('500').show('5000');

			$('#noticia2').hide('500');
			$('#noticia3').hide('500');
			$('#noticia4').hide('500');
			$('#noticia5').hide('500');
			$('#noticia6').hide('500');
			$('#noticia7').hide('500');

			$('#pho-noti2').hide('500');
			$('#pho-noti3').hide('500');
			$('#pho-noti4').hide('500');
			$('#pho-noti5').hide('500');
			$('#pho-noti6').hide('500');
			$('#pho-noti7').hide('500');
		});

		$('#noticlick2').click(function(event) {
			/* Act on the event */
			$('#noticia2').delay('500').show('5000');
			$('#pho-noti2').delay('500').show('5000');

			$('#noticia1').hide('500');
			$('#noticia3').hide('500');
			$('#noticia4').hide('500');
			$('#noticia5').hide('500');
			$('#noticia6').hide('500');
			$('#noticia7').hide('500');

			$('#pho-noti1').hide('500');
			$('#pho-noti3').hide('500');
			$('#pho-noti4').hide('500');
			$('#pho-noti5').hide('500');
			$('#pho-noti6').hide('500');
			$('#pho-noti7').hide('500');
		});

		$('#noticlick3').click(function(event) {
			/* Act on the event */
			$('#noticia3').delay('500').show('5000');
			$('#pho-noti3').delay('500').show('5000');

			$('#noticia2').hide('500');
			$('#noticia1').hide('500');
			$('#noticia4').hide('500');
			$('#noticia5').hide('500');
			$('#noticia6').hide('500');
			$('#noticia7').hide('500');

			$('#pho-noti2').hide('500');
			$('#pho-noti1').hide('500');
			$('#pho-noti4').hide('500');
			$('#pho-noti5').hide('500');
			$('#pho-noti6').hide('500');
			$('#pho-noti7').hide('500');
		});

		$('#noticlick4').click(function(event) {
			/* Act on the event */
			$('#noticia4').delay('500').show('5000');
			$('#pho-noti4').delay('500').show('5000');

			$('#noticia2').hide('500');
			$('#noticia3').hide('500');
			$('#noticia1').hide('500');
			$('#noticia5').hide('500');
			$('#noticia6').hide('500');
			$('#noticia7').hide('500');

			$('#pho-noti2').hide('500');
			$('#pho-noti3').hide('500');
			$('#pho-noti1').hide('500');
			$('#pho-noti5').hide('500');
			$('#pho-noti6').hide('500');
			$('#pho-noti7').hide('500');
		});

		$('#noticlick5').click(function(event) {
			/* Act on the event */
			$('#noticia5').delay('500').show('5000');
			$('#pho-noti5').delay('500').show('5000');

			$('#noticia2').hide('500');
			$('#noticia3').hide('500');
			$('#noticia4').hide('500');
			$('#noticia1').hide('500');
			$('#noticia6').hide('500');
			$('#noticia7').hide('500');

			$('#pho-noti2').hide('500');
			$('#pho-noti3').hide('500');
			$('#pho-noti4').hide('500');
			$('#pho-noti1').hide('500');
			$('#pho-noti6').hide('500');
			$('#pho-noti7').hide('500');
		});

		$('#noticlick6').click(function(event) {
			/* Act on the event */
			$('#noticia6').delay('500').show('5000');
			$('#pho-noti6').delay('500').show('5000');

			$('#noticia2').hide('500');
			$('#noticia3').hide('500');
			$('#noticia4').hide('500');
			$('#noticia5').hide('500');
			$('#noticia1').hide('500');
			$('#noticia7').hide('500');

			$('#pho-noti2').hide('500');
			$('#pho-noti3').hide('500');
			$('#pho-noti4').hide('500');
			$('#pho-noti5').hide('500');
			$('#pho-noti1').hide('500');
			$('#pho-noti7').hide('500');
		});

		$('#noticlick7').click(function(event) {
			/* Act on the event */
			$('#noticia7').delay('500').show('5000');
			$('#pho-noti7').delay('500').show('5000');

			$('#noticia2').hide('500');
			$('#noticia3').hide('500');
			$('#noticia4').hide('500');
			$('#noticia5').hide('500');
			$('#noticia6').hide('500');
			$('#noticia1').hide('500');

			$('#pho-noti2').hide('500');
			$('#pho-noti3').hide('500');
			$('#pho-noti4').hide('500');
			$('#pho-noti5').hide('500');
			$('#pho-noti6').hide('500');
			$('#pho-noti1').hide('500');
		});
	////////////////////////////////END NOTICIAS////////////////////////////////





});