
	
window.onload = gestoreLoad;
let listaO =  [];

class prodottoOrdinato {
   			
   			  constructor(name, prezzo, qnt) {
   				this.name = name;
   						    
   							this.prezzo = prezzo;
   							
   							this.qnt = qnt;
   					
   			  }
			  visualizza(){
			  		
			  		return "Nome: " + this.name + " Prezzo " +  this.prezzo + " Quantità " +  this.qnt;
			  	  }
			  	}
			  	

function gestoreLoad(){
	
	
	
	
	$.ajax({
	       url: '/show',  // URL dell'endpoint REST
	       type: 'GET',
	       success: function(data) {
			   
	           data.forEach(function(item) {
				
				let p1 = new prodottoOrdinato(item.nome, item.prezzo);
				
				listaO.push(p1);
				 
				
				
	               
	           });
	       },
	       error: function(jqXHR, textStatus, errorThrown) {
	           console.error('Error fetching data:', textStatus, errorThrown);
	           $('#dataList').append('<li>Error loading data</li>');
	       }
	   });
	   
	   
	  
	
	
	   let nodo = document.getElementById("result");
		  
		
	let btn = document.getElementById("btn");
	btn.onclick = add;
	let lista =[];
	
	function add(){
		
		
		
		
		
		for (let i = 0; i < listaO.length; i++) {
			        
					let qnt = document.getElementById(listaO[i].name).value;
					console.log(qnt);
					if (qnt > 0){
						let p1 = new prodottoOrdinato(listaO[i].name, listaO[i].prezzo, qnt);
						lista.push(p1);
					}
					
				}
				
						
		crea();
		lista = [];
		
	}
	
	function crea(){
		
		rimuoviFigli(nodo);
		
		let tot = 0;
	  
		for (let i = 0; i < lista.length; i++){
			
			let nodoP = document.createElement("p");
			nodoP.textContent = lista[i].visualizza();
			nodo.appendChild(nodoP);
			tot += lista[i].prezzo;
			
		}
		let nodoT = document.createElement("p");
				nodoT.textContent = "Totale : " +  tot;
				nodo.appendChild(nodoT);
	}
	
	function rimuoviFigli (nodo) {
	 while (nodo.childNodes.length > 0) {
	 nodo.removeChild(nodo.firstChild);
	 
	 
	 }}	
	
	
	
	
	
	
}	
	
	 
	
	

