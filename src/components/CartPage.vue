<template>
    <Header></Header>
    <div class="container mt-4">
        <div class="row">
            <div class="col-lg-8">

            </div>
            <table id="cart" class="table table-hover table-condensed">
                <thead>
                    <tr>
                        <th style="width:50%">Product</th>
                        <th style="width:10%">Price</th>
                        <th style="width:22%" class="text-center">Subtotal</th>
                        <th style="width:10%" class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-th="Product">
                            <div class="row">
                                <div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..."
                                        class="img-responsive" /></div>
                                <div class="col-sm-10">
                                    <h4 class="nomargin">Standard Service</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>
                                    <i class="fa-solid fa-circle-check text-success"></i>
                                    Coolant Top Up (Upto 200ml)
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-circle-check text-success"></i>
                                        Windshield Water Top Up
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td data-th="Price">$5.11</td>
                        <td data-th="Subtotal" class="text-center">$5.11</td>
                        <td class="actions" data-th="">
                            <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
                            <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                        </td>
                    </tr>
    
                    <tr>
                        <td data-th="Product">
                            <div class="row">
                                <div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..."
                                        class="img-responsive" /></div>
                                <div class="col-sm-10">
                                    <h4 class="nomargin">Standard Service</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>
                                    <i class="fa-solid fa-circle-check text-success"></i>
                                    Coolant Top Up (Upto 200ml)
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-circle-check text-success"></i>
                                        Windshield Water Top Up
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td data-th="Price">$5.11</td>
                        <td data-th="Subtotal" class="text-center">$5.11</td>
                        <td class="actions" data-th="">
                            <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
                            <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td><router-link to="/service" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue
                                Shopping</router-link></td>
                        <td colspan="1" class="hidden-xs"></td>
                        <td class="hidden-xs text-center"><strong>Total $ 5.11</strong></td>
                        <td><router-link to="/customerdetail" class="btn btn-success">Checkout <i class="fa fa-angle-right"></i></router-link></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>

</template>
<script>
import Header from "./Header.vue"
export default {
    components: {
        Header
    },
    name: "CartPage",
}
</script>

<style scoped>
.price {
    font-size: 28px;
}
</style>