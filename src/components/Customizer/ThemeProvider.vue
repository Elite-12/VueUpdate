<template>
	<div class="theme-color">
		<h5 class="text-sm-center mb-4">{{$t('message.selectTheme')}}</h5>
		<v-list>
			<v-list-item
				v-ripple="false"
				v-for="theme in themes"
				:key="theme.id"
				@click="changeTheme(theme)"
				:class="{'active-theme': selectedTheme === theme}"
			>
				<template v-slot:prepend>
					<span :class="theme.bgColor" icon></span>
				</template>
			</v-list-item>
		</v-list>
	</div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const store = useStore()
const vuetifyTheme = useTheme()

const themes = computed(() => store.getters.themes)
const selectedTheme = computed(() => store.getters.selectedTheme)

const changeTheme = (theme) => {
	store.dispatch("changeTheme", theme)
	const themeColors = theme.theme
	
	// Update both light and dark themes
	vuetifyTheme.themes.value.light.colors = { ...themeColors }
	vuetifyTheme.themes.value.dark.colors = { ...themeColors }
}
</script>