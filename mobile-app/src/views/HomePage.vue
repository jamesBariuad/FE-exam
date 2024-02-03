<template>
    <Menu></Menu>

    <ion-page id="main-content">
        <ion-header class="ion-no-border ion-padding">


            <div class="flex items-center justify-between">

                <ion-buttons slot="start">
                    <ion-menu-toggle>
                        <ion-icon class="text-4xl text-red-500" :icon="reorderTwoOutline"></ion-icon>
                    </ion-menu-toggle>
                </ion-buttons>

                <div class="flex items-center">
                    <img src="../assets/crown.png" alt="crown" class="w-8 mr-3">
                    <div class="font-semibold">0 points</div>
                    <ion-icon :icon="chevronForwardOutline" size="small" class="text-red-500 text-4xl"></ion-icon>
                </div>


                <ion-avatar class="w-8 h-8">
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
            </div>
        </ion-header>

        <ion-content>
            <ion-item lines="none" class="my-3">
                <div>
                    <img alt="logo" src="../assets/fastfood-logo.PNG" />
                </div>
                <div>
                    <div class="text-sm text-slate-500">Annyeong Chou!</div>
                    <div class="text-2xl font-semibold"> What do you want to eat?</div>
                </div>
            </ion-item>

            <ion-item lines="none">
                <ion-searchbar placeholder="try our new Steak Fries Veggies"></ion-searchbar>
            </ion-item>

            <ion-item lines="none">
                <ion-text slot="start">
                    <p class="text-2xl font-semibold">Special Offers!</p>
                </ion-text>
                <ion-item lines="none" slot="end">
                    <ion-text color="danger">
                        <p class="text-xs font-semibold">See All</p>
                    </ion-text>
                    <ion-icon :icon="chevronForwardOutline" size="small" class="text-red-500 text-4xl"></ion-icon>
                </ion-item>
            </ion-item>
            <ion-item lines="none">
                <swiper :slides-per-view="1.2" :loop="true" :space-between="20">
                    <swiper-slide>
                        <img class=" w-full rounded-xl" src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                            alt="image-placeholder">
                    </swiper-slide>
                    <swiper-slide>
                        <img class=" w-full rounded-xl" src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                            alt="image-placeholder">
                    </swiper-slide>
                    <swiper-slide>
                        <img class=" w-full rounded-xl" src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                            alt="image-placeholder">
                    </swiper-slide>
                </swiper>
            </ion-item>

            <ion-item lines="none">
                <ion-text slot="start">
                    <p class="text-2xl font-semibold mt-3">Category</p>
                </ion-text>
            </ion-item>
            <ion-item lines="none">
                <swiper :slides-per-view="1.8" :space-between="20" class="h-full">
                    <swiper-slide>
                        <div class="relative ">
                            <img class="mr-3 rounded-xl object-cover mr-5"
                                src="https://ionicframework.com/docs/img/demos/thumbnail.svg" alt="image-placeholder">
                            <div class="absolute left-0 bottom-0 text-white p-3">
                                <div class="font-bold text-lg">Chicken</div>
                                <div>9 recipes</div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="relative ">
                            <img class="mr-3 rounded-xl object-cover mr-5"
                                src="https://ionicframework.com/docs/img/demos/thumbnail.svg" alt="image-placeholder">
                            <div class="absolute left-0 bottom-0 text-white p-3">
                                <div class="font-bold text-lg">Seafoods</div>
                                <div>6 recipes</div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </ion-item>


            <ion-item lines="none" class="mt-3">
                <ion-text slot="start">
                    <p class="text-2xl font-semibold">What's New?</p>
                </ion-text>
            </ion-item>
            <ion-item lines="none">
                <img class="h-32 w-full rounded-xl object-cover"
                    src="https://ionicframework.com/docs/img/demos/thumbnail.svg" alt="image-placeholder">
            </ion-item>

            <ion-item lines="none" class="mt-3">
                <ion-text slot="start">
                    <p class="text-2xl font-semibold">Most Popular</p>
                </ion-text>
            </ion-item>

            <div class=" grid grid-cols-2">
                    <ion-card v-for="(item) in mostPopularItems">

                        <img :src="item.image" alt={{item.name}}>
                        <div class="p-3">
                            <div>
                                <div class="font-semibold line-clamp-1">{{ item.name }}</div>
                                <div>{{ item.category }}</div>
                            </div>
                            <div class="flex justify-between">
                                <div class="text-red-500 font-semibold text-lg">P {{ item.price }}</div>
                                <div>
                                    <star-rating :star-size="10" :rating="item.rating" :read-only="true"
                                        :increment="0.1" :show-rating="false"></star-rating>
                                </div>
                            </div>
                        </div>
                    </ion-card>
            </div>




        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonAvatar, IonGrid, IonCol, IonCard, IonCardHeader, IonSearchbar, IonCardSubtitle, IonCardTitle, IonText, IonMenuToggle, IonChip, IonThumbnail, IonLabel, IonNote, IonItem, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { reorderTwoOutline, chevronForwardOutline, searchCircle } from 'ionicons/icons';
import Menu from './Menu.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import StarRating from 'vue-star-rating';



const mostPopularItems = [
    {
        name: "Steak Fries Veggies",
        category: "Meat",
        price: 175,
        rating: 4.1,
        image: "https://ionicframework.com/docs/img/demos/thumbnail.svg"
    }, {
        name: "Chicken Salad",
        category: "Chicken",
        price: 172,
        rating: 5,
        image: "https://ionicframework.com/docs/img/demos/thumbnail.svg"
    }
]




</script>

