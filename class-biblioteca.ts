import { Libro } from 'class-libro';

export class Biblioteca {
  private numScaffale: number;
  private nomeSezione: string;
  private listaLibri: Libro[];

  constructor(numScaffale: number, nomeSezione: string, listaLibri: Libro[]) {
    this.scaffale = numScaffale;
    this.sezione = nomeSezione;
    this.libri = listaLibri;
  }
  mostraSezione() {
    return this.scaffale + ' ' + this.sezione + ' ' + this.libri;
  }

  public get scaffale() {
    return this.numScaffale;
  }
  public set scaffale(Scaffale: number) {
    if (Scaffale < 0 || !Scaffale) {
      console.log('lo scaffale non esiste');
    }
    this.numScaffale = Scaffale;
  }

  public get sezione() {
    return this.nomeSezione;
  }
  public set sezione(Sezione: string) {
    if (!Sezione) {
      console.log('la sezione non esiste');
    }
    this.nomeSezione = Sezione;
  }

  public get libri() {
    return this.listaLibri;
  }
  public set libri(Libri: Libro[]) {
    if (!Libri) {
      console.log('i libri non esiste');
    }
    this.listaLibri = Libri;
  }

  public pushLibri(nuoviLibri: Libro) {
    this.listaLibri.push(nuoviLibri);
  }
}
