// Pop-up

$("#popUp").show();

setInterval(function(){ 
	$("#popUp").hide();
}, 500000);

// 

// ATUALIZAÇÃO DA HORA
randomnumber = Math.floor(Math.random()*6)

setInterval(function(){ 

	var frases = ["Eaí,", "Eaí, tudo bem?", "Olá,", "Seja bem vindo(a),", "Oi, tudo bem?", "Eaí, beleza?"];

	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	

	if(h >= 0 && h <= 11){
		$("#msg").html(frases[randomnumber] + " bom dia!");
	}
	if(h >= 12 && h <= 18){
		$("#msg").html(frases[randomnumber] + " boa tarde!");
	}
	if(h > 18 && h <= 23){
		$("#msg").html(frases[randomnumber] + " boa noite!");
	}

// $("#hora").html(h);
// $("#minuto").html(m);

}, 1000);

// 

// DROPDOWN DO MENU LATERAL

$(".categoria").click(function() {

	$(".categoria").css("color", "#69707a").children().children().attr("class", "fa fa-angle-down");


	if($(this).next("ul").css("display") === "block"){
		$(this).next("ul").slideToggle();
		$(this).children().children().attr("class", "fa fa-angle-up");
		$(this).css("color", "#69707a");
	}
	else{
		$(".categoria").next("ul").hide();
		$(this).next("ul").slideToggle();
		$(this).children().children().attr("class", "fa fa-angle-down");
		$(this).css("color", "#1fc8db");
	}

	if($(this).children().children().attr("class") === "fa fa-angle-down"){
		$(this).children().children().attr("class", "fa fa-angle-up")
	}
	else{
		$(this).children().children().attr("class", "fa fa-angle-down")
	}

});

$(".list > li").click(function() {

	$(".list > li > a").removeAttr("style");

	$(this).children("a").css({"background-color": "#f5f7fa", "color": "#1fc8db"});

});

$(".clear-list").click(function() {

	$(".list > li > a").removeAttr("style");

});

// 

// FERRAMENTAS

$("#anotacoes").click(function(){

	$("#popUp_Anotacoes").show();

});

$("#cronometro").click(function(){

	$("#popUp_Cronometro").show();

});

$("#cep").click(function(){

	$("#popUp_Cep").show();

});


// Anotações

$("#salvarAnota").click(function(){

	var anota = $("#anotaTxt").val();

	localStorage.setItem("anota", anota);

});

$("#carregarAnota").click(function(){

	var txt = localStorage.getItem("anota");

	$("#anotaTxt").val(txt);

});

// 

// Cronômetro

var ore = 0, minuti = 0, secondi = 0, decimi = 0;
var vis = "";
var stop = true;

function avvia() {
	if(stop == true) {
		stop = false;
		cronometro();
	}
}

function cronometro() {

	if(stop == false) {
		decimi++;
		if(decimi > 9) {
			decimi = 0;
			secondi++;
		}
		if(secondi > 59) {
			secondi = 0;
			minuti++;
		}
		if(minuti > 59) {
			minuti = 0;
			ore++;
		}

		if($("#vis").html() === "000:10:0"){
			$("#holdsimples").attr("class", "notification is-info").show().html("Cuidado, você esta prestes a atingir o límite de hold simples.");
			$("#holdsimples1").attr("class", "notification is-info").show().html("Cuidado, você esta prestes a atingir o límite de hold simples.");
			setTimeout(function(){ 
				$("#holdsimples").hide().html("");
				$("#holdsimples1").hide().html("");
			}, 7000);
		}
		if($("#vis").html() === "000:30:0"){
			$("#holdsimples").attr("class", "notification is-info").show().html("Me pediram para avisar que você já atingiu o límite de hold simples.");
			$("#holdsimples1").attr("class", "notification is-info").show().html("Me pediram para avisar que você já atingiu o límite de hold simples.");
			setTimeout(function(){ 
				$("#holdsimples").hide().html("");
				$("#holdsimples1").hide().html("");
			}, 7000);
		}
		if($("#vis").html() === "000:50:0"){
			$("#holdsimples").attr("class", "notification is-danger").show().html("Eu de novo...Você já vai atingir o límite de hold.");
			$("#holdsimples1").attr("class", "notification is-danger").show().html("Eu de novo...Você já vai atingir o límite de hold.");
			setTimeout(function(){ 
				$("#holdsimples").hide().html("");
				$("#holdsimples1").hide().html("");
			}, 7000);
		}
		if($("#vis").html() === "001:10:0"){
			$("#holdsimples").attr("class", "notification is-danger").show().html("Com licença. Você atingiu o límite de hold.");
			$("#holdsimples1").attr("class", "notification is-danger").show().html("Com licença. Você atingiu o límite de hold.");
			setTimeout(function(){ 
				$("#holdsimples").hide().html("");
				$("#holdsimples1").hide().html("");
			}, 30000);
		}

		mostra();
		setTimeout("cronometro()", 100);
	}

}
function mostra() {
	if(ore < 10) vis = "0"; else vis = ore;
	if(minuti < 10) vis = vis + "0";
	vis = vis + minuti + ":";
	if(secondi < 10) vis = vis + "0";
	vis = vis + secondi + ":" + decimi;
	document.getElementById("vis").innerHTML = vis;
}
function ferma() {
	stop = true;
}
function azzera() {
	if(stop == false) {
		stop = true;
	}
	ore = minuti = secondi = decimi = 0;
	vis = "";
	mostra();
	$("#holdmax").hide();
	$("#holdsimples").hide();
}
function restart() {

	ore = minuti = secondi = decimi = 0;

}

// PESQUISA MENU LATERAL

$(function(){

	$('#filter').keyup(function(){

		var searchText = $(this).val().toUpperCase();

		if(searchText.length > 0){
			$(".categoria").hide();
			$(".lblBusca").html("Resultado");
			$(".list").show();
		}
		else{
			$(".categoria").show();
			$(".categoria").children().children().attr("class", "fa fa-angle-down");
			if(localStorage.getItem("layout") === "motorola"){
				$(".list").hide();
				$(".lblBusca").html("Categorias");
			}
			else{
				$(".list").show();
				$(".lblBusca").html("Troubleshootings");
			}	
		}

		$('.list > li').each(function(){

			var currentLiText = $(this).text().toUpperCase();
			showCurrentLi = currentLiText.indexOf(searchText) !== -1;

			$(this).toggle(showCurrentLi);


		});

		if($(".list li:visible").length === 0){
			if(searchText.length > 0){
				$(".msgResultado_0").show();
			}
			else{
				$(".msgResultado_0").hide();
			}
		}
		else{
			$(".msgResultado_0").hide();
		}

		$("#count").html($(".list li:visible").length);  
	});

});

// 

// ATUALIZAÇÃO A CADA 10MIN

function reload() {
	location.reload(true);
};


setInterval(function(){ 

	reload();

}, 60000 * 15);

// 