<template>
  <b-container>
    <div class="h2 mb-0">
      <b-icon-arrow-up></b-icon-arrow-up>
      <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
    </div>
    <div class="h2 mb-0">
      <b-icon icon="exclamation-circle-fill" variant="success"></b-icon>
      <b-icon icon="exclamation-circle-fill" variant="warning"></b-icon>
      <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
      <b-icon icon="exclamation-circle-fill" variant="info"></b-icon>
      <b-icon icon="exclamation-circle-fill" variant="primary"></b-icon>
      <b-icon icon="exclamation-circle-fill" variant="secondary"></b-icon>
      <b-icon icon="exclamation-circle-fill" variant="dark"></b-icon>
    </div>
    <div class="h2 mb-0">
      <b-icon icon="battery-full" style="color: #7952b3;"></b-icon>
    </div>
    <div>
      <p class="h1 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
      <p class="h2 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
      <p class="h3 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
      <p class="h4 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
      <p class="h5 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
    </div>
    <div>
      <b-icon icon="exclamation-circle" style="width: 120px; height: 120px;"></b-icon>
    </div>
    <div>
      <div>
        <b-icon icon="camera" font-scale="0.5"></b-icon>
        <b-icon icon="camera" font-scale="1"></b-icon>
        <b-icon icon="camera" font-scale="2"></b-icon>
        <b-icon icon="camera" font-scale="3"></b-icon>
        <b-icon icon="camera" font-scale="4"></b-icon>
        <b-icon icon="camera" font-scale="5"></b-icon>
        <b-icon icon="camera" font-scale="7.5"></b-icon>
      </div>
    </div>
    <div style="font-size: 4rem;">
      <b-icon icon="bell-fill" class="border rounded p-2"></b-icon>
      <b-icon icon="bell-fill" class="border border-info rounded p-2" variant="info"></b-icon>
      <b-icon icon="bell-fill" class="rounded-circle bg-danger p-2" variant="light"></b-icon>
      <b-icon icon="unlock-fill" class="rounded bg-primary p-1" variant="light"></b-icon>
    </div>
    <b-row class="text-md-center">
      <b-col md="6" class="mb-3">
        <p>Cylon animation:</p>
        <b-icon icon="three-dots" animation="cylon" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Vertical cylon animation:</p>
        <b-icon icon="three-dots-vertical" animation="cylon-vertical" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Fade animation:</p>
        <b-icon icon="star-fill" animation="fade" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Spinning animation:</p>
        <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Reverse spinning animation:</p>
        <b-icon icon="arrow-counterclockwise" animation="spin-reverse" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Pulsing spin animation:</p>
        <b-icon icon="arrow-clockwise" animation="spin-pulse" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Reversed pulsing spin animation:</p>
        <b-icon icon="arrow-counterclockwise" animation="spin-reverse-pulse" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Throb animation:</p>
        <b-icon icon="circle-fill" animation="throb" font-scale="4"></b-icon>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import {
//   BIcon,
//   BIconArrowUp,
//   BIconArrowDown,
//   BIconExclamationTriangleFill,
//   BIconExclamationCircle,
//   BIconExclamationCircleFill,
//   BIconCamera,
//   BIconBellFill,
//   BIconUnlock
// } from 'bootstrap-vue'

export default {
  name: 'icon-test',
  components: {
    // HelloWorld
    // BIcon,
    // BIconArrowUp,
    // BIconArrowDown,
    // BIconExclamationTriangleFill,
    // BIconExclamationCircle,
    // BIconExclamationCircleFill,
    // BIconCamera,
    // BIconBellFill,
    // BIconUnlock
  }
}
</script>

<style>
</style>
