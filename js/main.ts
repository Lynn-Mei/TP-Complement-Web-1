window.onload = async () => {
  let controler = new Controler();
  let index = new ViewIndex(controler);
  console.log("Application init done.");
  let dao = new LogicielDao();
  let test = await dao.getAll();
  console.log("Filieres get from server :");
  console.log(test);

};