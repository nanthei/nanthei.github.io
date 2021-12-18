import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  public selectedWorkshop:any;

transferName(selectedName: any){
  this.selectedWorkshop = selectedName;
}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    console.log(this.modalService);
  }

  ngOnInit(): void {
  }

  public workShopsList: any = [
    {
      name: 'Lietuviški patiekalai',
      picture:'assets/potato.jpg',
      about: "Tradicinių lietuviškų patiekalų gamyba."
    },
    {
      name: 'Itališka virtuvė',
      picture:'assets/pasta.jpg',
      about: "Italija tai ne tik makaronai - nuo Carpaccio iki Tiramisu."
    },
    {
      name: 'Amerikietiškas "FastFood"',
      picture:'assets/burger.jpg',
      about: "Skanus, didelių porcijų maistas kai nuodėmės nesvarbu."
    },
    {
      name: 'Rytietiški skoniai',
      picture:'assets/curry.jpg',
      about: "Išraiškūs Azijos skoniai pabudinantys skonių receptorius."
    },
    {
      name: 'Šventinė vakarienė',
      picture:'assets/salmon.jpg',
      about: "Kontrastingi patiekalai, kai atsibosta darbo savaitės rutina."
    },
  ]

}

