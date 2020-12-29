# Nuxt+MicroCMS Jamstack のサンプル

## ローカル環境構築

```
# dockerフォルダに移動
cd docker
# build
docker-compose build nuxt
# up
docker-compose up -d nuxt
```

## Micro CMS のアクセスキー

### ローカル環境

```
# コピー
cp env/development.sample.ts env/development.ts
# APIキーを貼り付ける
module.exports = {
  MICRO_CMS_API_KEY: 'your api key',
  MICRO_CMS_BASE_URL: 'your api base url',
}
```
