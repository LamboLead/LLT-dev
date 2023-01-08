<script>
export default {
	props: {
		info: Object
	}
}
</script>

<template>
	<div class="element-container">
		<img :src="`/public/images/${this.info.imageSrc}`" alt="Just an image">
		<span class="title">{{ this.info.employeeName }}</span>
		<span class="text">Posición:</span>
		<span class="text">{{ this.info.employeePosition }}</span>
		<span class="text">{{ this.info.employeePosition }}</span>
	</div>
</template>

<style lang="scss" scoped>
.element-container {
	min-width: 17rem;
	width: 18rem;
	height: 100%;
	border: 1px solid red;
	@include flex-container(column, flex-start, center);
	// margin-inline: 1rem;
	// position: absolute;
}

img {
	width: 70%;
	aspect-ratio: 1/1;
	// border-radius: 0%;
	margin: 3rem;
}

.title {
	font-size: 1.2rem;
	font-weight: bolder;
}
.text {
	font-weight: bold;
	color: darkgray;
	margin-top: 1rem;
}
</style>