/*Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.*/

const{ createApp } = Vue;

createApp({
    data() {
        listEmail = [],
        numero = 0;
        console.log(numero);
        return {
            listEmail: [],
            
        }
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( emailGen => {

            console.log(emailGen.data);
            this.listEmail.push(emailGen.data.response)
            console.log(listEmail);

    })

    },
}).mount('#app')