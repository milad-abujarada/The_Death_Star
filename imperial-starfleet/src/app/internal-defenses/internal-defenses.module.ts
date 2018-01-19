import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { DeathSquareComponent } from './death-square/death-square.component';
import { TurretComponent } from './turret/turret.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	DeathSquareComponent,
	TieFighterComponent,
	TurretComponent,
	LaserCannonComponent
  ],
  exports:[
  	DeathSquareComponent,
  	TieFighterComponent,
  	TurretComponent,
  	LaserCannonComponent
  ]
})
export class InternalDefensesModule { }
