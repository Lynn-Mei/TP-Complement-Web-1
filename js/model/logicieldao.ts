class LogicielDao {
  public async getAll(): Promise<Array<Logiciel>> {
    let logiciels = new Array<Logiciel>();
    let response = await fetch("php/logiciels.php");
    if (response.ok) {
      let array = await response.json();
      array.forEach((obj) => {
        let logiciel = new Logiciel();
        logiciel.id = obj.ID;
        logiciel.nom = obj.nom;
        logiciel.version = obj.version;
        logiciel.urlimage = obj.urlimage;
        logiciels.push(logiciel);
      });
    }
    else
      throw new Error("Unable to get from server");
    return logiciels;
  }
}