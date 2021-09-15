import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SatisfactionTrackerService {

  satisfactionEvaluations;

  constructor() { }
  getSatisfactionEvaluations() {
    return ['Saúde', 'Profissinal', 'Intelectual'];
  }
  satisfactionLevelAnalysis(subjectOfTheSatisfactionAnalysis, levelOfSatisfaction) {
    levelOfSatisfaction

  }
}
