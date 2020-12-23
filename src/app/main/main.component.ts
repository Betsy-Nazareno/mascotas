import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  mascotas = new FormControl();
  mascota;

  mascotasLista: any[] = [
    {
      nombre: "Hachiko",
      raza: "Akita inu",
      url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      descripcion:
        "Hachikō fue un perro japonés de raza akita, recordado por esperar a su amo, el profesor Hidesaburō Ueno, en la estación de Shibuya incluso varios años después de la muerte de este."
    },
    {
      nombre: "Mr. Tinkles",
      raza: "Persia",
      url:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2015828/rs_600x337-150928133308-123533.jpg",
      descripcion:
        "Este gato persia emprende lo que quizás muchos gatos han pensado: una revolución en contra de los perros. Egoísta, cruel y despiadado, pero interesante y gracioso."
    },
    {
      nombre: "Flipper",
      raza: "Delfín",
      url:
        "https://www.eluniverso.com/sites/default/files/styles/powgallery_1024/public/fotos/2012/01/28/vye09we280112-photo01_456_336.jpg",
      descripcion:
        "Flipper es una de las series estadounidenses de televisión producida por Ivan Tors Films en asociación con Metro-Goldwyn-Mayer Television."
    }
  ];

  constructor() {}

  ngOnInit() {
    this.mascota = this.mascotasLista[0];
  }

  change(event) {
    if (event.isUserInput) {
      this.mascota = this.mascotasLista.filter(
        el => el.nombre == event.source.value.nombre
      )[0];
    }
  }
}
