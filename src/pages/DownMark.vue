<template>
    <div class="markdown">
        <div class="vessel container flow">
            <Markdown />
        </div>
    </div>
</template>

<style>
.markdown {
    /* padding: 1rem; */
    margin-left: 15rem;
    background: var(--color-background-soft);
}
</style>


<script>
import Markdown from './README.md'

export default {
    components: {
        Markdown,
    },
}
</script>