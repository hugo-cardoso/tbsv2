// SCRIPT'S PÁGINA DOS APARELHOS
scotchApp.controller('samController', function($scope) {

  msgSAM();

  $scope.myFilter = {};
  $scope.userInput = {};

  $scope.applySearch = function() {

    for(prop in $scope.userInput) {
      $scope.myFilter[prop] = $scope.userInput[prop];
    }

    msgSAM();

    $("#infoAcento").hide();

  };

  function msgSAM(){

    setTimeout(function(){ 

      $("box-end").show();

      if($(".box-end:visible").length === 0){
        $(".box-end").hide();
        $("#msgResultadoSAM").show();
      }
      else{
        $("#msgResultadoSAM").hide();
      }

      $("#qtSam").html($(".box-end").length);

    }, 150);

  };

  $( "#filtroCidade" ).focus(function() {
    $("#infoAcento").show();
  });

  $( "#filtroCidade" ).focusout(function() {
    $("#infoAcento").hide();
  });

      // $http.get('../data/sam.json')
      // .then(function(result){
      //   console.log("Tempo");
      //   $scope.players = result.data;                
      // });

      $scope.players = 
      [
 {
   "nome": "Amazoncell",
   "end": "Av Djalma Batista, 1109",
   "cep": "69053-355",
   "bairro": "Sao Geraldo",
   "cidade": "Manaus",
   "uf": "AM",
   "ddd": 92,
   "telefone": "3086-2220 / 3084-1369",
   "horario": "SEG A SEX (08:00 -17:00) E SAB (08:00-12:00)"
 },
 {
   "nome": "Loja do Celular Sorocaba Centro",
   "end": "Rua Souza Pereira, 358",
   "cep": "18010-320",
   "bairro": "Centro",
   "cidade": "Sorocaba",
   "uf": "SP",
   "ddd": 15,
   "telefone": "3224-3550/ 32338367",
   "horario": "SEG A SEX (09:00-18:00) e SAB (09:00-12:00)"
 },
 {
   "nome": "Motorola Duque de Caxias",
   "end": "Praca Roberto Silveira, 360 Loja",
   "cep": "25070-005",
   "bairro": "25 de Agosto",
   "cidade": "Duque de Caxias",
   "uf": "RJ",
   "ddd": 21,
   "telefone": "3652-0455/ 3653-0744 / 3848-1818 / 3842-4141",
   "horario": "SEG A SEX (09:00-18:00) E SAB (09:00-13:00)"
 },
 {
   "nome": "Cell Mania",
   "end": "Av. Hermes Fontes, 1340",
   "cep": "49050-000",
   "bairro": "Suissa",
   "cidade": "Aracaju",
   "uf": "SE",
   "ddd": 79,
   "telefone": "3022-4048",
   "horario": "SEG A SEX (08:00-18:00)"
 },
 {
   "nome": "Golden Cell",
   "end": "Rua Palmira Ninho, 79 - Loja 04",
   "cep": "24710-440",
   "bairro": "Alcantara",
   "cidade": "Sao Goncalo",
   "uf": "RJ",
   "ddd": 21,
   "telefone": "2614-7103",
   "horario": "SEG A SEX ( 09:00 - 18:00) E SAB (09:00-13:00)"
 },
 {
   "nome": "Telepoint",
   "end": "Estrada do Portela, 99 - L 232",
   "cep": "21351-050",
   "bairro": "Madureira",
   "cidade": "Rio de Janeiro",
   "uf": "RJ",
   "ddd": 21,
   "telefone": "2450-4331/ 2450-4415",
   "horario": "SEG A SEX (09:00-18:00) E SAB (09:00-13:00)"
 },
 {
   "nome": "Vale Cell Telecom SJ Campos",
   "end": "Av. Doutor Nelson D`avila, 1049",
   "cep": "12245-030",
   "bairro": "Jd Vl Parariso",
   "cidade": "Sao Jose dos Campos",
   "uf": "SP",
   "ddd": 12,
   "telefone": "3308-0377",
   "horario": "SEG A SEX (09:00-18:00) E SAB (09:00-13:00)"
 },
 {
   "nome": "Motocell Telecom",
   "end": "Avenida Assis Chateaubriand, 1608",
   "cep": "74130-015",
   "bairro": "Setor Oeste",
   "cidade": "Goiania",
   "uf": "GO",
   "ddd": 62,
   "telefone": "40051800",
   "horario": "SEG A SEX (09:00-17:00) E SAB (09:00-12:00)"
 },
 {
   "nome": "Loja do Celular Campinas Centro",
   "end": "Barao de Jaguara, 707 - loja 25",
   "cep": "13015-001",
   "bairro": "Centro",
   "cidade": "Campinas",
   "uf": "SP",
   "ddd": 19,
   "telefone": "32344998",
   "horario": "SEG A SEX (09:00-18:00) e SAB (09:00-12:00)"
 },
 {
   "nome": "Cellcity Vitoria",
   "end": "Av. Americo Buaiz, 200",
   "cep": "29050-902",
   "bairro": "Enseada do Sua",
   "cidade": "Vitoria",
   "uf": "ES",
   "ddd": 27,
   "telefone": "3335-1007/ 3335-1006",
   "horario": "SEG A SEX(10:00-19:00)"
 },
 {
   "nome": "Megacenter - Regional Prudente",
   "end": "Rua Dr. Jose Foz, 139",
   "cep": "19010-040",
   "bairro": "Bosque",
   "cidade": "Presidente Prudente",
   "uf": "SP",
   "ddd": 18,
   "telefone": "32226400",
   "horario": "SEG A SEX (8:00 - 18:00)"
 },
 {
   "nome": "Cellmoto Telecom",
   "end": "Avenida Industrial, 661",
   "cep": "09080-510",
   "bairro": "Jardim",
   "cidade": "Santo Andre",
   "uf": "SP",
   "ddd": 11,
   "telefone": "44277700",
   "horario": "SEG A SEX (09:00 - 17:30) e SAB (09:00-13:00)"
 },
 {
   "nome": "Celular Osasco",
   "end": "Rua Tenente Avelar Pires de Azevedo, 140",
   "cep": "06016-060",
   "bairro": "Centro",
   "cidade": "Osasco",
   "uf": "SP",
   "ddd": 11,
   "telefone": "3699-2626",
   "horario": "SEG A SEX (9:30 - 18:30) E SAB (10:00-14:00)"
 },
 {
   "nome": "Motorola Nova Iguaçu",
   "end": "Av Governador Amaral Peixoto, 427",
   "cep": "26210-060",
   "bairro": "Centro",
   "cidade": "Nova Iguacu",
   "uf": "RJ",
   "ddd": 21,
   "telefone": "3844-4141/ 3850-1818/ 2698-5596",
   "horario": "SEG A SEX (09:00-18:00) E SAB (09:00-14:00)"
 },
 {
   "nome": "Palmas Cell Express",
   "end": "Q 104 SUL RUA SE 9 - N 16",
   "cep": "77020-024",
   "bairro": "Plano Diretor Sul",
   "cidade": "Palmas",
   "uf": "TO",
   "ddd": 63,
   "telefone": "32158888",
   "horario": "SEG A SEX (9:00-18:00) E SAB (09:00-12:00)"
 },
 {
   "nome": "High Tech Celular",
   "end": "ST SHCS CL Quadra 411, Bloco A, Lj 06 e 08",
   "cep": "70277-510",
   "bairro": "Asa Sul",
   "cidade": "Brasilia",
   "uf": "DF",
   "ddd": 61,
   "telefone": "33455454",
   "horario": "SEG A SEX (09:00-18:00) E SAB (09:00-13:00)"
 },
 {
   "nome": "Melhor Assistencia",
   "end": "Rua Comendador Palmeira, 493 - SALA 07",
   "cep": "57051-150",
   "bairro": "Farol",
   "cidade": "Maceio",
   "uf": "AL",
   "ddd": 82,
   "telefone": "3326-1070",
   "horario": "SEG A SEX (08:00-17:00)"
 },
 {
   "nome": "Cesut Telecom",
   "end": "AV . Pontes Viera, 2001 - loja 101",
   "cep": "60135-237",
   "bairro": "Dionisio Torres",
   "cidade": "Fortaleza",
   "uf": "CE",
   "ddd": 85,
   "telefone": "3034-0444/ 3034-0464",
   "horario": "SEG A SEX (09:00-18:00) E SAB (08:00-12:00)"
 },
 {
   "nome": "Mototec Serviços",
   "end": "Rua Miguel Rosa, 3305",
   "cep": "60001-495",
   "bairro": "Centro",
   "cidade": "Teresina",
   "uf": "PI",
   "ddd": 86,
   "telefone": "3221-3866",
   "horario": "SEG A SEX (8:30-17:30) E SAB (8:00 -12:00)"
 },
 {
   "nome": "Motoassist Melhorcell",
   "end": "R Desembargador Jose Peregrino, 217 L1",
   "cep": "58013-500",
   "bairro": "Centro",
   "cidade": "Joao Pessoa",
   "uf": "PB",
   "ddd": 83,
   "telefone": "3222-5491",
   "horario": "SEG A SEX (08:00-18:00)"
 },
 {
   "nome": "Motovision",
   "end": "Av Cel Colares Moreira, 02 - Loja 04",
   "cep": "65075-441",
   "bairro": "Jardim Renascenca",
   "cidade": "Sao Luis",
   "uf": "MA",
   "ddd": 98,
   "telefone": "3235-0300",
   "horario": "SEG A SEX (08:00-18:00) E SAB (08:00-12:00)"
 },
 {
   "nome": "Help Manutenção - Porto Alegre",
   "end": "Rua Botafogo, 735",
   "cep": "90150-051",
   "bairro": "Menino de Deus",
   "cidade": "Porto Alegre",
   "uf": "RS",
   "ddd": 51,
   "telefone": "30258200",
   "horario": "SEG A SEX (08:30-18:00)"
 },
 {
   "nome": "M Celulares",
   "end": "Rua General Osorio,222",
   "cep": "76801-086",
   "bairro": "Centro",
   "cidade": "Porto Velho",
   "uf": "RO",
   "ddd": 69,
   "telefone": "3229-3033",
   "horario": "SEG A SEX (09:00-17:15) E SAB (09:00 - 12:00)"
 },
 {
   "nome": "Wb Celulares",
   "end": "Avenida Amazonas, 100",
   "cep": "30180-001",
   "bairro": "Centro",
   "cidade": "Belo Horizonte",
   "uf": "MG",
   "ddd": 31,
   "telefone": "3241-2416",
   "horario": "SEG A SEX (09:00-18:00) E SAB (08:00-12:00)"
 },
 {
   "nome": "Belem Cell Express",
   "end": "TV Sao Pedro, 769",
   "cep": "66023-570",
   "bairro": "Batista Campos",
   "cidade": "Belem",
   "uf": "PA",
   "ddd": 91,
   "telefone": "32415060",
   "horario": "SEG A SEX(09:00-18:00) E SAB (09:00-12:00)"
 },
 {
   "nome": "Help Manutencao Celular",
   "end": "Rua Azevedo Soares, 973",
   "cep": "03322-001",
   "bairro": "Vila Gomes Cardim",
   "cidade": "Sao Paulo",
   "uf": "SP",
   "ddd": 11,
   "telefone": "20900110",
   "horario": "SEG A SEX (08:30 - 17:00) E SAB (08:00- 12:00)"
 },
 {
   "nome": "Help Manutencao Celular (Opcional Hora Marcada)",
   "end": "Av. Presidente Arthur Bernardes, 172",
   "cep": "88320-300",
   "bairro": "Portao",
   "cidade": "Curitiba",
   "uf": "PR",
   "ddd": 41,
   "telefone": "3111-8819 - 31118826",
   "horario": "SEG A SEX (08:30-18:00)"
 },
 {
   "nome": "Help Assistencia Tecnica de Celulares - Florianopolis",
   "end": "Av. Rio Branco, 213",
   "cep": "88015-201",
   "bairro": "Centro",
   "cidade": "Florianopolis",
   "uf": "SC",
   "ddd": 48,
   "telefone": "30248060",
   "horario": "SEG A SEX (08:30 - 18:00)"
 },
 {
   "nome": "Pll Salvador (Opcional Hora Marcada)",
   "end": "Rua Frederico Simoes, 125",
   "cep": "41820-774",
   "bairro": "Caminho das Arvores",
   "cidade": "Salvador",
   "uf": "BA",
   "ddd": 71,
   "telefone": "71) 3045-6700 (71) 3013-7707",
   "horario": "SEG A SEX (09:00-17:00)"
 },
 {
   "nome": "Tec cel",
   "end": "Av. Mato Grosso, 601",
   "cep": "79002-232",
   "bairro": "Centro",
   "cidade": "Campo Grande",
   "uf": "MS",
   "ddd": 67,
   "telefone": "30435644",
   "horario": "SEG A SEX (08:00-18:00) E SAB (08:00-12:00)"
 },
 {
   "nome": "Pll Angelica (Opcional Hora Marcada)",
   "end": "Av. Angelica, 2.578",
   "cep": "01228-200",
   "bairro": "Consolacao",
   "cidade": "Sao Paulo",
   "uf": "SP",
   "ddd": 0,
   "telefone": "Sem Numero",
   "horario": "SEG A SEX (09:00 - 17:30)"
 },
 {
   "nome": "Valecell - São Paulo",
   "end": "R. Sao Luis, 187 - 1 sb loja 09",
   "cep": "01046-001",
   "bairro": "Consolacao",
   "cidade": "Sao Paulo",
   "uf": "SP",
   "ddd": 11,
   "telefone": "2721-8800/ 3138-3150",
   "horario": "SEG A SEX (09 :00- 17:00) E SAB (09:00- 12:00)"
 },
 {
   "nome": "Pll Moema",
   "end": "Av. Ibirapuera, 3411",
   "cep": "04029-200",
   "bairro": "Indianopolis",
   "cidade": "Sao Paulo",
   "uf": "SP",
   "ddd": 11,
   "telefone": "50963208/ 23051397/ 50937357",
   "horario": "SEG A SEX (09:00-17:30)"
 },
 {
   "nome": "Pll Centro RJ (Opcional Hora Marcada)",
   "end": "AV Santa Luzia, 651",
   "cep": "20030-070",
   "bairro": "Centro",
   "cidade": "Rio de Janeiro",
   "uf": "RJ",
   "ddd": 21,
   "telefone": "2210-6015",
   "horario": "SEG A SEX (09:00-18:00)"
 },
 {
   "nome": "Connect Mobile",
   "end": "Av. Getulio Vargas, 700",
   "cep": "78005-370",
   "bairro": "Centro",
   "cidade": "Cuiaba",
   "uf": "MT",
   "ddd": 65,
   "telefone": "30529430/ 30274830",
   "horario": "SEG A SEX (08:00-18:00)"
 },
 {
   "nome": "Connect Mobile",
   "end": "Avenida Presidente Itamar Franco,1750",
   "cep": "36016-321",
   "bairro": "Sao Mateus",
   "cidade": "Juiz de Fora",
   "uf": "MG",
   "ddd": 32,
   "telefone": "3216-3560/3084-5447",
   "horario": "SEG A SEX (09:00-18:00)"
 },
 {
   "nome": "Megacenter Care Technology - Marilia",
   "end": "Rua Arco Verde, 508",
   "cep": "17504-084",
   "bairro": "Alto Cafezal",
   "cidade": "Marilia",
   "uf": "SP",
   "ddd": 14,
   "telefone": "981432134 - 981434957",
   "horario": "SEG A SEX (08:00-17:30)"
 },
 {
   "nome": "Dactel Niteroi",
   "end": "Avenida Ernani do Amaral Peixoto, 207, Loja 103",
   "cep": "24020-076",
   "bairro": "Centro",
   "cidade": "Niteroi",
   "uf": "RJ",
   "ddd": 21,
   "telefone": "36281818/ 36284141",
   "horario": "SEG A SEX (9:00 - 18:40)"
 },
 {
   "nome": "Ducatel Campos",
   "end": "Rua 13 de maio, 125",
   "cep": "28010-260",
   "bairro": "Centro",
   "cidade": "Campo dos Goytacazes",
   "uf": "RJ",
   "ddd": 22,
   "telefone": "27316156",
   "horario": "SEG A SEX(09:00-18:00) E SAB (09:00-12:00)"
 },
 {
   "nome": "Jota9 Celulares Megacenter Ribeirão",
   "end": "R. Olavo Bilac, 1092",
   "cep": "14025-400",
   "bairro": "Jardim Sumare",
   "cidade": "Ribeirao Preto",
   "uf": "SP",
   "ddd": 16,
   "telefone": "32354004 / 32354003",
   "horario": "SEG A SEX (08:00-18:00)"
 },
 {
   "nome": "Telemobile",
   "end": "A. Marcos de Freitas costa, 11",
   "cep": "38400-328",
   "bairro": "Daniel Fonseca",
   "cidade": "Uberlandia",
   "uf": "MG",
   "ddd": 34,
   "telefone": "3223-8009",
   "horario": "SEG A SEX(09:00-17:00) E SAB (08:00-12:00)"
 },
 {
   "nome": "Info Service",
   "end": "Av Antonio Basilio, 3006",
   "cep": "59054-380",
   "bairro": "Lagoa Nova",
   "cidade": "Natal",
   "uf": "RN",
   "ddd": 84,
   "telefone": "3201-0484",
   "horario": "SEG A SEX(09:00-18:00) E SAB (09:00-13:00)"
 },
 {
   "nome": "Celular Sao Bernardo",
   "end": "Av Rotary, 825",
   "cep": "09721-000",
   "bairro": "Centro",
   "cidade": "Sao Bernardo do Campo",
   "uf": "SP",
   "ddd": 11,
   "telefone": "4338-4544",
   "horario": "SEG A SEX(09:00-18:00) E SAB (09:00-13:00)"
 },
 {
   "nome": "Dactel Barra",
   "end": "Av das Americas, 700",
   "cep": "22640-100",
   "bairro": "Barra da Tijuca",
   "cidade": "Rio de Janeiro",
   "uf": "RJ",
   "ddd": 21,
   "telefone": "2494-9242 / 2494-5102",
   "horario": "SEG A SEX(09:00-18:00) E SAB (09:00-13:00)"
 },
 {
   "nome": "Connect Sta Maria (Opcional Hora Marcada)",
   "end": "R Barao de Souza Leao, 1139",
   "cep": "51030-300",
   "bairro": "Boa Viagem",
   "cidade": "Recife",
   "uf": "PE",
   "ddd": 81,
   "telefone": "3038-1349 / 3038-0459",
   "horario": "SEG A SEX(09:00-18:00)"
 },
 {
   "nome": "Myphone Celulares",
   "end": "R Alagoas, 1130",
   "cep": "30130-160",
   "bairro": "Funcionario",
   "cidade": "Belo HOrizonte",
   "uf": "MG",
   "ddd": 31,
   "telefone": "32254881",
   "horario": "SEG A SEX(09:00-18:00) E SAB (09:00-13:00)"
 },
 {
   "nome": "Megacenter Care Technology - Bauru",
   "end": "R Gustavo Maciel, Quadra,2150",
   "cep": "17012-110",
   "bairro": "Jardim Nasralla",
   "cidade": "Bauru",
   "uf": "SP",
   "ddd": 14,
   "telefone": "3208-1532",
   "horario": "SEG A SEX(08:00-17:30)"
 },
 {
   "nome": "3G Celulares",
   "end": "Av. Epaminondas Jacome, 2792, Sala 218",
   "cep": "69900-056",
   "bairro": "Centro",
   "cidade": "Rio Branco",
   "uf": "AC",
   "ddd": 68,
   "telefone": "3223-9195",
   "horario": "SEG A SEX(08:00-17:00) E SAB (08:00-12:00)"
 }
]       

   });