<script>
export default {
	props: {
		info: Object
	}
}
</script>

<template>
	<div class="element-container">
		<img :src="`/images/${this.info.imageSrc}`" alt="Just an image">
		<span class="title">{{ this.info.employeeName }}</span>
		<span class="text">Posición:</span>
		<span class="text">{{ this.info.employeePosition }}</span>
	</div>
</template>

<style lang="scss" scoped>
.element-container {
	min-width: 17rem;
	width: 18rem;
	height: 100%;
	@include flex-container(column, flex-start, center);
	border: 1px dashed lightgray;
	background: white;
}

img {
	width: 70%;
	aspect-ratio: 1/1;
	border-radius: 50%;
	margin: 3rem;
	:hover {
		transform: scale(1.05);
	}
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