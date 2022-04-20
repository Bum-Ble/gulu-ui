<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<scirpt></scirpt>
<style lang="scss">
.g-button-group{
  display: inline-flex;
  vertical-align: middle;
  > .g-button{
    border-radius: 0;
    // 中间的border变细
    margin-left: -1px;
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    // 让悬浮选中的按钮置顶，避免border被遮挡
    &:hover{
      position: relative;
      z-index: 1;
    }
  }
}

</style>
