<template>
  <ion-menu type="push" content-id="main-content" class="ion-padding-horizontal">
    <div class="ion-padding">
      <div class="flex items-center">
        <ion-avatar class="mr-10">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <img src="../assets/crown.png" alt="crown" class="w-8 mr-10">
        <div class="font-semibold">0 points</div>
        <ion-icon :icon="chevronForwardOutline" size="large" class="text-red-500 text-4xl"></ion-icon>
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

  <ion-page id="main-content">
    <ion-header class="ion-no-border ion-padding bg-white">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-icon class="text-4xl text-red-500" :icon="reorderTwoOutline"></ion-icon>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-title class="font-semibold text-2xl">Loyalty Points</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item lines="none">
        <img src="../assets/crown.png" alt="crown" class="w-8 mr-3" slot="start">
        <h2 class="text-base font-semibold">Beginner Tier</h2>
        <ion-item lines="none" slot="end">
          <ion-text color="danger">
            <p class="text-xs font-semibold">View All</p>
          </ion-text>
          <ion-icon :icon="chevronForwardOutline" size="small" class="text-red-500 text-4xl"></ion-icon>
        </ion-item>
      </ion-item>
      <ion-item lines="none">
        <ion-note class="text-sm">Earn Points by purchasing from our store. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quis.</ion-note>
      </ion-item>

      <ion-item  lines="none">
      <img class="w-1/2 mx-auto my-2" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" alt="crown"  >
        
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
                <img class="w-6" src="../assets/crown.png" alt="crown"  >
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
import { IonButtons, IonList, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonText, IonMenuToggle, IonChip, IonButton, IonThumbnail, IonGrid, IonLabel, IonNote, IonBadge, IonItem, IonRow, IonCol, IonAvatar, IonIcon, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { reorderTwoOutline, chevronForwardOutline } from 'ionicons/icons';
</script>
