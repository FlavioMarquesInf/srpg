export type Emotional = string;
export type Rational = number;

export interface IEvaluation {
  satisfactionLevel: SatisfactionLevel;
  value: Emotional | Rational;
}
