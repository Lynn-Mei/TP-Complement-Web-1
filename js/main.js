var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.onload = () => __awaiter(this, void 0, void 0, function* () {
    let controler = new Controler();
    let index = new ViewIndex(controler);
    console.log("Application init done.");
    let dao = new LogicielDao();
    let test = yield dao.getAll();
    console.log("Filieres get from server :");
    console.log(test);
});
//# sourceMappingURL=main.js.map