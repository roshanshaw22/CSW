<template>
    <div>
        <Header />
        <!-- Caruosel -->
        <div class="container-fluid bg-secondary booking wow fadeInUp">
            <div class="container">
                <div class="row gx-5">
                    <div class="col-lg-6 py-5">
                    </div>
                    <div class="col-lg-6 carouselDiv">
                        <div class=" bg-dark h-100 d-flex flex-column  text-center p-5">
                            <h1 class="text-white mb-4 bookService">Book For A Service</h1>
                            <form>
                                <div class="row g-3">
                                    <div class="col-12 col-sm-12">
                                        <input type="text" class="form-control searchCar border-0"
                                            placeholder="Select Your Car" style="height: 55px" />
                                    </div>
                                    <div class="col-md-12">
                                        <router-link to="/service">
                                            <button class="btn btn-primary searchCar w-100 py-3 float-end" type="submit">
                                                View Services
                                            </button>
                                        </router-link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Service Start -->
        <section>
            <div class="container-xxl service py-3">
                <div class="container">
                    <div class="text-center">
                        <h6 class="carServ text-uppercase">// Our Services //</h6>
                        <h1 class="mb-1">Explore Our Services</h1>
                    </div>
                </div>
                <div class="row card-spacing">
                    <div class="col-4 col-md-2">
                        <div class="card service-card" :class="{ active: active_el == 1 }" @click="filterService(1)">
                            <span class="mb-2">
                                <img src="../components/images/clients/icon-1.png" alt="" class="icon-image">
                            </span>
                            <span>SCHEDULE SERVICE</span>
                        </div>
                    </div>

                    <div class="col-4 col-md-2">
                        <div class="card service-card" :class="{ active: active_el == 2 }" @click="filterService(2)">
                            <span class="mb-2">
                                <img src="../components/images/clients/icon-2.png" alt="" class="icon-image">
                            </span>
                            <span>DENTING PAINTING</span>
                        </div>
                    </div>

                    <div class="col-4 col-md-2">
                        <div class="card service-card" @click="filterService(3)">
                            <span class="mb-2">
                                <img src="../components/images/clients/icon-3.png" alt="" class="icon-image">
                            </span>
                            <span>CLEANING & DETAILING</span>
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="card service-card">
                            <span class="mb-2">
                                <img src="../components/images/clients/icon-4.png" alt="" class="icon-image">
                            </span>
                            <span>AC SERVICE</span>
                        </div>
                    </div>

                    <div class="col-4 col-md-2">
                        <div class="card service-card">
                            <span class="mb-2">
                                <img src="../components/images/clients/icon-5.png" alt="" class="icon-image">
                            </span>
                            <span>BATTERY SERVICE</span>
                        </div>
                    </div>

                    <div class="col-4 col-md-2">
                        <div class="card service-card">
                            <span class="mb-2">
                                <img src="../components/images/clients/icon-6.png" alt="" class="icon-image">
                            </span>
                            <span>WHEEL SERVICE</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container" v-if="isSchedule">
                <div class="row">
                    <div class="col-xs-12 col-md-6 col-sm-12 bootstrap snippets bootdeys"
                        v-for="(item, index) in carServiceWale.services.scheduleService" :key="index">
                        <!-- product -->
                        <div class="product-content product-wrap clearfix">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="product-image">
                                        <img :src="item.image" alt="194x228" class="img-responsive product-img" />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="product-deatil">
                                        <h4 class="name">{{ item.name }}</h4>
                                        <h5 class="price-container">
                                            <span><i class="fa fa-inr" aria-hidden="true"></i> {{ item.price }}</span>
                                            <span class="strike-price"><i class="fa fa-inr" aria-hidden="true"></i>
                                                {{ item.old_price }}</span>
                                            <span class="badge badge-success">{{ item.discount }}</span>
                                        </h5>
                                        <div class="row">
                                            <div class="col-md-12 col-12">
                                                <div class="rating">
                                                    <label for="stars-rating-5"><i class="fa fa-star checked"></i></label>
                                                    <label for="stars-rating-4"><i class="fa fa-star checked"></i></label>
                                                    <label for="stars-rating-3"><i class="fa fa-star checked"></i></label>
                                                    <label for="stars-rating-2"><i class="fa fa-star checked"></i></label>
                                                    <label for="stars-rating-1"><i class="fa fa-star"></i></label>
                                                    <span class="reviews">{{ item.reviews }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <p v-for="detail in item.description" :key="detail.id">
                                                <i class="fa-solid fa-circle-check text-success"></i>
                                                {{ detail.desc }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 mt-2"
                                        style="color: #747977;font-family: Barlow,sans-serif">
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <button class="btn btn-primary mr-auto cart" @click="addToCart2(item)"><i
                                                class="fa-solid fa-cart-shopping"></i>Add to
                                            cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container" v-if="isDentingPainting">
                <div class="row">
                    <div class="col-xs-12 col-md-6 col-sm-12 bootstrap snippets bootdeys"
                        v-for="(item, index) in carServiceWale.services.dentingPainting" :key="index">
                        <!-- product -->
                        <div class="product-content product-wrap clearfix">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="product-image">
                                        <img :src="item.image" alt="194x228" class="img-responsive product-img" />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="product-deatil">
                                        <h4 class="name">{{ item.name }}</h4>
                                        <h5 class="price-container">
                                            <span><i class="fa fa-inr" aria-hidden="true"></i> {{ item.price }}</span>
                                            <span class="strike-price"><i class="fa fa-inr" aria-hidden="true"></i>
                                                {{ item.old_price }}</span>
                                            <span class="badge badge-success">{{ item.discount }}</span>
                                        </h5>
                                        <div class="row">
                                            <div class="col-md-12 col-12">
                                                <div class="rating">
                                                    <label for="stars-rating-5"><i class="fa fa-star checked"></i></label>
                                                    <label for="stars-rating-4"><i class="fa fa-star checked"></i></label>
                                                    <label for="stars-rating-3"><i class="fa fa-star checked"></i></label>
                                                    <label for="stars-rating-2"><i class="fa fa-star checked"></i></label>
                                                    <label for="stars-rating-1"><i class="fa fa-star"></i></label>
                                                    <span class="reviews">{{ item.reviews }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <p class="sevice-description" v-for="detail in item.description"
                                                :key="detail.id">
                                                <i class="fa-solid fa-circle-check text-success"></i>
                                                {{ detail.desc }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 mt-2"
                                        style="color: #747977;font-family: Barlow,sans-serif">
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <button class="btn btn-primary mr-auto cart" @click="addToCart2(item)"><i
                                                class="fa-solid fa-cart-shopping"></i>Add to
                                            cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h2 id="offcanvasRightLabel" class="text-center">SERVICE DETAILS</h2>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>

                <div class="offcanvas-body">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="product-image">
                            <img src="../components/images/about.jpg" alt="194x228" class="img-responsive sideNavImg" />
                        </div>
                    </div>

                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="product-deatil-sidenav">
                            <h3 class="mt-2">Regular Service</h3>
                            <h4 class="price-container">
                                <span><i class="fa fa-inr" aria-hidden="true"></i> 13,991</span>
                                <span class="strike-price"><i class="fa fa-inr" aria-hidden="true"></i>
                                    18,900</span>
                                <span class="badge badge-success">12% off</span>
                            </h4>
                            <div class="col-md-12 col-sm-12 col-xs-6">
                                <div class="rating">
                                    <label for="stars-rating-5"><i class="fa fa-star checked"></i></label>
                                    <label for="stars-rating-4"><i class="fa fa-star checked"></i></label>
                                    <label for="stars-rating-3"><i class="fa fa-star checked"></i></label>
                                    <label for="stars-rating-2"><i class="fa fa-star checked"></i></label>
                                    <label for="stars-rating-1"><i class="fa fa-star"></i></label>
                                    <span class="reviews">400 Ratings & 133 Reviews</span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <p>
                                    <i class="fa-solid fa-circle-check text-success"></i>
                                    Coolant Top Up (Upto 200ml)
                                </p>
                                <p>
                                    <i class="fa-solid fa-circle-check text-success"></i>
                                    Windshield Water Top Up
                                </p>
                                <p>
                                    <i class="fa-solid fa-circle-check text-success"></i> Engine
                                    Oil Replacement
                                </p>
                                <p>
                                    <i class="fa-solid fa-circle-check text-success"></i> Engine
                                    Oil Replacement
                                </p>
                                <p>
                                    <i class="fa-solid fa-circle-check text-success"></i> Battery Water Top Up
                                </p>
                                <p><i class="fa-solid fa-circle-check text-success"></i> Vacuuming </p>
                                <p><i class="fa-solid fa-circle-check text-success"></i> Brake Oil Top Up (Upto 50ml)
                                </p>
                            </div>

                            <div class="col-md-12">
                                <button class="btn btn-primary cartSideNav"><i class="fa-solid fa-cart-shopping"></i> Add to
                                    cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Accordion />
        <Footer />
    </div>
</template>

<script>
import { csw } from "../store/csw";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Accordion from "./Accordion.vue"
// import axios from "axios"
import $ from "jquery";
export default {
    components: { Header, Footer, Accordion },
    computed: {
    },
    setup() {
        let carServiceWale = csw();
        // console.log(carServiceWale);
        return { carServiceWale }
    },
    data() {
        return {
            // serviceList: [],
            isSchedule: true,
            isDentingPainting: false,
            isCleaning: false,
            isACService: false,
            isBatteryService: false,
            isWheelService: false,
            active_el: 0,
            // cart:[],

        };
    },

    async mounted() {

        this.active_el = 1;
        var spinner = function () {
            setTimeout(function () {
                if ($("#spinner").length > 0) {
                    $("#spinner").removeClass("show");
                }
            }, 1);
        };
        spinner();

        // let list = await axios.get('http://localhost:3000/servicesList')
        // // console.log(serviceList);
        // this.serviceList = list.data;

        // this.cswObj.showServices();

    },

    methods: {
        filterService(item) {
            this.active_el = item;
            this.isSchedule = false,
                this.isDentingPainting = false,
                this.isCleaning = false,
                this.isACService = false,
                this.isBatteryService = false,
                this.isWheelService = false

            if (item === 1) {
                this.isSchedule = true;
            }
            else if (item === 2) {
                this.isDentingPainting = true;
            }
        },

        addToCart2(item) {
            this.carServiceWale.addToCart(item);
        }
    }
};
</script>
<style scoped>
body {
    margin-top: 20px;
    background: #9e8a8a;
}

.product-content {
    /* border: 2px solid #dfe5e9; */
    margin-bottom: 20px;
    margin-top: 12px;
    background: #fff;
    padding: 4px;
    -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}

.product-content .product-deatil {
    /* border-bottom: 1px solid #dfe5e9; */
    padding-bottom: 17px;
    padding-left: 16px;
    padding-top: 16px;
    position: relative;
    background: #fff;
}

.strike-price {
    font-size: 18px;
    margin-left: 15px;
    color: #696969;
    text-decoration: line-through;
}

.product-deatil {
    padding: 30px 30px 50px;
}

.product-deatil hr+.description-tabs {
    padding: 0 0 5px !important;
}


.product-deatil .name {
    margin-top: 0;
    margin-bottom: 0;
}

.product-deatil .name small {
    display: block;
}

.product-deatil .name a {
    margin-left: 0;
}

.product-deatil .price-container {
    font-size: 24px;
    margin: 10px;
    font-weight: 300;
}

.checked {
    color: orange;
}

.reviews {
    font-size: 15px;
    margin-left: 15px;
    color: rgb(52, 107, 153);
}

.badge-success {
    font-size: 12px;
    background: rgb(21, 129, 66);
    margin-left: 5px;
}

p {
    font-size: 14px;
    margin: 10px;
    font-weight: 700;
}

.fa-circle-check {
    margin-right: 8px;
}

.read-more {
    color: #0d6efd;
    font-weight: 500;
}

span.category {
    font-size: 20px;
    font-family: "Barlow", sans-serif;
    font-size: 1.25rem;
    color: black;
    cursor: pointer;
}

span.category:hover {
    color: #0d6efd;
    cursor: pointer;
}

span.category:hover {
    color: #0d6efd;
}

.cart {
    width: 60%;
    margin-bottom: 10px;
    padding: 8px;
    margin-left: 200px;
}

.service-card {
    width: 200px;
    height: 120px;
    text-align: center;
    font-size: 14px;
    margin-top: 18px;
    padding: 15px;
    /* padding-left: 25px; */
    font-weight: 700;

    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    background: #fff;
    border-radius: 6px;
}

.icon-image {
    width: 50px;
    margin-top: 15px;
}

.card-spacing {
    margin: 5px;
    margin-right: 25px
}

.cartSideNav {
    width: 90%;
    margin-right: -100px;
    padding: 8px;
    margin-top: 15px;

}

.product-deatil-sidenav {
    margin-bottom: 15px;
}

.sideNavImg {
    width: 350px;
    height: 230px;
    margin-top: -5px;
    padding: 12px
}

.serviceSection {
    background-color: #f3f5fa;
}

.active {
    background-color: rgb(208, 228, 245);
}


@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {

    /* Styles */
    span.category {
        color: rgb(65, 65, 65);
        font-family: "Barlow", sans-serif;
        font-size: 1rem;
        word-wrap: inherit;
        cursor: pointer;
    }

    .cart {
        width: 100%;
        margin-bottom: 10px;
        margin-left: 4%;
        padding: 12px
    }

    .reviews {
        font-size: 14.5px;
    }

    .product-img {
        width: 328px;
        height: 200px;
    }

    .service-card {
        width: 95px;
        height: 85px;
        text-align: center;
        font-size: 10px;
        margin-top: 8px;
        padding: 15px;
        /* padding-left: 25px; */
        font-weight: 700;
    }

    .service-card:hover {
        background-color: rgb(23, 187, 228);
        color: rgb(255, 255, 255);
        cursor: pointer;
        border: none;
    }

    .icon-image {
        width: 30px;
        margin-top: 1px;
    }

    .card-spacing {
        margin: 5px;
        margin-right: 25px
    }

    .carouselDiv {
        width: 420px;
        height: 300px;
    }

    .bookService {
        font-size: 25px;
    }

    .sideNavImg {
        width: 328px;
        height: 200px;
    }

    .cartSideNav {
        margin-top: 15px;
        padding: 12px
    }
}</style>