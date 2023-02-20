<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center mt-5">Frequently Asked Questions</h1>

                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    Why should I get my car serviced from CarServiceWale in Kolkata?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion
                                    body.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    What brand of engine oil does Pitstop use in the periodic car service of my car?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion
                                    body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    How often should I get my car serviced?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion
                                    body. Nothing more exciting happening here in terms of content, but just filling up the
                                    space to make it look, at least at first glance, a bit more representative of how this
                                    would look in a real-world application.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</section></template>

<script>
export default {
    name: "AccordionComponent"
}
</script>

<style scoped>
section {
    background-color: #f3f5fa;
    height: 500px;
}
.accordion{
    padding:60px;
}
.accordion-item{
    padding:10px;
}
.accordion-button {
    font-family: "Poppins", sans-serif;
    align-items: center;
    width: 100%;
    padding: 1.3rem 1.50rem;
    font-size: 20px;
    color: #212529;
    text-align: left;
    background-color: #fff;
    font-weight:700;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
.accordion{
    padding:10px;
}
.accordion-item{
    padding:2px;
}
.accordion-button {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.3rem 1.50rem;
    font-size: 14px;
    color: #212529;
    text-align: left;
    background-color: #fff;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;
}
}
</style>