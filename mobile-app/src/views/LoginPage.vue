<template>
    <ion-page class="p-5">
        <ion-content>
            <img src="../assets/fastfood-logo.PNG" alt="fastfood-logo">
            <h2><b>Bonjour!</b></h2>
            <p class="font-light text-slate-500 mb-4 text-sm">Welcome to all new FastFood mobile app. Kindly login your
                account. Thank you!</p>
            <div>

                <ion-input label="Email Address" label-placement="stacked" placeholder="Enter your Email"
                    class="border rounded-lg mb-3 ion-padding-horizontal"></ion-input>
            </div>
            <div class="relative">
                <ion-input label="Password" fill="outline" type="password" label-placement="stacked"
                    placeholder="Enter your password" class="border rounded-lg ion-padding-horizontal"></ion-input>
                <span class="absolute right-3 top-1/3 text-red-500">Forgot?</span>
            </div>

            <ion-button expand="block" color="danger" class="mt-16">Login</ion-button>
            <div class="text-center text-red-500 mt-5">

                Login as Guest
            </div>
            <div class="text-center w-full text-sm absolute bottom-0">
                Don't have an account yet? <span class="text-red-500 font-semibold">Create</span>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonInput, IonButton,} from '@ionic/vue'
</script>

