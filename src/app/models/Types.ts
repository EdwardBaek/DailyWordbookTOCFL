export enum CARD_TYPE {
  'SIMPLE',
  'HIDE',
  'HIDE2',
  'FLIP',
  'FLIP2',
  // For Test
  // 'TEST',
};
export const CARD_TYPE_NAMES: any[] = [
  {id:CARD_TYPE.SIMPLE,  name:'Simple'},
  {id:CARD_TYPE.HIDE,    name:'Hide'},
  {id:CARD_TYPE.HIDE2,   name:'Hide2'},
  {id:CARD_TYPE.FLIP,    name:'Flip'},
  {id:CARD_TYPE.FLIP2,   name:'Flip2'},
  // For Test
  // {id:CARD_TYPE.TEST,   name:'Test'},
];
// Level starts from 1
export enum LEVEL {
  'LEVEL_1' = 1,
  'LEVEL_2',
  'LEVEL_3',
  'LEVEL_4',
  'LEVEL_5'
}
export const LEVELS: any[] = [
  {id: LEVEL.LEVEL_1,  name:'Level 1', value: 1},
  {id: LEVEL.LEVEL_2,  name:'Level 2', value: 2},
  {id: LEVEL.LEVEL_3,  name:'Level 3', value: 3},
  {id: LEVEL.LEVEL_4,  name:'Level 4', value: 4},
  {id: LEVEL.LEVEL_5,  name:'Level 5', value: 5}
];
export const QUESTION_COUNT: any[] = [
  {id:1, value: 5},
  {id:2, value: 10},
  {id:3, value: 15},
  {id:4, value: 20},
];