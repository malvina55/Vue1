const app = {
  data() {
    return {
      value: '',
      color: 'purple',
    }
  }
}
Vue.createApp(app).mount('#app')



// let i = document.querySelector('input');
// let p = document.querySelector('p');
// i.addEventListener('input', () => { 
//   p.innerHTML = `Текст: ${i.value}` 
//  })