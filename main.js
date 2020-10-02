

//kita buat sebuah fungsi untuk
//memunculkan MODAL

const showModal = ()=>{
    //kita dapatkan element MODAL
    //yang mau di munculkan
    let modal = document.getElementById('modalMenu')

    //kita atur styling element modalnya
    modal.style.display = 'flex'

}

const closeModal = ()=>{
  //kita dapatkan element MODAL
    //yang mau di munculkan
    let modal = document.getElementById('modalMenu')

    //kita atur styling element modalnya
    modal.style.display = 'none'

}

//Kita ambil dulu element yang diinginkan
let showcase = document.getElementById('wrapper_showcase')

//kita inject elementnya dengan syntax HTML
// showcase.innerHTML += `
//   <img src="https://picsum.photos/seed/13/300"/>
// `

for( var i = 0 ; i < 42 ; i++){
  showcase.innerHTML += `
    <img src='https://picsum.photos/seed/${100 + i}/200' alt='gambar ke ${i}'/>
  `
}
