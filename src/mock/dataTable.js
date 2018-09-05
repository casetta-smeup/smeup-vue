import faker from "faker";

const columns = [];

const rows = [];

// creating columns
for (let i = 0; i < 20; i++) {
  columns.push("COL" + i);
}

for (let i = 0; i < 1000; i++) {
  var row = {};

  for (let j = 0; j < columns.length; j++) {
    // faking number
    const num = faker.random.number();
    row[columns[j]] = num;
  }

  rows.push(row);
}

const starWarRows = [
  {
    title: "Episode IV – A New Hope",
    date: "May 25, 1977",
    director: "George Lucas"
  },
  {
    title: "Episode V – The Empire Strikes Back",
    date: "May 21, 1980",
    director: "George Lucas"
  },
  {
    title: "Episode VI – Return of the Jedi",
    date: "May 25, 1983",
    director: "George Lucas"
  },
  {
    title: "Episode I – The Phantom Menace",
    date: "May 19, 1999",
    director: "George Lucas"
  },
  {
    title: "Episode II – Attack of the Clones",
    date: "May 16, 2002",
    director: "George Lucas"
  },
  {
    title: "Episode III – Revenge of the Sith",
    date: "May 19, 2005",
    director: "George Lucas"
  },
  {
    title: "Episode VII – The Force Awakens",
    date: "December 18, 2015",
    director: "George Lucas"
  },
  {
    title: "Episode VII – The Last Jedi",
    date: "December 15, 2017",
    director: "George Lucas"
  },
  {
    title: "Episode IX – Uomo Focaccina is Jar Jar Binks",
    date: "December 20, 2019",
    director: "George Lucas"
  },
  {
    title: "Rogue One: A Star Wars Story",
    date: "December 16, 2016",
    director: "Gareth Edwards"
  },
  {
    title: "Solo: A Star Wars Story",
    date: "May 25, 2018",
    director: "Ron Howard"
  }
];

const dataTableCols = [
  {
    c: "STR001",
    d: "NR",
    p: "",
    t: "NR",
    filterValue: "",
    sortMode: "D",
    width: "auto"
  },
  {
    c: "STR002",
    d: "NR",
    p: "",
    t: "NR",
    filterValue: "",
    sortMode: "D",
    width: "auto"
  },
  {
    c: "STR003",
    d: "NR neg.(-n)",
    p: "",
    t: "NR",
    filterValue: "",
    sortMode: "D",
    width: "auto"
  },
  {
    c: "STR004",
    d: "NR neg.(n-)",
    p: "",
    t: "NR",
    filterValue: "",
    sortMode: "D",
    width: "auto"
  },
  {
    c: "STR006",
    d: "NR (dec.sep: ,)",
    p: "",
    t: "NR",
    filterValue: "",
    sortMode: "D",
    width: "auto"
  },
  {
    c: "STR007",
    d: "Oggetto",
    p: "COL",
    t: "CN",
    filterValue: "",
    sortMode: "D",
    width: "auto"
  },
  {
    c: "STR008",
    d: "Oggetto",
    p: "",
    t: "NR",
    filterValue: "",
    sortMode: "D",
    width: "auto"
  },
  {
    c: "STR009",
    d: "Percentuale",
    p: "P",
    t: "NR",
    filterValue: "",
    sortMode: "D",
    width: "auto"
  }
];

const dataTableFewRows = [
  {
    selected: false,
    content: {
      STR001: { c: "005", p: "", t: "NR" },
      STR002: { c: "1,1", p: "", t: "NR" },
      STR003: { c: "-1,12", p: "", t: "NR" },
      STR004: { c: "1-", p: "", t: "NR" },
      STR006: { c: "1,102", p: "", t: "NR" },
      STR007: { c: "FIOGIA", p: "COL", t: "CN" },
      STR008: { c: "01", p: "", t: "NR" },
      STR009: { c: "20", p: "P", t: "NR" },
      RowId: { c: "0", p: "", t: "NR" },
      ID: { c: "1", p: "", t: "NR" }
    }
  },
  {
    selected: false,
    content: {
      STR001: { c: "001", p: "", t: "NR" },
      STR002: { c: "2,0", p: "", t: "NR" },
      STR003: { c: "-2,13", p: "", t: "NR" },
      STR004: { c: "2-", p: "", t: "NR" },
      STR006: { c: "2,1000", p: "", t: "NR" },
      STR007: { c: "SANCOS", p: "COL", t: "CN" },
      STR008: { c: "02", p: "", t: "NR" },
      STR009: { c: "33,3", p: "P", t: "NR" },
      RowId: { c: "1", p: "", t: "NR" },
      ID: { c: "2", p: "", t: "NR" }
    }
  },
  {
    selected: false,
    content: {
      STR001: { c: "001", p: "", t: "NR" },
      STR002: { c: "3,1", p: "", t: "NR" },
      STR003: { c: "-3,14", p: "", t: "NR" },
      STR004: { c: "3-", p: "", t: "NR" },
      STR006: { c: "3,12345", p: "", t: "NR" },
      STR007: { c: "PARFRA", p: "COL", t: "CN" },
      STR008: { c: "03", p: "", t: "NR" },
      STR009: { c: "0", p: "P", t: "NR" },
      RowId: { c: "2", p: "", t: "NR" },
      ID: { c: "3", p: "", t: "NR" }
    }
  },
  {
    selected: false,
    content: {
      STR001: { c: "002", p: "", t: "NR" },
      STR002: { c: "4,2", p: "", t: "NR" },
      STR003: { c: "-4,15", p: "", t: "NR" },
      STR004: { c: "4-", p: "", t: "NR" },
      STR006: { c: "4,4", p: "", t: "NR" },
      STR007: { c: "FORFED", p: "COL", t: "CN" },
      STR008: { c: "01", p: "", t: "NR" },
      STR009: { c: "", p: "P", t: "NR" },
      RowId: { c: "3", p: "", t: "NR" },
      ID: { c: "4", p: "", t: "NR" }
    }
  },
  {
    selected: false,
    content: {
      STR001: { c: "002", p: "", t: "NR" },
      STR002: { c: "12", p: "", t: "NR" },
      STR003: { c: "-12,16", p: "", t: "NR" },
      STR004: { c: "12-", p: "", t: "NR" },
      STR006: { c: "12,12", p: "", t: "NR" },
      STR007: { c: "BELQUI", p: "COL", t: "CN" },
      STR008: { c: "01", p: "", t: "NR" },
      STR009: { c: "44", p: "P", t: "NR" },
      RowId: { c: "4", p: "", t: "NR" },
      ID: { c: "5", p: "", t: "NR" }
    }
  },
  {
    selected: false,
    content: {
      STR001: { c: "002", p: "", t: "NR" },
      STR002: { c: "13,4", p: "", t: "NR" },
      STR003: { c: "-13,00", p: "", t: "NR" },
      STR004: { c: "13-", p: "", t: "NR" },
      STR006: { c: "13.123.213,012", p: "", t: "NR" },
      STR007: { c: "ROCMAT", p: "COL", t: "CN" },
      STR008: { c: "01", p: "", t: "NR" },
      STR009: { c: "66", p: "P", t: "NR" },
      RowId: { c: "5", p: "", t: "NR" },
      ID: { c: "6", p: "", t: "NR" }
    }
  },
  {
    selected: false,
    content: {
      STR001: { c: "002", p: "", t: "NR" },
      STR002: { c: "14,1", p: "", t: "NR" },
      STR003: { c: "-14,01", p: "", t: "NR" },
      STR004: { c: "14-", p: "", t: "NR" },
      STR006: { c: "1.123.114,49", p: "", t: "NR" },
      STR007: { c: "MAEOLI", p: "COL", t: "CN" },
      STR008: { c: "01", p: "", t: "NR" },
      STR009: { c: "100", p: "P", t: "NR" },
      RowId: { c: "6", p: "", t: "NR" },
      ID: { c: "7", p: "", t: "NR" }
    }
  },
  {
    selected: false,
    content: {
      STR001: { c: "002", p: "", t: "NR" },
      STR002: { c: "35,0", p: "", t: "NR" },
      STR003: { c: "-35,02", p: "", t: "NR" },
      STR004: { c: "35-", p: "", t: "NR" },
      STR006: { c: "1.235,35999", p: "", t: "NR" },
      STR007: { c: "CARLUC", p: "COL", t: "CN" },
      STR008: { c: "01", p: "", t: "NR" },
      STR009: { c: "1000", p: "P", t: "NR" },
      RowId: { c: "7", p: "", t: "NR" },
      ID: { c: "8", p: "", t: "NR" }
    }
  },
  {
    selected: false,
    content: {
      STR001: { c: "001", p: "", t: "NR" },
      STR002: { c: "55", p: "", t: "NR" },
      STR003: { c: "-55,03", p: "", t: "NR" },
      STR004: { c: "55-", p: "", t: "NR" },
      STR006: { c: "9.955,0000", p: "", t: "NR" },
      STR007: { c: "CASFRA", p: "COL", t: "CN" },
      STR008: { c: "01", p: "", t: "NR" },
      STR009: { c: "55,22", p: "P", t: "NR" },
      RowId: { c: "8", p: "", t: "NR" },
      ID: { c: "9", p: "", t: "NR" }
    }
  },
  {
    selected: false,
    content: {
      STR001: { c: "001", p: "", t: "NR" },
      STR002: { c: "121", p: "", t: "NR" },
      STR003: { c: "-121,0", p: "", t: "NR" },
      STR004: { c: "121-", p: "", t: "NR" },
      STR006: { c: "121,0", p: "", t: "NR" },
      STR007: { c: "DELGIO", p: "COL", t: "CN" },
      STR008: { c: "01", p: "", t: "NR" },
      STR009: { c: "20,11", p: "P", t: "NR" },
      RowId: { c: "9", p: "", t: "NR" },
      ID: { c: "10", p: "", t: "NR" }
    }
  }
];

const dataTableManyCols = new Array();

for (let i = 0; i < 20; i++) {
  dataTableManyCols.push({
    c: "STR00" + i,
    d: faker.random.word(),
    p: "",
    t: "",
    filterValue: "",
    sortMode: "D"
  });
}

const dataTableManyRows = new Array();

for (let i = 0; i < 1000; i++) {
  const obj = {
    mouseOver: false,
    selected: false,
    content: {
      RowId: { c: i, p: "", t: "NR" },
      ID: { c: i, p: "", t: "NR" }
    }
  };

  dataTableManyCols.forEach(
    col => (obj.content[col.c] = { c: faker.random.word(), p: "", t: "" })
  );

  dataTableManyRows.push(obj);
}

export default {
  columns,
  starWarRows,
  rows,
  dataTableCols,
  dataTableFewRows,
  dataTableManyCols,
  dataTableManyRows
};
