new Vue({
    el: '#desafio',
    data: {
        nome: "Andreh Marks",
        idade: "22",
        imageLink: 'https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg'
    },
    methods: {
        randomNumber() {
            return Math.random();
        }
    }
})