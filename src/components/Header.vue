<template>
       <!-- Spinner Start -->
       <!-- <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border carServ" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only" style="overflow: hidden;">Loading...</span>
        </div>
    </div> -->
    <!-- Spinner End -->
    
    <!-- Topbar Start -->
    <div class="container-fluid  p-0" style="background-color: #F2F2F2 !important;">
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
            <h2 class="m-0 carServ"><i class="fa fa-car me-3"></i>CarServiceWale</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <router-link :to="{name: 'Home'}" :class="getActiveNavLink('Home')" class="nav-item nav-link menu">
                    Home
                </router-link>
                <router-link :to="{name:'Service'}" :class="getActiveNavLink('Service')" class="nav-item nav-link menu">
                    Services
                </router-link>
                <router-link :to="{name:'CartPage'}" :class="getActiveNavLink('CartPage')" class="nav-item nav-link menu">
                    <i class="fa-solid fa-cart-shopping"></i>Cart
                </router-link>
            </div>

        </div>
    </nav>
    <!-- Navbar End -->

</template>
<script>
export default {
    name:"HeaderComponent",
    methods:{
        getActiveNavLink(name) {
      //This is for the navbar classes, you can modify them as
      //as you need. (This will be assigned every-time we call this
      //function).
      let classString = "nav-item nav-link "
    
      //We compare the given name with the route current name.
      if (this.$route.name === name) {
        //If it is true, we append to the class string the "active" value
        classString += "active"
      }
      //Return the class string.
      return classString;
    }
    }
}
</script>

<style scoped>

.nav-link {
  color: rgb(0, 125, 241);
}

</style>