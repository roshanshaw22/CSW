<template>
    <Header />
    <div class="container">
        <form>
            <div class="row">
                <div class="col-lg-4">
                    <input type="text" class="form-control" placeholder="Name">
                </div>
                <div class="col-lg-4">
                    <input type="text" class="form-control" placeholder="Email address">
                </div>
                <div class="col-lg-4">
                    <input type="text" class="form-control" placeholder="Contact">
                </div>

            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Full Address</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
    
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

</template>

<script>
import Header from "../components/Header.vue"
export default {
    components: { Header },
    name: "CustomerDetailComponent"
}
</script>

<style scoped>
.container {
    margin-top: 20%;
}

.row {
    margin-bottom: 10px;
}
</style>