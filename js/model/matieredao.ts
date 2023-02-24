class MatiereDao {
  public async getAll(): Promise<Array<Matiere>> {
    let matieres = new Array<Matiere>();
    let response = await fetch("php/matieres.php");
    if (response.ok) {
      let array = await response.json();
      array.forEach((obj) => {
        let matiere = new Matiere();
        matiere.ID = obj.ID;
        matiere.Code = obj.Code
        matiere.Nom = obj.Nom;
        matieres.push(matiere);
      });
    }
    else
      throw new Error("Unable to get from server");
    return matieres;
  }
}