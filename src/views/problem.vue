<template>
    <div class="display panel">
        <div class="return-to-home" @click="router.push('/')">返回首页</div>
        
        <div class="principleBox">
            <div class="principle-content">
                {{ showContent1 }}
            </div>
            <div class="principle-content">
                {{ showContent2 }}
            </div>
        </div>

    </div>
</template>