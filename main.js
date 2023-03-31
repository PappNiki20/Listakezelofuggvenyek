import { OBJLISTA, SZOVEGLISTA, SZAMLISTA } from "./adat.js";

import {Akarmiszerint, szuresszerint,Nevszuresszerint} from "./adatKezeles.js";
/*rendezesLista, szamrendezes, veletlenSorred, objRendezesKor, objRendezesnev,*/
$(function () {
  /*console.log(OBJLISTA);
  let jsonObj = JSON.stringify(OBJLISTA);
  console.log(jsonObj);
  console.log(OBJLISTA[1].csaladiAllapot);*/
  /*rendezesLista(SZOVEGLISTA);
  szamrendezes(SZAMLISTA);
  veletlenSorred(SZAMLISTA);
  veletlenSorred(SZAMLISTA);*/
  
  
  Akarmiszerint(OBJLISTA, "kor");
  console.log(OBJLISTA);
  szuresszerint(OBJLISTA);
  Nevszuresszerint(OBJLISTA, "Z","nev")
});
