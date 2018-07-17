import {Pipe, PipeTransform} from '@angular/core'
@Pipe({
    name: 'Convert'
})

export class ConvertPipe implements PipeTransform  {
    transform(value: number, format:string): string{
        if(format == 'CtoF')
            return value +'°C is '+((value * 9 / 5) + 32) +'°F';
        else if (format == 'FtoC')
            return value + '°F is ' + ((value - 32) * 5 / 9) +'°C';
    }
}