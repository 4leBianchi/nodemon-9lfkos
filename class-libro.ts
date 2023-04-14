export class Libro {
  private Numid: number;
  private titoloLibro: string;
  private autoreLibro: string;
  private dataPubblicazione: number;
  private Numvolumi: number;
  private Numlingue: string;
  constructor(Numid: number, titoloLibro: string, autoreLibro: string) {
    this.id = Numid;
    this.nomeDelLibro = titoloLibro;
    this.autore = autoreLibro;
  }

  mostraDati() {
    return this.id + ' ' + this.nomeDelLibro + ' ' + this.autore;
  }

  public get id() {
    return this.Numid;
  }
  public set id(theId: number) {
    if (theId < 0 || !theId) {
      console.log('id non esiste');
    }
    this.Numid = theId;
  }

  public get nomeDelLibro() {
    return this.titoloLibro;
  }
  public set nomeDelLibro(theNomeDelLibro: string) {
    if (!theNomeDelLibro) {
      console.log('nome non esiste');
    }
    this.titoloLibro = theNomeDelLibro;
  }

  public get autore() {
    return this.autoreLibro;
  }
  public set autore(theAutore: string) {
    if (!theAutore) {
      console.log('autore non esiste');
    }
    this.autoreLibro = theAutore;
  }

  public get annoDiPubblicazione() {
    return this.dataPubblicazione;
  }
  public set annoDiPubblicazione(theAnnoDiPubblicazione: number) {
    if (!theAnnoDiPubblicazione) {
      console.log('anno sbagliato');
    }
    this.dataPubblicazione = theAnnoDiPubblicazione;
  }

  public get volumi() {
    return this.Numvolumi;
  }
  public set volumi(theVolumi: number) {
    if (theVolumi <= 0 || !theVolumi) {
      console.log('numero di volumi non esiste');
    }
    this.Numvolumi = theVolumi;
  }

  public get lingue() {
    return this.Numlingue;
  }
  public set lingue(theLingue: string) {
    if (!theLingue) {
      console.log('numero di lingue non esiste');
    }
    this.Numlingue = theLingue;
  }
}
