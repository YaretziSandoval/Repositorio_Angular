import {Component} from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 12780, name: 'Yaretzi Yamileth Sandoval Vázquez', weight: 5628414013, symbol: 'SAVY040926MNLNZRA0'},
  {position: 12772, name: 'Alejandra Jacqueline Lucio Zúñiga', weight: 8212116688, symbol: 'LUZA010301MNLCXLA2'},
  {position: 12772, name: 'Karen Sofía Álvarez Martínez', weight: 8211066839, symbol: 'AAMK030619MNLLRRB6'},
  {position: 12772, name: 'José Reynaldo Sillas Guerrero', weight: 8261542697, symbol: 'SIGR040605HNLLRYA8'},
  {position: 12762, name: 'Jonathan Cortés Pérez', weight: 81281712131, symbol: 'COPJ0401HVZRRNA4'},
  {position: 12761, name: 'Carlos Manuel Cortés López', weight: 6761141373, symbol: 'COLC010315HCHRPRA2'},
  {position: 12755, name: 'Gustavo Angel Borrego Ramírez', weight: 8211202886, symbol: 'BORG040523HNLRMSA7'},
  {position: 12781, name: 'Brandon Arturo Saravia González', weight: 8211110434, symbol: 'SAGB990213HNLRNR06'},
  {position: 12753, name: 'Carlos Alberto Álvarez Montes', weight: 8443107971, symbol: 'AAMC041101HNLLNRA0'},
  {position: 12779, name: 'Jorge Alberto Rubio Reyna', weight: 5631723441, symbol: 'RURJ041030HNLBYRA0'},
  {position: 12765, name: 'José Manuel de la Fuente Iracheta', weight: 8135585770, symbol: 'FUIM050817HNLNRNA0'},
  {position: 12763, name: 'Bryan Rolando de la Rosa Medrano', weight: 8211028403, symbol: 'ROMB041124HNLSDRA9'},
  {position: 12754, name: 'Felipe de Jesús Bernal Gazca', weight: 8341303508, symbol: 'BEGF040906HTSRZLA1'},


];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
  

})
export class DatosComponent{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


}