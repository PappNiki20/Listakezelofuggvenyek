export function rendezesLista(list) {
  list.sort();
  console.log(list);
}
export function szamrendezes(list) {
  list.sort(function (a, b) {
    return a - b;
  });
  console.log(list);
}
export function veletlenSorred(list) {
  list.sort(function (a, b) {
    return Math.random() - 0, 5;
  });
}
export function objRendezesKor(list) {
  list.sort(function (a, b) {
    return a.kor - b.kor;
  });
}
export function objRendezesnev(list) {
  list.sort(function (a, b) {
    let e = 1;
    console.log(a.nev < b.nev);
    if (a.nev < b.nev) {
      e = -1;
    }
    return e;
  });
}
export function Akarmiszerint(list, kulcs) {
  list.sort(function (a, b) {
    let e = 1;

    if (a[kulcs] < b[kulcs]) {
      e = -1;
    }
    return e;
  });
}
// EVAL -> ertelmezi a függvényt, pl : felt = 50 <= kor
export function szuresszerint(list) {
  let szurtLista = list.filter(function (obj) {
    return obj.kor <= 50; 
  });
  console.log(szurtLista);
}
export function Nevszuresszerint(list, felt ,kulcs) {
    let szurtLista = list.filter(function (obj) {
       
      return obj[kulcs].includes(felt)
    });
    console.log(szurtLista);
    return szurtLista;
  }
