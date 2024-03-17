<template>
  <li class="space-y-2">
    <div class="flex items-center space-x-2">
      <Icon size="20" name="mdi:check-circle" class="text-[#0c66ee]" />
      <span>{{ title }}</span>
    </div>
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'LandingListItem',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
