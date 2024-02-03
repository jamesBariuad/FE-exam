<template>
    <Menu></Menu>

    <ion-page>
        <ion-header class="ion-no-border ion-padding bg-white flex justify-between items-center">
            <ion-menu-toggle>
                <ion-icon class="text-4xl text-red-500" :icon="reorderTwo"></ion-icon>
            </ion-menu-toggle>
            <ion-title class="font-semibold text-2xl">Our Foods</ion-title>
            <ion-icon class="text-4xl text-red-500" :icon="bagHandle"></ion-icon>
        </ion-header>

        <ion-content id="main-content">
            <ion-searchbar placeholder="try our new Beef Bibimbowl"></ion-searchbar>

            <ion-item lines="none">
                <ion-chip class="bg-red-500 text-white" color="danger">All</ion-chip>
                <ion-chip class="font-medium text-slate-500">Breakfast</ion-chip>
                <ion-chip class="font-medium text-slate-500">Chicken</ion-chip>
                <ion-chip class="font-medium text-slate-500">Seafood</ion-chip>
            </ion-item>

            <div class=" grid grid-cols-2 mb-16 gap-3 p-3">
                <ion-card v-for="(item) in ourFoods" class="m-0">

                    <div class="p-3"> <img :src="item.image" alt={{item.name}}>
                        <div class="mt-1">
                            <div>
                                <div class="font-semibold text-black line-clamp-1">{{ item.name }}</div>
                                <div>{{ item.category }}</div>
                            </div>
                            <div class="flex justify-between">
                                <div class="text-red-500 font-semibold text-lg">P {{ item.price }}</div>
                                <div>
                                    <star-rating :star-size="10" :rating="item.rating" :read-only="true" :increment="0.1"
                                        :show-rating="false"></star-rating>
                                </div>
                            </div>
                        </div>
                    </div>
                </ion-card>
            </div>




        </ion-content>
    </ion-page>
</template>


<script setup lang="ts">
import { IonSearchbar, IonList, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonText, IonMenuToggle, IonChip, IonButton, IonThumbnail, IonGrid, IonLabel, IonNote, IonBadge, IonItem, IonRow, IonCol, IonAvatar, IonIcon, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { reorderTwo, bagHandle } from 'ionicons/icons';
import Menu from './Menu.vue';
import StarRating from 'vue-star-rating';

const ourFoods = [
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
    }, {
        name: "Sorvetes Primavera",
        category: "Dessert",
        price: 185,
        rating: 4.5,
        image: "https://ionicframework.com/docs/img/demos/thumbnail.svg"
    },
    {
        name: "Fried Chicken",
        category: "Chicken",
        price: 175,
        rating: 4.4,
        image: "https://ionicframework.com/docs/img/demos/thumbnail.svg"
    }, {
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
    }, {
        name: "Sorvetes Primavera",
        category: "Dessert",
        price: 185,
        rating: 4.5,
        image: "https://ionicframework.com/docs/img/demos/thumbnail.svg"
    },
    {
        name: "Fried Chicken",
        category: "Chicken",
        price: 175,
        rating: 4.4,
        image: "https://ionicframework.com/docs/img/demos/thumbnail.svg"
    }
]

</script>
