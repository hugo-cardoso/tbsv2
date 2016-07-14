// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
      $routeProvider

            // route for the home page
            .when('/#', {
              templateUrl : 'pages/home.html',
              controller  : 'mainController'
            })

            // Troubleshootings

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

            // Aparelhos

            .when('/aparelhos', {
              templateUrl : 'pages/aparelhos.html',
              controller  : 'aparelhosController'
            })

            .when('/motoxforce', {
              templateUrl : 'pages/aparelhos/motoxforce.html',
              controller  : 'aparelhosController'
            })

            // Apoio

            .when('/sam', {
              templateUrl : 'pages/menu/sam.html'
            })

            .when('/transfN2', {
              templateUrl : 'pages/menu/Transferencias_Nivel2.html'
            })

            // route for the contact page
            .when('/teste', {
              templateUrl : 'pages/home.html',
              controller  : 'mainController'
            });
          });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope, $http) {

      console.log("OK");

      // ABRIR MODAL
      $("#btnModal").click(function(){

        $("#modal").show();

      });

      // FECHAR MODAL
      $(".close-modal").click(function(){

        $(".modal").hide();

      });


      //PREVISÃO DO TEMPO
      $http.get('http://helpmotorola.atento.com.br/website/e_arq_comum/1/arquivos/tempo.json')
      .then(function(result){
        console.log("Tempo");
        $scope.players = result.data;                
      });

      $scope.players = [
      {
        "semana":"SEG",
        "imagem":"sol",
        "max":"25",
        "min":"10"
      },
      {
        "semana":"TER",
        "imagem":"sol",
        "max":"27",
        "min":"14"
      },
      {
        "semana":"QUA",
        "imagem":"parcial-nublado",
        "max":"29",
        "min":"15"
      },
      {
        "semana":"QUI",
        "imagem":"parcial-nublado",
        "max":"29",
        "min":"14"
      },
      {
        "semana":"SEX",
        "imagem":"sol",
        "max":"29",
        "min":"17"
      }
      ]
      

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

    });

    // SCRIPT'S PÁGINA DOS APARELHOS
    scotchApp.controller('aparelhosController', function($scope) {


      // ABRIR E FECHAR ACCORDION
      $(".card-header").click(function() {

        $(this).next(".card-content").slideToggle();

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

        $("#passo").html("Passo " + start + "/" + qt);

      });

      $scope.next = function() {
        ++start;

        if(start <= 1){
          $("#btn_prev").attr("disabled", "true");
          $("#passo").html("Passo " + start + "/" + qt);
        }
        if(start > 1){

          $("#btn_prev").removeAttr("disabled");
          if(start === qt){
            $("#btn_next").attr("disabled", "true");
          }
          $(".tb:visible").next(".tb").show();
          $("#passo").html("Passo " + start + "/" + qt);
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
          $("#passo").html("Passo " + start + "/" + qt);
          console.log(start);
        }
        if(start > 1){
          $("#btn_next").removeAttr("disabled");
          if(start === qt){
            $("#btn_next").attr("disabled", "true");
          }
          $(".tb:visible").prev(".tb").show();
          $("#passo").html("Passo " + start + "/" + qt);
          $(".tb:visible").next(".tb").hide();
          console.log(start);
        }
      };


    });