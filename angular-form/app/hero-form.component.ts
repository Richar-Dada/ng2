import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    moduleId:module.id,
    selector:'hero-form',
    templateUrl:'hero-form.component.html'
})

export class HeroFormComponent{
    powers = ['Really Smart','Super Flexible','Super Hot','Weather Changer'];

    model = new Hero(18,'Dr IQ',this.powers[0],'chuck Overstreet');

    submitted = false;

    onSubmit(){this.submitted = true;}

    get diagnostic(){ return JSON.stringify(this.model) }
}