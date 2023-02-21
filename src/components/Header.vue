<template>
    <div>
        <h1>{{ name }}</h1>

        <!-- Topbar Start -->
        <div class="container-fluid p-0" style="background-color: #f2f2f2 !important">
            <div class="row gx-0 d-none d-lg-flex">
                <div class="col-lg-7 px-5 text-start">
                    <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                        <small class="fa fa-envelope carServ me-2"></small>
                        <small>info@carservicewale.com</small>
                    </div>
                    <div class="h-100 d-inline-flex align-items-center py-3">
                        <small class="far fa-clock carServ me-2"></small>
                        <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                    </div>
                </div>
                <div class="col-lg-5 px-5 text-end">
                    <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                        <small class="fa fa-phone-alt carServ me-2"></small>
                        <small>8904555007</small>
                    </div>
                    <div class="h-100 d-inline-flex align-items-center">
                        <a class="btn btn-sm-square bg-white carServ me-1" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm-square bg-white carServ me-1" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-sm-square bg-white carServ me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-sm-square bg-white carServ me-0" href=""><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Topbar End -->

        <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 class="m-0 carServ">
                    <i class="fa fa-car me-3"></i>CarServiceWale
                </h2>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <router-link :to="{ name: 'Home' }" :class="getActiveNavLink('Home')" class="nav-item nav-link menu">
                        Home
                    </router-link>
                    <router-link :to="{ name: 'Service' }" :class="getActiveNavLink('Service')"
                        class="nav-item nav-link menu">
                        Services
                    </router-link>
                    <span :class="getActiveNavLink('CartPage')"
                        class="nav-item nav-link menu">
                        <div class="navbar-right">
                            <a class="cart-menu" href="#" id="cart"><i class="fa fa-shopping-cart"></i> Cart <span class="badge">{{ carServiceWale.cartCount }}</span></a>
                            <div class="shopping-cart">
                                <div class="shopping-cart-header">
                                    <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">{{ carServiceWale.cartCount }}</span>
                                    <div class="shopping-cart-total">
                                        <span class="lighter-text">Total:</span>
                                        <span class="main-color-text total">{{carServiceWale.cartTotal}}</span>
                                    </div>
                                </div> <!--end shopping-cart-header -->

                                <ul class="shopping-cart-items" v-for="(item, index) in carServiceWale.cartItem" :key="{index}">
                                    <span class="clearfix">
                                        <img :src="item.image"
                                            alt="item1" />
                                        <span class="item-name">{{item.name}}</span>
                                        <span class="item-price">{{ item.price }}</span>
                                        <!-- <span class="item-quantity">Quantity: 01</span> -->
                                    </span>
                                </ul>

                                <router-link :to="{ name: 'CartPage' }" class="button">Checkout <i class="fa fa-chevron-right"></i></router-link>
                            </div> <!--end shopping-cart -->
                        </div>
                        <!-- <i class="fa fa-shopping-cart"></i><span class="badge badge-primary ml-0">{{ carServiceWale.cartCount }}</span> -->
                    </span>
                </div>
            </div>
        </nav>
        <!-- Navbar End -->
    </div>
</template>
<script>
import { csw } from "../store/csw";
import $ from "jquery"
export default {
    setup() {
        let carServiceWale = csw()
        return { carServiceWale }
    },
    name: "Header",
    props: {
        name: String,
    },
    mounted() {
        let cartLength = localStorage.getItem("cartItem");
        if (cartLength) {
            this.cart = JSON.parse(cartLength).length;
        }
            $('.shopping-cart').each(function () {
                var delay = $(this).index() * 50 + 'ms';
                $(this).css({
                    '-webkit-transition-delay': delay,
                    '-moz-transition-delay': delay,
                    '-o-transition-delay': delay,
                    'transition-delay': delay
                });
            });
            $('#cart, .shopping-cart').hover(function (e) {
                $(".shopping-cart").stop(true, true).addClass("active");
            }, function () {
                $(".shopping-cart").stop(true, true).removeClass("active");
            });

    },
    data() {
        return {
            cart: 0,
            price:0,
            quantity:0,
        };
    },
    methods: {
        myFunction() {
            alert('hi');
        },
        getActiveNavLink(name) {
            let classString = "nav-item nav-link ";
            if (this.$route.name === name) {
                classString += "active";
            }
            return classString;
        },
        callMe(){
            alert("hello")
        }
    },
};
</script>

<style scoped>
.nav-link {
    color: rgb(0, 125, 241);
}


a {
    display: inline;
    padding-left: 20px;
    color: #777777;
    text-decoration: none;
}
a:hover {
      color: black;
    }

.container {
    margin: auto;
    width: 80%;
}

#addtocart {
    width: 250px;
}

.badge {
    background-color: red;
    border-radius: 10px;
    color: white;
    display: inline-block;
    font-size: 12px;
    line-height: 1;
    padding: 3px 7px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
}

.shopping-cart {
    background: white;
    width: 320px;
    position: absolute;
    top: 30px;
    right: -10px;
    border-radius: 3px;
    padding: 20px;
    overflow: hidden;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26) !important;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    opacity: 0;
    -webkit-transform-origin: right top 0;
    -webkit-transform: scale(0);
    transform-origin: right top 0;
    transform: scale(0);
}

.shopping-cart.active {
    opacity: 1;
    -webkit-transform-origin: right top 0;
    -webkit-transform: scale(1);
    transform-origin: right top 0;
    transform: scale(1);
}

.shopping-cart .shopping-cart-header {
    border-bottom: 1px solid #E8E8E8;
    padding-bottom: 15px;
}

.shopping-cart .shopping-cart-header .shopping-cart-total {
    float: right;
}

.shopping-cart .shopping-cart-items {
    padding-top: 20px;
}

.shopping-cart .shopping-cart-items li {
    margin-bottom: 18px;
}

.shopping-cart .shopping-cart-items img {
    float: left;
    margin-right: 12px;
    max-width: 70px;
    max-height: 70px;
}

.shopping-cart .shopping-cart-items .item-name {
    display: block;
    font-size: 16px;
}

.shopping-cart .shopping-cart-items .item-detail {
    display: block;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.shopping-cart .shopping-cart-items .item-price {
    color: #00c0cb;
    margin-right: 8px;
}

.shopping-cart .shopping-cart-items .item-quantity {
    color: #ABB0BE;
}

.shopping-cart:after {
    bottom: 100%;
    left: 89%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: white;
    border-width: 8px;
    margin-left: -8px;
}

.cart-icon {
    color: #515783;
    font-size: 24px;
    margin-right: 7px;
    float: left;
}

.button {
    background: #f8770c;
    color: white;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    display: block;
    border-radius: 3px;
    font-size: 16px;
    margin: 25px 0 15px 0;
    text-transform: uppercase;
}

.button:hover {
    background: #f87f1b;
}

.button i {
    padding-left: 5px;
}

.clearfix:after {
    content: "";
    display: table;
    clear: both;
}</style>
