import { Component, OnInit, OnChanges , Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit , OnChanges{
public coracaoVazio : string= "/assets/coracao_vazio.png";
public coracaoCheio : string ="/assets/coracao_cheio.png";
public coracoes : Coracao[] = [
  new Coracao(true), new Coracao(true), new Coracao(true)
] 
@Input ("tentativas") public tentativas : number
constructor() { 
}

  ngOnChanges(){
    if(this.tentativas !== this.coracoes.length){
      this.coracoes[this.coracoes.length-this.tentativas-1].cheio= false
    }
  }
  ngOnInit() {
  }

}
