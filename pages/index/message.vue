<template>
    <div>
        <div class="border">
            <b-form-textarea class="border-0" type="text" v-model="selectedText"></b-form-textarea>
            <van-uploader v-model="fileList" multiple capture/>
        </div>
        <b-button variant="success" @click="login">Button</b-button>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
    const selectedText =ref('')
    //上传
    const fileList = ref([])
    const login =()=>{
        console.log(fileList)
    }

   
</script>