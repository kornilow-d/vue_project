<template>
    <div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
                <div class="product__wrapper">
                    <div class="product__slider">
                        <carousel :perPage="1" :paginationEnable="true" paginationColor="#b3b3b3" paginationActiveColor="#494ce8">
                            <slide v-for="(slide, index) in product.gallery" :key="index">
                                <img :src="slide.img" :alt="slide.name">
                            </slide>
                        </carousel>
                    </div>

                    <div class="product__content">
                        <h1 class="title">{{ product.title }}</h1>
                        <p>{{ product.desrc }}</p>
                    </div>
                </div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
    data() {
        return {
            product: null
        }
    },
    created() {
        let id = this.$route.params.id
        this.product = this.$store.getters.getProduct(id)
    }
}
</script>

<style lang="scss">
.VueCarousel-inner {
  visibility: visible !important;
  flex-basis: 100% !important;
  width: 100% !important;
}

.product {
    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__slider, &__content {
        max-width: 48%;
        text-align: center;
    }
}
</style>