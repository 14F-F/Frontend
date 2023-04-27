<script setup>
import dataservice from "../services/dataservice";
const props = defineProps(["param", "list"])
let selTest = ref()
dataservice.allByCategory()


function showModal(testId) {
    dataservice.testById(testId)
        .then((resp) => {
            selTest.value = resp.data;
            //console.log(tests.value);
        })
        .catch((err) => {
            console.log(err);
        });
}

</script>
<template>
    <div class="carousel-inner col-12">
        <div class="carousel-item active">
            <div class="card col-lg-3 col-md-4 col-sm-6" style="width: 18rem;" v-for="test in props.list">
                <div class="card-body">
                    <h5 class="card-title">{{ test.Name }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Készítette: {{ dataservice.userById(test.CreatorID).Name
                    }}</h6>
                    <p class="card-text">Készült: {{ test.CreatedDate }}</p>
                    <RouterLink to="" class="btn btn-outline-success my-2 my-sm-0">Kitöltés</RouterLink>
                    <button @click="showModal(test.ID)" type="button" class="btn btn-primary my-2 my-sm-0"
                        data-toggle="modal" data-target=".modal-body">Részletek</button>
                </div>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    <div class="modal-body">
        <h5>Teszt neve: {{ }}</h5>
        <p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test"
                title="Tooltip">that link</a> have tooltips on hover.</p>
    </div>
</template>