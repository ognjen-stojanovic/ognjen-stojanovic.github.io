<script>

export default{
        name: 'KontaktForma',
        data() {
            return {
                sender: '',
                content: '',
            }
        },
        methods: {
            sendEmail(){
                let form = {
                    from_name: this.sender,
                    message: this.content,
                }
                emailjs.send('service_4tjxmau', 'template_hhmiavv', form)
                .then(res => {
                        console.log(res);
                })
            }
        },
    };
</script>

<template>
    <section class="kontakt-forma">
        <form @submit.prevent="sendEmail">
            <input type="text" id="name" placeholder="Ime" v-model="sender">
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


