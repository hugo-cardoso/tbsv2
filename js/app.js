// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {

      $routeProvider

            // route for the home page
            .when('/', {
              templateUrl : 'pages/home.html',
              controller  : 'mainController'
            })

            // Troubleshootings

            // Funções Básicas

            .when('/correcaoCores', {
              templateUrl : 'pages/troubleshootings/FuncoesBasicas/correcaoCores.html'
            })

            .when('/inverterCores', {
              templateUrl : 'pages/troubleshootings/FuncoesBasicas/inverterCores.html'
            })

            .when('/fixacaoTela', {
              templateUrl : 'pages/troubleshootings/FuncoesBasicas/fixacaoTela.html'
            })

            .when('/modoSeguranca', {
              templateUrl : 'pages/troubleshootings/FuncoesBasicas/modoSeguranca.html'
            })

            .when('/modoDemonstrativo', {
              templateUrl : 'pages/troubleshootings/FuncoesBasicas/modoDemonstrativo.html'
            })

            .when('/modoProgramador', {
              templateUrl : 'pages/troubleshootings/FuncoesBasicas/modoProgramador.html'
            })

            .when('/bloqueioDeTela', {
              templateUrl : 'pages/troubleshootings/FuncoesBasicas/bloqueioDeTela.html'
            })

            .when('/sensorBiometrico', {
              templateUrl : 'pages/troubleshootings/FuncoesBasicas/sensorBiometrico.html'
            })

            .when('/transmitirTela', {
              templateUrl : 'pages/troubleshootings/FuncoesBasicas/transmitirTela.html'
            })

            .when('/trocaDeUsuario', {
              templateUrl : 'pages/troubleshootings/FuncoesBasicas/trocaDeUsuario.html'
            })

            // Acessórios

            .when('/cartaoMemoriaInterna', {
              templateUrl : 'pages/troubleshootings/Acessorios/cartaoMemoriaInterna.html'
            })

            .when('/foneBluetooth', {
              templateUrl : 'pages/troubleshootings/Acessorios/foneBluetooth.html'
            })

            .when('/problemasCartaoSd', {
              templateUrl : 'pages/troubleshootings/Acessorios/problemasCartaoSd.html',
              controller  : 'passosController'
            })

            .when('/problemasChip', {
              templateUrl : 'pages/troubleshootings/Acessorios/problemasChip.html',
              controller  : 'problemasChipController'
            })

            .when('/naoLiga', {
              templateUrl : 'pages/troubleshootings/Sistema/naoLiga.html',
              controller  : 'passosController'
            })

            .when('/pagina1', {
              templateUrl : 'pages/troubleshootings/Pagina_1.html'
            })

            .when('/pagina2', {
              templateUrl : 'pages/troubleshootings/Pagina_2.html'
            })

            .when('/pagina3', {
              templateUrl : 'pages/troubleshootings/Pagina_3.html',
              controller  : 'passosController'
            })

            .when('/pagina4', {
              templateUrl : 'pages/troubleshootings/Pagina_4.html',
              controller  : 'tbsController'
            })

            // Aparelhos

            .when('/aparelhosMotorola', {
              templateUrl : 'pages/aparelhosMotorola.html',
              controller  : 'aparelhosController'
            })

            // Moto X

            .when('/motoxforce', {
              templateUrl : 'pages/aparelhos/motorola/motoxforce.html',
              controller  : 'aparelhosController'
            })

            .when('/motoxstyle', {
              templateUrl : 'pages/aparelhos/motorola/motoxstyle.html',
              controller  : 'aparelhosController'
            })

            .when('/motoxplay', {
              templateUrl : 'pages/aparelhos/motorola/motoxplay.html',
              controller  : 'aparelhosController'
            })

            .when('/motox2', {
              templateUrl : 'pages/aparelhos/motorola/motox2.html',
              controller  : 'aparelhosController'
            })

            .when('/motox1', {
              templateUrl : 'pages/aparelhos/motorola/motox1.html',
              controller  : 'aparelhosController'
            })

            // Moto G

            .when('/motog4plus', {
              templateUrl : 'pages/aparelhos/motorola/motog4plus.html',
              controller  : 'aparelhosController'
            })

            .when('/motog4play', {
              templateUrl : 'pages/aparelhos/motorola/motog4play.html',
              controller  : 'aparelhosController'
            })

            .when('/motog4', {
              templateUrl : 'pages/aparelhos/motorola/motog4.html',
              controller  : 'aparelhosController'
            })

            .when('/motog3', {
              templateUrl : 'pages/aparelhos/motorola/motog3.html',
              controller  : 'aparelhosController'
            })

            .when('/motog2', {
              templateUrl : 'pages/aparelhos/motorola/motog2.html',
              controller  : 'aparelhosController'
            })

            .when('/motog1', {
              templateUrl : 'pages/aparelhos/motorola/motog1.html',
              controller  : 'aparelhosController'
            })

            // Moto E

            .when('/motoe1', {
              templateUrl : 'pages/aparelhos/motorola/motoe1.html',
              controller  : 'aparelhosController'
            })

            .when('/motoe2', {
              templateUrl : 'pages/aparelhos/motorola/motoe2.html',
              controller  : 'aparelhosController'
            })

            // Outros

            .when('/motoz', {
              templateUrl : 'pages/aparelhos/motorola/motoz.html',
              controller  : 'aparelhosController'
            })

            .when('/motomaxx', {
              templateUrl : 'pages/aparelhos/motorola/motomaxx.html',
              controller  : 'aparelhosController'
            })

            // 

            .when('/aparelhosLenovo', {
              templateUrl : 'pages/aparelhosLenovo.html'
            })

            // VIBE

            .when('/a7010', {
              templateUrl : 'pages/aparelhos/lenovo/a7010.html',
              controller  : 'aparelhosController'
            })

            .when('/k5', {
              templateUrl : 'pages/aparelhos/lenovo/k5.html',
              controller  : 'aparelhosController'
            })

            // Apoio

            .when('/sam', {
              templateUrl : 'pages/menu/sam2.html',
              controller  : 'samController'
            })

            .when('/telefones', {
              templateUrl : 'pages/menu/telefones.html',
              controller  : 'telefonesController'
            })

            .when('/compare', {
              templateUrl : 'pages/menu/compare.html',
              controller  : 'compareController'
            })

            .when('/transfN2', {
              templateUrl : 'pages/menu/Transferencias_Nivel2.html'
            })

            // 

            .when('/sobre', {
              templateUrl : 'pages/menu/sobre.html'
            })

            // route for the contact page
            .when('/teste', {
              templateUrl : 'pages/home.html',
              controller  : 'mainController'
            });



          });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope, $http) {


      // FRASE MOTIVACIONAL

      var randomFrase = Math.floor(Math.random()*10);

      var frases = [
      "A persistência é o caminho do êxito.", 
      "A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.", 
      "O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.", 
      "Todo mundo é capaz de sentir os sofrimentos de um amigo. Ver com agrado os seus êxitos exige uma natureza muito delicada.",
      "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.",
      "Creia em si, mas não duvide sempre dos outros.",
      "Talento é dom, é graça. E sucesso nada tem haver com sorte, mas com determinação e trabalho.",
      "Estar decidido, acima de qualquer coisa, é o segredo do êxito.",
      "A disciplina é a mãe do êxito.",
      "O êxito começa no exato momento em que o homem decide o que quer e começa a trabalhar para consegui-lo."
      ];

      $("#frase").html(frases[randomFrase]);


      // ABRIR MODAL
      $("#btnModal").click(function(){

        $("#modal").show();

      });

      // FECHAR MODAL
      $(".close-modal").click(function(){

        $(".modal").hide();
        

      });


      //PREVISÃO DO TEMPO
      $http.get('data/tempo2.json')
      .then(function(result){
        $scope.players = result.data.results.forecast;            
      });

      // $scope.players = [
      // {
      //   "semana":"SEG",
      //   "imagem":"sol",
      //   "max":"25",
      //   "min":"10"
      // },
      // {
      //   "semana":"TER",
      //   "imagem":"sol",
      //   "max":"27",
      //   "min":"14"
      // },
      // {
      //   "semana":"QUA",
      //   "imagem":"parcial-nublado",
      //   "max":"29",
      //   "min":"15"
      // },
      // {
      //   "semana":"QUI",
      //   "imagem":"parcial-nublado",
      //   "max":"29",
      //   "min":"14"
      // },
      // {
      //   "semana":"SEX",
      //   "imagem":"sol",
      //   "max":"29",
      //   "min":"17"
      // }
      // ]
      

      // METAS
      $scope.metas = [
      {
        "nome":"CSAT",
        "meta":"91%",
        "seta":"up"
      },
      {
        "nome":"TMO",
        "meta":"09:30",
        "seta":"down"
      },
      {
        "nome":"ABS",
        "meta":"5%",
        "seta":"down"
      },
      {
        "nome":"QUÁLIDADE",
        "meta":"85%",
        "seta":"up"
      }
      ]

      // Busca de CEP

      $("#subCep").click(function(){

        if($("#codCep").val() === ""){
          alert("Por favor, digite o cep.");
        }
        else{
          $http.get('http://viacep.com.br/ws/' + $("#codCep").val() + "/json/")
          .then(function(res){
            $scope.ceps = res.data;
            console.log($scope.ceps);   
          });
        }

      });

      // 

      // VERIFICAR LAYOUT

      function lenovo() {
        $("#filter").attr("class", "input is-success");
        $("#logo-home").attr("src", "res/img/logo_lenovo.png");
        $("#tbsMotorola").hide();
        $(".motorolaOnly").hide();
        $("#tbsLenovo").show();
        $(".lenovoOnly").show();
        localStorage.setItem("layout", "lenovo");

        $(".list").show();
        $(".lblBusca").html("Troubleshootings");
      };

      function motorola() {
        $("#filter").attr("class", "input is-primary");
        $("#logo-home").attr("src", "res/img/logo-animation-header-sm-0003.png");
        $("#tbsLenovo").hide();
        $(".lenovoOnly").hide();
        $("#tbsMotorola").show();
        $(".motorolaOnly").show();
        localStorage.setItem("layout", "motorola");

        $(".list").hide();
        $(".lblBusca").html("Categorias");
        $(".categoria").children().children().attr("class", "fa fa-angle-down");
        $(".categoria").removeAttr("style");
      };

      if(localStorage.getItem("layout") === "lenovo"){
        lenovo();
      }
      else{
        motorola();
      }

      // LENOVO 

      $("#lenovoBtn").click(function(){
        lenovo();
      });

      // LENOVO 

      $("#motorolaBtn").click(function(){
        motorola();
      });






    });

    // SCRIPT'S PÁGINA DOS APARELHOS
    scotchApp.controller('aparelhosController', function($scope) {


      // ABRIR E FECHAR ACCORDION
      $(".card-header").click(function() {

        $(".card-header").children("a").children("i").attr("class", "fa fa-angle-down");

        if($(this).next(".card-content").css("display") === "block"){
          $(this).next(".card-content").slideToggle();
          $(this).children("a").children("i").attr("class", "fa fa-angle-up");
        }
        else{
          $(".card-content").hide();
          $(this).next(".card-content").slideToggle();
          $(this).children("a").children("i").attr("class", "fa fa-angle-down");
        }


        if($(this).children("a").children("i").attr("class") === "fa fa-angle-down"){
          $(this).children("a").children("i").attr("class", "fa fa-angle-up");
        }
        else{
          $(this).children("a").children("i").attr("class", "fa fa-angle-down");
        }


      });

    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('passosController', function($scope) {

      var start = 1;


      var qt = $(".tb").length;


      $( document ).ready(function() {

        $("#passo").html("Passo " + start + " / " + qt);

      });

      $scope.next = function() {
        ++start;

        if(start <= 1){
          $("#btn_prev").attr("disabled", "true");
          $("#passo").html("Passo " + start + " / " + qt);
        }
        if(start > 1){

          $("#btn_prev").removeAttr("disabled");
          if(start === qt){
            $("#btn_next").attr("disabled", "true");
          }
          $(".tb:visible").next(".tb").show();
          $("#passo").html("Passo " + start + " / " + qt);
          $(".tb:visible").prev(".tb").hide();
          console.log(start);
        }
      };

      $scope.prev = function() {
        --start;

        if(start === 1){
          $("#btn_prev").attr("disabled", "true");
          $("#btn_next").removeAttr("disabled");
          $(".tb:visible").hide();
          $(".tb").first().show();
          $("#passo").html("Passo " + start + " / " + qt);
          console.log(start);
        }
        if(start > 1){
          $("#btn_next").removeAttr("disabled");
          if(start === qt){
            $("#btn_next").attr("disabled", "true");
          }
          $(".tb:visible").prev(".tb").show();
          $("#passo").html("Passo " + start + " / " + qt);
          $(".tb:visible").next(".tb").hide();
          console.log(start);
        }
      };

    });



    // create the controller and inject Angular's $scope
    scotchApp.controller('tbsController', function($scope) {

      clickSim = 0;

      $(".btn_nao").click(function() {

        $(this).parent(".pai").nextAll("div .tb-nao").toggle();

      });

      $(".btn_sim").click(function() {

        $(this).parent(".pai").nextAll("div .tb-sim").toggle();

      });

    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('problemasChipController', function($scope) {

      $("input[type=radio]").click(function(){

        var pergunta1 = $('input[name=question1]:checked').val();
        var pergunta2 = $('input[name=question2]:checked').val();

        $(".tb").hide();

        if(pergunta1 === "s" && pergunta2 === "destacavel"){
          $("#sim_destacavel").show();
        }
        if(pergunta1 === "n" && pergunta2 === "destacavel"){
          $("#nao_destacavel").show();
        }
        if(pergunta1 === "s" && pergunta2 === "cortado"){
          $("#sim_cortado").show();
        }
        if(pergunta1 === "n" && pergunta2 === "cortado"){
          $("#nao_cortado").show();
        }
        if(pergunta1 === "s" && pergunta2 === "nd"){
          $("#sim_nenhuma").show();
        }
        if(pergunta1 === "n" && pergunta2 === "nd"){
          $("#nao_nenhuma").show();
        }

      });

    });
