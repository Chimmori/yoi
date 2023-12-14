const tombolTambah = document.querySelector('.pertambahan')
const tombolKurang = document.querySelector('.pengurangan')
const tombolKali = document.querySelector('.perkalian')
const tombolTranspose = document.querySelector('.transpose')
const tombolSkalar = document.querySelector('.skalar')
const tombolOrdo2 = document.querySelector('.ordo2')
const tombolOrdo3 = document.querySelector('.ordo3')

const containerOrdo = document.querySelector('.ordo')
const containerInput = document.querySelector('.input')
const containerOperasi = document.querySelector('.hasilOperasi')

var statusTombolTambah = false
var statusTombolKurang = false
var statusTombolKali = false
var statusTombolTranspose = false
var statusTombolSkalar = false
var statusTombolOrdo2 = false
var statusTombolOrdo3 = false
var duamatriksaktif = false
var satumatriksaktif = false

function getStatusTombol(buttonType){
  switch (buttonType) {
      case 'Tambah':
        // containerInput.innerHTML = "";
        if (statusTombolSkalar || statusTombolTranspose){
          containerInput.innerHTML = "";
        }
        statusTombolTambah = true;
        statusTombolKurang = false;
        statusTombolKali = false
        statusTombolTranspose = false;
        statusTombolSkalar = false;
        tampilkanUIOrdo();
        break;
        
      case 'Kurang':
        // containerInput.innerHTML = "";
        if (statusTombolSkalar || statusTombolTranspose){
          containerInput.innerHTML = "";
        }
        statusTombolTambah = false;
        statusTombolKurang = true;
        statusTombolKali = false
        statusTombolTranspose = false;
        statusTombolSkalar = false;
        tampilkanUIOrdo();
        break;

      case 'Kali':
        // containerInput.innerHTML = "";
        if (statusTombolSkalar || statusTombolTranspose){
          containerInput.innerHTML = "";
        }
        statusTombolTambah = false;
        statusTombolKurang = false;
        statusTombolKali = true;
        statusTombolTranspose = false;
        statusTombolSkalar = false;
        tampilkanUIOrdo();
        break;

      case 'Transpose':
        containerInput.innerHTML = "";
        statusTombolTambah = false;
        statusTombolKurang = false;
        statusTombolKali = false
        statusTombolTranspose = true;
        statusTombolSkalar = false;
        tampilkanUIOrdo();
        break;

      case 'Skalar':
        containerInput.innerHTML = "";
        statusTombolTambah = false;
        statusTombolKurang = false;
        statusTombolKali = false
        statusTombolTranspose = false;
        statusTombolSkalar = true;
        tampilkanUIOrdo();
        break;

      default:
        break;
    }
}

function tampilkanUIOrdo(){
    if (duamatriksaktif != true){
      if (statusTombolTambah || statusTombolKurang || statusTombolKali ){
        containerOrdo.innerHTML = "";
        let pmatriks1 = document.createElement('p')
        pmatriks1.innerText = "Matriks 1: "

        let div = document.createElement('div')
        div.classList.add("inputordomatriks1")

        labelbaris = document.createElement("label")
        labelbaris.setAttribute("for", "barisMatriks1")
        labelbaris.innerText = "Baris: "
        
        inputbaris = document.createElement("input")
        inputbaris.setAttribute("type", "text")
        inputbaris.setAttribute("id", "barisMatriks1")

        labelkolom = document.createElement("label")
        labelkolom.setAttribute("for", "kolomMatriks1")
        labelkolom.innerText = "Kolom: "

        inputkolom = document.createElement("input")
        inputkolom.setAttribute("type", "text")
        inputkolom.setAttribute("id", "kolomMatriks1")

        div.append(labelbaris, inputbaris, labelkolom, inputkolom)
        containerOrdo.appendChild(pmatriks1)
        containerOrdo.appendChild(div)

        // Matriks 2
        let pmatriks2 = document.createElement('p')
        pmatriks2.innerText = "Matriks 2: "

        let div2 = document.createElement('div')
        div2.classList.add("inputordomatriks2")

        labelbaris = document.createElement("label")
        labelbaris.setAttribute("for", "barisMatriks2")
        labelbaris.innerText = "Baris: "
        
        inputbaris = document.createElement("input")
        inputbaris.setAttribute("type", "text")
        inputbaris.setAttribute("id", "barisMatriks2")

        labelkolom = document.createElement("label")
        labelkolom.setAttribute("for", "kolomMatriks2")
        labelkolom.innerText = "Kolom: "

        inputkolom = document.createElement("input")
        inputkolom.setAttribute("type", "text")
        inputkolom.setAttribute("id", "kolomMatriks2")

        let tombol = document.createElement("button")
        tombol.innerText = "Bikin Matriks"
        tombol.classList.add("tombolOrdo")
        tombol.setAttribute("onclick", "tombolOrdo2Matriks()")

        div2.append(labelbaris, inputbaris, labelkolom, inputkolom)
        containerOrdo.appendChild(pmatriks2)
        containerOrdo.appendChild(div2)
        containerOrdo.appendChild(tombol)
        duamatriksaktif = true;
        satumatriksaktif = false;
      
      }
    } else if (satumatriksaktif != true){
        if (statusTombolSkalar || statusTombolTranspose){
          containerOrdo.innerHTML = "";
      
          let pmatriks1 = document.createElement('p')
          pmatriks1.innerText = "Matriks 1: "
  
          let div = document.createElement('div')
          div.classList.add("inputordomatriks1")
  
          labelbaris = document.createElement("label")
          labelbaris.setAttribute("for", "barisMatriks1")
          labelbaris.innerText = "Baris: "
          
          inputbaris = document.createElement("input")
          inputbaris.setAttribute("type", "text")
          inputbaris.setAttribute("id", "barisMatriks1")
  
          labelkolom = document.createElement("label")
          labelkolom.setAttribute("for", "kolomMatriks1")
          labelkolom.innerText = "Kolom: "
  
          inputkolom = document.createElement("input")
          inputkolom.setAttribute("type", "text")
          inputkolom.setAttribute("id", "kolomMatriks1")
  
          let tombol = document.createElement("button")
            tombol.innerText = "Bikin Matriks"
            tombol.classList.add("tombolOrdo")
            tombol.setAttribute("onclick", "tombolOrdo1Matriks()")
  
          div.append(labelbaris, inputbaris, labelkolom, inputkolom)
          containerOrdo.appendChild(pmatriks1)
          containerOrdo.appendChild(div)
          containerOrdo.appendChild(tombol)
          satumatriksaktif = true;
          duamatriksaktif = false;
        }
          
    }
    // } else if (duamatriksaktif && (statusTombolSkalar || statusTombolTranspose)){
    //     containerOrdo.innerHTML = "";
      
    //     let pmatriks1 = document.createElement('p')
    //     pmatriks1.innerText = "Matriks 1: "

    //     let div = document.createElement('div')
    //     div.classList.add("inputordomatriks1")

    //     labelbaris = document.createElement("label")
    //     labelbaris.setAttribute("for", "barisMatriks1")
    //     labelbaris.innerText = "Baris: "
        
    //     inputbaris = document.createElement("input")
    //     inputbaris.setAttribute("type", "text")
    //     inputbaris.setAttribute("id", "barisMatriks1")

    //     labelkolom = document.createElement("label")
    //     labelkolom.setAttribute("for", "kolomMatriks1")
    //     labelkolom.innerText = "Kolom: "

    //     inputkolom = document.createElement("input")
    //     inputkolom.setAttribute("type", "text")
    //     inputkolom.setAttribute("id", "kolomMatriks1")

    //     let tombol = document.createElement("button")
    //       tombol.innerText = "Bikin Matriks"
    //       tombol.classList.add("tombolOrdo")
    //       tombol.setAttribute("onclick", "tombolOrdo1Matriks()")

    //     div.append(labelbaris, inputbaris, labelkolom, inputkolom)
    //     containerOrdo.appendChild(pmatriks1)
    //     containerOrdo.appendChild(div)
    //     containerOrdo.appendChild(tombol)
    //     satumatriksaktif = true;
    //     duamatriksaktif = false;
    // } 
      
    
    // containerOrdo.innerHTML = ""
    
}

function tombolOrdo1Matriks(){
  if (statusTombolTranspose){
    let barisMatriks1 = parseInt(document.querySelector("#barisMatriks1").value);
    let kolomMatriks1 = parseInt(document.querySelector("#kolomMatriks1").value);

    if (barisMatriks1 > 4 || kolomMatriks1 > 4){
      alert("Baris atau Kolom harus kurang dari 4");
    }
    else {
      UIOperation1(barisMatriks1, kolomMatriks1)
    }
  }

  if (statusTombolSkalar){
    let barisMatriks1 = parseInt(document.querySelector("#barisMatriks1").value);
    let kolomMatriks1 = parseInt(document.querySelector("#kolomMatriks1").value);

    if (barisMatriks1 > 4 || kolomMatriks1 > 4){
      alert("Baris atau Kolom harus kurang dari 4");
    }
    else {
      UIOperation1(barisMatriks1, kolomMatriks1)
    }
  }
}

function tombolOrdo2Matriks(){
  if (statusTombolTambah || statusTombolKurang || statusTombolKali){
    let barisMatriks1 = parseInt(document.querySelector("#barisMatriks1").value);
    let kolomMatriks1 = parseInt(document.querySelector("#kolomMatriks1").value);
    let barisMatriks2 = parseInt(document.querySelector("#barisMatriks2").value);
    let kolomMatriks2 = parseInt(document.querySelector("#kolomMatriks2").value);

    if (barisMatriks1 > 4 || kolomMatriks1 > 4 || barisMatriks2 > 4 || kolomMatriks2 > 4){
      alert("Baris atau Kolom harus kurang dari 4");
    }
    else {
      UIOperation(barisMatriks1, kolomMatriks1, barisMatriks2, kolomMatriks2)
    }
    
  }
  
}

function UIOperation(baris1, kolom1, baris2, kolom2){
      
      containerInput.innerHTML = "";
      let formInput = document.createElement("div");
      formInput.classList.add('formInput');

      inputMatriks1 = document.createElement("div");
      inputMatriks1.classList.add("matriks1")
      inputMatriks1.style.gridTemplateColumns = `repeat(${kolom1}, 0.5fr)`;

      for(let i = 1; i <= baris1; i++){
        for (let j = 1; j <= kolom1; j++){
            let input = document.createElement('input')
            input.setAttribute('type', 'text');
            input.setAttribute('id', `matriks1Baris${i}Kolom${j}`)
            inputMatriks1.appendChild(input);
          }
      }

      inputMatriks2 = document.createElement("div");
      inputMatriks2.classList.add("matriks2")
      inputMatriks2.style.gridTemplateColumns = `repeat(${kolom2}, 0.5fr)`;

      for(let i = 1; i <= baris2; i++){
        for (let j = 1; j <= kolom2; j++){
            let input = document.createElement('input')
            input.setAttribute('type', 'text');
            input.setAttribute('id', `matriks2Baris${i}Kolom${j}`)
            inputMatriks2.appendChild(input);
          }
      }
      tombolUIOrdo = document.createElement("button");
      tombolUIOrdo.setAttribute("id", "submit");
      tombolUIOrdo.setAttribute("onclick", "kalkulasi()")
      tombolUIOrdo.innerText = "Hasil";

      formInput.append(inputMatriks1, inputMatriks2);
      containerInput.appendChild(formInput);
      containerInput.appendChild(tombolUIOrdo);

}

function UIOperation1(baris1, kolom1){
  if (statusTombolTranspose) {
    containerInput.innerHTML = "";
    let formInput = document.createElement("div");
    formInput.classList.add('formInput');

    inputMatriks1 = document.createElement("div");
    inputMatriks1.classList.add("matriks1")
    inputMatriks1.style.gridTemplateColumns = `repeat(${kolom1}, 0.5fr)`;

    for(let i = 1; i <= baris1; i++){
      for (let j = 1; j <= kolom1; j++){
          let input = document.createElement('input')
          input.setAttribute('type', 'text');
          input.setAttribute('id', `matriks1Baris${i}Kolom${j}`)
          inputMatriks1.appendChild(input);
        }
    }


    tombolUIOrdo = document.createElement("button");
    tombolUIOrdo.setAttribute("id", "submit");
    tombolUIOrdo.setAttribute("onclick", "kalkulasi()")
    tombolUIOrdo.innerText = "Hasil";

    formInput.append(inputMatriks1);
    containerInput.appendChild(formInput);
    containerInput.appendChild(tombolUIOrdo);

  } else if (statusTombolSkalar){
    containerInput.innerHTML = "";
    let formInput = document.createElement("div");
    formInput.classList.add('formInput');

    inputMatriks1 = document.createElement("div");
    inputMatriks1.classList.add("matriks1")
    inputMatriks1.style.gridTemplateColumns = `repeat(${kolom1}, 0.5fr)`;

    for(let i = 1; i <= baris1; i++){
      for (let j = 1; j <= kolom1; j++){
          let input = document.createElement('input')
          input.setAttribute('type', 'text');
          input.setAttribute('id', `matriks1Baris${i}Kolom${j}`)
          inputMatriks1.appendChild(input);
        }
    }

    divSkalar = document.createElement("div")
    divSkalar.classList.add("divSkalar");
    inputSkalar = document.createElement("input")
    inputSkalar.setAttribute('type', 'number');
    inputSkalar.setAttribute("min", "1")
    inputSkalar.setAttribute("max", "10")
    inputSkalar.setAttribute("value", "1")
    inputSkalar.setAttribute('class', "nilaiSkalar")
    divSkalar.appendChild(inputSkalar)
    

    tombolUIOrdo = document.createElement("button");
    tombolUIOrdo.setAttribute("id", "submit");
    tombolUIOrdo.setAttribute("onclick", "kalkulasi()")
    tombolUIOrdo.innerText = "Hasil";

    formInput.append(inputMatriks1, divSkalar);
    containerInput.appendChild(formInput);
    containerInput.appendChild(tombolUIOrdo);
  }
  

}

function kalkulasi(){
    if (statusTombolTambah){
        tambahMatriks();
    }else if (statusTombolKurang){
        kurangMatriks();
    }else if (statusTombolKali){
        kaliMatriks();
    }else if (statusTombolTranspose){
        transposeMatriks();
    }else if (statusTombolSkalar){
        skalarMatriks();
    }
}

let matriks1 = document.createElement('div')
    matriks1.classList.add('matriks1')
    matriks1.style.width = '100px';
    matriks1.style.display = 'grid';
    matriks1.style.gridTemplateColumns = `repeat(${kolom}, 1fr)`;
    matriks1.style.gap = '10px';
    // container.append(matriks1)
    for(let i = 1; i <= baris; i++){
        for (let j = 1; j <= kolom; j++){
            let input = document.createElement('input')
            input.setAttribute('type', 'text');
            input.setAttribute('id', `matriks1Baris${i}Kolom${j}`)
            matriks1.appendChild(input); 
        }
    }
    container.append(matriks1)

// Operasi Penambahan
function tambahMatriks(){
  if (parseInt(barisMatriks1.value) == parseInt(barisMatriks2.value) && parseInt(kolomMatriks1.value) == parseInt(kolomMatriks2.value)){
    console.log("Operasi pertambahan dilakukan");

    // Menampilkan elemen yang terdapat pada matriks 1 ke html
    var div = document.createElement("div");
    div.classList.add("hasil1");

    let divElementmatriks1 = document.createElement('div');
    divElementmatriks1.classList.add('elemen-matriks1');
    divElementmatriks1.style.gridTemplateColumns = `repeat(${kolomMatriks1.value}, 1fr)`;

    var divOperasi = document.createElement("div");
    divOperasi.classList.add("operasi");
    divOperasi.innerText = "+"

    var divElementmatriks2 = document.createElement("div");
    divElementmatriks2.classList.add("elemen-matriks2");
    divElementmatriks2.style.gridTemplateColumns = `repeat(${kolomMatriks2.value}, 1fr)`;

    var divSamaDengan = document.createElement("div");
    divSamaDengan.classList.add("sama-dengan");
    divSamaDengan.innerText = "="

    var divHasil = document.createElement("div");
    divHasil.classList.add("hasil");
    divHasil.style.gridTemplateColumns = `repeat(${kolomMatriks2.value}, )`;


    for (let i = 1; i <= barisMatriks1.value; i++){
        for (let j = 1; j <= kolomMatriks1.value; j++){
            let nilaiMatriks1 = parseInt(document.querySelector(`#matriks1Baris${i}Kolom${j}`).value);
            let p = document.createElement("p");
            p.innerText = nilaiMatriks1;
            divElementmatriks1.appendChild(p);
        }
    }
    
    // Menampilkan elemen yang terdapat pada matriks 2 ke html
    for (let i = 1; i <= barisMatriks2.value; i++){
      for (let j = 1; j <= kolomMatriks2.value; j++){
          let nilaiMatriks2 = parseInt(document.querySelector(`#matriks2Baris${i}Kolom${j}`).value);
          let p = document.createElement("p");
          p.innerText = nilaiMatriks2;
          divElementmatriks2.appendChild(p);
      }
  }

  // Menampilkan hasil
    for (let i = 1; i <= barisMatriks2.value; i++){
      for (let j = 1; j <= kolomMatriks2.value; j++){
          let nilaiMatriks1 = parseInt(document.querySelector(`#matriks1Baris${i}Kolom${j}`).value);
          let nilaiMatriks2 = parseInt(document.querySelector(`#matriks2Baris${i}Kolom${j}`).value);
          let p = document.createElement("p");
          p.innerText = nilaiMatriks1 + nilaiMatriks2;
          divHasil.appendChild(p);
      }
  }
  div.append(divElementmatriks1, divOperasi, divElementmatriks2, divSamaDengan, divHasil);
  containerOperasi.appendChild(div)

    
  }else {
    console.log("Ordo kedua matriks harus sama");
  }
}

// Operasi Pengurangan
function kurangMatriks(){
  if (parseInt(barisMatriks1.value) == parseInt(barisMatriks2.value) && parseInt(kolomMatriks1.value) == parseInt(kolomMatriks2.value)){
    console.log("Operasi pengurangan dilakukan");

    // Menampilkan elemen yang terdapat pada matriks 1 ke html
    var div = document.createElement("div");
    div.classList.add("hasil1");

    let divElementmatriks1 = document.createElement('div');
    divElementmatriks1.classList.add('elemen-matriks1');
    divElementmatriks1.style.gridTemplateColumns = `repeat(${kolomMatriks1.value}, 1fr)`;

    var divOperasi = document.createElement("div");
    divOperasi.classList.add("operasi");
    divOperasi.innerText = "-"

    var divElementmatriks2 = document.createElement("div");
    divElementmatriks2.classList.add("elemen-matriks2");
    divElementmatriks2.style.gridTemplateColumns = `repeat(${kolomMatriks2.value}, 1fr)`;

    var divSamaDengan = document.createElement("div");
    divSamaDengan.classList.add("sama-dengan");
    divSamaDengan.innerText = "="

    var divHasil = document.createElement("div");
    divHasil.classList.add("hasil");
    divHasil.style.gridTemplateColumns = `repeat(${kolomMatriks2.value}, 1fr)`;


    for (let i = 1; i <= barisMatriks1.value; i++){
        for (let j = 1; j <= kolomMatriks1.value; j++){
            let nilaiMatriks1 = parseInt(document.querySelector(`#matriks1Baris${i}Kolom${j}`).value);
            let p = document.createElement("p");
            p.innerText = nilaiMatriks1;
            divElementmatriks1.appendChild(p);
        }
    }
    
    // Menampilkan elemen yang terdapat pada matriks 2 ke html
    for (let i = 1; i <= barisMatriks2.value; i++){
      for (let j = 1; j <= kolomMatriks2.value; j++){
          let nilaiMatriks2 = parseInt(document.querySelector(`#matriks2Baris${i}Kolom${j}`).value);
          let p = document.createElement("p");
          p.innerText = nilaiMatriks2;
          divElementmatriks2.appendChild(p);
      }
  }

  // Menampilkan hasil
    for (let i = 1; i <= barisMatriks2.value; i++){
      for (let j = 1; j <= kolomMatriks2.value; j++){
          let nilaiMatriks1 = parseInt(document.querySelector(`#matriks1Baris${i}Kolom${j}`).value);
          let nilaiMatriks2 = parseInt(document.querySelector(`#matriks2Baris${i}Kolom${j}`).value);
          let p = document.createElement("p");
          p.innerText = nilaiMatriks1 - nilaiMatriks2;
          divHasil.appendChild(p);
      }
  }
  div.append(divElementmatriks1, divOperasi, divElementmatriks2, divSamaDengan, divHasil);
  containerOperasi.appendChild(div)

    
  }else {
    console.log("Ordo kedua matriks harus sama");
  }
}


// Operasi Perkalian
function kaliMatriks(){
  if (kolomMatriks1.value == barisMatriks2.value){
      var div = document.createElement("div");
      div.classList.add("hasil1");

      let divElementmatriks1 = document.createElement('div');
      divElementmatriks1.classList.add('elemen-matriks1');
      divElementmatriks1.style.gridTemplateColumns = `repeat(${kolomMatriks1.value}, 1fr)`;

      var divOperasi = document.createElement("div");
      divOperasi.classList.add("operasi");
      divOperasi.innerText = "x"

      var divElementmatriks2 = document.createElement("div");
      divElementmatriks2.classList.add("elemen-matriks2");
      divElementmatriks2.style.gridTemplateColumns = `repeat(${kolomMatriks2.value}, 1fr)`;

      var divSamaDengan = document.createElement("div");
      divSamaDengan.classList.add("sama-dengan");
      divSamaDengan.innerText = "="

      var divHasil = document.createElement("div");
      divHasil.classList.add("hasil");
      divHasil.style.gridTemplateColumns = `repeat(${kolomMatriks2.value}, 1fr)`;

      for (let i = 1; i <= barisMatriks1.value; i++){
        for (let j = 1; j <= kolomMatriks1.value; j++){
            let nilaiMatriks1 = parseInt(document.querySelector(`#matriks1Baris${i}Kolom${j}`).value);
            let p = document.createElement("p");
            p.innerText = nilaiMatriks1;
            divElementmatriks1.appendChild(p);
        }
    }
    
    // Menampilkan elemen yang terdapat pada matriks 2 ke html
      for (let i = 1; i <= barisMatriks2.value; i++){
        for (let j = 1; j <= kolomMatriks2.value; j++){
            let nilaiMatriks2 = parseInt(document.querySelector(`#matriks2Baris${i}Kolom${j}`).value);
            let p = document.createElement("p");
            p.innerText = nilaiMatriks2;
            divElementmatriks2.appendChild(p);
        }
    }

      for (let i = 1; i <= barisMatriks1.value; i++){
        for (let j = 1; j <= kolomMatriks2.value; j++){
          let nilaiHasil = 0;         
          for (let k = 1; k <= kolomMatriks1.value; k++){
            let nilaiMatriks1 = parseInt(document.querySelector(`#matriks1Baris${i}Kolom${k}`).value);
            let nilaiMatriks2 = parseInt(document.querySelector(`#matriks2Baris${k}Kolom${j}`).value);
            nilaiHasil += nilaiMatriks1 * nilaiMatriks2;
          }

          let p = document.createElement("p");
          p.innerText = nilaiHasil;
          divHasil.appendChild(p);
        }
      }
      div.append(divElementmatriks1, divOperasi, divElementmatriks2, divSamaDengan, divHasil);
      containerOperasi.appendChild(div)
  }
}

// Operasi Transpose
function transposeMatriks(){
  var div = document.createElement("div");
  div.classList.add("hasil1");

  let divElementmatriks1 = document.createElement('div');
  divElementmatriks1.classList.add('elemen-matriks1');
  divElementmatriks1.style.gridTemplateColumns = `repeat(${kolomMatriks1.value}, 1fr)`;

  var divSamaDengan = document.createElement("div");
  divSamaDengan.classList.add("sama-dengan");
  divSamaDengan.innerText = "="

  var divHasil = document.createElement("div");
  divHasil.classList.add("hasil");
  divHasil.style.gridTemplateColumns = `repeat(${barisMatriks1.value}, 1fr)`;

  for (let i = 1; i <= barisMatriks1.value; i++){
    for (let j = 1; j <= kolomMatriks1.value; j++){
        let nilaiMatriks1 = parseInt(document.querySelector(`#matriks1Baris${i}Kolom${j}`).value);
        let p = document.createElement("p");
        p.innerText = nilaiMatriks1;
        divElementmatriks1.appendChild(p);
    }
  }

  for (let i = 1; i <= kolomMatriks1.value; i++){
    for (let j = 1; j <= barisMatriks1.value; j++){
        let nilaiMatriks1 = parseInt(document.querySelector(`#matriks1Baris${j}Kolom${i}`).value);
        let p = document.createElement("p");
        p.innerText = nilaiMatriks1;
        divHasil.appendChild(p);
    }
  }

  div.append(divElementmatriks1, divSamaDengan, divHasil);
  containerOperasi.appendChild(div)

}

// Operasi Skalar
function skalarMatriks(){
  var nilaiSkalar = parseInt(document.querySelector(".nilaiSkalar").value)
  var angkaSkalar = document.createElement("div");
  angkaSkalar.classList.add('divSkalar');
  var pSkalar = document.createElement("p");
  pSkalar.innerText = nilaiSkalar;
  angkaSkalar.appendChild(pSkalar)

  var div = document.createElement("div");
  div.classList.add("hasil1");

  let divElementmatriks1 = document.createElement('div');
  divElementmatriks1.classList.add('elemen-matriks1');
  divElementmatriks1.style.gridTemplateColumns = `repeat(${kolomMatriks1.value}, 1fr)`;

  var divSamaDengan = document.createElement("div");
  divSamaDengan.classList.add("sama-dengan");
  divSamaDengan.innerText = "="

  var divHasil = document.createElement("div");
  divHasil.classList.add("hasil");
  divHasil.style.gridTemplateColumns = `repeat(${kolomMatriks1.value}, 1fr)`;

  for (let i = 1; i <= barisMatriks1.value; i++){
    for (let j = 1; j <= kolomMatriks1.value; j++){
        let nilaiMatriks1 = parseInt(document.querySelector(`#matriks1Baris${i}Kolom${j}`).value);
        let p = document.createElement("p");
        p.innerText = nilaiMatriks1;
        divElementmatriks1.appendChild(p);
    }
  }

  for (let i = 1; i <= barisMatriks1.value; i++){
    for (let j = 1; j <= kolomMatriks1.value; j++){
        let nilaiMatriks1 = parseInt(document.querySelector(`#matriks1Baris${i}Kolom${j}`).value);
        let p = document.createElement("p");
        p.innerText = nilaiMatriks1 * nilaiSkalar;
        divHasil.appendChild(p);
    }
  }

  div.append(angkaSkalar, divElementmatriks1, divSamaDengan, divHasil);
  containerOperasi.appendChild(div)
}
