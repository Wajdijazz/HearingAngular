export class QuestionBase<T> {
  id : Number;
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  dependance: {key:string, label:string,value:string};
 
  constructor(options: {
      id?: Number,
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      dependance?: {key:string, label:string,value:string},
    } = {}) {
    this.id=options.id;
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.dependance = options.dependance || {key:'', label:'',value:''};
  }



}