const se = new StarterEngine();

se.valor;

se.setResources = function () {
    //Add lista resource
    this.loader.addResource("background", "Backgrounds/purple.png", "image");
	
	this.loader.addResource("background2", "Backgrounds/blue.png", "image");
	
	
    this.loader.addResource("bola_amarela", "b_amarela.png", "image");
    this.loader.addResource("bola_amarela_on", "b_amarela_on.png", "image");
	
    this.loader.addResource("bola_azul", "b_azul.png", "image");
    this.loader.addResource("bola_azul_on", "b_azul_on.png", "image");
	
    this.loader.addResource("bola_laranja", "b_laranja.png", "image");
    this.loader.addResource("bola_laranja_on", "b_laranja_on.png", "image");
	
    this.loader.addResource("bola_vermelha", "b_vermelha.png", "image");
    this.loader.addResource("bola_vermelha_on", "b_vermelha_on.png", "image");
	
    this.loader.addResource("bloco", "bloco.png", "image");
    this.loader.addResource("bloco2", "bloco2.png", "image");
    this.loader.addResource("linha", "linha.png", "image");

};


//Quando o loading acabar
se.gameReady = function() {

	var jogo = new Scene();
	jogo.setFunctionStart( setJogo );
	this.mlevel.addScene(jogo);

}

function setJogo(){

	
	new GameObject("linha", 20,120,"bloco1", 660, 5);
	new GameObject("linha", 20,220,"bloco1", 660, 5);
	new GameObject("linha", 20,320,"bloco1", 660, 5);
	new GameObject("linha", 20,420,"bloco1", 660, 5);


	new GameObject("bloco", 20,20,"bloco1", 660, 20);
	new GameObject("bloco", 20,520,"bloco1", 660, 20);
	new GameObject("bloco2", 20,20,"bloco1",20, 500);
	new GameObject("bloco2", 660,20,"bloco1",20, 500);
	
	//bolas
	
	anim = new Animation( ["bola_amarela"]);
	anim2 = new Animation( ["bola_amarela_on"]);

	
	b01 = new Bola( [anim, anim2] , 50, 100, "button",1 );
	b02 = new Bola( [anim, anim2], 100, 100, "button",1 );
	b03 = new Bola( [anim, anim2], 150, 100, "button",1 );
	b04 = new Bola( [anim, anim2], 200, 100, "button",1 );
	b05 = new Bola( [anim, anim2], 250, 100, "button",1 );

	
	b01.setDependence(b02, null);
	b02.setDependence(b03, b01);
	b03.setDependence(b04, b02);
	b04.setDependence(b05, b03);
	b05.setDependence(null, b04);
	
	anim3 = new Animation( ["bola_azul"]);
	anim4 = new Animation( ["bola_azul_on"]);
	
	b11 = new Bola([anim3, anim4], 50, 200, "button", 10 );
	b12 = new Bola([anim3, anim4], 100, 200, "button", 10 );
	b13 = new Bola([anim3, anim4], 150, 200, "button", 10 );
	b14 = new Bola([anim3, anim4], 200, 200, "button", 10 );
	b15 = new Bola([anim3, anim4], 250, 200, "button", 10 );
	
	
	b11.setDependence(b12, null);
	b12.setDependence(b13, b11);
	b13.setDependence(b14, b12);
	b14.setDependence(b15, b13);
	b15.setDependence(null, b14);
	
	anim5 = new Animation( ["bola_laranja"]);
	anim6 = new Animation( ["bola_laranja_on"]);
	
	
	b21 = new Bola([anim5, anim6], 50, 300, "button", 100 );
	b22 = new Bola([anim5, anim6], 100, 300, "button", 100 );
	b23 = new Bola([anim5, anim6], 150, 300, "button", 100 );
	b24 = new Bola([anim5, anim6], 200, 300, "button", 100 );
	b25 = new Bola([anim5, anim6], 250, 300, "button", 100 );
	
	b21.setDependence(b22, null);
	b22.setDependence(b23, b21);
	b23.setDependence(b24, b22);
	b24.setDependence(b25, b23);
	b25.setDependence(null, b24);
	
	anim7 = new Animation( ["bola_vermelha"]);
	anim8 = new Animation( ["bola_vermelha_on"]);
	
	
	b31 = new Bola([anim7, anim8], 50, 400, "button", 1000 );
	b32 = new Bola([anim7, anim8], 100, 400, "button", 1000 );
	b33 = new Bola([anim7, anim8], 150, 400, "button", 1000 );
	b34 = new Bola([anim7, anim8], 200, 400, "button", 1000 );
	b35 = new Bola([anim7, anim8], 250, 400, "button", 1000 );
	
	b31.setDependence(b32, null);
	b32.setDependence(b33, b31);
	b33.setDependence(b34, b32);
	b34.setDependence(b35, b33);
	b35.setDependence(null, b34);
	
	//arrayB = [b01, b02, b03, b04, b05,b11, b12, b13, b14, b15,b21, b22, b23, b24, b25,b31, b32, b33, b34, b35];
	 
	valor = 0;
	
	txt = new Text("VALOR: ?", 30, 570, "white", 25)

	txt.update = function(){
	
		this.setText("VALOR: " + valor);
	}
}

