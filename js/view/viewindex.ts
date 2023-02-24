class ViewIndex implements IObserver {
  private controler: Controler;
  private filieres: HTMLSelectElement;
  private matieres: HTMLSelectElement;

  public constructor(controler: Controler) {
    this.controler = controler;
    this.filieres = document.getElementById("years") as HTMLSelectElement;
    this.matieres = document.getElementById("courses") as HTMLSelectElement;
    this.listFilieres();
    this.listMatieres();
  }

  private async listFilieres() {
    try {
      let dao = new FiliereDao();
      let filieres = await dao.getAll();
      filieres.forEach((filiere: Filiere) => {
        let item: HTMLOptionElement = document.createElement("option") as
          HTMLOptionElement;
        item.value = filiere.ID.toString();
        item.innerHTML = filiere.nom;
        this.filieres.appendChild(item);
      });
    }
    catch (e) {
      alert(e.message);
    }
  }

  private async listMatieres() {
    try {
      let dao = new MatiereDao();
      let matieres = await dao.getAll();
      matieres.forEach((matiere: Matiere) => {
        let item: HTMLOptionElement = document.createElement("option") as
          HTMLOptionElement;
        item.value = matiere.ID.toString();
        item.innerHTML = matiere.Nom;
        this.matieres.appendChild(item);
      });
    }
    catch (e) {
      alert(e.message);
    }
  }
}