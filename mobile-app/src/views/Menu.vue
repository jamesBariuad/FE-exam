<template>
    <ion-menu type="push" content-id="main-content" class="ion-padding-horizontal">
    <div class="ion-padding">
      <div class="flex items-center">
        <ion-avatar class="mr-10">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <img src="../assets/crown.png" alt="crown" class="w-8 mr-10">
        <div class="font-semibold">0 points</div>
        <ion-icon :icon="chevronForward" size="large" class="text-red-500 text-4xl"></ion-icon>
      </div>
      <div class="text-2xl font-semibold">Chou Tzuyu</div>
      <ion-note>+63 912 345 6789</ion-note>
    </div>
    <ion-content>
        <ion-list lines="none">
          <ion-item>
            <ion-thumbnail class="w-5 h-5" slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label class="font-semibold">Home</ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail class="w-5 h-5" slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label class="font-semibold">Order Now!</ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail class="w-5 h-5" slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label class="font-semibold">Notifications</ion-label>
            <ion-badge color="warning">4</ion-badge>
          </ion-item>
          <ion-item>
            <ion-thumbnail class="w-5 h-5" slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label class="font-semibold">Store Locator</ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail class="w-5 h-5" slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label class="font-semibold">FAQ's</ion-label>
          </ion-item>

          <div class="border mx-3 my-3"></div>

          <ion-item>
            <ion-thumbnail class="w-5 h-5" slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label class="font-semibold">My Orders</ion-label>
            <ion-badge color="warning">2</ion-badge>
          </ion-item>
          <ion-item>
            <ion-thumbnail class="w-5 h-5" slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label class="font-semibold">My Account</ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail class="w-5 h-5" slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label class="font-semibold">My Favorites</ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail class="w-5 h-5" slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label class="font-semibold">Order Tracker</ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail class="w-5 h-5" slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label class="font-semibold">Order History</ion-label>
          </ion-item>

          <ion-button class="px-3 w-1/2 mt-10" color="danger"> Logout</ion-button>

        </ion-list>

    </ion-content>
  </ion-menu>
</template>

<script setup lang="ts">
import { IonButtons, IonList, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonText, IonMenuToggle, IonChip, IonButton, IonThumbnail, IonGrid, IonLabel, IonNote, IonBadge, IonItem, IonRow, IonCol, IonAvatar, IonIcon, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { reorderTwoOutline, chevronForward } from 'ionicons/icons';
</script>