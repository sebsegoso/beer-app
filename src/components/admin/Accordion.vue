<template>
<v-container fluid>
    <v-row justify="center">
        <v-expansion-panels accordion dark>
            <v-expansion-panel>
                <v-expansion-panel-header expand-icon="mdi-plus">Agregar producto</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <FormNew />
                </v-expansion-panel-content>
            </v-expansion-panel>
    
        </v-expansion-panels>
    </v-row>
</v-container>
</template>

<script>
import FormNew from '@/components/admin/FormNew'
export default {
    name: 'Accordion',
    components: {
        FormNew
    }

}
</script>
