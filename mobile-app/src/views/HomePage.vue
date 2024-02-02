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
            <ion-item lines="none">
                <div>
                    <img alt="logo" src="../assets/fastfood-logo.PNG" />
                </div>
                <div>
                    <div class="text-sm text-slate-500">Annyeong Chou!</div>
                    <div class="text-2xl font-semibold"> What do you want to eat?</div>
                </div>
            </ion-item>

            <ion-item lines="none">
                <ion-searchbar></ion-searchbar>
            </ion-item>

            <ion-item lines="none">
                <img class="w-1/2 mx-auto my-2" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" alt="crown">

            </ion-item>

            <ion-item lines="none">
                <ion-text slot="start">
                    <h2 class="text-lg font-semibold">Rewards</h2>
                </ion-text>
                <ion-item lines="none" slot="end">
                    <ion-text color="danger">
                        <p class="text-xs font-semibold">How It Works</p>
                    </ion-text>
                    <ion-icon :icon="chevronForwardOutline" size="small" class="text-red-500 text-4xl"></ion-icon>
                </ion-item>
            </ion-item>

            <ion-item lines="none">
                <ion-chip class="bg-red-500 text-white" color="danger">All</ion-chip>
                <ion-chip class="font-semibold text-slate-500">Beginner</ion-chip>
                <ion-chip class="font-semibold text-slate-500">Intermediate</ion-chip>
                <ion-chip class="font-semibold text-slate-500">Loyal</ion-chip>
            </ion-item>


            <ion-card color="light">
                <ion-item>
                    <ion-thumbnail slot="start">
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                    </ion-thumbnail>
                    <ion-label>
                        <ion-card-header class="p-1">
                            <ion-card-title class="font-semibold text-lg">Steak Fries Veggies
                            </ion-card-title>
                            <ion-card-subtitle class="mt-0">Meat</ion-card-subtitle>

                            <div class="flex items-center gap-2 mt-3">
                                <img class="w-6" src="../assets/crown.png" alt="crown">
                                <div class="text-red-500 font-semibold ">20 points</div>
                            </div>
                        </ion-card-header>
                    </ion-label>
                </ion-item>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonAvatar, IonCard, IonCardHeader, IonSearchbar, IonCardSubtitle, IonCardTitle, IonText, IonMenuToggle, IonChip, IonThumbnail, IonLabel, IonNote, IonItem, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { reorderTwoOutline, chevronForwardOutline,searchCircle } from 'ionicons/icons';
import Menu from './Menu.vue';
</script>