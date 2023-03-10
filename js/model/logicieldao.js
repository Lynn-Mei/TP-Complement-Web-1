var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class LogicielDao {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let logiciels = new Array();
            let response = yield fetch("php/logiciels.php");
            if (response.ok) {
                let array = yield response.json();
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
        });
    }
}
//# sourceMappingURL=logicieldao.js.map