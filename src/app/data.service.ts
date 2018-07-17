import {Injectable} from '@angular/core'
@Injectable()
export class PeopleData{
    private goodPeople = [
        {name: 'Roger Federer', yearBorn: '1981'},
        { name: 'Steve Jobs', yearBorn: '1955' }
    ]
    getAllGoodPeople(){
        return this.goodPeople;
    }
}