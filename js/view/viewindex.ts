class ViewIndex implements IObserver {
  private controler: Controler;
  private filieres: HTMLSelectElement;

  public constructor(controler: Controler) {
    this.controler = controler;
    this.filieres = document.getElementById("years") as HTMLSelectElement;
    this.listFilieres();
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
}