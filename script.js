/*
Creare una web app con Vue che permetta ad un utente di:
Inserire un elemento nella lista
Rimuovere un elemento dalla lista
Seguite lo screenshot per i dettagli su come inizializzare lo stato dell'app e per i dettagli grafici.
BONUS:
Al click di un elemento presente nella lista, cambiare il colore dello sfondo. Se l'utente clicca nuovamente sullo stesso elemento, riportare il colore a quello che avete scelto di default. ( Lo sfondo è relativo a quel singolo elemento )
*/

const myPlace = new Vue({
    el:'#root',
    data:{
        inputUser: [],
        inputText: '',
        isClicked: false
    },
    methods: {
        addInput: function(){
        if(this.inputText == ''){
            alert('Per favore inserisci un valore')
        } else {
            this.inputUser.push(this.inputText);
            this.inputText = '';
        }
        },
        inputRemove: function (delIndex){
            this.inputUser.splice(delIndex, 1)
        },
        colorChange: function (){
            addClass
        },
        toggleIsClicked: function() {
            this.isClicked = !this.isClicked
        }
    }
})