var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b, _c, _d;
var _this = this;
var reportAcudits = [];
var cargarNuevoChiste = function () { return __awaiter(_this, void 0, void 0, function () {
    var myHeaders, requestOptions, respuesta, datos, chiste, myElement, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                myHeaders = new Headers();
                myHeaders.append("Accept", "application/json");
                requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                };
                return [4 /*yield*/, fetch("https://icanhazdadjoke.com/", requestOptions)];
            case 1:
                respuesta = _a.sent();
                if (!respuesta.ok) {
                    throw new Error("HTTP error! Status: ".concat(respuesta.status));
                }
                return [4 /*yield*/, respuesta.json()];
            case 2:
                datos = _a.sent();
                chiste = datos.joke;
                console.log("Este es mi nuevo chiste: " + chiste);
                myElement = document.getElementById("chistecito");
                if (myElement) {
                    myElement.innerHTML = "<h1>".concat(chiste, "</h1>");
                }
                else {
                    console.error("Elemento con id 'chistecito' no encontrado");
                }
                reportAcudits.push({
                    joke: chiste,
                    score: 0,
                    date: new Date().toISOString(),
                });
                console.log("Este es un reporte de chistes: ", reportAcudits);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error("Error al cargar el chiste:", error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var votoChiste = function (score) {
    if (reportAcudits.length > 0) {
        reportAcudits[reportAcudits.length - 1].score = score;
        reportAcudits[reportAcudits.length - 1].date = new Date().toISOString();
        console.log("Reporte nuevo : ", reportAcudits);
    }
};
(_a = document.getElementById("nuevoChiste")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", cargarNuevoChiste);
(_b = document.querySelector(".sad-image")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return votoChiste(1); });
(_c = document.querySelector(".normal-image")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { console.log("Sad image clicked"); votoChiste(2); });
(_d = document.querySelector(".happy-image")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    console.log("Happy image clicked");
    votoChiste(3);
});
cargarNuevoChiste();
//Clima
var cargarClima = function () { return __awaiter(_this, void 0, void 0, function () {
    var myHeaders, requestOptions, respuesta, datos, lugar, myElement, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Función cargarClima llamada"); // Añade este log
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                myHeaders = new Headers();
                myHeaders.append("Accept", "application/json");
                requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                };
                return [4 /*yield*/, fetch("https://www.meteosource.com/api/v1/free/find_places_prefix?key=h0xfi7lv092neom9tueiu15yj0jabx9htj5j0cw3&text=08013", requestOptions)];
            case 2:
                respuesta = _a.sent();
                if (!respuesta.ok) {
                    throw new Error("Error al obtener el lugar: ".concat(respuesta.status));
                }
                return [4 /*yield*/, respuesta.json()];
            case 3:
                datos = _a.sent();
                console.log("Respuesta de la API:", datos);
                if (!datos.places || datos.places.length === 0) {
                    console.error("No se encontró un lugar con el prefijo dado.");
                    return [2 /*return*/];
                }
                lugar = datos.places[0];
                console.log("Lugar encontrado:", lugar);
                myElement = document.getElementById("clima");
                if (myElement) {
                    myElement.innerHTML = "<h1>Lugar: ".concat(lugar.name, ", Pa\u00EDs: ").concat(lugar.country, "</h1>");
                }
                else {
                    console.error("Elemento con id 'clima' no encontrado");
                }
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                console.error("Error al cargar el clima:", error_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
// Llamamos a la función para cargar el clima
cargarClima();
