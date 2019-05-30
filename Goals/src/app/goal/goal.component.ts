import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = [
    new Goal(1, 'Watch Gotham', 'Find an online version and watch merlin find his son', new Date(2018, 3, 14) ),
    new Goal(2, 'join the one percent', 'Put the work in', new Date(2019, 6, 9)),
    new Goal(3, 'Be the best dev', 'Acquire knowledge and up the skill', new Date(2019, 9, 12)),
    new Goal(4, 'Buy food', 'Get some pizza', new Date(2019, 7, 18)),
    new Goal(5, 'Buy cookies', 'Only Oreos', new Date(2019, 8, 14)),
    new Goal(6, 'Buy iphone', 'the xs or 11', new Date(2019, 9, 14)),
  ];
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }
  deleteGoal(isComplete, index){
    if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`);
        if (toDelete) {
          this.goals.splice(index, 1);
        }
      }
    }
  toogleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }


}
