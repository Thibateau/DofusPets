<template>
  <LoginForm @send="form => doLogin(form)"/>
</template>

<script lang="ts">
import Vue from 'vue'
import { login } from '~/api/auth';
import { TLoginForm } from '~/types';

export default {
  name: "IndexPage",
  data() {
    return {
      token: "",
    };
  },
  methods: {
    async doLogin(form: TLoginForm ) {
      console.log(form);
          try {
      await login({$axios:this.$axios},form)
    }
    catch(error) {
        console.log(error)
      }
    },
  },
  async mounted() {
  },
};
</script>
