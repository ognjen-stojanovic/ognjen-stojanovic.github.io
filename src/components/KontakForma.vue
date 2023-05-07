<script>
import { getUserData } from './mailer';
export default{
        name: 'KontaktForma',
        data() {
            return {
                sender: '',
                email: '',
                userSubject: '[gfp.rs] ',
                content: '',
                sendTo: 's.ognjen.business@gmail.com'
            }
        },
        methods: {
            sendEmail(){
                let form = {
                    sender: this.sender,
                    content: this.content,
                    email: this.email,
                }
                getUserData(form);
            }
        },
    };
</script>

<template>
    <section class="kontakt-forma">
        <form @submit.prevent="sendEmail">
            <input type="text" id="name" placeholder="Ime" v-model="sender">
            <input type="email" id="mail" placeholder="Email" v-model="email">
            <input type="text" id="content" placeholder="Poruka" v-model="content">
            <button type="submit">Pošalji</button>
        </form>
    </section>
</template>

<style scoped>
    .kontakt-forma{
        max-width: var(--screen-max-width);
    }
</style>


