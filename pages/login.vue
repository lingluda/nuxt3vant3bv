<template>
    <div>
        <b-form-input type="text" v-model="selectedText"></b-form-input>
        <b-form-input type="password" v-model="selectedText"></b-form-input>
        <b-button variant="success" @click="login">Button</b-button>
 
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
    const selectedText =ref('')
    const login =()=>{
        return navigateTo({
          path: '/'})
    }
</script>