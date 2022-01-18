import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularteampp';
  newMemberName ='';
  members: string[] =[];
  errorMessage ='';
  numberOfTeams : number | ''= "";
  teams : string[][]= []
  

  onInput(member :string){
    this.newMemberName = member;
    console.log(this.newMemberName);
  }
  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = Number(value);
    this.newMemberName = '';
  }
  addMember(){
    if(!this.newMemberName){
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.errorMessage= '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    console.log(this.members)
  }

  generateTeam(){
    if(!this.numberOfTeams || this.numberOfTeams <=0)
    {
      this.errorMessage= "Invalid no of teams"
      return
    }
    if(this.members.length< this.numberOfTeams){
      this.errorMessage = 'Not enough members';
      return;
    }
    this.errorMessage = '';
    const allMember = [...this.members]
   while(allMember.length){
    for(let i = 0; i< this. numberOfTeams ; i++){
      const randomIndex = Math.floor(Math.random() * allMember.length)
      const member = allMember.splice(randomIndex, 1)[0];
      if(!member)break

      if(this.teams[i]){
        this.teams[i].push(member);
      }else{
        this.teams[i] = [member];
      }
    }
  }
  this.members = [];
  this.numberOfTeams = '';
   }
}
