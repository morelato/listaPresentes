import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  listaConvidados: Array<any>;  
  loopConvidados: number = 0;
  public inputNome: string ="";
  public inputIdade: string ="";
  public inputCPF: string="";
  public inputDataNascimento: string="";

  ssnome: string ='';
  ssidade: string ='';
  sscpf: string ='';
  ssdataNascimento: string ='';

  constructor(private router: Router) {
    this.listaConvidados = [];
   }

  ngOnInit(): void {
    if(localStorage.getItem("minhaLista") != null){
      var retrievedData = localStorage.getItem("minhaLista");
      this.listaConvidados = JSON.parse(<string>retrievedData);
    }

  }

  limpar(){
    localStorage.clear();
    let currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentUrl]);
        });
  }
  
  adicionarConvidado(): void{
    
    this.listaConvidados[this.listaConvidados.length] = [
      {nome: this.inputNome, idade: this.inputIdade, cpf: this.inputCPF, dataNascimento: this.inputDataNascimento}
       ]
       localStorage.setItem("minhaLista", JSON.stringify(this.listaConvidados));
        this.inputNome = '';
        this.inputIdade = '';
        this.inputCPF = '';
        this.inputDataNascimento ='';
      }     
}
