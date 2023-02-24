var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ViewIndex {
    constructor(controler) {
        this.controler = controler;
        this.filieres = document.getElementById("years");
        this.listFilieres();
    }
    listFilieres() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let dao = new FiliereDao();
                let filieres = yield dao.getAll();
                filieres.forEach((filiere) => {
                    let item = document.createElement("option");
                    item.value = filiere.ID.toString();
                    item.innerHTML = filiere.nom;
                    this.filieres.appendChild(item);
                });
            }
            catch (e) {
                alert(e.message);
            }
        });
    }
}
//# sourceMappingURL=viewindex.js.map