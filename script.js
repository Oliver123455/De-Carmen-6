// Distribución por semestres
const semestres = {
  "1er Ciclo": ["ECONOMÍA I", "MATEMÁTICA I", "INTRODUCCION A LOS NEGOCIOS GLOBALES", "TÉCNICAS DE REDACCIÓN Y COMUNICACIÓN", "METODOLOGÍA DE LA INVESTIGACIÓN", "ÁLGEBRA LINEAL"],
  "2do Ciclo": ["ECONOMÍA II", "MATEMÁTICA II", "ESTADISTICA DESCRIPTIVA", "CONTABILIDAD SOCIAL", "SOCIOLOGÍA", "CONTABILIDAD FINANCIERA"],
  "3er Ciclo": ["TEORÍA MICROECONÓMICA I", "TEORÍA MACROECONÓMICA I", "MATEMATICA PARA ECONOMISTAS I", "ESTADISTICA PARA ECONOMISTAS I", "HISTORIA ECONOMICA CONTEMPORANEA", "CONTABILIDAD DE COSTOS"],
  "4to Ciclo": ["TEORÍA MICROECONÓMICA II", "TEORÍA MACROECONÓMICA II", "TEORIA DE JUEGOS", "MATEMATICA FINANCIERA", "ESTADISTICA PARA ECONOMISTAS II", "MATEMATICA PARA ECONOMISTAS II"],
   "5to Ciclo": ["COMERCIO INTERNACIONAL", "ECONOMÍA MONETARIA Y BANCARIA", "TEORÍA MICROECONÓMICA III", "TEORÍA MACROECONÓMICA III", "FINANZAS DE EMPRESA I", "ECONOMÍA PÚBLICA"],
   "6to Ciclo": ["FINANZAS INTERNACIONALES", "ECONOMÍA POLÍTICA", "ECONOMETRÍA I", "FINANZAS DE EMPRESA II", "TEORÍA DE CRECIMIENTO ECONÓMICO", "ORGANIZACIÓN INDUSTRIAL"],
  "7to Ciclo": ["TEORÍA DE LA REGULACION ECONÓMICA", "ECONOMETRÍA II", "FORMULACION Y EVALUACION PRIVADA DE PROYECTOS", "ECONOMÍA DEL MEDIO AMBIENTE Y DE LOS RECURSOS NATURALES", "TEORÍA DEL DESARROLLO ECONÓMICO", "MICROFINANZAS (E)","ECONOMÍA DE LA INFORMACIÓN (E)"],
"8to Ciclo": ["FORMULACIÓN Y EVALUACIÓN DE PROYECTOS DE INVERSIÓN PÚBLICA", "MICROECONOMETRÍA", "MACROECONOMETRÍA", "HISTORIA DEL PENSAMIENTO ECONÓMICO", "TESIS I", "MERCADO DE VALORES Y CAPITALES (E)","LEGISLACIÓN ECONÓMICA Y COMERCIAL","PLANEAMIENTO ESTRATÉGICO (E)"],
 "9to Ciclo": ["TESIS II", "GESTIÓN PÚBLICA", "CIENCIA POLITICA", "GERENCIA DE NEGOCIOS INTERNACIONALES (E)", "LEGISLACIÓN DE COMERCIO INTERNACIONAL (E)", "MICROECONOMÍA AVANZADA (E)","FORM. Y EVAL. DE PROYECTOS DE EXPORTACIÓN (E)","ECONOMÍA LABORAL (E)"; "MARKETING PARA EL COMERCIO EXTERIOR (E)"; "ECONOMETRÍA AVANZADA (E)";"SEMINARIO DE ADUANAS (E)";"ECONOMÍA MATEMÁTICA (E)";"ECONOMÍA PORTUARIA (E)";"ECONOMÍA REGIONAL (E)";"EVALUACIÓN SOCIAL DE PROYECTOS (E)"],
 "10mo Ciclo": ["ECONOMÍA DE LAS POLÍTICAS SOCIALES", "POLÍTICA ECONÓMICA", "TRABAJO DE INVESTIGACIÓN", "DEONTOLOGÍA Y ÉTICA PROFESIONAL (E)", "INTEGRACIÓN ECONÓMICA (E)", "MACROECONOMÍA AVANZADA (E)";"FINANCIAMIENTO DEL COMERCIO EXTERIOR (E)";"ECONOMÍA MUNDIAL CONTEMPORÁNEA (E)":"CONTRATO INTERNACIONAL Y ARBIT. COMERCIAL (E)";"ECONOMÍA DE LOS SECTORES PRODUCTIVOS (E)";"ESTRATEGIAS DE PENETRACIÓN EN MERCADOS EXTERNOS (E)";"ECONOMÍA INSTITUCIONAL (E)";"INFORMÁTICA E INTERNET PARA LA GESTIÓN DE LA EMPRESA GLOBAL (E)";"ECONOMÍA DE LOS SERVICIOS PÚBLICOS (E)"],  
  
};

// Requisitos (quién desbloquea a quién)
const dependencias = {
  "ECONOMÍA I": ["ECONOMÍA II", "TEORÍA MICROECONÓMICA I"],
  "ECONOMÍA II": ["TEORÍA MACROECONÓMICA I"],
  "MATEMÁTICA I": ["MATEMÁTICA II", "ESTADISTICA DESCRIPTIVA"],
  "ÁLGEBRA LINEAL": ["MATEMÁTICA II", "ESTADISTICA DESCRIPTIVA"],
  "MATEMÁTICA II": ["TEORÍA MICROECONÓMICA I", "TEORÍA MACROECONÓMICA I", "MATEMATICA PARA ECONOMISTAS I"],
  "TEORÍA MICROECONÓMICA I": ["TEORÍA MICROECONÓMICA II", "TEORIA DE JUEGOS", "MATEMATICA FINANCIERA"],
  "TEORÍA MACROECONÓMICA I": ["TEORÍA MACROECONÓMICA II"],
  "ESTADISTICA DESCRIPTIVA": ["ESTADISTICA PARA ECONOMISTAS I"],
  "MATEMATICA PARA ECONOMISTAS I": ["TEORIA DE JUEGOS"],
  "ESTADISTICA PARA ECONOMISTAS I": ["ESTADISTICA PARA ECONOMISTAS II"],
  "CONTABILIDAD FINANCIERA": ["CONTABILIDAD DE COSTOS"],
  "CONTABILIDAD SOCIAL": ["TEORÍA MACROECONÓMICA I"]
  "SOCIOLOGÍA": ["NO ABRE NADA"]
"CONTABILIDAD FINANCIERA ": ["CONTABILIDAD DE COSTOS";"FINANZAS DE EMPRESA I"]
"TEORÍA MACROECONÓMICA I":["TEORÍA MACROECONÓMICA II";"ECONOMÍA POLÍTICA"]
"MATEMATICA PARA ECONOMISTAS I ":["TEORIA DE JUEGOS";"MATEMATICA PARA ECONOMISTAS II"]
"ESTADISTICA PARA ECONOMISTAS I":["ESTADISTICA PARA ECONOMISTAS II"]
"HISTORIA ECONOMICA CONTEMPORANEA":["CIENCIA POLITICA"]
"CONTABILIDAD DE COSTOS":["MATEMATICA FINANCIERA"]
"TEORÍA MICROECONÓMICA II ":["COMERCIO INTERNACIONAL";"TEORÍA MICROECONÓMICA III";"ECONOMÍA PÚBLICA";"ORGANIZACIÓN INDUSTRIAL";"TEORÍA DE LA REGULACION ECONÓMICA"]
"TEORÍA MACROECONÓMICA II":["ECONOMÍA MONETARIA Y BANCARIA"; "TEORÍA MACROECONÓMICA III";"ECONOMÍA PÚBLICA"]
"TEORIA DE JUEGOS":["ORGANIZACIÓN INDUSTRIAL"]
"MATEMATICA FINANCIERA":["FINANZAS DE EMPRESA I"]
"ESTADISTICA PARA ECONOMISTAS II": ["ECONOMETRÍA I"]
"MATEMATICA PARA ECONOMISTAS II": ["TEORÍA MICROECONÓMICA III";"TEORÍA MACROECONÓMICA III";"ECONOMÍA MATEMÁTICA (E)"]
"COMERCIO INTERNACIONAL":["FINANZAS INTERNACIONALES"; "SEMINARIO DE ADUANAS (E)"; "ECONOMÍA PORTUARIA (E)";"INTEGRACIÓN ECONÓMICA (E)"]
"ECONOMÍA MONETARIA Y BANCARIA":["NO ABRE NADA"]
"TEORÍA MICROECONÓMICA III":["ECONOMETRÍA I";"TEORÍA DE CRECIMIENTO ECONÓMICO";"TEORÍA DE LA REGULACION ECONÓMICA"; "TEORÍA MICROECONÓMICA III"; "ECONOMÍA DE LA INFORMACIÓN (E)"; "HISTORIA DEL PENSAMIENTO ECONÓMICO"; "MICROECONOMÍA AVANZADA (E)"; "ECONOMÍA LABORAL (E)"; "ECONOMÍA LABORAL (E)"; "ECONOMÍA INSTITUCIONAL (E)";"ECONOMÍA DE LOS SERVICIOS PÚBLICOS (E)"]
"TEORÍA MACROECONÓMICA III":["FINANZAS INTERNACIONALES"; "ECONOMETRÍA I"; "TEORÍA DE CRECIMIENTO ECONÓMICO"; "ECONOMÍA DEL MEDIO AMBIENTE Y DE LOS RECURSOS NATURALES"; "ECONOMÍA DE LA INFORMACIÓN (E)"; "HISTORIA DEL PENSAMIENTO ECONÓMICO"; "GESTIÓN PÚBLICA"; "ECONOMÍA LABORAL (E)"; "MACROECONOMÍA AVANZADA (E)";"ECONOMÍA DE LOS SECTORES PRODUCTIVOS (E)"]
"FINANZAS DE EMPRESA I":["FINANZAS DE EMPRESA II"]
"ECONOMIA PÚBLICA": ["NO ABRE NADA"]
"FINANZAS INTERNACIONALES": ["GERENCIA DE NEGOCIOS INTERNACIONALES (E)"; "LEGISLACIÓN DE COMERCIO INTERNACIONAL (E)"; "MARKETING PARA EL COMERCIO EXTERIOR (E)";"FINANCIAMIENTO DEL COMERCIO EXTERIOR (E)"]
"ECONOMIA POLÍTICA": ["CIENCIA POLITICA"]
"ECONOMETRÍA I": ["ECONOMETRÍA II"]
"FINANZAS DE EMPRESA II":  ["FORMULACION Y EVALUACION PRIVADA DE PROYECTOS"; "MICROFINANZAS (E)"; "MERCADO DE VALORES Y CAPITALES (E)"; "FINANCIAMIENTO DEL COMERCIO EXTERIOR (E)"]
"TEORÍA DE CRECIMIENTO ECONÓMICO ":["TEORÍA DEL DESARROLLO ECONÓMICO"]
"ORGANIZACIÓN INDUSTRIAL": ["NO ABRE NADA"]
"TEORÍA DE LA REGULACION ECONÓMICA": ["NO ABRE NADA"]
"ECONOMETRÍA II": ["MICROECONOMETRÍA"; "MACROECONOMETRÍA"; "TESIS I y ECONOMETRÍA AVANZADA (E)"]
"FORMULACION Y EVALUACION PRIVADA DE PROYECTOS ": ["FORMULACIÓN Y EVALUACIÓN DE PROYECTOS DE INVERSIÓN PÚBLICA";"EVALUACIÓN SOCIAL DE PROYECTOS (E)"]
"ECONOMÍA DEL MEDIO AMBIENTE Y DE LOS RECURSOS NATURALES ": ["NO ABRE NADA"]
"TEORÍA DEL DESARROLLO ECONÓMICO": ["LEGISLACIÓN ECONÓMICA Y COMERCIAL (E)"; "PLANEAMIENTO ESTRATÉGICO (E)"; "ECONOMÍA DE LAS POLÍTICAS SOCIALES"]
"MICROFINANZAS (E)": ["NO ABRE NADA"]
"ECONOMÍA DE LA INFORMACIÓN (E)": ["NO ABRE NADA"]
"FORMULACIÓN Y EVALUACIÓN DE PROYECTOS DE INVERSIÓN PÚBLICA":["FORM. Y EVAL. DE PROYECTOS DE EXPORTACIÓN (E)";"ECONOMÍA REGIONAL (E)"]
"MICROECONOMETRÍA": ["MICROECONOMÍA AVANZADA (E)"]
"MACROECONOMETRÍA": ["MACROECONOMÍA AVANZADA (E)"]
"HISTORIA DEL PENSAMIENTO ECONÓMICO": ["NO ABRE NADA"]
"TESIS I": ["TESIS II";"DEONTOLOGÍA Y ÉTICA PROFESIONAL (E)"]
"MERCADO DE VALORES Y CAPITALES (E) ": ["NO ABRE NADA"]
"LEGISLACIÓN ECONÓMICA Y COMERCIAL (E)": ["NO ABRE NADA"]
"PLANEAMIENTO ESTRATÉGICO (E)": ["NO ABRE NADA"]
"TESIS II": ["TRABAJO DE INVESTIGACIÓN"]
"GESTIÓN PÚBLICA": ["POLÍTICA ECONÓMICA";"ECONOMÍA MUNDIAL CONTEMPORÁNEA (E)"]
"CIENCIA POLITICA": ["NO ABRE NADA"]
"GERENCIA DE NEGOCIOS INTERNACIONALES (E)": ["ESTRATEGIAS DE PENETRACIÓN EN MERCADOS EXTERNOS (E)"]
"LEGISLACIÓN DE COMERCIO INTERNACIONAL (E)": ["CONTRATO INTERNACIONAL Y ARBIT. COMERCIAL (E)"]
"MICROECONOMÍA AVANZADA (E)": ["NO ABRE NADA"]
"FORM. Y EVAL. DE PROYECTOS DE EXPORTACIÓN (E)": ["NO ABRE NADA"]
"ECONOMÍA LABORAL (E)": ["NO ABRE NADA"]
"MARKETING PARA EL COMERCIO EXTERIOR (E)": ["NO ABRE NADA"]
"ECONOMETRÍA AVANZADA (E)": ["NO ABRE NADA"]
"SEMINARIO DE ADUANAS (E)": ["NO ABRE NADA"]
"ECONOMÍA MATEMÁTICA (E)": ["NO ABRE NADA"]
"ECONOMÍA PORTUARIA (E)": ["NO ABRE NADA"]
"ECONOMÍA REGIONAL (E)": ["NO ABRE NADA"]
"EVALUACIÓN SOCIAL DE PROYECTOS (E)": ["NO ABRE NADA"]
"ECONOMÍA DE LAS POLÍTICAS SOCIALES": ["NO ABRE NADA"]
"POLÍTICA ECONÓMICA": ["NO ABRE NADA"]
"TRABAJO DE INVESTIGACIÓN": ["NO ABRE NADA"]
"DEONTOLOGÍA Y ÉTICA PROFESIONAL (E)": ["NO ABRE NADA"]
"INTEGRACIÓN ECONÓMICA (E)": ["NO ABRE NADA"]
"MACROECONOMÍA AVANZADA (E)": ["NO ABRE NADA"]
"FINANCIAMIENTO DEL COMERCIO EXTERIOR (E)": ["NO ABRE NADA"]
"ECONOMÍA MUNDIAL CONTEMPORÁNEA (E)": ["NO ABRE NADA"]
"CONTRATO INTERNACIONAL Y ARBIT. COMERCIAL (E)": ["NO ABRE NADA"]
"ECONOMÍA DE LOS SECTORES PRODUCTIVOS (E)": ["NO ABRE NADA"]
"ESTRATEGIAS DE PENETRACIÓN EN MERCADOS EXTERNOS (E)": ["NO ABRE NADA"]
"ECONOMÍA INSTITUCIONAL (E)": ["NO ABRE NADA"]
"INFORMÁTICA E INTERNET PARA LA GESTIÓN DE LA EMPRESA GLOBAL (E)": ["NO ABRE NADA"]
"ECONOMÍA DE LOS SERVICIOS PÚBLICOS (E)": ["NO ABRE NADA"]
};

// Estado actual de los ramos
const estado = {}; // locked | active | completed

const mallaDiv = document.getElementById("malla");

function inicializar() {
  // Inicializar todos como locked
  for (let ciclo in semestres) {
    semestres[ciclo].forEach(ramo => {
      estado[ramo] = "locked";
    });
  }

  // Activar los del primer ciclo
  semestres["1er Ciclo"].forEach(ramo => {
    estado[ramo] = "active";
  });

  renderMalla();
}

function renderMalla() {
  mallaDiv.innerHTML = "";

  for (let ciclo in semestres) {
    const col = document.createElement("div");
    col.className = "semestre";
    const title = document.createElement("h2");
    title.textContent = ciclo;
    col.appendChild(title);

    semestres[ciclo].forEach(ramo => {
      const div = document.createElement("div");
      div.className = `ramo ${estado[ramo] || "locked"}`;
      div.textContent = ramo;
      div.onclick = () => {
        if (estado[ramo] !== "active") return;

        estado[ramo] = "completed";

        if (dependencias[ramo]) {
          dependencias[ramo].forEach(d => {
            if (estado[d] === "locked") {
              estado[d] = "active";
            }
          });
        }

        renderMalla();
      };

      col.appendChild(div);
    });

    mallaDiv.appendChild(col);
  }
}

inicializar();
