import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes_hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase(); /* ==> getters are properties and look like properties */
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }
  resetForm(): void {
    this.name = 'iroman';
    this.age = 45;
  }
}
