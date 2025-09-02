import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PDFDocument, PDFPage, rgb } from 'pdf-lib';

@Component({
  selector: 'app-inicio-actividades',
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio-actividades.component.html',
  styleUrl: './inicio-actividades.component.css',
})
export class InicioActividadesComponent {
  pestanaActiva: string = 'razon';

  datos = {
    general: { dia: '', mes: '', anno: '', rolUnicoTributario: 1 },
    razon: {
      rut: '',
      apellidoP1: '',
      apellidoM1: '',
      nombres1: '',
      clasificacion: '',
      apellidoP2: '',
      apellidoM2: '',
      nombres2: '',
    },
    constitucion: {
      categoria: '',
      iva: '',
      exento: '',
      descripcion: '',
      codigoP: '',
      codigoS1: '',
      codigoS2: '',
      codigoS3: '',
      rap: '',
      rutP: '',
      calidadOcupacion: '',
      monto: '',
      tipoDomicilio: '',
      casilla: '',
      correo: '',
      region: '',
      comunaP: '',
      calle: '',
      numero: '',
      oficina: '',
      block: '',
      poblacion: '',
      ciudad: '',
      rol: '',
      comunaU: '',
      regimenTributario: '',
    },
    capital: {
      enterado: '',
      porEnterar: '',
      fechaE: '',
      totalCapital: '',
    },
    domicilio: {
      calle: '',
      numero: '',
      oficina: '',
      block: '',
      poblacion: '',
      comuna: '',
      ciudad: '',
      telefonoFijo: '',
      telefonoMovil: '',
      email: '',
    },
  };

  seleccionar(pestana: string) {
    this.pestanaActiva = pestana;
  }

  async enviar() {
    this.limpiar();
    this.obtenerFecha();
    await this.generarPDF();
    console.log('Datos del formulario:', this.datos);
    // Aquí podrías enviar los datos al backend
  }

  obtenerFecha() {
    const fecha = new Date();
    this.datos.general.dia = fecha.getDate().toString();
    this.datos.general.mes = (fecha.getMonth() + 1).toString();
    this.datos.general.anno = fecha.getFullYear().toString();
  }

  limpiar() {
    if (this.datos.constitucion.categoria == 'Segunda Categoría') {
      this.datos.constitucion.rap = '';
      this.datos.constitucion.rutP = '';
      this.datos.constitucion.calidadOcupacion = '';
      this.datos.constitucion.monto = '';
      this.datos.constitucion.tipoDomicilio = '';
      this.datos.constitucion.casilla = '';
      this.datos.constitucion.correo = '';
      this.datos.constitucion.region = '';
      this.datos.constitucion.comunaP = '';
      this.datos.constitucion.calle = '';
      this.datos.constitucion.numero = '';
      this.datos.constitucion.oficina = '';
      this.datos.constitucion.block = '';
      this.datos.constitucion.poblacion = '';
      this.datos.constitucion.ciudad = '';
      this.datos.constitucion.rol = '';
      this.datos.constitucion.comunaU = '';
      this.datos.constitucion.regimenTributario = '';
    } else if (this.datos.constitucion.tipoDomicilio == 'Domicilio Postal') {
      this.datos.constitucion.calle = '';
      this.datos.constitucion.numero = '';
      this.datos.constitucion.oficina = '';
      this.datos.constitucion.block = '';
      this.datos.constitucion.poblacion = '';
      this.datos.constitucion.ciudad = '';
      this.datos.constitucion.rol = '';
      this.datos.constitucion.comunaU = '';
    } else if (this.datos.constitucion.tipoDomicilio == 'Domicilio Postal') {
      this.datos.constitucion.casilla = '';
      this.datos.constitucion.correo = '';
      this.datos.constitucion.region = '';
      this.datos.constitucion.comunaP = '';
    }
  }

  async generarPDF(): Promise<Uint8Array> {
    try {
      const response = await fetch('pdfs/F4415_PN.pdf');

      if (!response.ok) {
        throw new Error(`Error al cargar el archivo: ${response.status}`);
      }

      const contentType = response.headers.get('Content-Type');
      if (!contentType?.includes('application/pdf')) {
        throw new Error('El archivo no es un PDF');
      }

      const arrayBuffer = await response.arrayBuffer();
      const pdfBytes = new Uint8Array(arrayBuffer);

      const pdfDoc = await PDFDocument.load(pdfBytes);
      const form = pdfDoc.getForm();
      form.flatten(); // Esto convierte todos los campos en contenido no editable
      const page = pdfDoc.getPage(0);

      page.drawRectangle({
        x: 226, // coordenadas del texto a borrar
        y: 740.5,
        width: 200,
        height: 12.5,
        color: rgb(1, 1, 1), // blanco, asumiendo fondo blanco
      });

      this.editarHeader(page);
      this.editarA(page);
      this.editarB(page);
      this.editarC(page);
      this.editarD(page);
      this.editarE(page);

      const pdfEditado = await pdfDoc.save();
      const blob = new Blob([pdfEditado], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url);

      return pdfEditado;
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      throw error;
    }
  }

  editarHeader(page: PDFPage) {
    page.drawText(this.datos.general.dia, {
      x: 322,
      y: 827,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.general.mes, {
      x: 352,
      y: 827,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.general.anno, {
      x: 378,
      y: 827,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.general.rolUnicoTributario.toString(), {
      x: 514,
      y: 827,
      size: 12,
      color: rgb(0, 0, 0),
    });
  }

  editarA(page: PDFPage) {
    page.drawText(this.datos.razon.rut, {
      x: 55,
      y: 777,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.razon.apellidoP1, {
      x: 150,
      y: 777,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.razon.apellidoM1, {
      x: 295,
      y: 777,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.razon.nombres1, {
      x: 445,
      y: 777,
      size: 10,
      color: rgb(0, 0, 0),
    });
  }

  editarB(page: PDFPage) {
    page.drawText(this.datos.razon.clasificacion, {
      x: 228,
      y: 743,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.razon.apellidoP2, {
      x: 55,
      y: 718,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.razon.apellidoM2, {
      x: 295,
      y: 718,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.razon.nombres2, {
      x: 445,
      y: 718,
      size: 10,
      color: rgb(0, 0, 0),
    });
  }

  editarC(page: PDFPage) {
    page.drawText(
      this.formatearConPuntos(this.datos.capital.enterado.toString()),
      {
        x: 165,
        y: 657,
        size: 10,
        color: rgb(0, 0, 0),
      }
    );

    page.drawText(
      this.formatearConPuntos(this.datos.capital.porEnterar.toString()),
      {
        x: 270,
        y: 657,
        size: 10,
        color: rgb(0, 0, 0),
      }
    );

    page.drawText(this.datos.capital.fechaE.toString().substring(8, 10), {
      x: 385,
      y: 657,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.capital.fechaE.toString().substring(5, 7), {
      x: 420,
      y: 657,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.capital.fechaE.toString().substring(0, 4), {
      x: 448,
      y: 657,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(
      this.formatearConPuntos(this.datos.capital.totalCapital.toString()),
      {
        x: 482,
        y: 657,
        size: 10,
        color: rgb(0, 0, 0),
      }
    );
  }

  editarD(page: PDFPage) {
    if (this.datos.constitucion.categoria == 'Primera Categoría') {
      page.drawText('X', {
        x: 160,
        y: 602,
        size: 10,
        color: rgb(0, 0, 0),
      });
      if (this.datos.constitucion.iva != '') {
        page.drawText('X', {
          x: 252,
          y: 608,
          size: 10,
          color: rgb(0, 0, 0),
        });
      }
      if (this.datos.constitucion.exento != '') {
        page.drawText('X', {
          x: 252,
          y: 595,
          size: 10,
          color: rgb(0, 0, 0),
        });
      }
    } else if (this.datos.constitucion.categoria == 'Segunda Categoría') {
      page.drawText('X', {
        x: 160,
        y: 578,
        size: 10,
        color: rgb(0, 0, 0),
      });
    }
    page.drawText(this.datos.constitucion.descripcion, {
      x: 105,
      y: 561,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.constitucion.codigoP, {
      x: 137,
      y: 541,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.constitucion.codigoS1, {
      x: 254,
      y: 541,
      size: 10,
      color: rgb(0, 0, 0),
    });
    page.drawText(this.datos.constitucion.codigoS2, {
      x: 371,
      y: 541,
      size: 10,
      color: rgb(0, 0, 0),
    });
    page.drawText(this.datos.constitucion.codigoS3, {
      x: 488,
      y: 541,
      size: 10,
      color: rgb(0, 0, 0),
    });
  }

  editarE(page: PDFPage) {
    page.drawText(this.datos.domicilio.calle, {
      x: 35,
      y: 480,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(this.datos.domicilio.numero, {
      x: 228,
      y: 480,
      size: 10,
      color: rgb(0, 0, 0),
    });
    page.drawText(this.datos.domicilio.oficina, {
      x: 290,
      y: 480,
      size: 10,
      color: rgb(0, 0, 0),
    });
    page.drawText(this.datos.domicilio.block, {
      x: 340,
      y: 480,
      size: 10,
      color: rgb(0, 0, 0),
    });
    page.drawText(this.datos.domicilio.poblacion, {
      x: 380,
      y: 480,
      size: 10,
      color: rgb(0, 0, 0),
    });
    page.drawText(this.datos.domicilio.comuna, {
      x: 35,
      y: 454,
      size: 10,
      color: rgb(0, 0, 0),
    });
    page.drawText(this.datos.domicilio.ciudad, {
      x: 185,
      y: 454,
      size: 10,
      color: rgb(0, 0, 0),
    });
    page.drawText(this.datos.domicilio.telefonoFijo, {
      x: 325,
      y: 454,
      size: 10,
      color: rgb(0, 0, 0),
    });
    page.drawText(this.datos.domicilio.telefonoMovil, {
      x: 460,
      y: 454,
      size: 10,
      color: rgb(0, 0, 0),
    });
    page.drawText(this.datos.domicilio.email, {
      x: 185,
      y: 440,
      size: 10,
      color: rgb(0, 0, 0),
    });
  }

  formatearConPuntos(numeroStr: string): string {
    // Elimina cualquier punto existente y valida que sea un número
    if (numeroStr == '') {
      return '';
    }

    const limpio = numeroStr.replace(/\./g, '');
    if (!/^\d+$/.test(limpio)) {
      throw new Error(
        'El input debe contener solo dígitos (sin decimales ni letras)'
      );
    }

    // Usa una expresión regular para agregar puntos cada 3 dígitos desde la derecha
    return limpio.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}
