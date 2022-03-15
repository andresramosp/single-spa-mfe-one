<template>
  <div class="p-fluid grid formgrid">
    <div class="field col-12 md:col-4">
      <Calendar id="basic" v-model="date1" autocomplete="off" />
    </div>
  </div>
</template>

<script>
import Calendar from 'primevue/calendar/sfc';
import { ref } from "vue";
export default {
  components: {
    Calendar
  },
  setup() {
    const date1 = ref(new Date());

    return { date1 };
  },
};
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>