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
  // const apiBase = "http://92.255.109.128:8008";
  const apiBase = "https://postcard.hazadus.ru";

  const url = `${apiBase}/v1/card?title=${encodeURIComponent(fields.title)}` 
  + `&url=${encodeURIComponent(fields.siteURL)}`
  + `&profileURL=${encodeURIComponent(fields.profileURL)}`
  + `&backgroundURL=${encodeURIComponent(fields.backgroundURL)}`

  previewUrl.value = url;
}
</script>

<template>
  <Title>Postcard – генерация social preview cards</Title>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-2 max-w-[600px]">
    <h1 class="text-4xl mb-6">🌅 Postcard</h1>
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
        placeholder="Вставьте ссылку"
        validation="required"
      />
      <FormKit
        <FormKit
        type="url"
        name="profileURL"
        label="URL изображения профиля"
        help="URL изображения профиля для фона карточки"
        placeholder="Вставьте ссылку"
        validation="required"
      />
      <FormKit
        <FormKit
        type="text"
        name="title"
        label="Заголовок карточки"
        help="Этот текст будет выведен на карточке крупным шрифтом"
        placeholder="Введите текст заголовка"
        validation="required"
      />
      <FormKit
        <FormKit
        type="url"
        name="siteURL"
        label="Ссылка на сайт"
        help="Эта ссылка будет в левом нижнем углу карточки"
        placeholder="Вставьте ссылку"
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
