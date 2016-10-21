import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  public transform(value: any, args?: any): any {
    let newVal = value.filter(item=>item.type === args);
    console.log(args);
    return newVal;
  }

}
