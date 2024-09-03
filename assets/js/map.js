document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() =>{

        document.querySelector("#load-iframe_map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0"  scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0094081058946!2d-74.2244736240097!3d4.592333842585397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f7552889be85f%3A0xdfd8f068082be62f!2sConjunto%20Residencial%20El%20Triunfo%203!5e0!3m2!1ses!2sco!4v1725316677402!5m2!1ses!2sco"  ></iframe>
        `
    }, 725)

})