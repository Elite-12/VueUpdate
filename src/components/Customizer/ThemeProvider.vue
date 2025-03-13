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

<script>
	import { mapGetters } from "vuex";

	export default {
		computed: {
			...mapGetters(["themes", "selectedTheme"])
		},
		methods: {
			changeTheme(theme) {
				console.log('this.$vuetify.theme.themes.light=======',this.$vuetify.theme.themes.light)
				console.log('theme.theme=======', theme.theme)
				switch (theme.id) {
					case 1:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light.accent = theme.theme.accent;
						this.$vuetify.theme.themes.light.error = theme.theme.error;
						this.$vuetify.theme.themes.light.info = theme.theme.info;
						this.$vuetify.theme.themes.light.primary = theme.theme.primary;
						this.$vuetify.theme.themes.light.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.light.success = theme.theme.success;
						this.$vuetify.theme.themes.light.warning = theme.theme.warning;
						
						this.$vuetify.theme.themes.dark.accent = theme.theme.accent;
						this.$vuetify.theme.themes.dark.error = theme.theme.error;
						this.$vuetify.theme.themes.dark.info = theme.theme.info;
						this.$vuetify.theme.themes.dark.primary = theme.theme.primary;
						this.$vuetify.theme.themes.dark.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.dark.success = theme.theme.success;
						this.$vuetify.theme.themes.dark.warning = theme.theme.warning;
						break;
					case 2:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light.accent = theme.theme.accent;
						this.$vuetify.theme.themes.light.error = theme.theme.error;
						this.$vuetify.theme.themes.light.info = theme.theme.info;
						this.$vuetify.theme.themes.light.primary = theme.theme.primary;
						this.$vuetify.theme.themes.light.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.light.success = theme.theme.success;
						this.$vuetify.theme.themes.light.warning = theme.theme.warning;
						
						this.$vuetify.theme.themes.dark.accent = theme.theme.accent;
						this.$vuetify.theme.themes.dark.error = theme.theme.error;
						this.$vuetify.theme.themes.dark.info = theme.theme.info;
						this.$vuetify.theme.themes.dark.primary = theme.theme.primary;
						this.$vuetify.theme.themes.dark.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.dark.success = theme.theme.success;
						this.$vuetify.theme.themes.dark.warning = theme.theme.warning;
						break;
					case 3:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light.accent = theme.theme.accent;
						this.$vuetify.theme.themes.light.error = theme.theme.error;
						this.$vuetify.theme.themes.light.info = theme.theme.info;
						this.$vuetify.theme.themes.light.primary = theme.theme.primary;
						this.$vuetify.theme.themes.light.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.light.success = theme.theme.success;
						this.$vuetify.theme.themes.light.warning = theme.theme.warning;
						
						this.$vuetify.theme.themes.dark.accent = theme.theme.accent;
						this.$vuetify.theme.themes.dark.error = theme.theme.error;
						this.$vuetify.theme.themes.dark.info = theme.theme.info;
						this.$vuetify.theme.themes.dark.primary = theme.theme.primary;
						this.$vuetify.theme.themes.dark.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.dark.success = theme.theme.success;
						this.$vuetify.theme.themes.dark.warning = theme.theme.warning;
						break;
					case 4:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light.accent = theme.theme.accent;
						this.$vuetify.theme.themes.light.error = theme.theme.error;
						this.$vuetify.theme.themes.light.info = theme.theme.info;
						this.$vuetify.theme.themes.light.primary = theme.theme.primary;
						this.$vuetify.theme.themes.light.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.light.success = theme.theme.success;
						this.$vuetify.theme.themes.light.warning = theme.theme.warning;
						
						this.$vuetify.theme.themes.dark.accent = theme.theme.accent;
						this.$vuetify.theme.themes.dark.error = theme.theme.error;
						this.$vuetify.theme.themes.dark.info = theme.theme.info;
						this.$vuetify.theme.themes.dark.primary = theme.theme.primary;
						this.$vuetify.theme.themes.dark.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.dark.success = theme.theme.success;
						this.$vuetify.theme.themes.dark.warning = theme.theme.warning;
						break;
					case 5:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light.accent = theme.theme.accent;
						this.$vuetify.theme.themes.light.error = theme.theme.error;
						this.$vuetify.theme.themes.light.info = theme.theme.info;
						this.$vuetify.theme.themes.light.primary = theme.theme.primary;
						this.$vuetify.theme.themes.light.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.light.success = theme.theme.success;
						this.$vuetify.theme.themes.light.warning = theme.theme.warning;
						
						this.$vuetify.theme.themes.dark.accent = theme.theme.accent;
						this.$vuetify.theme.themes.dark.error = theme.theme.error;
						this.$vuetify.theme.themes.dark.info = theme.theme.info;
						this.$vuetify.theme.themes.dark.primary = theme.theme.primary;
						this.$vuetify.theme.themes.dark.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.dark.success = theme.theme.success;
						this.$vuetify.theme.themes.dark.warning = theme.theme.warning;
						break;
					case 6:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light.accent = theme.theme.accent;
						this.$vuetify.theme.themes.light.error = theme.theme.error;
						this.$vuetify.theme.themes.light.info = theme.theme.info;
						this.$vuetify.theme.themes.light.primary = theme.theme.primary;
						this.$vuetify.theme.themes.light.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.light.success = theme.theme.success;
						this.$vuetify.theme.themes.light.warning = theme.theme.warning;
						
						this.$vuetify.theme.themes.dark.accent = theme.theme.accent;
						this.$vuetify.theme.themes.dark.error = theme.theme.error;
						this.$vuetify.theme.themes.dark.info = theme.theme.info;
						this.$vuetify.theme.themes.dark.primary = theme.theme.primary;
						this.$vuetify.theme.themes.dark.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.dark.success = theme.theme.success;
						this.$vuetify.theme.themes.dark.warning = theme.theme.warning;
						break;
					default:
						this.$store.dispatch("changeTheme", theme);
						this.$vuetify.theme.themes.light.accent = theme.theme.accent;
						this.$vuetify.theme.themes.light.error = theme.theme.error;
						this.$vuetify.theme.themes.light.info = theme.theme.info;
						this.$vuetify.theme.themes.light.primary = theme.theme.primary;
						this.$vuetify.theme.themes.light.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.light.success = theme.theme.success;
						this.$vuetify.theme.themes.light.warning = theme.theme.warning;
						
						this.$vuetify.theme.themes.dark.accent = theme.theme.accent;
						this.$vuetify.theme.themes.dark.error = theme.theme.error;
						this.$vuetify.theme.themes.dark.info = theme.theme.info;
						this.$vuetify.theme.themes.dark.primary = theme.theme.primary;
						this.$vuetify.theme.themes.dark.secondary = theme.theme.secondary;
						this.$vuetify.theme.themes.dark.success = theme.theme.success;
						this.$vuetify.theme.themes.dark.warning = theme.theme.warning;
						break;
				}
			}
		}
	};
</script>