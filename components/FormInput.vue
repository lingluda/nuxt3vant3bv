<template>
  <b-card>
    <b-nav>
      <b-nav-item>w嘉慧❤I爱你</b-nav-item>
      <b-nav-item>
         SSR_yyds
      </b-nav-item>
    </b-nav>
    <input type="date" value="2017-06-01" />
    <input type="date" name="createtime"  value='2017-06-01' pattern='yyyy-MM-dd'/>
    <b-form-input type="date" id="dca" v-model="selectedText"></b-form-input>
    {{selectedText}}
    <b-row class="my-1" v-for="type in inputTypes" :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`">Type <code>{{ type }}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>{{data}}
  </b-card>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'
  //import consolaGlobalInstance from 'consola';

   const selectedText = ref('')
   //console.log(ref)
    const { data, pending, error, refresh } = await useAsyncData(
        'mountains',
        () => $fetch('https://img-home.csdnimg.cn/data_json/toolbar/toolbar1105.json')
        )
  const inputTypes = [
    'text',
    'number',
    'email',
    'password',
    'search',
    'url',
    'tel',
    'date',
    'time',
    'range',
    'color',
  ]
</script>