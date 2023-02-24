var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class MatiereDao {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let matieres = new Array();
            let response = yield fetch("php/matieres.php");
            if (response.ok) {
                let array = yield response.json();
                array.forEach((obj) => {
                    let matiere = new Matiere();
                    matiere.ID = obj.ID;
                    matiere.Code = obj.Code;
                    matiere.Nom = obj.Nom;
                    matieres.push(matiere);
                });
            }
            else
                throw new Error("Unable to get from server");
            return matieres;
        });
    }
}
//# sourceMappingURL=matieredao.js.map