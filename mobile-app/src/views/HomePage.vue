<template>
  <ion-menu content-id="main-content" class="ion-padding-horizontal">
    <div class="px-3 py-5">
      <div class="flex ">
        <ion-avatar class="mr-10">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <img src="../assets/crown.png" alt="crown" class="w-12">
        <div class="self-end">

          <ion-icon :icon="chevronForwardOutline" size="large" class="text-red-500 text-4xl"></ion-icon>
        </div>
      </div>
      <div class="text-2xl font-semibold">Chou Tzuyu</div>
      <div class="text-slate-500 ">+63 912 345 6789</div>

    </div>
    <ion-content class="ion-padding">This is the menu content.</ion-content>
  </ion-menu>

  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>


      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> Tap the button in the toolbar to open the menu.

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonAvatar, IonIcon, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { logoIonic, chevronForwardOutline } from 'ionicons/icons';
</script>
