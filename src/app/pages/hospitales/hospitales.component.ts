import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/service.index';
import { Hospital } from 'src/app/models/hospital.model';
import swal from 'sweetalert';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];

  constructor(
    public  _hospitalService: HospitalService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarHospitales();

    this._modalUploadService.notificacion
      .subscribe(() => this.cargarHospitales());
  }

  buscarHospital(termino: string){

    if(termino.length <= 0){
      this.cargarHospitales();
      return;
    }

    this._hospitalService.buscarHospital(termino)
      .subscribe(hospitales => this.hospitales = hospitales);
  }

  cargarHospitales(){
    this._hospitalService.cargarHospitales()
      .subscribe(hospitales => this.hospitales = hospitales);
  }

  guardarHospital(hospital: Hospital){

    this._hospitalService.actualizarHospital(hospital)
      .subscribe();

  }

  borrarHospital(hospital: Hospital){

    swal({
      title: '!!ATENCIÓN¡¡',
      text: 'Esta a punto de borrar a ' + hospital.nombre + '.',
      icon: 'warning',
      buttons: ['Cancelar', 'Aceptar'],
      dangerMode: true,
    })
      .then(borrar => {
        console.log(borrar);

        if (borrar) {

          this._hospitalService.borrarHospital(hospital._id)
          .subscribe(() => this.cargarHospitales());
        }
      });
  }

  crearHospital(){
    swal({
      title: '¡CREAR HOSPITAL!',
      text: 'Ingrese el nombre del hospital',
      content: {
        element: 'input'
      } ,
      icon: 'info',
      buttons: ['Cancelar', 'Guardar'],
      dangerMode: true
    }).then((valor: string) =>{
      
      if(!valor || valor.length === 0){
        return;
      }

      this._hospitalService.crearHospital(valor)
        .subscribe(() => {
          this.cargarHospitales()
          return swal('¡HOSPITAL CREADO!', 'El hospital se creó correctamente.', 'success');
        });
    });
  }

  actualizarImagen(hospital: Hospital){
    this._modalUploadService.mostrarModal('hospitales', hospital._id)
  }

}
