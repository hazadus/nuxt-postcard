<script setup lang="ts">

interface IFields {
  backgroundURL: string
  profileURL: string
  title: string
  siteURL: string
}

const previewUrl: Ref<string | null>= ref(null);

async function createCard(fields: IFields) {
  // const apiBase = "http://127.0.0.1:8000";
  const apiBase = "http://92.255.109.128:8008";

  const url = `${apiBase}/v1/card?title=${encodeURIComponent(fields.title)}` 
  + `&url=${encodeURIComponent(fields.siteURL)}`
  + `&profileURL=${encodeURIComponent(fields.profileURL)}`
  + `&backgroundURL=${encodeURIComponent(fields.backgroundURL)}`

  previewUrl.value = url;
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-2 max-w-[600px]">
    <FormKit
      type="form"
      #default="{ value }"
      @submit="createCard"
      submit-label="Создать карточку"
    >
      <FormKit
        <FormKit
        type="url"
        name="backgroundURL"
        label="URL изображения фона"
        help="URL изображения для фона карточки"
        placeholder="..."
        validation="required"
      />
      <FormKit
        <FormKit
        type="url"
        name="profileURL"
        label="URL изображения профиля"
        help="URL изображения профиля для фона карточки"
        placeholder="..."
        validation="required"
      />
      <FormKit
        <FormKit
        type="text"
        name="title"
        label="Заголовок карточки"
        help="Этот текст будет выведен на карточке крупным шрифтом"
        placeholder="..."
        validation="required"
      />
      <FormKit
        <FormKit
        type="url"
        name="siteURL"
        label="Ссылка на сайт"
        help="Эта ссылка будет в левом нижнем углу карточки"
        placeholder="..."
        validation="required"
      />

      <!-- <pre class="font-mono text-sm p-4 bg-slate-100 mb-4">{{ value }}</pre> -->

      <template v-if="previewUrl">
        <img :src="previewUrl" class="mb-2">
        <textarea class="w-full mb-2">{{ previewUrl }}</textarea>
      </template>
    </FormKit>
  </div>
</template>
