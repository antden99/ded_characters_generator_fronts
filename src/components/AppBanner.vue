<script>

export default {
    name: 'AppBanner',
    data() {
        return {
        }
    }
}
</script>

<template>
    <div class="container-fluid my-5">
        <div class="p-5 text-center bg-body-tertiary rounded-3">
            <div class="logo mb-5">
                <i class="fa-brands fa-d-and-d fa-2xl"></i>
            </div>
            <h1 class="text-body-emphasis">Dungeons and Dragons&trade; characters generator</h1>
            <p class="col-lg-8 mx-auto fs-5 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, provident, voluptate harum maxime
                ipsa
                nulla beatae obcaecati, quidem cupiditate quas perspiciatis maiores quos incidunt excepturi
                exercitationem culpa
                odit omnis corporis!
            </p>
            <div class="d-inline-flex gap-2 mb-5">
                <button class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                    Try our generator
                    <i class="fa-solid fa-wand-magic-sparkles ms-3"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.logo {
    font-size: 3.5rem;
}
</style>
