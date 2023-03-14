class Logiciel {
  private _id: number;
  private _nom: string;
  private _version: string;
  private _urlsetup: string;
  private _urltuto: string;
  private _comment: string;
  //public visible: number;
  //public Utilisateurlogin: string;
  private _type: string;
  //public urlPort: string;
  private _urlimage: string;
  private _obsolete: boolean;

  public get id(): number {
    return this._id;
  }
  public get nom(): string {
    return this._nom;
  }
  public get version(): string {
    return this._version;
  }
  public get urlsetup(): string {
    return this._urlsetup;
  }
  public get urltuto(): string {
    return this._urltuto;
  }
  public get urlimage(): string {
    return this._urlimage;
  }
  public get comment(): string {
    return this._comment;
  }
  public get type(): string {
    return this._type;
  }
  public get obsolete(): boolean {
    return this._obsolete;
  }
  public get nomVersion(): string {
    return this._nom + " " + this._version;
  }


  public set id(val: number) {
    this._id = val;
  }
  public set nom(val: string){
    this._nom = val;
  }
  public set version(val: string){
    this._version = val;
  }
  public set urlsetup(val: string){
    this._urlsetup = val;
  }
  public set urltuto(val: string){
    this._urltuto = val;
  }
  public set urlimage(val: string){
    this._urlimage = val;
  }
  public set comment(val: string){
    this._comment = val;
  }
  public set type(val: string) {
    this._type = val;
  }
  public set obsolete(val: boolean){
    this._obsolete = val;
  }

}