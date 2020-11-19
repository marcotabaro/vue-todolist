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
        inputUser: [], //array for collect input User
        inputText: '', //inizialization of input User
        isClicked: []
    },
    methods: {
        //Function for fill the inputUser array
        addInput: function(){
        if(this.inputText == ''){ //check the User filled the input text
            alert('Per favore inserisci un valore');
        } else {
            this.inputUser.push(this.inputText); //Push the input into the array
            this.inputText = ''; //empty input text
            this.isClicked.push(false);
            }
        },
        //Function for remove list of to dos
        inputRemove: function (delIndex){ 
            this.inputUser.splice(delIndex, 1);//remove the li from the array
            this.isClicked.splice(delIndex, 1);
        },
        toggleIsClicked(index) {
            this.$set(this.isClicked, index, !this.isClicked[index]);
        }
    }
})