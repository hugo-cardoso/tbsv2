// create the controller and inject Angular's $scope
scotchApp.controller('compareController', function($scope) {

    console.log("Compare");

    $("#comp1").change(function(){

        var select1 = $("#comp1").val();


        if(select1 === "motoe1"){
            $("#imagem1").attr("src", "res/img/motoe1.png");
            $("#tela1").html('4.3"');
            $("#ram1").html("1GB");
            $("#proc1").html("1.2 GHz Dual Core");
            $("#dual1").html("Sim");
            $("#cam1").html("5MP");
            $("#forg1").html("Não");
            $("#tv1").html("Possui versão com Tv");
            $("#bateria1").html("1980 mAh");
        }
        if(select1 === "motoe2"){
            $("#imagem1").attr("src", "res/img/motoe2.jpg");
            $("#tela1").html('4.5"');
            $("#ram1").html("1GB");
            $("#proc1").html("1.2 GHz Quad Core- Qualcomm Snapdragon 200 Adreno 306");
            $("#dual1").html("Sim");
            $("#cam1").html("5MP");
            $("#forg1").html("Não");
            $("#tv1").html("Possui versão com Tv");
            $("#bateria1").html("2390 mAh");
        }
        if(select1 === "motog1"){
            $("#imagem1").attr("src", "http://helpmotorola.atento.com.br/website/e_arq_comum/1/images/moto%20g1.png");
            $("#tela1").html('4.5"');
            $("#ram1").html("1GB");
            $("#proc1").html("1.2 GHz quad-core Qualcomm Snapdragon S400 (MSM8226)");
            $("#dual1").html("Sim");
            $("#cam1").html("5MP");
            $("#forg1").html("Possui versão com 4G");
            $("#tv1").html("Não");
            $("#bateria1").html("2070 mAh");
        }
        if(select1 === "motog2"){
            $("#imagem1").attr("src", "res/img/motog2.jpg");
            $("#tela1").html('5"');
            $("#ram1").html("1GB");
            $("#proc1").html("1.2 GHz quad-core Qualcomm Snapdragon S400 (MSM8226)");
            $("#dual1").html("Sim");
            $("#cam1").html("8MP");
            $("#forg1").html("Possui versão com 4G");
            $("#tv1").html("Possui versão com Tv");
            $("#bateria1").html("2070 mAh/2366 mAh");
        }
        if(select1 === "motog3"){
            $("#imagem1").attr("src", "res/img/motog3.jpg");
            $("#tela1").html('5"');
            $("#ram1").html("1GB (2GB Motomaker)");
            $("#proc1").html("1.4 GHz quad-core Qualcomm Snapdragon 410 (MSM8916)");
            $("#dual1").html("Sim");
            $("#cam1").html("13MP");
            $("#forg1").html("Sim");
            $("#tv1").html("Possui versão com Tv");
            $("#bateria1").html("2470 mAh");
        }
        if(select1 === "motog4"){
            $("#imagem1").attr("src", "res/img/motog4.jpg");
            $("#tela1").html('5.5"');
            $("#ram1").html("2GB");
            $("#proc1").html("4 x 1.5 GHz + 4 x 1.2 GHz Octa-core Qualcomm Snapdragon 617(MSM8952)");
            $("#dual1").html("Sim");
            $("#cam1").html("13MP");
            $("#forg1").html("Sim");
            $("#tv1").html("Sim");
            $("#bateria1").html("3000 mAh");
        }
        if(select1 === "motox1"){
            $("#imagem1").attr("src", "http://helpmotorola.atento.com.br/website/e_arq_comum/1/images/moto%20x1.png");
            $("#tela1").html('4.7"');
            $("#ram1").html("2GB");
            $("#proc1").html("1.7 GHz dual-core Qualcomm Snapdragon S4 (MSM8960 Pro)");
            $("#dual1").html("Não");
            $("#cam1").html("13MP");
            $("#forg1").html("Sim");
            $("#tv1").html("Não");
            $("#bateria1").html("2200 mAh");
        }
        if(select1 === "motox2"){
            $("#imagem1").attr("src", "res/img/motox2.jpg");
            $("#tela1").html('5.2"');
            $("#ram1").html("2GB");
            $("#proc1").html("2.5 GHz Quad-core Qualcomm Snapdragon S801 (MSM8974ac)");
            $("#dual1").html("Não");
            $("#cam1").html("13MP");
            $("#forg1").html("Sim");
            $("#tv1").html("Não");
            $("#bateria1").html("2300 mAh");
        }
        if(select1 === "motoxplay"){
            $("#imagem1").attr("src", "res/img/motoxplay.jpg");
            $("#tela1").html('5.5"');
            $("#ram1").html("2GB");
            $("#proc1").html("Octa-core Qualcomm Snapdragon 615 (1.7GHz Quadcore + 1.0GHz Quadcore )");
            $("#dual1").html("Sim");
            $("#cam1").html("21MP");
            $("#forg1").html("Sim");
            $("#tv1").html("Não");
            $("#bateria1").html("3630 mAh");
        }
        if(select1 === "motoxstyle"){
            $("#imagem1").attr("src", "res/img/motoxstyle.jpg");
            $("#tela1").html('5.7"');
            $("#ram1").html("3GB");
            $("#proc1").html("Hexa-core Qualcomm Snapdragon 808 (MSM8992)");
            $("#dual1").html("Sim");
            $("#cam1").html("21MP");
            $("#forg1").html("Sim");
            $("#tv1").html("Não");
            $("#bateria1").html("3000 mAh");
        }
        if(select1 === "motoxforce"){
            $("#imagem1").attr("src", "res/img/motoxforce.jpg");
            $("#tela1").html('5.4"');
            $("#ram1").html("3GB");
            $("#proc1").html("Octa-core Qualcomm® Snapdragon™ 810");
            $("#dual1").html("Sim");
            $("#cam1").html("21MP");
            $("#forg1").html("Sim");
            $("#tv1").html("Não");
            $("#bateria1").html("3760 mAh");
        }
        if(select1 === "motomaxx"){
            $("#imagem1").attr("src", "res/img/motomaxx.jpg");
            $("#tela1").html('5.2"');
            $("#ram1").html("3GB");
            $("#proc1").html("2.7 GHz Quad-core Qualcomm™ Snapdragon™ 805");
            $("#dual1").html("Não");
            $("#cam1").html("21MP");
            $("#forg1").html("Sim");
            $("#tv1").html("Não");
            $("#bateria1").html("3900 mAh");
        }
        else{

        }
    });

$("#comp2").change(function(){

    var select2 = $("#comp2").val();


    if(select2 === "motoe1"){
        $("#imagem2").attr("src", "res/img/motoe1.png");
        $("#tela2").html('4.3"');
        $("#ram2").html("1GB");
        $("#proc2").html("1.2 GHz Dual Core");
        $("#dual2").html("Sim");
        $("#cam2").html("5MP");
        $("#forg2").html("Não");
        $("#tv2").html("Possui versão com Tv");
        $("#bateria2").html("1980 mAh");
    }
    if(select2 === "motoe2"){
        $("#imagem2").attr("src", "res/img/motoe2.jpg");
        $("#tela2").html('4.5"');
        $("#ram2").html("1GB");
        $("#proc2").html("1.2 GHz Quad Core- Qualcomm Snapdragon 200 Adreno 306");
        $("#dual2").html("Sim");
        $("#cam2").html("5MP");
        $("#forg2").html("Não");
        $("#tv2").html("Possui versão com Tv");
        $("#bateria2").html("2390 mAh");
    }
    if(select2 === "motog1"){
        $("#imagem2").attr("src", "http://helpmotorola.atento.com.br/website/e_arq_comum/1/images/moto%20g1.png");
        $("#tela2").html('4.5"');
        $("#ram2").html("1GB");
        $("#proc2").html("1.2 GHz quad-core Qualcomm Snapdragon S400 (MSM8226)");
        $("#dual2").html("Sim");
        $("#cam2").html("5MP");
        $("#forg2").html("Possui versão com 4G");
        $("#tv2").html("Não");
        $("#bateria2").html("2070 mAh");
    }
    if(select2 === "motog2"){
        $("#imagem2").attr("src", "res/img/motog2.jpg");
        $("#tela2").html('5"');
        $("#ram2").html("1GB");
        $("#proc2").html("1.2 GHz quad-core Qualcomm Snapdragon S400 (MSM8226)");
        $("#dual2").html("Sim");
        $("#cam2").html("8MP");
        $("#forg2").html("Possui versão com 4G");
        $("#tv2").html("Possui versão com Tv");
        $("#bateria2").html("2070 mAh/2366 mAh");
    }
    if(select2 === "motog3"){
        $("#imagem2").attr("src", "res/img/motog3.jpg");
        $("#tela2").html('5"');
        $("#ram2").html("1GB (2GB Motomaker)");
        $("#proc2").html("1.4 GHz quad-core Qualcomm Snapdragon 410 (MSM8916)");
        $("#dual2").html("Sim");
        $("#cam2").html("13MP");
        $("#forg2").html("Sim");
        $("#tv2").html("Possui versão com Tv");
        $("#bateria2").html("2470 mAh");
    }
    if(select2 === "motog4"){
        $("#imagem2").attr("src", "res/img/motog4.jpg");
        $("#tela2").html('5.5"');
        $("#ram2").html("2GB");
        $("#proc2").html("4 x 1.5 GHz + 4 x 1.2 GHz Octa-core Qualcomm Snapdragon 617(MSM8952)");
        $("#dual2").html("Sim");
        $("#cam2").html("13MP");
        $("#forg2").html("Sim");
        $("#tv2").html("Sim");
        $("#bateria2").html("3000 mAh");
    }
    if(select2 === "motox1"){
        $("#imagem2").attr("src", "http://helpmotorola.atento.com.br/website/e_arq_comum/1/images/moto%20x1.png");
        $("#tela2").html('4.7"');
        $("#ram2").html("2GB");
        $("#proc2").html("1.7 GHz dual-core Qualcomm Snapdragon S4 (MSM8960 Pro)");
        $("#dual2").html("Não");
        $("#cam2").html("13MP");
        $("#forg2").html("Sim");
        $("#tv2").html("Não");
        $("#bateria2").html("2200 mAh");
    }
    if(select2 === "motox2"){
        $("#imagem2").attr("src", "res/img/motox2.jpg");
        $("#tela2").html('5.2"');
        $("#ram2").html("2GB");
        $("#proc2").html("2.5 GHz Quad-core Qualcomm Snapdragon S801 (MSM8974ac)");
        $("#dual2").html("Não");
        $("#cam2").html("13MP");
        $("#forg2").html("Sim");
        $("#tv2").html("Não");
        $("#bateria2").html("2300 mAh");
    }
    if(select2 === "motoxplay"){
        $("#imagem2").attr("src", "res/img/motoxplay.jpg");
        $("#tela2").html('5.5"');
        $("#ram2").html("2GB");
        $("#proc2").html("Octa-core Qualcomm Snapdragon 615 (1.7GHz Quadcore + 1.0GHz Quadcore )");
        $("#dual2").html("Sim");
        $("#cam2").html("21MP");
        $("#forg2").html("Sim");
        $("#tv2").html("Não");
        $("#bateria2").html("3630 mAh");
    }
    if(select2 === "motoxstyle"){
        $("#imagem2").attr("src", "res/img/motoxstyle.jpg");
        $("#tela2").html('5.7"');
        $("#ram2").html("3GB");
        $("#proc2").html("Hexa-core Qualcomm Snapdragon 808 (MSM8992)");
        $("#dual2").html("Sim");
        $("#cam2").html("21MP");
        $("#forg2").html("Sim");
        $("#tv2").html("Não");
        $("#bateria2").html("3000 mAh");
    }
    if(select2 === "motoxforce"){
        $("#imagem2").attr("src", "res/img/motoxforce.jpg");
        $("#tela2").html('5.4"');
        $("#ram2").html("3GB");
        $("#proc2").html("Octa-core Qualcomm® Snapdragon™ 810");
        $("#dual2").html("Sim");
        $("#cam2").html("21MP");
        $("#forg2").html("Sim");
        $("#tv2").html("Não");
        $("#bateria2").html("3760 mAh");
    }
    if(select2 === "motomaxx"){
        $("#imagem2").attr("src", "res/img/motomaxx.jpg");
        $("#tela2").html('5.2"');
        $("#ram2").html("3GB");
        $("#proc2").html("2.7 GHz Quad-core Qualcomm™ Snapdragon™ 805");
        $("#dual2").html("Não");
        $("#cam2").html("21MP");
        $("#forg2").html("Sim");
        $("#tv2").html("Não");
        $("#bateria2").html("3900 mAh");
    }
});
});
