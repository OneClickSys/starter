<template>
<div>Hello Vue. {{ this.$route.path }}</div>
</template>

<script>
export default {
    activated: function() {
        console.log('blank page ' + new Date());
    }
};
</script>
