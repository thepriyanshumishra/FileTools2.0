import { U as sanitize_props, a7 as rest_props, $ as attributes, a2 as clsx, a3 as ensure_array_like, a8 as element, W as slot, a6 as bind_props, a4 as attr, a9 as derived } from "./index2.js";
import { f as fallback, e as escape_html } from "./context.js";
import "clsx";
import { g as getLocale, t as trackMessageCall, s as setLocale } from "./runtime.js";
import { parseBlob, selectCover } from "music-metadata";
import { w as writable } from "./index.js";
import PQueue from "p-queue";
import sanitizeHtml from "sanitize-html";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { D as DEV } from "./false.js";
const browser = DEV;
const PUB_FILETOOLSD_URL = "https://eu.filetoolsd.filetools.app";
const GITHUB_URL_FILETOOLS = "https://github.com/filetools/FileTools";
const GITHUB_URL_FILETOOLSD = "https://github.com/filetools/filetoolsd";
const DISCORD_URL = "https://discord.gg/kqevGxYPak";
const FILETOOLS_NAME = "FileTools Local";
const CONTACT_EMAIL = "hello@filetools.app";
const GB = 1024 * 1024 * 1024;
const en_navbar_upload = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Upload`;
  }
);
const es_navbar_upload = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Subir`;
  }
);
const fr_navbar_upload = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Transférer`;
  }
);
const de_navbar_upload = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Hochladen`;
  }
);
const it_navbar_upload = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Carica`;
  }
);
const hr_navbar_upload = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Prenesi`;
  }
);
const tr_navbar_upload = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Yükle`;
  }
);
const ja_navbar_upload = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `アップロード`;
  }
);
const ko_navbar_upload = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `업로드`;
  }
);
const el_navbar_upload = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μεταφόρτωση`;
  }
);
const id_navbar_upload = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Unggah`;
  }
);
const zh_hans1_navbar_upload = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `上传`;
  }
);
const zh_hant1_navbar_upload = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `上傳`;
  }
);
const navbar_upload = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("navbar_upload", locale2);
  if (locale2 === "en") return en_navbar_upload();
  if (locale2 === "es") return es_navbar_upload();
  if (locale2 === "fr") return fr_navbar_upload();
  if (locale2 === "de") return de_navbar_upload();
  if (locale2 === "it") return it_navbar_upload();
  if (locale2 === "hr") return hr_navbar_upload();
  if (locale2 === "tr") return tr_navbar_upload();
  if (locale2 === "ja") return ja_navbar_upload();
  if (locale2 === "ko") return ko_navbar_upload();
  if (locale2 === "el") return el_navbar_upload();
  if (locale2 === "id") return id_navbar_upload();
  if (locale2 === "zh-Hans") return zh_hans1_navbar_upload();
  return zh_hant1_navbar_upload();
};
const en_navbar_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Convert`;
  }
);
const es_navbar_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Convertir`;
  }
);
const fr_navbar_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Convertir`;
  }
);
const de_navbar_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konvertieren`;
  }
);
const it_navbar_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Converti`;
  }
);
const hr_navbar_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pretvori`;
  }
);
const tr_navbar_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dönüştür`;
  }
);
const ja_navbar_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `変換`;
  }
);
const ko_navbar_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `변환`;
  }
);
const el_navbar_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μετατροπή`;
  }
);
const id_navbar_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konversi`;
  }
);
const zh_hans1_navbar_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `转换`;
  }
);
const zh_hant1_navbar_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `轉換`;
  }
);
const navbar_convert = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("navbar_convert", locale2);
  if (locale2 === "en") return en_navbar_convert();
  if (locale2 === "es") return es_navbar_convert();
  if (locale2 === "fr") return fr_navbar_convert();
  if (locale2 === "de") return de_navbar_convert();
  if (locale2 === "it") return it_navbar_convert();
  if (locale2 === "hr") return hr_navbar_convert();
  if (locale2 === "tr") return tr_navbar_convert();
  if (locale2 === "ja") return ja_navbar_convert();
  if (locale2 === "ko") return ko_navbar_convert();
  if (locale2 === "el") return el_navbar_convert();
  if (locale2 === "id") return id_navbar_convert();
  if (locale2 === "zh-Hans") return zh_hans1_navbar_convert();
  return zh_hant1_navbar_convert();
};
const en_navbar_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Settings`;
  }
);
const es_navbar_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ajustes`;
  }
);
const fr_navbar_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Paramètres`;
  }
);
const de_navbar_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Optionen`;
  }
);
const it_navbar_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Impostazioni`;
  }
);
const hr_navbar_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Postavke`;
  }
);
const tr_navbar_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ayarlar`;
  }
);
const ja_navbar_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `設定`;
  }
);
const ko_navbar_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `설정`;
  }
);
const el_navbar_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ρυθμίσεις`;
  }
);
const id_navbar_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pengaturan`;
  }
);
const zh_hans1_navbar_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `设置`;
  }
);
const zh_hant1_navbar_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `設定`;
  }
);
const navbar_settings = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("navbar_settings", locale2);
  if (locale2 === "en") return en_navbar_settings();
  if (locale2 === "es") return es_navbar_settings();
  if (locale2 === "fr") return fr_navbar_settings();
  if (locale2 === "de") return de_navbar_settings();
  if (locale2 === "it") return it_navbar_settings();
  if (locale2 === "hr") return hr_navbar_settings();
  if (locale2 === "tr") return tr_navbar_settings();
  if (locale2 === "ja") return ja_navbar_settings();
  if (locale2 === "ko") return ko_navbar_settings();
  if (locale2 === "el") return el_navbar_settings();
  if (locale2 === "id") return id_navbar_settings();
  if (locale2 === "zh-Hans") return zh_hans1_navbar_settings();
  return zh_hant1_navbar_settings();
};
const en_navbar_about = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `About`;
  }
);
const es_navbar_about = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Acerca de`;
  }
);
const fr_navbar_about = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `A propos`;
  }
);
const de_navbar_about = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Über`;
  }
);
const it_navbar_about = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Informazioni`;
  }
);
const hr_navbar_about = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `O Stranici`;
  }
);
const tr_navbar_about = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Hakkımızda`;
  }
);
const ja_navbar_about = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `について`;
  }
);
const ko_navbar_about = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `정보`;
  }
);
const el_navbar_about = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Σχετικά`;
  }
);
const id_navbar_about = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tentang`;
  }
);
const zh_hans1_navbar_about = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `关于`;
  }
);
const zh_hant1_navbar_about = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `關於`;
  }
);
const navbar_about = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("navbar_about", locale2);
  if (locale2 === "en") return en_navbar_about();
  if (locale2 === "es") return es_navbar_about();
  if (locale2 === "fr") return fr_navbar_about();
  if (locale2 === "de") return de_navbar_about();
  if (locale2 === "it") return it_navbar_about();
  if (locale2 === "hr") return hr_navbar_about();
  if (locale2 === "tr") return tr_navbar_about();
  if (locale2 === "ja") return ja_navbar_about();
  if (locale2 === "ko") return ko_navbar_about();
  if (locale2 === "el") return el_navbar_about();
  if (locale2 === "id") return id_navbar_about();
  if (locale2 === "zh-Hans") return zh_hans1_navbar_about();
  return zh_hant1_navbar_about();
};
const en_navbar_toggle_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Toggle theme`;
  }
);
const es_navbar_toggle_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cambiar tema`;
  }
);
const fr_navbar_toggle_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Changer de thème`;
  }
);
const de_navbar_toggle_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Farbschema wechseln`;
  }
);
const it_navbar_toggle_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cambia tema`;
  }
);
const hr_navbar_toggle_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Promjeni izgled`;
  }
);
const tr_navbar_toggle_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Temayı değiştir`;
  }
);
const ja_navbar_toggle_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `テーマを切り替える`;
  }
);
const ko_navbar_toggle_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `테마 전환`;
  }
);
const el_navbar_toggle_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Εναλλαγή θέματος`;
  }
);
const id_navbar_toggle_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ganti Tema`;
  }
);
const zh_hans1_navbar_toggle_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `切换主题`;
  }
);
const zh_hant1_navbar_toggle_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `切換主題`;
  }
);
const navbar_toggle_theme = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("navbar_toggle_theme", locale2);
  if (locale2 === "en") return en_navbar_toggle_theme();
  if (locale2 === "es") return es_navbar_toggle_theme();
  if (locale2 === "fr") return fr_navbar_toggle_theme();
  if (locale2 === "de") return de_navbar_toggle_theme();
  if (locale2 === "it") return it_navbar_toggle_theme();
  if (locale2 === "hr") return hr_navbar_toggle_theme();
  if (locale2 === "tr") return tr_navbar_toggle_theme();
  if (locale2 === "ja") return ja_navbar_toggle_theme();
  if (locale2 === "ko") return ko_navbar_toggle_theme();
  if (locale2 === "el") return el_navbar_toggle_theme();
  if (locale2 === "id") return id_navbar_toggle_theme();
  if (locale2 === "zh-Hans") return zh_hans1_navbar_toggle_theme();
  return zh_hant1_navbar_toggle_theme();
};
const en_footer_copyright = (
  /** @type {(inputs: { year: NonNullable<unknown> }) => string} */
  (i) => {
    return `© ${i.year} FileTools.`;
  }
);
const es_footer_copyright = (
  /** @type {(inputs: { year: NonNullable<unknown> }) => string} */
  (i) => {
    return `© ${i.year} FileTools.`;
  }
);
const fr_footer_copyright = (
  /** @type {(inputs: { year: NonNullable<unknown> }) => string} */
  (i) => {
    return `© ${i.year} FileTools.`;
  }
);
const de_footer_copyright = (
  /** @type {(inputs: { year: NonNullable<unknown> }) => string} */
  (i) => {
    return `© ${i.year} FileTools.`;
  }
);
const it_footer_copyright = (
  /** @type {(inputs: { year: NonNullable<unknown> }) => string} */
  (i) => {
    return `© ${i.year} FileTools.`;
  }
);
const hr_footer_copyright = (
  /** @type {(inputs: { year: NonNullable<unknown> }) => string} */
  (i) => {
    return `© ${i.year} FileTools.`;
  }
);
const tr_footer_copyright = (
  /** @type {(inputs: { year: NonNullable<unknown> }) => string} */
  (i) => {
    return `© ${i.year} FileTools.`;
  }
);
const ja_footer_copyright = (
  /** @type {(inputs: { year: NonNullable<unknown> }) => string} */
  (i) => {
    return `© ${i.year} FileTools.`;
  }
);
const ko_footer_copyright = (
  /** @type {(inputs: { year: NonNullable<unknown> }) => string} */
  (i) => {
    return `© ${i.year} FileTools.`;
  }
);
const el_footer_copyright = (
  /** @type {(inputs: { year: NonNullable<unknown> }) => string} */
  (i) => {
    return `© ${i.year} FileTools.`;
  }
);
const id_footer_copyright = (
  /** @type {(inputs: { year: NonNullable<unknown> }) => string} */
  (i) => {
    return `© ${i.year} FileTools.`;
  }
);
const zh_hans1_footer_copyright = (
  /** @type {(inputs: { year: NonNullable<unknown> }) => string} */
  (i) => {
    return `© ${i.year} FileTools.`;
  }
);
const zh_hant1_footer_copyright = (
  /** @type {(inputs: { year: NonNullable<unknown> }) => string} */
  (i) => {
    return `© ${i.year} FileTools.`;
  }
);
const footer_copyright = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("footer_copyright", locale2);
  if (locale2 === "en") return en_footer_copyright(inputs);
  if (locale2 === "es") return es_footer_copyright(inputs);
  if (locale2 === "fr") return fr_footer_copyright(inputs);
  if (locale2 === "de") return de_footer_copyright(inputs);
  if (locale2 === "it") return it_footer_copyright(inputs);
  if (locale2 === "hr") return hr_footer_copyright(inputs);
  if (locale2 === "tr") return tr_footer_copyright(inputs);
  if (locale2 === "ja") return ja_footer_copyright(inputs);
  if (locale2 === "ko") return ko_footer_copyright(inputs);
  if (locale2 === "el") return el_footer_copyright(inputs);
  if (locale2 === "id") return id_footer_copyright(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_footer_copyright(inputs);
  return zh_hant1_footer_copyright(inputs);
};
const en_footer_source_code = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Source code`;
  }
);
const es_footer_source_code = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Código fuente`;
  }
);
const fr_footer_source_code = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Code source`;
  }
);
const de_footer_source_code = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Quellcode`;
  }
);
const it_footer_source_code = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Codice sorgente`;
  }
);
const hr_footer_source_code = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Source kod`;
  }
);
const tr_footer_source_code = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kaynak kodu`;
  }
);
const ja_footer_source_code = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ソースコード`;
  }
);
const ko_footer_source_code = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `소스 코드`;
  }
);
const el_footer_source_code = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Κώδικας`;
  }
);
const id_footer_source_code = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kode sumber`;
  }
);
const zh_hans1_footer_source_code = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `源代码`;
  }
);
const zh_hant1_footer_source_code = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `原始碼`;
  }
);
const footer_source_code = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("footer_source_code", locale2);
  if (locale2 === "en") return en_footer_source_code();
  if (locale2 === "es") return es_footer_source_code();
  if (locale2 === "fr") return fr_footer_source_code();
  if (locale2 === "de") return de_footer_source_code();
  if (locale2 === "it") return it_footer_source_code();
  if (locale2 === "hr") return hr_footer_source_code();
  if (locale2 === "tr") return tr_footer_source_code();
  if (locale2 === "ja") return ja_footer_source_code();
  if (locale2 === "ko") return ko_footer_source_code();
  if (locale2 === "el") return el_footer_source_code();
  if (locale2 === "id") return id_footer_source_code();
  if (locale2 === "zh-Hans") return zh_hans1_footer_source_code();
  return zh_hant1_footer_source_code();
};
const en_footer_discord_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord server`;
  }
);
const es_footer_discord_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Servidor de Discord`;
  }
);
const fr_footer_discord_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Serveur Discord`;
  }
);
const de_footer_discord_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord-Server`;
  }
);
const it_footer_discord_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Server Discord`;
  }
);
const hr_footer_discord_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord server`;
  }
);
const tr_footer_discord_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord sunucusu`;
  }
);
const ja_footer_discord_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discordサーバー`;
  }
);
const ko_footer_discord_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord 서버`;
  }
);
const el_footer_discord_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const id_footer_discord_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Peladen Discord`;
  }
);
const zh_hans1_footer_discord_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord 服务器`;
  }
);
const zh_hant1_footer_discord_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord 伺服器`;
  }
);
const footer_discord_server = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("footer_discord_server", locale2);
  if (locale2 === "en") return en_footer_discord_server();
  if (locale2 === "es") return es_footer_discord_server();
  if (locale2 === "fr") return fr_footer_discord_server();
  if (locale2 === "de") return de_footer_discord_server();
  if (locale2 === "it") return it_footer_discord_server();
  if (locale2 === "hr") return hr_footer_discord_server();
  if (locale2 === "tr") return tr_footer_discord_server();
  if (locale2 === "ja") return ja_footer_discord_server();
  if (locale2 === "ko") return ko_footer_discord_server();
  if (locale2 === "el") return el_footer_discord_server();
  if (locale2 === "id") return id_footer_discord_server();
  if (locale2 === "zh-Hans") return zh_hans1_footer_discord_server();
  return zh_hant1_footer_discord_server();
};
const en_footer_privacy_policy = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Privacy policy`;
  }
);
const ko_footer_privacy_policy = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `개인정보 처리방침`;
  }
);
const zh_hans1_footer_privacy_policy = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `隐私政策`;
  }
);
const zh_hant1_footer_privacy_policy = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `隱私權政策`;
  }
);
const es_footer_privacy_policy = en_footer_privacy_policy;
const fr_footer_privacy_policy = en_footer_privacy_policy;
const de_footer_privacy_policy = en_footer_privacy_policy;
const it_footer_privacy_policy = en_footer_privacy_policy;
const hr_footer_privacy_policy = en_footer_privacy_policy;
const tr_footer_privacy_policy = en_footer_privacy_policy;
const ja_footer_privacy_policy = en_footer_privacy_policy;
const el_footer_privacy_policy = en_footer_privacy_policy;
const id_footer_privacy_policy = en_footer_privacy_policy;
const footer_privacy_policy = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("footer_privacy_policy", locale2);
  if (locale2 === "en") return en_footer_privacy_policy();
  if (locale2 === "es") return es_footer_privacy_policy();
  if (locale2 === "fr") return fr_footer_privacy_policy();
  if (locale2 === "de") return de_footer_privacy_policy();
  if (locale2 === "it") return it_footer_privacy_policy();
  if (locale2 === "hr") return hr_footer_privacy_policy();
  if (locale2 === "tr") return tr_footer_privacy_policy();
  if (locale2 === "ja") return ja_footer_privacy_policy();
  if (locale2 === "ko") return ko_footer_privacy_policy();
  if (locale2 === "el") return el_footer_privacy_policy();
  if (locale2 === "id") return id_footer_privacy_policy();
  if (locale2 === "zh-Hans") return zh_hans1_footer_privacy_policy();
  return zh_hant1_footer_privacy_policy();
};
const en_upload_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `The file converter you'll love.`;
  }
);
const es_upload_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `El convertidor de archivos que te encantará.`;
  }
);
const fr_upload_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Le convertisseur de fichiers que vous allez adorer.`;
  }
);
const de_upload_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Der Dateikonverter, den du lieben wirst.`;
  }
);
const it_upload_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Il convertitore di file che amerai.`;
  }
);
const hr_upload_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pretvarač datoteka koji ćeš obožavati.`;
  }
);
const tr_upload_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sevdiğiniz dosya dönüştürücü.`;
  }
);
const ja_upload_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `きっと気に入るファイル変換ツール。`;
  }
);
const ko_upload_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이 파일 변환기,
 마음에 드실 거예요.`;
  }
);
const el_upload_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ο μετατροπέας αρχείων που θα λατρέψετε.`;
  }
);
const id_upload_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konverter berkas andalanmu.`;
  }
);
const zh_hans1_upload_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `你一定会喜欢的文件转换工具。`;
  }
);
const zh_hant1_upload_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `你一定會喜歡的檔案轉換工具。`;
  }
);
const upload_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_title", locale2);
  if (locale2 === "en") return en_upload_title();
  if (locale2 === "es") return es_upload_title();
  if (locale2 === "fr") return fr_upload_title();
  if (locale2 === "de") return de_upload_title();
  if (locale2 === "it") return it_upload_title();
  if (locale2 === "hr") return hr_upload_title();
  if (locale2 === "tr") return tr_upload_title();
  if (locale2 === "ja") return ja_upload_title();
  if (locale2 === "ko") return ko_upload_title();
  if (locale2 === "el") return el_upload_title();
  if (locale2 === "id") return id_upload_title();
  if (locale2 === "zh-Hans") return zh_hans1_upload_title();
  return zh_hant1_upload_title();
};
const en_upload_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `All image, audio, and document processing is done on your device. Videos are converted on our lightning-fast servers. No file size limit, no ads, and completely open source.`;
  }
);
const es_upload_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Todo el procesamiento de imágenes, audio y documentos es hecho en tu dispositivo. Los vídeos son convertidos en nuestros servidores ultra rápidos. Sin límite de tamaño de archivo, sin anuncios y de código abierto.`;
  }
);
const fr_upload_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tout le traitement des images, des fichiers audio et des documents s'effectue sur votre appareil. Les vidéos sont converties sur nos serveurs ultra-rapides. Aucune limite de taille de fichier, aucune publicité et entièrement open source.`;
  }
);
const de_upload_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Die Verarbeitung aller Bild-, Audio- und Dokumentdateien findet auf deinem Gerät statt. Videos werden auf unseren blitzschnellen Servern konvertiert. Kein Dateigrößenlimit, keine Werbung und vollständig Open-Source.`;
  }
);
const it_upload_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tutta l'elaborazione di immagini, audio e documenti avviene sul tuo dispositivo. I video sono convertiti sui nostri server velocissimi. Nessun limite di dimensione, nessuna pubblicità e completamente open source.`;
  }
);
const hr_upload_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cijelokupna obrada slika, zvuka i dokumenata se odvija na vašem uređaju. Videozapisi se pretvaraju na našim izrazito brzim serverima. Nema nikakvih ograničenja veličine niti reklama i potpuno je open source.`;
  }
);
const tr_upload_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tüm görüntü, ses ve belge işlemleri cihazınızda gerçekleştirilir. Videolar, ışık hızındaki sunucularımızda dönüştürülür. Dosya boyutu sınırı ve reklam yoktur. Tamamen açık kaynaklıdır.`;
  }
);
const ja_upload_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `すべての画像・音声・ドキュメント処理はデバイス上で行われます。動画は超高速サーバーで変換されます。ファイルサイズ制限なし、広告なし、完全オープンソース。`;
  }
);
const ko_upload_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `모든 이미지, 오디오, 문서 처리는 사용자의 기기에서 이루어집니다. 동영상은 매우 빠른 FileTools 전용 서버에서 변환됩니다. 광고나 파일 크기 제한이 전혀 없는 완전한 오픈 소스입니다.`;
  }
);
const el_upload_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Όλη η επεξεργασία εικόνων, ήχου και εγγράφων γίνεται στη συσκευή σας. Τα βίντεο μετατρέπονται στους κεραυνοβόλα γρήγορους διακομιστές μας. Χωρίς όριο μεγέθους αρχείου, χωρίς διαφημίσεις και εντελώς ανοιχτού κώδικα.`;
  }
);
const id_upload_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Semua gambar, audio, dan pemrosesan dokumen dilakukan pada perangkatmu. Video dikonversi pada peladen kilat kami. Tidak ada batas ukuran berkas, tidak ada iklan, dan benar-benar sumber terbuka.`;
  }
);
const zh_hans1_upload_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `所有图片、音频和文档处理都在你的设备上进行。视频通过超快速服务器转换。无文件大小限制，无广告，完全开源。`;
  }
);
const zh_hant1_upload_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `所有圖片、音訊和文件處理都在你的裝置上進行。影片透過超快速伺服器轉換。無檔案大小限制，無廣告，完全開源。`;
  }
);
const upload_subtitle = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_subtitle", locale2);
  if (locale2 === "en") return en_upload_subtitle();
  if (locale2 === "es") return es_upload_subtitle();
  if (locale2 === "fr") return fr_upload_subtitle();
  if (locale2 === "de") return de_upload_subtitle();
  if (locale2 === "it") return it_upload_subtitle();
  if (locale2 === "hr") return hr_upload_subtitle();
  if (locale2 === "tr") return tr_upload_subtitle();
  if (locale2 === "ja") return ja_upload_subtitle();
  if (locale2 === "ko") return ko_upload_subtitle();
  if (locale2 === "el") return el_upload_subtitle();
  if (locale2 === "id") return id_upload_subtitle();
  if (locale2 === "zh-Hans") return zh_hans1_upload_subtitle();
  return zh_hant1_upload_subtitle();
};
const en_upload_uploader_text = (
  /** @type {(inputs: { action: NonNullable<unknown> }) => string} */
  (i) => {
    return `Drop or click to ${i.action}`;
  }
);
const es_upload_uploader_text = (
  /** @type {(inputs: { action: NonNullable<unknown> }) => string} */
  (i) => {
    return `Arrastra o haz clic para ${i.action}`;
  }
);
const fr_upload_uploader_text = (
  /** @type {(inputs: { action: NonNullable<unknown> }) => string} */
  (i) => {
    return `Déposer ou cliquer pour ${i.action}`;
  }
);
const de_upload_uploader_text = (
  /** @type {(inputs: { action: NonNullable<unknown> }) => string} */
  (i) => {
    return `Dateien hier ablegen oder klicken zum ${i.action}`;
  }
);
const it_upload_uploader_text = (
  /** @type {(inputs: { action: NonNullable<unknown> }) => string} */
  (i) => {
    return `Trascina o clicca per ${i.action}`;
  }
);
const hr_upload_uploader_text = (
  /** @type {(inputs: { action: NonNullable<unknown> }) => string} */
  (i) => {
    return `Ubaci ili klikni da ${i.action}`;
  }
);
const tr_upload_uploader_text = (
  /** @type {(inputs: { action: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.action} için sürükleyip bırakın veya dosya seçin`;
  }
);
const ja_upload_uploader_text = (
  /** @type {(inputs: { action: NonNullable<unknown> }) => string} */
  (i) => {
    return `ドロップまたはクリックして${i.action}`;
  }
);
const ko_upload_uploader_text = (
  /** @type {(inputs: { action: NonNullable<unknown> }) => string} */
  (i) => {
    return `드래그하거나 클릭해서 ${i.action}`;
  }
);
const el_upload_uploader_text = (
  /** @type {(inputs: { action: NonNullable<unknown> }) => string} */
  (i) => {
    return `Σύρετε ή κάντε κλικ για ${i.action}`;
  }
);
const id_upload_uploader_text = (
  /** @type {(inputs: { action: NonNullable<unknown> }) => string} */
  (i) => {
    return `Jatuhkan dan klik untuk ${i.action}`;
  }
);
const zh_hans1_upload_uploader_text = (
  /** @type {(inputs: { action: NonNullable<unknown> }) => string} */
  (i) => {
    return `拖放或点击以${i.action}`;
  }
);
const zh_hant1_upload_uploader_text = (
  /** @type {(inputs: { action: NonNullable<unknown> }) => string} */
  (i) => {
    return `拖放或點擊以${i.action}`;
  }
);
const upload_uploader_text = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_uploader_text", locale2);
  if (locale2 === "en") return en_upload_uploader_text(inputs);
  if (locale2 === "es") return es_upload_uploader_text(inputs);
  if (locale2 === "fr") return fr_upload_uploader_text(inputs);
  if (locale2 === "de") return de_upload_uploader_text(inputs);
  if (locale2 === "it") return it_upload_uploader_text(inputs);
  if (locale2 === "hr") return hr_upload_uploader_text(inputs);
  if (locale2 === "tr") return tr_upload_uploader_text(inputs);
  if (locale2 === "ja") return ja_upload_uploader_text(inputs);
  if (locale2 === "ko") return ko_upload_uploader_text(inputs);
  if (locale2 === "el") return el_upload_uploader_text(inputs);
  if (locale2 === "id") return id_upload_uploader_text(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_upload_uploader_text(inputs);
  return zh_hant1_upload_uploader_text(inputs);
};
const en_upload_uploader_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `convert`;
  }
);
const es_upload_uploader_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `convertir`;
  }
);
const fr_upload_uploader_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `convertir`;
  }
);
const de_upload_uploader_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konvertieren`;
  }
);
const it_upload_uploader_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `convertire`;
  }
);
const hr_upload_uploader_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `pretvori`;
  }
);
const tr_upload_uploader_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `dönüştürmek`;
  }
);
const ja_upload_uploader_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `変換`;
  }
);
const ko_upload_uploader_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `변환하기`;
  }
);
const el_upload_uploader_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `μετατροπή`;
  }
);
const id_upload_uploader_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konversi`;
  }
);
const zh_hans1_upload_uploader_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `转换`;
  }
);
const zh_hant1_upload_uploader_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `轉換`;
  }
);
const upload_uploader_convert = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_uploader_convert", locale2);
  if (locale2 === "en") return en_upload_uploader_convert();
  if (locale2 === "es") return es_upload_uploader_convert();
  if (locale2 === "fr") return fr_upload_uploader_convert();
  if (locale2 === "de") return de_upload_uploader_convert();
  if (locale2 === "it") return it_upload_uploader_convert();
  if (locale2 === "hr") return hr_upload_uploader_convert();
  if (locale2 === "tr") return tr_upload_uploader_convert();
  if (locale2 === "ja") return ja_upload_uploader_convert();
  if (locale2 === "ko") return ko_upload_uploader_convert();
  if (locale2 === "el") return el_upload_uploader_convert();
  if (locale2 === "id") return id_upload_uploader_convert();
  if (locale2 === "zh-Hans") return zh_hans1_upload_uploader_convert();
  return zh_hant1_upload_uploader_convert();
};
const en_upload_cards_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools supports...`;
  }
);
const es_upload_cards_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools soporta...`;
  }
);
const fr_upload_cards_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools supports...`;
  }
);
const de_upload_cards_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools unterstützt...`;
  }
);
const it_upload_cards_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools supporta...`;
  }
);
const hr_upload_cards_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools podržava...`;
  }
);
const tr_upload_cards_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools'in desteklediği formatlar...`;
  }
);
const ja_upload_cards_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileToolsがサポートしている形式`;
  }
);
const ko_upload_cards_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools가 지원하는 포맷들`;
  }
);
const el_upload_cards_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Το FileTools υποστηρίζει...`;
  }
);
const id_upload_cards_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dapat Ditangani FileTools ...`;
  }
);
const zh_hans1_upload_cards_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools 支持...`;
  }
);
const zh_hant1_upload_cards_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools 支援...`;
  }
);
const upload_cards_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_title", locale2);
  if (locale2 === "en") return en_upload_cards_title();
  if (locale2 === "es") return es_upload_cards_title();
  if (locale2 === "fr") return fr_upload_cards_title();
  if (locale2 === "de") return de_upload_cards_title();
  if (locale2 === "it") return it_upload_cards_title();
  if (locale2 === "hr") return hr_upload_cards_title();
  if (locale2 === "tr") return tr_upload_cards_title();
  if (locale2 === "ja") return ja_upload_cards_title();
  if (locale2 === "ko") return ko_upload_cards_title();
  if (locale2 === "el") return el_upload_cards_title();
  if (locale2 === "id") return id_upload_cards_title();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_title();
  return zh_hant1_upload_cards_title();
};
const en_upload_cards_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Images`;
  }
);
const es_upload_cards_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Imágenes`;
  }
);
const fr_upload_cards_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Images`;
  }
);
const de_upload_cards_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bilder`;
  }
);
const it_upload_cards_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Immagini`;
  }
);
const hr_upload_cards_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Slike`;
  }
);
const tr_upload_cards_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Görsel`;
  }
);
const ja_upload_cards_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `画像`;
  }
);
const ko_upload_cards_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이미지`;
  }
);
const el_upload_cards_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Εικόνες`;
  }
);
const id_upload_cards_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Gambar`;
  }
);
const zh_hans1_upload_cards_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `图片`;
  }
);
const zh_hant1_upload_cards_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `圖片`;
  }
);
const upload_cards_images = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_images", locale2);
  if (locale2 === "en") return en_upload_cards_images();
  if (locale2 === "es") return es_upload_cards_images();
  if (locale2 === "fr") return fr_upload_cards_images();
  if (locale2 === "de") return de_upload_cards_images();
  if (locale2 === "it") return it_upload_cards_images();
  if (locale2 === "hr") return hr_upload_cards_images();
  if (locale2 === "tr") return tr_upload_cards_images();
  if (locale2 === "ja") return ja_upload_cards_images();
  if (locale2 === "ko") return ko_upload_cards_images();
  if (locale2 === "el") return el_upload_cards_images();
  if (locale2 === "id") return id_upload_cards_images();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_images();
  return zh_hant1_upload_cards_images();
};
const en_upload_cards_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const es_upload_cards_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const fr_upload_cards_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const de_upload_cards_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const it_upload_cards_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const hr_upload_cards_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const tr_upload_cards_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ses`;
  }
);
const ja_upload_cards_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音声`;
  }
);
const ko_upload_cards_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `오디오`;
  }
);
const el_upload_cards_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ήχο`;
  }
);
const id_upload_cards_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const zh_hans1_upload_cards_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音频`;
  }
);
const zh_hant1_upload_cards_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音訊`;
  }
);
const upload_cards_audio = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_audio", locale2);
  if (locale2 === "en") return en_upload_cards_audio();
  if (locale2 === "es") return es_upload_cards_audio();
  if (locale2 === "fr") return fr_upload_cards_audio();
  if (locale2 === "de") return de_upload_cards_audio();
  if (locale2 === "it") return it_upload_cards_audio();
  if (locale2 === "hr") return hr_upload_cards_audio();
  if (locale2 === "tr") return tr_upload_cards_audio();
  if (locale2 === "ja") return ja_upload_cards_audio();
  if (locale2 === "ko") return ko_upload_cards_audio();
  if (locale2 === "el") return el_upload_cards_audio();
  if (locale2 === "id") return id_upload_cards_audio();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_audio();
  return zh_hant1_upload_cards_audio();
};
const en_upload_cards_documents = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Documents`;
  }
);
const es_upload_cards_documents = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Documentos`;
  }
);
const fr_upload_cards_documents = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Documents`;
  }
);
const de_upload_cards_documents = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dokumente`;
  }
);
const it_upload_cards_documents = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Documenti`;
  }
);
const hr_upload_cards_documents = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dokumente`;
  }
);
const tr_upload_cards_documents = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Belge`;
  }
);
const ja_upload_cards_documents = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ドキュメント`;
  }
);
const ko_upload_cards_documents = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `문서`;
  }
);
const el_upload_cards_documents = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Έγγραφα`;
  }
);
const id_upload_cards_documents = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dokumen`;
  }
);
const zh_hans1_upload_cards_documents = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `文档`;
  }
);
const zh_hant1_upload_cards_documents = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `文件`;
  }
);
const upload_cards_documents = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_documents", locale2);
  if (locale2 === "en") return en_upload_cards_documents();
  if (locale2 === "es") return es_upload_cards_documents();
  if (locale2 === "fr") return fr_upload_cards_documents();
  if (locale2 === "de") return de_upload_cards_documents();
  if (locale2 === "it") return it_upload_cards_documents();
  if (locale2 === "hr") return hr_upload_cards_documents();
  if (locale2 === "tr") return tr_upload_cards_documents();
  if (locale2 === "ja") return ja_upload_cards_documents();
  if (locale2 === "ko") return ko_upload_cards_documents();
  if (locale2 === "el") return el_upload_cards_documents();
  if (locale2 === "id") return id_upload_cards_documents();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_documents();
  return zh_hant1_upload_cards_documents();
};
const en_upload_cards_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const es_upload_cards_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Vídeo`;
  }
);
const fr_upload_cards_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const de_upload_cards_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const it_upload_cards_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const hr_upload_cards_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const tr_upload_cards_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const ja_upload_cards_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `動画`;
  }
);
const ko_upload_cards_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `동영상`;
  }
);
const el_upload_cards_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Βίντεο`;
  }
);
const id_upload_cards_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const zh_hans1_upload_cards_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `视频`;
  }
);
const zh_hant1_upload_cards_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `影片`;
  }
);
const upload_cards_video = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_video", locale2);
  if (locale2 === "en") return en_upload_cards_video();
  if (locale2 === "es") return es_upload_cards_video();
  if (locale2 === "fr") return fr_upload_cards_video();
  if (locale2 === "de") return de_upload_cards_video();
  if (locale2 === "it") return it_upload_cards_video();
  if (locale2 === "hr") return hr_upload_cards_video();
  if (locale2 === "tr") return tr_upload_cards_video();
  if (locale2 === "ja") return ja_upload_cards_video();
  if (locale2 === "ko") return ko_upload_cards_video();
  if (locale2 === "el") return el_upload_cards_video();
  if (locale2 === "id") return id_upload_cards_video();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_video();
  return zh_hant1_upload_cards_video();
};
const en_upload_cards_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Server supported`;
  }
);
const es_upload_cards_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Soportado por el servidor`;
  }
);
const fr_upload_cards_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Serveur pris en charge`;
  }
);
const de_upload_cards_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Server-unterstützt`;
  }
);
const it_upload_cards_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Supportato da server`;
  }
);
const hr_upload_cards_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Server podržan`;
  }
);
const tr_upload_cards_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sunucuda gerçekleşir`;
  }
);
const ja_upload_cards_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `サーバー対応`;
  }
);
const ko_upload_cards_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `서버 지원`;
  }
);
const el_upload_cards_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Υποστηρίζεται από σέρβερ`;
  }
);
const id_upload_cards_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Proses di Server`;
  }
);
const zh_hans1_upload_cards_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `服务器支持`;
  }
);
const zh_hant1_upload_cards_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `伺服器支援`;
  }
);
const upload_cards_video_server_processing = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_video_server_processing", locale2);
  if (locale2 === "en") return en_upload_cards_video_server_processing();
  if (locale2 === "es") return es_upload_cards_video_server_processing();
  if (locale2 === "fr") return fr_upload_cards_video_server_processing();
  if (locale2 === "de") return de_upload_cards_video_server_processing();
  if (locale2 === "it") return it_upload_cards_video_server_processing();
  if (locale2 === "hr") return hr_upload_cards_video_server_processing();
  if (locale2 === "tr") return tr_upload_cards_video_server_processing();
  if (locale2 === "ja") return ja_upload_cards_video_server_processing();
  if (locale2 === "ko") return ko_upload_cards_video_server_processing();
  if (locale2 === "el") return el_upload_cards_video_server_processing();
  if (locale2 === "id") return id_upload_cards_video_server_processing();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_video_server_processing();
  return zh_hant1_upload_cards_video_server_processing();
};
const en_upload_cards_local_supported = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Local supported`;
  }
);
const es_upload_cards_local_supported = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Soportado localmente`;
  }
);
const fr_upload_cards_local_supported = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Prise en charge locale`;
  }
);
const de_upload_cards_local_supported = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Lokal unterstützt`;
  }
);
const it_upload_cards_local_supported = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Supportato in locale`;
  }
);
const hr_upload_cards_local_supported = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Lokalno podržano`;
  }
);
const tr_upload_cards_local_supported = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cihazınızda gerçekleşir`;
  }
);
const ja_upload_cards_local_supported = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ローカル対応`;
  }
);
const ko_upload_cards_local_supported = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `로컬 지원`;
  }
);
const el_upload_cards_local_supported = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Τοπική υποστήριξη`;
  }
);
const id_upload_cards_local_supported = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Proses di Lokal`;
  }
);
const zh_hans1_upload_cards_local_supported = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `本地支持`;
  }
);
const zh_hant1_upload_cards_local_supported = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `本機支援`;
  }
);
const upload_cards_local_supported = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_local_supported", locale2);
  if (locale2 === "en") return en_upload_cards_local_supported();
  if (locale2 === "es") return es_upload_cards_local_supported();
  if (locale2 === "fr") return fr_upload_cards_local_supported();
  if (locale2 === "de") return de_upload_cards_local_supported();
  if (locale2 === "it") return it_upload_cards_local_supported();
  if (locale2 === "hr") return hr_upload_cards_local_supported();
  if (locale2 === "tr") return tr_upload_cards_local_supported();
  if (locale2 === "ja") return ja_upload_cards_local_supported();
  if (locale2 === "ko") return ko_upload_cards_local_supported();
  if (locale2 === "el") return el_upload_cards_local_supported();
  if (locale2 === "id") return id_upload_cards_local_supported();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_local_supported();
  return zh_hant1_upload_cards_local_supported();
};
const en_upload_cards_status_text = (
  /** @type {(inputs: { status: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>Status:</b> ${i.status}`;
  }
);
const es_upload_cards_status_text = (
  /** @type {(inputs: { status: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>Estado:</b> ${i.status}`;
  }
);
const fr_upload_cards_status_text = (
  /** @type {(inputs: { status: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>Status:</b> ${i.status}`;
  }
);
const de_upload_cards_status_text = (
  /** @type {(inputs: { status: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>Status:</b> ${i.status}`;
  }
);
const it_upload_cards_status_text = (
  /** @type {(inputs: { status: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>Stato:</b> ${i.status}`;
  }
);
const hr_upload_cards_status_text = (
  /** @type {(inputs: { status: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>Status:</b> ${i.status}`;
  }
);
const tr_upload_cards_status_text = (
  /** @type {(inputs: { status: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>Durum:</b> ${i.status}`;
  }
);
const ja_upload_cards_status_text = (
  /** @type {(inputs: { status: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>ステータス:</b> ${i.status}`;
  }
);
const ko_upload_cards_status_text = (
  /** @type {(inputs: { status: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>상태:</b> ${i.status}`;
  }
);
const el_upload_cards_status_text = (
  /** @type {(inputs: { status: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>Κατάσταση:</b> ${i.status}`;
  }
);
const id_upload_cards_status_text = (
  /** @type {(inputs: { status: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>Status:</b> ${i.status}`;
  }
);
const zh_hans1_upload_cards_status_text = (
  /** @type {(inputs: { status: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>状态：</b>${i.status}`;
  }
);
const zh_hant1_upload_cards_status_text = (
  /** @type {(inputs: { status: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>狀態：</b>${i.status}`;
  }
);
const upload_cards_status_text = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_status_text", locale2);
  if (locale2 === "en") return en_upload_cards_status_text(inputs);
  if (locale2 === "es") return es_upload_cards_status_text(inputs);
  if (locale2 === "fr") return fr_upload_cards_status_text(inputs);
  if (locale2 === "de") return de_upload_cards_status_text(inputs);
  if (locale2 === "it") return it_upload_cards_status_text(inputs);
  if (locale2 === "hr") return hr_upload_cards_status_text(inputs);
  if (locale2 === "tr") return tr_upload_cards_status_text(inputs);
  if (locale2 === "ja") return ja_upload_cards_status_text(inputs);
  if (locale2 === "ko") return ko_upload_cards_status_text(inputs);
  if (locale2 === "el") return el_upload_cards_status_text(inputs);
  if (locale2 === "id") return id_upload_cards_status_text(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_status_text(inputs);
  return zh_hant1_upload_cards_status_text(inputs);
};
const en_upload_cards_status_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ready`;
  }
);
const es_upload_cards_status_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `listo`;
  }
);
const fr_upload_cards_status_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Prêt`;
  }
);
const de_upload_cards_status_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `bereit`;
  }
);
const it_upload_cards_status_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `pronto`;
  }
);
const hr_upload_cards_status_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `spremno`;
  }
);
const tr_upload_cards_status_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `hazır`;
  }
);
const ja_upload_cards_status_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `準備完了`;
  }
);
const ko_upload_cards_status_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `준비됨`;
  }
);
const el_upload_cards_status_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `έτοιμο`;
  }
);
const id_upload_cards_status_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `siap`;
  }
);
const zh_hans1_upload_cards_status_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `就绪`;
  }
);
const zh_hant1_upload_cards_status_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `就緒`;
  }
);
const upload_cards_status_ready = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_status_ready", locale2);
  if (locale2 === "en") return en_upload_cards_status_ready();
  if (locale2 === "es") return es_upload_cards_status_ready();
  if (locale2 === "fr") return fr_upload_cards_status_ready();
  if (locale2 === "de") return de_upload_cards_status_ready();
  if (locale2 === "it") return it_upload_cards_status_ready();
  if (locale2 === "hr") return hr_upload_cards_status_ready();
  if (locale2 === "tr") return tr_upload_cards_status_ready();
  if (locale2 === "ja") return ja_upload_cards_status_ready();
  if (locale2 === "ko") return ko_upload_cards_status_ready();
  if (locale2 === "el") return el_upload_cards_status_ready();
  if (locale2 === "id") return id_upload_cards_status_ready();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_status_ready();
  return zh_hant1_upload_cards_status_ready();
};
const en_upload_cards_status_not_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `not ready`;
  }
);
const es_upload_cards_status_not_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `no listo`;
  }
);
const fr_upload_cards_status_not_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pas encore prêt`;
  }
);
const de_upload_cards_status_not_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `nicht bereit`;
  }
);
const it_upload_cards_status_not_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `non pronto`;
  }
);
const hr_upload_cards_status_not_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `nespremno`;
  }
);
const tr_upload_cards_status_not_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `hazır değil`;
  }
);
const ja_upload_cards_status_not_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未準備`;
  }
);
const ko_upload_cards_status_not_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `준비되지 않음`;
  }
);
const el_upload_cards_status_not_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `μη έτοιμο`;
  }
);
const id_upload_cards_status_not_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `belum siap`;
  }
);
const zh_hans1_upload_cards_status_not_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未就绪`;
  }
);
const zh_hant1_upload_cards_status_not_ready = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未就緒`;
  }
);
const upload_cards_status_not_ready = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_status_not_ready", locale2);
  if (locale2 === "en") return en_upload_cards_status_not_ready();
  if (locale2 === "es") return es_upload_cards_status_not_ready();
  if (locale2 === "fr") return fr_upload_cards_status_not_ready();
  if (locale2 === "de") return de_upload_cards_status_not_ready();
  if (locale2 === "it") return it_upload_cards_status_not_ready();
  if (locale2 === "hr") return hr_upload_cards_status_not_ready();
  if (locale2 === "tr") return tr_upload_cards_status_not_ready();
  if (locale2 === "ja") return ja_upload_cards_status_not_ready();
  if (locale2 === "ko") return ko_upload_cards_status_not_ready();
  if (locale2 === "el") return el_upload_cards_status_not_ready();
  if (locale2 === "id") return id_upload_cards_status_not_ready();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_status_not_ready();
  return zh_hant1_upload_cards_status_not_ready();
};
const en_upload_cards_status_not_initialized = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `not initialized`;
  }
);
const es_upload_cards_status_not_initialized = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `no inicializado`;
  }
);
const fr_upload_cards_status_not_initialized = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `non initialisé`;
  }
);
const de_upload_cards_status_not_initialized = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `nicht initialisiert`;
  }
);
const it_upload_cards_status_not_initialized = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `non inizializzato`;
  }
);
const hr_upload_cards_status_not_initialized = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `nije inicijalizirano`;
  }
);
const tr_upload_cards_status_not_initialized = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `başlatılmamış`;
  }
);
const ja_upload_cards_status_not_initialized = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未初期化`;
  }
);
const ko_upload_cards_status_not_initialized = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `준비 안됨`;
  }
);
const el_upload_cards_status_not_initialized = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `μη αρχικοποιημένο`;
  }
);
const id_upload_cards_status_not_initialized = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `tidak terinisialisasi`;
  }
);
const zh_hans1_upload_cards_status_not_initialized = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未初始化`;
  }
);
const zh_hant1_upload_cards_status_not_initialized = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未初始化`;
  }
);
const upload_cards_status_not_initialized = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_status_not_initialized", locale2);
  if (locale2 === "en") return en_upload_cards_status_not_initialized();
  if (locale2 === "es") return es_upload_cards_status_not_initialized();
  if (locale2 === "fr") return fr_upload_cards_status_not_initialized();
  if (locale2 === "de") return de_upload_cards_status_not_initialized();
  if (locale2 === "it") return it_upload_cards_status_not_initialized();
  if (locale2 === "hr") return hr_upload_cards_status_not_initialized();
  if (locale2 === "tr") return tr_upload_cards_status_not_initialized();
  if (locale2 === "ja") return ja_upload_cards_status_not_initialized();
  if (locale2 === "ko") return ko_upload_cards_status_not_initialized();
  if (locale2 === "el") return el_upload_cards_status_not_initialized();
  if (locale2 === "id") return id_upload_cards_status_not_initialized();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_status_not_initialized();
  return zh_hant1_upload_cards_status_not_initialized();
};
const en_upload_cards_status_downloading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `downloading...`;
  }
);
const es_upload_cards_status_downloading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `descargando...`;
  }
);
const fr_upload_cards_status_downloading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `en cours de téléchargement...`;
  }
);
const de_upload_cards_status_downloading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `wird heruntergeladen...`;
  }
);
const it_upload_cards_status_downloading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `download in corso...`;
  }
);
const hr_upload_cards_status_downloading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `preuzimanje...`;
  }
);
const tr_upload_cards_status_downloading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `indiriliyor...`;
  }
);
const ja_upload_cards_status_downloading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ダウンロード中...`;
  }
);
const ko_upload_cards_status_downloading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `다운로드중...`;
  }
);
const el_upload_cards_status_downloading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `λήψη...`;
  }
);
const id_upload_cards_status_downloading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `mengunduh...`;
  }
);
const zh_hans1_upload_cards_status_downloading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `下载中...`;
  }
);
const zh_hant1_upload_cards_status_downloading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `下載中...`;
  }
);
const upload_cards_status_downloading = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_status_downloading", locale2);
  if (locale2 === "en") return en_upload_cards_status_downloading();
  if (locale2 === "es") return es_upload_cards_status_downloading();
  if (locale2 === "fr") return fr_upload_cards_status_downloading();
  if (locale2 === "de") return de_upload_cards_status_downloading();
  if (locale2 === "it") return it_upload_cards_status_downloading();
  if (locale2 === "hr") return hr_upload_cards_status_downloading();
  if (locale2 === "tr") return tr_upload_cards_status_downloading();
  if (locale2 === "ja") return ja_upload_cards_status_downloading();
  if (locale2 === "ko") return ko_upload_cards_status_downloading();
  if (locale2 === "el") return el_upload_cards_status_downloading();
  if (locale2 === "id") return id_upload_cards_status_downloading();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_status_downloading();
  return zh_hant1_upload_cards_status_downloading();
};
const en_upload_cards_status_initializing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `initializing...`;
  }
);
const es_upload_cards_status_initializing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `inicializando...`;
  }
);
const fr_upload_cards_status_initializing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `initialisation...`;
  }
);
const de_upload_cards_status_initializing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `wird initialisiert...`;
  }
);
const it_upload_cards_status_initializing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `inizializzazione in corso...`;
  }
);
const hr_upload_cards_status_initializing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `inicijaliziranje...`;
  }
);
const tr_upload_cards_status_initializing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `başlatılıyor...`;
  }
);
const ja_upload_cards_status_initializing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `初期化中...`;
  }
);
const ko_upload_cards_status_initializing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `준비중...`;
  }
);
const el_upload_cards_status_initializing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `αρχικοποίηση...`;
  }
);
const id_upload_cards_status_initializing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `menginisialisasi...`;
  }
);
const zh_hans1_upload_cards_status_initializing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `初始化中...`;
  }
);
const zh_hant1_upload_cards_status_initializing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `初始化中...`;
  }
);
const upload_cards_status_initializing = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_status_initializing", locale2);
  if (locale2 === "en") return en_upload_cards_status_initializing();
  if (locale2 === "es") return es_upload_cards_status_initializing();
  if (locale2 === "fr") return fr_upload_cards_status_initializing();
  if (locale2 === "de") return de_upload_cards_status_initializing();
  if (locale2 === "it") return it_upload_cards_status_initializing();
  if (locale2 === "hr") return hr_upload_cards_status_initializing();
  if (locale2 === "tr") return tr_upload_cards_status_initializing();
  if (locale2 === "ja") return ja_upload_cards_status_initializing();
  if (locale2 === "ko") return ko_upload_cards_status_initializing();
  if (locale2 === "el") return el_upload_cards_status_initializing();
  if (locale2 === "id") return id_upload_cards_status_initializing();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_status_initializing();
  return zh_hant1_upload_cards_status_initializing();
};
const en_upload_cards_status_unknown = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `unknown status`;
  }
);
const es_upload_cards_status_unknown = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `estado desconocido`;
  }
);
const fr_upload_cards_status_unknown = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `status inconnu`;
  }
);
const de_upload_cards_status_unknown = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `unbekannter Status`;
  }
);
const it_upload_cards_status_unknown = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `stato sconosciuto`;
  }
);
const hr_upload_cards_status_unknown = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `nepoznati status`;
  }
);
const tr_upload_cards_status_unknown = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `bilinmeyen durum`;
  }
);
const ja_upload_cards_status_unknown = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `不明なステータス`;
  }
);
const ko_upload_cards_status_unknown = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `알 수 없음`;
  }
);
const el_upload_cards_status_unknown = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `άγνωστη κατάσταση`;
  }
);
const id_upload_cards_status_unknown = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `status tidak diketahui`;
  }
);
const zh_hans1_upload_cards_status_unknown = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未知状态`;
  }
);
const zh_hant1_upload_cards_status_unknown = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未知狀態`;
  }
);
const upload_cards_status_unknown = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_status_unknown", locale2);
  if (locale2 === "en") return en_upload_cards_status_unknown();
  if (locale2 === "es") return es_upload_cards_status_unknown();
  if (locale2 === "fr") return fr_upload_cards_status_unknown();
  if (locale2 === "de") return de_upload_cards_status_unknown();
  if (locale2 === "it") return it_upload_cards_status_unknown();
  if (locale2 === "hr") return hr_upload_cards_status_unknown();
  if (locale2 === "tr") return tr_upload_cards_status_unknown();
  if (locale2 === "ja") return ja_upload_cards_status_unknown();
  if (locale2 === "ko") return ko_upload_cards_status_unknown();
  if (locale2 === "el") return el_upload_cards_status_unknown();
  if (locale2 === "id") return id_upload_cards_status_unknown();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_status_unknown();
  return zh_hant1_upload_cards_status_unknown();
};
const en_upload_cards_supported_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Supported formats:`;
  }
);
const es_upload_cards_supported_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Formatos soportados:`;
  }
);
const fr_upload_cards_supported_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Formats supportés:`;
  }
);
const de_upload_cards_supported_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Unterstützte Formate:`;
  }
);
const it_upload_cards_supported_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Formati supportati:`;
  }
);
const hr_upload_cards_supported_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Podržani formati:`;
  }
);
const tr_upload_cards_supported_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Desteklenen formatlar:`;
  }
);
const ja_upload_cards_supported_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `対応フォーマット:`;
  }
);
const ko_upload_cards_supported_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `지원 포맷:`;
  }
);
const el_upload_cards_supported_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Υποστηριζόμενες μορφές:`;
  }
);
const id_upload_cards_supported_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Format yang didukung:`;
  }
);
const zh_hans1_upload_cards_supported_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `支持的格式：`;
  }
);
const zh_hant1_upload_cards_supported_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `支援的格式：`;
  }
);
const upload_cards_supported_formats = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_cards_supported_formats", locale2);
  if (locale2 === "en") return en_upload_cards_supported_formats();
  if (locale2 === "es") return es_upload_cards_supported_formats();
  if (locale2 === "fr") return fr_upload_cards_supported_formats();
  if (locale2 === "de") return de_upload_cards_supported_formats();
  if (locale2 === "it") return it_upload_cards_supported_formats();
  if (locale2 === "hr") return hr_upload_cards_supported_formats();
  if (locale2 === "tr") return tr_upload_cards_supported_formats();
  if (locale2 === "ja") return ja_upload_cards_supported_formats();
  if (locale2 === "ko") return ko_upload_cards_supported_formats();
  if (locale2 === "el") return el_upload_cards_supported_formats();
  if (locale2 === "id") return id_upload_cards_supported_formats();
  if (locale2 === "zh-Hans") return zh_hans1_upload_cards_supported_formats();
  return zh_hant1_upload_cards_supported_formats();
};
const en_upload_tooltip_partial_support = (
  /** @type {(inputs: { direction: NonNullable<unknown> }) => string} */
  (i) => {
    return `This format can only be converted as ${i.direction}.`;
  }
);
const es_upload_tooltip_partial_support = (
  /** @type {(inputs: { direction: NonNullable<unknown> }) => string} */
  (i) => {
    return `Este formato solo se puede convertir a ${i.direction}.`;
  }
);
const fr_upload_tooltip_partial_support = (
  /** @type {(inputs: { direction: NonNullable<unknown> }) => string} */
  (i) => {
    return `Ce format ne peut être converti qu'en ${i.direction}.`;
  }
);
const de_upload_tooltip_partial_support = (
  /** @type {(inputs: { direction: NonNullable<unknown> }) => string} */
  (i) => {
    return `Dieses Format kann nur als ${i.direction} konvertiert werden.`;
  }
);
const it_upload_tooltip_partial_support = (
  /** @type {(inputs: { direction: NonNullable<unknown> }) => string} */
  (i) => {
    return `Questo formato può essere convertito solo come ${i.direction}.`;
  }
);
const hr_upload_tooltip_partial_support = (
  /** @type {(inputs: { direction: NonNullable<unknown> }) => string} */
  (i) => {
    return `Ovaj format se može pretvoriti u ${i.direction}.`;
  }
);
const tr_upload_tooltip_partial_support = (
  /** @type {(inputs: { direction: NonNullable<unknown> }) => string} */
  (i) => {
    return `Bu format yalnızca şu şekilde dönüştürülebilir: ${i.direction}.`;
  }
);
const ja_upload_tooltip_partial_support = (
  /** @type {(inputs: { direction: NonNullable<unknown> }) => string} */
  (i) => {
    return `このフォーマットは${i.direction}としてのみ変換可能です。`;
  }
);
const ko_upload_tooltip_partial_support = (
  /** @type {(inputs: { direction: NonNullable<unknown> }) => string} */
  (i) => {
    return `이 형식은 ${i.direction}으로만 변환할 수 있습니다.`;
  }
);
const el_upload_tooltip_partial_support = (
  /** @type {(inputs: { direction: NonNullable<unknown> }) => string} */
  (i) => {
    return `Αυτή η μορφή μπορεί να μετατραπεί μόνο ως ${i.direction}.`;
  }
);
const id_upload_tooltip_partial_support = (
  /** @type {(inputs: { direction: NonNullable<unknown> }) => string} */
  (i) => {
    return `Format ini hanya dapat dikonversi ke ${i.direction}.`;
  }
);
const zh_hans1_upload_tooltip_partial_support = (
  /** @type {(inputs: { direction: NonNullable<unknown> }) => string} */
  (i) => {
    return `此格式仅可作为${i.direction}进行转换。`;
  }
);
const zh_hant1_upload_tooltip_partial_support = (
  /** @type {(inputs: { direction: NonNullable<unknown> }) => string} */
  (i) => {
    return `此格式僅可作為${i.direction}進行轉換。`;
  }
);
const upload_tooltip_partial_support = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_tooltip_partial_support", locale2);
  if (locale2 === "en") return en_upload_tooltip_partial_support(inputs);
  if (locale2 === "es") return es_upload_tooltip_partial_support(inputs);
  if (locale2 === "fr") return fr_upload_tooltip_partial_support(inputs);
  if (locale2 === "de") return de_upload_tooltip_partial_support(inputs);
  if (locale2 === "it") return it_upload_tooltip_partial_support(inputs);
  if (locale2 === "hr") return hr_upload_tooltip_partial_support(inputs);
  if (locale2 === "tr") return tr_upload_tooltip_partial_support(inputs);
  if (locale2 === "ja") return ja_upload_tooltip_partial_support(inputs);
  if (locale2 === "ko") return ko_upload_tooltip_partial_support(inputs);
  if (locale2 === "el") return el_upload_tooltip_partial_support(inputs);
  if (locale2 === "id") return id_upload_tooltip_partial_support(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_upload_tooltip_partial_support(inputs);
  return zh_hant1_upload_tooltip_partial_support(inputs);
};
const en_upload_tooltip_direction_input = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `input (from)`;
  }
);
const es_upload_tooltip_direction_input = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `entrada (desde)`;
  }
);
const fr_upload_tooltip_direction_input = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Entrée (de)`;
  }
);
const de_upload_tooltip_direction_input = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Input (von)`;
  }
);
const it_upload_tooltip_direction_input = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `input (da)`;
  }
);
const hr_upload_tooltip_direction_input = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ulaz (iz)`;
  }
);
const tr_upload_tooltip_direction_input = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `kaynak`;
  }
);
const ja_upload_tooltip_direction_input = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `入力（変換元）`;
  }
);
const ko_upload_tooltip_direction_input = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `입력 (from)`;
  }
);
const el_upload_tooltip_direction_input = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `είσοδος (από)`;
  }
);
const id_upload_tooltip_direction_input = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `sumber asal (dari)`;
  }
);
const zh_hans1_upload_tooltip_direction_input = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `输入（来源）`;
  }
);
const zh_hant1_upload_tooltip_direction_input = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `輸入（來源）`;
  }
);
const upload_tooltip_direction_input = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_tooltip_direction_input", locale2);
  if (locale2 === "en") return en_upload_tooltip_direction_input();
  if (locale2 === "es") return es_upload_tooltip_direction_input();
  if (locale2 === "fr") return fr_upload_tooltip_direction_input();
  if (locale2 === "de") return de_upload_tooltip_direction_input();
  if (locale2 === "it") return it_upload_tooltip_direction_input();
  if (locale2 === "hr") return hr_upload_tooltip_direction_input();
  if (locale2 === "tr") return tr_upload_tooltip_direction_input();
  if (locale2 === "ja") return ja_upload_tooltip_direction_input();
  if (locale2 === "ko") return ko_upload_tooltip_direction_input();
  if (locale2 === "el") return el_upload_tooltip_direction_input();
  if (locale2 === "id") return id_upload_tooltip_direction_input();
  if (locale2 === "zh-Hans") return zh_hans1_upload_tooltip_direction_input();
  return zh_hant1_upload_tooltip_direction_input();
};
const en_upload_tooltip_direction_output = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `output (to)`;
  }
);
const es_upload_tooltip_direction_output = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `salida (hacia)`;
  }
);
const fr_upload_tooltip_direction_output = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sortie (vers)`;
  }
);
const de_upload_tooltip_direction_output = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Output (nach)`;
  }
);
const it_upload_tooltip_direction_output = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `output (a)`;
  }
);
const hr_upload_tooltip_direction_output = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `izlaz (u)`;
  }
);
const tr_upload_tooltip_direction_output = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `çıktı`;
  }
);
const ja_upload_tooltip_direction_output = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `出力（変換先）`;
  }
);
const ko_upload_tooltip_direction_output = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `출력 (to)`;
  }
);
const el_upload_tooltip_direction_output = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `έξοδος (προς)`;
  }
);
const id_upload_tooltip_direction_output = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `target (ke)`;
  }
);
const zh_hans1_upload_tooltip_direction_output = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `输出（目标）`;
  }
);
const zh_hant1_upload_tooltip_direction_output = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `輸出（目標）`;
  }
);
const upload_tooltip_direction_output = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_tooltip_direction_output", locale2);
  if (locale2 === "en") return en_upload_tooltip_direction_output();
  if (locale2 === "es") return es_upload_tooltip_direction_output();
  if (locale2 === "fr") return fr_upload_tooltip_direction_output();
  if (locale2 === "de") return de_upload_tooltip_direction_output();
  if (locale2 === "it") return it_upload_tooltip_direction_output();
  if (locale2 === "hr") return hr_upload_tooltip_direction_output();
  if (locale2 === "tr") return tr_upload_tooltip_direction_output();
  if (locale2 === "ja") return ja_upload_tooltip_direction_output();
  if (locale2 === "ko") return ko_upload_tooltip_direction_output();
  if (locale2 === "el") return el_upload_tooltip_direction_output();
  if (locale2 === "id") return id_upload_tooltip_direction_output();
  if (locale2 === "zh-Hans") return zh_hans1_upload_tooltip_direction_output();
  return zh_hant1_upload_tooltip_direction_output();
};
const en_upload_tooltip_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video uploads to a server for processing by default, learn how to set it up locally here.`;
  }
);
const es_upload_tooltip_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Por defecto, los vídeos se suben a un servidor para ser procesados. Aprende cómo instalarlo localmente aquí.`;
  }
);
const fr_upload_tooltip_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Les vidéos sont téléchargées sur un serveur pour un traitement par défaut, découvrez comment les configurer localement ici.`;
  }
);
const de_upload_tooltip_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Videos werden standardmäßig zur Verarbeitung auf einen Server hochgeladen. Lerne hier, wie du es lokal einrichten kannst.`;
  }
);
const it_upload_tooltip_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Per impostazione predefinita, i video vengono caricati su un server per l'elaborazione. Scopri come configurarlo in locale qui.`;
  }
);
const hr_upload_tooltip_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Videozapisi se uobičajeno prenose na servere za obradu, nauči ovdje kako namjestiti da se događa lokalno.`;
  }
);
const tr_upload_tooltip_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Videolar varsayılan olarak işlenmek üzere sunucuya yüklenir. Yerel olarak nasıl ayarlayacağınızı buradan öğrenebilirsiniz.`;
  }
);
const ja_upload_tooltip_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `動画はデフォルトでサーバーにアップロードされて処理されます。ローカルで設定する方法はこちら。`;
  }
);
const ko_upload_tooltip_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `동영상은 기본적으로 처리를 위해 서버로 업로드됩니다. 로컬로 처리하도록 설정하는 방법은 여기에서 확인하세요.`;
  }
);
const el_upload_tooltip_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Τα βίντεο μεταφορτώνονται σε σέρβερ για επεξεργασία από προεπιλογή, μάθετε πώς να το ρυθμίσετε τοπικά εδώ.`;
  }
);
const id_upload_tooltip_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video upload ke server untuk diproses secara baku, belajar bagaimana mengaturnya di sini.`;
  }
);
const zh_hans1_upload_tooltip_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `视频默认上传到服务器进行处理，点击这里了解如何在本地设置。`;
  }
);
const zh_hant1_upload_tooltip_video_server_processing = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `影片預設上傳到伺服器進行處理，點擊這裡了解如何在本機設定。`;
  }
);
const upload_tooltip_video_server_processing = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_tooltip_video_server_processing", locale2);
  if (locale2 === "en") return en_upload_tooltip_video_server_processing();
  if (locale2 === "es") return es_upload_tooltip_video_server_processing();
  if (locale2 === "fr") return fr_upload_tooltip_video_server_processing();
  if (locale2 === "de") return de_upload_tooltip_video_server_processing();
  if (locale2 === "it") return it_upload_tooltip_video_server_processing();
  if (locale2 === "hr") return hr_upload_tooltip_video_server_processing();
  if (locale2 === "tr") return tr_upload_tooltip_video_server_processing();
  if (locale2 === "ja") return ja_upload_tooltip_video_server_processing();
  if (locale2 === "ko") return ko_upload_tooltip_video_server_processing();
  if (locale2 === "el") return el_upload_tooltip_video_server_processing();
  if (locale2 === "id") return id_upload_tooltip_video_server_processing();
  if (locale2 === "zh-Hans") return zh_hans1_upload_tooltip_video_server_processing();
  return zh_hant1_upload_tooltip_video_server_processing();
};
const en_convert_archive_file_extract = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Extract archive`;
  }
);
const es_convert_archive_file_extract = en_convert_archive_file_extract;
const fr_convert_archive_file_extract = en_convert_archive_file_extract;
const de_convert_archive_file_extract = en_convert_archive_file_extract;
const it_convert_archive_file_extract = en_convert_archive_file_extract;
const hr_convert_archive_file_extract = en_convert_archive_file_extract;
const tr_convert_archive_file_extract = en_convert_archive_file_extract;
const ja_convert_archive_file_extract = en_convert_archive_file_extract;
const ko_convert_archive_file_extract = en_convert_archive_file_extract;
const el_convert_archive_file_extract = en_convert_archive_file_extract;
const id_convert_archive_file_extract = en_convert_archive_file_extract;
const zh_hans1_convert_archive_file_extract = en_convert_archive_file_extract;
const zh_hant1_convert_archive_file_extract = en_convert_archive_file_extract;
const convert_archive_file_extract = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_archive_file_extract", locale2);
  if (locale2 === "en") return en_convert_archive_file_extract();
  if (locale2 === "es") return es_convert_archive_file_extract();
  if (locale2 === "fr") return fr_convert_archive_file_extract();
  if (locale2 === "de") return de_convert_archive_file_extract();
  if (locale2 === "it") return it_convert_archive_file_extract();
  if (locale2 === "hr") return hr_convert_archive_file_extract();
  if (locale2 === "tr") return tr_convert_archive_file_extract();
  if (locale2 === "ja") return ja_convert_archive_file_extract();
  if (locale2 === "ko") return ko_convert_archive_file_extract();
  if (locale2 === "el") return el_convert_archive_file_extract();
  if (locale2 === "id") return id_convert_archive_file_extract();
  if (locale2 === "zh-Hans") return zh_hans1_convert_archive_file_extract();
  return zh_hant1_convert_archive_file_extract();
};
const en_convert_archive_file_extracting = (
  /** @type {(inputs: { filename: NonNullable<unknown> }) => string} */
  (i) => {
    return `Detected archive: ${i.filename}`;
  }
);
const ko_convert_archive_file_extracting = (
  /** @type {(inputs: { filename: NonNullable<unknown> }) => string} */
  (i) => {
    return `ZIP파일 감지됨: ${i.filename}`;
  }
);
const zh_hans1_convert_archive_file_extracting = (
  /** @type {(inputs: { filename: NonNullable<unknown> }) => string} */
  (i) => {
    return `检测到 ZIP 压缩包：${i.filename}`;
  }
);
const zh_hant1_convert_archive_file_extracting = (
  /** @type {(inputs: { filename: NonNullable<unknown> }) => string} */
  (i) => {
    return `偵測到 ZIP 壓縮檔：${i.filename}`;
  }
);
const es_convert_archive_file_extracting = en_convert_archive_file_extracting;
const fr_convert_archive_file_extracting = en_convert_archive_file_extracting;
const de_convert_archive_file_extracting = en_convert_archive_file_extracting;
const it_convert_archive_file_extracting = en_convert_archive_file_extracting;
const hr_convert_archive_file_extracting = en_convert_archive_file_extracting;
const tr_convert_archive_file_extracting = en_convert_archive_file_extracting;
const ja_convert_archive_file_extracting = en_convert_archive_file_extracting;
const el_convert_archive_file_extracting = en_convert_archive_file_extracting;
const id_convert_archive_file_extracting = en_convert_archive_file_extracting;
const convert_archive_file_extracting = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_archive_file_extracting", locale2);
  if (locale2 === "en") return en_convert_archive_file_extracting(inputs);
  if (locale2 === "es") return es_convert_archive_file_extracting(inputs);
  if (locale2 === "fr") return fr_convert_archive_file_extracting(inputs);
  if (locale2 === "de") return de_convert_archive_file_extracting(inputs);
  if (locale2 === "it") return it_convert_archive_file_extracting(inputs);
  if (locale2 === "hr") return hr_convert_archive_file_extracting(inputs);
  if (locale2 === "tr") return tr_convert_archive_file_extracting(inputs);
  if (locale2 === "ja") return ja_convert_archive_file_extracting(inputs);
  if (locale2 === "ko") return ko_convert_archive_file_extracting(inputs);
  if (locale2 === "el") return el_convert_archive_file_extracting(inputs);
  if (locale2 === "id") return id_convert_archive_file_extracting(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_convert_archive_file_extracting(inputs);
  return zh_hant1_convert_archive_file_extracting(inputs);
};
const en_convert_archive_file_extracted = (
  /** @type {(inputs: { extract_count: NonNullable<unknown>, filename: NonNullable<unknown>, ignore_count: NonNullable<unknown> }) => string} */
  (i) => {
    return `Extracted ${i.extract_count} files from ${i.filename}. ${i.ignore_count} items were ignored.`;
  }
);
const ko_convert_archive_file_extracted = (
  /** @type {(inputs: { extract_count: NonNullable<unknown>, filename: NonNullable<unknown>, ignore_count: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.filename}압축 파일에서 ${i.extract_count}개의 파일을 풀었습니다. ${i.ignore_count}개 항목은 무시되었습니다.`;
  }
);
const zh_hans1_convert_archive_file_extracted = (
  /** @type {(inputs: { extract_count: NonNullable<unknown>, filename: NonNullable<unknown>, ignore_count: NonNullable<unknown> }) => string} */
  (i) => {
    return `从 ${i.filename} 中提取了 ${i.extract_count} 个文件。${i.ignore_count} 个项目被忽略。`;
  }
);
const zh_hant1_convert_archive_file_extracted = (
  /** @type {(inputs: { extract_count: NonNullable<unknown>, filename: NonNullable<unknown>, ignore_count: NonNullable<unknown> }) => string} */
  (i) => {
    return `從 ${i.filename} 中提取了 ${i.extract_count} 個檔案。${i.ignore_count} 個項目被忽略。`;
  }
);
const es_convert_archive_file_extracted = en_convert_archive_file_extracted;
const fr_convert_archive_file_extracted = en_convert_archive_file_extracted;
const de_convert_archive_file_extracted = en_convert_archive_file_extracted;
const it_convert_archive_file_extracted = en_convert_archive_file_extracted;
const hr_convert_archive_file_extracted = en_convert_archive_file_extracted;
const tr_convert_archive_file_extracted = en_convert_archive_file_extracted;
const ja_convert_archive_file_extracted = en_convert_archive_file_extracted;
const el_convert_archive_file_extracted = en_convert_archive_file_extracted;
const id_convert_archive_file_extracted = en_convert_archive_file_extracted;
const convert_archive_file_extracted = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_archive_file_extracted", locale2);
  if (locale2 === "en") return en_convert_archive_file_extracted(inputs);
  if (locale2 === "es") return es_convert_archive_file_extracted(inputs);
  if (locale2 === "fr") return fr_convert_archive_file_extracted(inputs);
  if (locale2 === "de") return de_convert_archive_file_extracted(inputs);
  if (locale2 === "it") return it_convert_archive_file_extracted(inputs);
  if (locale2 === "hr") return hr_convert_archive_file_extracted(inputs);
  if (locale2 === "tr") return tr_convert_archive_file_extracted(inputs);
  if (locale2 === "ja") return ja_convert_archive_file_extracted(inputs);
  if (locale2 === "ko") return ko_convert_archive_file_extracted(inputs);
  if (locale2 === "el") return el_convert_archive_file_extracted(inputs);
  if (locale2 === "id") return id_convert_archive_file_extracted(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_convert_archive_file_extracted(inputs);
  return zh_hant1_convert_archive_file_extracted(inputs);
};
const en_convert_archive_file_detected = (
  /** @type {(inputs: { type: NonNullable<unknown>, filename: NonNullable<unknown> }) => string} */
  (i) => {
    return `Detected ${i.type} files in ${i.filename}.`;
  }
);
const es_convert_archive_file_detected = en_convert_archive_file_detected;
const fr_convert_archive_file_detected = en_convert_archive_file_detected;
const de_convert_archive_file_detected = en_convert_archive_file_detected;
const it_convert_archive_file_detected = en_convert_archive_file_detected;
const hr_convert_archive_file_detected = en_convert_archive_file_detected;
const tr_convert_archive_file_detected = en_convert_archive_file_detected;
const ja_convert_archive_file_detected = en_convert_archive_file_detected;
const ko_convert_archive_file_detected = en_convert_archive_file_detected;
const el_convert_archive_file_detected = en_convert_archive_file_detected;
const id_convert_archive_file_detected = en_convert_archive_file_detected;
const zh_hans1_convert_archive_file_detected = en_convert_archive_file_detected;
const zh_hant1_convert_archive_file_detected = en_convert_archive_file_detected;
const convert_archive_file_detected = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_archive_file_detected", locale2);
  if (locale2 === "en") return en_convert_archive_file_detected(inputs);
  if (locale2 === "es") return es_convert_archive_file_detected(inputs);
  if (locale2 === "fr") return fr_convert_archive_file_detected(inputs);
  if (locale2 === "de") return de_convert_archive_file_detected(inputs);
  if (locale2 === "it") return it_convert_archive_file_detected(inputs);
  if (locale2 === "hr") return hr_convert_archive_file_detected(inputs);
  if (locale2 === "tr") return tr_convert_archive_file_detected(inputs);
  if (locale2 === "ja") return ja_convert_archive_file_detected(inputs);
  if (locale2 === "ko") return ko_convert_archive_file_detected(inputs);
  if (locale2 === "el") return el_convert_archive_file_detected(inputs);
  if (locale2 === "id") return id_convert_archive_file_detected(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_convert_archive_file_detected(inputs);
  return zh_hant1_convert_archive_file_detected(inputs);
};
const en_convert_archive_file_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `audio`;
  }
);
const es_convert_archive_file_audio = en_convert_archive_file_audio;
const fr_convert_archive_file_audio = en_convert_archive_file_audio;
const de_convert_archive_file_audio = en_convert_archive_file_audio;
const it_convert_archive_file_audio = en_convert_archive_file_audio;
const hr_convert_archive_file_audio = en_convert_archive_file_audio;
const tr_convert_archive_file_audio = en_convert_archive_file_audio;
const ja_convert_archive_file_audio = en_convert_archive_file_audio;
const ko_convert_archive_file_audio = en_convert_archive_file_audio;
const el_convert_archive_file_audio = en_convert_archive_file_audio;
const id_convert_archive_file_audio = en_convert_archive_file_audio;
const zh_hans1_convert_archive_file_audio = en_convert_archive_file_audio;
const zh_hant1_convert_archive_file_audio = en_convert_archive_file_audio;
const convert_archive_file_audio = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_archive_file_audio", locale2);
  if (locale2 === "en") return en_convert_archive_file_audio();
  if (locale2 === "es") return es_convert_archive_file_audio();
  if (locale2 === "fr") return fr_convert_archive_file_audio();
  if (locale2 === "de") return de_convert_archive_file_audio();
  if (locale2 === "it") return it_convert_archive_file_audio();
  if (locale2 === "hr") return hr_convert_archive_file_audio();
  if (locale2 === "tr") return tr_convert_archive_file_audio();
  if (locale2 === "ja") return ja_convert_archive_file_audio();
  if (locale2 === "ko") return ko_convert_archive_file_audio();
  if (locale2 === "el") return el_convert_archive_file_audio();
  if (locale2 === "id") return id_convert_archive_file_audio();
  if (locale2 === "zh-Hans") return zh_hans1_convert_archive_file_audio();
  return zh_hant1_convert_archive_file_audio();
};
const en_convert_archive_file_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `video`;
  }
);
const es_convert_archive_file_video = en_convert_archive_file_video;
const fr_convert_archive_file_video = en_convert_archive_file_video;
const de_convert_archive_file_video = en_convert_archive_file_video;
const it_convert_archive_file_video = en_convert_archive_file_video;
const hr_convert_archive_file_video = en_convert_archive_file_video;
const tr_convert_archive_file_video = en_convert_archive_file_video;
const ja_convert_archive_file_video = en_convert_archive_file_video;
const ko_convert_archive_file_video = en_convert_archive_file_video;
const el_convert_archive_file_video = en_convert_archive_file_video;
const id_convert_archive_file_video = en_convert_archive_file_video;
const zh_hans1_convert_archive_file_video = en_convert_archive_file_video;
const zh_hant1_convert_archive_file_video = en_convert_archive_file_video;
const convert_archive_file_video = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_archive_file_video", locale2);
  if (locale2 === "en") return en_convert_archive_file_video();
  if (locale2 === "es") return es_convert_archive_file_video();
  if (locale2 === "fr") return fr_convert_archive_file_video();
  if (locale2 === "de") return de_convert_archive_file_video();
  if (locale2 === "it") return it_convert_archive_file_video();
  if (locale2 === "hr") return hr_convert_archive_file_video();
  if (locale2 === "tr") return tr_convert_archive_file_video();
  if (locale2 === "ja") return ja_convert_archive_file_video();
  if (locale2 === "ko") return ko_convert_archive_file_video();
  if (locale2 === "el") return el_convert_archive_file_video();
  if (locale2 === "id") return id_convert_archive_file_video();
  if (locale2 === "zh-Hans") return zh_hans1_convert_archive_file_video();
  return zh_hant1_convert_archive_file_video();
};
const en_convert_archive_file_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `document`;
  }
);
const es_convert_archive_file_doc = en_convert_archive_file_doc;
const fr_convert_archive_file_doc = en_convert_archive_file_doc;
const de_convert_archive_file_doc = en_convert_archive_file_doc;
const it_convert_archive_file_doc = en_convert_archive_file_doc;
const hr_convert_archive_file_doc = en_convert_archive_file_doc;
const tr_convert_archive_file_doc = en_convert_archive_file_doc;
const ja_convert_archive_file_doc = en_convert_archive_file_doc;
const ko_convert_archive_file_doc = en_convert_archive_file_doc;
const el_convert_archive_file_doc = en_convert_archive_file_doc;
const id_convert_archive_file_doc = en_convert_archive_file_doc;
const zh_hans1_convert_archive_file_doc = en_convert_archive_file_doc;
const zh_hant1_convert_archive_file_doc = en_convert_archive_file_doc;
const convert_archive_file_doc = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_archive_file_doc", locale2);
  if (locale2 === "en") return en_convert_archive_file_doc();
  if (locale2 === "es") return es_convert_archive_file_doc();
  if (locale2 === "fr") return fr_convert_archive_file_doc();
  if (locale2 === "de") return de_convert_archive_file_doc();
  if (locale2 === "it") return it_convert_archive_file_doc();
  if (locale2 === "hr") return hr_convert_archive_file_doc();
  if (locale2 === "tr") return tr_convert_archive_file_doc();
  if (locale2 === "ja") return ja_convert_archive_file_doc();
  if (locale2 === "ko") return ko_convert_archive_file_doc();
  if (locale2 === "el") return el_convert_archive_file_doc();
  if (locale2 === "id") return id_convert_archive_file_doc();
  if (locale2 === "zh-Hans") return zh_hans1_convert_archive_file_doc();
  return zh_hant1_convert_archive_file_doc();
};
const en_convert_archive_file_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `image`;
  }
);
const es_convert_archive_file_image = en_convert_archive_file_image;
const fr_convert_archive_file_image = en_convert_archive_file_image;
const de_convert_archive_file_image = en_convert_archive_file_image;
const it_convert_archive_file_image = en_convert_archive_file_image;
const hr_convert_archive_file_image = en_convert_archive_file_image;
const tr_convert_archive_file_image = en_convert_archive_file_image;
const ja_convert_archive_file_image = en_convert_archive_file_image;
const ko_convert_archive_file_image = en_convert_archive_file_image;
const el_convert_archive_file_image = en_convert_archive_file_image;
const id_convert_archive_file_image = en_convert_archive_file_image;
const zh_hans1_convert_archive_file_image = en_convert_archive_file_image;
const zh_hant1_convert_archive_file_image = en_convert_archive_file_image;
const convert_archive_file_image = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_archive_file_image", locale2);
  if (locale2 === "en") return en_convert_archive_file_image();
  if (locale2 === "es") return es_convert_archive_file_image();
  if (locale2 === "fr") return fr_convert_archive_file_image();
  if (locale2 === "de") return de_convert_archive_file_image();
  if (locale2 === "it") return it_convert_archive_file_image();
  if (locale2 === "hr") return hr_convert_archive_file_image();
  if (locale2 === "tr") return tr_convert_archive_file_image();
  if (locale2 === "ja") return ja_convert_archive_file_image();
  if (locale2 === "ko") return ko_convert_archive_file_image();
  if (locale2 === "el") return el_convert_archive_file_image();
  if (locale2 === "id") return id_convert_archive_file_image();
  if (locale2 === "zh-Hans") return zh_hans1_convert_archive_file_image();
  return zh_hant1_convert_archive_file_image();
};
const en_convert_archive_file_extract_error = (
  /** @type {(inputs: { filename: NonNullable<unknown>, error: NonNullable<unknown> }) => string} */
  (i) => {
    return `Error extracting ${i.filename}: ${i.error}`;
  }
);
const ko_convert_archive_file_extract_error = (
  /** @type {(inputs: { filename: NonNullable<unknown>, error: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.filename}압축 파일 풀던 중 오류 발생: ${i.error}`;
  }
);
const zh_hans1_convert_archive_file_extract_error = (
  /** @type {(inputs: { filename: NonNullable<unknown>, error: NonNullable<unknown> }) => string} */
  (i) => {
    return `提取 ${i.filename} 时出错：${i.error}`;
  }
);
const zh_hant1_convert_archive_file_extract_error = (
  /** @type {(inputs: { filename: NonNullable<unknown>, error: NonNullable<unknown> }) => string} */
  (i) => {
    return `提取 ${i.filename} 時出錯：${i.error}`;
  }
);
const es_convert_archive_file_extract_error = en_convert_archive_file_extract_error;
const fr_convert_archive_file_extract_error = en_convert_archive_file_extract_error;
const de_convert_archive_file_extract_error = en_convert_archive_file_extract_error;
const it_convert_archive_file_extract_error = en_convert_archive_file_extract_error;
const hr_convert_archive_file_extract_error = en_convert_archive_file_extract_error;
const tr_convert_archive_file_extract_error = en_convert_archive_file_extract_error;
const ja_convert_archive_file_extract_error = en_convert_archive_file_extract_error;
const el_convert_archive_file_extract_error = en_convert_archive_file_extract_error;
const id_convert_archive_file_extract_error = en_convert_archive_file_extract_error;
const convert_archive_file_extract_error = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_archive_file_extract_error", locale2);
  if (locale2 === "en") return en_convert_archive_file_extract_error(inputs);
  if (locale2 === "es") return es_convert_archive_file_extract_error(inputs);
  if (locale2 === "fr") return fr_convert_archive_file_extract_error(inputs);
  if (locale2 === "de") return de_convert_archive_file_extract_error(inputs);
  if (locale2 === "it") return it_convert_archive_file_extract_error(inputs);
  if (locale2 === "hr") return hr_convert_archive_file_extract_error(inputs);
  if (locale2 === "tr") return tr_convert_archive_file_extract_error(inputs);
  if (locale2 === "ja") return ja_convert_archive_file_extract_error(inputs);
  if (locale2 === "ko") return ko_convert_archive_file_extract_error(inputs);
  if (locale2 === "el") return el_convert_archive_file_extract_error(inputs);
  if (locale2 === "id") return id_convert_archive_file_extract_error(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_convert_archive_file_extract_error(inputs);
  return zh_hant1_convert_archive_file_extract_error(inputs);
};
const en_convert_large_file_warning = (
  /** @type {(inputs: { limit: NonNullable<unknown> }) => string} */
  (i) => {
    return `Due to browser / device limitations, video to audio conversion is disabled for this file as it is larger than ${i.limit}GB. We recommend using Firefox or Safari for files of this size since they have less limitations.`;
  }
);
const zh_hans1_convert_large_file_warning = (
  /** @type {(inputs: { limit: NonNullable<unknown> }) => string} */
  (i) => {
    return `由于浏览器/设备限制，此文件大于 ${i.limit}GB，视频转音频功能已禁用。我们建议使用 Firefox 或 Safari 处理此大小的文件，因为它们的限制较少。`;
  }
);
const zh_hant1_convert_large_file_warning = (
  /** @type {(inputs: { limit: NonNullable<unknown> }) => string} */
  (i) => {
    return `由於瀏覽器/裝置限制，此檔案大於 ${i.limit}GB，影片轉音訊功能已停用。我們建議使用 Firefox 或 Safari 處理此大小的檔案，因為它們的限制較少。`;
  }
);
const es_convert_large_file_warning = en_convert_large_file_warning;
const fr_convert_large_file_warning = en_convert_large_file_warning;
const de_convert_large_file_warning = en_convert_large_file_warning;
const it_convert_large_file_warning = en_convert_large_file_warning;
const hr_convert_large_file_warning = en_convert_large_file_warning;
const tr_convert_large_file_warning = en_convert_large_file_warning;
const ja_convert_large_file_warning = en_convert_large_file_warning;
const ko_convert_large_file_warning = en_convert_large_file_warning;
const el_convert_large_file_warning = en_convert_large_file_warning;
const id_convert_large_file_warning = en_convert_large_file_warning;
const convert_large_file_warning = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_large_file_warning", locale2);
  if (locale2 === "en") return en_convert_large_file_warning(inputs);
  if (locale2 === "es") return es_convert_large_file_warning(inputs);
  if (locale2 === "fr") return fr_convert_large_file_warning(inputs);
  if (locale2 === "de") return de_convert_large_file_warning(inputs);
  if (locale2 === "it") return it_convert_large_file_warning(inputs);
  if (locale2 === "hr") return hr_convert_large_file_warning(inputs);
  if (locale2 === "tr") return tr_convert_large_file_warning(inputs);
  if (locale2 === "ja") return ja_convert_large_file_warning(inputs);
  if (locale2 === "ko") return ko_convert_large_file_warning(inputs);
  if (locale2 === "el") return el_convert_large_file_warning(inputs);
  if (locale2 === "id") return id_convert_large_file_warning(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_convert_large_file_warning(inputs);
  return zh_hant1_convert_large_file_warning(inputs);
};
const en_convert_external_warning_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `External server warning`;
  }
);
const es_convert_external_warning_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Advertencia del servidor externo`;
  }
);
const it_convert_external_warning_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Avviso server esterno`;
  }
);
const tr_convert_external_warning_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Harici sunucu uyarısı`;
  }
);
const ja_convert_external_warning_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `外部サーバーの警告`;
  }
);
const ko_convert_external_warning_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `외부 서버 경고`;
  }
);
const el_convert_external_warning_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Προειδοποίηση εξωτερικού σέρβερ`;
  }
);
const id_convert_external_warning_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Peringatan server eksternal`;
  }
);
const zh_hans1_convert_external_warning_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `外部服务器警告`;
  }
);
const zh_hant1_convert_external_warning_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `外部伺服器警告`;
  }
);
const fr_convert_external_warning_title = en_convert_external_warning_title;
const de_convert_external_warning_title = en_convert_external_warning_title;
const hr_convert_external_warning_title = en_convert_external_warning_title;
const convert_external_warning_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_external_warning_title", locale2);
  if (locale2 === "en") return en_convert_external_warning_title();
  if (locale2 === "es") return es_convert_external_warning_title();
  if (locale2 === "fr") return fr_convert_external_warning_title();
  if (locale2 === "de") return de_convert_external_warning_title();
  if (locale2 === "it") return it_convert_external_warning_title();
  if (locale2 === "hr") return hr_convert_external_warning_title();
  if (locale2 === "tr") return tr_convert_external_warning_title();
  if (locale2 === "ja") return ja_convert_external_warning_title();
  if (locale2 === "ko") return ko_convert_external_warning_title();
  if (locale2 === "el") return el_convert_external_warning_title();
  if (locale2 === "id") return id_convert_external_warning_title();
  if (locale2 === "zh-Hans") return zh_hans1_convert_external_warning_title();
  return zh_hant1_convert_external_warning_title();
};
const en_convert_external_warning_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `If you choose to convert into a video format, those files will be uploaded to an external server to be converted. Do you want to continue?`;
  }
);
const es_convert_external_warning_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Si eliges convertir a un formato de video, esos archivos se cargarán en un servidor externo para convertirlos. ¿Quieres continuar?`;
  }
);
const it_convert_external_warning_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Se scegli di convertire in un formato video, quei file verranno caricati su un server esterno per essere convertiti. Vuoi continuare?`;
  }
);
const tr_convert_external_warning_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video formatına dönüştürmeyi seçerseniz, bu dosyalar dönüştürülmek üzere harici bir sunucuya yüklenecektir. Devam etmek istiyor musunuz?`;
  }
);
const ja_convert_external_warning_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `動画フォーマットへの変換を選択すると、ファイルは外部サーバーにアップロードされて変換されます。続行しますか？`;
  }
);
const ko_convert_external_warning_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `동영상 형식으로 변환을 선택하면 해당 파일은 변환을 위해 지정한 외부 서버로 업로드됩니다. 계속하시겠습니까?`;
  }
);
const el_convert_external_warning_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Εάν επιλέξετε να μετατρέψετε σε μορφή βίντεο, αυτά τα αρχεία θα μεταφορτωθούν σε εξωτερικό σέρβερ για μετατροπή. Θέλετε να συνεχίσετε;`;
  }
);
const id_convert_external_warning_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Jika kamu memilih untuk mengonversi ke format video, berkas tersebut akan diunggah ke server eksternal untuk dikonversi. Apakah kamu ingin melanjutkan?`;
  }
);
const zh_hans1_convert_external_warning_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `如果你选择转换为视频格式，这些文件将被上传到外部服务器进行转换。是否继续？`;
  }
);
const zh_hant1_convert_external_warning_text = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `如果你選擇轉換為影片格式，這些檔案將被上傳到外部伺服器進行轉換。是否繼續？`;
  }
);
const fr_convert_external_warning_text = en_convert_external_warning_text;
const de_convert_external_warning_text = en_convert_external_warning_text;
const hr_convert_external_warning_text = en_convert_external_warning_text;
const convert_external_warning_text = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_external_warning_text", locale2);
  if (locale2 === "en") return en_convert_external_warning_text();
  if (locale2 === "es") return es_convert_external_warning_text();
  if (locale2 === "fr") return fr_convert_external_warning_text();
  if (locale2 === "de") return de_convert_external_warning_text();
  if (locale2 === "it") return it_convert_external_warning_text();
  if (locale2 === "hr") return hr_convert_external_warning_text();
  if (locale2 === "tr") return tr_convert_external_warning_text();
  if (locale2 === "ja") return ja_convert_external_warning_text();
  if (locale2 === "ko") return ko_convert_external_warning_text();
  if (locale2 === "el") return el_convert_external_warning_text();
  if (locale2 === "id") return id_convert_external_warning_text();
  if (locale2 === "zh-Hans") return zh_hans1_convert_external_warning_text();
  return zh_hant1_convert_external_warning_text();
};
const en_convert_external_warning_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Yes`;
  }
);
const es_convert_external_warning_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sí`;
  }
);
const it_convert_external_warning_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sì`;
  }
);
const tr_convert_external_warning_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Evet`;
  }
);
const ja_convert_external_warning_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `はい`;
  }
);
const ko_convert_external_warning_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `계속`;
  }
);
const el_convert_external_warning_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ναι`;
  }
);
const id_convert_external_warning_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ya`;
  }
);
const zh_hans1_convert_external_warning_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `是`;
  }
);
const zh_hant1_convert_external_warning_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `是`;
  }
);
const fr_convert_external_warning_yes = en_convert_external_warning_yes;
const de_convert_external_warning_yes = en_convert_external_warning_yes;
const hr_convert_external_warning_yes = en_convert_external_warning_yes;
const convert_external_warning_yes = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_external_warning_yes", locale2);
  if (locale2 === "en") return en_convert_external_warning_yes();
  if (locale2 === "es") return es_convert_external_warning_yes();
  if (locale2 === "fr") return fr_convert_external_warning_yes();
  if (locale2 === "de") return de_convert_external_warning_yes();
  if (locale2 === "it") return it_convert_external_warning_yes();
  if (locale2 === "hr") return hr_convert_external_warning_yes();
  if (locale2 === "tr") return tr_convert_external_warning_yes();
  if (locale2 === "ja") return ja_convert_external_warning_yes();
  if (locale2 === "ko") return ko_convert_external_warning_yes();
  if (locale2 === "el") return el_convert_external_warning_yes();
  if (locale2 === "id") return id_convert_external_warning_yes();
  if (locale2 === "zh-Hans") return zh_hans1_convert_external_warning_yes();
  return zh_hant1_convert_external_warning_yes();
};
const en_convert_external_warning_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `No`;
  }
);
const es_convert_external_warning_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `No`;
  }
);
const it_convert_external_warning_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `No`;
  }
);
const tr_convert_external_warning_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Hayır`;
  }
);
const ja_convert_external_warning_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `いいえ`;
  }
);
const ko_convert_external_warning_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `아니오`;
  }
);
const el_convert_external_warning_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Όχι`;
  }
);
const id_convert_external_warning_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tidak`;
  }
);
const zh_hans1_convert_external_warning_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `否`;
  }
);
const zh_hant1_convert_external_warning_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `否`;
  }
);
const fr_convert_external_warning_no = en_convert_external_warning_no;
const de_convert_external_warning_no = en_convert_external_warning_no;
const hr_convert_external_warning_no = en_convert_external_warning_no;
const convert_external_warning_no = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_external_warning_no", locale2);
  if (locale2 === "en") return en_convert_external_warning_no();
  if (locale2 === "es") return es_convert_external_warning_no();
  if (locale2 === "fr") return fr_convert_external_warning_no();
  if (locale2 === "de") return de_convert_external_warning_no();
  if (locale2 === "it") return it_convert_external_warning_no();
  if (locale2 === "hr") return hr_convert_external_warning_no();
  if (locale2 === "tr") return tr_convert_external_warning_no();
  if (locale2 === "ja") return ja_convert_external_warning_no();
  if (locale2 === "ko") return ko_convert_external_warning_no();
  if (locale2 === "el") return el_convert_external_warning_no();
  if (locale2 === "id") return id_convert_external_warning_no();
  if (locale2 === "zh-Hans") return zh_hans1_convert_external_warning_no();
  return zh_hant1_convert_external_warning_no();
};
const en_convert_panel_convert_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Convert all`;
  }
);
const es_convert_panel_convert_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Convertir todo`;
  }
);
const fr_convert_panel_convert_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Convertir tout`;
  }
);
const de_convert_panel_convert_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Alle konvertieren`;
  }
);
const it_convert_panel_convert_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Converti tutti`;
  }
);
const hr_convert_panel_convert_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pretvori sve`;
  }
);
const tr_convert_panel_convert_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tümünü dönüştür`;
  }
);
const ja_convert_panel_convert_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `すべて変換`;
  }
);
const ko_convert_panel_convert_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `모두 변환`;
  }
);
const el_convert_panel_convert_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μετατροπή όλων`;
  }
);
const id_convert_panel_convert_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konversi semua`;
  }
);
const zh_hans1_convert_panel_convert_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `全部转换`;
  }
);
const zh_hant1_convert_panel_convert_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `全部轉換`;
  }
);
const convert_panel_convert_all = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_panel_convert_all", locale2);
  if (locale2 === "en") return en_convert_panel_convert_all();
  if (locale2 === "es") return es_convert_panel_convert_all();
  if (locale2 === "fr") return fr_convert_panel_convert_all();
  if (locale2 === "de") return de_convert_panel_convert_all();
  if (locale2 === "it") return it_convert_panel_convert_all();
  if (locale2 === "hr") return hr_convert_panel_convert_all();
  if (locale2 === "tr") return tr_convert_panel_convert_all();
  if (locale2 === "ja") return ja_convert_panel_convert_all();
  if (locale2 === "ko") return ko_convert_panel_convert_all();
  if (locale2 === "el") return el_convert_panel_convert_all();
  if (locale2 === "id") return id_convert_panel_convert_all();
  if (locale2 === "zh-Hans") return zh_hans1_convert_panel_convert_all();
  return zh_hant1_convert_panel_convert_all();
};
const en_convert_panel_download_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Download all as .zip`;
  }
);
const es_convert_panel_download_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Comprimir todo`;
  }
);
const fr_convert_panel_download_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Télécharger l'ensemble au format .zip`;
  }
);
const de_convert_panel_download_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Alle als .zip herunterladen`;
  }
);
const it_convert_panel_download_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Scarica tutti come .zip`;
  }
);
const hr_convert_panel_download_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Preuzmi sve kao .zip`;
  }
);
const tr_convert_panel_download_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tümünü .zip olarak indir`;
  }
);
const ja_convert_panel_download_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `すべてを.zipでダウンロード`;
  }
);
const ko_convert_panel_download_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `.zip으로 다운로드`;
  }
);
const el_convert_panel_download_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Λήψη όλων ως .zip`;
  }
);
const id_convert_panel_download_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Unduh semua sebagai .zip`;
  }
);
const zh_hans1_convert_panel_download_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `下载全部为 .zip`;
  }
);
const zh_hant1_convert_panel_download_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `下載全部為 .zip`;
  }
);
const convert_panel_download_all = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_panel_download_all", locale2);
  if (locale2 === "en") return en_convert_panel_download_all();
  if (locale2 === "es") return es_convert_panel_download_all();
  if (locale2 === "fr") return fr_convert_panel_download_all();
  if (locale2 === "de") return de_convert_panel_download_all();
  if (locale2 === "it") return it_convert_panel_download_all();
  if (locale2 === "hr") return hr_convert_panel_download_all();
  if (locale2 === "tr") return tr_convert_panel_download_all();
  if (locale2 === "ja") return ja_convert_panel_download_all();
  if (locale2 === "ko") return ko_convert_panel_download_all();
  if (locale2 === "el") return el_convert_panel_download_all();
  if (locale2 === "id") return id_convert_panel_download_all();
  if (locale2 === "zh-Hans") return zh_hans1_convert_panel_download_all();
  return zh_hant1_convert_panel_download_all();
};
const en_convert_panel_remove_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Remove all files`;
  }
);
const es_convert_panel_remove_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Quitar todos los archivos`;
  }
);
const fr_convert_panel_remove_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Supprimer tous les fichiers`;
  }
);
const de_convert_panel_remove_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Alle Dateien entfernen`;
  }
);
const it_convert_panel_remove_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Rimuovi tutti i file`;
  }
);
const hr_convert_panel_remove_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Makni sve datoteke`;
  }
);
const tr_convert_panel_remove_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tüm dosyaları kaldır`;
  }
);
const ja_convert_panel_remove_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `すべてのファイルを削除`;
  }
);
const ko_convert_panel_remove_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `모든 파일 삭제`;
  }
);
const el_convert_panel_remove_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αφαίρεση όλων των αρχείων`;
  }
);
const id_convert_panel_remove_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Hapus semua berkas`;
  }
);
const zh_hans1_convert_panel_remove_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `删除所有文件`;
  }
);
const zh_hant1_convert_panel_remove_all = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `刪除所有檔案`;
  }
);
const convert_panel_remove_all = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_panel_remove_all", locale2);
  if (locale2 === "en") return en_convert_panel_remove_all();
  if (locale2 === "es") return es_convert_panel_remove_all();
  if (locale2 === "fr") return fr_convert_panel_remove_all();
  if (locale2 === "de") return de_convert_panel_remove_all();
  if (locale2 === "it") return it_convert_panel_remove_all();
  if (locale2 === "hr") return hr_convert_panel_remove_all();
  if (locale2 === "tr") return tr_convert_panel_remove_all();
  if (locale2 === "ja") return ja_convert_panel_remove_all();
  if (locale2 === "ko") return ko_convert_panel_remove_all();
  if (locale2 === "el") return el_convert_panel_remove_all();
  if (locale2 === "id") return id_convert_panel_remove_all();
  if (locale2 === "zh-Hans") return zh_hans1_convert_panel_remove_all();
  return zh_hant1_convert_panel_remove_all();
};
const en_convert_panel_set_all_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Set all to`;
  }
);
const es_convert_panel_set_all_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cambiar todos a`;
  }
);
const fr_convert_panel_set_all_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tout configurer sur`;
  }
);
const de_convert_panel_set_all_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Alle konvertieren nach`;
  }
);
const it_convert_panel_set_all_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Imposta tutti a`;
  }
);
const hr_convert_panel_set_all_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Stavi sve na`;
  }
);
const tr_convert_panel_set_all_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tümünü ayarla`;
  }
);
const ja_convert_panel_set_all_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `すべてを設定`;
  }
);
const ko_convert_panel_set_all_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `모두 다음으로 설정`;
  }
);
const el_convert_panel_set_all_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ορισμός όλων σε`;
  }
);
const id_convert_panel_set_all_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Atur semua ke`;
  }
);
const zh_hans1_convert_panel_set_all_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `全部设置为`;
  }
);
const zh_hant1_convert_panel_set_all_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `全部設定為`;
  }
);
const convert_panel_set_all_to = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_panel_set_all_to", locale2);
  if (locale2 === "en") return en_convert_panel_set_all_to();
  if (locale2 === "es") return es_convert_panel_set_all_to();
  if (locale2 === "fr") return fr_convert_panel_set_all_to();
  if (locale2 === "de") return de_convert_panel_set_all_to();
  if (locale2 === "it") return it_convert_panel_set_all_to();
  if (locale2 === "hr") return hr_convert_panel_set_all_to();
  if (locale2 === "tr") return tr_convert_panel_set_all_to();
  if (locale2 === "ja") return ja_convert_panel_set_all_to();
  if (locale2 === "ko") return ko_convert_panel_set_all_to();
  if (locale2 === "el") return el_convert_panel_set_all_to();
  if (locale2 === "id") return id_convert_panel_set_all_to();
  if (locale2 === "zh-Hans") return zh_hans1_convert_panel_set_all_to();
  return zh_hant1_convert_panel_set_all_to();
};
const en_convert_panel_na = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `N/A`;
  }
);
const es_convert_panel_na = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `N/A`;
  }
);
const fr_convert_panel_na = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `N/A`;
  }
);
const de_convert_panel_na = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `N/V`;
  }
);
const it_convert_panel_na = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `N/D`;
  }
);
const hr_convert_panel_na = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `N/A`;
  }
);
const tr_convert_panel_na = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `N/A`;
  }
);
const ja_convert_panel_na = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `該当なし`;
  }
);
const ko_convert_panel_na = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `N/A`;
  }
);
const el_convert_panel_na = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μ/Δ`;
  }
);
const id_convert_panel_na = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `N/A`;
  }
);
const zh_hans1_convert_panel_na = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `不适用`;
  }
);
const zh_hant1_convert_panel_na = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `不適用`;
  }
);
const convert_panel_na = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_panel_na", locale2);
  if (locale2 === "en") return en_convert_panel_na();
  if (locale2 === "es") return es_convert_panel_na();
  if (locale2 === "fr") return fr_convert_panel_na();
  if (locale2 === "de") return de_convert_panel_na();
  if (locale2 === "it") return it_convert_panel_na();
  if (locale2 === "hr") return hr_convert_panel_na();
  if (locale2 === "tr") return tr_convert_panel_na();
  if (locale2 === "ja") return ja_convert_panel_na();
  if (locale2 === "ko") return ko_convert_panel_na();
  if (locale2 === "el") return el_convert_panel_na();
  if (locale2 === "id") return id_convert_panel_na();
  if (locale2 === "zh-Hans") return zh_hans1_convert_panel_na();
  return zh_hant1_convert_panel_na();
};
const en_convert_dropdown_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const es_convert_dropdown_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const fr_convert_dropdown_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const de_convert_dropdown_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const it_convert_dropdown_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const hr_convert_dropdown_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const tr_convert_dropdown_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ses`;
  }
);
const ja_convert_dropdown_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音声`;
  }
);
const ko_convert_dropdown_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `오디오`;
  }
);
const el_convert_dropdown_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ήχος`;
  }
);
const id_convert_dropdown_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const zh_hans1_convert_dropdown_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音频`;
  }
);
const zh_hant1_convert_dropdown_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音訊`;
  }
);
const convert_dropdown_audio = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_dropdown_audio", locale2);
  if (locale2 === "en") return en_convert_dropdown_audio();
  if (locale2 === "es") return es_convert_dropdown_audio();
  if (locale2 === "fr") return fr_convert_dropdown_audio();
  if (locale2 === "de") return de_convert_dropdown_audio();
  if (locale2 === "it") return it_convert_dropdown_audio();
  if (locale2 === "hr") return hr_convert_dropdown_audio();
  if (locale2 === "tr") return tr_convert_dropdown_audio();
  if (locale2 === "ja") return ja_convert_dropdown_audio();
  if (locale2 === "ko") return ko_convert_dropdown_audio();
  if (locale2 === "el") return el_convert_dropdown_audio();
  if (locale2 === "id") return id_convert_dropdown_audio();
  if (locale2 === "zh-Hans") return zh_hans1_convert_dropdown_audio();
  return zh_hant1_convert_dropdown_audio();
};
const en_convert_dropdown_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const es_convert_dropdown_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Vídeo`;
  }
);
const fr_convert_dropdown_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const de_convert_dropdown_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const it_convert_dropdown_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const hr_convert_dropdown_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const tr_convert_dropdown_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const ja_convert_dropdown_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `動画`;
  }
);
const ko_convert_dropdown_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `비디오`;
  }
);
const el_convert_dropdown_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Βίντεο`;
  }
);
const id_convert_dropdown_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const zh_hans1_convert_dropdown_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `视频`;
  }
);
const zh_hant1_convert_dropdown_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `影片`;
  }
);
const convert_dropdown_video = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_dropdown_video", locale2);
  if (locale2 === "en") return en_convert_dropdown_video();
  if (locale2 === "es") return es_convert_dropdown_video();
  if (locale2 === "fr") return fr_convert_dropdown_video();
  if (locale2 === "de") return de_convert_dropdown_video();
  if (locale2 === "it") return it_convert_dropdown_video();
  if (locale2 === "hr") return hr_convert_dropdown_video();
  if (locale2 === "tr") return tr_convert_dropdown_video();
  if (locale2 === "ja") return ja_convert_dropdown_video();
  if (locale2 === "ko") return ko_convert_dropdown_video();
  if (locale2 === "el") return el_convert_dropdown_video();
  if (locale2 === "id") return id_convert_dropdown_video();
  if (locale2 === "zh-Hans") return zh_hans1_convert_dropdown_video();
  return zh_hant1_convert_dropdown_video();
};
const en_convert_dropdown_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Document`;
  }
);
const es_convert_dropdown_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Documento`;
  }
);
const fr_convert_dropdown_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Document`;
  }
);
const de_convert_dropdown_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dokument`;
  }
);
const it_convert_dropdown_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Documento`;
  }
);
const hr_convert_dropdown_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dokument`;
  }
);
const tr_convert_dropdown_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Belge`;
  }
);
const ja_convert_dropdown_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ドキュメント`;
  }
);
const ko_convert_dropdown_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `문서`;
  }
);
const el_convert_dropdown_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Έγγραφο`;
  }
);
const id_convert_dropdown_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dokumen`;
  }
);
const zh_hans1_convert_dropdown_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `文档`;
  }
);
const zh_hant1_convert_dropdown_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `文件`;
  }
);
const convert_dropdown_doc = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_dropdown_doc", locale2);
  if (locale2 === "en") return en_convert_dropdown_doc();
  if (locale2 === "es") return es_convert_dropdown_doc();
  if (locale2 === "fr") return fr_convert_dropdown_doc();
  if (locale2 === "de") return de_convert_dropdown_doc();
  if (locale2 === "it") return it_convert_dropdown_doc();
  if (locale2 === "hr") return hr_convert_dropdown_doc();
  if (locale2 === "tr") return tr_convert_dropdown_doc();
  if (locale2 === "ja") return ja_convert_dropdown_doc();
  if (locale2 === "ko") return ko_convert_dropdown_doc();
  if (locale2 === "el") return el_convert_dropdown_doc();
  if (locale2 === "id") return id_convert_dropdown_doc();
  if (locale2 === "zh-Hans") return zh_hans1_convert_dropdown_doc();
  return zh_hant1_convert_dropdown_doc();
};
const en_convert_dropdown_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Image`;
  }
);
const es_convert_dropdown_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Imagen`;
  }
);
const fr_convert_dropdown_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Image`;
  }
);
const de_convert_dropdown_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bild`;
  }
);
const it_convert_dropdown_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Immagine`;
  }
);
const hr_convert_dropdown_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Slika`;
  }
);
const tr_convert_dropdown_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Görsel`;
  }
);
const ja_convert_dropdown_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `画像`;
  }
);
const ko_convert_dropdown_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이미지`;
  }
);
const el_convert_dropdown_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Εικόνα`;
  }
);
const id_convert_dropdown_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Gambar`;
  }
);
const zh_hans1_convert_dropdown_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `图片`;
  }
);
const zh_hant1_convert_dropdown_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `圖片`;
  }
);
const convert_dropdown_image = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_dropdown_image", locale2);
  if (locale2 === "en") return en_convert_dropdown_image();
  if (locale2 === "es") return es_convert_dropdown_image();
  if (locale2 === "fr") return fr_convert_dropdown_image();
  if (locale2 === "de") return de_convert_dropdown_image();
  if (locale2 === "it") return it_convert_dropdown_image();
  if (locale2 === "hr") return hr_convert_dropdown_image();
  if (locale2 === "tr") return tr_convert_dropdown_image();
  if (locale2 === "ja") return ja_convert_dropdown_image();
  if (locale2 === "ko") return ko_convert_dropdown_image();
  if (locale2 === "el") return el_convert_dropdown_image();
  if (locale2 === "id") return id_convert_dropdown_image();
  if (locale2 === "zh-Hans") return zh_hans1_convert_dropdown_image();
  return zh_hant1_convert_dropdown_image();
};
const en_convert_dropdown_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Search format`;
  }
);
const es_convert_dropdown_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Buscar formato`;
  }
);
const fr_convert_dropdown_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Format de recherche`;
  }
);
const de_convert_dropdown_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Format suchen`;
  }
);
const it_convert_dropdown_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cerca formato`;
  }
);
const hr_convert_dropdown_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Potraži format`;
  }
);
const tr_convert_dropdown_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Format ara`;
  }
);
const ja_convert_dropdown_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `フォーマットを検索`;
  }
);
const ko_convert_dropdown_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `포맷 검색`;
  }
);
const el_convert_dropdown_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αναζήτηση μορφής`;
  }
);
const id_convert_dropdown_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cari format`;
  }
);
const zh_hans1_convert_dropdown_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `搜索格式`;
  }
);
const zh_hant1_convert_dropdown_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `搜尋格式`;
  }
);
const convert_dropdown_placeholder = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_dropdown_placeholder", locale2);
  if (locale2 === "en") return en_convert_dropdown_placeholder();
  if (locale2 === "es") return es_convert_dropdown_placeholder();
  if (locale2 === "fr") return fr_convert_dropdown_placeholder();
  if (locale2 === "de") return de_convert_dropdown_placeholder();
  if (locale2 === "it") return it_convert_dropdown_placeholder();
  if (locale2 === "hr") return hr_convert_dropdown_placeholder();
  if (locale2 === "tr") return tr_convert_dropdown_placeholder();
  if (locale2 === "ja") return ja_convert_dropdown_placeholder();
  if (locale2 === "ko") return ko_convert_dropdown_placeholder();
  if (locale2 === "el") return el_convert_dropdown_placeholder();
  if (locale2 === "id") return id_convert_dropdown_placeholder();
  if (locale2 === "zh-Hans") return zh_hans1_convert_dropdown_placeholder();
  return zh_hant1_convert_dropdown_placeholder();
};
const en_convert_dropdown_no_formats = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `No formats available`;
  }
);
const es_convert_dropdown_no_formats = en_convert_dropdown_no_formats;
const fr_convert_dropdown_no_formats = en_convert_dropdown_no_formats;
const de_convert_dropdown_no_formats = en_convert_dropdown_no_formats;
const it_convert_dropdown_no_formats = en_convert_dropdown_no_formats;
const hr_convert_dropdown_no_formats = en_convert_dropdown_no_formats;
const tr_convert_dropdown_no_formats = en_convert_dropdown_no_formats;
const ja_convert_dropdown_no_formats = en_convert_dropdown_no_formats;
const ko_convert_dropdown_no_formats = en_convert_dropdown_no_formats;
const el_convert_dropdown_no_formats = en_convert_dropdown_no_formats;
const id_convert_dropdown_no_formats = en_convert_dropdown_no_formats;
const zh_hans1_convert_dropdown_no_formats = en_convert_dropdown_no_formats;
const zh_hant1_convert_dropdown_no_formats = en_convert_dropdown_no_formats;
const convert_dropdown_no_formats = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_dropdown_no_formats", locale2);
  if (locale2 === "en") return en_convert_dropdown_no_formats();
  if (locale2 === "es") return es_convert_dropdown_no_formats();
  if (locale2 === "fr") return fr_convert_dropdown_no_formats();
  if (locale2 === "de") return de_convert_dropdown_no_formats();
  if (locale2 === "it") return it_convert_dropdown_no_formats();
  if (locale2 === "hr") return hr_convert_dropdown_no_formats();
  if (locale2 === "tr") return tr_convert_dropdown_no_formats();
  if (locale2 === "ja") return ja_convert_dropdown_no_formats();
  if (locale2 === "ko") return ko_convert_dropdown_no_formats();
  if (locale2 === "el") return el_convert_dropdown_no_formats();
  if (locale2 === "id") return id_convert_dropdown_no_formats();
  if (locale2 === "zh-Hans") return zh_hans1_convert_dropdown_no_formats();
  return zh_hant1_convert_dropdown_no_formats();
};
const en_convert_dropdown_no_results = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `No formats match your search`;
  }
);
const es_convert_dropdown_no_results = en_convert_dropdown_no_results;
const fr_convert_dropdown_no_results = en_convert_dropdown_no_results;
const de_convert_dropdown_no_results = en_convert_dropdown_no_results;
const it_convert_dropdown_no_results = en_convert_dropdown_no_results;
const hr_convert_dropdown_no_results = en_convert_dropdown_no_results;
const tr_convert_dropdown_no_results = en_convert_dropdown_no_results;
const ja_convert_dropdown_no_results = en_convert_dropdown_no_results;
const ko_convert_dropdown_no_results = en_convert_dropdown_no_results;
const el_convert_dropdown_no_results = en_convert_dropdown_no_results;
const id_convert_dropdown_no_results = en_convert_dropdown_no_results;
const zh_hans1_convert_dropdown_no_results = en_convert_dropdown_no_results;
const zh_hant1_convert_dropdown_no_results = en_convert_dropdown_no_results;
const convert_dropdown_no_results = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_dropdown_no_results", locale2);
  if (locale2 === "en") return en_convert_dropdown_no_results();
  if (locale2 === "es") return es_convert_dropdown_no_results();
  if (locale2 === "fr") return fr_convert_dropdown_no_results();
  if (locale2 === "de") return de_convert_dropdown_no_results();
  if (locale2 === "it") return it_convert_dropdown_no_results();
  if (locale2 === "hr") return hr_convert_dropdown_no_results();
  if (locale2 === "tr") return tr_convert_dropdown_no_results();
  if (locale2 === "ja") return ja_convert_dropdown_no_results();
  if (locale2 === "ko") return ko_convert_dropdown_no_results();
  if (locale2 === "el") return el_convert_dropdown_no_results();
  if (locale2 === "id") return id_convert_dropdown_no_results();
  if (locale2 === "zh-Hans") return zh_hans1_convert_dropdown_no_results();
  return zh_hant1_convert_dropdown_no_results();
};
const en_convert_tooltips_unknown_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Unknown file type`;
  }
);
const es_convert_tooltips_unknown_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Formato de archivo desconocido`;
  }
);
const fr_convert_tooltips_unknown_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Type de fichier inconnu`;
  }
);
const de_convert_tooltips_unknown_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Unbekannter Dateityp`;
  }
);
const it_convert_tooltips_unknown_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tipo di file sconosciuto`;
  }
);
const hr_convert_tooltips_unknown_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nepoznat tip datoteke`;
  }
);
const tr_convert_tooltips_unknown_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bilinmeyen dosya türü`;
  }
);
const ja_convert_tooltips_unknown_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `不明なファイルタイプ`;
  }
);
const ko_convert_tooltips_unknown_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `알 수 없는 파일 포맷`;
  }
);
const el_convert_tooltips_unknown_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Άγνωστος τύπος αρχείου`;
  }
);
const id_convert_tooltips_unknown_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Jenis berkas tidak diketahui`;
  }
);
const zh_hans1_convert_tooltips_unknown_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未知文件类型`;
  }
);
const zh_hant1_convert_tooltips_unknown_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未知檔案類型`;
  }
);
const convert_tooltips_unknown_file = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_tooltips_unknown_file", locale2);
  if (locale2 === "en") return en_convert_tooltips_unknown_file();
  if (locale2 === "es") return es_convert_tooltips_unknown_file();
  if (locale2 === "fr") return fr_convert_tooltips_unknown_file();
  if (locale2 === "de") return de_convert_tooltips_unknown_file();
  if (locale2 === "it") return it_convert_tooltips_unknown_file();
  if (locale2 === "hr") return hr_convert_tooltips_unknown_file();
  if (locale2 === "tr") return tr_convert_tooltips_unknown_file();
  if (locale2 === "ja") return ja_convert_tooltips_unknown_file();
  if (locale2 === "ko") return ko_convert_tooltips_unknown_file();
  if (locale2 === "el") return el_convert_tooltips_unknown_file();
  if (locale2 === "id") return id_convert_tooltips_unknown_file();
  if (locale2 === "zh-Hans") return zh_hans1_convert_tooltips_unknown_file();
  return zh_hant1_convert_tooltips_unknown_file();
};
const en_convert_tooltips_audio_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio file`;
  }
);
const es_convert_tooltips_audio_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const fr_convert_tooltips_audio_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Fichier audio`;
  }
);
const de_convert_tooltips_audio_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audiodatei`;
  }
);
const it_convert_tooltips_audio_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `File audio`;
  }
);
const hr_convert_tooltips_audio_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio datoteka`;
  }
);
const tr_convert_tooltips_audio_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ses dosyası`;
  }
);
const ja_convert_tooltips_audio_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音声ファイル`;
  }
);
const ko_convert_tooltips_audio_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `오디오 파일`;
  }
);
const el_convert_tooltips_audio_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αρχείο ήχου`;
  }
);
const id_convert_tooltips_audio_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Berkas audio`;
  }
);
const zh_hans1_convert_tooltips_audio_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音频文件`;
  }
);
const zh_hant1_convert_tooltips_audio_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音訊檔案`;
  }
);
const convert_tooltips_audio_file = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_tooltips_audio_file", locale2);
  if (locale2 === "en") return en_convert_tooltips_audio_file();
  if (locale2 === "es") return es_convert_tooltips_audio_file();
  if (locale2 === "fr") return fr_convert_tooltips_audio_file();
  if (locale2 === "de") return de_convert_tooltips_audio_file();
  if (locale2 === "it") return it_convert_tooltips_audio_file();
  if (locale2 === "hr") return hr_convert_tooltips_audio_file();
  if (locale2 === "tr") return tr_convert_tooltips_audio_file();
  if (locale2 === "ja") return ja_convert_tooltips_audio_file();
  if (locale2 === "ko") return ko_convert_tooltips_audio_file();
  if (locale2 === "el") return el_convert_tooltips_audio_file();
  if (locale2 === "id") return id_convert_tooltips_audio_file();
  if (locale2 === "zh-Hans") return zh_hans1_convert_tooltips_audio_file();
  return zh_hant1_convert_tooltips_audio_file();
};
const en_convert_tooltips_video_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video file`;
  }
);
const es_convert_tooltips_video_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Vídeo`;
  }
);
const fr_convert_tooltips_video_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Fichier vidéo`;
  }
);
const de_convert_tooltips_video_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Videodatei`;
  }
);
const it_convert_tooltips_video_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `File video`;
  }
);
const hr_convert_tooltips_video_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video datoteka`;
  }
);
const tr_convert_tooltips_video_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video dosyası`;
  }
);
const ja_convert_tooltips_video_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `動画ファイル`;
  }
);
const ko_convert_tooltips_video_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `비디오 파일`;
  }
);
const el_convert_tooltips_video_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αρχείο βίντεο`;
  }
);
const id_convert_tooltips_video_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Berkas video`;
  }
);
const zh_hans1_convert_tooltips_video_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `视频文件`;
  }
);
const zh_hant1_convert_tooltips_video_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `影片檔案`;
  }
);
const convert_tooltips_video_file = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_tooltips_video_file", locale2);
  if (locale2 === "en") return en_convert_tooltips_video_file();
  if (locale2 === "es") return es_convert_tooltips_video_file();
  if (locale2 === "fr") return fr_convert_tooltips_video_file();
  if (locale2 === "de") return de_convert_tooltips_video_file();
  if (locale2 === "it") return it_convert_tooltips_video_file();
  if (locale2 === "hr") return hr_convert_tooltips_video_file();
  if (locale2 === "tr") return tr_convert_tooltips_video_file();
  if (locale2 === "ja") return ja_convert_tooltips_video_file();
  if (locale2 === "ko") return ko_convert_tooltips_video_file();
  if (locale2 === "el") return el_convert_tooltips_video_file();
  if (locale2 === "id") return id_convert_tooltips_video_file();
  if (locale2 === "zh-Hans") return zh_hans1_convert_tooltips_video_file();
  return zh_hant1_convert_tooltips_video_file();
};
const en_convert_tooltips_document_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Document file`;
  }
);
const es_convert_tooltips_document_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Documento`;
  }
);
const fr_convert_tooltips_document_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Fichier document`;
  }
);
const de_convert_tooltips_document_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dokumentdatei`;
  }
);
const it_convert_tooltips_document_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `File documento`;
  }
);
const hr_convert_tooltips_document_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dokument`;
  }
);
const tr_convert_tooltips_document_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Belge dosyası`;
  }
);
const ja_convert_tooltips_document_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ドキュメントファイル`;
  }
);
const ko_convert_tooltips_document_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `문서 파일`;
  }
);
const el_convert_tooltips_document_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αρχείο εγγράφου`;
  }
);
const id_convert_tooltips_document_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Berkas dokumen`;
  }
);
const zh_hans1_convert_tooltips_document_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `文档文件`;
  }
);
const zh_hant1_convert_tooltips_document_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `文件檔案`;
  }
);
const convert_tooltips_document_file = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_tooltips_document_file", locale2);
  if (locale2 === "en") return en_convert_tooltips_document_file();
  if (locale2 === "es") return es_convert_tooltips_document_file();
  if (locale2 === "fr") return fr_convert_tooltips_document_file();
  if (locale2 === "de") return de_convert_tooltips_document_file();
  if (locale2 === "it") return it_convert_tooltips_document_file();
  if (locale2 === "hr") return hr_convert_tooltips_document_file();
  if (locale2 === "tr") return tr_convert_tooltips_document_file();
  if (locale2 === "ja") return ja_convert_tooltips_document_file();
  if (locale2 === "ko") return ko_convert_tooltips_document_file();
  if (locale2 === "el") return el_convert_tooltips_document_file();
  if (locale2 === "id") return id_convert_tooltips_document_file();
  if (locale2 === "zh-Hans") return zh_hans1_convert_tooltips_document_file();
  return zh_hant1_convert_tooltips_document_file();
};
const en_convert_tooltips_image_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Image file`;
  }
);
const es_convert_tooltips_image_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Imagen`;
  }
);
const fr_convert_tooltips_image_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Fichier image`;
  }
);
const de_convert_tooltips_image_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bilddatei`;
  }
);
const it_convert_tooltips_image_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `File immagine`;
  }
);
const hr_convert_tooltips_image_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Datoteka slike`;
  }
);
const tr_convert_tooltips_image_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Görsel dosyası`;
  }
);
const ja_convert_tooltips_image_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `画像ファイル`;
  }
);
const ko_convert_tooltips_image_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이미지 파일`;
  }
);
const el_convert_tooltips_image_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αρχείο εικόνας`;
  }
);
const id_convert_tooltips_image_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Berkas gambar`;
  }
);
const zh_hans1_convert_tooltips_image_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `图片文件`;
  }
);
const zh_hant1_convert_tooltips_image_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `圖片檔案`;
  }
);
const convert_tooltips_image_file = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_tooltips_image_file", locale2);
  if (locale2 === "en") return en_convert_tooltips_image_file();
  if (locale2 === "es") return es_convert_tooltips_image_file();
  if (locale2 === "fr") return fr_convert_tooltips_image_file();
  if (locale2 === "de") return de_convert_tooltips_image_file();
  if (locale2 === "it") return it_convert_tooltips_image_file();
  if (locale2 === "hr") return hr_convert_tooltips_image_file();
  if (locale2 === "tr") return tr_convert_tooltips_image_file();
  if (locale2 === "ja") return ja_convert_tooltips_image_file();
  if (locale2 === "ko") return ko_convert_tooltips_image_file();
  if (locale2 === "el") return el_convert_tooltips_image_file();
  if (locale2 === "id") return id_convert_tooltips_image_file();
  if (locale2 === "zh-Hans") return zh_hans1_convert_tooltips_image_file();
  return zh_hant1_convert_tooltips_image_file();
};
const en_convert_tooltips_convert_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Convert this file`;
  }
);
const es_convert_tooltips_convert_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Convertir este archivo`;
  }
);
const fr_convert_tooltips_convert_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Convertir ce fichier`;
  }
);
const de_convert_tooltips_convert_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Diese Datei konvertieren`;
  }
);
const it_convert_tooltips_convert_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Converti questo file`;
  }
);
const hr_convert_tooltips_convert_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pretvori ovu datoteku`;
  }
);
const tr_convert_tooltips_convert_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bu dosyayı dönüştür`;
  }
);
const ja_convert_tooltips_convert_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `このファイルを変換`;
  }
);
const ko_convert_tooltips_convert_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `파일 변환하기`;
  }
);
const el_convert_tooltips_convert_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μετατροπή αυτού του αρχείου`;
  }
);
const id_convert_tooltips_convert_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konversi berkas ini`;
  }
);
const zh_hans1_convert_tooltips_convert_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `转换此文件`;
  }
);
const zh_hant1_convert_tooltips_convert_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `轉換此檔案`;
  }
);
const convert_tooltips_convert_file = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_tooltips_convert_file", locale2);
  if (locale2 === "en") return en_convert_tooltips_convert_file();
  if (locale2 === "es") return es_convert_tooltips_convert_file();
  if (locale2 === "fr") return fr_convert_tooltips_convert_file();
  if (locale2 === "de") return de_convert_tooltips_convert_file();
  if (locale2 === "it") return it_convert_tooltips_convert_file();
  if (locale2 === "hr") return hr_convert_tooltips_convert_file();
  if (locale2 === "tr") return tr_convert_tooltips_convert_file();
  if (locale2 === "ja") return ja_convert_tooltips_convert_file();
  if (locale2 === "ko") return ko_convert_tooltips_convert_file();
  if (locale2 === "el") return el_convert_tooltips_convert_file();
  if (locale2 === "id") return id_convert_tooltips_convert_file();
  if (locale2 === "zh-Hans") return zh_hans1_convert_tooltips_convert_file();
  return zh_hant1_convert_tooltips_convert_file();
};
const en_convert_tooltips_download_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Download this file`;
  }
);
const es_convert_tooltips_download_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Descargar este archivo`;
  }
);
const fr_convert_tooltips_download_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Télécharger ce fichier`;
  }
);
const de_convert_tooltips_download_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Diese Datei herunterladen`;
  }
);
const it_convert_tooltips_download_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Scarica questo file`;
  }
);
const hr_convert_tooltips_download_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Preuzmi ovu datoteku`;
  }
);
const tr_convert_tooltips_download_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bu dosyayı indir`;
  }
);
const ja_convert_tooltips_download_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `このファイルをダウンロード`;
  }
);
const ko_convert_tooltips_download_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `파일 다운로드`;
  }
);
const el_convert_tooltips_download_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Λήψη αυτού του αρχείου`;
  }
);
const id_convert_tooltips_download_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Unduh berkas ini`;
  }
);
const zh_hans1_convert_tooltips_download_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `下载此文件`;
  }
);
const zh_hant1_convert_tooltips_download_file = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `下載此檔案`;
  }
);
const convert_tooltips_download_file = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_tooltips_download_file", locale2);
  if (locale2 === "en") return en_convert_tooltips_download_file();
  if (locale2 === "es") return es_convert_tooltips_download_file();
  if (locale2 === "fr") return fr_convert_tooltips_download_file();
  if (locale2 === "de") return de_convert_tooltips_download_file();
  if (locale2 === "it") return it_convert_tooltips_download_file();
  if (locale2 === "hr") return hr_convert_tooltips_download_file();
  if (locale2 === "tr") return tr_convert_tooltips_download_file();
  if (locale2 === "ja") return ja_convert_tooltips_download_file();
  if (locale2 === "ko") return ko_convert_tooltips_download_file();
  if (locale2 === "el") return el_convert_tooltips_download_file();
  if (locale2 === "id") return id_convert_tooltips_download_file();
  if (locale2 === "zh-Hans") return zh_hans1_convert_tooltips_download_file();
  return zh_hant1_convert_tooltips_download_file();
};
const en_convert_errors_cant_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `We can't convert this file.`;
  }
);
const es_convert_errors_cant_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `No podemos convertir este archivo.`;
  }
);
const fr_convert_errors_cant_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nous ne pouvons pas convertir ce fichier`;
  }
);
const de_convert_errors_cant_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Wir können diese Datei nicht konvertieren.`;
  }
);
const it_convert_errors_cant_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Non possiamo convertire questo file.`;
  }
);
const hr_convert_errors_cant_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ne možemo pretvoriti ovu datoteku.`;
  }
);
const tr_convert_errors_cant_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bu dosyayı dönüştüremiyoruz.`;
  }
);
const ja_convert_errors_cant_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `このファイルを変換できません。`;
  }
);
const ko_convert_errors_cant_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이 파일을 변환할 수 없습니다.`;
  }
);
const el_convert_errors_cant_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Δεν μπορούμε να μετατρέψουμε αυτό το αρχείο.`;
  }
);
const id_convert_errors_cant_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kami tidak dapat mengonversi berkas ini.`;
  }
);
const zh_hans1_convert_errors_cant_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `无法转换此文件。`;
  }
);
const zh_hant1_convert_errors_cant_convert = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `無法轉換此檔案。`;
  }
);
const convert_errors_cant_convert = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_cant_convert", locale2);
  if (locale2 === "en") return en_convert_errors_cant_convert();
  if (locale2 === "es") return es_convert_errors_cant_convert();
  if (locale2 === "fr") return fr_convert_errors_cant_convert();
  if (locale2 === "de") return de_convert_errors_cant_convert();
  if (locale2 === "it") return it_convert_errors_cant_convert();
  if (locale2 === "hr") return hr_convert_errors_cant_convert();
  if (locale2 === "tr") return tr_convert_errors_cant_convert();
  if (locale2 === "ja") return ja_convert_errors_cant_convert();
  if (locale2 === "ko") return ko_convert_errors_cant_convert();
  if (locale2 === "el") return el_convert_errors_cant_convert();
  if (locale2 === "id") return id_convert_errors_cant_convert();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_cant_convert();
  return zh_hant1_convert_errors_cant_convert();
};
const en_convert_errors_filetoolsd_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `what are you doing..? you're supposed to run the filetoolsd server!`;
  }
);
const es_convert_errors_filetoolsd_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `¿Qué estás haciendo..? ¡Debes ejecutar el servidor de filetoolsd!`;
  }
);
const fr_convert_errors_filetoolsd_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Que fais-tu ? Tu es censé exécuter sur le serveur filetoolsd !`;
  }
);
const de_convert_errors_filetoolsd_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Was machst du da..? Du sollst den filetoolsd-Server ausführen!`;
  }
);
const it_convert_errors_filetoolsd_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `cosa stai facendo...? dovresti eseguire il server filetoolsd!`;
  }
);
const hr_convert_errors_filetoolsd_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sunce ti žarko, što ti radiš!? Moraš pokrenuti filetoolsd server!`;
  }
);
const tr_convert_errors_filetoolsd_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ne yapıyorsun..? filetoolsd sunucusunu çalıştırman gerekiyordu!`;
  }
);
const ja_convert_errors_filetoolsd_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `何してるの..? filetoolsdサーバーを起動する必要があります！`;
  }
);
const ko_convert_errors_filetoolsd_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `뭐 하는거임? filetoolsd 서버부터 실행하셈`;
  }
);
const el_convert_errors_filetoolsd_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `τι κάνεις...; υποτίθεται ότι πρέπει να εκτελέσεις τον σέρβερ filetoolsd!`;
  }
);
const id_convert_errors_filetoolsd_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `apa yang kamu lakukan..? kamu seharusnya menjalankan peladen filetoolsd!`;
  }
);
const zh_hans1_convert_errors_filetoolsd_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `你在做什么...？你应该运行 filetoolsd 服务器！`;
  }
);
const zh_hant1_convert_errors_filetoolsd_server = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `你在做什麼...？你應該執行 filetoolsd 伺服器！`;
  }
);
const convert_errors_filetoolsd_server = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_server", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_server();
  if (locale2 === "es") return es_convert_errors_filetoolsd_server();
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_server();
  if (locale2 === "de") return de_convert_errors_filetoolsd_server();
  if (locale2 === "it") return it_convert_errors_filetoolsd_server();
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_server();
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_server();
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_server();
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_server();
  if (locale2 === "el") return el_convert_errors_filetoolsd_server();
  if (locale2 === "id") return id_convert_errors_filetoolsd_server();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_server();
  return zh_hant1_convert_errors_filetoolsd_server();
};
const en_convert_errors_filetoolsd_generic_view = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `View error details`;
  }
);
const ko_convert_errors_filetoolsd_generic_view = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `오류 세부정보 보기`;
  }
);
const zh_hans1_convert_errors_filetoolsd_generic_view = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `查看错误详情`;
  }
);
const zh_hant1_convert_errors_filetoolsd_generic_view = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `檢視錯誤詳情`;
  }
);
const es_convert_errors_filetoolsd_generic_view = en_convert_errors_filetoolsd_generic_view;
const fr_convert_errors_filetoolsd_generic_view = en_convert_errors_filetoolsd_generic_view;
const de_convert_errors_filetoolsd_generic_view = en_convert_errors_filetoolsd_generic_view;
const it_convert_errors_filetoolsd_generic_view = en_convert_errors_filetoolsd_generic_view;
const hr_convert_errors_filetoolsd_generic_view = en_convert_errors_filetoolsd_generic_view;
const tr_convert_errors_filetoolsd_generic_view = en_convert_errors_filetoolsd_generic_view;
const ja_convert_errors_filetoolsd_generic_view = en_convert_errors_filetoolsd_generic_view;
const el_convert_errors_filetoolsd_generic_view = en_convert_errors_filetoolsd_generic_view;
const id_convert_errors_filetoolsd_generic_view = en_convert_errors_filetoolsd_generic_view;
const convert_errors_filetoolsd_generic_view = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_generic_view", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_generic_view();
  if (locale2 === "es") return es_convert_errors_filetoolsd_generic_view();
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_generic_view();
  if (locale2 === "de") return de_convert_errors_filetoolsd_generic_view();
  if (locale2 === "it") return it_convert_errors_filetoolsd_generic_view();
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_generic_view();
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_generic_view();
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_generic_view();
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_generic_view();
  if (locale2 === "el") return el_convert_errors_filetoolsd_generic_view();
  if (locale2 === "id") return id_convert_errors_filetoolsd_generic_view();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_generic_view();
  return zh_hant1_convert_errors_filetoolsd_generic_view();
};
const en_convert_errors_filetoolsd_generic_body = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `An error occurred whilst whilst trying convert your video. Would you like to submit this video to the developers to help fix this bug? Only your video file will be sent. No identifiers will be uploaded.`;
  }
);
const it_convert_errors_filetoolsd_generic_body = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Si è verificato un errore durante il tentativo di conversione del tuo video. Vuoi inviare questo video agli sviluppatori per aiutare a risolvere questo bug? Verrà inviato solo il tuo file video. Nessun identificatore sarà caricato.`;
  }
);
const ko_convert_errors_filetoolsd_generic_body = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `비디오 변환 중 오류가 발생했습니다. 이 비디오를 개발자에게 전송해서 이 버그를 수정하는 데 도움을 주시겠습니까? 오직 비디오 파일만 전송됩니다. 익명으로 처리되며, 다른 개인 정보는 포함되지 않습니다.`;
  }
);
const el_convert_errors_filetoolsd_generic_body = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Παρουσιάστηκε σφάλμα κατά την προσπάθεια μετατροπής του βίντεό σας. Θέλετε να υποβάλετε αυτό το βίντεο στους προγραμματιστές για να βοηθήσετε στη διόρθωση αυτού του σφάλματος; Θα αποσταλεί μόνο το αρχείο βίντεό σας. Δεν θα μεταφορτωθούν αναγνωριστικά.`;
  }
);
const id_convert_errors_filetoolsd_generic_body = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Terjadi galat saat mencoba mengonversi video kamu. Apakah kamu ingin mengirimkan video ini ke pengembang untuk membantu memperbaiki kutu ini? Hanya berkas video kamu yang akan dikirim. Tidak ada data identifikasi yang diunggah.`;
  }
);
const zh_hans1_convert_errors_filetoolsd_generic_body = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `尝试转换视频时发生错误。你想将此视频提交给开发者以帮助修复此错误吗？只会发送你的视频文件，不会上传任何标识符。`;
  }
);
const zh_hant1_convert_errors_filetoolsd_generic_body = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `嘗試轉換影片時發生錯誤。你想將此影片提交給開發者以協助修復此錯誤嗎？只會傳送你的影片檔案，不會上傳任何識別碼。`;
  }
);
const es_convert_errors_filetoolsd_generic_body = en_convert_errors_filetoolsd_generic_body;
const fr_convert_errors_filetoolsd_generic_body = en_convert_errors_filetoolsd_generic_body;
const de_convert_errors_filetoolsd_generic_body = en_convert_errors_filetoolsd_generic_body;
const hr_convert_errors_filetoolsd_generic_body = en_convert_errors_filetoolsd_generic_body;
const tr_convert_errors_filetoolsd_generic_body = en_convert_errors_filetoolsd_generic_body;
const ja_convert_errors_filetoolsd_generic_body = en_convert_errors_filetoolsd_generic_body;
const convert_errors_filetoolsd_generic_body = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_generic_body", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_generic_body();
  if (locale2 === "es") return es_convert_errors_filetoolsd_generic_body();
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_generic_body();
  if (locale2 === "de") return de_convert_errors_filetoolsd_generic_body();
  if (locale2 === "it") return it_convert_errors_filetoolsd_generic_body();
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_generic_body();
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_generic_body();
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_generic_body();
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_generic_body();
  if (locale2 === "el") return el_convert_errors_filetoolsd_generic_body();
  if (locale2 === "id") return id_convert_errors_filetoolsd_generic_body();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_generic_body();
  return zh_hant1_convert_errors_filetoolsd_generic_body();
};
const en_convert_errors_filetoolsd_generic_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video conversion error`;
  }
);
const it_convert_errors_filetoolsd_generic_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Errore di conversione video`;
  }
);
const ko_convert_errors_filetoolsd_generic_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `비디오 변환 오류`;
  }
);
const el_convert_errors_filetoolsd_generic_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Σφάλμα μετατροπής βίντεο`;
  }
);
const id_convert_errors_filetoolsd_generic_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konversi video galat`;
  }
);
const zh_hans1_convert_errors_filetoolsd_generic_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `视频转换错误`;
  }
);
const zh_hant1_convert_errors_filetoolsd_generic_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `影片轉換錯誤`;
  }
);
const es_convert_errors_filetoolsd_generic_title = en_convert_errors_filetoolsd_generic_title;
const fr_convert_errors_filetoolsd_generic_title = en_convert_errors_filetoolsd_generic_title;
const de_convert_errors_filetoolsd_generic_title = en_convert_errors_filetoolsd_generic_title;
const hr_convert_errors_filetoolsd_generic_title = en_convert_errors_filetoolsd_generic_title;
const tr_convert_errors_filetoolsd_generic_title = en_convert_errors_filetoolsd_generic_title;
const ja_convert_errors_filetoolsd_generic_title = en_convert_errors_filetoolsd_generic_title;
const convert_errors_filetoolsd_generic_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_generic_title", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_generic_title();
  if (locale2 === "es") return es_convert_errors_filetoolsd_generic_title();
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_generic_title();
  if (locale2 === "de") return de_convert_errors_filetoolsd_generic_title();
  if (locale2 === "it") return it_convert_errors_filetoolsd_generic_title();
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_generic_title();
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_generic_title();
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_generic_title();
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_generic_title();
  if (locale2 === "el") return el_convert_errors_filetoolsd_generic_title();
  if (locale2 === "id") return id_convert_errors_filetoolsd_generic_title();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_generic_title();
  return zh_hant1_convert_errors_filetoolsd_generic_title();
};
const en_convert_errors_filetoolsd_generic_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Submit video`;
  }
);
const it_convert_errors_filetoolsd_generic_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Invia video`;
  }
);
const ko_convert_errors_filetoolsd_generic_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `비디오 전송`;
  }
);
const el_convert_errors_filetoolsd_generic_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Υποβολή βίντεο`;
  }
);
const id_convert_errors_filetoolsd_generic_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kirim video`;
  }
);
const zh_hans1_convert_errors_filetoolsd_generic_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `提交视频`;
  }
);
const zh_hant1_convert_errors_filetoolsd_generic_yes = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `提交影片`;
  }
);
const es_convert_errors_filetoolsd_generic_yes = en_convert_errors_filetoolsd_generic_yes;
const fr_convert_errors_filetoolsd_generic_yes = en_convert_errors_filetoolsd_generic_yes;
const de_convert_errors_filetoolsd_generic_yes = en_convert_errors_filetoolsd_generic_yes;
const hr_convert_errors_filetoolsd_generic_yes = en_convert_errors_filetoolsd_generic_yes;
const tr_convert_errors_filetoolsd_generic_yes = en_convert_errors_filetoolsd_generic_yes;
const ja_convert_errors_filetoolsd_generic_yes = en_convert_errors_filetoolsd_generic_yes;
const convert_errors_filetoolsd_generic_yes = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_generic_yes", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_generic_yes();
  if (locale2 === "es") return es_convert_errors_filetoolsd_generic_yes();
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_generic_yes();
  if (locale2 === "de") return de_convert_errors_filetoolsd_generic_yes();
  if (locale2 === "it") return it_convert_errors_filetoolsd_generic_yes();
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_generic_yes();
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_generic_yes();
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_generic_yes();
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_generic_yes();
  if (locale2 === "el") return el_convert_errors_filetoolsd_generic_yes();
  if (locale2 === "id") return id_convert_errors_filetoolsd_generic_yes();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_generic_yes();
  return zh_hant1_convert_errors_filetoolsd_generic_yes();
};
const en_convert_errors_filetoolsd_generic_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Don't submit`;
  }
);
const it_convert_errors_filetoolsd_generic_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Non inviare`;
  }
);
const ko_convert_errors_filetoolsd_generic_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `전송 안 함`;
  }
);
const el_convert_errors_filetoolsd_generic_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μην υποβάλετε`;
  }
);
const id_convert_errors_filetoolsd_generic_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Jangan kirim`;
  }
);
const zh_hans1_convert_errors_filetoolsd_generic_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `不提交`;
  }
);
const zh_hant1_convert_errors_filetoolsd_generic_no = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `不提交`;
  }
);
const es_convert_errors_filetoolsd_generic_no = en_convert_errors_filetoolsd_generic_no;
const fr_convert_errors_filetoolsd_generic_no = en_convert_errors_filetoolsd_generic_no;
const de_convert_errors_filetoolsd_generic_no = en_convert_errors_filetoolsd_generic_no;
const hr_convert_errors_filetoolsd_generic_no = en_convert_errors_filetoolsd_generic_no;
const tr_convert_errors_filetoolsd_generic_no = en_convert_errors_filetoolsd_generic_no;
const ja_convert_errors_filetoolsd_generic_no = en_convert_errors_filetoolsd_generic_no;
const convert_errors_filetoolsd_generic_no = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_generic_no", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_generic_no();
  if (locale2 === "es") return es_convert_errors_filetoolsd_generic_no();
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_generic_no();
  if (locale2 === "de") return de_convert_errors_filetoolsd_generic_no();
  if (locale2 === "it") return it_convert_errors_filetoolsd_generic_no();
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_generic_no();
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_generic_no();
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_generic_no();
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_generic_no();
  if (locale2 === "el") return el_convert_errors_filetoolsd_generic_no();
  if (locale2 === "id") return id_convert_errors_filetoolsd_generic_no();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_generic_no();
  return zh_hant1_convert_errors_filetoolsd_generic_no();
};
const en_convert_errors_filetoolsd_failed_to_keep = (
  /** @type {(inputs: { error: NonNullable<unknown> }) => string} */
  (i) => {
    return `Failed to keep the video on the server: ${i.error}`;
  }
);
const it_convert_errors_filetoolsd_failed_to_keep = (
  /** @type {(inputs: { error: NonNullable<unknown> }) => string} */
  (i) => {
    return `Impossibile mantenere il video sul server: ${i.error}`;
  }
);
const ko_convert_errors_filetoolsd_failed_to_keep = (
  /** @type {(inputs: { error: NonNullable<unknown> }) => string} */
  (i) => {
    return `영상을 서버에 저장하는데 실패했습니다: ${i.error}`;
  }
);
const el_convert_errors_filetoolsd_failed_to_keep = (
  /** @type {(inputs: { error: NonNullable<unknown> }) => string} */
  (i) => {
    return `Αποτυχία διατήρησης του βίντεο στον σέρβερ: ${i.error}`;
  }
);
const id_convert_errors_filetoolsd_failed_to_keep = (
  /** @type {(inputs: { error: NonNullable<unknown> }) => string} */
  (i) => {
    return `Gagal menyimpan video di peladen: ${i.error}`;
  }
);
const zh_hans1_convert_errors_filetoolsd_failed_to_keep = (
  /** @type {(inputs: { error: NonNullable<unknown> }) => string} */
  (i) => {
    return `无法在服务器上保留视频：${i.error}`;
  }
);
const zh_hant1_convert_errors_filetoolsd_failed_to_keep = (
  /** @type {(inputs: { error: NonNullable<unknown> }) => string} */
  (i) => {
    return `無法在伺服器上保留影片：${i.error}`;
  }
);
const es_convert_errors_filetoolsd_failed_to_keep = en_convert_errors_filetoolsd_failed_to_keep;
const fr_convert_errors_filetoolsd_failed_to_keep = en_convert_errors_filetoolsd_failed_to_keep;
const de_convert_errors_filetoolsd_failed_to_keep = en_convert_errors_filetoolsd_failed_to_keep;
const hr_convert_errors_filetoolsd_failed_to_keep = en_convert_errors_filetoolsd_failed_to_keep;
const tr_convert_errors_filetoolsd_failed_to_keep = en_convert_errors_filetoolsd_failed_to_keep;
const ja_convert_errors_filetoolsd_failed_to_keep = en_convert_errors_filetoolsd_failed_to_keep;
const convert_errors_filetoolsd_failed_to_keep = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_failed_to_keep", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_failed_to_keep(inputs);
  if (locale2 === "es") return es_convert_errors_filetoolsd_failed_to_keep(inputs);
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_failed_to_keep(inputs);
  if (locale2 === "de") return de_convert_errors_filetoolsd_failed_to_keep(inputs);
  if (locale2 === "it") return it_convert_errors_filetoolsd_failed_to_keep(inputs);
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_failed_to_keep(inputs);
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_failed_to_keep(inputs);
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_failed_to_keep(inputs);
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_failed_to_keep(inputs);
  if (locale2 === "el") return el_convert_errors_filetoolsd_failed_to_keep(inputs);
  if (locale2 === "id") return id_convert_errors_filetoolsd_failed_to_keep(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_failed_to_keep(inputs);
  return zh_hant1_convert_errors_filetoolsd_failed_to_keep(inputs);
};
const en_convert_errors_filetoolsd_details = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `View error details`;
  }
);
const ko_convert_errors_filetoolsd_details = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `오류 세부정보 보기`;
  }
);
const zh_hans1_convert_errors_filetoolsd_details = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `查看错误详情`;
  }
);
const zh_hant1_convert_errors_filetoolsd_details = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `檢視錯誤詳情`;
  }
);
const es_convert_errors_filetoolsd_details = en_convert_errors_filetoolsd_details;
const fr_convert_errors_filetoolsd_details = en_convert_errors_filetoolsd_details;
const de_convert_errors_filetoolsd_details = en_convert_errors_filetoolsd_details;
const it_convert_errors_filetoolsd_details = en_convert_errors_filetoolsd_details;
const hr_convert_errors_filetoolsd_details = en_convert_errors_filetoolsd_details;
const tr_convert_errors_filetoolsd_details = en_convert_errors_filetoolsd_details;
const ja_convert_errors_filetoolsd_details = en_convert_errors_filetoolsd_details;
const el_convert_errors_filetoolsd_details = en_convert_errors_filetoolsd_details;
const id_convert_errors_filetoolsd_details = en_convert_errors_filetoolsd_details;
const convert_errors_filetoolsd_details = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_details", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_details();
  if (locale2 === "es") return es_convert_errors_filetoolsd_details();
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_details();
  if (locale2 === "de") return de_convert_errors_filetoolsd_details();
  if (locale2 === "it") return it_convert_errors_filetoolsd_details();
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_details();
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_details();
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_details();
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_details();
  if (locale2 === "el") return el_convert_errors_filetoolsd_details();
  if (locale2 === "id") return id_convert_errors_filetoolsd_details();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_details();
  return zh_hant1_convert_errors_filetoolsd_details();
};
const en_convert_errors_filetoolsd_details_body = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `If you press submit, <b>your video will also be attached</b> alongside the error log which is always reported to us for review. The following information is the log that we automatically receive:`;
  }
);
const ko_convert_errors_filetoolsd_details_body = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `제출을 누르면, 검토를 위해 항상 보고되는 오류 로그와 함께 <b>동영상도 첨부</b>됩니다. 아래 정보는 우리가 자동으로 받는 로그입니다:`;
  }
);
const zh_hans1_convert_errors_filetoolsd_details_body = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `如果你按下提交，<b>你的视频也会被附加</b>在错误日志旁边，日志会自动报告给我们审核。以下信息是我们自动接收的日志：`;
  }
);
const zh_hant1_convert_errors_filetoolsd_details_body = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `如果你按下提交，<b>你的影片也會被附加</b>在錯誤日誌旁邊，日誌會自動報告給我們審核。以下資訊是我們自動接收的日誌：`;
  }
);
const es_convert_errors_filetoolsd_details_body = en_convert_errors_filetoolsd_details_body;
const fr_convert_errors_filetoolsd_details_body = en_convert_errors_filetoolsd_details_body;
const de_convert_errors_filetoolsd_details_body = en_convert_errors_filetoolsd_details_body;
const it_convert_errors_filetoolsd_details_body = en_convert_errors_filetoolsd_details_body;
const hr_convert_errors_filetoolsd_details_body = en_convert_errors_filetoolsd_details_body;
const tr_convert_errors_filetoolsd_details_body = en_convert_errors_filetoolsd_details_body;
const ja_convert_errors_filetoolsd_details_body = en_convert_errors_filetoolsd_details_body;
const el_convert_errors_filetoolsd_details_body = en_convert_errors_filetoolsd_details_body;
const id_convert_errors_filetoolsd_details_body = en_convert_errors_filetoolsd_details_body;
const convert_errors_filetoolsd_details_body = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_details_body", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_details_body();
  if (locale2 === "es") return es_convert_errors_filetoolsd_details_body();
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_details_body();
  if (locale2 === "de") return de_convert_errors_filetoolsd_details_body();
  if (locale2 === "it") return it_convert_errors_filetoolsd_details_body();
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_details_body();
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_details_body();
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_details_body();
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_details_body();
  if (locale2 === "el") return el_convert_errors_filetoolsd_details_body();
  if (locale2 === "id") return id_convert_errors_filetoolsd_details_body();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_details_body();
  return zh_hant1_convert_errors_filetoolsd_details_body();
};
const en_convert_errors_filetoolsd_details_footer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `This information will only be used for troubleshooting purposes and will never be shared. View our [privacy_link]privacy policy[/privacy_link] for more details.`;
  }
);
const ko_convert_errors_filetoolsd_details_footer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이 정보는 문제 해결 목적으로만 사용되며 절대 공유되지 않습니다. 자세한 내용은 [privacy_link]개인정보 처리방침[/privacy_link]을 확인하세요.`;
  }
);
const zh_hans1_convert_errors_filetoolsd_details_footer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `此信息仅用于故障排查，绝不会被共享。查看我们的[privacy_link]隐私政策[/privacy_link]了解更多详情。`;
  }
);
const zh_hant1_convert_errors_filetoolsd_details_footer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `此資訊僅用於故障排除，絕不會被分享。檢視我們的[privacy_link]隱私權政策[/privacy_link]以了解更多詳情。`;
  }
);
const es_convert_errors_filetoolsd_details_footer = en_convert_errors_filetoolsd_details_footer;
const fr_convert_errors_filetoolsd_details_footer = en_convert_errors_filetoolsd_details_footer;
const de_convert_errors_filetoolsd_details_footer = en_convert_errors_filetoolsd_details_footer;
const it_convert_errors_filetoolsd_details_footer = en_convert_errors_filetoolsd_details_footer;
const hr_convert_errors_filetoolsd_details_footer = en_convert_errors_filetoolsd_details_footer;
const tr_convert_errors_filetoolsd_details_footer = en_convert_errors_filetoolsd_details_footer;
const ja_convert_errors_filetoolsd_details_footer = en_convert_errors_filetoolsd_details_footer;
const el_convert_errors_filetoolsd_details_footer = en_convert_errors_filetoolsd_details_footer;
const id_convert_errors_filetoolsd_details_footer = en_convert_errors_filetoolsd_details_footer;
const convert_errors_filetoolsd_details_footer = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_details_footer", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_details_footer();
  if (locale2 === "es") return es_convert_errors_filetoolsd_details_footer();
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_details_footer();
  if (locale2 === "de") return de_convert_errors_filetoolsd_details_footer();
  if (locale2 === "it") return it_convert_errors_filetoolsd_details_footer();
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_details_footer();
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_details_footer();
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_details_footer();
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_details_footer();
  if (locale2 === "el") return el_convert_errors_filetoolsd_details_footer();
  if (locale2 === "id") return id_convert_errors_filetoolsd_details_footer();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_details_footer();
  return zh_hant1_convert_errors_filetoolsd_details_footer();
};
const en_convert_errors_filetoolsd_details_job_id = (
  /** @type {(inputs: { jobId: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>Job ID:</b> ${i.jobId}`;
  }
);
const ko_convert_errors_filetoolsd_details_job_id = (
  /** @type {(inputs: { jobId: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>작업 ID:</b> ${i.jobId}`;
  }
);
const zh_hans1_convert_errors_filetoolsd_details_job_id = (
  /** @type {(inputs: { jobId: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>任务 ID：</b>${i.jobId}`;
  }
);
const zh_hant1_convert_errors_filetoolsd_details_job_id = (
  /** @type {(inputs: { jobId: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>任務 ID：</b>${i.jobId}`;
  }
);
const es_convert_errors_filetoolsd_details_job_id = en_convert_errors_filetoolsd_details_job_id;
const fr_convert_errors_filetoolsd_details_job_id = en_convert_errors_filetoolsd_details_job_id;
const de_convert_errors_filetoolsd_details_job_id = en_convert_errors_filetoolsd_details_job_id;
const it_convert_errors_filetoolsd_details_job_id = en_convert_errors_filetoolsd_details_job_id;
const hr_convert_errors_filetoolsd_details_job_id = en_convert_errors_filetoolsd_details_job_id;
const tr_convert_errors_filetoolsd_details_job_id = en_convert_errors_filetoolsd_details_job_id;
const ja_convert_errors_filetoolsd_details_job_id = en_convert_errors_filetoolsd_details_job_id;
const el_convert_errors_filetoolsd_details_job_id = en_convert_errors_filetoolsd_details_job_id;
const id_convert_errors_filetoolsd_details_job_id = en_convert_errors_filetoolsd_details_job_id;
const convert_errors_filetoolsd_details_job_id = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_details_job_id", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_details_job_id(inputs);
  if (locale2 === "es") return es_convert_errors_filetoolsd_details_job_id(inputs);
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_details_job_id(inputs);
  if (locale2 === "de") return de_convert_errors_filetoolsd_details_job_id(inputs);
  if (locale2 === "it") return it_convert_errors_filetoolsd_details_job_id(inputs);
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_details_job_id(inputs);
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_details_job_id(inputs);
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_details_job_id(inputs);
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_details_job_id(inputs);
  if (locale2 === "el") return el_convert_errors_filetoolsd_details_job_id(inputs);
  if (locale2 === "id") return id_convert_errors_filetoolsd_details_job_id(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_details_job_id(inputs);
  return zh_hant1_convert_errors_filetoolsd_details_job_id(inputs);
};
const en_convert_errors_filetoolsd_details_from = (
  /** @type {(inputs: { from: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>From format:</b> ${i.from}`;
  }
);
const ko_convert_errors_filetoolsd_details_from = (
  /** @type {(inputs: { from: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>원본 포맷:</b> ${i.from}`;
  }
);
const zh_hans1_convert_errors_filetoolsd_details_from = (
  /** @type {(inputs: { from: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>来源格式：</b>${i.from}`;
  }
);
const zh_hant1_convert_errors_filetoolsd_details_from = (
  /** @type {(inputs: { from: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>來源格式：</b>${i.from}`;
  }
);
const es_convert_errors_filetoolsd_details_from = en_convert_errors_filetoolsd_details_from;
const fr_convert_errors_filetoolsd_details_from = en_convert_errors_filetoolsd_details_from;
const de_convert_errors_filetoolsd_details_from = en_convert_errors_filetoolsd_details_from;
const it_convert_errors_filetoolsd_details_from = en_convert_errors_filetoolsd_details_from;
const hr_convert_errors_filetoolsd_details_from = en_convert_errors_filetoolsd_details_from;
const tr_convert_errors_filetoolsd_details_from = en_convert_errors_filetoolsd_details_from;
const ja_convert_errors_filetoolsd_details_from = en_convert_errors_filetoolsd_details_from;
const el_convert_errors_filetoolsd_details_from = en_convert_errors_filetoolsd_details_from;
const id_convert_errors_filetoolsd_details_from = en_convert_errors_filetoolsd_details_from;
const convert_errors_filetoolsd_details_from = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_details_from", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_details_from(inputs);
  if (locale2 === "es") return es_convert_errors_filetoolsd_details_from(inputs);
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_details_from(inputs);
  if (locale2 === "de") return de_convert_errors_filetoolsd_details_from(inputs);
  if (locale2 === "it") return it_convert_errors_filetoolsd_details_from(inputs);
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_details_from(inputs);
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_details_from(inputs);
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_details_from(inputs);
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_details_from(inputs);
  if (locale2 === "el") return el_convert_errors_filetoolsd_details_from(inputs);
  if (locale2 === "id") return id_convert_errors_filetoolsd_details_from(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_details_from(inputs);
  return zh_hant1_convert_errors_filetoolsd_details_from(inputs);
};
const en_convert_errors_filetoolsd_details_to = (
  /** @type {(inputs: { to: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>To format:</b> ${i.to}`;
  }
);
const ko_convert_errors_filetoolsd_details_to = (
  /** @type {(inputs: { to: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>변환 포맷:</b> ${i.to}`;
  }
);
const zh_hans1_convert_errors_filetoolsd_details_to = (
  /** @type {(inputs: { to: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>目标格式：</b>${i.to}`;
  }
);
const zh_hant1_convert_errors_filetoolsd_details_to = (
  /** @type {(inputs: { to: NonNullable<unknown> }) => string} */
  (i) => {
    return `<b>目標格式：</b>${i.to}`;
  }
);
const es_convert_errors_filetoolsd_details_to = en_convert_errors_filetoolsd_details_to;
const fr_convert_errors_filetoolsd_details_to = en_convert_errors_filetoolsd_details_to;
const de_convert_errors_filetoolsd_details_to = en_convert_errors_filetoolsd_details_to;
const it_convert_errors_filetoolsd_details_to = en_convert_errors_filetoolsd_details_to;
const hr_convert_errors_filetoolsd_details_to = en_convert_errors_filetoolsd_details_to;
const tr_convert_errors_filetoolsd_details_to = en_convert_errors_filetoolsd_details_to;
const ja_convert_errors_filetoolsd_details_to = en_convert_errors_filetoolsd_details_to;
const el_convert_errors_filetoolsd_details_to = en_convert_errors_filetoolsd_details_to;
const id_convert_errors_filetoolsd_details_to = en_convert_errors_filetoolsd_details_to;
const convert_errors_filetoolsd_details_to = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_details_to", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_details_to(inputs);
  if (locale2 === "es") return es_convert_errors_filetoolsd_details_to(inputs);
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_details_to(inputs);
  if (locale2 === "de") return de_convert_errors_filetoolsd_details_to(inputs);
  if (locale2 === "it") return it_convert_errors_filetoolsd_details_to(inputs);
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_details_to(inputs);
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_details_to(inputs);
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_details_to(inputs);
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_details_to(inputs);
  if (locale2 === "el") return el_convert_errors_filetoolsd_details_to(inputs);
  if (locale2 === "id") return id_convert_errors_filetoolsd_details_to(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_details_to(inputs);
  return zh_hant1_convert_errors_filetoolsd_details_to(inputs);
};
const en_convert_errors_filetoolsd_details_error_message = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>Error message:</b> [view_link]View error logs[/view_link]`;
  }
);
const ko_convert_errors_filetoolsd_details_error_message = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>오류 메시지:</b> [view_link]오류 로그 보기[/view_link]`;
  }
);
const zh_hans1_convert_errors_filetoolsd_details_error_message = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>错误消息：</b>[view_link]查看错误日志[/view_link]`;
  }
);
const zh_hant1_convert_errors_filetoolsd_details_error_message = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>錯誤訊息：</b>[view_link]檢視錯誤日誌[/view_link]`;
  }
);
const es_convert_errors_filetoolsd_details_error_message = en_convert_errors_filetoolsd_details_error_message;
const fr_convert_errors_filetoolsd_details_error_message = en_convert_errors_filetoolsd_details_error_message;
const de_convert_errors_filetoolsd_details_error_message = en_convert_errors_filetoolsd_details_error_message;
const it_convert_errors_filetoolsd_details_error_message = en_convert_errors_filetoolsd_details_error_message;
const hr_convert_errors_filetoolsd_details_error_message = en_convert_errors_filetoolsd_details_error_message;
const tr_convert_errors_filetoolsd_details_error_message = en_convert_errors_filetoolsd_details_error_message;
const ja_convert_errors_filetoolsd_details_error_message = en_convert_errors_filetoolsd_details_error_message;
const el_convert_errors_filetoolsd_details_error_message = en_convert_errors_filetoolsd_details_error_message;
const id_convert_errors_filetoolsd_details_error_message = en_convert_errors_filetoolsd_details_error_message;
const convert_errors_filetoolsd_details_error_message = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_details_error_message", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_details_error_message();
  if (locale2 === "es") return es_convert_errors_filetoolsd_details_error_message();
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_details_error_message();
  if (locale2 === "de") return de_convert_errors_filetoolsd_details_error_message();
  if (locale2 === "it") return it_convert_errors_filetoolsd_details_error_message();
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_details_error_message();
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_details_error_message();
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_details_error_message();
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_details_error_message();
  if (locale2 === "el") return el_convert_errors_filetoolsd_details_error_message();
  if (locale2 === "id") return id_convert_errors_filetoolsd_details_error_message();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_details_error_message();
  return zh_hant1_convert_errors_filetoolsd_details_error_message();
};
const en_convert_errors_filetoolsd_details_close = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Close`;
  }
);
const ko_convert_errors_filetoolsd_details_close = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `닫기`;
  }
);
const zh_hans1_convert_errors_filetoolsd_details_close = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `关闭`;
  }
);
const zh_hant1_convert_errors_filetoolsd_details_close = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `關閉`;
  }
);
const es_convert_errors_filetoolsd_details_close = en_convert_errors_filetoolsd_details_close;
const fr_convert_errors_filetoolsd_details_close = en_convert_errors_filetoolsd_details_close;
const de_convert_errors_filetoolsd_details_close = en_convert_errors_filetoolsd_details_close;
const it_convert_errors_filetoolsd_details_close = en_convert_errors_filetoolsd_details_close;
const hr_convert_errors_filetoolsd_details_close = en_convert_errors_filetoolsd_details_close;
const tr_convert_errors_filetoolsd_details_close = en_convert_errors_filetoolsd_details_close;
const ja_convert_errors_filetoolsd_details_close = en_convert_errors_filetoolsd_details_close;
const el_convert_errors_filetoolsd_details_close = en_convert_errors_filetoolsd_details_close;
const id_convert_errors_filetoolsd_details_close = en_convert_errors_filetoolsd_details_close;
const convert_errors_filetoolsd_details_close = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_details_close", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_details_close();
  if (locale2 === "es") return es_convert_errors_filetoolsd_details_close();
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_details_close();
  if (locale2 === "de") return de_convert_errors_filetoolsd_details_close();
  if (locale2 === "it") return it_convert_errors_filetoolsd_details_close();
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_details_close();
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_details_close();
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_details_close();
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_details_close();
  if (locale2 === "el") return el_convert_errors_filetoolsd_details_close();
  if (locale2 === "id") return id_convert_errors_filetoolsd_details_close();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_details_close();
  return zh_hant1_convert_errors_filetoolsd_details_close();
};
const en_convert_errors_filetoolsd_ratelimit = (
  /** @type {(inputs: { filename: NonNullable<unknown> }) => string} */
  (i) => {
    return `Your video, '${i.filename}', has failed to convert a few times. To prevent server overload, further conversion attempts for this file have been temporarily blocked. Please try again later.`;
  }
);
const es_convert_errors_filetoolsd_ratelimit = en_convert_errors_filetoolsd_ratelimit;
const fr_convert_errors_filetoolsd_ratelimit = en_convert_errors_filetoolsd_ratelimit;
const de_convert_errors_filetoolsd_ratelimit = en_convert_errors_filetoolsd_ratelimit;
const it_convert_errors_filetoolsd_ratelimit = en_convert_errors_filetoolsd_ratelimit;
const hr_convert_errors_filetoolsd_ratelimit = en_convert_errors_filetoolsd_ratelimit;
const tr_convert_errors_filetoolsd_ratelimit = en_convert_errors_filetoolsd_ratelimit;
const ja_convert_errors_filetoolsd_ratelimit = en_convert_errors_filetoolsd_ratelimit;
const ko_convert_errors_filetoolsd_ratelimit = en_convert_errors_filetoolsd_ratelimit;
const el_convert_errors_filetoolsd_ratelimit = en_convert_errors_filetoolsd_ratelimit;
const id_convert_errors_filetoolsd_ratelimit = en_convert_errors_filetoolsd_ratelimit;
const zh_hans1_convert_errors_filetoolsd_ratelimit = en_convert_errors_filetoolsd_ratelimit;
const zh_hant1_convert_errors_filetoolsd_ratelimit = en_convert_errors_filetoolsd_ratelimit;
const convert_errors_filetoolsd_ratelimit = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_ratelimit", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_ratelimit(inputs);
  if (locale2 === "es") return es_convert_errors_filetoolsd_ratelimit(inputs);
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_ratelimit(inputs);
  if (locale2 === "de") return de_convert_errors_filetoolsd_ratelimit(inputs);
  if (locale2 === "it") return it_convert_errors_filetoolsd_ratelimit(inputs);
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_ratelimit(inputs);
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_ratelimit(inputs);
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_ratelimit(inputs);
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_ratelimit(inputs);
  if (locale2 === "el") return el_convert_errors_filetoolsd_ratelimit(inputs);
  if (locale2 === "id") return id_convert_errors_filetoolsd_ratelimit(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_ratelimit(inputs);
  return zh_hant1_convert_errors_filetoolsd_ratelimit(inputs);
};
const en_convert_errors_unsupported_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Only image, video, audio, and document files are supported`;
  }
);
const es_convert_errors_unsupported_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Solo aceptamos imágenes, vídeos, audios y documentos.`;
  }
);
const fr_convert_errors_unsupported_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Seuls les fichiers image, vidéo, audio et document sont pris en charge`;
  }
);
const de_convert_errors_unsupported_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Es werden nur Bild-, Video-, Audio- und Dokumentdateien unterstützt.`;
  }
);
const it_convert_errors_unsupported_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sono supportati solo file immagine, video, audio e documento`;
  }
);
const hr_convert_errors_unsupported_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Podržane su samo slike, videozapisi, audio i dokumenti`;
  }
);
const tr_convert_errors_unsupported_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Yalnızca görüntü, video, ses ve belge dosyaları desteklenir.`;
  }
);
const ja_convert_errors_unsupported_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `画像、動画、音声、ドキュメントのみ対応しています`;
  }
);
const ko_convert_errors_unsupported_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이미지, 비디오, 오디오 및 문서 파일만 지원됩니다.`;
  }
);
const el_convert_errors_unsupported_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Υποστηρίζονται μόνο αρχεία εικόνας, βίντεο, ήχου και εγγράφων`;
  }
);
const id_convert_errors_unsupported_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Hanya berkas gambar, video, audio, dan dokumen yang didukung`;
  }
);
const zh_hans1_convert_errors_unsupported_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `仅支持图片、视频、音频和文档文件`;
  }
);
const zh_hant1_convert_errors_unsupported_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `僅支援圖片、影片、音訊和文件檔案`;
  }
);
const convert_errors_unsupported_format = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_unsupported_format", locale2);
  if (locale2 === "en") return en_convert_errors_unsupported_format();
  if (locale2 === "es") return es_convert_errors_unsupported_format();
  if (locale2 === "fr") return fr_convert_errors_unsupported_format();
  if (locale2 === "de") return de_convert_errors_unsupported_format();
  if (locale2 === "it") return it_convert_errors_unsupported_format();
  if (locale2 === "hr") return hr_convert_errors_unsupported_format();
  if (locale2 === "tr") return tr_convert_errors_unsupported_format();
  if (locale2 === "ja") return ja_convert_errors_unsupported_format();
  if (locale2 === "ko") return ko_convert_errors_unsupported_format();
  if (locale2 === "el") return el_convert_errors_unsupported_format();
  if (locale2 === "id") return id_convert_errors_unsupported_format();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_unsupported_format();
  return zh_hant1_convert_errors_unsupported_format();
};
const en_convert_errors_format_output_only = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `This format can currently only be used as output (converted to), not as input.`;
  }
);
const ko_convert_errors_format_output_only = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이 포맷은 현재 입력으로 사용할 수 없으며 (변환된)출력으로만 사용할 수 있습니다.`;
  }
);
const zh_hans1_convert_errors_format_output_only = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `此格式目前只能用作输出（转换目标），不能用作输入。`;
  }
);
const zh_hant1_convert_errors_format_output_only = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `此格式目前只能用作輸出（轉換目標），不能用作輸入。`;
  }
);
const es_convert_errors_format_output_only = en_convert_errors_format_output_only;
const fr_convert_errors_format_output_only = en_convert_errors_format_output_only;
const de_convert_errors_format_output_only = en_convert_errors_format_output_only;
const it_convert_errors_format_output_only = en_convert_errors_format_output_only;
const hr_convert_errors_format_output_only = en_convert_errors_format_output_only;
const tr_convert_errors_format_output_only = en_convert_errors_format_output_only;
const ja_convert_errors_format_output_only = en_convert_errors_format_output_only;
const el_convert_errors_format_output_only = en_convert_errors_format_output_only;
const id_convert_errors_format_output_only = en_convert_errors_format_output_only;
const convert_errors_format_output_only = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_format_output_only", locale2);
  if (locale2 === "en") return en_convert_errors_format_output_only();
  if (locale2 === "es") return es_convert_errors_format_output_only();
  if (locale2 === "fr") return fr_convert_errors_format_output_only();
  if (locale2 === "de") return de_convert_errors_format_output_only();
  if (locale2 === "it") return it_convert_errors_format_output_only();
  if (locale2 === "hr") return hr_convert_errors_format_output_only();
  if (locale2 === "tr") return tr_convert_errors_format_output_only();
  if (locale2 === "ja") return ja_convert_errors_format_output_only();
  if (locale2 === "ko") return ko_convert_errors_format_output_only();
  if (locale2 === "el") return el_convert_errors_format_output_only();
  if (locale2 === "id") return id_convert_errors_format_output_only();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_format_output_only();
  return zh_hant1_convert_errors_format_output_only();
};
const en_convert_errors_filetoolsd_not_found = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Could not find the filetoolsd instance to start video conversion. Are you sure the instance URL is set correctly?`;
  }
);
const es_convert_errors_filetoolsd_not_found = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `No se encontró la instancia de filetoolsd para iniciar la conversión de vídeos. ¿Estás seguro de que la URL es correcta?`;
  }
);
const fr_convert_errors_filetoolsd_not_found = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Impossible de trouver l'instance filetoolsd pour démarrer la conversion vidéo. Êtes-vous sûr que l'URL de l'instance est correctement définie ?`;
  }
);
const de_convert_errors_filetoolsd_not_found = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konnte die filetoolsd-Instanz nicht finden, um die Videokonvertierung zu starten. Bist du sicher, dass die Instanz-URL korrekt eingestellt ist?`;
  }
);
const it_convert_errors_filetoolsd_not_found = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Impossibile trovare l'istanza filetoolsd per avviare la conversione video. Sei sicuro che l'URL dell'istanza sia impostato correttamente?`;
  }
);
const hr_convert_errors_filetoolsd_not_found = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nismo mogli pronači filetoolsd da započnemo pretvaranje. Jeste li sigurni da je URL točno postavljen?`;
  }
);
const tr_convert_errors_filetoolsd_not_found = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video dönüştürme işlemini başlatmak için filetoolsd örneği bulunamadı. Sunucu URL’sinin doğru ayarlandığından emin misiniz?`;
  }
);
const ja_convert_errors_filetoolsd_not_found = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `動画変換を開始するためのfiletoolsdインスタンスが見つかりません。URLが正しいか確認してください。`;
  }
);
const ko_convert_errors_filetoolsd_not_found = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `비디오 변환을 시작할 filetoolsd 인스턴스를 찾을 수 없습니다. 인스턴스 URL이 올바르게 설정되었는지 확인해주세요.`;
  }
);
const el_convert_errors_filetoolsd_not_found = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Δεν ήταν δυνατή η εύρεση της παρουσίας filetoolsd για την έναρξη της μετατροπής βίντεο. Είστε βέβαιοι ότι η διεύθυνση URL έχει ρυθμιστεί σωστά;`;
  }
);
const id_convert_errors_filetoolsd_not_found = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tidak dapat menemukan layanan filetoolsd untuk memulai konversi video. Apakah URL layanan sudah diatur dengan benar?`;
  }
);
const zh_hans1_convert_errors_filetoolsd_not_found = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未找到 filetoolsd 实例来开始视频转换。请确保实例 URL 设置正确。`;
  }
);
const zh_hant1_convert_errors_filetoolsd_not_found = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未找到 filetoolsd 執行個體來開始影片轉換。請確保執行個體 URL 設定正確。`;
  }
);
const convert_errors_filetoolsd_not_found = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_filetoolsd_not_found", locale2);
  if (locale2 === "en") return en_convert_errors_filetoolsd_not_found();
  if (locale2 === "es") return es_convert_errors_filetoolsd_not_found();
  if (locale2 === "fr") return fr_convert_errors_filetoolsd_not_found();
  if (locale2 === "de") return de_convert_errors_filetoolsd_not_found();
  if (locale2 === "it") return it_convert_errors_filetoolsd_not_found();
  if (locale2 === "hr") return hr_convert_errors_filetoolsd_not_found();
  if (locale2 === "tr") return tr_convert_errors_filetoolsd_not_found();
  if (locale2 === "ja") return ja_convert_errors_filetoolsd_not_found();
  if (locale2 === "ko") return ko_convert_errors_filetoolsd_not_found();
  if (locale2 === "el") return el_convert_errors_filetoolsd_not_found();
  if (locale2 === "id") return id_convert_errors_filetoolsd_not_found();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_filetoolsd_not_found();
  return zh_hant1_convert_errors_filetoolsd_not_found();
};
const en_convert_errors_worker_downloading = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `The ${i.type} converter is currently being initialized, please wait a few moments.`;
  }
);
const es_convert_errors_worker_downloading = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `El convertidor ${i.type} se está inicializando actualmente, espere unos momentos.`;
  }
);
const fr_convert_errors_worker_downloading = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Le convertisseur de ${i.type} est en cours d'initialisation, veuillez patienter quelques instants.`;
  }
);
const de_convert_errors_worker_downloading = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Der ${i.type}-Konverter wird gerade initialisiert, bitte warte einen Moment.`;
  }
);
const it_convert_errors_worker_downloading = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Il convertitore ${i.type} è attualmente in fase di inizializzazione, attendi qualche istante.`;
  }
);
const hr_convert_errors_worker_downloading = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type} pretvarač se trenutno koristi, molimo pričekajte malo.`;
  }
);
const tr_convert_errors_worker_downloading = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type} dönüştürme işlemi şu anda başlatılıyor, lütfen birkaç saniye bekleyin.`;
  }
);
const ja_convert_errors_worker_downloading = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type}コンバーターを初期化中です。少々お待ちください。`;
  }
);
const ko_convert_errors_worker_downloading = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `현재 ${i.type} 변환기를 준비하고 있습니다. 잠시 기다려 주십시오.`;
  }
);
const el_convert_errors_worker_downloading = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Ο μετατροπέας ${i.type} αρχικοποιείται αυτή τη στιγμή, παρακαλώ περιμένετε λίγο.`;
  }
);
const id_convert_errors_worker_downloading = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Konverter ${i.type} sedang diinisialisasi, harap tunggu beberapa saat.`;
  }
);
const zh_hans1_convert_errors_worker_downloading = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type}转换器正在初始化，请稍候。`;
  }
);
const zh_hant1_convert_errors_worker_downloading = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type}轉換器正在初始化，請稍候。`;
  }
);
const convert_errors_worker_downloading = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_worker_downloading", locale2);
  if (locale2 === "en") return en_convert_errors_worker_downloading(inputs);
  if (locale2 === "es") return es_convert_errors_worker_downloading(inputs);
  if (locale2 === "fr") return fr_convert_errors_worker_downloading(inputs);
  if (locale2 === "de") return de_convert_errors_worker_downloading(inputs);
  if (locale2 === "it") return it_convert_errors_worker_downloading(inputs);
  if (locale2 === "hr") return hr_convert_errors_worker_downloading(inputs);
  if (locale2 === "tr") return tr_convert_errors_worker_downloading(inputs);
  if (locale2 === "ja") return ja_convert_errors_worker_downloading(inputs);
  if (locale2 === "ko") return ko_convert_errors_worker_downloading(inputs);
  if (locale2 === "el") return el_convert_errors_worker_downloading(inputs);
  if (locale2 === "id") return id_convert_errors_worker_downloading(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_worker_downloading(inputs);
  return zh_hant1_convert_errors_worker_downloading(inputs);
};
const en_convert_errors_worker_error = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `The ${i.type} converter had an error during initialization, please try again later.`;
  }
);
const es_convert_errors_worker_error = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `El convertidor ${i.type} tuvo un error durante la inicialización, inténtelo nuevamente más tarde.`;
  }
);
const fr_convert_errors_worker_error = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Le convertisseur de ${i.type} a rencontré une erreur lors de l'initialisation, veuillez réessayer plus tard.`;
  }
);
const de_convert_errors_worker_error = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Beim Initialisieren des ${i.type}-Konverters ist ein Fehler aufgetreten, bitte versuche es später erneut.`;
  }
);
const it_convert_errors_worker_error = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Il convertitore ${i.type} ha avuto un errore durante l'inizializzazione, riprova più tardi.`;
  }
);
const hr_convert_errors_worker_error = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type} pretvaraču se javila pogreška pri inicijalizaciji, molimo pokušajte ponovno kasnije.`;
  }
);
const tr_convert_errors_worker_error = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type} dönüştürme işlemi başlatılırken bir hata oluştu, lütfen daha sonra tekrar deneyin.`;
  }
);
const ja_convert_errors_worker_error = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type}コンバーターの初期化中にエラーが発生しました。後でもう一度お試しください。`;
  }
);
const ko_convert_errors_worker_error = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `현재 ${i.type} 변환기 준비 중 오류가 발생했습니다. 나중에 다시 시도해 주십시오.`;
  }
);
const el_convert_errors_worker_error = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Ο μετατροπέας ${i.type} αντιμετώπισε σφάλμα κατά την αρχικοποίηση, παρακαλώ δοκιμάστε ξανά αργότερα.`;
  }
);
const id_convert_errors_worker_error = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Konverter ${i.type} mengalami kesalahan saat inisialisasi, coba lagi nanti.`;
  }
);
const zh_hans1_convert_errors_worker_error = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type}转换器初始化时出错，请稍后重试。`;
  }
);
const zh_hant1_convert_errors_worker_error = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type}轉換器初始化時出錯，請稍後重試。`;
  }
);
const convert_errors_worker_error = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_worker_error", locale2);
  if (locale2 === "en") return en_convert_errors_worker_error(inputs);
  if (locale2 === "es") return es_convert_errors_worker_error(inputs);
  if (locale2 === "fr") return fr_convert_errors_worker_error(inputs);
  if (locale2 === "de") return de_convert_errors_worker_error(inputs);
  if (locale2 === "it") return it_convert_errors_worker_error(inputs);
  if (locale2 === "hr") return hr_convert_errors_worker_error(inputs);
  if (locale2 === "tr") return tr_convert_errors_worker_error(inputs);
  if (locale2 === "ja") return ja_convert_errors_worker_error(inputs);
  if (locale2 === "ko") return ko_convert_errors_worker_error(inputs);
  if (locale2 === "el") return el_convert_errors_worker_error(inputs);
  if (locale2 === "id") return id_convert_errors_worker_error(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_worker_error(inputs);
  return zh_hant1_convert_errors_worker_error(inputs);
};
const en_convert_errors_worker_timeout = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `The ${i.type} converter is taking longer than expected to initialize, please wait a few more moments or refresh the page.`;
  }
);
const es_convert_errors_worker_timeout = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `El convertidor ${i.type} está tardando más de lo esperado en inicializarse. Espere unos momentos más o actualice la página.`;
  }
);
const fr_convert_errors_worker_timeout = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Le convertisseur de ${i.type} prend plus de temps que prévu pour s'initialiser, veuillez patienter quelques instants de plus ou actualiser la page.`;
  }
);
const de_convert_errors_worker_timeout = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Die Initialisierung des ${i.type}-Konverters dauert länger als erwartet, bitte warte noch einen Moment oder lade die Seite neu.`;
  }
);
const it_convert_errors_worker_timeout = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Il convertitore ${i.type} sta impiegando più del previsto per inizializzare, attendi ancora qualche istante o aggiorna la pagina.`;
  }
);
const hr_convert_errors_worker_timeout = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type} pretvaraču treba duže nego očekivano da se inicijalizira, molimo još malo pričekajte ili osvježite stranicu.`;
  }
);
const tr_convert_errors_worker_timeout = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type} dönüştürme işlemi beklenenden daha uzun sürüyor, lütfen biraz daha bekleyin veya sayfayı yenileyin.`;
  }
);
const ja_convert_errors_worker_timeout = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type}コンバーターの初期化に予想以上の時間がかかっています。もう少しお待ちいただくか、ページを更新してください。`;
  }
);
const ko_convert_errors_worker_timeout = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type} 변환기를 준비하는데 예상보다 오래 걸리고 있습니다. 잠시 더 기다리거나 페이지를 새로고침해 주세요.`;
  }
);
const el_convert_errors_worker_timeout = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Ο μετατροπέας ${i.type} χρειάζεται περισσότερο χρόνο από το αναμενόμενο για να αρχικοποιηθεί, παρακαλώ περιμένετε λίγο ακόμη ή ανανεώστε τη σελίδα.`;
  }
);
const id_convert_errors_worker_timeout = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `Konverter ${i.type} memerlukan waktu lebih lama dari perkiraan untuk inisialisasi, harap tunggu beberapa saat lagi atau segarkan halaman.`;
  }
);
const zh_hans1_convert_errors_worker_timeout = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type}转换器初始化时间超出预期，请再等待一会儿或刷新页面。`;
  }
);
const zh_hant1_convert_errors_worker_timeout = (
  /** @type {(inputs: { type: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.type}轉換器初始化時間超出預期，請再等待一會兒或重新整理頁面。`;
  }
);
const convert_errors_worker_timeout = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_worker_timeout", locale2);
  if (locale2 === "en") return en_convert_errors_worker_timeout(inputs);
  if (locale2 === "es") return es_convert_errors_worker_timeout(inputs);
  if (locale2 === "fr") return fr_convert_errors_worker_timeout(inputs);
  if (locale2 === "de") return de_convert_errors_worker_timeout(inputs);
  if (locale2 === "it") return it_convert_errors_worker_timeout(inputs);
  if (locale2 === "hr") return hr_convert_errors_worker_timeout(inputs);
  if (locale2 === "tr") return tr_convert_errors_worker_timeout(inputs);
  if (locale2 === "ja") return ja_convert_errors_worker_timeout(inputs);
  if (locale2 === "ko") return ko_convert_errors_worker_timeout(inputs);
  if (locale2 === "el") return el_convert_errors_worker_timeout(inputs);
  if (locale2 === "id") return id_convert_errors_worker_timeout(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_worker_timeout(inputs);
  return zh_hant1_convert_errors_worker_timeout(inputs);
};
const en_convert_errors_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `audio`;
  }
);
const es_convert_errors_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `audio`;
  }
);
const fr_convert_errors_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `audio`;
  }
);
const de_convert_errors_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const it_convert_errors_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `audio`;
  }
);
const hr_convert_errors_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `audio`;
  }
);
const tr_convert_errors_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ses`;
  }
);
const ja_convert_errors_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音声`;
  }
);
const ko_convert_errors_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `오디오`;
  }
);
const el_convert_errors_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ήχου`;
  }
);
const id_convert_errors_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `audio`;
  }
);
const zh_hans1_convert_errors_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音频`;
  }
);
const zh_hant1_convert_errors_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音訊`;
  }
);
const convert_errors_audio = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_audio", locale2);
  if (locale2 === "en") return en_convert_errors_audio();
  if (locale2 === "es") return es_convert_errors_audio();
  if (locale2 === "fr") return fr_convert_errors_audio();
  if (locale2 === "de") return de_convert_errors_audio();
  if (locale2 === "it") return it_convert_errors_audio();
  if (locale2 === "hr") return hr_convert_errors_audio();
  if (locale2 === "tr") return tr_convert_errors_audio();
  if (locale2 === "ja") return ja_convert_errors_audio();
  if (locale2 === "ko") return ko_convert_errors_audio();
  if (locale2 === "el") return el_convert_errors_audio();
  if (locale2 === "id") return id_convert_errors_audio();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_audio();
  return zh_hant1_convert_errors_audio();
};
const en_convert_errors_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `document`;
  }
);
const es_convert_errors_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `documento`;
  }
);
const fr_convert_errors_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `document`;
  }
);
const de_convert_errors_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dokument`;
  }
);
const it_convert_errors_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `documento`;
  }
);
const hr_convert_errors_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `dokument`;
  }
);
const tr_convert_errors_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `belge`;
  }
);
const ja_convert_errors_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ドキュメント`;
  }
);
const ko_convert_errors_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `문서`;
  }
);
const el_convert_errors_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `εγγράφου`;
  }
);
const id_convert_errors_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `dokumen`;
  }
);
const zh_hans1_convert_errors_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `文档`;
  }
);
const zh_hant1_convert_errors_doc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `文件`;
  }
);
const convert_errors_doc = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_doc", locale2);
  if (locale2 === "en") return en_convert_errors_doc();
  if (locale2 === "es") return es_convert_errors_doc();
  if (locale2 === "fr") return fr_convert_errors_doc();
  if (locale2 === "de") return de_convert_errors_doc();
  if (locale2 === "it") return it_convert_errors_doc();
  if (locale2 === "hr") return hr_convert_errors_doc();
  if (locale2 === "tr") return tr_convert_errors_doc();
  if (locale2 === "ja") return ja_convert_errors_doc();
  if (locale2 === "ko") return ko_convert_errors_doc();
  if (locale2 === "el") return el_convert_errors_doc();
  if (locale2 === "id") return id_convert_errors_doc();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_doc();
  return zh_hant1_convert_errors_doc();
};
const en_convert_errors_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `image`;
  }
);
const es_convert_errors_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `imagen`;
  }
);
const fr_convert_errors_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `image`;
  }
);
const de_convert_errors_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bild`;
  }
);
const it_convert_errors_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `immagine`;
  }
);
const hr_convert_errors_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `slika`;
  }
);
const tr_convert_errors_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `görsel`;
  }
);
const ja_convert_errors_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `画像`;
  }
);
const ko_convert_errors_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이미지`;
  }
);
const el_convert_errors_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `εικόνας`;
  }
);
const id_convert_errors_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `gambar`;
  }
);
const zh_hans1_convert_errors_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `图片`;
  }
);
const zh_hant1_convert_errors_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `圖片`;
  }
);
const convert_errors_image = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("convert_errors_image", locale2);
  if (locale2 === "en") return en_convert_errors_image();
  if (locale2 === "es") return es_convert_errors_image();
  if (locale2 === "fr") return fr_convert_errors_image();
  if (locale2 === "de") return de_convert_errors_image();
  if (locale2 === "it") return it_convert_errors_image();
  if (locale2 === "hr") return hr_convert_errors_image();
  if (locale2 === "tr") return tr_convert_errors_image();
  if (locale2 === "ja") return ja_convert_errors_image();
  if (locale2 === "ko") return ko_convert_errors_image();
  if (locale2 === "el") return el_convert_errors_image();
  if (locale2 === "id") return id_convert_errors_image();
  if (locale2 === "zh-Hans") return zh_hans1_convert_errors_image();
  return zh_hant1_convert_errors_image();
};
const en_settings_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Settings`;
  }
);
const es_settings_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ajustes`;
  }
);
const fr_settings_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Paramètres`;
  }
);
const de_settings_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Einstellungen`;
  }
);
const it_settings_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Impostazioni`;
  }
);
const hr_settings_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Postavke`;
  }
);
const tr_settings_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ayarlar`;
  }
);
const ja_settings_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `設定`;
  }
);
const ko_settings_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `설정`;
  }
);
const el_settings_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ρυθμίσεις`;
  }
);
const id_settings_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pengaturan`;
  }
);
const zh_hans1_settings_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `设置`;
  }
);
const zh_hant1_settings_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `設定`;
  }
);
const settings_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_title", locale2);
  if (locale2 === "en") return en_settings_title();
  if (locale2 === "es") return es_settings_title();
  if (locale2 === "fr") return fr_settings_title();
  if (locale2 === "de") return de_settings_title();
  if (locale2 === "it") return it_settings_title();
  if (locale2 === "hr") return hr_settings_title();
  if (locale2 === "tr") return tr_settings_title();
  if (locale2 === "ja") return ja_settings_title();
  if (locale2 === "ko") return ko_settings_title();
  if (locale2 === "el") return el_settings_title();
  if (locale2 === "id") return id_settings_title();
  if (locale2 === "zh-Hans") return zh_hans1_settings_title();
  return zh_hant1_settings_title();
};
const en_settings_errors_save_failed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Failed to save settings!`;
  }
);
const es_settings_errors_save_failed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `¡No se han podido guardar los ajustes!`;
  }
);
const fr_settings_errors_save_failed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Echec lors de l'enregistrement des préférences !`;
  }
);
const de_settings_errors_save_failed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Speichern der Einstellungen fehlgeschlagen!`;
  }
);
const it_settings_errors_save_failed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Impossibile salvare le impostazioni!`;
  }
);
const hr_settings_errors_save_failed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Spremanje postavki nije uspjelo!`;
  }
);
const tr_settings_errors_save_failed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ayarlar kaydedilirken hata oluştu!`;
  }
);
const ja_settings_errors_save_failed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `設定の保存に失敗しました！`;
  }
);
const ko_settings_errors_save_failed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `현재 설정을 저장하는데 실패했습니다`;
  }
);
const el_settings_errors_save_failed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αποτυχία αποθήκευσης ρυθμίσεων!`;
  }
);
const id_settings_errors_save_failed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Gagal menyimpan pengaturan!`;
  }
);
const zh_hans1_settings_errors_save_failed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `保存设置失败！`;
  }
);
const zh_hant1_settings_errors_save_failed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `儲存設定失敗！`;
  }
);
const settings_errors_save_failed = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_errors_save_failed", locale2);
  if (locale2 === "en") return en_settings_errors_save_failed();
  if (locale2 === "es") return es_settings_errors_save_failed();
  if (locale2 === "fr") return fr_settings_errors_save_failed();
  if (locale2 === "de") return de_settings_errors_save_failed();
  if (locale2 === "it") return it_settings_errors_save_failed();
  if (locale2 === "hr") return hr_settings_errors_save_failed();
  if (locale2 === "tr") return tr_settings_errors_save_failed();
  if (locale2 === "ja") return ja_settings_errors_save_failed();
  if (locale2 === "ko") return ko_settings_errors_save_failed();
  if (locale2 === "el") return el_settings_errors_save_failed();
  if (locale2 === "id") return id_settings_errors_save_failed();
  if (locale2 === "zh-Hans") return zh_hans1_settings_errors_save_failed();
  return zh_hant1_settings_errors_save_failed();
};
const en_settings_appearance_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Appearance`;
  }
);
const es_settings_appearance_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Apariencia`;
  }
);
const fr_settings_appearance_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Appearance`;
  }
);
const de_settings_appearance_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Erscheinungsbild`;
  }
);
const it_settings_appearance_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Aspetto`;
  }
);
const hr_settings_appearance_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Izgled`;
  }
);
const tr_settings_appearance_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Görünüm`;
  }
);
const ja_settings_appearance_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `外観`;
  }
);
const ko_settings_appearance_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `테마`;
  }
);
const el_settings_appearance_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Εμφάνιση`;
  }
);
const id_settings_appearance_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tampilan`;
  }
);
const zh_hans1_settings_appearance_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `外观`;
  }
);
const zh_hant1_settings_appearance_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `外觀`;
  }
);
const settings_appearance_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_appearance_title", locale2);
  if (locale2 === "en") return en_settings_appearance_title();
  if (locale2 === "es") return es_settings_appearance_title();
  if (locale2 === "fr") return fr_settings_appearance_title();
  if (locale2 === "de") return de_settings_appearance_title();
  if (locale2 === "it") return it_settings_appearance_title();
  if (locale2 === "hr") return hr_settings_appearance_title();
  if (locale2 === "tr") return tr_settings_appearance_title();
  if (locale2 === "ja") return ja_settings_appearance_title();
  if (locale2 === "ko") return ko_settings_appearance_title();
  if (locale2 === "el") return el_settings_appearance_title();
  if (locale2 === "id") return id_settings_appearance_title();
  if (locale2 === "zh-Hans") return zh_hans1_settings_appearance_title();
  return zh_hant1_settings_appearance_title();
};
const en_settings_appearance_brightness_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Brightness theme`;
  }
);
const es_settings_appearance_brightness_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tema`;
  }
);
const fr_settings_appearance_brightness_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Luminosité du thème`;
  }
);
const de_settings_appearance_brightness_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Farbschema`;
  }
);
const it_settings_appearance_brightness_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tema luminosità`;
  }
);
const hr_settings_appearance_brightness_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Svjetlina`;
  }
);
const tr_settings_appearance_brightness_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tema seçimi`;
  }
);
const ja_settings_appearance_brightness_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `明るさテーマ`;
  }
);
const ko_settings_appearance_brightness_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `테마 변경`;
  }
);
const el_settings_appearance_brightness_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Θέμα φωτεινότητας`;
  }
);
const id_settings_appearance_brightness_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tema kecerahan`;
  }
);
const zh_hans1_settings_appearance_brightness_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `亮度主题`;
  }
);
const zh_hant1_settings_appearance_brightness_theme = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `亮度主題`;
  }
);
const settings_appearance_brightness_theme = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_appearance_brightness_theme", locale2);
  if (locale2 === "en") return en_settings_appearance_brightness_theme();
  if (locale2 === "es") return es_settings_appearance_brightness_theme();
  if (locale2 === "fr") return fr_settings_appearance_brightness_theme();
  if (locale2 === "de") return de_settings_appearance_brightness_theme();
  if (locale2 === "it") return it_settings_appearance_brightness_theme();
  if (locale2 === "hr") return hr_settings_appearance_brightness_theme();
  if (locale2 === "tr") return tr_settings_appearance_brightness_theme();
  if (locale2 === "ja") return ja_settings_appearance_brightness_theme();
  if (locale2 === "ko") return ko_settings_appearance_brightness_theme();
  if (locale2 === "el") return el_settings_appearance_brightness_theme();
  if (locale2 === "id") return id_settings_appearance_brightness_theme();
  if (locale2 === "zh-Hans") return zh_hans1_settings_appearance_brightness_theme();
  return zh_hant1_settings_appearance_brightness_theme();
};
const en_settings_appearance_brightness_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Want a sunny flash-bang, or a quiet lonely night?`;
  }
);
const es_settings_appearance_brightness_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `¿Prefieres una flash-bang soleada o una silenciosa y solitaria noche?`;
  }
);
const fr_settings_appearance_brightness_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Envie d'une soirée ensoleillée ou d'une nuit tranquille et solitaire ?`;
  }
);
const de_settings_appearance_brightness_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Möchtest du einen sonnigen Blendeffekt oder eine ruhige, einsame Nacht?`;
  }
);
const it_settings_appearance_brightness_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Vuoi un lampo di sole, o una tranquilla notte solitaria?`;
  }
);
const hr_settings_appearance_brightness_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Želite li da Vas Sunce oslijepi ili tihu umirujuću noć?`;
  }
);
const tr_settings_appearance_brightness_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Güneşli bir gün mü istersiniz, yoksa sessiz ve yalnız bir gece mi?`;
  }
);
const ja_settings_appearance_brightness_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `まぶしい昼間か、静かな夜か？`;
  }
);
const ko_settings_appearance_brightness_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `걍 알아서`;
  }
);
const el_settings_appearance_brightness_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Θέλετε μια ηλιόλουστη λάμψη ή μια ήσυχη μοναχική νύχτα;`;
  }
);
const id_settings_appearance_brightness_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ingin suasana terang benderang, atau malam yang sunyi?`;
  }
);
const zh_hans1_settings_appearance_brightness_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `想要阳光明媚的闪光弹，还是宁静孤独的夜晚？`;
  }
);
const zh_hant1_settings_appearance_brightness_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `想要陽光明媚的閃光彈，還是寧靜孤獨的夜晚？`;
  }
);
const settings_appearance_brightness_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_appearance_brightness_description", locale2);
  if (locale2 === "en") return en_settings_appearance_brightness_description();
  if (locale2 === "es") return es_settings_appearance_brightness_description();
  if (locale2 === "fr") return fr_settings_appearance_brightness_description();
  if (locale2 === "de") return de_settings_appearance_brightness_description();
  if (locale2 === "it") return it_settings_appearance_brightness_description();
  if (locale2 === "hr") return hr_settings_appearance_brightness_description();
  if (locale2 === "tr") return tr_settings_appearance_brightness_description();
  if (locale2 === "ja") return ja_settings_appearance_brightness_description();
  if (locale2 === "ko") return ko_settings_appearance_brightness_description();
  if (locale2 === "el") return el_settings_appearance_brightness_description();
  if (locale2 === "id") return id_settings_appearance_brightness_description();
  if (locale2 === "zh-Hans") return zh_hans1_settings_appearance_brightness_description();
  return zh_hant1_settings_appearance_brightness_description();
};
const en_settings_appearance_light = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Light`;
  }
);
const es_settings_appearance_light = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Claro`;
  }
);
const fr_settings_appearance_light = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Lumineux`;
  }
);
const de_settings_appearance_light = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Hell`;
  }
);
const it_settings_appearance_light = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Chiaro`;
  }
);
const hr_settings_appearance_light = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Svijetlo`;
  }
);
const tr_settings_appearance_light = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Açık`;
  }
);
const ja_settings_appearance_light = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ライト`;
  }
);
const ko_settings_appearance_light = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `라이트 모드`;
  }
);
const el_settings_appearance_light = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Φωτεινό`;
  }
);
const id_settings_appearance_light = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Terang`;
  }
);
const zh_hans1_settings_appearance_light = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `浅色`;
  }
);
const zh_hant1_settings_appearance_light = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `淺色`;
  }
);
const settings_appearance_light = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_appearance_light", locale2);
  if (locale2 === "en") return en_settings_appearance_light();
  if (locale2 === "es") return es_settings_appearance_light();
  if (locale2 === "fr") return fr_settings_appearance_light();
  if (locale2 === "de") return de_settings_appearance_light();
  if (locale2 === "it") return it_settings_appearance_light();
  if (locale2 === "hr") return hr_settings_appearance_light();
  if (locale2 === "tr") return tr_settings_appearance_light();
  if (locale2 === "ja") return ja_settings_appearance_light();
  if (locale2 === "ko") return ko_settings_appearance_light();
  if (locale2 === "el") return el_settings_appearance_light();
  if (locale2 === "id") return id_settings_appearance_light();
  if (locale2 === "zh-Hans") return zh_hans1_settings_appearance_light();
  return zh_hant1_settings_appearance_light();
};
const en_settings_appearance_dark = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dark`;
  }
);
const es_settings_appearance_dark = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Oscuro`;
  }
);
const fr_settings_appearance_dark = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sombre`;
  }
);
const de_settings_appearance_dark = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dunkel`;
  }
);
const it_settings_appearance_dark = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Scuro`;
  }
);
const hr_settings_appearance_dark = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tamno`;
  }
);
const tr_settings_appearance_dark = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Koyu`;
  }
);
const ja_settings_appearance_dark = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ダーク`;
  }
);
const ko_settings_appearance_dark = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `다크 모드`;
  }
);
const el_settings_appearance_dark = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Σκούρο`;
  }
);
const id_settings_appearance_dark = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Gelap`;
  }
);
const zh_hans1_settings_appearance_dark = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `深色`;
  }
);
const zh_hant1_settings_appearance_dark = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `深色`;
  }
);
const settings_appearance_dark = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_appearance_dark", locale2);
  if (locale2 === "en") return en_settings_appearance_dark();
  if (locale2 === "es") return es_settings_appearance_dark();
  if (locale2 === "fr") return fr_settings_appearance_dark();
  if (locale2 === "de") return de_settings_appearance_dark();
  if (locale2 === "it") return it_settings_appearance_dark();
  if (locale2 === "hr") return hr_settings_appearance_dark();
  if (locale2 === "tr") return tr_settings_appearance_dark();
  if (locale2 === "ja") return ja_settings_appearance_dark();
  if (locale2 === "ko") return ko_settings_appearance_dark();
  if (locale2 === "el") return el_settings_appearance_dark();
  if (locale2 === "id") return id_settings_appearance_dark();
  if (locale2 === "zh-Hans") return zh_hans1_settings_appearance_dark();
  return zh_hant1_settings_appearance_dark();
};
const en_settings_appearance_effect_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Effect settings`;
  }
);
const es_settings_appearance_effect_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Efectos`;
  }
);
const fr_settings_appearance_effect_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Paramètres des effets`;
  }
);
const de_settings_appearance_effect_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Effekteinstellungen`;
  }
);
const it_settings_appearance_effect_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Impostazioni effetti`;
  }
);
const hr_settings_appearance_effect_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Efekti`;
  }
);
const tr_settings_appearance_effect_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Efekt ayarları`;
  }
);
const ja_settings_appearance_effect_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `エフェクト設定`;
  }
);
const ko_settings_appearance_effect_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이펙트(효과) 설정`;
  }
);
const el_settings_appearance_effect_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ρυθμίσεις εφέ`;
  }
);
const id_settings_appearance_effect_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pengaturan efek`;
  }
);
const zh_hans1_settings_appearance_effect_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `效果设置`;
  }
);
const zh_hant1_settings_appearance_effect_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `效果設定`;
  }
);
const settings_appearance_effect_settings = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_appearance_effect_settings", locale2);
  if (locale2 === "en") return en_settings_appearance_effect_settings();
  if (locale2 === "es") return es_settings_appearance_effect_settings();
  if (locale2 === "fr") return fr_settings_appearance_effect_settings();
  if (locale2 === "de") return de_settings_appearance_effect_settings();
  if (locale2 === "it") return it_settings_appearance_effect_settings();
  if (locale2 === "hr") return hr_settings_appearance_effect_settings();
  if (locale2 === "tr") return tr_settings_appearance_effect_settings();
  if (locale2 === "ja") return ja_settings_appearance_effect_settings();
  if (locale2 === "ko") return ko_settings_appearance_effect_settings();
  if (locale2 === "el") return el_settings_appearance_effect_settings();
  if (locale2 === "id") return id_settings_appearance_effect_settings();
  if (locale2 === "zh-Hans") return zh_hans1_settings_appearance_effect_settings();
  return zh_hant1_settings_appearance_effect_settings();
};
const en_settings_appearance_effect_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Would you like fancy effects, or a more static experience?`;
  }
);
const es_settings_appearance_effect_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `¿Prefieres efectos en la interfaz o una experiencia más estática?`;
  }
);
const fr_settings_appearance_effect_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Vous aimez les effets sophistiqués ou préférez une expérience plus statique ?`;
  }
);
const de_settings_appearance_effect_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Möchtest du schicke Effekte oder eine eher statische Erfahrung?`;
  }
);
const it_settings_appearance_effect_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Desideri effetti *fancy*, o un'esperienza più statica?`;
  }
);
const hr_settings_appearance_effect_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Želite li zapanjujuće efekte ili miran doživljaj?`;
  }
);
const tr_settings_appearance_effect_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Süslü efektler mi istersiniz, yoksa daha sade bir deneyim mi?`;
  }
);
const ja_settings_appearance_effect_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `派手な効果にしますか？それとも静的な体験にしますか？`;
  }
);
const ko_settings_appearance_effect_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `동적인 애니메이션이나 이펙트, 아님 정적인거?`;
  }
);
const el_settings_appearance_effect_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Θα θέλατε φανταχτερά εφέ ή μια πιο στατική εμπειρία;`;
  }
);
const id_settings_appearance_effect_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ingin efek keren, atau tampilan yang lebih sederhana?`;
  }
);
const zh_hans1_settings_appearance_effect_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `你想要华丽的效果，还是更静态的体验？`;
  }
);
const zh_hant1_settings_appearance_effect_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `你想要華麗的效果，還是更靜態的體驗？`;
  }
);
const settings_appearance_effect_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_appearance_effect_description", locale2);
  if (locale2 === "en") return en_settings_appearance_effect_description();
  if (locale2 === "es") return es_settings_appearance_effect_description();
  if (locale2 === "fr") return fr_settings_appearance_effect_description();
  if (locale2 === "de") return de_settings_appearance_effect_description();
  if (locale2 === "it") return it_settings_appearance_effect_description();
  if (locale2 === "hr") return hr_settings_appearance_effect_description();
  if (locale2 === "tr") return tr_settings_appearance_effect_description();
  if (locale2 === "ja") return ja_settings_appearance_effect_description();
  if (locale2 === "ko") return ko_settings_appearance_effect_description();
  if (locale2 === "el") return el_settings_appearance_effect_description();
  if (locale2 === "id") return id_settings_appearance_effect_description();
  if (locale2 === "zh-Hans") return zh_hans1_settings_appearance_effect_description();
  return zh_hant1_settings_appearance_effect_description();
};
const en_settings_appearance_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Enable`;
  }
);
const es_settings_appearance_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Habilitar`;
  }
);
const fr_settings_appearance_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Activer`;
  }
);
const de_settings_appearance_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Animiert`;
  }
);
const it_settings_appearance_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Abilita`;
  }
);
const hr_settings_appearance_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Uključeno`;
  }
);
const tr_settings_appearance_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Etkinleştir`;
  }
);
const ja_settings_appearance_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `有効`;
  }
);
const ko_settings_appearance_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `켜기`;
  }
);
const el_settings_appearance_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ενεργοποίηση`;
  }
);
const id_settings_appearance_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Aktifkan`;
  }
);
const zh_hans1_settings_appearance_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `启用`;
  }
);
const zh_hant1_settings_appearance_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `啟用`;
  }
);
const settings_appearance_enable = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_appearance_enable", locale2);
  if (locale2 === "en") return en_settings_appearance_enable();
  if (locale2 === "es") return es_settings_appearance_enable();
  if (locale2 === "fr") return fr_settings_appearance_enable();
  if (locale2 === "de") return de_settings_appearance_enable();
  if (locale2 === "it") return it_settings_appearance_enable();
  if (locale2 === "hr") return hr_settings_appearance_enable();
  if (locale2 === "tr") return tr_settings_appearance_enable();
  if (locale2 === "ja") return ja_settings_appearance_enable();
  if (locale2 === "ko") return ko_settings_appearance_enable();
  if (locale2 === "el") return el_settings_appearance_enable();
  if (locale2 === "id") return id_settings_appearance_enable();
  if (locale2 === "zh-Hans") return zh_hans1_settings_appearance_enable();
  return zh_hant1_settings_appearance_enable();
};
const en_settings_appearance_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Disable`;
  }
);
const es_settings_appearance_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Deshabilitar`;
  }
);
const fr_settings_appearance_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Désactiver`;
  }
);
const de_settings_appearance_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Statisch`;
  }
);
const it_settings_appearance_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Disabilita`;
  }
);
const hr_settings_appearance_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Isključeno`;
  }
);
const tr_settings_appearance_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Devre dışı bırak`;
  }
);
const ja_settings_appearance_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `無効`;
  }
);
const ko_settings_appearance_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `끄기`;
  }
);
const el_settings_appearance_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Απενεργοποίηση`;
  }
);
const id_settings_appearance_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nonaktifkan`;
  }
);
const zh_hans1_settings_appearance_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `禁用`;
  }
);
const zh_hant1_settings_appearance_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `停用`;
  }
);
const settings_appearance_disable = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_appearance_disable", locale2);
  if (locale2 === "en") return en_settings_appearance_disable();
  if (locale2 === "es") return es_settings_appearance_disable();
  if (locale2 === "fr") return fr_settings_appearance_disable();
  if (locale2 === "de") return de_settings_appearance_disable();
  if (locale2 === "it") return it_settings_appearance_disable();
  if (locale2 === "hr") return hr_settings_appearance_disable();
  if (locale2 === "tr") return tr_settings_appearance_disable();
  if (locale2 === "ja") return ja_settings_appearance_disable();
  if (locale2 === "ko") return ko_settings_appearance_disable();
  if (locale2 === "el") return el_settings_appearance_disable();
  if (locale2 === "id") return id_settings_appearance_disable();
  if (locale2 === "zh-Hans") return zh_hans1_settings_appearance_disable();
  return zh_hant1_settings_appearance_disable();
};
const en_settings_conversion_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conversion`;
  }
);
const es_settings_conversion_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conversión`;
  }
);
const fr_settings_conversion_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conversion`;
  }
);
const de_settings_conversion_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konvertierung`;
  }
);
const it_settings_conversion_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conversione`;
  }
);
const hr_settings_conversion_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pretvaranje`;
  }
);
const tr_settings_conversion_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dönüştürme`;
  }
);
const ja_settings_conversion_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `変換`;
  }
);
const ko_settings_conversion_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `변환`;
  }
);
const el_settings_conversion_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μετατροπή`;
  }
);
const id_settings_conversion_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konversi`;
  }
);
const zh_hans1_settings_conversion_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `转换`;
  }
);
const zh_hant1_settings_conversion_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `轉換`;
  }
);
const settings_conversion_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_title", locale2);
  if (locale2 === "en") return en_settings_conversion_title();
  if (locale2 === "es") return es_settings_conversion_title();
  if (locale2 === "fr") return fr_settings_conversion_title();
  if (locale2 === "de") return de_settings_conversion_title();
  if (locale2 === "it") return it_settings_conversion_title();
  if (locale2 === "hr") return hr_settings_conversion_title();
  if (locale2 === "tr") return tr_settings_conversion_title();
  if (locale2 === "ja") return ja_settings_conversion_title();
  if (locale2 === "ko") return ko_settings_conversion_title();
  if (locale2 === "el") return el_settings_conversion_title();
  if (locale2 === "id") return id_settings_conversion_title();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_title();
  return zh_hant1_settings_conversion_title();
};
const en_settings_conversion_advanced_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Advanced settings`;
  }
);
const es_settings_conversion_advanced_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Configuraciones avanzadas`;
  }
);
const fr_settings_conversion_advanced_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Paramètres avancés`;
  }
);
const it_settings_conversion_advanced_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Impostazioni avanzate`;
  }
);
const tr_settings_conversion_advanced_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Gelişmiş ayarlar`;
  }
);
const ja_settings_conversion_advanced_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `詳細設定`;
  }
);
const ko_settings_conversion_advanced_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `고급 설정`;
  }
);
const el_settings_conversion_advanced_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Προηγμένες ρυθμίσεις`;
  }
);
const id_settings_conversion_advanced_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pengaturan lanjutan`;
  }
);
const zh_hans1_settings_conversion_advanced_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `高级设置`;
  }
);
const zh_hant1_settings_conversion_advanced_settings = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `進階設定`;
  }
);
const de_settings_conversion_advanced_settings = en_settings_conversion_advanced_settings;
const hr_settings_conversion_advanced_settings = en_settings_conversion_advanced_settings;
const settings_conversion_advanced_settings = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_advanced_settings", locale2);
  if (locale2 === "en") return en_settings_conversion_advanced_settings();
  if (locale2 === "es") return es_settings_conversion_advanced_settings();
  if (locale2 === "fr") return fr_settings_conversion_advanced_settings();
  if (locale2 === "de") return de_settings_conversion_advanced_settings();
  if (locale2 === "it") return it_settings_conversion_advanced_settings();
  if (locale2 === "hr") return hr_settings_conversion_advanced_settings();
  if (locale2 === "tr") return tr_settings_conversion_advanced_settings();
  if (locale2 === "ja") return ja_settings_conversion_advanced_settings();
  if (locale2 === "ko") return ko_settings_conversion_advanced_settings();
  if (locale2 === "el") return el_settings_conversion_advanced_settings();
  if (locale2 === "id") return id_settings_conversion_advanced_settings();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_advanced_settings();
  return zh_hant1_settings_conversion_advanced_settings();
};
const en_settings_conversion_filename_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `File name format`;
  }
);
const es_settings_conversion_filename_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Formato del nombre de archivo`;
  }
);
const fr_settings_conversion_filename_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Format du nom de fichier`;
  }
);
const de_settings_conversion_filename_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dateinamensformat`;
  }
);
const it_settings_conversion_filename_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Formato nome file`;
  }
);
const hr_settings_conversion_filename_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Način imenovanja datoteke`;
  }
);
const tr_settings_conversion_filename_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dosya adı formatı`;
  }
);
const ja_settings_conversion_filename_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ファイル名フォーマット`;
  }
);
const ko_settings_conversion_filename_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `파일 이름 형식`;
  }
);
const el_settings_conversion_filename_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μορφή ονόματος αρχείου`;
  }
);
const id_settings_conversion_filename_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Format nama berkas`;
  }
);
const zh_hans1_settings_conversion_filename_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `文件名格式`;
  }
);
const zh_hant1_settings_conversion_filename_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `檔案名稱格式`;
  }
);
const settings_conversion_filename_format = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_filename_format", locale2);
  if (locale2 === "en") return en_settings_conversion_filename_format();
  if (locale2 === "es") return es_settings_conversion_filename_format();
  if (locale2 === "fr") return fr_settings_conversion_filename_format();
  if (locale2 === "de") return de_settings_conversion_filename_format();
  if (locale2 === "it") return it_settings_conversion_filename_format();
  if (locale2 === "hr") return hr_settings_conversion_filename_format();
  if (locale2 === "tr") return tr_settings_conversion_filename_format();
  if (locale2 === "ja") return ja_settings_conversion_filename_format();
  if (locale2 === "ko") return ko_settings_conversion_filename_format();
  if (locale2 === "el") return el_settings_conversion_filename_format();
  if (locale2 === "id") return id_settings_conversion_filename_format();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_filename_format();
  return zh_hant1_settings_conversion_filename_format();
};
const en_settings_conversion_filename_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `This will determine the name of the file on download, <b>not including the file extension.</b> You can put these following templates in the format, which will be replaced with the relevant information: <b>%name%</b> for the original file name, <b>%extension%</b> for the original file extension, and <b>%date%</b> for a date string of when the file was converted.`;
  }
);
const es_settings_conversion_filename_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Esto va a determinar el nombre del archivo al ser descargado <b>sin incluir la extensión</b>. Puedes poner las siguientes plantillas en el formato, las cuales serán reemplazadas con la información que les corresponde: <b>%name%</b> para el nombre original, <b>%extension%</b> para la extensión original del archivo y <b>%date%</b> para la fecha de cuando el archivo fue convertido.`;
  }
);
const fr_settings_conversion_filename_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cela déterminera le nom du fichier lors du téléchargement, <b>sans inclure l'extension du fichier.</b> Vous pouvez mettre les modèles suivants dans le format, qui seront remplacés par les informations pertinentes: <b>%name%</b> pour le nom du fichier d'origine, <b>%extension%</b> pour l'extension du fichier d'origine et <b>%date%</b> pour une chaîne de date indiquant quand le fichier a été converti.`;
  }
);
const de_settings_conversion_filename_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dies bestimmt den Namen der Datei beim Herunterladen, <b>ohne die Dateierweiterung.</b> Du kannst die folgenden Vorlagen in das Format einfügen, die durch die entsprechenden Informationen ersetzt werden: <b>%name%</b> für den ursprünglichen Dateinamen, <b>%extension%</b> für die ursprüngliche Dateierweiterung und <b>%date%</b> für das Datum, an dem die Datei konvertiert wurde.`;
  }
);
const it_settings_conversion_filename_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Questo determinerà il nome del file al momento del download, <b>esclusa l'estensione del file.</b> È possibile inserire i seguenti *template* nel formato, che verranno sostituiti con le informazioni pertinenti: <b>%name%</b> per il nome del file originale, <b>%extension%</b> per l'estensione del file originale e <b>%date%</b> per una *stringa* di data di quando il file è stato convertito.`;
  }
);
const hr_settings_conversion_filename_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ovo će odrediti ime datoteke pri preuzimanju, <b>ali ne i nastavak.</b> Možete staviti navedene prijedloge u način imenovanja, koji će biti zamijenjeni sa relevatnim informacijama: <b>%name%</b> za originalni naziv datoteke, <b>%extension%</b> za originalni nastavak, i <b>%date%</b> za datum kada je datoteka bila pretvorena.`;
  }
);
const tr_settings_conversion_filename_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bu ayar, <b>dosya uzantısını etkilemeden</b> indirilen dosyanın adını belirleyecektir. Aşağıdaki şablonları formata ekleyebilirsiniz, bunlar ilgili bilgilerle değiştirilecektir: orijinal dosya adı için <b>%name%</b>, orijinal dosya uzantısı için <b>%extension%</b> ve dosyanın dönüştürüldüğü tarihin tarih için <b>%date%</b>.`;
  }
);
const ja_settings_conversion_filename_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `これはダウンロード時のファイル名を決定します（拡張子を除く）。以下のテンプレートを使用できます：<b>%name%</b>（元のファイル名）、<b>%extension%</b>（元の拡張子）、<b>%date%</b>（変換日時）。`;
  }
);
const ko_settings_conversion_filename_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `다운로드할 파일의 이름을 설정합니다. <b>파일 확장자(포맷)는 포함되지 않습니다.</b> 다음 템플릿을 형식에 넣을 수 있으며, 관련 정보로 대체됩니다: <b>%name%</b> 원본 파일 이름, <b>%extension%</b> 원본 파일 확장자, <b>%date%</b> 파일이 변환된 날짜 문자열.`;
  }
);
const el_settings_conversion_filename_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αυτό θα καθορίσει το όνομα του αρχείου κατά τη λήψη, <b>χωρίς να περιλαμβάνει την επέκταση αρχείου.</b> Μπορείτε να τοποθετήσετε τα ακόλουθα πρότυπα στη μορφή, τα οποία θα αντικατασταθούν με τις σχετικές πληροφορίες: <b>%name%</b> για το αρχικό όνομα αρχείου, <b>%extension%</b> για την αρχική επέκταση αρχείου και <b>%date%</b> για μια συμβολοσειρά ημερομηνίας του πότε μετατράπηκε το αρχείο.`;
  }
);
const id_settings_conversion_filename_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ini akan menentukan nama berkas saat diunduh, <b>tidak termasuk ekstensi berkas.</b> Kamu dapat menggunakan template berikut dalam format, yang akan diganti dengan informasi terkait: <b>%name%</b> untuk nama berkas asli, <b>%extension%</b> untuk ekstensi berkas asli, dan <b>%date%</b> untuk tanggal saat berkas dikonversi.`;
  }
);
const zh_hans1_settings_conversion_filename_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `这将决定下载时的文件名，<b>不包括文件扩展名。</b>你可以在格式中使用以下模板，它们将被替换为相关信息：<b>%name%</b>表示原始文件名，<b>%extension%</b>表示原始文件扩展名，<b>%date%</b>表示文件转换时的日期字符串。`;
  }
);
const zh_hant1_settings_conversion_filename_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `這將決定下載時的檔案名稱，<b>不包括副檔名。</b>你可以在格式中使用以下範本，它們將被替換為相關資訊：<b>%name%</b>表示原始檔案名稱，<b>%extension%</b>表示原始副檔名，<b>%date%</b>表示檔案轉換時的日期字串。`;
  }
);
const settings_conversion_filename_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_filename_description", locale2);
  if (locale2 === "en") return en_settings_conversion_filename_description();
  if (locale2 === "es") return es_settings_conversion_filename_description();
  if (locale2 === "fr") return fr_settings_conversion_filename_description();
  if (locale2 === "de") return de_settings_conversion_filename_description();
  if (locale2 === "it") return it_settings_conversion_filename_description();
  if (locale2 === "hr") return hr_settings_conversion_filename_description();
  if (locale2 === "tr") return tr_settings_conversion_filename_description();
  if (locale2 === "ja") return ja_settings_conversion_filename_description();
  if (locale2 === "ko") return ko_settings_conversion_filename_description();
  if (locale2 === "el") return el_settings_conversion_filename_description();
  if (locale2 === "id") return id_settings_conversion_filename_description();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_filename_description();
  return zh_hant1_settings_conversion_filename_description();
};
const en_settings_conversion_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools_%name%`;
  }
);
const es_settings_conversion_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools_%name%`;
  }
);
const fr_settings_conversion_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools_%name%`;
  }
);
const de_settings_conversion_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools_%name%`;
  }
);
const it_settings_conversion_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools_%name%`;
  }
);
const hr_settings_conversion_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools_%name%`;
  }
);
const tr_settings_conversion_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools_%name%`;
  }
);
const ja_settings_conversion_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools_%name%`;
  }
);
const ko_settings_conversion_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools_%name%`;
  }
);
const el_settings_conversion_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools_%name%`;
  }
);
const id_settings_conversion_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools_%name%`;
  }
);
const zh_hans1_settings_conversion_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools_%name%`;
  }
);
const zh_hant1_settings_conversion_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools_%name%`;
  }
);
const settings_conversion_placeholder = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_placeholder", locale2);
  if (locale2 === "en") return en_settings_conversion_placeholder();
  if (locale2 === "es") return es_settings_conversion_placeholder();
  if (locale2 === "fr") return fr_settings_conversion_placeholder();
  if (locale2 === "de") return de_settings_conversion_placeholder();
  if (locale2 === "it") return it_settings_conversion_placeholder();
  if (locale2 === "hr") return hr_settings_conversion_placeholder();
  if (locale2 === "tr") return tr_settings_conversion_placeholder();
  if (locale2 === "ja") return ja_settings_conversion_placeholder();
  if (locale2 === "ko") return ko_settings_conversion_placeholder();
  if (locale2 === "el") return el_settings_conversion_placeholder();
  if (locale2 === "id") return id_settings_conversion_placeholder();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_placeholder();
  return zh_hant1_settings_conversion_placeholder();
};
const en_settings_conversion_default_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Default conversion format`;
  }
);
const es_settings_conversion_default_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Formato de conversión predeterminado`;
  }
);
const fr_settings_conversion_default_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Format de conversion par défaut`;
  }
);
const de_settings_conversion_default_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Standard-Konvertierungsformat`;
  }
);
const it_settings_conversion_default_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Formato di conversione predefinito`;
  }
);
const hr_settings_conversion_default_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Zadan format za pretvaranje`;
  }
);
const tr_settings_conversion_default_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Varsayılan dönüştürme formatı`;
  }
);
const ja_settings_conversion_default_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `デフォルト変換フォーマット`;
  }
);
const ko_settings_conversion_default_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `기본 변환 형식`;
  }
);
const el_settings_conversion_default_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Προεπιλεγμένη μορφή μετατροπής`;
  }
);
const id_settings_conversion_default_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Format konversi baku`;
  }
);
const zh_hans1_settings_conversion_default_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `默认转换格式`;
  }
);
const zh_hant1_settings_conversion_default_format = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `預設轉換格式`;
  }
);
const settings_conversion_default_format = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_default_format", locale2);
  if (locale2 === "en") return en_settings_conversion_default_format();
  if (locale2 === "es") return es_settings_conversion_default_format();
  if (locale2 === "fr") return fr_settings_conversion_default_format();
  if (locale2 === "de") return de_settings_conversion_default_format();
  if (locale2 === "it") return it_settings_conversion_default_format();
  if (locale2 === "hr") return hr_settings_conversion_default_format();
  if (locale2 === "tr") return tr_settings_conversion_default_format();
  if (locale2 === "ja") return ja_settings_conversion_default_format();
  if (locale2 === "ko") return ko_settings_conversion_default_format();
  if (locale2 === "el") return el_settings_conversion_default_format();
  if (locale2 === "id") return id_settings_conversion_default_format();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_default_format();
  return zh_hant1_settings_conversion_default_format();
};
const en_settings_conversion_default_format_enable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Enable`;
  }
);
const es_settings_conversion_default_format_enable = en_settings_conversion_default_format_enable;
const fr_settings_conversion_default_format_enable = en_settings_conversion_default_format_enable;
const de_settings_conversion_default_format_enable = en_settings_conversion_default_format_enable;
const it_settings_conversion_default_format_enable = en_settings_conversion_default_format_enable;
const hr_settings_conversion_default_format_enable = en_settings_conversion_default_format_enable;
const tr_settings_conversion_default_format_enable = en_settings_conversion_default_format_enable;
const ja_settings_conversion_default_format_enable = en_settings_conversion_default_format_enable;
const ko_settings_conversion_default_format_enable = en_settings_conversion_default_format_enable;
const el_settings_conversion_default_format_enable = en_settings_conversion_default_format_enable;
const id_settings_conversion_default_format_enable = en_settings_conversion_default_format_enable;
const zh_hans1_settings_conversion_default_format_enable = en_settings_conversion_default_format_enable;
const zh_hant1_settings_conversion_default_format_enable = en_settings_conversion_default_format_enable;
const settings_conversion_default_format_enable = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_default_format_enable", locale2);
  if (locale2 === "en") return en_settings_conversion_default_format_enable();
  if (locale2 === "es") return es_settings_conversion_default_format_enable();
  if (locale2 === "fr") return fr_settings_conversion_default_format_enable();
  if (locale2 === "de") return de_settings_conversion_default_format_enable();
  if (locale2 === "it") return it_settings_conversion_default_format_enable();
  if (locale2 === "hr") return hr_settings_conversion_default_format_enable();
  if (locale2 === "tr") return tr_settings_conversion_default_format_enable();
  if (locale2 === "ja") return ja_settings_conversion_default_format_enable();
  if (locale2 === "ko") return ko_settings_conversion_default_format_enable();
  if (locale2 === "el") return el_settings_conversion_default_format_enable();
  if (locale2 === "id") return id_settings_conversion_default_format_enable();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_default_format_enable();
  return zh_hant1_settings_conversion_default_format_enable();
};
const en_settings_conversion_default_format_disable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Disable`;
  }
);
const es_settings_conversion_default_format_disable = en_settings_conversion_default_format_disable;
const fr_settings_conversion_default_format_disable = en_settings_conversion_default_format_disable;
const de_settings_conversion_default_format_disable = en_settings_conversion_default_format_disable;
const it_settings_conversion_default_format_disable = en_settings_conversion_default_format_disable;
const hr_settings_conversion_default_format_disable = en_settings_conversion_default_format_disable;
const tr_settings_conversion_default_format_disable = en_settings_conversion_default_format_disable;
const ja_settings_conversion_default_format_disable = en_settings_conversion_default_format_disable;
const ko_settings_conversion_default_format_disable = en_settings_conversion_default_format_disable;
const el_settings_conversion_default_format_disable = en_settings_conversion_default_format_disable;
const id_settings_conversion_default_format_disable = en_settings_conversion_default_format_disable;
const zh_hans1_settings_conversion_default_format_disable = en_settings_conversion_default_format_disable;
const zh_hant1_settings_conversion_default_format_disable = en_settings_conversion_default_format_disable;
const settings_conversion_default_format_disable = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_default_format_disable", locale2);
  if (locale2 === "en") return en_settings_conversion_default_format_disable();
  if (locale2 === "es") return es_settings_conversion_default_format_disable();
  if (locale2 === "fr") return fr_settings_conversion_default_format_disable();
  if (locale2 === "de") return de_settings_conversion_default_format_disable();
  if (locale2 === "it") return it_settings_conversion_default_format_disable();
  if (locale2 === "hr") return hr_settings_conversion_default_format_disable();
  if (locale2 === "tr") return tr_settings_conversion_default_format_disable();
  if (locale2 === "ja") return ja_settings_conversion_default_format_disable();
  if (locale2 === "ko") return ko_settings_conversion_default_format_disable();
  if (locale2 === "el") return el_settings_conversion_default_format_disable();
  if (locale2 === "id") return id_settings_conversion_default_format_disable();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_default_format_disable();
  return zh_hant1_settings_conversion_default_format_disable();
};
const en_settings_conversion_default_format_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `This will change the default format selected when you upload a file of this file type.`;
  }
);
const es_settings_conversion_default_format_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Esto cambiará el formato predeterminado seleccionado cuando subes un archivo de este tipo.`;
  }
);
const fr_settings_conversion_default_format_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cela modifiera le format par défaut sélectionné lorsque vous téléchargez un fichier de ce type de format.`;
  }
);
const de_settings_conversion_default_format_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dies ändert das standardmäßig ausgewählte Format, wenn du eine Datei dieses Dateityps hochlädst.`;
  }
);
const it_settings_conversion_default_format_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Questo cambierà il formato predefinito selezionato quando carichi un file di questo tipo.`;
  }
);
const hr_settings_conversion_default_format_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ovo će promijeniti zadani format koji je izabran kada prenesete datoteku te vrste.`;
  }
);
const tr_settings_conversion_default_format_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bu ayar, bu dosya türünde bir dosya yüklediğinizde seçili olan varsayılan formatı değiştirecektir.`;
  }
);
const ja_settings_conversion_default_format_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `このファイルタイプをアップロードしたときに自動で選択される形式を変更します。`;
  }
);
const ko_settings_conversion_default_format_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `파일 유형의 파일을 업로드할 때 선택되는 기본 형식을 변경합니다.`;
  }
);
const el_settings_conversion_default_format_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αυτό θα αλλάξει την προεπιλεγμένη μορφή που επιλέγεται όταν ανεβάζετε ένα αρχείο αυτού του τύπου.`;
  }
);
const id_settings_conversion_default_format_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ini akan mengubah format baku yang dipilih saat kamu mengunggah berkas dengan tipe tersebut.`;
  }
);
const zh_hans1_settings_conversion_default_format_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `这将更改上传此文件类型时自动选择的默认格式。`;
  }
);
const zh_hant1_settings_conversion_default_format_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `這將更改上傳此檔案類型時自動選擇的預設格式。`;
  }
);
const settings_conversion_default_format_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_default_format_description", locale2);
  if (locale2 === "en") return en_settings_conversion_default_format_description();
  if (locale2 === "es") return es_settings_conversion_default_format_description();
  if (locale2 === "fr") return fr_settings_conversion_default_format_description();
  if (locale2 === "de") return de_settings_conversion_default_format_description();
  if (locale2 === "it") return it_settings_conversion_default_format_description();
  if (locale2 === "hr") return hr_settings_conversion_default_format_description();
  if (locale2 === "tr") return tr_settings_conversion_default_format_description();
  if (locale2 === "ja") return ja_settings_conversion_default_format_description();
  if (locale2 === "ko") return ko_settings_conversion_default_format_description();
  if (locale2 === "el") return el_settings_conversion_default_format_description();
  if (locale2 === "id") return id_settings_conversion_default_format_description();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_default_format_description();
  return zh_hant1_settings_conversion_default_format_description();
};
const en_settings_conversion_default_format_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Images`;
  }
);
const es_settings_conversion_default_format_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Imágenes`;
  }
);
const fr_settings_conversion_default_format_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Images`;
  }
);
const de_settings_conversion_default_format_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bilder`;
  }
);
const it_settings_conversion_default_format_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Immagini`;
  }
);
const hr_settings_conversion_default_format_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Slike`;
  }
);
const tr_settings_conversion_default_format_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Görsel`;
  }
);
const ja_settings_conversion_default_format_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `画像`;
  }
);
const ko_settings_conversion_default_format_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이미지`;
  }
);
const el_settings_conversion_default_format_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Εικόνες`;
  }
);
const id_settings_conversion_default_format_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Gambar`;
  }
);
const zh_hans1_settings_conversion_default_format_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `图片`;
  }
);
const zh_hant1_settings_conversion_default_format_image = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `圖片`;
  }
);
const settings_conversion_default_format_image = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_default_format_image", locale2);
  if (locale2 === "en") return en_settings_conversion_default_format_image();
  if (locale2 === "es") return es_settings_conversion_default_format_image();
  if (locale2 === "fr") return fr_settings_conversion_default_format_image();
  if (locale2 === "de") return de_settings_conversion_default_format_image();
  if (locale2 === "it") return it_settings_conversion_default_format_image();
  if (locale2 === "hr") return hr_settings_conversion_default_format_image();
  if (locale2 === "tr") return tr_settings_conversion_default_format_image();
  if (locale2 === "ja") return ja_settings_conversion_default_format_image();
  if (locale2 === "ko") return ko_settings_conversion_default_format_image();
  if (locale2 === "el") return el_settings_conversion_default_format_image();
  if (locale2 === "id") return id_settings_conversion_default_format_image();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_default_format_image();
  return zh_hant1_settings_conversion_default_format_image();
};
const en_settings_conversion_default_format_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Videos`;
  }
);
const es_settings_conversion_default_format_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Vídeos`;
  }
);
const fr_settings_conversion_default_format_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Videos`;
  }
);
const de_settings_conversion_default_format_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Videos`;
  }
);
const it_settings_conversion_default_format_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const hr_settings_conversion_default_format_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Videozapisi`;
  }
);
const tr_settings_conversion_default_format_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const ja_settings_conversion_default_format_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `動画`;
  }
);
const ko_settings_conversion_default_format_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `비디오`;
  }
);
const el_settings_conversion_default_format_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Βίντεο`;
  }
);
const id_settings_conversion_default_format_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video`;
  }
);
const zh_hans1_settings_conversion_default_format_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `视频`;
  }
);
const zh_hant1_settings_conversion_default_format_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `影片`;
  }
);
const settings_conversion_default_format_video = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_default_format_video", locale2);
  if (locale2 === "en") return en_settings_conversion_default_format_video();
  if (locale2 === "es") return es_settings_conversion_default_format_video();
  if (locale2 === "fr") return fr_settings_conversion_default_format_video();
  if (locale2 === "de") return de_settings_conversion_default_format_video();
  if (locale2 === "it") return it_settings_conversion_default_format_video();
  if (locale2 === "hr") return hr_settings_conversion_default_format_video();
  if (locale2 === "tr") return tr_settings_conversion_default_format_video();
  if (locale2 === "ja") return ja_settings_conversion_default_format_video();
  if (locale2 === "ko") return ko_settings_conversion_default_format_video();
  if (locale2 === "el") return el_settings_conversion_default_format_video();
  if (locale2 === "id") return id_settings_conversion_default_format_video();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_default_format_video();
  return zh_hant1_settings_conversion_default_format_video();
};
const en_settings_conversion_default_format_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const es_settings_conversion_default_format_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const fr_settings_conversion_default_format_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const de_settings_conversion_default_format_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const it_settings_conversion_default_format_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const hr_settings_conversion_default_format_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const tr_settings_conversion_default_format_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ses`;
  }
);
const ja_settings_conversion_default_format_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音声`;
  }
);
const ko_settings_conversion_default_format_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `오디오`;
  }
);
const el_settings_conversion_default_format_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ήχος`;
  }
);
const id_settings_conversion_default_format_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio`;
  }
);
const zh_hans1_settings_conversion_default_format_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音频`;
  }
);
const zh_hant1_settings_conversion_default_format_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音訊`;
  }
);
const settings_conversion_default_format_audio = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_default_format_audio", locale2);
  if (locale2 === "en") return en_settings_conversion_default_format_audio();
  if (locale2 === "es") return es_settings_conversion_default_format_audio();
  if (locale2 === "fr") return fr_settings_conversion_default_format_audio();
  if (locale2 === "de") return de_settings_conversion_default_format_audio();
  if (locale2 === "it") return it_settings_conversion_default_format_audio();
  if (locale2 === "hr") return hr_settings_conversion_default_format_audio();
  if (locale2 === "tr") return tr_settings_conversion_default_format_audio();
  if (locale2 === "ja") return ja_settings_conversion_default_format_audio();
  if (locale2 === "ko") return ko_settings_conversion_default_format_audio();
  if (locale2 === "el") return el_settings_conversion_default_format_audio();
  if (locale2 === "id") return id_settings_conversion_default_format_audio();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_default_format_audio();
  return zh_hant1_settings_conversion_default_format_audio();
};
const en_settings_conversion_default_format_document = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Documents`;
  }
);
const es_settings_conversion_default_format_document = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Documentos`;
  }
);
const fr_settings_conversion_default_format_document = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Documents`;
  }
);
const de_settings_conversion_default_format_document = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dokumente`;
  }
);
const it_settings_conversion_default_format_document = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Documenti`;
  }
);
const hr_settings_conversion_default_format_document = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dokumenti`;
  }
);
const tr_settings_conversion_default_format_document = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Belge`;
  }
);
const ja_settings_conversion_default_format_document = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ドキュメント`;
  }
);
const ko_settings_conversion_default_format_document = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `문서`;
  }
);
const el_settings_conversion_default_format_document = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Έγγραφα`;
  }
);
const id_settings_conversion_default_format_document = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dokumen`;
  }
);
const zh_hans1_settings_conversion_default_format_document = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `文档`;
  }
);
const zh_hant1_settings_conversion_default_format_document = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `文件`;
  }
);
const settings_conversion_default_format_document = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_default_format_document", locale2);
  if (locale2 === "en") return en_settings_conversion_default_format_document();
  if (locale2 === "es") return es_settings_conversion_default_format_document();
  if (locale2 === "fr") return fr_settings_conversion_default_format_document();
  if (locale2 === "de") return de_settings_conversion_default_format_document();
  if (locale2 === "it") return it_settings_conversion_default_format_document();
  if (locale2 === "hr") return hr_settings_conversion_default_format_document();
  if (locale2 === "tr") return tr_settings_conversion_default_format_document();
  if (locale2 === "ja") return ja_settings_conversion_default_format_document();
  if (locale2 === "ko") return ko_settings_conversion_default_format_document();
  if (locale2 === "el") return el_settings_conversion_default_format_document();
  if (locale2 === "id") return id_settings_conversion_default_format_document();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_default_format_document();
  return zh_hant1_settings_conversion_default_format_document();
};
const en_settings_conversion_metadata = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `File metadata`;
  }
);
const es_settings_conversion_metadata = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Metadatos del archivo`;
  }
);
const fr_settings_conversion_metadata = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Métadonnées du fichier`;
  }
);
const de_settings_conversion_metadata = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Datei-Metadaten`;
  }
);
const it_settings_conversion_metadata = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Metadati del file`;
  }
);
const hr_settings_conversion_metadata = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Metapodatci datoteke`;
  }
);
const tr_settings_conversion_metadata = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dosya metadata`;
  }
);
const ja_settings_conversion_metadata = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ファイルメタデータ`;
  }
);
const ko_settings_conversion_metadata = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `파일 메타데이터`;
  }
);
const el_settings_conversion_metadata = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μεταδεδομένα αρχείου`;
  }
);
const id_settings_conversion_metadata = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Metadata berkas`;
  }
);
const zh_hans1_settings_conversion_metadata = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `文件元数据`;
  }
);
const zh_hant1_settings_conversion_metadata = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `檔案中繼資料`;
  }
);
const settings_conversion_metadata = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_metadata", locale2);
  if (locale2 === "en") return en_settings_conversion_metadata();
  if (locale2 === "es") return es_settings_conversion_metadata();
  if (locale2 === "fr") return fr_settings_conversion_metadata();
  if (locale2 === "de") return de_settings_conversion_metadata();
  if (locale2 === "it") return it_settings_conversion_metadata();
  if (locale2 === "hr") return hr_settings_conversion_metadata();
  if (locale2 === "tr") return tr_settings_conversion_metadata();
  if (locale2 === "ja") return ja_settings_conversion_metadata();
  if (locale2 === "ko") return ko_settings_conversion_metadata();
  if (locale2 === "el") return el_settings_conversion_metadata();
  if (locale2 === "id") return id_settings_conversion_metadata();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_metadata();
  return zh_hant1_settings_conversion_metadata();
};
const en_settings_conversion_metadata_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `This changes whether any metadata (EXIF, song info, etc.) on the original file is preserved in converted files.`;
  }
);
const es_settings_conversion_metadata_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Esto cambia si los metadatos (EXIF, información de la canción, etc.) del archivo original se conservan en los archivos convertidos.`;
  }
);
const fr_settings_conversion_metadata_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cela modifie si les métadonnées (EXIF, informations sur la chanson, etc.) du fichier d'origine sont conservées dans les fichiers convertis.`;
  }
);
const de_settings_conversion_metadata_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dies legt fest, ob Metadaten (EXIF, Song-Infos etc.) der Originaldatei in den konvertierten Dateien erhalten bleiben.`;
  }
);
const it_settings_conversion_metadata_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Questo cambia se eventuali metadati (EXIF, informazioni sul brano, ecc.) del file originale vengono conservati nei file convertiti.`;
  }
);
const hr_settings_conversion_metadata_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ovo mijenja spremaju li se ikakvi metapodatci (EXIF, informacije o pjesmi, itd.) sa originalne datoteke na pretvorenu datoteku`;
  }
);
const tr_settings_conversion_metadata_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bu ayar, orijinal dosyadaki meta verilerin (EXIF, şarkı bilgileri vb.) dönüştürülen dosyalarda korunup korunmayacağını değiştirir.`;
  }
);
const ja_settings_conversion_metadata_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `変換後のファイルに元のメタデータ（EXIF、曲情報など）を保持するかどうかを変更します。`;
  }
);
const ko_settings_conversion_metadata_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `원본 파일의 메타데이터(EXIF, 노래 정보 등)가 변환된 파일에 유지되는지 선택할 수 있습니다.`;
  }
);
const el_settings_conversion_metadata_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αυτό αλλάζει το αν τυχόν μεταδεδομένα (EXIF, πληροφορίες τραγουδιού κ.λπ.) στο αρχικό αρχείο διατηρούνται στα μετατρεπόμενα αρχεία.`;
  }
);
const id_settings_conversion_metadata_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Menentukan apakah metadata (EXIF, info lagu, dll.) dari berkas asli akan dipertahankan di berkas hasil konversi.`;
  }
);
const zh_hans1_settings_conversion_metadata_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `这将更改转换后的文件是否保留原始文件的元数据（EXIF、歌曲信息等）。`;
  }
);
const zh_hant1_settings_conversion_metadata_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `這將更改轉換後的檔案是否保留原始檔案的中繼資料（EXIF、歌曲資訊等）。`;
  }
);
const settings_conversion_metadata_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_metadata_description", locale2);
  if (locale2 === "en") return en_settings_conversion_metadata_description();
  if (locale2 === "es") return es_settings_conversion_metadata_description();
  if (locale2 === "fr") return fr_settings_conversion_metadata_description();
  if (locale2 === "de") return de_settings_conversion_metadata_description();
  if (locale2 === "it") return it_settings_conversion_metadata_description();
  if (locale2 === "hr") return hr_settings_conversion_metadata_description();
  if (locale2 === "tr") return tr_settings_conversion_metadata_description();
  if (locale2 === "ja") return ja_settings_conversion_metadata_description();
  if (locale2 === "ko") return ko_settings_conversion_metadata_description();
  if (locale2 === "el") return el_settings_conversion_metadata_description();
  if (locale2 === "id") return id_settings_conversion_metadata_description();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_metadata_description();
  return zh_hant1_settings_conversion_metadata_description();
};
const en_settings_conversion_keep = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Keep`;
  }
);
const es_settings_conversion_keep = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mantener`;
  }
);
const fr_settings_conversion_keep = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conserver`;
  }
);
const de_settings_conversion_keep = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Beibehalten`;
  }
);
const it_settings_conversion_keep = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mantieni`;
  }
);
const hr_settings_conversion_keep = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ostavi`;
  }
);
const tr_settings_conversion_keep = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sakla`;
  }
);
const ja_settings_conversion_keep = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `保持`;
  }
);
const ko_settings_conversion_keep = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `유지`;
  }
);
const el_settings_conversion_keep = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Διατήρηση`;
  }
);
const id_settings_conversion_keep = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pertahankan`;
  }
);
const zh_hans1_settings_conversion_keep = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `保留`;
  }
);
const zh_hant1_settings_conversion_keep = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `保留`;
  }
);
const settings_conversion_keep = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_keep", locale2);
  if (locale2 === "en") return en_settings_conversion_keep();
  if (locale2 === "es") return es_settings_conversion_keep();
  if (locale2 === "fr") return fr_settings_conversion_keep();
  if (locale2 === "de") return de_settings_conversion_keep();
  if (locale2 === "it") return it_settings_conversion_keep();
  if (locale2 === "hr") return hr_settings_conversion_keep();
  if (locale2 === "tr") return tr_settings_conversion_keep();
  if (locale2 === "ja") return ja_settings_conversion_keep();
  if (locale2 === "ko") return ko_settings_conversion_keep();
  if (locale2 === "el") return el_settings_conversion_keep();
  if (locale2 === "id") return id_settings_conversion_keep();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_keep();
  return zh_hant1_settings_conversion_keep();
};
const en_settings_conversion_remove = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Remove`;
  }
);
const es_settings_conversion_remove = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Eliminar`;
  }
);
const fr_settings_conversion_remove = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Retirer`;
  }
);
const de_settings_conversion_remove = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Entfernen`;
  }
);
const it_settings_conversion_remove = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Rimuovi`;
  }
);
const hr_settings_conversion_remove = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Obriši`;
  }
);
const tr_settings_conversion_remove = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kaldır`;
  }
);
const ja_settings_conversion_remove = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `削除`;
  }
);
const ko_settings_conversion_remove = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `제거`;
  }
);
const el_settings_conversion_remove = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αφαίρεση`;
  }
);
const id_settings_conversion_remove = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Hapus`;
  }
);
const zh_hans1_settings_conversion_remove = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `删除`;
  }
);
const zh_hant1_settings_conversion_remove = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `移除`;
  }
);
const settings_conversion_remove = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_remove", locale2);
  if (locale2 === "en") return en_settings_conversion_remove();
  if (locale2 === "es") return es_settings_conversion_remove();
  if (locale2 === "fr") return fr_settings_conversion_remove();
  if (locale2 === "de") return de_settings_conversion_remove();
  if (locale2 === "it") return it_settings_conversion_remove();
  if (locale2 === "hr") return hr_settings_conversion_remove();
  if (locale2 === "tr") return tr_settings_conversion_remove();
  if (locale2 === "ja") return ja_settings_conversion_remove();
  if (locale2 === "ko") return ko_settings_conversion_remove();
  if (locale2 === "el") return el_settings_conversion_remove();
  if (locale2 === "id") return id_settings_conversion_remove();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_remove();
  return zh_hant1_settings_conversion_remove();
};
const en_settings_conversion_quality = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conversion quality`;
  }
);
const es_settings_conversion_quality = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Calidad de la conversión`;
  }
);
const fr_settings_conversion_quality = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Qualité de conversion`;
  }
);
const de_settings_conversion_quality = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konvertierungsqualität`;
  }
);
const it_settings_conversion_quality = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Qualità di conversione`;
  }
);
const hr_settings_conversion_quality = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kvaliteta pretvaranja`;
  }
);
const tr_settings_conversion_quality = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dönüştürme kalitesi`;
  }
);
const ja_settings_conversion_quality = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `変換品質`;
  }
);
const ko_settings_conversion_quality = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `변환 품질`;
  }
);
const el_settings_conversion_quality = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ποιότητα μετατροπής`;
  }
);
const id_settings_conversion_quality = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kualitas konversi`;
  }
);
const zh_hans1_settings_conversion_quality = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `转换质量`;
  }
);
const zh_hant1_settings_conversion_quality = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `轉換品質`;
  }
);
const settings_conversion_quality = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_quality", locale2);
  if (locale2 === "en") return en_settings_conversion_quality();
  if (locale2 === "es") return es_settings_conversion_quality();
  if (locale2 === "fr") return fr_settings_conversion_quality();
  if (locale2 === "de") return de_settings_conversion_quality();
  if (locale2 === "it") return it_settings_conversion_quality();
  if (locale2 === "hr") return hr_settings_conversion_quality();
  if (locale2 === "tr") return tr_settings_conversion_quality();
  if (locale2 === "ja") return ja_settings_conversion_quality();
  if (locale2 === "ko") return ko_settings_conversion_quality();
  if (locale2 === "el") return el_settings_conversion_quality();
  if (locale2 === "id") return id_settings_conversion_quality();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_quality();
  return zh_hant1_settings_conversion_quality();
};
const en_settings_conversion_quality_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `This changes the default output quality of the converted files (in its category). Higher values may result in longer conversion times and file size.`;
  }
);
const es_settings_conversion_quality_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Esto cambia la calidad por defecto de los archivos convertidos (en su categoría). Valores más altos pueden resultar en tiempos de conversión y tamaños de archivo más largos.`;
  }
);
const fr_settings_conversion_quality_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cela modifie la qualité de sortie par défaut des fichiers convertis (de son format). Des valeurs plus élevées peuvent entraîner des temps de conversion et une taille de fichier plus longs.`;
  }
);
const de_settings_conversion_quality_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dies ändert die Standard-Ausgabequalität der konvertierten Dateien (in ihrer Kategorie). Höhere Werte können zu längeren Konvertierungszeiten und größeren Dateigrößen führen.`;
  }
);
const it_settings_conversion_quality_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Questo cambia la qualità di output predefinita dei file convertiti (nella sua categoria). Valori più alti possono comportare tempi di conversione più lunghi e dimensioni maggiori.`;
  }
);
const hr_settings_conversion_quality_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ovo mijenja zadanu izlaznu kvalitetu pretvorene datoteke (u svojoj kategoriji). Veći iznosi mogu uzrokovati duže vrijeme za pretvaranje i veličinu.`;
  }
);
const tr_settings_conversion_quality_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bu, dönüştürülen dosyaların (kendi kategorisinde) varsayılan çıktı kalitesini değiştirir. Yüksek değerler, uzun dönüştürme sürelerine ve büyük dosya boyutuna neden olabilir.`;
  }
);
const ja_settings_conversion_quality_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `出力ファイルの品質を変更します。値が高いほど処理時間とファイルサイズが増加します。`;
  }
);
const ko_settings_conversion_quality_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `변환된 파일의 기본 출력 품질을 변경합니다(카테고리 내에서). 더 높은 값은 더 긴 변환 시간과 파일 크기를 초래할 수 있습니다.`;
  }
);
const el_settings_conversion_quality_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αυτό αλλάζει την προεπιλεγμένη ποιότητα εξόδου των μετατρεπόμενων αρχείων (στην κατηγορία του). Υψηλότερες τιμές μπορεί να οδηγήσουν σε μεγαλύτερους χρόνους μετατροπής και μέγεθος αρχείου.`;
  }
);
const id_settings_conversion_quality_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mengubah kualitas keluaran baku berkas hasil konversi. Nilai yang lebih tinggi dapat menghasilkan waktu konversi dan ukuran berkas yang lebih besar.`;
  }
);
const zh_hans1_settings_conversion_quality_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `更改输出文件的质量。值越高，处理时间和文件大小越大。`;
  }
);
const zh_hant1_settings_conversion_quality_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `更改輸出檔案的品質。值越高，處理時間和檔案大小越大。`;
  }
);
const settings_conversion_quality_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_quality_description", locale2);
  if (locale2 === "en") return en_settings_conversion_quality_description();
  if (locale2 === "es") return es_settings_conversion_quality_description();
  if (locale2 === "fr") return fr_settings_conversion_quality_description();
  if (locale2 === "de") return de_settings_conversion_quality_description();
  if (locale2 === "it") return it_settings_conversion_quality_description();
  if (locale2 === "hr") return hr_settings_conversion_quality_description();
  if (locale2 === "tr") return tr_settings_conversion_quality_description();
  if (locale2 === "ja") return ja_settings_conversion_quality_description();
  if (locale2 === "ko") return ko_settings_conversion_quality_description();
  if (locale2 === "el") return el_settings_conversion_quality_description();
  if (locale2 === "id") return id_settings_conversion_quality_description();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_quality_description();
  return zh_hant1_settings_conversion_quality_description();
};
const en_settings_conversion_quality_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `This changes the default output quality of the converted video files. Higher values may result in longer conversion times and file size.`;
  }
);
const es_settings_conversion_quality_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Esto cambia la calidad por defecto de los vídeos convertidos. Valores más altos pueden resultar en tiempos de conversión y tamaños de archivo más largos.`;
  }
);
const fr_settings_conversion_quality_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cela modifie la qualité de sortie par défaut des fichiers vidéo convertis. Des valeurs plus élevées peuvent allonger le temps de conversion et la taille du fichier.`;
  }
);
const de_settings_conversion_quality_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dies ändert die Standard-Ausgabequalität der konvertierten Videodateien. Höhere Werte können zu längeren Konvertierungszeiten und größeren Dateigrößen führen.`;
  }
);
const it_settings_conversion_quality_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Questo cambia la qualità di output predefinita dei file video convertiti. Valori più alti possono comportare tempi di conversione più lunghi e dimensioni maggiori.`;
  }
);
const hr_settings_conversion_quality_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ovo mijenja zadanu izlaznu kvalitetu pretvoranog videozapisa. Veći iznosi mogu uzrokovati duže vrijeme za pretvaranje i veličinu.`;
  }
);
const tr_settings_conversion_quality_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bu, dönüştürülen videoların varsayılan çıktı kalitesini değiştirir. Yüksek değerler, uzun dönüştürme sürelerine ve büyük dosya boyutuna neden olabilir.`;
  }
);
const ja_settings_conversion_quality_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `動画変換の品質を変更します。高品質ほど変換時間とサイズが増加します。`;
  }
);
const ko_settings_conversion_quality_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `변환된 비디오 파일의 기본 출력 품질을 변경합니다. 높은 값은 더 긴시간과 파일 크기를 초래할 수 있습니다.`;
  }
);
const el_settings_conversion_quality_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αυτό αλλάζει την προεπιλεγμένη ποιότητα εξόδου των μετατρεπόμενων αρχείων βίντεο. Υψηλότερες τιμές μπορεί να οδηγήσουν σε μεγαλύτερους χρόνους μετατροπής και μέγεθος αρχείου.`;
  }
);
const id_settings_conversion_quality_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mengubah kualitas keluaran baku berkas video hasil konversi. Nilai yang lebih tinggi dapat memperpanjang waktu dan ukuran berkas.`;
  }
);
const zh_hans1_settings_conversion_quality_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `更改视频转换的质量。质量越高，转换时间和文件大小越大。`;
  }
);
const zh_hant1_settings_conversion_quality_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `更改影片轉換的品質。品質越高，轉換時間和檔案大小越大。`;
  }
);
const settings_conversion_quality_video = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_quality_video", locale2);
  if (locale2 === "en") return en_settings_conversion_quality_video();
  if (locale2 === "es") return es_settings_conversion_quality_video();
  if (locale2 === "fr") return fr_settings_conversion_quality_video();
  if (locale2 === "de") return de_settings_conversion_quality_video();
  if (locale2 === "it") return it_settings_conversion_quality_video();
  if (locale2 === "hr") return hr_settings_conversion_quality_video();
  if (locale2 === "tr") return tr_settings_conversion_quality_video();
  if (locale2 === "ja") return ja_settings_conversion_quality_video();
  if (locale2 === "ko") return ko_settings_conversion_quality_video();
  if (locale2 === "el") return el_settings_conversion_quality_video();
  if (locale2 === "id") return id_settings_conversion_quality_video();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_quality_video();
  return zh_hant1_settings_conversion_quality_video();
};
const en_settings_conversion_quality_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio (kbps)`;
  }
);
const es_settings_conversion_quality_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio (kbps)`;
  }
);
const fr_settings_conversion_quality_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio (kbps)`;
  }
);
const de_settings_conversion_quality_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio (kbps)`;
  }
);
const it_settings_conversion_quality_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio (kbps)`;
  }
);
const hr_settings_conversion_quality_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio (kbps)`;
  }
);
const tr_settings_conversion_quality_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ses (kbps)`;
  }
);
const ja_settings_conversion_quality_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音声（kbps）`;
  }
);
const ko_settings_conversion_quality_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `오디오 (kbps)`;
  }
);
const el_settings_conversion_quality_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ήχος (kbps)`;
  }
);
const id_settings_conversion_quality_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Audio (kbps)`;
  }
);
const zh_hans1_settings_conversion_quality_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音频（kbps）`;
  }
);
const zh_hant1_settings_conversion_quality_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音訊（kbps）`;
  }
);
const settings_conversion_quality_audio = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_quality_audio", locale2);
  if (locale2 === "en") return en_settings_conversion_quality_audio();
  if (locale2 === "es") return es_settings_conversion_quality_audio();
  if (locale2 === "fr") return fr_settings_conversion_quality_audio();
  if (locale2 === "de") return de_settings_conversion_quality_audio();
  if (locale2 === "it") return it_settings_conversion_quality_audio();
  if (locale2 === "hr") return hr_settings_conversion_quality_audio();
  if (locale2 === "tr") return tr_settings_conversion_quality_audio();
  if (locale2 === "ja") return ja_settings_conversion_quality_audio();
  if (locale2 === "ko") return ko_settings_conversion_quality_audio();
  if (locale2 === "el") return el_settings_conversion_quality_audio();
  if (locale2 === "id") return id_settings_conversion_quality_audio();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_quality_audio();
  return zh_hant1_settings_conversion_quality_audio();
};
const en_settings_conversion_quality_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Image (%)`;
  }
);
const es_settings_conversion_quality_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Imagen (%)`;
  }
);
const fr_settings_conversion_quality_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Image (%)`;
  }
);
const de_settings_conversion_quality_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bild (%)`;
  }
);
const it_settings_conversion_quality_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Immagine (%)`;
  }
);
const hr_settings_conversion_quality_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Slika (%)`;
  }
);
const tr_settings_conversion_quality_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Görsel (%)`;
  }
);
const ja_settings_conversion_quality_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `画像（％）`;
  }
);
const ko_settings_conversion_quality_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이미지 (%)`;
  }
);
const el_settings_conversion_quality_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Εικόνα (%)`;
  }
);
const id_settings_conversion_quality_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Gambar (%)`;
  }
);
const zh_hans1_settings_conversion_quality_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `图片（%）`;
  }
);
const zh_hant1_settings_conversion_quality_images = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `圖片（%）`;
  }
);
const settings_conversion_quality_images = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_quality_images", locale2);
  if (locale2 === "en") return en_settings_conversion_quality_images();
  if (locale2 === "es") return es_settings_conversion_quality_images();
  if (locale2 === "fr") return fr_settings_conversion_quality_images();
  if (locale2 === "de") return de_settings_conversion_quality_images();
  if (locale2 === "it") return it_settings_conversion_quality_images();
  if (locale2 === "hr") return hr_settings_conversion_quality_images();
  if (locale2 === "tr") return tr_settings_conversion_quality_images();
  if (locale2 === "ja") return ja_settings_conversion_quality_images();
  if (locale2 === "ko") return ko_settings_conversion_quality_images();
  if (locale2 === "el") return el_settings_conversion_quality_images();
  if (locale2 === "id") return id_settings_conversion_quality_images();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_quality_images();
  return zh_hant1_settings_conversion_quality_images();
};
const en_settings_conversion_rate = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sample rate (Hz)`;
  }
);
const es_settings_conversion_rate = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tasa de muestreo (Hz)`;
  }
);
const fr_settings_conversion_rate = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Taux d'échantillonnage (Hz)`;
  }
);
const de_settings_conversion_rate = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Abtastrate (Hz)`;
  }
);
const it_settings_conversion_rate = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Frequenza di campionamento (Hz)`;
  }
);
const hr_settings_conversion_rate = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sample rate (Hz)`;
  }
);
const tr_settings_conversion_rate = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Örnekleme oranı (Hz)`;
  }
);
const ja_settings_conversion_rate = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `サンプリングレート（Hz）`;
  }
);
const ko_settings_conversion_rate = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `샘플링 주파수 (Hz)`;
  }
);
const el_settings_conversion_rate = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ρυθμός δειγματοληψίας (Hz)`;
  }
);
const id_settings_conversion_rate = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Laju sampel (Hz)`;
  }
);
const zh_hans1_settings_conversion_rate = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `采样率（Hz）`;
  }
);
const zh_hant1_settings_conversion_rate = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `取樣率（Hz）`;
  }
);
const settings_conversion_rate = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_conversion_rate", locale2);
  if (locale2 === "en") return en_settings_conversion_rate();
  if (locale2 === "es") return es_settings_conversion_rate();
  if (locale2 === "fr") return fr_settings_conversion_rate();
  if (locale2 === "de") return de_settings_conversion_rate();
  if (locale2 === "it") return it_settings_conversion_rate();
  if (locale2 === "hr") return hr_settings_conversion_rate();
  if (locale2 === "tr") return tr_settings_conversion_rate();
  if (locale2 === "ja") return ja_settings_conversion_rate();
  if (locale2 === "ko") return ko_settings_conversion_rate();
  if (locale2 === "el") return el_settings_conversion_rate();
  if (locale2 === "id") return id_settings_conversion_rate();
  if (locale2 === "zh-Hans") return zh_hans1_settings_conversion_rate();
  return zh_hant1_settings_conversion_rate();
};
const en_settings_filetoolsd_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video conversion`;
  }
);
const es_settings_filetoolsd_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conversión de vídeo`;
  }
);
const fr_settings_filetoolsd_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conversion vidéo`;
  }
);
const de_settings_filetoolsd_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Videokonvertierung`;
  }
);
const it_settings_filetoolsd_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conversione video`;
  }
);
const hr_settings_filetoolsd_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pretvaranje videozapisa`;
  }
);
const tr_settings_filetoolsd_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Video dönüştürme`;
  }
);
const ja_settings_filetoolsd_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `動画変換`;
  }
);
const ko_settings_filetoolsd_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `비디오 변환 서버`;
  }
);
const el_settings_filetoolsd_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μετατροπή βίντεο`;
  }
);
const id_settings_filetoolsd_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konversi video`;
  }
);
const zh_hans1_settings_filetoolsd_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `视频转换`;
  }
);
const zh_hant1_settings_filetoolsd_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `影片轉換`;
  }
);
const settings_filetoolsd_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_title", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_title();
  if (locale2 === "es") return es_settings_filetoolsd_title();
  if (locale2 === "fr") return fr_settings_filetoolsd_title();
  if (locale2 === "de") return de_settings_filetoolsd_title();
  if (locale2 === "it") return it_settings_filetoolsd_title();
  if (locale2 === "hr") return hr_settings_filetoolsd_title();
  if (locale2 === "tr") return tr_settings_filetoolsd_title();
  if (locale2 === "ja") return ja_settings_filetoolsd_title();
  if (locale2 === "ko") return ko_settings_filetoolsd_title();
  if (locale2 === "el") return el_settings_filetoolsd_title();
  if (locale2 === "id") return id_settings_filetoolsd_title();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_title();
  return zh_hant1_settings_filetoolsd_title();
};
const en_settings_filetoolsd_status = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `status:`;
  }
);
const es_settings_filetoolsd_status = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `estado:`;
  }
);
const fr_settings_filetoolsd_status = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `status:`;
  }
);
const de_settings_filetoolsd_status = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Status:`;
  }
);
const it_settings_filetoolsd_status = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `stato:`;
  }
);
const hr_settings_filetoolsd_status = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `status:`;
  }
);
const tr_settings_filetoolsd_status = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `durum:`;
  }
);
const ja_settings_filetoolsd_status = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ステータス：`;
  }
);
const ko_settings_filetoolsd_status = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `상태:`;
  }
);
const el_settings_filetoolsd_status = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `κατάσταση:`;
  }
);
const id_settings_filetoolsd_status = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `status:`;
  }
);
const zh_hans1_settings_filetoolsd_status = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `状态：`;
  }
);
const zh_hant1_settings_filetoolsd_status = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `狀態：`;
  }
);
const settings_filetoolsd_status = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_status", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_status();
  if (locale2 === "es") return es_settings_filetoolsd_status();
  if (locale2 === "fr") return fr_settings_filetoolsd_status();
  if (locale2 === "de") return de_settings_filetoolsd_status();
  if (locale2 === "it") return it_settings_filetoolsd_status();
  if (locale2 === "hr") return hr_settings_filetoolsd_status();
  if (locale2 === "tr") return tr_settings_filetoolsd_status();
  if (locale2 === "ja") return ja_settings_filetoolsd_status();
  if (locale2 === "ko") return ko_settings_filetoolsd_status();
  if (locale2 === "el") return el_settings_filetoolsd_status();
  if (locale2 === "id") return id_settings_filetoolsd_status();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_status();
  return zh_hant1_settings_filetoolsd_status();
};
const en_settings_filetoolsd_loading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `loading...`;
  }
);
const es_settings_filetoolsd_loading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `cargando...`;
  }
);
const fr_settings_filetoolsd_loading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Chargement...`;
  }
);
const de_settings_filetoolsd_loading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `lädt...`;
  }
);
const it_settings_filetoolsd_loading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `caricamento...`;
  }
);
const hr_settings_filetoolsd_loading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `učitavanje...`;
  }
);
const tr_settings_filetoolsd_loading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `yükleniyor...`;
  }
);
const ja_settings_filetoolsd_loading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `読み込み中...`;
  }
);
const ko_settings_filetoolsd_loading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `로딩중...`;
  }
);
const el_settings_filetoolsd_loading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `φόρτωση...`;
  }
);
const id_settings_filetoolsd_loading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `memuat...`;
  }
);
const zh_hans1_settings_filetoolsd_loading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `加载中...`;
  }
);
const zh_hant1_settings_filetoolsd_loading = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `載入中...`;
  }
);
const settings_filetoolsd_loading = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_loading", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_loading();
  if (locale2 === "es") return es_settings_filetoolsd_loading();
  if (locale2 === "fr") return fr_settings_filetoolsd_loading();
  if (locale2 === "de") return de_settings_filetoolsd_loading();
  if (locale2 === "it") return it_settings_filetoolsd_loading();
  if (locale2 === "hr") return hr_settings_filetoolsd_loading();
  if (locale2 === "tr") return tr_settings_filetoolsd_loading();
  if (locale2 === "ja") return ja_settings_filetoolsd_loading();
  if (locale2 === "ko") return ko_settings_filetoolsd_loading();
  if (locale2 === "el") return el_settings_filetoolsd_loading();
  if (locale2 === "id") return id_settings_filetoolsd_loading();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_loading();
  return zh_hant1_settings_filetoolsd_loading();
};
const en_settings_filetoolsd_available = (
  /** @type {(inputs: { commitId: NonNullable<unknown> }) => string} */
  (i) => {
    return `available, commit id ${i.commitId}`;
  }
);
const es_settings_filetoolsd_available = (
  /** @type {(inputs: { commitId: NonNullable<unknown> }) => string} */
  (i) => {
    return `disponible, id del commit ${i.commitId}`;
  }
);
const fr_settings_filetoolsd_available = (
  /** @type {(inputs: { commitId: NonNullable<unknown> }) => string} */
  (i) => {
    return `disponible, identifiant de validation ${i.commitId}`;
  }
);
const de_settings_filetoolsd_available = (
  /** @type {(inputs: { commitId: NonNullable<unknown> }) => string} */
  (i) => {
    return `verfügbar, Commit-ID ${i.commitId}`;
  }
);
const it_settings_filetoolsd_available = (
  /** @type {(inputs: { commitId: NonNullable<unknown> }) => string} */
  (i) => {
    return `disponibile, ID commit ${i.commitId}`;
  }
);
const hr_settings_filetoolsd_available = (
  /** @type {(inputs: { commitId: NonNullable<unknown> }) => string} */
  (i) => {
    return `dostupno, commit id ${i.commitId}`;
  }
);
const tr_settings_filetoolsd_available = (
  /** @type {(inputs: { commitId: NonNullable<unknown> }) => string} */
  (i) => {
    return `uygun, işlem no: ${i.commitId}`;
  }
);
const ja_settings_filetoolsd_available = (
  /** @type {(inputs: { commitId: NonNullable<unknown> }) => string} */
  (i) => {
    return `利用可能（コミットID ${i.commitId}）`;
  }
);
const ko_settings_filetoolsd_available = (
  /** @type {(inputs: { commitId: NonNullable<unknown> }) => string} */
  (i) => {
    return `사용 가능, 커밋 ID ${i.commitId}`;
  }
);
const el_settings_filetoolsd_available = (
  /** @type {(inputs: { commitId: NonNullable<unknown> }) => string} */
  (i) => {
    return `διαθέσιμο, αναγνωριστικό έκδοσης ${i.commitId}`;
  }
);
const id_settings_filetoolsd_available = (
  /** @type {(inputs: { commitId: NonNullable<unknown> }) => string} */
  (i) => {
    return `tersedia, commit id ${i.commitId}`;
  }
);
const zh_hans1_settings_filetoolsd_available = (
  /** @type {(inputs: { commitId: NonNullable<unknown> }) => string} */
  (i) => {
    return `可用（提交 ID ${i.commitId}）`;
  }
);
const zh_hant1_settings_filetoolsd_available = (
  /** @type {(inputs: { commitId: NonNullable<unknown> }) => string} */
  (i) => {
    return `可用（提交 ID ${i.commitId}）`;
  }
);
const settings_filetoolsd_available = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_available", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_available(inputs);
  if (locale2 === "es") return es_settings_filetoolsd_available(inputs);
  if (locale2 === "fr") return fr_settings_filetoolsd_available(inputs);
  if (locale2 === "de") return de_settings_filetoolsd_available(inputs);
  if (locale2 === "it") return it_settings_filetoolsd_available(inputs);
  if (locale2 === "hr") return hr_settings_filetoolsd_available(inputs);
  if (locale2 === "tr") return tr_settings_filetoolsd_available(inputs);
  if (locale2 === "ja") return ja_settings_filetoolsd_available(inputs);
  if (locale2 === "ko") return ko_settings_filetoolsd_available(inputs);
  if (locale2 === "el") return el_settings_filetoolsd_available(inputs);
  if (locale2 === "id") return id_settings_filetoolsd_available(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_available(inputs);
  return zh_hant1_settings_filetoolsd_available(inputs);
};
const en_settings_filetoolsd_unavailable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `unavailable (is the url right?)`;
  }
);
const es_settings_filetoolsd_unavailable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `no disponible (¿has comprobado la url?)`;
  }
);
const fr_settings_filetoolsd_unavailable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `indisponible (l'url est-elle correcte ?)`;
  }
);
const de_settings_filetoolsd_unavailable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `nicht verfügbar (ist die URL korrekt?)`;
  }
);
const it_settings_filetoolsd_unavailable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `non disponibile (l'URL è corretto?)`;
  }
);
const hr_settings_filetoolsd_unavailable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `nedostupno (Je li URL točan?)`;
  }
);
const tr_settings_filetoolsd_unavailable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `uygun değil (url doğru mu?)`;
  }
);
const ja_settings_filetoolsd_unavailable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `利用不可（URLが正しいですか？）`;
  }
);
const ko_settings_filetoolsd_unavailable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `사용 불가 (URL를 다시 확인해주세요.)`;
  }
);
const el_settings_filetoolsd_unavailable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `μη διαθέσιμο (είναι σωστή η διεύθυνση url;)`;
  }
);
const id_settings_filetoolsd_unavailable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `tidak tersedia (apakah URL sudah benar?)`;
  }
);
const zh_hans1_settings_filetoolsd_unavailable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `不可用（URL 正确吗？）`;
  }
);
const zh_hant1_settings_filetoolsd_unavailable = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `不可用（URL 正確嗎？）`;
  }
);
const settings_filetoolsd_unavailable = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_unavailable", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_unavailable();
  if (locale2 === "es") return es_settings_filetoolsd_unavailable();
  if (locale2 === "fr") return fr_settings_filetoolsd_unavailable();
  if (locale2 === "de") return de_settings_filetoolsd_unavailable();
  if (locale2 === "it") return it_settings_filetoolsd_unavailable();
  if (locale2 === "hr") return hr_settings_filetoolsd_unavailable();
  if (locale2 === "tr") return tr_settings_filetoolsd_unavailable();
  if (locale2 === "ja") return ja_settings_filetoolsd_unavailable();
  if (locale2 === "ko") return ko_settings_filetoolsd_unavailable();
  if (locale2 === "el") return el_settings_filetoolsd_unavailable();
  if (locale2 === "id") return id_settings_filetoolsd_unavailable();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_unavailable();
  return zh_hant1_settings_filetoolsd_unavailable();
};
const en_settings_filetoolsd_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `The <code>filetoolsd</code> project is a server wrapper for FFmpeg. This allows you to convert videos through the convenience of FileTools's web interface, while still being able to harness the power of your GPU to do it as quickly as possible.`;
  }
);
const es_settings_filetoolsd_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<code>filetoolsd</code> es un proyecto que actúa como un servidor intermediario ("wrapper") para FFmpeg. Permite convertir vídeos sin dejar de lado la conveniente interfaz web de FileTools y, a la vez, aprovecha la potencia de tu GPU para hacerlo lo más rápido posible.`;
  }
);
const fr_settings_filetoolsd_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Le projet <code>filetoolsd</code> est un serveur de wrapper utilisant FFmpeg. Il vous permet de convertir des vidéos grâce à l'interface web pratique de FileTools'tout en exploitant la puissance de votre GPU pour une exécution rapide.`;
  }
);
const de_settings_filetoolsd_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Das <code>filetoolsd</code>-Projekt ist ein Server-Wrapper für FFmpeg. Dies ermöglicht es dir, Videos bequem über die Weboberfläche von FileTools zu konvertieren und dabei die Leistung deiner GPU zu nutzen, um dies so schnell wie möglich zu tun.`;
  }
);
const it_settings_filetoolsd_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Il progetto <code>filetoolsd</code> è un *server wrapper* per FFmpeg. Questo ti permette di convertire video attraverso la comodità dell'interfaccia web di FileTools, pur essendo in grado di sfruttare la potenza della tua GPU per farlo il più rapidamente possibile.`;
  }
);
const hr_settings_filetoolsd_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<code>filetoolsd</code> projekt je serverski omot za FFmpeg. Ovo omogućuje da pretvarate videozapise sa lakoćom FileToolsovog web sučelja, dok još uvijek možete iskoristiti snagu vašeg GPU da odradi što brže moguće.`;
  }
);
const tr_settings_filetoolsd_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<code>filetoolsd</code> projesi, FFmpeg için bir sunucu sarmalayıcısıdır (server wrapper). Bu ayar, FileTools'in web arayüzünün kullanım kolaylığı ile videoları dönüştürmenize olanak sağlarken, ekran kartınızın gücünden yararlanarak işlemi mümkün olan en hızlı şekilde yapmanızı sağlar.`;
  }
);
const ja_settings_filetoolsd_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<code>filetoolsd</code>プロジェクトはFFmpegのサーバーラッパーです。これにより、GPUの性能を活かして高速に変換しつつ、FileToolsのウェブインターフェイスから簡単に動画を変換できます。`;
  }
);
const ko_settings_filetoolsd_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<code>filetoolsd</code> 프로젝트는 FFmpeg를 위한 서버 래퍼입니다. 이를 통해 FileTools의 웹 인터페이스를 통해 비디오를 변환할 수 있으며, GPU를 활용하여 가능한 한 빠르게 작업을 수행할 수 있습니다.`;
  }
);
const el_settings_filetoolsd_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Το έργο <code>filetoolsd</code> είναι ένα περιτύλιγμα σέρβερ για το FFmpeg. Αυτό σας επιτρέπει να μετατρέπετε βίντεο μέσω της ευκολίας της διεπαφής ιστού του FileTools, ενώ εξακολουθείτε να μπορείτε να αξιοποιήσετε τη δύναμη της GPU σας για να το κάνετε όσο το δυνατόν πιο γρήγορα.`;
  }
);
const id_settings_filetoolsd_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Proyek <code>filetoolsd</code> adalah server wrapper untuk FFmpeg. Ini memungkinkan kamu mengonversi video melalui antarmuka web FileTools, sambil memanfaatkan kekuatan GPU untuk mempercepat proses.`;
  }
);
const zh_hans1_settings_filetoolsd_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<code>filetoolsd</code>项目是 FFmpeg 的服务器包装器。这允许你通过 FileTools 网页界面方便地转换视频，同时仍能利用 GPU 的强大性能以尽可能快的速度完成转换。`;
  }
);
const zh_hant1_settings_filetoolsd_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<code>filetoolsd</code>專案是 FFmpeg 的伺服器包裝器。這允許你透過 FileTools 網頁介面方便地轉換影片，同時仍能利用 GPU 的強大效能以儘可能快的速度完成轉換。`;
  }
);
const settings_filetoolsd_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_description", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_description();
  if (locale2 === "es") return es_settings_filetoolsd_description();
  if (locale2 === "fr") return fr_settings_filetoolsd_description();
  if (locale2 === "de") return de_settings_filetoolsd_description();
  if (locale2 === "it") return it_settings_filetoolsd_description();
  if (locale2 === "hr") return hr_settings_filetoolsd_description();
  if (locale2 === "tr") return tr_settings_filetoolsd_description();
  if (locale2 === "ja") return ja_settings_filetoolsd_description();
  if (locale2 === "ko") return ko_settings_filetoolsd_description();
  if (locale2 === "el") return el_settings_filetoolsd_description();
  if (locale2 === "id") return id_settings_filetoolsd_description();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_description();
  return zh_hant1_settings_filetoolsd_description();
};
const en_settings_filetoolsd_hosting_info = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `We host a public instance for your convenience, but it is quite easy to host your own on your PC or server if you know what you are doing. You can download the server binaries [filetoolsd_link]here[/filetoolsd_link] - the process of setting this up will become easier in the future, so stay tuned!`;
  }
);
const es_settings_filetoolsd_hosting_info = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Alojamos una instancia pública para tu conveniencia, pero es bastante fácil alojar una propia en tu PC o servidor si sabes lo que estás haciendo. Puedes descargar los binarios del servidor [filetoolsd_link]aquí[/filetoolsd_link]. ¡El proceso de instalación será más fácil en el futuro, así que mantente atento!`;
  }
);
const fr_settings_filetoolsd_hosting_info = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nous hébergeons une instance publique pour vous faciliter la tâche, mais il est assez facile d'héberger la vôtre sur votre PC ou votre serveur si vous savez ce que vous faites. Vous pouvez télécharger les binaires pour serveur [filetoolsd_link]ici[/filetoolsd_link] - le processus de mise en place deviendra plus facile à l'avenir, alors restez à l'écoute !`;
  }
);
const de_settings_filetoolsd_hosting_info = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Wir hosten eine öffentliche Instanz für deine Bequemlichkeit, aber es ist ziemlich einfach, eine eigene auf deinem PC oder Server zu hosten, wenn du weißt, was du tust. Du kannst die Server-Binärdateien [filetoolsd_link]hier[/filetoolsd_link] herunterladen - der Einrichtungsprozess wird in Zukunft einfacher werden, also bleib dran!`;
  }
);
const it_settings_filetoolsd_hosting_info = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ospitiamo un'istanza pubblica per la tua comodità, ma è abbastanza facile ospitarne una tua sul tuo PC o server se sai cosa stai facendo. Puoi scaricare i binari del server [filetoolsd_link]qui[/filetoolsd_link] - il processo di configurazione diventerà più semplice in futuro, quindi resta sintonizzato!`;
  }
);
const hr_settings_filetoolsd_hosting_info = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mi držimo javnu instancu za Vašu lakoću, ali je veoma lako hostati na Vašem računalu ili serveru ako znate što radite. Možete preuzeti serverske programe [filetoolsd_link]ovdje[/filetoolsd_link] - Proces namještanja će biti lakši u budućnosti, pa njuškajte malo za nove vijesti!`;
  }
);
const tr_settings_filetoolsd_hosting_info = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kolaylık sağlaması açısından herkese açık bir dönüştürücü sunuyoruz, ancak kendi bilgisayarınızda veya sunucunuzda kendi dönüştürücünüzü kurmak da oldukça kolaydır. Sunucu binary dosyalarını [filetoolsd_link]buradan[/filetoolsd_link] indirebilirsiniz. Kurulum işlemini gelecekte daha kolay hale getirmeye çalışıyoruz, bu nedenle bizi takip etmeyi unutmayın!`;
  }
);
const ja_settings_filetoolsd_hosting_info = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `私たちは利便性のために公開インスタンスをホストしていますが、自分のPCやサーバーでも簡単にホストできます。バイナリは[filetoolsd_link]こちら[/filetoolsd_link]からダウンロードできます。今後さらにセットアップが簡単になる予定です！`;
  }
);
const ko_settings_filetoolsd_hosting_info = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `편의를 위해 공개 인스턴스를 호스팅하지만, PC나 서버에서 직접 호스팅하는 것도 매우 쉽습니다. 서버 바이너리를 [filetoolsd_link]여기[/filetoolsd_link]에서 다운로드할 수 있습니다. 이 설정 프로세스는 앞으로 더 쉬워질 것이므로 기대해 주세요!`;
  }
);
const el_settings_filetoolsd_hosting_info = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Φιλοξενούμε μια δημόσια σελίδα για τη διευκόλυνσή σας, αλλά είναι αρκετά εύκολο να φιλοξενήσετε τη δική σας στον υπολογιστή ή τον σέρβερ σας αν γνωρίζετε τι κάνετε. Μπορείτε να κατεβάσετε τα δυαδικά αρχεία του σέρβερ [filetoolsd_link]εδώ[/filetoolsd_link] - η διαδικασία ρύθμισης θα γίνει ευκολότερη στο μέλλον, οπότε μείνετε συντονισμένοι!`;
  }
);
const id_settings_filetoolsd_hosting_info = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kami menyediakan instance publik untuk kemudahanmu, tetapi kamu juga bisa dengan mudah meng-host sendiri di PC atau server jika tahu caranya. Kamu dapat mengunduh binary server [filetoolsd_link]di sini[/filetoolsd_link] - proses penyiapan akan semakin mudah di masa depan, jadi tetap pantau!`;
  }
);
const zh_hans1_settings_filetoolsd_hosting_info = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `我们为你提供了一个公共实例以方便使用，但如果你知道如何操作，在自己的电脑或服务器上托管也很容易。你可以在[filetoolsd_link]这里[/filetoolsd_link]下载服务器二进制文件 - 设置过程将来会变得更简单，敬请期待！`;
  }
);
const zh_hant1_settings_filetoolsd_hosting_info = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `我們為你提供了一個公共執行個體以方便使用，但如果你知道如何操作，在自己的電腦或伺服器上託管也很容易。你可以在[filetoolsd_link]這裡[/filetoolsd_link]下載伺服器二進位檔案 - 設定程序將來會變得更簡單，敬請期待！`;
  }
);
const settings_filetoolsd_hosting_info = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_hosting_info", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_hosting_info();
  if (locale2 === "es") return es_settings_filetoolsd_hosting_info();
  if (locale2 === "fr") return fr_settings_filetoolsd_hosting_info();
  if (locale2 === "de") return de_settings_filetoolsd_hosting_info();
  if (locale2 === "it") return it_settings_filetoolsd_hosting_info();
  if (locale2 === "hr") return hr_settings_filetoolsd_hosting_info();
  if (locale2 === "tr") return tr_settings_filetoolsd_hosting_info();
  if (locale2 === "ja") return ja_settings_filetoolsd_hosting_info();
  if (locale2 === "ko") return ko_settings_filetoolsd_hosting_info();
  if (locale2 === "el") return el_settings_filetoolsd_hosting_info();
  if (locale2 === "id") return id_settings_filetoolsd_hosting_info();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_hosting_info();
  return zh_hant1_settings_filetoolsd_hosting_info();
};
const en_settings_filetoolsd_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Instance`;
  }
);
const es_settings_filetoolsd_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Instancia`;
  }
);
const it_settings_filetoolsd_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Istanza`;
  }
);
const tr_settings_filetoolsd_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sunucu`;
  }
);
const ja_settings_filetoolsd_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `インスタンス`;
  }
);
const ko_settings_filetoolsd_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `인스턴스`;
  }
);
const el_settings_filetoolsd_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Παρουσία`;
  }
);
const id_settings_filetoolsd_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Instance`;
  }
);
const zh_hans1_settings_filetoolsd_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `实例`;
  }
);
const zh_hant1_settings_filetoolsd_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `執行個體`;
  }
);
const fr_settings_filetoolsd_instance = en_settings_filetoolsd_instance;
const de_settings_filetoolsd_instance = en_settings_filetoolsd_instance;
const hr_settings_filetoolsd_instance = en_settings_filetoolsd_instance;
const settings_filetoolsd_instance = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_instance", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_instance();
  if (locale2 === "es") return es_settings_filetoolsd_instance();
  if (locale2 === "fr") return fr_settings_filetoolsd_instance();
  if (locale2 === "de") return de_settings_filetoolsd_instance();
  if (locale2 === "it") return it_settings_filetoolsd_instance();
  if (locale2 === "hr") return hr_settings_filetoolsd_instance();
  if (locale2 === "tr") return tr_settings_filetoolsd_instance();
  if (locale2 === "ja") return ja_settings_filetoolsd_instance();
  if (locale2 === "ko") return ko_settings_filetoolsd_instance();
  if (locale2 === "el") return el_settings_filetoolsd_instance();
  if (locale2 === "id") return id_settings_filetoolsd_instance();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_instance();
  return zh_hant1_settings_filetoolsd_instance();
};
const en_settings_filetoolsd_url_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Example: http://localhost:24153`;
  }
);
const es_settings_filetoolsd_url_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ejemplo: http://localhost:24153`;
  }
);
const fr_settings_filetoolsd_url_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Exemple: http://localhost:24153`;
  }
);
const de_settings_filetoolsd_url_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Beispiel: http://localhost:24153`;
  }
);
const it_settings_filetoolsd_url_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Esempio: http://localhost:24153`;
  }
);
const hr_settings_filetoolsd_url_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Na primjer: http://localhost:24153`;
  }
);
const tr_settings_filetoolsd_url_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Örneğin: http://localhost:24153`;
  }
);
const ja_settings_filetoolsd_url_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `例: http://localhost:24153`;
  }
);
const ko_settings_filetoolsd_url_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `예시: http://localhost:24153`;
  }
);
const el_settings_filetoolsd_url_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Παράδειγμα: http://localhost:24153`;
  }
);
const id_settings_filetoolsd_url_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Contoh: http://localhost:24153`;
  }
);
const zh_hans1_settings_filetoolsd_url_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `例如：http://localhost:24153`;
  }
);
const zh_hant1_settings_filetoolsd_url_placeholder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `例如：http://localhost:24153`;
  }
);
const settings_filetoolsd_url_placeholder = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_url_placeholder", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_url_placeholder();
  if (locale2 === "es") return es_settings_filetoolsd_url_placeholder();
  if (locale2 === "fr") return fr_settings_filetoolsd_url_placeholder();
  if (locale2 === "de") return de_settings_filetoolsd_url_placeholder();
  if (locale2 === "it") return it_settings_filetoolsd_url_placeholder();
  if (locale2 === "hr") return hr_settings_filetoolsd_url_placeholder();
  if (locale2 === "tr") return tr_settings_filetoolsd_url_placeholder();
  if (locale2 === "ja") return ja_settings_filetoolsd_url_placeholder();
  if (locale2 === "ko") return ko_settings_filetoolsd_url_placeholder();
  if (locale2 === "el") return el_settings_filetoolsd_url_placeholder();
  if (locale2 === "id") return id_settings_filetoolsd_url_placeholder();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_url_placeholder();
  return zh_hant1_settings_filetoolsd_url_placeholder();
};
const en_settings_filetoolsd_conversion_speed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conversion speed`;
  }
);
const es_settings_filetoolsd_conversion_speed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Velocidad de conversión`;
  }
);
const fr_settings_filetoolsd_conversion_speed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Vitesse de conversion`;
  }
);
const de_settings_filetoolsd_conversion_speed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Konvertierungsgeschwindigkeit`;
  }
);
const it_settings_filetoolsd_conversion_speed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Velocità di conversione`;
  }
);
const hr_settings_filetoolsd_conversion_speed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Brzina pretvaranja`;
  }
);
const tr_settings_filetoolsd_conversion_speed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dönüştürme hızı`;
  }
);
const ja_settings_filetoolsd_conversion_speed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `変換速度`;
  }
);
const ko_settings_filetoolsd_conversion_speed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `변환 속도`;
  }
);
const el_settings_filetoolsd_conversion_speed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ταχύτητα μετατροπής`;
  }
);
const id_settings_filetoolsd_conversion_speed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kecepatan konversi`;
  }
);
const zh_hans1_settings_filetoolsd_conversion_speed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `转换速度`;
  }
);
const zh_hant1_settings_filetoolsd_conversion_speed = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `轉換速度`;
  }
);
const settings_filetoolsd_conversion_speed = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_conversion_speed", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_conversion_speed();
  if (locale2 === "es") return es_settings_filetoolsd_conversion_speed();
  if (locale2 === "fr") return fr_settings_filetoolsd_conversion_speed();
  if (locale2 === "de") return de_settings_filetoolsd_conversion_speed();
  if (locale2 === "it") return it_settings_filetoolsd_conversion_speed();
  if (locale2 === "hr") return hr_settings_filetoolsd_conversion_speed();
  if (locale2 === "tr") return tr_settings_filetoolsd_conversion_speed();
  if (locale2 === "ja") return ja_settings_filetoolsd_conversion_speed();
  if (locale2 === "ko") return ko_settings_filetoolsd_conversion_speed();
  if (locale2 === "el") return el_settings_filetoolsd_conversion_speed();
  if (locale2 === "id") return id_settings_filetoolsd_conversion_speed();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_conversion_speed();
  return zh_hant1_settings_filetoolsd_conversion_speed();
};
const en_settings_filetoolsd_speed_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `This describes the tradeoff between speed and quality. Faster speeds will result in lower quality, but will get the job done quicker.`;
  }
);
const es_settings_filetoolsd_speed_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Esto describe el equilibrio entre velocidad y calidad. Velocidades más rápidas resultarán en una calidad más baja, pero harán el trabajo más rápido.`;
  }
);
const fr_settings_filetoolsd_speed_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ceci décrit le compromis entre vitesse et qualité. Des vitesses plus élevées entraîneront une qualité moindre, mais permettront d'effectuer le travail plus rapidement.`;
  }
);
const de_settings_filetoolsd_speed_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dies beschreibt den Kompromiss zwischen Geschwindigkeit und Qualität. Schnellere Geschwindigkeiten führen zu geringerer Qualität, erledigen die Aufgabe aber schneller.`;
  }
);
const it_settings_filetoolsd_speed_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Questo descrive il compromesso tra velocità e qualità. Velocità maggiori si tradurranno in una qualità inferiore, ma completeranno il lavoro più velocemente.`;
  }
);
const hr_settings_filetoolsd_speed_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ovo opisuje kompromis između brzine i kvalitete. Većom brzinom će izaći manja kvaliteta, ali će se posao brže odraditi.`;
  }
);
const tr_settings_filetoolsd_speed_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bu ayar, hız ve kalite arasındaki dengeyi belirlemenizi sağlar. Yüksek hızlar, düşük kaliteye neden olur ancak işlem daha hızlı tamamlanır.`;
  }
);
const ja_settings_filetoolsd_speed_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `速度と品質のバランスを設定します。高速化すると品質が低下しますが、処理は速くなります。`;
  }
);
const ko_settings_filetoolsd_speed_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이는 속도와 품질 사이의 균형을 설명합니다. 속도를 높일수록 품질은 낮아지지만 작업 속도는 더 빨라집니다.`;
  }
);
const el_settings_filetoolsd_speed_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αυτό περιγράφει τον συμβιβασμό μεταξύ ταχύτητας και ποιότητας. Ταχύτερες ταχύτητες θα έχουν ως αποτέλεσμα χαμηλότερη ποιότητα, αλλά θα ολοκληρώσουν τη δουλειά γρηγορότερα.`;
  }
);
const id_settings_filetoolsd_speed_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Menjelaskan kompromi antara kecepatan dan kualitas. Kecepatan lebih tinggi menghasilkan kualitas lebih rendah, tetapi proses lebih cepat.`;
  }
);
const zh_hans1_settings_filetoolsd_speed_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `这描述了速度和质量之间的权衡。速度越快质量越低，但完成工作的速度更快。`;
  }
);
const zh_hant1_settings_filetoolsd_speed_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `這描述了速度和品質之間的權衡。速度越快品質越低，但完成工作的速度更快。`;
  }
);
const settings_filetoolsd_speed_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_speed_description", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_speed_description();
  if (locale2 === "es") return es_settings_filetoolsd_speed_description();
  if (locale2 === "fr") return fr_settings_filetoolsd_speed_description();
  if (locale2 === "de") return de_settings_filetoolsd_speed_description();
  if (locale2 === "it") return it_settings_filetoolsd_speed_description();
  if (locale2 === "hr") return hr_settings_filetoolsd_speed_description();
  if (locale2 === "tr") return tr_settings_filetoolsd_speed_description();
  if (locale2 === "ja") return ja_settings_filetoolsd_speed_description();
  if (locale2 === "ko") return ko_settings_filetoolsd_speed_description();
  if (locale2 === "el") return el_settings_filetoolsd_speed_description();
  if (locale2 === "id") return id_settings_filetoolsd_speed_description();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_speed_description();
  return zh_hant1_settings_filetoolsd_speed_description();
};
const en_settings_filetoolsd_speeds_very_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Very Slow`;
  }
);
const es_settings_filetoolsd_speeds_very_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Extremadamente lento`;
  }
);
const fr_settings_filetoolsd_speeds_very_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Très lent`;
  }
);
const de_settings_filetoolsd_speeds_very_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sehr langsam`;
  }
);
const it_settings_filetoolsd_speeds_very_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Molto Lento`;
  }
);
const hr_settings_filetoolsd_speeds_very_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Jako Sporo`;
  }
);
const tr_settings_filetoolsd_speeds_very_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `En Yavaş`;
  }
);
const ja_settings_filetoolsd_speeds_very_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `非常に遅い`;
  }
);
const ko_settings_filetoolsd_speeds_very_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `매우 느림`;
  }
);
const el_settings_filetoolsd_speeds_very_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Πολύ αργή`;
  }
);
const id_settings_filetoolsd_speeds_very_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sangat Lambat`;
  }
);
const zh_hans1_settings_filetoolsd_speeds_very_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `非常慢`;
  }
);
const zh_hant1_settings_filetoolsd_speeds_very_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `非常慢`;
  }
);
const settings_filetoolsd_speeds_very_slow = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_speeds_very_slow", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_speeds_very_slow();
  if (locale2 === "es") return es_settings_filetoolsd_speeds_very_slow();
  if (locale2 === "fr") return fr_settings_filetoolsd_speeds_very_slow();
  if (locale2 === "de") return de_settings_filetoolsd_speeds_very_slow();
  if (locale2 === "it") return it_settings_filetoolsd_speeds_very_slow();
  if (locale2 === "hr") return hr_settings_filetoolsd_speeds_very_slow();
  if (locale2 === "tr") return tr_settings_filetoolsd_speeds_very_slow();
  if (locale2 === "ja") return ja_settings_filetoolsd_speeds_very_slow();
  if (locale2 === "ko") return ko_settings_filetoolsd_speeds_very_slow();
  if (locale2 === "el") return el_settings_filetoolsd_speeds_very_slow();
  if (locale2 === "id") return id_settings_filetoolsd_speeds_very_slow();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_speeds_very_slow();
  return zh_hant1_settings_filetoolsd_speeds_very_slow();
};
const en_settings_filetoolsd_speeds_slower = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Slower`;
  }
);
const es_settings_filetoolsd_speeds_slower = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Muy lento`;
  }
);
const fr_settings_filetoolsd_speeds_slower = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Plus lent`;
  }
);
const de_settings_filetoolsd_speeds_slower = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Langsamer`;
  }
);
const it_settings_filetoolsd_speeds_slower = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Più Lento`;
  }
);
const hr_settings_filetoolsd_speeds_slower = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sporije`;
  }
);
const tr_settings_filetoolsd_speeds_slower = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Daha Yavaş`;
  }
);
const ja_settings_filetoolsd_speeds_slower = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `かなり遅い`;
  }
);
const ko_settings_filetoolsd_speeds_slower = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `느림`;
  }
);
const el_settings_filetoolsd_speeds_slower = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αργότερη`;
  }
);
const id_settings_filetoolsd_speeds_slower = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Agak Lambat`;
  }
);
const zh_hans1_settings_filetoolsd_speeds_slower = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `较慢`;
  }
);
const zh_hant1_settings_filetoolsd_speeds_slower = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `較慢`;
  }
);
const settings_filetoolsd_speeds_slower = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_speeds_slower", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_speeds_slower();
  if (locale2 === "es") return es_settings_filetoolsd_speeds_slower();
  if (locale2 === "fr") return fr_settings_filetoolsd_speeds_slower();
  if (locale2 === "de") return de_settings_filetoolsd_speeds_slower();
  if (locale2 === "it") return it_settings_filetoolsd_speeds_slower();
  if (locale2 === "hr") return hr_settings_filetoolsd_speeds_slower();
  if (locale2 === "tr") return tr_settings_filetoolsd_speeds_slower();
  if (locale2 === "ja") return ja_settings_filetoolsd_speeds_slower();
  if (locale2 === "ko") return ko_settings_filetoolsd_speeds_slower();
  if (locale2 === "el") return el_settings_filetoolsd_speeds_slower();
  if (locale2 === "id") return id_settings_filetoolsd_speeds_slower();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_speeds_slower();
  return zh_hant1_settings_filetoolsd_speeds_slower();
};
const en_settings_filetoolsd_speeds_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Slow`;
  }
);
const es_settings_filetoolsd_speeds_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Lento`;
  }
);
const fr_settings_filetoolsd_speeds_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Lent`;
  }
);
const de_settings_filetoolsd_speeds_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Langsam`;
  }
);
const it_settings_filetoolsd_speeds_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Lento`;
  }
);
const hr_settings_filetoolsd_speeds_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sporo`;
  }
);
const tr_settings_filetoolsd_speeds_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Yavaş`;
  }
);
const ja_settings_filetoolsd_speeds_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `遅い`;
  }
);
const ko_settings_filetoolsd_speeds_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `조금 느림`;
  }
);
const el_settings_filetoolsd_speeds_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αργή`;
  }
);
const id_settings_filetoolsd_speeds_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Lambat`;
  }
);
const zh_hans1_settings_filetoolsd_speeds_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `慢`;
  }
);
const zh_hant1_settings_filetoolsd_speeds_slow = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `慢`;
  }
);
const settings_filetoolsd_speeds_slow = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_speeds_slow", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_speeds_slow();
  if (locale2 === "es") return es_settings_filetoolsd_speeds_slow();
  if (locale2 === "fr") return fr_settings_filetoolsd_speeds_slow();
  if (locale2 === "de") return de_settings_filetoolsd_speeds_slow();
  if (locale2 === "it") return it_settings_filetoolsd_speeds_slow();
  if (locale2 === "hr") return hr_settings_filetoolsd_speeds_slow();
  if (locale2 === "tr") return tr_settings_filetoolsd_speeds_slow();
  if (locale2 === "ja") return ja_settings_filetoolsd_speeds_slow();
  if (locale2 === "ko") return ko_settings_filetoolsd_speeds_slow();
  if (locale2 === "el") return el_settings_filetoolsd_speeds_slow();
  if (locale2 === "id") return id_settings_filetoolsd_speeds_slow();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_speeds_slow();
  return zh_hant1_settings_filetoolsd_speeds_slow();
};
const en_settings_filetoolsd_speeds_medium = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Medium`;
  }
);
const es_settings_filetoolsd_speeds_medium = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Medio`;
  }
);
const fr_settings_filetoolsd_speeds_medium = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Moyen`;
  }
);
const de_settings_filetoolsd_speeds_medium = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mittel`;
  }
);
const it_settings_filetoolsd_speeds_medium = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Medio`;
  }
);
const hr_settings_filetoolsd_speeds_medium = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Umjereno`;
  }
);
const tr_settings_filetoolsd_speeds_medium = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Orta`;
  }
);
const ja_settings_filetoolsd_speeds_medium = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `普通`;
  }
);
const ko_settings_filetoolsd_speeds_medium = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `보통`;
  }
);
const el_settings_filetoolsd_speeds_medium = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μέτρια`;
  }
);
const id_settings_filetoolsd_speeds_medium = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sedang`;
  }
);
const zh_hans1_settings_filetoolsd_speeds_medium = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `中等`;
  }
);
const zh_hant1_settings_filetoolsd_speeds_medium = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `中等`;
  }
);
const settings_filetoolsd_speeds_medium = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_speeds_medium", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_speeds_medium();
  if (locale2 === "es") return es_settings_filetoolsd_speeds_medium();
  if (locale2 === "fr") return fr_settings_filetoolsd_speeds_medium();
  if (locale2 === "de") return de_settings_filetoolsd_speeds_medium();
  if (locale2 === "it") return it_settings_filetoolsd_speeds_medium();
  if (locale2 === "hr") return hr_settings_filetoolsd_speeds_medium();
  if (locale2 === "tr") return tr_settings_filetoolsd_speeds_medium();
  if (locale2 === "ja") return ja_settings_filetoolsd_speeds_medium();
  if (locale2 === "ko") return ko_settings_filetoolsd_speeds_medium();
  if (locale2 === "el") return el_settings_filetoolsd_speeds_medium();
  if (locale2 === "id") return id_settings_filetoolsd_speeds_medium();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_speeds_medium();
  return zh_hant1_settings_filetoolsd_speeds_medium();
};
const en_settings_filetoolsd_speeds_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Fast`;
  }
);
const es_settings_filetoolsd_speeds_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Rápido`;
  }
);
const fr_settings_filetoolsd_speeds_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Rapide`;
  }
);
const de_settings_filetoolsd_speeds_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Schnell`;
  }
);
const it_settings_filetoolsd_speeds_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Veloce`;
  }
);
const hr_settings_filetoolsd_speeds_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Brzo`;
  }
);
const tr_settings_filetoolsd_speeds_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Hızlı`;
  }
);
const ja_settings_filetoolsd_speeds_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `速い`;
  }
);
const ko_settings_filetoolsd_speeds_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `빠름`;
  }
);
const el_settings_filetoolsd_speeds_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Γρήγορη`;
  }
);
const id_settings_filetoolsd_speeds_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cepat`;
  }
);
const zh_hans1_settings_filetoolsd_speeds_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `快`;
  }
);
const zh_hant1_settings_filetoolsd_speeds_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `快`;
  }
);
const settings_filetoolsd_speeds_fast = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_speeds_fast", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_speeds_fast();
  if (locale2 === "es") return es_settings_filetoolsd_speeds_fast();
  if (locale2 === "fr") return fr_settings_filetoolsd_speeds_fast();
  if (locale2 === "de") return de_settings_filetoolsd_speeds_fast();
  if (locale2 === "it") return it_settings_filetoolsd_speeds_fast();
  if (locale2 === "hr") return hr_settings_filetoolsd_speeds_fast();
  if (locale2 === "tr") return tr_settings_filetoolsd_speeds_fast();
  if (locale2 === "ja") return ja_settings_filetoolsd_speeds_fast();
  if (locale2 === "ko") return ko_settings_filetoolsd_speeds_fast();
  if (locale2 === "el") return el_settings_filetoolsd_speeds_fast();
  if (locale2 === "id") return id_settings_filetoolsd_speeds_fast();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_speeds_fast();
  return zh_hant1_settings_filetoolsd_speeds_fast();
};
const en_settings_filetoolsd_speeds_ultra_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ultra Fast`;
  }
);
const es_settings_filetoolsd_speeds_ultra_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Súper rápido`;
  }
);
const fr_settings_filetoolsd_speeds_ultra_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ultra Rapide`;
  }
);
const de_settings_filetoolsd_speeds_ultra_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ultraschnell`;
  }
);
const it_settings_filetoolsd_speeds_ultra_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ultra Veloce`;
  }
);
const hr_settings_filetoolsd_speeds_ultra_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Veoma Brzo`;
  }
);
const tr_settings_filetoolsd_speeds_ultra_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `En Hızlı`;
  }
);
const ja_settings_filetoolsd_speeds_ultra_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `超高速`;
  }
);
const ko_settings_filetoolsd_speeds_ultra_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `매우 빠름`;
  }
);
const el_settings_filetoolsd_speeds_ultra_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Πολύ γρήγορη`;
  }
);
const id_settings_filetoolsd_speeds_ultra_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sangat Cepat`;
  }
);
const zh_hans1_settings_filetoolsd_speeds_ultra_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `超快`;
  }
);
const zh_hant1_settings_filetoolsd_speeds_ultra_fast = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `超快`;
  }
);
const settings_filetoolsd_speeds_ultra_fast = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_speeds_ultra_fast", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_speeds_ultra_fast();
  if (locale2 === "es") return es_settings_filetoolsd_speeds_ultra_fast();
  if (locale2 === "fr") return fr_settings_filetoolsd_speeds_ultra_fast();
  if (locale2 === "de") return de_settings_filetoolsd_speeds_ultra_fast();
  if (locale2 === "it") return it_settings_filetoolsd_speeds_ultra_fast();
  if (locale2 === "hr") return hr_settings_filetoolsd_speeds_ultra_fast();
  if (locale2 === "tr") return tr_settings_filetoolsd_speeds_ultra_fast();
  if (locale2 === "ja") return ja_settings_filetoolsd_speeds_ultra_fast();
  if (locale2 === "ko") return ko_settings_filetoolsd_speeds_ultra_fast();
  if (locale2 === "el") return el_settings_filetoolsd_speeds_ultra_fast();
  if (locale2 === "id") return id_settings_filetoolsd_speeds_ultra_fast();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_speeds_ultra_fast();
  return zh_hant1_settings_filetoolsd_speeds_ultra_fast();
};
const en_settings_filetoolsd_auto_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Auto (recommended)`;
  }
);
const es_settings_filetoolsd_auto_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Automático (recomendado)`;
  }
);
const it_settings_filetoolsd_auto_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Automatico (consigliato)`;
  }
);
const tr_settings_filetoolsd_auto_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Otomatik (önerilen)`;
  }
);
const ja_settings_filetoolsd_auto_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `自動（推奨）`;
  }
);
const ko_settings_filetoolsd_auto_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `자동 (권장됨)`;
  }
);
const el_settings_filetoolsd_auto_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αυτόματη (συνιστάται)`;
  }
);
const id_settings_filetoolsd_auto_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Otomatis (disarankan)`;
  }
);
const zh_hans1_settings_filetoolsd_auto_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `自动（推荐）`;
  }
);
const zh_hant1_settings_filetoolsd_auto_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `自動（建議）`;
  }
);
const fr_settings_filetoolsd_auto_instance = en_settings_filetoolsd_auto_instance;
const de_settings_filetoolsd_auto_instance = en_settings_filetoolsd_auto_instance;
const hr_settings_filetoolsd_auto_instance = en_settings_filetoolsd_auto_instance;
const settings_filetoolsd_auto_instance = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_auto_instance", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_auto_instance();
  if (locale2 === "es") return es_settings_filetoolsd_auto_instance();
  if (locale2 === "fr") return fr_settings_filetoolsd_auto_instance();
  if (locale2 === "de") return de_settings_filetoolsd_auto_instance();
  if (locale2 === "it") return it_settings_filetoolsd_auto_instance();
  if (locale2 === "hr") return hr_settings_filetoolsd_auto_instance();
  if (locale2 === "tr") return tr_settings_filetoolsd_auto_instance();
  if (locale2 === "ja") return ja_settings_filetoolsd_auto_instance();
  if (locale2 === "ko") return ko_settings_filetoolsd_auto_instance();
  if (locale2 === "el") return el_settings_filetoolsd_auto_instance();
  if (locale2 === "id") return id_settings_filetoolsd_auto_instance();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_auto_instance();
  return zh_hant1_settings_filetoolsd_auto_instance();
};
const en_settings_filetoolsd_eu_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Falkenstein, Germany`;
  }
);
const es_settings_filetoolsd_eu_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Falkenstein, Alemania`;
  }
);
const it_settings_filetoolsd_eu_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Falkenstein, Germania`;
  }
);
const tr_settings_filetoolsd_eu_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Falkenstein, Germany`;
  }
);
const ja_settings_filetoolsd_eu_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ドイツ・ファルケンシュタイン`;
  }
);
const ko_settings_filetoolsd_eu_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Falkenstein, Germany`;
  }
);
const el_settings_filetoolsd_eu_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Falkenstein, Γερμανία`;
  }
);
const id_settings_filetoolsd_eu_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Falkenstein, Jerman`;
  }
);
const zh_hans1_settings_filetoolsd_eu_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `德国法尔肯施泰因`;
  }
);
const zh_hant1_settings_filetoolsd_eu_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `德國法爾肯施泰因`;
  }
);
const fr_settings_filetoolsd_eu_instance = en_settings_filetoolsd_eu_instance;
const de_settings_filetoolsd_eu_instance = en_settings_filetoolsd_eu_instance;
const hr_settings_filetoolsd_eu_instance = en_settings_filetoolsd_eu_instance;
const settings_filetoolsd_eu_instance = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_eu_instance", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_eu_instance();
  if (locale2 === "es") return es_settings_filetoolsd_eu_instance();
  if (locale2 === "fr") return fr_settings_filetoolsd_eu_instance();
  if (locale2 === "de") return de_settings_filetoolsd_eu_instance();
  if (locale2 === "it") return it_settings_filetoolsd_eu_instance();
  if (locale2 === "hr") return hr_settings_filetoolsd_eu_instance();
  if (locale2 === "tr") return tr_settings_filetoolsd_eu_instance();
  if (locale2 === "ja") return ja_settings_filetoolsd_eu_instance();
  if (locale2 === "ko") return ko_settings_filetoolsd_eu_instance();
  if (locale2 === "el") return el_settings_filetoolsd_eu_instance();
  if (locale2 === "id") return id_settings_filetoolsd_eu_instance();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_eu_instance();
  return zh_hant1_settings_filetoolsd_eu_instance();
};
const en_settings_filetoolsd_us_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Washington, USA`;
  }
);
const es_settings_filetoolsd_us_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Washington, EE. UU.`;
  }
);
const it_settings_filetoolsd_us_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Washington, USA`;
  }
);
const tr_settings_filetoolsd_us_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Washington, USA`;
  }
);
const ja_settings_filetoolsd_us_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `アメリカ・ワシントン`;
  }
);
const ko_settings_filetoolsd_us_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Washington, USA`;
  }
);
const el_settings_filetoolsd_us_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Washington, ΗΠΑ`;
  }
);
const id_settings_filetoolsd_us_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Washington, AS`;
  }
);
const zh_hans1_settings_filetoolsd_us_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `美国华盛顿`;
  }
);
const zh_hant1_settings_filetoolsd_us_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `美國華盛頓`;
  }
);
const fr_settings_filetoolsd_us_instance = en_settings_filetoolsd_us_instance;
const de_settings_filetoolsd_us_instance = en_settings_filetoolsd_us_instance;
const hr_settings_filetoolsd_us_instance = en_settings_filetoolsd_us_instance;
const settings_filetoolsd_us_instance = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_us_instance", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_us_instance();
  if (locale2 === "es") return es_settings_filetoolsd_us_instance();
  if (locale2 === "fr") return fr_settings_filetoolsd_us_instance();
  if (locale2 === "de") return de_settings_filetoolsd_us_instance();
  if (locale2 === "it") return it_settings_filetoolsd_us_instance();
  if (locale2 === "hr") return hr_settings_filetoolsd_us_instance();
  if (locale2 === "tr") return tr_settings_filetoolsd_us_instance();
  if (locale2 === "ja") return ja_settings_filetoolsd_us_instance();
  if (locale2 === "ko") return ko_settings_filetoolsd_us_instance();
  if (locale2 === "el") return el_settings_filetoolsd_us_instance();
  if (locale2 === "id") return id_settings_filetoolsd_us_instance();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_us_instance();
  return zh_hant1_settings_filetoolsd_us_instance();
};
const en_settings_filetoolsd_custom_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Custom`;
  }
);
const es_settings_filetoolsd_custom_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Personalizado`;
  }
);
const it_settings_filetoolsd_custom_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Personalizzato`;
  }
);
const tr_settings_filetoolsd_custom_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Özel`;
  }
);
const ja_settings_filetoolsd_custom_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `カスタム`;
  }
);
const ko_settings_filetoolsd_custom_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `사용자 지정`;
  }
);
const el_settings_filetoolsd_custom_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Προσαρμοσμένη`;
  }
);
const id_settings_filetoolsd_custom_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kustom`;
  }
);
const zh_hans1_settings_filetoolsd_custom_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `自定义`;
  }
);
const zh_hant1_settings_filetoolsd_custom_instance = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `自訂`;
  }
);
const fr_settings_filetoolsd_custom_instance = en_settings_filetoolsd_custom_instance;
const de_settings_filetoolsd_custom_instance = en_settings_filetoolsd_custom_instance;
const hr_settings_filetoolsd_custom_instance = en_settings_filetoolsd_custom_instance;
const settings_filetoolsd_custom_instance = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_custom_instance", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_custom_instance();
  if (locale2 === "es") return es_settings_filetoolsd_custom_instance();
  if (locale2 === "fr") return fr_settings_filetoolsd_custom_instance();
  if (locale2 === "de") return de_settings_filetoolsd_custom_instance();
  if (locale2 === "it") return it_settings_filetoolsd_custom_instance();
  if (locale2 === "hr") return hr_settings_filetoolsd_custom_instance();
  if (locale2 === "tr") return tr_settings_filetoolsd_custom_instance();
  if (locale2 === "ja") return ja_settings_filetoolsd_custom_instance();
  if (locale2 === "ko") return ko_settings_filetoolsd_custom_instance();
  if (locale2 === "el") return el_settings_filetoolsd_custom_instance();
  if (locale2 === "id") return id_settings_filetoolsd_custom_instance();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_custom_instance();
  return zh_hant1_settings_filetoolsd_custom_instance();
};
const en_settings_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Privacy & data`;
  }
);
const es_settings_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Privacidad`;
  }
);
const fr_settings_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Confidentialité`;
  }
);
const de_settings_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Datenschutz`;
  }
);
const it_settings_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Privacy e dati`;
  }
);
const hr_settings_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Privatnost`;
  }
);
const tr_settings_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Gizlilik & kişisel veriler`;
  }
);
const ja_settings_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `プライバシーとデータ`;
  }
);
const ko_settings_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `개인정보 및 데이터`;
  }
);
const el_settings_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Απόρρητο & δεδομένα`;
  }
);
const id_settings_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Privasi & data`;
  }
);
const zh_hans1_settings_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `隐私与数据`;
  }
);
const zh_hant1_settings_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `隱私權與資料`;
  }
);
const settings_privacy_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_title", locale2);
  if (locale2 === "en") return en_settings_privacy_title();
  if (locale2 === "es") return es_settings_privacy_title();
  if (locale2 === "fr") return fr_settings_privacy_title();
  if (locale2 === "de") return de_settings_privacy_title();
  if (locale2 === "it") return it_settings_privacy_title();
  if (locale2 === "hr") return hr_settings_privacy_title();
  if (locale2 === "tr") return tr_settings_privacy_title();
  if (locale2 === "ja") return ja_settings_privacy_title();
  if (locale2 === "ko") return ko_settings_privacy_title();
  if (locale2 === "el") return el_settings_privacy_title();
  if (locale2 === "id") return id_settings_privacy_title();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_title();
  return zh_hant1_settings_privacy_title();
};
const en_settings_privacy_plausible_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Plausible analytics`;
  }
);
const es_settings_privacy_plausible_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Analíticas de Plausible`;
  }
);
const fr_settings_privacy_plausible_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Analyses plausibles`;
  }
);
const de_settings_privacy_plausible_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Plausible Analytics`;
  }
);
const it_settings_privacy_plausible_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Statistiche Plausible`;
  }
);
const hr_settings_privacy_plausible_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Plausible analitike`;
  }
);
const tr_settings_privacy_plausible_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Plausible analytics`;
  }
);
const ja_settings_privacy_plausible_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Plausible解析`;
  }
);
const ko_settings_privacy_plausible_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Plausible analytics`;
  }
);
const el_settings_privacy_plausible_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αναλυτικά στοιχεία Plausible`;
  }
);
const id_settings_privacy_plausible_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Analitik Plausible`;
  }
);
const zh_hans1_settings_privacy_plausible_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Plausible 分析`;
  }
);
const zh_hant1_settings_privacy_plausible_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Plausible 分析`;
  }
);
const settings_privacy_plausible_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_plausible_title", locale2);
  if (locale2 === "en") return en_settings_privacy_plausible_title();
  if (locale2 === "es") return es_settings_privacy_plausible_title();
  if (locale2 === "fr") return fr_settings_privacy_plausible_title();
  if (locale2 === "de") return de_settings_privacy_plausible_title();
  if (locale2 === "it") return it_settings_privacy_plausible_title();
  if (locale2 === "hr") return hr_settings_privacy_plausible_title();
  if (locale2 === "tr") return tr_settings_privacy_plausible_title();
  if (locale2 === "ja") return ja_settings_privacy_plausible_title();
  if (locale2 === "ko") return ko_settings_privacy_plausible_title();
  if (locale2 === "el") return el_settings_privacy_plausible_title();
  if (locale2 === "id") return id_settings_privacy_plausible_title();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_plausible_title();
  return zh_hant1_settings_privacy_plausible_title();
};
const en_settings_privacy_plausible_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `We use [plausible_link]Plausible[/plausible_link], a privacy-focused analytics tool, to gather completely anonymous statistics. All data is anonymized and aggregated, and no identifiable information is ever sent or stored. You can view the analytics [analytics_link]here[/analytics_link] and choose to opt out below.`;
  }
);
const es_settings_privacy_plausible_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Usamos [plausible_link]Plausible[/plausible_link], una herramienta de analíticas orientada a la privacidad para recopilar estadísticas completamente anónimas. Toda la información que recopilamos es anonimizada y agregada, y en ningún momento se envía ni se almacena información que permita identificarte. Puedes ver las estadísticas [analytics_link]aquí[/analytics_link] y excluirte de ellas a continuación:`;
  }
);
const fr_settings_privacy_plausible_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nous utilisons [plausible_link]Plausible[/plausible_link], un outil d'analyse axé sur la confidentialité, pour recueillir des statistiques totalement anonymes. Toutes les données sont anonymisées et agrégées, et aucune information identifiable n'est transmise ni stockée. Vous pouvez consulter les analyses [analytics_link]ici[/analytics_link] et choisir de vous désinscrire ci-dessous.`;
  }
);
const de_settings_privacy_plausible_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Wir verwenden [plausible_link]Plausible[/plausible_link], ein datenschutzorientiertes Analysetool, um vollständig anonyme Statistiken zu sammeln. Alle Daten werden anonymisiert und aggregiert, und es werden niemals identifizierbare Informationen gesendet oder gespeichert. Du kannst die Analysen [analytics_link]hier[/analytics_link] einsehen und dich unten abmelden.`;
  }
);
const it_settings_privacy_plausible_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Utilizziamo [plausible_link]Plausible[/plausible_link], uno strumento di analisi focalizzato sulla privacy, per raccogliere statistiche completamente anonime. Tutti i dati sono anonimizzati e aggregati e nessuna informazione identificabile viene mai inviata o archiviata. Puoi visualizzare le statistiche [analytics_link]qui[/analytics_link] e scegliere di disattivare il tracciamento qui sotto.`;
  }
);
const hr_settings_privacy_plausible_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mi koristimo [plausible_link]Plausible[/plausible_link], alat za analitiku koji je fokusiran na privatnost, da prikupimo potpuno anonimne statistike. Svi podatci su anonimizirani i prikupljeni bez ikakvih identificirajućih informacija spremljeno i poslano. Možete vidjeti analitike [analytics_link]ovdje[/analytics_link] i izabrati da ne sudjelujete ispod.`;
  }
);
const tr_settings_privacy_plausible_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tamamen anonim istatistikler toplamak için gizliliğe odaklı bir analiz aracı olan [plausible_link]Plausible[/plausible_link]’ı kullanıyoruz. Tüm veriler anonimleştirilmiş ve birleştirilmiş şekilde işlenir; hiçbir kişisel veya tanımlanabilir bilgi gönderilmez ya da saklanmaz. Analitik verilerini [analytics_link]buradan[/analytics_link] görüntüleyebilir ve aşağıdan devre dışı bırakmayı seçebilirsiniz.`;
  }
);
const ja_settings_privacy_plausible_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `私たちはプライバシー重視の解析ツール[plausible_link]Plausible[/plausible_link]を使用しています。すべてのデータは匿名化・集計され、個人情報は一切収集・保存されません。統計情報は[analytics_link]こちら[/analytics_link]で確認でき、以下でオプトアウト可能です。`;
  }
);
const ko_settings_privacy_plausible_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `우리는 개인정보 보호에 초점을 둔 분석 도구인 [plausible_link]Plausible[/plausible_link]를 사용해 완전히 익명화된 통계를 수집합니다. 모든 데이터는 익명화되어 집계되며, 식별 가능한 정보는 전송되거나 보관되지 않습니다. 분석 결과는 [analytics_link]여기[/analytics_link]에서 확인할 수 있고, 아래에서 수집을 거부(opt-out)할 수 있습니다`;
  }
);
const el_settings_privacy_plausible_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Χρησιμοποιούμε το [plausible_link]Plausible[/plausible_link], ένα εργαλείο αναλυτικών που εστιάζει στο απόρρητο, για τη συλλογή εντελώς ανώνυμων στατιστικών. Όλα τα δεδομένα είναι ανωνυμοποιημένα και συγκεντρωτικά και δεν αποστέλλονται ούτε αποθηκεύονται ποτέ αναγνωρίσιμες πληροφορίες. Μπορείτε να δείτε τα αναλυτικά στοιχεία [analytics_link]εδώ[/analytics_link] και να επιλέξετε να εξαιρεθείτε παρακάτω.`;
  }
);
const id_settings_privacy_plausible_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kami menggunakan [plausible_link]Plausible[/plausible_link], alat analitik yang berfokus pada privasi, untuk mengumpulkan statistik anonim sepenuhnya. Semua data dianonimkan dan diagregasi, tanpa informasi yang dapat diidentifikasi. Kamu dapat melihat analitiknya [analytics_link]di sini[/analytics_link] dan memilih untuk keluar di bawah.`;
  }
);
const zh_hans1_settings_privacy_plausible_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `我们使用[plausible_link]Plausible[/plausible_link]，一个注重隐私的分析工具，来收集完全匿名的统计数据。所有数据都是匿名和聚合的，不会发送或存储任何可识别信息。你可以在[analytics_link]这里[/analytics_link]查看分析数据，并在下方选择退出。`;
  }
);
const zh_hant1_settings_privacy_plausible_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `我們使用[plausible_link]Plausible[/plausible_link]，一個注重隱私權的分析工具，來收集完全匿名的統計資料。所有資料都是匿名和彙總的，不會傳送或儲存任何可識別資訊。你可以在[analytics_link]這裡[/analytics_link]檢視分析資料，並在下方選擇退出。`;
  }
);
const settings_privacy_plausible_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_plausible_description", locale2);
  if (locale2 === "en") return en_settings_privacy_plausible_description();
  if (locale2 === "es") return es_settings_privacy_plausible_description();
  if (locale2 === "fr") return fr_settings_privacy_plausible_description();
  if (locale2 === "de") return de_settings_privacy_plausible_description();
  if (locale2 === "it") return it_settings_privacy_plausible_description();
  if (locale2 === "hr") return hr_settings_privacy_plausible_description();
  if (locale2 === "tr") return tr_settings_privacy_plausible_description();
  if (locale2 === "ja") return ja_settings_privacy_plausible_description();
  if (locale2 === "ko") return ko_settings_privacy_plausible_description();
  if (locale2 === "el") return el_settings_privacy_plausible_description();
  if (locale2 === "id") return id_settings_privacy_plausible_description();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_plausible_description();
  return zh_hant1_settings_privacy_plausible_description();
};
const en_settings_privacy_opt_in = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Opt-in`;
  }
);
const es_settings_privacy_opt_in = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Participar`;
  }
);
const fr_settings_privacy_opt_in = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Inscription`;
  }
);
const de_settings_privacy_opt_in = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Anmelden`;
  }
);
const it_settings_privacy_opt_in = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Attiva tracciamento`;
  }
);
const hr_settings_privacy_opt_in = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sudjelujem`;
  }
);
const tr_settings_privacy_opt_in = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Etkinleştir`;
  }
);
const ja_settings_privacy_opt_in = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `参加する`;
  }
);
const ko_settings_privacy_opt_in = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `수락`;
  }
);
const el_settings_privacy_opt_in = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Συμμετοχή`;
  }
);
const id_settings_privacy_opt_in = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ikut serta`;
  }
);
const zh_hans1_settings_privacy_opt_in = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `选择加入`;
  }
);
const zh_hant1_settings_privacy_opt_in = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `選擇加入`;
  }
);
const settings_privacy_opt_in = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_opt_in", locale2);
  if (locale2 === "en") return en_settings_privacy_opt_in();
  if (locale2 === "es") return es_settings_privacy_opt_in();
  if (locale2 === "fr") return fr_settings_privacy_opt_in();
  if (locale2 === "de") return de_settings_privacy_opt_in();
  if (locale2 === "it") return it_settings_privacy_opt_in();
  if (locale2 === "hr") return hr_settings_privacy_opt_in();
  if (locale2 === "tr") return tr_settings_privacy_opt_in();
  if (locale2 === "ja") return ja_settings_privacy_opt_in();
  if (locale2 === "ko") return ko_settings_privacy_opt_in();
  if (locale2 === "el") return el_settings_privacy_opt_in();
  if (locale2 === "id") return id_settings_privacy_opt_in();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_opt_in();
  return zh_hant1_settings_privacy_opt_in();
};
const en_settings_privacy_opt_out = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Opt-out`;
  }
);
const es_settings_privacy_opt_out = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `No participar`;
  }
);
const fr_settings_privacy_opt_out = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Désinscription`;
  }
);
const de_settings_privacy_opt_out = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Abmelden`;
  }
);
const it_settings_privacy_opt_out = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Disattiva tracciamento`;
  }
);
const hr_settings_privacy_opt_out = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ne sudjelujem`;
  }
);
const tr_settings_privacy_opt_out = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Devre dışı bırak`;
  }
);
const ja_settings_privacy_opt_out = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `参加しない`;
  }
);
const ko_settings_privacy_opt_out = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `거부`;
  }
);
const el_settings_privacy_opt_out = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Εξαίρεση`;
  }
);
const id_settings_privacy_opt_out = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tidak ikut`;
  }
);
const zh_hans1_settings_privacy_opt_out = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `选择退出`;
  }
);
const zh_hant1_settings_privacy_opt_out = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `選擇退出`;
  }
);
const settings_privacy_opt_out = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_opt_out", locale2);
  if (locale2 === "en") return en_settings_privacy_opt_out();
  if (locale2 === "es") return es_settings_privacy_opt_out();
  if (locale2 === "fr") return fr_settings_privacy_opt_out();
  if (locale2 === "de") return de_settings_privacy_opt_out();
  if (locale2 === "it") return it_settings_privacy_opt_out();
  if (locale2 === "hr") return hr_settings_privacy_opt_out();
  if (locale2 === "tr") return tr_settings_privacy_opt_out();
  if (locale2 === "ja") return ja_settings_privacy_opt_out();
  if (locale2 === "ko") return ko_settings_privacy_opt_out();
  if (locale2 === "el") return el_settings_privacy_opt_out();
  if (locale2 === "id") return id_settings_privacy_opt_out();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_opt_out();
  return zh_hant1_settings_privacy_opt_out();
};
const en_settings_privacy_cache_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cache management`;
  }
);
const es_settings_privacy_cache_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Administración de caché`;
  }
);
const it_settings_privacy_cache_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Gestione della cache`;
  }
);
const tr_settings_privacy_cache_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Önbellek yönetimi`;
  }
);
const ja_settings_privacy_cache_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `キャッシュ管理`;
  }
);
const ko_settings_privacy_cache_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `캐시 정리`;
  }
);
const el_settings_privacy_cache_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Διαχείριση προσωρινής μνήμης`;
  }
);
const id_settings_privacy_cache_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Manajemen cache`;
  }
);
const zh_hans1_settings_privacy_cache_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `缓存管理`;
  }
);
const zh_hant1_settings_privacy_cache_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `快取管理`;
  }
);
const fr_settings_privacy_cache_title = en_settings_privacy_cache_title;
const de_settings_privacy_cache_title = en_settings_privacy_cache_title;
const hr_settings_privacy_cache_title = en_settings_privacy_cache_title;
const settings_privacy_cache_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_cache_title", locale2);
  if (locale2 === "en") return en_settings_privacy_cache_title();
  if (locale2 === "es") return es_settings_privacy_cache_title();
  if (locale2 === "fr") return fr_settings_privacy_cache_title();
  if (locale2 === "de") return de_settings_privacy_cache_title();
  if (locale2 === "it") return it_settings_privacy_cache_title();
  if (locale2 === "hr") return hr_settings_privacy_cache_title();
  if (locale2 === "tr") return tr_settings_privacy_cache_title();
  if (locale2 === "ja") return ja_settings_privacy_cache_title();
  if (locale2 === "ko") return ko_settings_privacy_cache_title();
  if (locale2 === "el") return el_settings_privacy_cache_title();
  if (locale2 === "id") return id_settings_privacy_cache_title();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_cache_title();
  return zh_hant1_settings_privacy_cache_title();
};
const en_settings_privacy_cache_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `We cache the converter files on your browser so you don't have to re-download them every time, improving performance and reducing data usage.`;
  }
);
const es_settings_privacy_cache_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Guardamos en caché los archivos del convertidor en su navegador para que no tenga que volver a descargarlos cada vez, mejorando el rendimiento y reduciendo el uso de datos.`;
  }
);
const it_settings_privacy_cache_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Memorizziamo i file del convertitore nella cache del tuo *browser* in modo che tu non debba riscaricarli ogni volta, migliorando le prestazioni e riducendo l'utilizzo dei dati.`;
  }
);
const tr_settings_privacy_cache_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dönüştürücü dosyalarını tarayıcınızda önbelleğe alırız, böylece her seferinde yeniden indirmenize gerek kalmaz, performans artar ve veri kullanımı azalır.`;
  }
);
const ja_settings_privacy_cache_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `コンバーターファイルをブラウザにキャッシュして再ダウンロードを防ぎ、パフォーマンスを向上させます。`;
  }
);
const ko_settings_privacy_cache_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `브라우저에 변환기 파일을 캐시하여 매번 다시 다운로드할 필요가 없도록 하여 최적화와 데이터 사용량을 줄입니다.`;
  }
);
const el_settings_privacy_cache_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αποθηκεύουμε προσωρινά τα αρχεία μετατροπέα στο πρόγραμμα περιήγησής σας, ώστε να μην χρειάζεται να τα κατεβάζετε ξανά κάθε φορά, βελτιώνοντας την απόδοση και μειώνοντας τη χρήση δεδομένων.`;
  }
);
const id_settings_privacy_cache_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kami menyimpan berkas konverter di browser agar kamu tidak perlu mengunduh ulang setiap kali, meningkatkan performa dan menghemat data.`;
  }
);
const zh_hans1_settings_privacy_cache_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `我们在浏览器中缓存转换器文件，这样你就不必每次都重新下载，从而提高性能并减少数据使用。`;
  }
);
const zh_hant1_settings_privacy_cache_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `我們在瀏覽器中快取轉換器檔案，這樣你就不必每次都重新下載，從而提高效能並減少資料使用。`;
  }
);
const fr_settings_privacy_cache_description = en_settings_privacy_cache_description;
const de_settings_privacy_cache_description = en_settings_privacy_cache_description;
const hr_settings_privacy_cache_description = en_settings_privacy_cache_description;
const settings_privacy_cache_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_cache_description", locale2);
  if (locale2 === "en") return en_settings_privacy_cache_description();
  if (locale2 === "es") return es_settings_privacy_cache_description();
  if (locale2 === "fr") return fr_settings_privacy_cache_description();
  if (locale2 === "de") return de_settings_privacy_cache_description();
  if (locale2 === "it") return it_settings_privacy_cache_description();
  if (locale2 === "hr") return hr_settings_privacy_cache_description();
  if (locale2 === "tr") return tr_settings_privacy_cache_description();
  if (locale2 === "ja") return ja_settings_privacy_cache_description();
  if (locale2 === "ko") return ko_settings_privacy_cache_description();
  if (locale2 === "el") return el_settings_privacy_cache_description();
  if (locale2 === "id") return id_settings_privacy_cache_description();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_cache_description();
  return zh_hant1_settings_privacy_cache_description();
};
const en_settings_privacy_refresh_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Refresh cache`;
  }
);
const es_settings_privacy_refresh_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Actualizar caché`;
  }
);
const it_settings_privacy_refresh_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Aggiorna cache`;
  }
);
const tr_settings_privacy_refresh_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Önbelleği Yenile`;
  }
);
const ja_settings_privacy_refresh_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `キャッシュを更新`;
  }
);
const ko_settings_privacy_refresh_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `캐시 새로고침`;
  }
);
const el_settings_privacy_refresh_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ανανέωση προσωρινής μνήμης`;
  }
);
const id_settings_privacy_refresh_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Segarkan cache`;
  }
);
const zh_hans1_settings_privacy_refresh_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `刷新缓存`;
  }
);
const zh_hant1_settings_privacy_refresh_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `重新整理快取`;
  }
);
const fr_settings_privacy_refresh_cache = en_settings_privacy_refresh_cache;
const de_settings_privacy_refresh_cache = en_settings_privacy_refresh_cache;
const hr_settings_privacy_refresh_cache = en_settings_privacy_refresh_cache;
const settings_privacy_refresh_cache = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_refresh_cache", locale2);
  if (locale2 === "en") return en_settings_privacy_refresh_cache();
  if (locale2 === "es") return es_settings_privacy_refresh_cache();
  if (locale2 === "fr") return fr_settings_privacy_refresh_cache();
  if (locale2 === "de") return de_settings_privacy_refresh_cache();
  if (locale2 === "it") return it_settings_privacy_refresh_cache();
  if (locale2 === "hr") return hr_settings_privacy_refresh_cache();
  if (locale2 === "tr") return tr_settings_privacy_refresh_cache();
  if (locale2 === "ja") return ja_settings_privacy_refresh_cache();
  if (locale2 === "ko") return ko_settings_privacy_refresh_cache();
  if (locale2 === "el") return el_settings_privacy_refresh_cache();
  if (locale2 === "id") return id_settings_privacy_refresh_cache();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_refresh_cache();
  return zh_hant1_settings_privacy_refresh_cache();
};
const en_settings_privacy_clear_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Clear cache`;
  }
);
const es_settings_privacy_clear_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Borrar caché`;
  }
);
const it_settings_privacy_clear_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cancella cache`;
  }
);
const tr_settings_privacy_clear_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Önbelleği Temizle`;
  }
);
const ja_settings_privacy_clear_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `キャッシュをクリア`;
  }
);
const ko_settings_privacy_clear_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `캐시 지우기`;
  }
);
const el_settings_privacy_clear_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Εκκαθάριση προσωρινής μνήμης`;
  }
);
const id_settings_privacy_clear_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Hapus cache`;
  }
);
const zh_hans1_settings_privacy_clear_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `清除缓存`;
  }
);
const zh_hant1_settings_privacy_clear_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `清除快取`;
  }
);
const fr_settings_privacy_clear_cache = en_settings_privacy_clear_cache;
const de_settings_privacy_clear_cache = en_settings_privacy_clear_cache;
const hr_settings_privacy_clear_cache = en_settings_privacy_clear_cache;
const settings_privacy_clear_cache = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_clear_cache", locale2);
  if (locale2 === "en") return en_settings_privacy_clear_cache();
  if (locale2 === "es") return es_settings_privacy_clear_cache();
  if (locale2 === "fr") return fr_settings_privacy_clear_cache();
  if (locale2 === "de") return de_settings_privacy_clear_cache();
  if (locale2 === "it") return it_settings_privacy_clear_cache();
  if (locale2 === "hr") return hr_settings_privacy_clear_cache();
  if (locale2 === "tr") return tr_settings_privacy_clear_cache();
  if (locale2 === "ja") return ja_settings_privacy_clear_cache();
  if (locale2 === "ko") return ko_settings_privacy_clear_cache();
  if (locale2 === "el") return el_settings_privacy_clear_cache();
  if (locale2 === "id") return id_settings_privacy_clear_cache();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_clear_cache();
  return zh_hant1_settings_privacy_clear_cache();
};
const en_settings_privacy_files_cached = (
  /** @type {(inputs: { size: NonNullable<unknown>, count: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.size} (${i.count} files)`;
  }
);
const es_settings_privacy_files_cached = (
  /** @type {(inputs: { size: NonNullable<unknown>, count: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.size} (${i.count} archivos)`;
  }
);
const it_settings_privacy_files_cached = (
  /** @type {(inputs: { size: NonNullable<unknown>, count: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.size} (${i.count} file)`;
  }
);
const tr_settings_privacy_files_cached = (
  /** @type {(inputs: { size: NonNullable<unknown>, count: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.size} (${i.count} dosya)`;
  }
);
const ja_settings_privacy_files_cached = (
  /** @type {(inputs: { size: NonNullable<unknown>, count: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.size}（${i.count}ファイル）`;
  }
);
const ko_settings_privacy_files_cached = (
  /** @type {(inputs: { size: NonNullable<unknown>, count: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.size} (${i.count} files)`;
  }
);
const el_settings_privacy_files_cached = (
  /** @type {(inputs: { size: NonNullable<unknown>, count: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.size} (${i.count} αρχεία)`;
  }
);
const id_settings_privacy_files_cached = (
  /** @type {(inputs: { size: NonNullable<unknown>, count: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.size} (${i.count} berkas)`;
  }
);
const zh_hans1_settings_privacy_files_cached = (
  /** @type {(inputs: { size: NonNullable<unknown>, count: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.size}（${i.count}个文件）`;
  }
);
const zh_hant1_settings_privacy_files_cached = (
  /** @type {(inputs: { size: NonNullable<unknown>, count: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.size}（${i.count}個檔案）`;
  }
);
const fr_settings_privacy_files_cached = en_settings_privacy_files_cached;
const de_settings_privacy_files_cached = en_settings_privacy_files_cached;
const hr_settings_privacy_files_cached = en_settings_privacy_files_cached;
const settings_privacy_files_cached = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_files_cached", locale2);
  if (locale2 === "en") return en_settings_privacy_files_cached(inputs);
  if (locale2 === "es") return es_settings_privacy_files_cached(inputs);
  if (locale2 === "fr") return fr_settings_privacy_files_cached(inputs);
  if (locale2 === "de") return de_settings_privacy_files_cached(inputs);
  if (locale2 === "it") return it_settings_privacy_files_cached(inputs);
  if (locale2 === "hr") return hr_settings_privacy_files_cached(inputs);
  if (locale2 === "tr") return tr_settings_privacy_files_cached(inputs);
  if (locale2 === "ja") return ja_settings_privacy_files_cached(inputs);
  if (locale2 === "ko") return ko_settings_privacy_files_cached(inputs);
  if (locale2 === "el") return el_settings_privacy_files_cached(inputs);
  if (locale2 === "id") return id_settings_privacy_files_cached(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_files_cached(inputs);
  return zh_hant1_settings_privacy_files_cached(inputs);
};
const en_settings_privacy_loading_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Loading...`;
  }
);
const es_settings_privacy_loading_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cargando...`;
  }
);
const it_settings_privacy_loading_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Caricamento...`;
  }
);
const tr_settings_privacy_loading_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Yükleniyor...`;
  }
);
const ja_settings_privacy_loading_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `読み込み中...`;
  }
);
const ko_settings_privacy_loading_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `로딩중...`;
  }
);
const el_settings_privacy_loading_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Φόρτωση...`;
  }
);
const id_settings_privacy_loading_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Memuat...`;
  }
);
const zh_hans1_settings_privacy_loading_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `加载中...`;
  }
);
const zh_hant1_settings_privacy_loading_cache = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `載入中...`;
  }
);
const fr_settings_privacy_loading_cache = en_settings_privacy_loading_cache;
const de_settings_privacy_loading_cache = en_settings_privacy_loading_cache;
const hr_settings_privacy_loading_cache = en_settings_privacy_loading_cache;
const settings_privacy_loading_cache = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_loading_cache", locale2);
  if (locale2 === "en") return en_settings_privacy_loading_cache();
  if (locale2 === "es") return es_settings_privacy_loading_cache();
  if (locale2 === "fr") return fr_settings_privacy_loading_cache();
  if (locale2 === "de") return de_settings_privacy_loading_cache();
  if (locale2 === "it") return it_settings_privacy_loading_cache();
  if (locale2 === "hr") return hr_settings_privacy_loading_cache();
  if (locale2 === "tr") return tr_settings_privacy_loading_cache();
  if (locale2 === "ja") return ja_settings_privacy_loading_cache();
  if (locale2 === "ko") return ko_settings_privacy_loading_cache();
  if (locale2 === "el") return el_settings_privacy_loading_cache();
  if (locale2 === "id") return id_settings_privacy_loading_cache();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_loading_cache();
  return zh_hant1_settings_privacy_loading_cache();
};
const en_settings_privacy_total_size = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Total Size`;
  }
);
const es_settings_privacy_total_size = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tamaño total`;
  }
);
const it_settings_privacy_total_size = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dimensione Totale`;
  }
);
const tr_settings_privacy_total_size = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Toplam Boyut`;
  }
);
const ja_settings_privacy_total_size = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `合計サイズ`;
  }
);
const ko_settings_privacy_total_size = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `총 크기`;
  }
);
const el_settings_privacy_total_size = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Συνολικό μέγεθος`;
  }
);
const id_settings_privacy_total_size = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Total Ukuran`;
  }
);
const zh_hans1_settings_privacy_total_size = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `总大小`;
  }
);
const zh_hant1_settings_privacy_total_size = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `總大小`;
  }
);
const fr_settings_privacy_total_size = en_settings_privacy_total_size;
const de_settings_privacy_total_size = en_settings_privacy_total_size;
const hr_settings_privacy_total_size = en_settings_privacy_total_size;
const settings_privacy_total_size = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_total_size", locale2);
  if (locale2 === "en") return en_settings_privacy_total_size();
  if (locale2 === "es") return es_settings_privacy_total_size();
  if (locale2 === "fr") return fr_settings_privacy_total_size();
  if (locale2 === "de") return de_settings_privacy_total_size();
  if (locale2 === "it") return it_settings_privacy_total_size();
  if (locale2 === "hr") return hr_settings_privacy_total_size();
  if (locale2 === "tr") return tr_settings_privacy_total_size();
  if (locale2 === "ja") return ja_settings_privacy_total_size();
  if (locale2 === "ko") return ko_settings_privacy_total_size();
  if (locale2 === "el") return el_settings_privacy_total_size();
  if (locale2 === "id") return id_settings_privacy_total_size();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_total_size();
  return zh_hant1_settings_privacy_total_size();
};
const en_settings_privacy_files_cached_label = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Files Cached`;
  }
);
const es_settings_privacy_files_cached_label = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Archivos en caché`;
  }
);
const it_settings_privacy_files_cached_label = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `File in Cache`;
  }
);
const tr_settings_privacy_files_cached_label = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Önbelleğe Alınan Dosyalar`;
  }
);
const ja_settings_privacy_files_cached_label = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `キャッシュ済みファイル`;
  }
);
const ko_settings_privacy_files_cached_label = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `캐시된 파일`;
  }
);
const el_settings_privacy_files_cached_label = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αρχεία σε προσωρινή μνήμη`;
  }
);
const id_settings_privacy_files_cached_label = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `File Tersimpan`;
  }
);
const zh_hans1_settings_privacy_files_cached_label = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `已缓存文件`;
  }
);
const zh_hant1_settings_privacy_files_cached_label = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `已快取檔案`;
  }
);
const fr_settings_privacy_files_cached_label = en_settings_privacy_files_cached_label;
const de_settings_privacy_files_cached_label = en_settings_privacy_files_cached_label;
const hr_settings_privacy_files_cached_label = en_settings_privacy_files_cached_label;
const settings_privacy_files_cached_label = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_files_cached_label", locale2);
  if (locale2 === "en") return en_settings_privacy_files_cached_label();
  if (locale2 === "es") return es_settings_privacy_files_cached_label();
  if (locale2 === "fr") return fr_settings_privacy_files_cached_label();
  if (locale2 === "de") return de_settings_privacy_files_cached_label();
  if (locale2 === "it") return it_settings_privacy_files_cached_label();
  if (locale2 === "hr") return hr_settings_privacy_files_cached_label();
  if (locale2 === "tr") return tr_settings_privacy_files_cached_label();
  if (locale2 === "ja") return ja_settings_privacy_files_cached_label();
  if (locale2 === "ko") return ko_settings_privacy_files_cached_label();
  if (locale2 === "el") return el_settings_privacy_files_cached_label();
  if (locale2 === "id") return id_settings_privacy_files_cached_label();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_files_cached_label();
  return zh_hant1_settings_privacy_files_cached_label();
};
const en_settings_privacy_cache_cleared = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cache cleared successfully!`;
  }
);
const es_settings_privacy_cache_cleared = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `¡Caché borrada exitosamente!`;
  }
);
const it_settings_privacy_cache_cleared = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cache cancellata con successo!`;
  }
);
const tr_settings_privacy_cache_cleared = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Önbellek başarıyla temizlendi.`;
  }
);
const ja_settings_privacy_cache_cleared = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `キャッシュが正常にクリアされました！`;
  }
);
const ko_settings_privacy_cache_cleared = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `캐시를 성공적으로 지웠습니다!`;
  }
);
const el_settings_privacy_cache_cleared = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Η προσωρινή μνήμη εκκαθαρίστηκε επιτυχώς!`;
  }
);
const id_settings_privacy_cache_cleared = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cache berhasil dihapus!`;
  }
);
const zh_hans1_settings_privacy_cache_cleared = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `缓存已成功清除！`;
  }
);
const zh_hant1_settings_privacy_cache_cleared = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `快取已成功清除！`;
  }
);
const fr_settings_privacy_cache_cleared = en_settings_privacy_cache_cleared;
const de_settings_privacy_cache_cleared = en_settings_privacy_cache_cleared;
const hr_settings_privacy_cache_cleared = en_settings_privacy_cache_cleared;
const settings_privacy_cache_cleared = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_cache_cleared", locale2);
  if (locale2 === "en") return en_settings_privacy_cache_cleared();
  if (locale2 === "es") return es_settings_privacy_cache_cleared();
  if (locale2 === "fr") return fr_settings_privacy_cache_cleared();
  if (locale2 === "de") return de_settings_privacy_cache_cleared();
  if (locale2 === "it") return it_settings_privacy_cache_cleared();
  if (locale2 === "hr") return hr_settings_privacy_cache_cleared();
  if (locale2 === "tr") return tr_settings_privacy_cache_cleared();
  if (locale2 === "ja") return ja_settings_privacy_cache_cleared();
  if (locale2 === "ko") return ko_settings_privacy_cache_cleared();
  if (locale2 === "el") return el_settings_privacy_cache_cleared();
  if (locale2 === "id") return id_settings_privacy_cache_cleared();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_cache_cleared();
  return zh_hant1_settings_privacy_cache_cleared();
};
const en_settings_privacy_cache_clear_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Failed to clear cache.`;
  }
);
const it_settings_privacy_cache_clear_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Impossibile cancellare la cache.`;
  }
);
const ko_settings_privacy_cache_clear_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `캐시를 지우는 중 오류가 발생했습니다`;
  }
);
const el_settings_privacy_cache_clear_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αποτυχία εκκαθάρισης προσωρινής μνήμης.`;
  }
);
const id_settings_privacy_cache_clear_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Gagal menghapus cache.`;
  }
);
const zh_hans1_settings_privacy_cache_clear_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `清除缓存失败。`;
  }
);
const zh_hant1_settings_privacy_cache_clear_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `清除快取失敗。`;
  }
);
const es_settings_privacy_cache_clear_error = en_settings_privacy_cache_clear_error;
const fr_settings_privacy_cache_clear_error = en_settings_privacy_cache_clear_error;
const de_settings_privacy_cache_clear_error = en_settings_privacy_cache_clear_error;
const hr_settings_privacy_cache_clear_error = en_settings_privacy_cache_clear_error;
const tr_settings_privacy_cache_clear_error = en_settings_privacy_cache_clear_error;
const ja_settings_privacy_cache_clear_error = en_settings_privacy_cache_clear_error;
const settings_privacy_cache_clear_error = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_cache_clear_error", locale2);
  if (locale2 === "en") return en_settings_privacy_cache_clear_error();
  if (locale2 === "es") return es_settings_privacy_cache_clear_error();
  if (locale2 === "fr") return fr_settings_privacy_cache_clear_error();
  if (locale2 === "de") return de_settings_privacy_cache_clear_error();
  if (locale2 === "it") return it_settings_privacy_cache_clear_error();
  if (locale2 === "hr") return hr_settings_privacy_cache_clear_error();
  if (locale2 === "tr") return tr_settings_privacy_cache_clear_error();
  if (locale2 === "ja") return ja_settings_privacy_cache_clear_error();
  if (locale2 === "ko") return ko_settings_privacy_cache_clear_error();
  if (locale2 === "el") return el_settings_privacy_cache_clear_error();
  if (locale2 === "id") return id_settings_privacy_cache_clear_error();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_cache_clear_error();
  return zh_hant1_settings_privacy_cache_clear_error();
};
const en_settings_privacy_site_data_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Site data management`;
  }
);
const zh_hans1_settings_privacy_site_data_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `网站数据管理`;
  }
);
const zh_hant1_settings_privacy_site_data_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `網站資料管理`;
  }
);
const es_settings_privacy_site_data_title = en_settings_privacy_site_data_title;
const fr_settings_privacy_site_data_title = en_settings_privacy_site_data_title;
const de_settings_privacy_site_data_title = en_settings_privacy_site_data_title;
const it_settings_privacy_site_data_title = en_settings_privacy_site_data_title;
const hr_settings_privacy_site_data_title = en_settings_privacy_site_data_title;
const tr_settings_privacy_site_data_title = en_settings_privacy_site_data_title;
const ja_settings_privacy_site_data_title = en_settings_privacy_site_data_title;
const ko_settings_privacy_site_data_title = en_settings_privacy_site_data_title;
const el_settings_privacy_site_data_title = en_settings_privacy_site_data_title;
const id_settings_privacy_site_data_title = en_settings_privacy_site_data_title;
const settings_privacy_site_data_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_site_data_title", locale2);
  if (locale2 === "en") return en_settings_privacy_site_data_title();
  if (locale2 === "es") return es_settings_privacy_site_data_title();
  if (locale2 === "fr") return fr_settings_privacy_site_data_title();
  if (locale2 === "de") return de_settings_privacy_site_data_title();
  if (locale2 === "it") return it_settings_privacy_site_data_title();
  if (locale2 === "hr") return hr_settings_privacy_site_data_title();
  if (locale2 === "tr") return tr_settings_privacy_site_data_title();
  if (locale2 === "ja") return ja_settings_privacy_site_data_title();
  if (locale2 === "ko") return ko_settings_privacy_site_data_title();
  if (locale2 === "el") return el_settings_privacy_site_data_title();
  if (locale2 === "id") return id_settings_privacy_site_data_title();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_site_data_title();
  return zh_hant1_settings_privacy_site_data_title();
};
const en_settings_privacy_site_data_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Clear all site data including settings and cached files, resetting FileTools to its default state and reloading the page.`;
  }
);
const zh_hans1_settings_privacy_site_data_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `清除所有网站数据，包括设置和缓存文件，将 FileTools 重置为默认状态并重新加载页面。`;
  }
);
const zh_hant1_settings_privacy_site_data_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `清除所有網站資料，包括設定和快取檔案，將 FileTools 重置為預設狀態並重新載入頁面。`;
  }
);
const es_settings_privacy_site_data_description = en_settings_privacy_site_data_description;
const fr_settings_privacy_site_data_description = en_settings_privacy_site_data_description;
const de_settings_privacy_site_data_description = en_settings_privacy_site_data_description;
const it_settings_privacy_site_data_description = en_settings_privacy_site_data_description;
const hr_settings_privacy_site_data_description = en_settings_privacy_site_data_description;
const tr_settings_privacy_site_data_description = en_settings_privacy_site_data_description;
const ja_settings_privacy_site_data_description = en_settings_privacy_site_data_description;
const ko_settings_privacy_site_data_description = en_settings_privacy_site_data_description;
const el_settings_privacy_site_data_description = en_settings_privacy_site_data_description;
const id_settings_privacy_site_data_description = en_settings_privacy_site_data_description;
const settings_privacy_site_data_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_site_data_description", locale2);
  if (locale2 === "en") return en_settings_privacy_site_data_description();
  if (locale2 === "es") return es_settings_privacy_site_data_description();
  if (locale2 === "fr") return fr_settings_privacy_site_data_description();
  if (locale2 === "de") return de_settings_privacy_site_data_description();
  if (locale2 === "it") return it_settings_privacy_site_data_description();
  if (locale2 === "hr") return hr_settings_privacy_site_data_description();
  if (locale2 === "tr") return tr_settings_privacy_site_data_description();
  if (locale2 === "ja") return ja_settings_privacy_site_data_description();
  if (locale2 === "ko") return ko_settings_privacy_site_data_description();
  if (locale2 === "el") return el_settings_privacy_site_data_description();
  if (locale2 === "id") return id_settings_privacy_site_data_description();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_site_data_description();
  return zh_hant1_settings_privacy_site_data_description();
};
const en_settings_privacy_clear_all_data = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Clear all site data`;
  }
);
const zh_hans1_settings_privacy_clear_all_data = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `清除所有网站数据`;
  }
);
const zh_hant1_settings_privacy_clear_all_data = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `清除所有網站資料`;
  }
);
const es_settings_privacy_clear_all_data = en_settings_privacy_clear_all_data;
const fr_settings_privacy_clear_all_data = en_settings_privacy_clear_all_data;
const de_settings_privacy_clear_all_data = en_settings_privacy_clear_all_data;
const it_settings_privacy_clear_all_data = en_settings_privacy_clear_all_data;
const hr_settings_privacy_clear_all_data = en_settings_privacy_clear_all_data;
const tr_settings_privacy_clear_all_data = en_settings_privacy_clear_all_data;
const ja_settings_privacy_clear_all_data = en_settings_privacy_clear_all_data;
const ko_settings_privacy_clear_all_data = en_settings_privacy_clear_all_data;
const el_settings_privacy_clear_all_data = en_settings_privacy_clear_all_data;
const id_settings_privacy_clear_all_data = en_settings_privacy_clear_all_data;
const settings_privacy_clear_all_data = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_clear_all_data", locale2);
  if (locale2 === "en") return en_settings_privacy_clear_all_data();
  if (locale2 === "es") return es_settings_privacy_clear_all_data();
  if (locale2 === "fr") return fr_settings_privacy_clear_all_data();
  if (locale2 === "de") return de_settings_privacy_clear_all_data();
  if (locale2 === "it") return it_settings_privacy_clear_all_data();
  if (locale2 === "hr") return hr_settings_privacy_clear_all_data();
  if (locale2 === "tr") return tr_settings_privacy_clear_all_data();
  if (locale2 === "ja") return ja_settings_privacy_clear_all_data();
  if (locale2 === "ko") return ko_settings_privacy_clear_all_data();
  if (locale2 === "el") return el_settings_privacy_clear_all_data();
  if (locale2 === "id") return id_settings_privacy_clear_all_data();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_clear_all_data();
  return zh_hant1_settings_privacy_clear_all_data();
};
const en_settings_privacy_clear_all_data_confirm_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Clear all site data?`;
  }
);
const zh_hans1_settings_privacy_clear_all_data_confirm_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `清除所有网站数据？`;
  }
);
const zh_hant1_settings_privacy_clear_all_data_confirm_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `清除所有網站資料？`;
  }
);
const es_settings_privacy_clear_all_data_confirm_title = en_settings_privacy_clear_all_data_confirm_title;
const fr_settings_privacy_clear_all_data_confirm_title = en_settings_privacy_clear_all_data_confirm_title;
const de_settings_privacy_clear_all_data_confirm_title = en_settings_privacy_clear_all_data_confirm_title;
const it_settings_privacy_clear_all_data_confirm_title = en_settings_privacy_clear_all_data_confirm_title;
const hr_settings_privacy_clear_all_data_confirm_title = en_settings_privacy_clear_all_data_confirm_title;
const tr_settings_privacy_clear_all_data_confirm_title = en_settings_privacy_clear_all_data_confirm_title;
const ja_settings_privacy_clear_all_data_confirm_title = en_settings_privacy_clear_all_data_confirm_title;
const ko_settings_privacy_clear_all_data_confirm_title = en_settings_privacy_clear_all_data_confirm_title;
const el_settings_privacy_clear_all_data_confirm_title = en_settings_privacy_clear_all_data_confirm_title;
const id_settings_privacy_clear_all_data_confirm_title = en_settings_privacy_clear_all_data_confirm_title;
const settings_privacy_clear_all_data_confirm_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_clear_all_data_confirm_title", locale2);
  if (locale2 === "en") return en_settings_privacy_clear_all_data_confirm_title();
  if (locale2 === "es") return es_settings_privacy_clear_all_data_confirm_title();
  if (locale2 === "fr") return fr_settings_privacy_clear_all_data_confirm_title();
  if (locale2 === "de") return de_settings_privacy_clear_all_data_confirm_title();
  if (locale2 === "it") return it_settings_privacy_clear_all_data_confirm_title();
  if (locale2 === "hr") return hr_settings_privacy_clear_all_data_confirm_title();
  if (locale2 === "tr") return tr_settings_privacy_clear_all_data_confirm_title();
  if (locale2 === "ja") return ja_settings_privacy_clear_all_data_confirm_title();
  if (locale2 === "ko") return ko_settings_privacy_clear_all_data_confirm_title();
  if (locale2 === "el") return el_settings_privacy_clear_all_data_confirm_title();
  if (locale2 === "id") return id_settings_privacy_clear_all_data_confirm_title();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_clear_all_data_confirm_title();
  return zh_hant1_settings_privacy_clear_all_data_confirm_title();
};
const en_settings_privacy_clear_all_data_confirm = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `This will reset all settings & cache, then reload the page. This action cannot be undone.`;
  }
);
const zh_hans1_settings_privacy_clear_all_data_confirm = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `这将重置所有设置和缓存，然后重新加载页面。此操作无法撤消。`;
  }
);
const zh_hant1_settings_privacy_clear_all_data_confirm = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `這將重置所有設定和快取，然後重新載入頁面。此操作無法復原。`;
  }
);
const es_settings_privacy_clear_all_data_confirm = en_settings_privacy_clear_all_data_confirm;
const fr_settings_privacy_clear_all_data_confirm = en_settings_privacy_clear_all_data_confirm;
const de_settings_privacy_clear_all_data_confirm = en_settings_privacy_clear_all_data_confirm;
const it_settings_privacy_clear_all_data_confirm = en_settings_privacy_clear_all_data_confirm;
const hr_settings_privacy_clear_all_data_confirm = en_settings_privacy_clear_all_data_confirm;
const tr_settings_privacy_clear_all_data_confirm = en_settings_privacy_clear_all_data_confirm;
const ja_settings_privacy_clear_all_data_confirm = en_settings_privacy_clear_all_data_confirm;
const ko_settings_privacy_clear_all_data_confirm = en_settings_privacy_clear_all_data_confirm;
const el_settings_privacy_clear_all_data_confirm = en_settings_privacy_clear_all_data_confirm;
const id_settings_privacy_clear_all_data_confirm = en_settings_privacy_clear_all_data_confirm;
const settings_privacy_clear_all_data_confirm = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_clear_all_data_confirm", locale2);
  if (locale2 === "en") return en_settings_privacy_clear_all_data_confirm();
  if (locale2 === "es") return es_settings_privacy_clear_all_data_confirm();
  if (locale2 === "fr") return fr_settings_privacy_clear_all_data_confirm();
  if (locale2 === "de") return de_settings_privacy_clear_all_data_confirm();
  if (locale2 === "it") return it_settings_privacy_clear_all_data_confirm();
  if (locale2 === "hr") return hr_settings_privacy_clear_all_data_confirm();
  if (locale2 === "tr") return tr_settings_privacy_clear_all_data_confirm();
  if (locale2 === "ja") return ja_settings_privacy_clear_all_data_confirm();
  if (locale2 === "ko") return ko_settings_privacy_clear_all_data_confirm();
  if (locale2 === "el") return el_settings_privacy_clear_all_data_confirm();
  if (locale2 === "id") return id_settings_privacy_clear_all_data_confirm();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_clear_all_data_confirm();
  return zh_hant1_settings_privacy_clear_all_data_confirm();
};
const en_settings_privacy_clear_all_data_cancel = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Cancel`;
  }
);
const zh_hans1_settings_privacy_clear_all_data_cancel = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `取消`;
  }
);
const zh_hant1_settings_privacy_clear_all_data_cancel = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `取消`;
  }
);
const es_settings_privacy_clear_all_data_cancel = en_settings_privacy_clear_all_data_cancel;
const fr_settings_privacy_clear_all_data_cancel = en_settings_privacy_clear_all_data_cancel;
const de_settings_privacy_clear_all_data_cancel = en_settings_privacy_clear_all_data_cancel;
const it_settings_privacy_clear_all_data_cancel = en_settings_privacy_clear_all_data_cancel;
const hr_settings_privacy_clear_all_data_cancel = en_settings_privacy_clear_all_data_cancel;
const tr_settings_privacy_clear_all_data_cancel = en_settings_privacy_clear_all_data_cancel;
const ja_settings_privacy_clear_all_data_cancel = en_settings_privacy_clear_all_data_cancel;
const ko_settings_privacy_clear_all_data_cancel = en_settings_privacy_clear_all_data_cancel;
const el_settings_privacy_clear_all_data_cancel = en_settings_privacy_clear_all_data_cancel;
const id_settings_privacy_clear_all_data_cancel = en_settings_privacy_clear_all_data_cancel;
const settings_privacy_clear_all_data_cancel = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_clear_all_data_cancel", locale2);
  if (locale2 === "en") return en_settings_privacy_clear_all_data_cancel();
  if (locale2 === "es") return es_settings_privacy_clear_all_data_cancel();
  if (locale2 === "fr") return fr_settings_privacy_clear_all_data_cancel();
  if (locale2 === "de") return de_settings_privacy_clear_all_data_cancel();
  if (locale2 === "it") return it_settings_privacy_clear_all_data_cancel();
  if (locale2 === "hr") return hr_settings_privacy_clear_all_data_cancel();
  if (locale2 === "tr") return tr_settings_privacy_clear_all_data_cancel();
  if (locale2 === "ja") return ja_settings_privacy_clear_all_data_cancel();
  if (locale2 === "ko") return ko_settings_privacy_clear_all_data_cancel();
  if (locale2 === "el") return el_settings_privacy_clear_all_data_cancel();
  if (locale2 === "id") return id_settings_privacy_clear_all_data_cancel();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_clear_all_data_cancel();
  return zh_hant1_settings_privacy_clear_all_data_cancel();
};
const en_settings_privacy_all_data_cleared = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `All site data cleared! Reloading page...`;
  }
);
const zh_hans1_settings_privacy_all_data_cleared = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `所有网站数据已清除！正在重新加载页面...`;
  }
);
const zh_hant1_settings_privacy_all_data_cleared = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `所有網站資料已清除！正在重新載入頁面...`;
  }
);
const es_settings_privacy_all_data_cleared = en_settings_privacy_all_data_cleared;
const fr_settings_privacy_all_data_cleared = en_settings_privacy_all_data_cleared;
const de_settings_privacy_all_data_cleared = en_settings_privacy_all_data_cleared;
const it_settings_privacy_all_data_cleared = en_settings_privacy_all_data_cleared;
const hr_settings_privacy_all_data_cleared = en_settings_privacy_all_data_cleared;
const tr_settings_privacy_all_data_cleared = en_settings_privacy_all_data_cleared;
const ja_settings_privacy_all_data_cleared = en_settings_privacy_all_data_cleared;
const ko_settings_privacy_all_data_cleared = en_settings_privacy_all_data_cleared;
const el_settings_privacy_all_data_cleared = en_settings_privacy_all_data_cleared;
const id_settings_privacy_all_data_cleared = en_settings_privacy_all_data_cleared;
const settings_privacy_all_data_cleared = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_all_data_cleared", locale2);
  if (locale2 === "en") return en_settings_privacy_all_data_cleared();
  if (locale2 === "es") return es_settings_privacy_all_data_cleared();
  if (locale2 === "fr") return fr_settings_privacy_all_data_cleared();
  if (locale2 === "de") return de_settings_privacy_all_data_cleared();
  if (locale2 === "it") return it_settings_privacy_all_data_cleared();
  if (locale2 === "hr") return hr_settings_privacy_all_data_cleared();
  if (locale2 === "tr") return tr_settings_privacy_all_data_cleared();
  if (locale2 === "ja") return ja_settings_privacy_all_data_cleared();
  if (locale2 === "ko") return ko_settings_privacy_all_data_cleared();
  if (locale2 === "el") return el_settings_privacy_all_data_cleared();
  if (locale2 === "id") return id_settings_privacy_all_data_cleared();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_all_data_cleared();
  return zh_hant1_settings_privacy_all_data_cleared();
};
const en_settings_privacy_all_data_clear_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Failed to clear all site data.`;
  }
);
const zh_hans1_settings_privacy_all_data_clear_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `清除所有网站数据失败。`;
  }
);
const zh_hant1_settings_privacy_all_data_clear_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `清除所有網站資料失敗。`;
  }
);
const es_settings_privacy_all_data_clear_error = en_settings_privacy_all_data_clear_error;
const fr_settings_privacy_all_data_clear_error = en_settings_privacy_all_data_clear_error;
const de_settings_privacy_all_data_clear_error = en_settings_privacy_all_data_clear_error;
const it_settings_privacy_all_data_clear_error = en_settings_privacy_all_data_clear_error;
const hr_settings_privacy_all_data_clear_error = en_settings_privacy_all_data_clear_error;
const tr_settings_privacy_all_data_clear_error = en_settings_privacy_all_data_clear_error;
const ja_settings_privacy_all_data_clear_error = en_settings_privacy_all_data_clear_error;
const ko_settings_privacy_all_data_clear_error = en_settings_privacy_all_data_clear_error;
const el_settings_privacy_all_data_clear_error = en_settings_privacy_all_data_clear_error;
const id_settings_privacy_all_data_clear_error = en_settings_privacy_all_data_clear_error;
const settings_privacy_all_data_clear_error = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_privacy_all_data_clear_error", locale2);
  if (locale2 === "en") return en_settings_privacy_all_data_clear_error();
  if (locale2 === "es") return es_settings_privacy_all_data_clear_error();
  if (locale2 === "fr") return fr_settings_privacy_all_data_clear_error();
  if (locale2 === "de") return de_settings_privacy_all_data_clear_error();
  if (locale2 === "it") return it_settings_privacy_all_data_clear_error();
  if (locale2 === "hr") return hr_settings_privacy_all_data_clear_error();
  if (locale2 === "tr") return tr_settings_privacy_all_data_clear_error();
  if (locale2 === "ja") return ja_settings_privacy_all_data_clear_error();
  if (locale2 === "ko") return ko_settings_privacy_all_data_clear_error();
  if (locale2 === "el") return el_settings_privacy_all_data_clear_error();
  if (locale2 === "id") return id_settings_privacy_all_data_clear_error();
  if (locale2 === "zh-Hans") return zh_hans1_settings_privacy_all_data_clear_error();
  return zh_hant1_settings_privacy_all_data_clear_error();
};
const en_settings_language_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Language`;
  }
);
const es_settings_language_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Lenguaje`;
  }
);
const fr_settings_language_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Langue`;
  }
);
const de_settings_language_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sprache`;
  }
);
const it_settings_language_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Lingua`;
  }
);
const hr_settings_language_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Jezik`;
  }
);
const tr_settings_language_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dil`;
  }
);
const ja_settings_language_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `言語`;
  }
);
const ko_settings_language_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `언어`;
  }
);
const el_settings_language_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Γλώσσα`;
  }
);
const id_settings_language_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bahasa`;
  }
);
const zh_hans1_settings_language_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `语言`;
  }
);
const zh_hant1_settings_language_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `語言`;
  }
);
const settings_language_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_language_title", locale2);
  if (locale2 === "en") return en_settings_language_title();
  if (locale2 === "es") return es_settings_language_title();
  if (locale2 === "fr") return fr_settings_language_title();
  if (locale2 === "de") return de_settings_language_title();
  if (locale2 === "it") return it_settings_language_title();
  if (locale2 === "hr") return hr_settings_language_title();
  if (locale2 === "tr") return tr_settings_language_title();
  if (locale2 === "ja") return ja_settings_language_title();
  if (locale2 === "ko") return ko_settings_language_title();
  if (locale2 === "el") return el_settings_language_title();
  if (locale2 === "id") return id_settings_language_title();
  if (locale2 === "zh-Hans") return zh_hans1_settings_language_title();
  return zh_hant1_settings_language_title();
};
const en_settings_language_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Select your preferred language for the FileTools interface.`;
  }
);
const es_settings_language_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Selecciona el lenguaje que prefieres usar para la interfaz de FileTools.`;
  }
);
const fr_settings_language_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sélectionnez votre langue préférée pour l'interface de FileTools`;
  }
);
const de_settings_language_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Wähle deine bevorzugte Sprache für die FileTools-Oberfläche.`;
  }
);
const it_settings_language_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Seleziona la tua lingua preferita per l'interfaccia di FileTools.`;
  }
);
const hr_settings_language_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Izaberi svoj preferirani jezik za FileToolsovo sučelje.`;
  }
);
const tr_settings_language_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools arayüzü için tercih ettiğiniz dili seçin.`;
  }
);
const ja_settings_language_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileToolsインターフェイスの表示言語を選択してください。`;
  }
);
const ko_settings_language_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `선호하시는 언어를 선택하세요.`;
  }
);
const el_settings_language_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Επιλέξτε την προτιμώμενη γλώσσα σας για το περιβάλλον του FileTools.`;
  }
);
const id_settings_language_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pilih bahasa pilihanmu untuk antarmuka FileTools.`;
  }
);
const zh_hans1_settings_language_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `选择 FileTools 界面的首选语言。`;
  }
);
const zh_hant1_settings_language_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `選擇 FileTools 介面的偏好語言。`;
  }
);
const settings_language_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_language_description", locale2);
  if (locale2 === "en") return en_settings_language_description();
  if (locale2 === "es") return es_settings_language_description();
  if (locale2 === "fr") return fr_settings_language_description();
  if (locale2 === "de") return de_settings_language_description();
  if (locale2 === "it") return it_settings_language_description();
  if (locale2 === "hr") return hr_settings_language_description();
  if (locale2 === "tr") return tr_settings_language_description();
  if (locale2 === "ja") return ja_settings_language_description();
  if (locale2 === "ko") return ko_settings_language_description();
  if (locale2 === "el") return el_settings_language_description();
  if (locale2 === "id") return id_settings_language_description();
  if (locale2 === "zh-Hans") return zh_hans1_settings_language_description();
  return zh_hant1_settings_language_description();
};
const en_about_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `About`;
  }
);
const es_about_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Acerca de`;
  }
);
const fr_about_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `A propos`;
  }
);
const de_about_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Über`;
  }
);
const it_about_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Informazioni`;
  }
);
const hr_about_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `O stranici`;
  }
);
const tr_about_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Hakkımızda`;
  }
);
const ja_about_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `について`;
  }
);
const ko_about_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `정보`;
  }
);
const el_about_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Σχετικά`;
  }
);
const id_about_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tentang`;
  }
);
const zh_hans1_about_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `关于`;
  }
);
const zh_hant1_about_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `關於`;
  }
);
const about_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_title", locale2);
  if (locale2 === "en") return en_about_title();
  if (locale2 === "es") return es_about_title();
  if (locale2 === "fr") return fr_about_title();
  if (locale2 === "de") return de_about_title();
  if (locale2 === "it") return it_about_title();
  if (locale2 === "hr") return hr_about_title();
  if (locale2 === "tr") return tr_about_title();
  if (locale2 === "ja") return ja_about_title();
  if (locale2 === "ko") return ko_about_title();
  if (locale2 === "el") return el_about_title();
  if (locale2 === "id") return id_about_title();
  if (locale2 === "zh-Hans") return zh_hans1_about_title();
  return zh_hant1_about_title();
};
const en_about_why_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Why FileTools?`;
  }
);
const es_about_why_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `¿Por qué FileTools?`;
  }
);
const fr_about_why_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pourquoi FileTools?`;
  }
);
const de_about_why_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Warum FileTools?`;
  }
);
const it_about_why_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Perché FileTools?`;
  }
);
const hr_about_why_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Zašto baš FileTools?`;
  }
);
const tr_about_why_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Neden FileTools?`;
  }
);
const ja_about_why_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `なぜFileTools？`;
  }
);
const ko_about_why_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `왜 FileTools인가?`;
  }
);
const el_about_why_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Γιατί το FileTools;`;
  }
);
const id_about_why_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mengapa FileTools?`;
  }
);
const zh_hans1_about_why_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `为什么选择 FileTools？`;
  }
);
const zh_hant1_about_why_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `為什麼選擇 FileTools？`;
  }
);
const about_why_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_why_title", locale2);
  if (locale2 === "en") return en_about_why_title();
  if (locale2 === "es") return es_about_why_title();
  if (locale2 === "fr") return fr_about_why_title();
  if (locale2 === "de") return de_about_why_title();
  if (locale2 === "it") return it_about_why_title();
  if (locale2 === "hr") return hr_about_why_title();
  if (locale2 === "tr") return tr_about_why_title();
  if (locale2 === "ja") return ja_about_why_title();
  if (locale2 === "ko") return ko_about_why_title();
  if (locale2 === "el") return el_about_why_title();
  if (locale2 === "id") return id_about_why_title();
  if (locale2 === "zh-Hans") return zh_hans1_about_why_title();
  return zh_hant1_about_why_title();
};
const en_about_why_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>File converters have always disappointed us.</b> They're ugly, riddled with ads, and most importantly; slow. We decided to solve this problem once and for all by making an alternative that solves all those problems, and more.<br/><br/>All non-video files are converted completely on-device; this means that there's no delay between sending and receiving the files from a server, and we never get to snoop on the files you convert.<br/><br/>Video files get uploaded to our lightning-fast RTX 4000 Ada server. Your videos stay on there for an hour if you do not convert them. If you do convert the file, the video will stay on the server for an hour, or until it is downloaded. The file will then be deleted from our server.`;
  }
);
const es_about_why_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>Los conversores de archivos siempre nos han decepcionado.</b> Son feos, están llenos de anuncios y, lo más importante, son lentos. Decidimos solucionar este problema de una vez por todas creando una alternativa que resuelve todo eso, y más.<br/><br/>Todos los archivos (exceptuando vídeos) se convierten directamente en tu dispositivo; esto significa que no hay demoras por subir o bajar archivos de un servidor, y nunca tenemos acceso a los archivos que conviertes.<br/><br/>Los vídeos se suben a nuestro servidor ultra rápido equipado con una RTX 4000 Ada. Tus vídeos permanecen allí durante una hora si no los conviertes. Si los conviertes, el archivo se guarda durante una hora, o hasta que lo descargues. Luego, el archivo se elimina del servidor.`;
  }
);
const fr_about_why_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>Les convertisseurs de fichiers nous ont toujours déçus.</b> Ils sont laids, infestés de publicités et, surtout, lents. Nous avons décidé de résoudre ce problème une fois pour toutes en créant une alternative qui résout tous ces problèmes, et bien plus encore.<br/><br/>Tous les fichiers non vidéo sont entièrement convertis sur l'appareil; cela signifie qu'il n'y a aucun délai entre l'envoi et la réception des fichiers depuis un serveur, et nous ne pouvons jamais espionner les fichiers que vous convertissez.<br/><br/>Les fichiers vidéo sont téléchargés sur notre serveur RTX 4000 Ada ultra-rapide. Vos vidéos y restent pendant une heure si vous ne les convertissez pas. Si vous convertissez le fichier, la vidéo restera sur le serveur pendant une heure, ou jusqu'à son téléchargement. Le fichier sera ensuite supprimé de notre serveur.`;
  }
);
const de_about_why_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>Dateikonverter haben uns schon immer enttäuscht.</b> Sie sind hässlich, voller Werbung und vor allem langsam. Wir haben beschlossen, dieses Problem ein für alle Mal zu lösen, indem wir eine Alternative schaffen, die all diese Probleme und noch mehr löst.<br/><br/>Alle Nicht-Videodateien werden vollständig auf dem Gerät konvertiert; das bedeutet, es gibt keine Verzögerung beim Senden und Empfangen der Dateien von einem Server, und wir können niemals die von dir konvertierten Dateien einsehen.<br/><br/>Videodateien werden auf unseren blitzschnellen RTX 4000 Ada Server hochgeladen. Deine Videos bleiben dort für eine Stunde, wenn du sie nicht konvertierst. Wenn du die Datei konvertierst, bleibt das Video für eine Stunde auf dem Server oder bis es heruntergeladen wird. Anschließend wird die Datei von unserem Server gelöscht.`;
  }
);
const it_about_why_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>I convertitori di file ci hanno sempre deluso.</b> Sono brutti, pieni di pubblicità e, soprattutto, lenti. Abbiamo deciso di risolvere questo problema una volta per tutte creando un'alternativa che risolve tutti questi problemi e non solo.<br/><br/>Tutti i file non video vengono convertiti completamente sul dispositivo; questo significa che non ci sono ritardi tra l'invio e la ricezione dei file da un server e non possiamo mai spiare i file che converti.<br/><br/>I file video vengono caricati sul nostro velocissimo server RTX 4000 Ada. I tuoi video rimangono lì per un'ora se non li converti. Se converti il file, il video rimarrà sul server per un'ora o fino a quando non viene scaricato. Il file verrà quindi eliminato dal nostro server.`;
  }
);
const hr_about_why_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>Pretvarači datoteka su nas uvijek razočarali.</b> Izuzetno su ružni, prepuni reklama, i najvažnije; spori! Odlučili smo riješiti problem jednom i zauvijek praveći alternativu koja riješava sve ove probleme, i više.<br/><br/>Sve datoteke koji nisu videozapisi su pretvoreni direktno na Vašem uređaju; To znači da nema nikakve stanke između slanja i primanja datoteka sa servera, i nikada ne dobijemo šansu gurati nos u vaše datoteke koje pretvarate. <br/><br/>Videozapisi se prenose na naše izuzetno brze RTX 4000 Ada servere. Vaši videozapisi tamo ostano sat vremena ako ih ne pretvorite. Ako ih i pretvorite, videozapis će ostati na serveru na sat vremena, ili dok se ne preuzme. Datoteka će zatim biti obrisana sa našeg servera.`;
  }
);
const tr_about_why_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>Dosya dönüştürücüler bizi her zaman hayal kırıklığına uğratmıştır. </b> Çoğu dönüştürücü site, kötü ve reklamlarla dolu arayüze sahiptir ve en önemlisi yavaştır. Tüm bu sorunları ve daha fazlasını çözen bir alternatif oluşturarak bu sorunu sonsuza kadar çözmeye karar verdik. <br/><br/>Video dışındaki tüm dosyalar tamamen cihazınızda dönüştürülür; bu, sunucuya dosya yükleme ve sunucudan dosya indirme sırasında gecikme olmaması ve dönüştürdüğünüz dosyaların asla başka biri tarafından görüntülenememesi anlamına gelir. <br/><br/>Video dosyaları, ışık hızındaki RTX 4000 Ada sunucumuza yüklenir. Videolarınızı dönüştürseniz de dönüştürmeseniz de bir saat sonra sunucularımızdan silinir. Video dönüştürme işlemi gerçekleştirirseniz, bir saat içinde dönüştürülmüş dosyayı indirebilirsiniz. Dosya daha sonra sunucumuzdan silinir.`;
  }
);
const ja_about_why_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>従来のファイルコンバーターにはいつもがっかりしてきました。</b>見た目が悪く、広告だらけで、そして何より遅い。私たちはそれらの問題をすべて解決するためにFileToolsを作りました。<br/><br/>動画以外のファイルは完全にデバイス上で変換されるため、サーバーとのやり取りによる遅延もなく、あなたのファイルを覗き見ることもありません。<br/><br/>動画は超高速RTX 4000 Adaサーバーで処理され、変換しなかった場合は1時間以内に削除されます。変換された動画も1時間またはダウンロード完了後に削除されます。`;
  }
);
const ko_about_why_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>파일 변환기들은 항상 저희 기대치에 충족하지 못했습니다.</b> 못생긴 UI에, 광고로 떡칠하고, 그리고 가장 중요한 것은 느리다는겁니다. 그래서 저희가 이 모든 문제를 한 번에 해결할 대안을 직접 만들기로 했습니다. 기존 변환기들의 단점을 해결한 것은 물론이고, 그 이상의 기능도 제공하죠<br/><br/>동영상을 제외한 모든 파일은 사용자의 기기에서 바로 변환됩니다. 즉, 서버로 파일을 보냈다가 다시 받는 시간이 전혀 필요 없고, 저희가 여러분의 파일을 엿볼 일도 전혀 없다는 뜻입니다.<br/><br/>예외적으로 동영상 파일은 초고속 RTX 4000 Ada 서버로 업로드됩니다. 변환하지 않으면 영상은 서버에 1시간 동안 유지됩니다. 변환한 경우에도 영상은 서버에 최대 1시간 또는 다운로드될 때까지 보관되며, 그 후 서버에서 삭제됩니다.`;
  }
);
const el_about_why_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>Οι μετατροπείς αρχείων μας απογοήτευαν πάντα.</b> Είναι άσχημοι, γεμάτοι διαφημίσεις και το πιο σημαντικό· αργοί. Αποφασίσαμε να λύσουμε αυτό το πρόβλημα μια για πάντα δημιουργώντας μια εναλλακτική που λύνει όλα αυτά τα προβλήματα και περισσότερα.<br/><br/>Όλα τα αρχεία που δεν είναι βίντεο μετατρέπονται εντελώς στη συσκευή σας· αυτό σημαίνει ότι δεν υπάρχει καθυστέρηση μεταξύ της αποστολής και της λήψης των αρχείων από έναν σέρβερ και δεν αποκτούμε ποτέ πρόσβαση στα αρχεία που μετατρέπετε.<br/><br/>Τα αρχεία βίντεο μεταφορτώνονται στον αστραπιαία γρήγορο σέρβερ μας RTX 4000 Ada. Τα βίντεό σας παραμένουν εκεί για μία ώρα εάν δεν τα μετατρέψετε. Εάν μετατρέψετε το αρχείο, το βίντεο θα παραμείνει στον σέρβερ για μία ώρα ή μέχρι να ληφθεί. Στη συνέχεια, το αρχείο θα διαγραφεί από τον σέρβερ μας.`;
  }
);
const id_about_why_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>Konverter berkas selalu mengecewakan kami.</b> Mereka jelek, penuh iklan, dan yang paling penting; lambat. Kami memutuskan untuk menyelesaikan masalah ini sekali untuk selamanya dengan membuat alternatif yang memperbaiki semua masalah itu, dan lebih banyak lagi.<br/><br/>Semua berkas non-video dikonversi sepenuhnya di perangkat; artinya tidak ada jeda antara pengiriman dan penerimaan berkas, dan kami tidak pernah melihat berkas yang kamu konversi.<br/><br/>File video diunggah ke server RTX 4000 Ada super cepat kami. Videomu akan tetap di sana selama satu jam jika tidak dikonversi. Jika dikonversi, video akan bertahan satu jam atau hingga diunduh. Setelah itu, berkas akan dihapus dari server kami.`;
  }
);
const zh_hans1_about_why_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>文件转换器一直让我们失望。</b>它们很丑陋，充满广告，最重要的是；很慢。我们决定通过制作一个解决所有这些问题的替代方案，一劳永逸地解决这个问题。<br/><br/>所有非视频文件都完全在设备上转换；这意味着不需要在服务器之间发送和接收文件的延迟，而且我们永远不会窥探你转换的文件。<br/><br/>视频文件会上传到我们超快速的 RTX 4000 Ada 服务器。如果你不转换视频，它们会在服务器上保留一小时。如果你转换文件，视频将在服务器上保留一小时，或直到下载完成。然后文件将从我们的服务器中删除。`;
  }
);
const zh_hant1_about_why_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `<b>檔案轉換器一直讓我們失望。</b>它們很醜陋，充滿廣告，最重要的是；很慢。我們決定透過製作一個解決所有這些問題的替代方案，一勞永逸地解決這個問題。<br/><br/>所有非影片檔案都完全在裝置上轉換；這意味著不需要在伺服器之間傳送和接收檔案的延遲，而且我們永遠不會窺探你轉換的檔案。<br/><br/>影片檔案會上傳到我們超快速的 RTX 4000 Ada 伺服器。如果你不轉換影片，它們會在伺服器上保留一小時。如果你轉換檔案，影片將在伺服器上保留一小時，或直到下載完成。然後檔案將從我們的伺服器中刪除。`;
  }
);
const about_why_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_why_description", locale2);
  if (locale2 === "en") return en_about_why_description();
  if (locale2 === "es") return es_about_why_description();
  if (locale2 === "fr") return fr_about_why_description();
  if (locale2 === "de") return de_about_why_description();
  if (locale2 === "it") return it_about_why_description();
  if (locale2 === "hr") return hr_about_why_description();
  if (locale2 === "tr") return tr_about_why_description();
  if (locale2 === "ja") return ja_about_why_description();
  if (locale2 === "ko") return ko_about_why_description();
  if (locale2 === "el") return el_about_why_description();
  if (locale2 === "id") return id_about_why_description();
  if (locale2 === "zh-Hans") return zh_hans1_about_why_description();
  return zh_hant1_about_why_description();
};
const en_about_sponsors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sponsors`;
  }
);
const es_about_sponsors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Patrocinadores`;
  }
);
const fr_about_sponsors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sponsors`;
  }
);
const de_about_sponsors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sponsoren`;
  }
);
const it_about_sponsors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sponsor`;
  }
);
const hr_about_sponsors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sponzori`;
  }
);
const tr_about_sponsors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sponsorlar`;
  }
);
const ja_about_sponsors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `スポンサー`;
  }
);
const ko_about_sponsors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `후원자`;
  }
);
const el_about_sponsors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Χορηγοί`;
  }
);
const id_about_sponsors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sponsor`;
  }
);
const zh_hans1_about_sponsors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `赞助商`;
  }
);
const zh_hant1_about_sponsors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `贊助商`;
  }
);
const about_sponsors_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_sponsors_title", locale2);
  if (locale2 === "en") return en_about_sponsors_title();
  if (locale2 === "es") return es_about_sponsors_title();
  if (locale2 === "fr") return fr_about_sponsors_title();
  if (locale2 === "de") return de_about_sponsors_title();
  if (locale2 === "it") return it_about_sponsors_title();
  if (locale2 === "hr") return hr_about_sponsors_title();
  if (locale2 === "tr") return tr_about_sponsors_title();
  if (locale2 === "ja") return ja_about_sponsors_title();
  if (locale2 === "ko") return ko_about_sponsors_title();
  if (locale2 === "el") return el_about_sponsors_title();
  if (locale2 === "id") return id_about_sponsors_title();
  if (locale2 === "zh-Hans") return zh_hans1_about_sponsors_title();
  return zh_hant1_about_sponsors_title();
};
const en_about_sponsors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Want to support us? Contact a developer in the [discord_link]Discord[/discord_link] server, or send an email to`;
  }
);
const es_about_sponsors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `¿Quieres apoyarnos? Contacta a un desarrollador en el servidor de [discord_link]Discord[/discord_link] o envía un correo a`;
  }
);
const fr_about_sponsors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Envie de nous soutenir? Contactez un développeur sur le serveur [discord_link]Discord[/discord_link], ou envoyez un courriel à`;
  }
);
const de_about_sponsors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Möchtest du uns unterstützen? Kontaktiere einen Entwickler auf dem [discord_link]Discord[/discord_link]-Server oder sende eine E-Mail an`;
  }
);
const it_about_sponsors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Vuoi sostenerci? Contatta uno sviluppatore nel server [discord_link]Discord[/discord_link] o invia un'e-mail a`;
  }
);
const hr_about_sponsors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Želite li nas podržati? Kontaktirajte developera na [discord_link]Discord[/discord_link] serveru, ili pošaljite mail na`;
  }
);
const tr_about_sponsors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bizi desteklemek ister misiniz? [discord_link]Discord[/discord_link] sunucumuzda bir geliştiriciyle iletişime geçin veya şu adrese e-posta gönderin:`;
  }
);
const ja_about_sponsors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `私たちを支援したい場合は、[discord_link]Discord[/discord_link]サーバーで開発者に連絡するか、以下のメールアドレスまでご連絡ください。`;
  }
);
const ko_about_sponsors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `지원하고 싶으신가요? [discord_link]Discord[/discord_link] 서버의 개발자에게 문의하시거나, 다음 이메일로 보내주세요:`;
  }
);
const el_about_sponsors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Θέλετε να μας υποστηρίξετε; Επικοινωνήστε με έναν προγραμματιστή στον σέρβερ [discord_link]Discord[/discord_link] ή στείλτε email στη διεύθυνση`;
  }
);
const id_about_sponsors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ingin mendukung kami? Hubungi pengembang di server [discord_link]Discord[/discord_link], atau kirim email ke`;
  }
);
const zh_hans1_about_sponsors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `想支持我们吗？请在[discord_link]Discord[/discord_link]服务器上联系开发者，或发送电子邮件至`;
  }
);
const zh_hant1_about_sponsors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `想支援我們嗎？請在[discord_link]Discord[/discord_link]伺服器上聯絡開發者，或傳送電子郵件至`;
  }
);
const about_sponsors_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_sponsors_description", locale2);
  if (locale2 === "en") return en_about_sponsors_description();
  if (locale2 === "es") return es_about_sponsors_description();
  if (locale2 === "fr") return fr_about_sponsors_description();
  if (locale2 === "de") return de_about_sponsors_description();
  if (locale2 === "it") return it_about_sponsors_description();
  if (locale2 === "hr") return hr_about_sponsors_description();
  if (locale2 === "tr") return tr_about_sponsors_description();
  if (locale2 === "ja") return ja_about_sponsors_description();
  if (locale2 === "ko") return ko_about_sponsors_description();
  if (locale2 === "el") return el_about_sponsors_description();
  if (locale2 === "id") return id_about_sponsors_description();
  if (locale2 === "zh-Hans") return zh_hans1_about_sponsors_description();
  return zh_hant1_about_sponsors_description();
};
const en_about_sponsors_email_copied = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Email copied to clipboard!`;
  }
);
const es_about_sponsors_email_copied = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `¡Email copiado al portapapeles!`;
  }
);
const fr_about_sponsors_email_copied = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Courriel copié dans le presse-papiers !`;
  }
);
const de_about_sponsors_email_copied = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `E-Mail in die Zwischenablage kopiert!`;
  }
);
const it_about_sponsors_email_copied = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `E-mail copiata negli appunti!`;
  }
);
const hr_about_sponsors_email_copied = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Email kopiran u međuspremnik!`;
  }
);
const tr_about_sponsors_email_copied = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `E-posta kopyalandı!`;
  }
);
const ja_about_sponsors_email_copied = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `メールアドレスをコピーしました！`;
  }
);
const ko_about_sponsors_email_copied = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `클립보드에 이메일 주소가 복사되었습니다!`;
  }
);
const el_about_sponsors_email_copied = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Το email αντιγράφηκε στο πρόχειρο!`;
  }
);
const id_about_sponsors_email_copied = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Email disalin ke clipboard!`;
  }
);
const zh_hans1_about_sponsors_email_copied = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `电子邮件已复制到剪贴板！`;
  }
);
const zh_hant1_about_sponsors_email_copied = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `電子郵件已複製到剪貼簿！`;
  }
);
const about_sponsors_email_copied = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_sponsors_email_copied", locale2);
  if (locale2 === "en") return en_about_sponsors_email_copied();
  if (locale2 === "es") return es_about_sponsors_email_copied();
  if (locale2 === "fr") return fr_about_sponsors_email_copied();
  if (locale2 === "de") return de_about_sponsors_email_copied();
  if (locale2 === "it") return it_about_sponsors_email_copied();
  if (locale2 === "hr") return hr_about_sponsors_email_copied();
  if (locale2 === "tr") return tr_about_sponsors_email_copied();
  if (locale2 === "ja") return ja_about_sponsors_email_copied();
  if (locale2 === "ko") return ko_about_sponsors_email_copied();
  if (locale2 === "el") return el_about_sponsors_email_copied();
  if (locale2 === "id") return id_about_sponsors_email_copied();
  if (locale2 === "zh-Hans") return zh_hans1_about_sponsors_email_copied();
  return zh_hant1_about_sponsors_email_copied();
};
const en_about_resources_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Resources`;
  }
);
const es_about_resources_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Recursos`;
  }
);
const fr_about_resources_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Resources`;
  }
);
const de_about_resources_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ressourcen`;
  }
);
const it_about_resources_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Risorse`;
  }
);
const hr_about_resources_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Resursi`;
  }
);
const tr_about_resources_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bağlantılar`;
  }
);
const ja_about_resources_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `リソース`;
  }
);
const ko_about_resources_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Resources`;
  }
);
const el_about_resources_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Πόροι`;
  }
);
const id_about_resources_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sumber daya`;
  }
);
const zh_hans1_about_resources_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `资源`;
  }
);
const zh_hant1_about_resources_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `資源`;
  }
);
const about_resources_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_resources_title", locale2);
  if (locale2 === "en") return en_about_resources_title();
  if (locale2 === "es") return es_about_resources_title();
  if (locale2 === "fr") return fr_about_resources_title();
  if (locale2 === "de") return de_about_resources_title();
  if (locale2 === "it") return it_about_resources_title();
  if (locale2 === "hr") return hr_about_resources_title();
  if (locale2 === "tr") return tr_about_resources_title();
  if (locale2 === "ja") return ja_about_resources_title();
  if (locale2 === "ko") return ko_about_resources_title();
  if (locale2 === "el") return el_about_resources_title();
  if (locale2 === "id") return id_about_resources_title();
  if (locale2 === "zh-Hans") return zh_hans1_about_resources_title();
  return zh_hant1_about_resources_title();
};
const en_about_resources_discord = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const es_about_resources_discord = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const fr_about_resources_discord = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const de_about_resources_discord = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const it_about_resources_discord = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const hr_about_resources_discord = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const tr_about_resources_discord = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const ja_about_resources_discord = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const ko_about_resources_discord = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const el_about_resources_discord = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const id_about_resources_discord = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const zh_hans1_about_resources_discord = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const zh_hant1_about_resources_discord = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Discord`;
  }
);
const about_resources_discord = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_resources_discord", locale2);
  if (locale2 === "en") return en_about_resources_discord();
  if (locale2 === "es") return es_about_resources_discord();
  if (locale2 === "fr") return fr_about_resources_discord();
  if (locale2 === "de") return de_about_resources_discord();
  if (locale2 === "it") return it_about_resources_discord();
  if (locale2 === "hr") return hr_about_resources_discord();
  if (locale2 === "tr") return tr_about_resources_discord();
  if (locale2 === "ja") return ja_about_resources_discord();
  if (locale2 === "ko") return ko_about_resources_discord();
  if (locale2 === "el") return el_about_resources_discord();
  if (locale2 === "id") return id_about_resources_discord();
  if (locale2 === "zh-Hans") return zh_hans1_about_resources_discord();
  return zh_hant1_about_resources_discord();
};
const en_about_resources_source = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Source`;
  }
);
const es_about_resources_source = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Fuente`;
  }
);
const fr_about_resources_source = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Source`;
  }
);
const de_about_resources_source = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Quelle`;
  }
);
const it_about_resources_source = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sorgente`;
  }
);
const hr_about_resources_source = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Source kod`;
  }
);
const tr_about_resources_source = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `GitHub`;
  }
);
const ja_about_resources_source = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ソース`;
  }
);
const ko_about_resources_source = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `소스 코드`;
  }
);
const el_about_resources_source = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Πηγαίος κώδικας`;
  }
);
const id_about_resources_source = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sumber`;
  }
);
const zh_hans1_about_resources_source = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `源代码`;
  }
);
const zh_hant1_about_resources_source = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `原始碼`;
  }
);
const about_resources_source = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_resources_source", locale2);
  if (locale2 === "en") return en_about_resources_source();
  if (locale2 === "es") return es_about_resources_source();
  if (locale2 === "fr") return fr_about_resources_source();
  if (locale2 === "de") return de_about_resources_source();
  if (locale2 === "it") return it_about_resources_source();
  if (locale2 === "hr") return hr_about_resources_source();
  if (locale2 === "tr") return tr_about_resources_source();
  if (locale2 === "ja") return ja_about_resources_source();
  if (locale2 === "ko") return ko_about_resources_source();
  if (locale2 === "el") return el_about_resources_source();
  if (locale2 === "id") return id_about_resources_source();
  if (locale2 === "zh-Hans") return zh_hans1_about_resources_source();
  return zh_hant1_about_resources_source();
};
const en_about_resources_email = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Email`;
  }
);
const es_about_resources_email = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Email`;
  }
);
const fr_about_resources_email = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Courriel`;
  }
);
const de_about_resources_email = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `E-Mail`;
  }
);
const it_about_resources_email = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `E-mail`;
  }
);
const hr_about_resources_email = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Email`;
  }
);
const tr_about_resources_email = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `E-posta`;
  }
);
const ja_about_resources_email = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `メール`;
  }
);
const ko_about_resources_email = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이메일`;
  }
);
const el_about_resources_email = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Email`;
  }
);
const id_about_resources_email = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Email`;
  }
);
const zh_hans1_about_resources_email = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `电子邮件`;
  }
);
const zh_hant1_about_resources_email = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `電子郵件`;
  }
);
const about_resources_email = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_resources_email", locale2);
  if (locale2 === "en") return en_about_resources_email();
  if (locale2 === "es") return es_about_resources_email();
  if (locale2 === "fr") return fr_about_resources_email();
  if (locale2 === "de") return de_about_resources_email();
  if (locale2 === "it") return it_about_resources_email();
  if (locale2 === "hr") return hr_about_resources_email();
  if (locale2 === "tr") return tr_about_resources_email();
  if (locale2 === "ja") return ja_about_resources_email();
  if (locale2 === "ko") return ko_about_resources_email();
  if (locale2 === "el") return el_about_resources_email();
  if (locale2 === "id") return id_about_resources_email();
  if (locale2 === "zh-Hans") return zh_hans1_about_resources_email();
  return zh_hant1_about_resources_email();
};
const en_about_donate_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Donate to FileTools`;
  }
);
const es_about_donate_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Donar a FileTools`;
  }
);
const fr_about_donate_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Faire un don à FileTools`;
  }
);
const de_about_donate_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `An FileTools spenden`;
  }
);
const it_about_donate_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Fai una donazione a FileTools`;
  }
);
const hr_about_donate_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Donirajte nam`;
  }
);
const tr_about_donate_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools'e bağış yapın`;
  }
);
const ja_about_donate_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileToolsを支援する`;
  }
);
const ko_about_donate_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools에 기부하기`;
  }
);
const el_about_donate_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Δωρεά στο FileTools`;
  }
);
const id_about_donate_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Donasi untuk FileTools`;
  }
);
const zh_hans1_about_donate_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `捐赠给 FileTools`;
  }
);
const zh_hant1_about_donate_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `捐贈給 FileTools`;
  }
);
const about_donate_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_donate_title", locale2);
  if (locale2 === "en") return en_about_donate_title();
  if (locale2 === "es") return es_about_donate_title();
  if (locale2 === "fr") return fr_about_donate_title();
  if (locale2 === "de") return de_about_donate_title();
  if (locale2 === "it") return it_about_donate_title();
  if (locale2 === "hr") return hr_about_donate_title();
  if (locale2 === "tr") return tr_about_donate_title();
  if (locale2 === "ja") return ja_about_donate_title();
  if (locale2 === "ko") return ko_about_donate_title();
  if (locale2 === "el") return el_about_donate_title();
  if (locale2 === "id") return id_about_donate_title();
  if (locale2 === "zh-Hans") return zh_hans1_about_donate_title();
  return zh_hant1_about_donate_title();
};
const en_about_donate_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `With your support, we can keep maintaining and improving FileTools.`;
  }
);
const es_about_donate_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Con tu apoyo, podemos seguir manteniendo y mejorando FileTools.`;
  }
);
const fr_about_donate_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Avec votre soutien, nous pouvons continuer à maintenir et à améliorer FileTools.`;
  }
);
const de_about_donate_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mit deiner Unterstützung können wir FileTools weiter pflegen und verbessern.`;
  }
);
const it_about_donate_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Con il tuo supporto, possiamo continuare a mantenere e migliorare FileTools.`;
  }
);
const hr_about_donate_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sa vašom podrškom mi možemo nastaviti održavati i poboljšavati FileTools.`;
  }
);
const tr_about_donate_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Desteğinizle FileTools'i çalıştırmaya ve geliştirmeye devam edebiliriz.`;
  }
);
const ja_about_donate_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `あなたの支援でFileToolsの維持と改善を続けられます。`;
  }
);
const ko_about_donate_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `여러분의 후원으로 FileTools를 지속적으로 유지하고 개발할 수 있습니다.`;
  }
);
const el_about_donate_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Με την υποστήριξή σας, μπορούμε να συνεχίσουμε να συντηρούμε και να βελτιώνουμε το FileTools.`;
  }
);
const id_about_donate_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dengan dukunganmu, kami dapat terus memelihara dan meningkatkan FileTools.`;
  }
);
const zh_hans1_about_donate_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `有了你的支持，我们可以继续维护和改进 FileTools。`;
  }
);
const zh_hant1_about_donate_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `有了你的支援，我們可以繼續維護和改進 FileTools。`;
  }
);
const about_donate_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_donate_description", locale2);
  if (locale2 === "en") return en_about_donate_description();
  if (locale2 === "es") return es_about_donate_description();
  if (locale2 === "fr") return fr_about_donate_description();
  if (locale2 === "de") return de_about_donate_description();
  if (locale2 === "it") return it_about_donate_description();
  if (locale2 === "hr") return hr_about_donate_description();
  if (locale2 === "tr") return tr_about_donate_description();
  if (locale2 === "ja") return ja_about_donate_description();
  if (locale2 === "ko") return ko_about_donate_description();
  if (locale2 === "el") return el_about_donate_description();
  if (locale2 === "id") return id_about_donate_description();
  if (locale2 === "zh-Hans") return zh_hans1_about_donate_description();
  return zh_hant1_about_donate_description();
};
const en_about_donate_one_time = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `One-time`;
  }
);
const es_about_donate_one_time = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Una sola vez`;
  }
);
const fr_about_donate_one_time = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Une fois`;
  }
);
const de_about_donate_one_time = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Einmalig`;
  }
);
const it_about_donate_one_time = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Una tantum`;
  }
);
const hr_about_donate_one_time = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Jednokratno`;
  }
);
const tr_about_donate_one_time = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tek seferlik`;
  }
);
const ja_about_donate_one_time = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `一度きり`;
  }
);
const ko_about_donate_one_time = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `일회성`;
  }
);
const el_about_donate_one_time = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Εφάπαξ`;
  }
);
const id_about_donate_one_time = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sekali`;
  }
);
const zh_hans1_about_donate_one_time = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `一次性`;
  }
);
const zh_hant1_about_donate_one_time = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `一次性`;
  }
);
const about_donate_one_time = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_donate_one_time", locale2);
  if (locale2 === "en") return en_about_donate_one_time();
  if (locale2 === "es") return es_about_donate_one_time();
  if (locale2 === "fr") return fr_about_donate_one_time();
  if (locale2 === "de") return de_about_donate_one_time();
  if (locale2 === "it") return it_about_donate_one_time();
  if (locale2 === "hr") return hr_about_donate_one_time();
  if (locale2 === "tr") return tr_about_donate_one_time();
  if (locale2 === "ja") return ja_about_donate_one_time();
  if (locale2 === "ko") return ko_about_donate_one_time();
  if (locale2 === "el") return el_about_donate_one_time();
  if (locale2 === "id") return id_about_donate_one_time();
  if (locale2 === "zh-Hans") return zh_hans1_about_donate_one_time();
  return zh_hant1_about_donate_one_time();
};
const en_about_donate_monthly = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Monthly`;
  }
);
const es_about_donate_monthly = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mensual`;
  }
);
const fr_about_donate_monthly = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mensuel`;
  }
);
const de_about_donate_monthly = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Monatlich`;
  }
);
const it_about_donate_monthly = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mensile`;
  }
);
const hr_about_donate_monthly = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mjesečno`;
  }
);
const tr_about_donate_monthly = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Aylık`;
  }
);
const ja_about_donate_monthly = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `毎月`;
  }
);
const ko_about_donate_monthly = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `매월`;
  }
);
const el_about_donate_monthly = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μηνιαία`;
  }
);
const id_about_donate_monthly = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bulanan`;
  }
);
const zh_hans1_about_donate_monthly = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `每月`;
  }
);
const zh_hant1_about_donate_monthly = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `每月`;
  }
);
const about_donate_monthly = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_donate_monthly", locale2);
  if (locale2 === "en") return en_about_donate_monthly();
  if (locale2 === "es") return es_about_donate_monthly();
  if (locale2 === "fr") return fr_about_donate_monthly();
  if (locale2 === "de") return de_about_donate_monthly();
  if (locale2 === "it") return it_about_donate_monthly();
  if (locale2 === "hr") return hr_about_donate_monthly();
  if (locale2 === "tr") return tr_about_donate_monthly();
  if (locale2 === "ja") return ja_about_donate_monthly();
  if (locale2 === "ko") return ko_about_donate_monthly();
  if (locale2 === "el") return el_about_donate_monthly();
  if (locale2 === "id") return id_about_donate_monthly();
  if (locale2 === "zh-Hans") return zh_hans1_about_donate_monthly();
  return zh_hant1_about_donate_monthly();
};
const en_about_donate_custom = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Custom`;
  }
);
const es_about_donate_custom = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Personalizado`;
  }
);
const fr_about_donate_custom = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Personnaliser`;
  }
);
const de_about_donate_custom = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Benutzerdefiniert`;
  }
);
const it_about_donate_custom = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Personalizzato`;
  }
);
const hr_about_donate_custom = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Prilagođeno`;
  }
);
const tr_about_donate_custom = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Özel`;
  }
);
const ja_about_donate_custom = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `カスタム`;
  }
);
const ko_about_donate_custom = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `사용자 지정`;
  }
);
const el_about_donate_custom = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Προσαρμοσμένη`;
  }
);
const id_about_donate_custom = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kustom`;
  }
);
const zh_hans1_about_donate_custom = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `自定义`;
  }
);
const zh_hant1_about_donate_custom = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `自訂`;
  }
);
const about_donate_custom = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_donate_custom", locale2);
  if (locale2 === "en") return en_about_donate_custom();
  if (locale2 === "es") return es_about_donate_custom();
  if (locale2 === "fr") return fr_about_donate_custom();
  if (locale2 === "de") return de_about_donate_custom();
  if (locale2 === "it") return it_about_donate_custom();
  if (locale2 === "hr") return hr_about_donate_custom();
  if (locale2 === "tr") return tr_about_donate_custom();
  if (locale2 === "ja") return ja_about_donate_custom();
  if (locale2 === "ko") return ko_about_donate_custom();
  if (locale2 === "el") return el_about_donate_custom();
  if (locale2 === "id") return id_about_donate_custom();
  if (locale2 === "zh-Hans") return zh_hans1_about_donate_custom();
  return zh_hant1_about_donate_custom();
};
const en_about_donate_pay_now = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pay now`;
  }
);
const es_about_donate_pay_now = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pagar ahora`;
  }
);
const fr_about_donate_pay_now = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Payer maintenant`;
  }
);
const de_about_donate_pay_now = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Jetzt bezahlen`;
  }
);
const it_about_donate_pay_now = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Paga ora`;
  }
);
const hr_about_donate_pay_now = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Plati sada`;
  }
);
const tr_about_donate_pay_now = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ödeme yap`;
  }
);
const ja_about_donate_pay_now = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `今すぐ支払う`;
  }
);
const ko_about_donate_pay_now = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `지금 결제하기`;
  }
);
const el_about_donate_pay_now = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Πληρωμή τώρα`;
  }
);
const id_about_donate_pay_now = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bayar sekarang`;
  }
);
const zh_hans1_about_donate_pay_now = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `立即支付`;
  }
);
const zh_hant1_about_donate_pay_now = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `立即付款`;
  }
);
const about_donate_pay_now = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_donate_pay_now", locale2);
  if (locale2 === "en") return en_about_donate_pay_now();
  if (locale2 === "es") return es_about_donate_pay_now();
  if (locale2 === "fr") return fr_about_donate_pay_now();
  if (locale2 === "de") return de_about_donate_pay_now();
  if (locale2 === "it") return it_about_donate_pay_now();
  if (locale2 === "hr") return hr_about_donate_pay_now();
  if (locale2 === "tr") return tr_about_donate_pay_now();
  if (locale2 === "ja") return ja_about_donate_pay_now();
  if (locale2 === "ko") return ko_about_donate_pay_now();
  if (locale2 === "el") return el_about_donate_pay_now();
  if (locale2 === "id") return id_about_donate_pay_now();
  if (locale2 === "zh-Hans") return zh_hans1_about_donate_pay_now();
  return zh_hant1_about_donate_pay_now();
};
const en_about_donate_donate_amount = (
  /** @type {(inputs: { amount: NonNullable<unknown> }) => string} */
  (i) => {
    return `Donate $${i.amount} USD`;
  }
);
const es_about_donate_donate_amount = (
  /** @type {(inputs: { amount: NonNullable<unknown> }) => string} */
  (i) => {
    return `Donar $${i.amount} USD`;
  }
);
const fr_about_donate_donate_amount = (
  /** @type {(inputs: { amount: NonNullable<unknown> }) => string} */
  (i) => {
    return `Faire un don de $${i.amount} USD`;
  }
);
const de_about_donate_donate_amount = (
  /** @type {(inputs: { amount: NonNullable<unknown> }) => string} */
  (i) => {
    return `$${i.amount} USD spenden`;
  }
);
const it_about_donate_donate_amount = (
  /** @type {(inputs: { amount: NonNullable<unknown> }) => string} */
  (i) => {
    return `Dona $${i.amount} USD`;
  }
);
const hr_about_donate_donate_amount = (
  /** @type {(inputs: { amount: NonNullable<unknown> }) => string} */
  (i) => {
    return `Doniraj $${i.amount} USD`;
  }
);
const tr_about_donate_donate_amount = (
  /** @type {(inputs: { amount: NonNullable<unknown> }) => string} */
  (i) => {
    return `$${i.amount} USD Bağış Yap`;
  }
);
const ja_about_donate_donate_amount = (
  /** @type {(inputs: { amount: NonNullable<unknown> }) => string} */
  (i) => {
    return `$${i.amount} USDを寄付`;
  }
);
const ko_about_donate_donate_amount = (
  /** @type {(inputs: { amount: NonNullable<unknown> }) => string} */
  (i) => {
    return `$${i.amount} USD 후원하기`;
  }
);
const el_about_donate_donate_amount = (
  /** @type {(inputs: { amount: NonNullable<unknown> }) => string} */
  (i) => {
    return `Δωρεά $${i.amount} USD`;
  }
);
const id_about_donate_donate_amount = (
  /** @type {(inputs: { amount: NonNullable<unknown> }) => string} */
  (i) => {
    return `Donasi $${i.amount} USD`;
  }
);
const zh_hans1_about_donate_donate_amount = (
  /** @type {(inputs: { amount: NonNullable<unknown> }) => string} */
  (i) => {
    return `捐赠 $${i.amount} 美元`;
  }
);
const zh_hant1_about_donate_donate_amount = (
  /** @type {(inputs: { amount: NonNullable<unknown> }) => string} */
  (i) => {
    return `捐贈 $${i.amount} 美元`;
  }
);
const about_donate_donate_amount = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_donate_donate_amount", locale2);
  if (locale2 === "en") return en_about_donate_donate_amount(inputs);
  if (locale2 === "es") return es_about_donate_donate_amount(inputs);
  if (locale2 === "fr") return fr_about_donate_donate_amount(inputs);
  if (locale2 === "de") return de_about_donate_donate_amount(inputs);
  if (locale2 === "it") return it_about_donate_donate_amount(inputs);
  if (locale2 === "hr") return hr_about_donate_donate_amount(inputs);
  if (locale2 === "tr") return tr_about_donate_donate_amount(inputs);
  if (locale2 === "ja") return ja_about_donate_donate_amount(inputs);
  if (locale2 === "ko") return ko_about_donate_donate_amount(inputs);
  if (locale2 === "el") return el_about_donate_donate_amount(inputs);
  if (locale2 === "id") return id_about_donate_donate_amount(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_about_donate_donate_amount(inputs);
  return zh_hant1_about_donate_donate_amount(inputs);
};
const en_about_donate_thank_you = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Thank you for your donation!`;
  }
);
const es_about_donate_thank_you = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `¡Gracias por tu donación!`;
  }
);
const fr_about_donate_thank_you = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Merci pour votre don!`;
  }
);
const de_about_donate_thank_you = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Vielen Dank für deine Spende!`;
  }
);
const it_about_donate_thank_you = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Grazie per la tua donazione!`;
  }
);
const hr_about_donate_thank_you = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Hvala Vam na Vašoj donaciji!!`;
  }
);
const tr_about_donate_thank_you = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bağışınız için teşekkür ederiz!`;
  }
);
const ja_about_donate_thank_you = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ご支援ありがとうございます！`;
  }
);
const ko_about_donate_thank_you = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `후원해주셔서 감사합니다!`;
  }
);
const el_about_donate_thank_you = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Σας ευχαριστούμε για τη δωρεά σας!`;
  }
);
const id_about_donate_thank_you = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Terima kasih atas donasimu!`;
  }
);
const zh_hans1_about_donate_thank_you = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `感谢你的捐赠！`;
  }
);
const zh_hant1_about_donate_thank_you = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `感謝你的捐贈！`;
  }
);
const about_donate_thank_you = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_donate_thank_you", locale2);
  if (locale2 === "en") return en_about_donate_thank_you();
  if (locale2 === "es") return es_about_donate_thank_you();
  if (locale2 === "fr") return fr_about_donate_thank_you();
  if (locale2 === "de") return de_about_donate_thank_you();
  if (locale2 === "it") return it_about_donate_thank_you();
  if (locale2 === "hr") return hr_about_donate_thank_you();
  if (locale2 === "tr") return tr_about_donate_thank_you();
  if (locale2 === "ja") return ja_about_donate_thank_you();
  if (locale2 === "ko") return ko_about_donate_thank_you();
  if (locale2 === "el") return el_about_donate_thank_you();
  if (locale2 === "id") return id_about_donate_thank_you();
  if (locale2 === "zh-Hans") return zh_hans1_about_donate_thank_you();
  return zh_hant1_about_donate_thank_you();
};
const en_about_donate_payment_failed = (
  /** @type {(inputs: { message: NonNullable<unknown>, period: NonNullable<unknown> }) => string} */
  (i) => {
    return `Payment failed: ${i.message}${i.period} You have not been charged.`;
  }
);
const es_about_donate_payment_failed = (
  /** @type {(inputs: { message: NonNullable<unknown>, period: NonNullable<unknown> }) => string} */
  (i) => {
    return `Pago fallido: ${i.message}${i.period} No se ha efectuado ningún cargo.`;
  }
);
const fr_about_donate_payment_failed = (
  /** @type {(inputs: { message: NonNullable<unknown>, period: NonNullable<unknown> }) => string} */
  (i) => {
    return `Paiement échoué: ${i.message}${i.period} Vous n'avez pas été facturé.`;
  }
);
const de_about_donate_payment_failed = (
  /** @type {(inputs: { message: NonNullable<unknown>, period: NonNullable<unknown> }) => string} */
  (i) => {
    return `Zahlung fehlgeschlagen: ${i.message}${i.period} Dir wurde nichts berechnet.`;
  }
);
const it_about_donate_payment_failed = (
  /** @type {(inputs: { message: NonNullable<unknown>, period: NonNullable<unknown> }) => string} */
  (i) => {
    return `Pagamento fallito: ${i.message}${i.period} Non ti è stato addebitato nulla.`;
  }
);
const hr_about_donate_payment_failed = (
  /** @type {(inputs: { message: NonNullable<unknown>, period: NonNullable<unknown> }) => string} */
  (i) => {
    return `Plaćanje neuspjelo: ${i.message}${i.period} Niste naplaćeni.`;
  }
);
const tr_about_donate_payment_failed = (
  /** @type {(inputs: { message: NonNullable<unknown>, period: NonNullable<unknown> }) => string} */
  (i) => {
    return `Ödeme başarısız: ${i.message}${i.period} Kartınızdan para çekilmedi.`;
  }
);
const ja_about_donate_payment_failed = (
  /** @type {(inputs: { message: NonNullable<unknown>, period: NonNullable<unknown> }) => string} */
  (i) => {
    return `支払いに失敗しました: ${i.message}${i.period} 請求は行われていません。`;
  }
);
const ko_about_donate_payment_failed = (
  /** @type {(inputs: { message: NonNullable<unknown>, period: NonNullable<unknown> }) => string} */
  (i) => {
    return `결제 실패: ${i.message}${i.period} 요금이 청구되지 않았습니다.`;
  }
);
const el_about_donate_payment_failed = (
  /** @type {(inputs: { message: NonNullable<unknown>, period: NonNullable<unknown> }) => string} */
  (i) => {
    return `Η πληρωμή απέτυχε: ${i.message}${i.period} Δεν χρεώθηκε ο λογαριασμός σας.`;
  }
);
const id_about_donate_payment_failed = (
  /** @type {(inputs: { message: NonNullable<unknown>, period: NonNullable<unknown> }) => string} */
  (i) => {
    return `Pembayaran gagal: ${i.message}${i.period} Kamu tidak dikenai biaya.`;
  }
);
const zh_hans1_about_donate_payment_failed = (
  /** @type {(inputs: { message: NonNullable<unknown>, period: NonNullable<unknown> }) => string} */
  (i) => {
    return `支付失败：${i.message}${i.period}你未被收费。`;
  }
);
const zh_hant1_about_donate_payment_failed = (
  /** @type {(inputs: { message: NonNullable<unknown>, period: NonNullable<unknown> }) => string} */
  (i) => {
    return `付款失敗：${i.message}${i.period}你未被收費。`;
  }
);
const about_donate_payment_failed = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_donate_payment_failed", locale2);
  if (locale2 === "en") return en_about_donate_payment_failed(inputs);
  if (locale2 === "es") return es_about_donate_payment_failed(inputs);
  if (locale2 === "fr") return fr_about_donate_payment_failed(inputs);
  if (locale2 === "de") return de_about_donate_payment_failed(inputs);
  if (locale2 === "it") return it_about_donate_payment_failed(inputs);
  if (locale2 === "hr") return hr_about_donate_payment_failed(inputs);
  if (locale2 === "tr") return tr_about_donate_payment_failed(inputs);
  if (locale2 === "ja") return ja_about_donate_payment_failed(inputs);
  if (locale2 === "ko") return ko_about_donate_payment_failed(inputs);
  if (locale2 === "el") return el_about_donate_payment_failed(inputs);
  if (locale2 === "id") return id_about_donate_payment_failed(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_about_donate_payment_failed(inputs);
  return zh_hant1_about_donate_payment_failed(inputs);
};
const en_about_donate_donation_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `An error occurred while processing your donation. Please try again later.`;
  }
);
const es_about_donate_donation_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ha ocurrido un error al procesar tu donación. Por favor, inténtalo de nuevo más tarde.`;
  }
);
const fr_about_donate_donation_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Une erreur s'est produite lors du traitement de votre don. Veuillez réessayer ultérieurement.`;
  }
);
const de_about_donate_donation_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bei der Verarbeitung deiner Spende ist ein Fehler aufgetreten. Bitte versuche es später erneut.`;
  }
);
const it_about_donate_donation_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Si è verificato un errore durante l'elaborazione della tua donazione. Riprova più tardi.`;
  }
);
const hr_about_donate_donation_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dogodila se pogreška pri obradi donacije. Molimo pokušajte kasnije.`;
  }
);
const tr_about_donate_donation_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bağışınız işlenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.`;
  }
);
const ja_about_donate_donation_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `寄付の処理中にエラーが発生しました。後でもう一度お試しください。`;
  }
);
const ko_about_donate_donation_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `결제 처리 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.`;
  }
);
const el_about_donate_donation_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Παρουσιάστηκε σφάλμα κατά την επεξεργασία της δωρεάς σας. Παρακαλώ δοκιμάστε ξανά αργότερα.`;
  }
);
const id_about_donate_donation_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Terjadi kesalahan saat memproses donasi. Coba lagi nanti.`;
  }
);
const zh_hans1_about_donate_donation_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `处理捐赠时出错。请稍后重试。`;
  }
);
const zh_hant1_about_donate_donation_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `處理捐贈時出錯。請稍後重試。`;
  }
);
const about_donate_donation_error = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_donate_donation_error", locale2);
  if (locale2 === "en") return en_about_donate_donation_error();
  if (locale2 === "es") return es_about_donate_donation_error();
  if (locale2 === "fr") return fr_about_donate_donation_error();
  if (locale2 === "de") return de_about_donate_donation_error();
  if (locale2 === "it") return it_about_donate_donation_error();
  if (locale2 === "hr") return hr_about_donate_donation_error();
  if (locale2 === "tr") return tr_about_donate_donation_error();
  if (locale2 === "ja") return ja_about_donate_donation_error();
  if (locale2 === "ko") return ko_about_donate_donation_error();
  if (locale2 === "el") return el_about_donate_donation_error();
  if (locale2 === "id") return id_about_donate_donation_error();
  if (locale2 === "zh-Hans") return zh_hans1_about_donate_donation_error();
  return zh_hant1_about_donate_donation_error();
};
const en_about_donate_payment_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Error fetching payment details. Please try again later.`;
  }
);
const es_about_donate_payment_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ha ocurrido un error al obtener los detalles del pago. Por favor, inténtalo de nuevo más tarde.`;
  }
);
const fr_about_donate_payment_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Erreur lors de la récupération des informations de paiement. Veuillez réessayer ultérieurement.`;
  }
);
const de_about_donate_payment_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Fehler beim Abrufen der Zahlungsdetails. Bitte versuche es später erneut.`;
  }
);
const it_about_donate_payment_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Errore nel recupero dei dettagli di pagamento. Riprova più tardi.`;
  }
);
const hr_about_donate_payment_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dogodila se pogreška pri prihvaćanju detalja o naplati. Molimo pokušajte kasnije.`;
  }
);
const tr_about_donate_payment_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ödeme bilgileri alınırken hata oluştu. Lütfen daha sonra tekrar deneyin.`;
  }
);
const ja_about_donate_payment_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `支払い情報の取得中にエラーが発生しました。後でもう一度お試しください。`;
  }
);
const ko_about_donate_payment_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `결제 세부정보를 가져오는 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.`;
  }
);
const el_about_donate_payment_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Σφάλμα κατά την ανάκτηση στοιχείων πληρωμής. Παρακαλώ δοκιμάστε ξανά αργότερα.`;
  }
);
const id_about_donate_payment_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kesalahan mengambil detail pembayaran. Coba lagi nanti.`;
  }
);
const zh_hans1_about_donate_payment_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `获取支付详情时出错。请稍后重试。`;
  }
);
const zh_hant1_about_donate_payment_error = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `取得付款詳情時出錯。請稍後重試。`;
  }
);
const about_donate_payment_error = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_donate_payment_error", locale2);
  if (locale2 === "en") return en_about_donate_payment_error();
  if (locale2 === "es") return es_about_donate_payment_error();
  if (locale2 === "fr") return fr_about_donate_payment_error();
  if (locale2 === "de") return de_about_donate_payment_error();
  if (locale2 === "it") return it_about_donate_payment_error();
  if (locale2 === "hr") return hr_about_donate_payment_error();
  if (locale2 === "tr") return tr_about_donate_payment_error();
  if (locale2 === "ja") return ja_about_donate_payment_error();
  if (locale2 === "ko") return ko_about_donate_payment_error();
  if (locale2 === "el") return el_about_donate_payment_error();
  if (locale2 === "id") return id_about_donate_payment_error();
  if (locale2 === "zh-Hans") return zh_hans1_about_donate_payment_error();
  return zh_hant1_about_donate_payment_error();
};
const en_about_donate_donation_notice_official = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Your donations here go to the official FileTools instance (filetools.app), and helps to support the development of the project.`;
  }
);
const es_about_donate_donation_notice_official = en_about_donate_donation_notice_official;
const fr_about_donate_donation_notice_official = en_about_donate_donation_notice_official;
const de_about_donate_donation_notice_official = en_about_donate_donation_notice_official;
const it_about_donate_donation_notice_official = en_about_donate_donation_notice_official;
const hr_about_donate_donation_notice_official = en_about_donate_donation_notice_official;
const tr_about_donate_donation_notice_official = en_about_donate_donation_notice_official;
const ja_about_donate_donation_notice_official = en_about_donate_donation_notice_official;
const ko_about_donate_donation_notice_official = en_about_donate_donation_notice_official;
const el_about_donate_donation_notice_official = en_about_donate_donation_notice_official;
const id_about_donate_donation_notice_official = en_about_donate_donation_notice_official;
const zh_hans1_about_donate_donation_notice_official = en_about_donate_donation_notice_official;
const zh_hant1_about_donate_donation_notice_official = en_about_donate_donation_notice_official;
const about_donate_donation_notice_official = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_donate_donation_notice_official", locale2);
  if (locale2 === "en") return en_about_donate_donation_notice_official();
  if (locale2 === "es") return es_about_donate_donation_notice_official();
  if (locale2 === "fr") return fr_about_donate_donation_notice_official();
  if (locale2 === "de") return de_about_donate_donation_notice_official();
  if (locale2 === "it") return it_about_donate_donation_notice_official();
  if (locale2 === "hr") return hr_about_donate_donation_notice_official();
  if (locale2 === "tr") return tr_about_donate_donation_notice_official();
  if (locale2 === "ja") return ja_about_donate_donation_notice_official();
  if (locale2 === "ko") return ko_about_donate_donation_notice_official();
  if (locale2 === "el") return el_about_donate_donation_notice_official();
  if (locale2 === "id") return id_about_donate_donation_notice_official();
  if (locale2 === "zh-Hans") return zh_hans1_about_donate_donation_notice_official();
  return zh_hant1_about_donate_donation_notice_official();
};
const en_about_donate_donation_notice_unofficial = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Your donations here go to the operator of this FileTools instance. If you wish to support the official FileTools developers, please visit [official_link]filetools.app[/official_link] instead.`;
  }
);
const es_about_donate_donation_notice_unofficial = en_about_donate_donation_notice_unofficial;
const fr_about_donate_donation_notice_unofficial = en_about_donate_donation_notice_unofficial;
const de_about_donate_donation_notice_unofficial = en_about_donate_donation_notice_unofficial;
const it_about_donate_donation_notice_unofficial = en_about_donate_donation_notice_unofficial;
const hr_about_donate_donation_notice_unofficial = en_about_donate_donation_notice_unofficial;
const tr_about_donate_donation_notice_unofficial = en_about_donate_donation_notice_unofficial;
const ja_about_donate_donation_notice_unofficial = en_about_donate_donation_notice_unofficial;
const ko_about_donate_donation_notice_unofficial = en_about_donate_donation_notice_unofficial;
const el_about_donate_donation_notice_unofficial = en_about_donate_donation_notice_unofficial;
const id_about_donate_donation_notice_unofficial = en_about_donate_donation_notice_unofficial;
const zh_hans1_about_donate_donation_notice_unofficial = en_about_donate_donation_notice_unofficial;
const zh_hant1_about_donate_donation_notice_unofficial = en_about_donate_donation_notice_unofficial;
const about_donate_donation_notice_unofficial = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_donate_donation_notice_unofficial", locale2);
  if (locale2 === "en") return en_about_donate_donation_notice_unofficial();
  if (locale2 === "es") return es_about_donate_donation_notice_unofficial();
  if (locale2 === "fr") return fr_about_donate_donation_notice_unofficial();
  if (locale2 === "de") return de_about_donate_donation_notice_unofficial();
  if (locale2 === "it") return it_about_donate_donation_notice_unofficial();
  if (locale2 === "hr") return hr_about_donate_donation_notice_unofficial();
  if (locale2 === "tr") return tr_about_donate_donation_notice_unofficial();
  if (locale2 === "ja") return ja_about_donate_donation_notice_unofficial();
  if (locale2 === "ko") return ko_about_donate_donation_notice_unofficial();
  if (locale2 === "el") return el_about_donate_donation_notice_unofficial();
  if (locale2 === "id") return id_about_donate_donation_notice_unofficial();
  if (locale2 === "zh-Hans") return zh_hans1_about_donate_donation_notice_unofficial();
  return zh_hant1_about_donate_donation_notice_unofficial();
};
const en_about_credits_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Credits`;
  }
);
const es_about_credits_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Créditos`;
  }
);
const fr_about_credits_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Credits`;
  }
);
const de_about_credits_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mitwirkende`;
  }
);
const it_about_credits_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Crediti`;
  }
);
const hr_about_credits_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Zasluge`;
  }
);
const tr_about_credits_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Katkıda bulunanlar`;
  }
);
const ja_about_credits_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `クレジット`;
  }
);
const ko_about_credits_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Credits`;
  }
);
const el_about_credits_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Τίτλοι`;
  }
);
const id_about_credits_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kredit`;
  }
);
const zh_hans1_about_credits_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `致谢`;
  }
);
const zh_hant1_about_credits_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `致謝`;
  }
);
const about_credits_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_title", locale2);
  if (locale2 === "en") return en_about_credits_title();
  if (locale2 === "es") return es_about_credits_title();
  if (locale2 === "fr") return fr_about_credits_title();
  if (locale2 === "de") return de_about_credits_title();
  if (locale2 === "it") return it_about_credits_title();
  if (locale2 === "hr") return hr_about_credits_title();
  if (locale2 === "tr") return tr_about_credits_title();
  if (locale2 === "ja") return ja_about_credits_title();
  if (locale2 === "ko") return ko_about_credits_title();
  if (locale2 === "el") return el_about_credits_title();
  if (locale2 === "id") return id_about_credits_title();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_title();
  return zh_hant1_about_credits_title();
};
const en_about_credits_contact_team = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `If you would like to contact the development team, please use the email found on the "Resources" card.`;
  }
);
const es_about_credits_contact_team = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Si te gustaría contactar al equipo de desarrollo, por favor usa el email que se encuentra en la tarjeta de "Recursos".`;
  }
);
const fr_about_credits_contact_team = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Si vous souhaitez contacter l'équipe de développement, veuillez utiliser le courriel figurant sur la carte "Resources".`;
  }
);
const de_about_credits_contact_team = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Wenn du das Entwicklungsteam kontaktieren möchtest, verwende bitte die E-Mail-Adresse auf der Karte „Ressourcen“.`;
  }
);
const it_about_credits_contact_team = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Se desideri contattare il team di sviluppo, utilizza l'e-mail che trovi sulla scheda "Risorse".`;
  }
);
const hr_about_credits_contact_team = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ako želite kontaktirati developere, molimo koristite email koji se nalazi u odjeljku "resursi".`;
  }
);
const tr_about_credits_contact_team = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Geliştirme ekibiyle iletişime geçmek isterseniz, "Bağlantılar" kısmında bulunan e-posta adresini kullanabilirsiniz.`;
  }
);
const ja_about_credits_contact_team = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `開発チームに連絡したい場合は、「リソース」カードに記載されたメールをご利用ください。`;
  }
);
const ko_about_credits_contact_team = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `개발팀에 연락하시려면 "Resources" 카드에 있는 이메일로 연락해 주세요.`;
  }
);
const el_about_credits_contact_team = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Εάν θέλετε να επικοινωνήσετε με την ομάδα ανάπτυξης, χρησιμοποιήστε το email που βρίσκεται στην κάρτα «Πόροι».`;
  }
);
const id_about_credits_contact_team = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Jika kamu ingin menghubungi tim pengembang, gunakan email yang ada di kartu "Sumber Daya".`;
  }
);
const zh_hans1_about_credits_contact_team = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `如果你想联系开发团队，请使用“资源”卡片上的电子邮件。`;
  }
);
const zh_hant1_about_credits_contact_team = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `如果你想聯絡開發團隊，請使用「資源」卡片上的電子郵件。`;
  }
);
const about_credits_contact_team = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_contact_team", locale2);
  if (locale2 === "en") return en_about_credits_contact_team();
  if (locale2 === "es") return es_about_credits_contact_team();
  if (locale2 === "fr") return fr_about_credits_contact_team();
  if (locale2 === "de") return de_about_credits_contact_team();
  if (locale2 === "it") return it_about_credits_contact_team();
  if (locale2 === "hr") return hr_about_credits_contact_team();
  if (locale2 === "tr") return tr_about_credits_contact_team();
  if (locale2 === "ja") return ja_about_credits_contact_team();
  if (locale2 === "ko") return ko_about_credits_contact_team();
  if (locale2 === "el") return el_about_credits_contact_team();
  if (locale2 === "id") return id_about_credits_contact_team();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_contact_team();
  return zh_hant1_about_credits_contact_team();
};
const en_about_credits_notable_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Notable contributors`;
  }
);
const es_about_credits_notable_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Colaboradores destacados`;
  }
);
const fr_about_credits_notable_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Contributeurs notables`;
  }
);
const de_about_credits_notable_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Besonders erwähnenswerte Mitwirkende`;
  }
);
const it_about_credits_notable_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Contributori di rilievo`;
  }
);
const hr_about_credits_notable_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Značajni suradnici`;
  }
);
const tr_about_credits_notable_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Önemli katılımcılar`;
  }
);
const ja_about_credits_notable_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `特筆すべき貢献者`;
  }
);
const ko_about_credits_notable_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `주요 기여자`;
  }
);
const el_about_credits_notable_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Αξιόλογοι συνεισφέροντες`;
  }
);
const id_about_credits_notable_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kontributor penting`;
  }
);
const zh_hans1_about_credits_notable_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `杰出贡献者`;
  }
);
const zh_hant1_about_credits_notable_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `傑出貢獻者`;
  }
);
const about_credits_notable_contributors = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_notable_contributors", locale2);
  if (locale2 === "en") return en_about_credits_notable_contributors();
  if (locale2 === "es") return es_about_credits_notable_contributors();
  if (locale2 === "fr") return fr_about_credits_notable_contributors();
  if (locale2 === "de") return de_about_credits_notable_contributors();
  if (locale2 === "it") return it_about_credits_notable_contributors();
  if (locale2 === "hr") return hr_about_credits_notable_contributors();
  if (locale2 === "tr") return tr_about_credits_notable_contributors();
  if (locale2 === "ja") return ja_about_credits_notable_contributors();
  if (locale2 === "ko") return ko_about_credits_notable_contributors();
  if (locale2 === "el") return el_about_credits_notable_contributors();
  if (locale2 === "id") return id_about_credits_notable_contributors();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_notable_contributors();
  return zh_hant1_about_credits_notable_contributors();
};
const en_about_credits_notable_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `We'd like to thank these people for their major contributions to FileTools.`;
  }
);
const es_about_credits_notable_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Queremos dar las gracias a las siguientes personas por sus importantes contribuciones a FileTools.`;
  }
);
const fr_about_credits_notable_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nous tenons à remercier ces personnes pour leurs contributions majeures à FileTools.`;
  }
);
const de_about_credits_notable_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Wir möchten diesen Personen für ihre wichtigen Beiträge zu FileTools danken.`;
  }
);
const it_about_credits_notable_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Vorremmo ringraziare queste persone per i loro importanti contributi a FileTools.`;
  }
);
const hr_about_credits_notable_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Želimo zahvaliti ovim ljudima za njihove ogromne doprinose FileToolsu.`;
  }
);
const tr_about_credits_notable_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools'e sağladıkları büyük katkılardan dolayı bu kişilere teşekkür ederiz.`;
  }
);
const ja_about_credits_notable_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileToolsに大きく貢献してくださった方々に感謝します。`;
  }
);
const ko_about_credits_notable_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools에 크게 기여해 주신 분들께 정말 감사드립니다.`;
  }
);
const el_about_credits_notable_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Θα θέλαμε να ευχαριστήσουμε αυτά τα άτομα για τις σημαντικές συνεισφορές τους στο FileTools.`;
  }
);
const id_about_credits_notable_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kami ingin berterima kasih kepada orang-orang ini atas kontribusi besar mereka untuk FileTools.`;
  }
);
const zh_hans1_about_credits_notable_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `我们要感谢这些人对 FileTools 的重大贡献。`;
  }
);
const zh_hant1_about_credits_notable_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `我們要感謝這些人對 FileTools 的重大貢獻。`;
  }
);
const about_credits_notable_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_notable_description", locale2);
  if (locale2 === "en") return en_about_credits_notable_description();
  if (locale2 === "es") return es_about_credits_notable_description();
  if (locale2 === "fr") return fr_about_credits_notable_description();
  if (locale2 === "de") return de_about_credits_notable_description();
  if (locale2 === "it") return it_about_credits_notable_description();
  if (locale2 === "hr") return hr_about_credits_notable_description();
  if (locale2 === "tr") return tr_about_credits_notable_description();
  if (locale2 === "ja") return ja_about_credits_notable_description();
  if (locale2 === "ko") return ko_about_credits_notable_description();
  if (locale2 === "el") return el_about_credits_notable_description();
  if (locale2 === "id") return id_about_credits_notable_description();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_notable_description();
  return zh_hant1_about_credits_notable_description();
};
const en_about_credits_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `GitHub contributors`;
  }
);
const es_about_credits_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Contribuidores de GitHub`;
  }
);
const fr_about_credits_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Les contributeurs de GitHub`;
  }
);
const de_about_credits_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `GitHub-Mitwirkende`;
  }
);
const it_about_credits_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Contributori GitHub`;
  }
);
const hr_about_credits_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `GitHub suradnici`;
  }
);
const tr_about_credits_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `GitHub katılımcıları`;
  }
);
const ja_about_credits_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `GitHubの貢献者`;
  }
);
const ko_about_credits_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `GitHub 기여자`;
  }
);
const el_about_credits_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Συνεισφέροντες στο GitHub`;
  }
);
const id_about_credits_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kontributor GitHub`;
  }
);
const zh_hans1_about_credits_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `GitHub 贡献者`;
  }
);
const zh_hant1_about_credits_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `GitHub 貢獻者`;
  }
);
const about_credits_github_contributors = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_github_contributors", locale2);
  if (locale2 === "en") return en_about_credits_github_contributors();
  if (locale2 === "es") return es_about_credits_github_contributors();
  if (locale2 === "fr") return fr_about_credits_github_contributors();
  if (locale2 === "de") return de_about_credits_github_contributors();
  if (locale2 === "it") return it_about_credits_github_contributors();
  if (locale2 === "hr") return hr_about_credits_github_contributors();
  if (locale2 === "tr") return tr_about_credits_github_contributors();
  if (locale2 === "ja") return ja_about_credits_github_contributors();
  if (locale2 === "ko") return ko_about_credits_github_contributors();
  if (locale2 === "el") return el_about_credits_github_contributors();
  if (locale2 === "id") return id_about_credits_github_contributors();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_github_contributors();
  return zh_hant1_about_credits_github_contributors();
};
const en_about_credits_github_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Big thanks to all these people for helping out! [github_link]Want to help too?[/github_link]`;
  }
);
const es_about_credits_github_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `¡Muchas gracias a todos los que han contribuido! [github_link]¿Quieres contribuir también?[/github_link]`;
  }
);
const fr_about_credits_github_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Un grand merci à toutes ces personnes pour leur aide ! [github_link]Vous voulez aussi aider ?[/github_link]`;
  }
);
const de_about_credits_github_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ein großes Dankeschön an all diese Leute für ihre Hilfe! [github_link]Möchtest du auch helfen?[/github_link]`;
  }
);
const it_about_credits_github_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Un grande grazie a tutte queste persone per aver dato una mano! [github_link]Vuoi aiutare anche tu?[/github_link]`;
  }
);
const hr_about_credits_github_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Velike zahvale svim ovim ljudima koji su nam pomogli! [github_link]Želiš nam i ti pomoći?[/github_link]`;
  }
);
const tr_about_credits_github_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Yardımcı olan herkese çok teşekkürler! [github_link]Sen de yardım etmek ister misin?[/github_link]`;
  }
);
const ja_about_credits_github_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `多くの方々に感謝します！[github_link]あなたも参加してみませんか？[/github_link]`;
  }
);
const ko_about_credits_github_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `도와주신 모든 분들께 진심으로 감사드립니다! [github_link]기여하기[/github_link]`;
  }
);
const el_about_credits_github_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μεγάλες ευχαριστίες σε όλα αυτά τα άτομα που βοήθησαν! [github_link]Θέλετε να βοηθήσετε κι εσείς;[/github_link]`;
  }
);
const id_about_credits_github_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `[jpegify_link]Terima kasih[/jpegify_link] banyak kepada semua orang yang telah membantu! [github_link]Ingin membantu juga?[/github_link]`;
  }
);
const zh_hans1_about_credits_github_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `非常感谢所有这些人的帮助！[github_link]也想帮忙吗？[/github_link]`;
  }
);
const zh_hant1_about_credits_github_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `非常感謝所有這些人的協助！[github_link]也想幫忙嗎？[/github_link]`;
  }
);
const about_credits_github_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_github_description", locale2);
  if (locale2 === "en") return en_about_credits_github_description();
  if (locale2 === "es") return es_about_credits_github_description();
  if (locale2 === "fr") return fr_about_credits_github_description();
  if (locale2 === "de") return de_about_credits_github_description();
  if (locale2 === "it") return it_about_credits_github_description();
  if (locale2 === "hr") return hr_about_credits_github_description();
  if (locale2 === "tr") return tr_about_credits_github_description();
  if (locale2 === "ja") return ja_about_credits_github_description();
  if (locale2 === "ko") return ko_about_credits_github_description();
  if (locale2 === "el") return el_about_credits_github_description();
  if (locale2 === "id") return id_about_credits_github_description();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_github_description();
  return zh_hant1_about_credits_github_description();
};
const en_about_credits_no_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Seems like no one has contributed yet... [contribute_link]be the first to contribute![/contribute_link]`;
  }
);
const es_about_credits_no_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Parece que nadie ha contribuido todavía... [contribute_link]¡Sé el primero en hacerlo![/contribute_link]`;
  }
);
const fr_about_credits_no_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Il semble que personne n'ait encore contribué... [contribute_link]soyez le premier à contribuer ![/contribute_link]`;
  }
);
const de_about_credits_no_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Scheint, als hätte noch niemand beigetragen... [contribute_link]sei der Erste, der beiträgt![/contribute_link]`;
  }
);
const it_about_credits_no_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sembra che nessuno abbia ancora contribuito... [contribute_link]sii il primo a contribuire![/contribute_link]`;
  }
);
const hr_about_credits_no_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Čini se kako nitko nije još doprinio... [contribute_link]budite prvi koji će doprinjeti![/contribute_link]`;
  }
);
const tr_about_credits_no_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Henüz kimse katkıda bulunmamış gibi görünüyor... [contribute_link]ilk katkıda bulunan sen ol![/contribute_link]`;
  }
);
const ja_about_credits_no_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `まだ誰も貢献していないようです… [contribute_link]最初の貢献者になりましょう！[/contribute_link]`;
  }
);
const ko_about_credits_no_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `아직 기여한 사람이 없는 것 같습니다... [contribute_link]첫 번째 기여자가 되어보세요![/contribute_link]`;
  }
);
const el_about_credits_no_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Φαίνεται ότι κανείς δεν έχει συνεισφέρει ακόμα... [contribute_link]γίνετε ο πρώτος που θα συνεισφέρει![/contribute_link]`;
  }
);
const id_about_credits_no_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sepertinya belum ada yang berkontribusi... [contribute_link]jadilah yang pertama berkontribusi![/contribute_link]`;
  }
);
const zh_hans1_about_credits_no_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `似乎还没有人贡献……[contribute_link]成为第一个贡献者！[/contribute_link]`;
  }
);
const zh_hant1_about_credits_no_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `似乎還沒有人貢獻……[contribute_link]成為第一個貢獻者！[/contribute_link]`;
  }
);
const about_credits_no_contributors = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_no_contributors", locale2);
  if (locale2 === "en") return en_about_credits_no_contributors();
  if (locale2 === "es") return es_about_credits_no_contributors();
  if (locale2 === "fr") return fr_about_credits_no_contributors();
  if (locale2 === "de") return de_about_credits_no_contributors();
  if (locale2 === "it") return it_about_credits_no_contributors();
  if (locale2 === "hr") return hr_about_credits_no_contributors();
  if (locale2 === "tr") return tr_about_credits_no_contributors();
  if (locale2 === "ja") return ja_about_credits_no_contributors();
  if (locale2 === "ko") return ko_about_credits_no_contributors();
  if (locale2 === "el") return el_about_credits_no_contributors();
  if (locale2 === "id") return id_about_credits_no_contributors();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_no_contributors();
  return zh_hant1_about_credits_no_contributors();
};
const en_about_credits_libraries = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Libraries`;
  }
);
const es_about_credits_libraries = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Librerías`;
  }
);
const fr_about_credits_libraries = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bibliothèques`;
  }
);
const de_about_credits_libraries = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bibliotheken`;
  }
);
const it_about_credits_libraries = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Librerie`;
  }
);
const hr_about_credits_libraries = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Biblioteke`;
  }
);
const tr_about_credits_libraries = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kütüphaneler`;
  }
);
const ja_about_credits_libraries = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ライブラリ`;
  }
);
const ko_about_credits_libraries = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `라이브러리들`;
  }
);
const el_about_credits_libraries = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Βιβλιοθήκες`;
  }
);
const id_about_credits_libraries = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pustaka`;
  }
);
const zh_hans1_about_credits_libraries = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `库`;
  }
);
const zh_hant1_about_credits_libraries = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `程式庫`;
  }
);
const about_credits_libraries = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_libraries", locale2);
  if (locale2 === "en") return en_about_credits_libraries();
  if (locale2 === "es") return es_about_credits_libraries();
  if (locale2 === "fr") return fr_about_credits_libraries();
  if (locale2 === "de") return de_about_credits_libraries();
  if (locale2 === "it") return it_about_credits_libraries();
  if (locale2 === "hr") return hr_about_credits_libraries();
  if (locale2 === "tr") return tr_about_credits_libraries();
  if (locale2 === "ja") return ja_about_credits_libraries();
  if (locale2 === "ko") return ko_about_credits_libraries();
  if (locale2 === "el") return el_about_credits_libraries();
  if (locale2 === "id") return id_about_credits_libraries();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_libraries();
  return zh_hant1_about_credits_libraries();
};
const en_about_credits_libraries_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `A big thanks to FFmpeg (audio, video), ImageMagick (images) and Pandoc (documents) for maintaining such excellent libraries for so many years. FileTools relies on them to provide you with your conversions.`;
  }
);
const es_about_credits_libraries_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Muchas gracias a FFmpeg (audio, vídeo), ImageMagick (imágenes) y Pandoc (documentos) por mantener librerías excelentes por tantos años. FileTools depende de ellas para proporcionar tus conversiones.`;
  }
);
const fr_about_credits_libraries_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `un grand merci à FFmpeg (audio, video), ImageMagick (images) et Pandoc (documents) pour avoir maintenu d'aussi excellentes bibliothèques pendant tant d'années, FileTools compte sur eux pour vous fournir vos conversions.`;
  }
);
const de_about_credits_libraries_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ein großes Dankeschön an FFmpeg (Audio, Video), ImageMagick (Bilder) und Pandoc (Dokumente) für die Pflege solch exzellenter Bibliotheken über so viele Jahre. FileTools verlässt sich auf sie, um dir deine Konvertierungen zu ermöglichen.`;
  }
);
const it_about_credits_libraries_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Un grande ringraziamento a FFmpeg (audio, video), ImageMagick (immagini) e Pandoc (documenti) per aver mantenuto librerie così eccellenti per così tanti anni. FileTools si affida a loro per fornirti le tue conversioni.`;
  }
);
const hr_about_credits_libraries_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Velike zahvale prema FFmpeg (audio, video), ImageMagick (slike) i Pandoc (dokumenti) što su održavali tako odlične biblioteke svih ovih godina. FileTools se oslanja na njih da bi Vam pružili pretvorbu.`;
  }
);
const tr_about_credits_libraries_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Bu mükemmel kütüphaneleri yıllardır geliştirdikleri için FFmpeg (ses, video), ImageMagick (görseller) ve Pandoc (belgeler)'a çok teşekkür ederiz. FileTools, dönüştürme işlemleri için bu kütüphaneleri kullanmaktadır.`;
  }
);
const ja_about_credits_libraries_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `長年にわたり優れたライブラリを提供してくれているFFmpeg（音声・動画）、ImageMagick（画像）、Pandoc（ドキュメント）に感謝します。FileToolsはこれらに依存して動作しています。`;
  }
);
const ko_about_credits_libraries_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `수년 동안 훌륭한 라이브러리를 유지해 주신 FFmpeg (오디오, 비디오), ImageMagick (이미지) 및 Pandoc (문서)에 진심으로 감사드립니다. FileTools는 위 라이브러리들을 사용하여 변환을 제공합니다.`;
  }
);
const el_about_credits_libraries_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Μεγάλες ευχαριστίες στα FFmpeg (ήχος, βίντεο), ImageMagick (εικόνες) και Pandoc (έγγραφα) που διατηρούν τέτοιες εξαιρετικές βιβλιοθήκες για τόσα χρόνια. Το FileTools βασίζεται σε αυτές για να σας παρέχει τις μετατροπές σας.`;
  }
);
const id_about_credits_libraries_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Terima kasih besar kepada FFmpeg (audio, video), ImageMagick (gambar), dan Pandoc (dokumen) atas pemeliharaannya selama bertahun-tahun. FileTools bergantung pada mereka untuk menyediakan konversi berkas.`;
  }
);
const zh_hans1_about_credits_libraries_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `非常感谢 FFmpeg（音频、视频）、ImageMagick（图片）和 Pandoc（文档）多年来维护如此出色的库。FileTools 依赖它们为你提供转换服务。`;
  }
);
const zh_hant1_about_credits_libraries_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `非常感謝 FFmpeg（音訊、影片）、ImageMagick（圖片）和 Pandoc（文件）多年來維護如此出色的程式庫。FileTools 依賴它們為你提供轉換服務。`;
  }
);
const about_credits_libraries_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_libraries_description", locale2);
  if (locale2 === "en") return en_about_credits_libraries_description();
  if (locale2 === "es") return es_about_credits_libraries_description();
  if (locale2 === "fr") return fr_about_credits_libraries_description();
  if (locale2 === "de") return de_about_credits_libraries_description();
  if (locale2 === "it") return it_about_credits_libraries_description();
  if (locale2 === "hr") return hr_about_credits_libraries_description();
  if (locale2 === "tr") return tr_about_credits_libraries_description();
  if (locale2 === "ja") return ja_about_credits_libraries_description();
  if (locale2 === "ko") return ko_about_credits_libraries_description();
  if (locale2 === "el") return el_about_credits_libraries_description();
  if (locale2 === "id") return id_about_credits_libraries_description();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_libraries_description();
  return zh_hant1_about_credits_libraries_description();
};
const en_about_credits_roles_lead_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Lead developer; conversion backend, UI implementation`;
  }
);
const es_about_credits_roles_lead_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Líder de desarrollo; implementación del backend de conversión e interfaz`;
  }
);
const fr_about_credits_roles_lead_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Lead developer; conversion backend, UI implementation`;
  }
);
const de_about_credits_roles_lead_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Hauptentwickler; Konvertierungs-Backend, UI-Implementierung`;
  }
);
const it_about_credits_roles_lead_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sviluppatore principale; backend di conversione, implementazione UI`;
  }
);
const hr_about_credits_roles_lead_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Glavni developer; Pretvarački backend, UI implementacija`;
  }
);
const tr_about_credits_roles_lead_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Lead developer; conversion backend, UI implementation`;
  }
);
const ja_about_credits_roles_lead_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `リード開発者；変換バックエンド、UI実装`;
  }
);
const ko_about_credits_roles_lead_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `총괄 개발자; 변환 백엔드, UI 구현`;
  }
);
const el_about_credits_roles_lead_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Επικεφαλής προγραμματιστής· backend μετατροπής, υλοποίηση UI`;
  }
);
const id_about_credits_roles_lead_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pengembang utama; backend konversi, implementasi UI`;
  }
);
const zh_hans1_about_credits_roles_lead_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `首席开发者；转换后端、UI 实现`;
  }
);
const zh_hant1_about_credits_roles_lead_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `首席開發者；轉換後端、UI 實作`;
  }
);
const about_credits_roles_lead_developer = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_roles_lead_developer", locale2);
  if (locale2 === "en") return en_about_credits_roles_lead_developer();
  if (locale2 === "es") return es_about_credits_roles_lead_developer();
  if (locale2 === "fr") return fr_about_credits_roles_lead_developer();
  if (locale2 === "de") return de_about_credits_roles_lead_developer();
  if (locale2 === "it") return it_about_credits_roles_lead_developer();
  if (locale2 === "hr") return hr_about_credits_roles_lead_developer();
  if (locale2 === "tr") return tr_about_credits_roles_lead_developer();
  if (locale2 === "ja") return ja_about_credits_roles_lead_developer();
  if (locale2 === "ko") return ko_about_credits_roles_lead_developer();
  if (locale2 === "el") return el_about_credits_roles_lead_developer();
  if (locale2 === "id") return id_about_credits_roles_lead_developer();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_roles_lead_developer();
  return zh_hant1_about_credits_roles_lead_developer();
};
const en_about_credits_roles_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Developer; UI implementation`;
  }
);
const es_about_credits_roles_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Desarrollador; implementación de la interfaz`;
  }
);
const fr_about_credits_roles_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Developer; UI implementation`;
  }
);
const de_about_credits_roles_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Entwickler; UI-Implementierung`;
  }
);
const it_about_credits_roles_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Sviluppatore; implementazione UI`;
  }
);
const hr_about_credits_roles_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Developer; UI implementacija`;
  }
);
const tr_about_credits_roles_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Developer; UI implementation`;
  }
);
const ja_about_credits_roles_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `開発者；UI実装`;
  }
);
const ko_about_credits_roles_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `개발자; UI 구현`;
  }
);
const el_about_credits_roles_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Προγραμματιστής· υλοποίηση UI`;
  }
);
const id_about_credits_roles_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pengembang; implementasi UI`;
  }
);
const zh_hans1_about_credits_roles_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `开发者；UI 实现`;
  }
);
const zh_hant1_about_credits_roles_developer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `開發者；UI 實作`;
  }
);
const about_credits_roles_developer = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_roles_developer", locale2);
  if (locale2 === "en") return en_about_credits_roles_developer();
  if (locale2 === "es") return es_about_credits_roles_developer();
  if (locale2 === "fr") return fr_about_credits_roles_developer();
  if (locale2 === "de") return de_about_credits_roles_developer();
  if (locale2 === "it") return it_about_credits_roles_developer();
  if (locale2 === "hr") return hr_about_credits_roles_developer();
  if (locale2 === "tr") return tr_about_credits_roles_developer();
  if (locale2 === "ja") return ja_about_credits_roles_developer();
  if (locale2 === "ko") return ko_about_credits_roles_developer();
  if (locale2 === "el") return el_about_credits_roles_developer();
  if (locale2 === "id") return id_about_credits_roles_developer();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_roles_developer();
  return zh_hant1_about_credits_roles_developer();
};
const en_about_credits_roles_designer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Designer; UX, branding, marketing`;
  }
);
const es_about_credits_roles_designer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Diseñador; UX, branding y marketing`;
  }
);
const fr_about_credits_roles_designer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Designer; UX, branding, marketing`;
  }
);
const de_about_credits_roles_designer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Designer; UX, Branding, Marketing`;
  }
);
const it_about_credits_roles_designer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Designer; UX, branding, marketing`;
  }
);
const hr_about_credits_roles_designer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Dizajner; UX, branding, marketing`;
  }
);
const tr_about_credits_roles_designer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Designer; UX, branding, marketing`;
  }
);
const ja_about_credits_roles_designer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `デザイナー；UX、ブランディング、マーケティング`;
  }
);
const ko_about_credits_roles_designer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `디자이너; UX, 브랜딩, 마케팅`;
  }
);
const el_about_credits_roles_designer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Σχεδιαστής· UX, branding, μάρκετινγκ`;
  }
);
const id_about_credits_roles_designer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Desainer; UX, branding, pemasaran`;
  }
);
const zh_hans1_about_credits_roles_designer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `设计师；用户体验、品牌、营销`;
  }
);
const zh_hant1_about_credits_roles_designer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `設計師；使用者體驗、品牌、行銷`;
  }
);
const about_credits_roles_designer = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_roles_designer", locale2);
  if (locale2 === "en") return en_about_credits_roles_designer();
  if (locale2 === "es") return es_about_credits_roles_designer();
  if (locale2 === "fr") return fr_about_credits_roles_designer();
  if (locale2 === "de") return de_about_credits_roles_designer();
  if (locale2 === "it") return it_about_credits_roles_designer();
  if (locale2 === "hr") return hr_about_credits_roles_designer();
  if (locale2 === "tr") return tr_about_credits_roles_designer();
  if (locale2 === "ja") return ja_about_credits_roles_designer();
  if (locale2 === "ko") return ko_about_credits_roles_designer();
  if (locale2 === "el") return el_about_credits_roles_designer();
  if (locale2 === "id") return id_about_credits_roles_designer();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_roles_designer();
  return zh_hant1_about_credits_roles_designer();
};
const en_about_credits_roles_docker_ci = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Maintaining Docker & CI support`;
  }
);
const es_about_credits_roles_docker_ci = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mantenimiento del soporte para Docker y CI`;
  }
);
const fr_about_credits_roles_docker_ci = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Maintaining Docker & CI support`;
  }
);
const de_about_credits_roles_docker_ci = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pflege von Docker & CI-Unterstützung`;
  }
);
const it_about_credits_roles_docker_ci = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Manutenzione del supporto Docker e CI`;
  }
);
const hr_about_credits_roles_docker_ci = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Održavanje Dockera i CI support`;
  }
);
const tr_about_credits_roles_docker_ci = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Maintaining Docker & CI support`;
  }
);
const ja_about_credits_roles_docker_ci = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `DockerとCIの保守担当`;
  }
);
const ko_about_credits_roles_docker_ci = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Docker 및 CI 지원 유지`;
  }
);
const el_about_credits_roles_docker_ci = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Συντήρηση υποστήριξης Docker & CI`;
  }
);
const id_about_credits_roles_docker_ci = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pemeliharaan Docker & CI`;
  }
);
const zh_hans1_about_credits_roles_docker_ci = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `维护 Docker 和 CI 支持`;
  }
);
const zh_hant1_about_credits_roles_docker_ci = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `維護 Docker 和 CI 支援`;
  }
);
const about_credits_roles_docker_ci = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_roles_docker_ci", locale2);
  if (locale2 === "en") return en_about_credits_roles_docker_ci();
  if (locale2 === "es") return es_about_credits_roles_docker_ci();
  if (locale2 === "fr") return fr_about_credits_roles_docker_ci();
  if (locale2 === "de") return de_about_credits_roles_docker_ci();
  if (locale2 === "it") return it_about_credits_roles_docker_ci();
  if (locale2 === "hr") return hr_about_credits_roles_docker_ci();
  if (locale2 === "tr") return tr_about_credits_roles_docker_ci();
  if (locale2 === "ja") return ja_about_credits_roles_docker_ci();
  if (locale2 === "ko") return ko_about_credits_roles_docker_ci();
  if (locale2 === "el") return el_about_credits_roles_docker_ci();
  if (locale2 === "id") return id_about_credits_roles_docker_ci();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_roles_docker_ci();
  return zh_hant1_about_credits_roles_docker_ci();
};
const en_about_credits_roles_former_cofounder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Former co-founder & designer`;
  }
);
const es_about_credits_roles_former_cofounder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Excofundador; diseñador`;
  }
);
const fr_about_credits_roles_former_cofounder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Former co-founder & designer`;
  }
);
const de_about_credits_roles_former_cofounder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ehemaliger Mitbegründer & Designer`;
  }
);
const it_about_credits_roles_former_cofounder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ex co-fondatore e designer`;
  }
);
const hr_about_credits_roles_former_cofounder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Prijašnji suosnivač i dizajner`;
  }
);
const tr_about_credits_roles_former_cofounder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Former co-founder & designer`;
  }
);
const ja_about_credits_roles_former_cofounder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `元共同創設者・デザイナー`;
  }
);
const ko_about_credits_roles_former_cofounder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `전 공동 창립자 및 디자이너`;
  }
);
const el_about_credits_roles_former_cofounder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Πρώην συνιδρυτής & σχεδιαστής`;
  }
);
const id_about_credits_roles_former_cofounder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Mantan co-founder & desainer`;
  }
);
const zh_hans1_about_credits_roles_former_cofounder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `前联合创始人和设计师`;
  }
);
const zh_hant1_about_credits_roles_former_cofounder = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `前共同創辦人和設計師`;
  }
);
const about_credits_roles_former_cofounder = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_credits_roles_former_cofounder", locale2);
  if (locale2 === "en") return en_about_credits_roles_former_cofounder();
  if (locale2 === "es") return es_about_credits_roles_former_cofounder();
  if (locale2 === "fr") return fr_about_credits_roles_former_cofounder();
  if (locale2 === "de") return de_about_credits_roles_former_cofounder();
  if (locale2 === "it") return it_about_credits_roles_former_cofounder();
  if (locale2 === "hr") return hr_about_credits_roles_former_cofounder();
  if (locale2 === "tr") return tr_about_credits_roles_former_cofounder();
  if (locale2 === "ja") return ja_about_credits_roles_former_cofounder();
  if (locale2 === "ko") return ko_about_credits_roles_former_cofounder();
  if (locale2 === "el") return el_about_credits_roles_former_cofounder();
  if (locale2 === "id") return id_about_credits_roles_former_cofounder();
  if (locale2 === "zh-Hans") return zh_hans1_about_credits_roles_former_cofounder();
  return zh_hant1_about_credits_roles_former_cofounder();
};
const en_about_errors_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Error fetching GitHub contributors`;
  }
);
const es_about_errors_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ocurrió un error mientras se obtenían los contribuidores de GitHub.`;
  }
);
const fr_about_errors_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Erreur lors de la récupération des contributeurs GitHub`;
  }
);
const de_about_errors_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Fehler beim Abrufen der GitHub-Mitwirkenden`;
  }
);
const it_about_errors_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Errore nel recupero dei contributori GitHub`;
  }
);
const hr_about_errors_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pogreška pri prikupljanju GitHub suradnika`;
  }
);
const tr_about_errors_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `GitHub katılımcılarını yüklerken hata oluştu`;
  }
);
const ja_about_errors_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `GitHub貢献者の取得エラー`;
  }
);
const ko_about_errors_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Error, Github 기여자 불러오기 실패`;
  }
);
const el_about_errors_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Σφάλμα κατά την ανάκτηση συνεισφερόντων του GitHub`;
  }
);
const id_about_errors_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kesalahan mengambil kontributor GitHub`;
  }
);
const zh_hans1_about_errors_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `获取 GitHub 贡献者时出错`;
  }
);
const zh_hant1_about_errors_github_contributors = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `取得 GitHub 貢獻者時出錯`;
  }
);
const about_errors_github_contributors = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("about_errors_github_contributors", locale2);
  if (locale2 === "en") return en_about_errors_github_contributors();
  if (locale2 === "es") return es_about_errors_github_contributors();
  if (locale2 === "fr") return fr_about_errors_github_contributors();
  if (locale2 === "de") return de_about_errors_github_contributors();
  if (locale2 === "it") return it_about_errors_github_contributors();
  if (locale2 === "hr") return hr_about_errors_github_contributors();
  if (locale2 === "tr") return tr_about_errors_github_contributors();
  if (locale2 === "ja") return ja_about_errors_github_contributors();
  if (locale2 === "ko") return ko_about_errors_github_contributors();
  if (locale2 === "el") return el_about_errors_github_contributors();
  if (locale2 === "id") return id_about_errors_github_contributors();
  if (locale2 === "zh-Hans") return zh_hans1_about_errors_github_contributors();
  return zh_hant1_about_errors_github_contributors();
};
const en_workers_errors_general = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Error converting ${i.file}: ${i.message}`;
  }
);
const es_workers_errors_general = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Ocurrió un error mientras se convertía ${i.file}: ${i.message}`;
  }
);
const fr_workers_errors_general = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Erreur de conversion${i.file}: ${i.message}`;
  }
);
const de_workers_errors_general = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Fehler beim Konvertieren von ${i.file}: ${i.message}`;
  }
);
const it_workers_errors_general = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Errore durante la conversione di ${i.file}: ${i.message}`;
  }
);
const hr_workers_errors_general = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Pogreška pri pretvaranju ${i.file}: ${i.message}`;
  }
);
const tr_workers_errors_general = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.file} dönüştürülürken hata oluştu: ${i.message}`;
  }
);
const ja_workers_errors_general = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.file}の変換エラー：${i.message}`;
  }
);
const ko_workers_errors_general = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.file}파일을 변환하는데 오류 발생: ${i.message}`;
  }
);
const el_workers_errors_general = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Σφάλμα κατά τη μετατροπή του ${i.file}: ${i.message}`;
  }
);
const id_workers_errors_general = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Kesalahan mengonversi ${i.file}: ${i.message}`;
  }
);
const zh_hans1_workers_errors_general = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `转换 ${i.file} 时出错：${i.message}`;
  }
);
const zh_hant1_workers_errors_general = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `轉換 ${i.file} 時出錯：${i.message}`;
  }
);
const workers_errors_general = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("workers_errors_general", locale2);
  if (locale2 === "en") return en_workers_errors_general(inputs);
  if (locale2 === "es") return es_workers_errors_general(inputs);
  if (locale2 === "fr") return fr_workers_errors_general(inputs);
  if (locale2 === "de") return de_workers_errors_general(inputs);
  if (locale2 === "it") return it_workers_errors_general(inputs);
  if (locale2 === "hr") return hr_workers_errors_general(inputs);
  if (locale2 === "tr") return tr_workers_errors_general(inputs);
  if (locale2 === "ja") return ja_workers_errors_general(inputs);
  if (locale2 === "ko") return ko_workers_errors_general(inputs);
  if (locale2 === "el") return el_workers_errors_general(inputs);
  if (locale2 === "id") return id_workers_errors_general(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_workers_errors_general(inputs);
  return zh_hant1_workers_errors_general(inputs);
};
const en_workers_errors_cancel = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Error canceling conversion for ${i.file}: ${i.message}`;
  }
);
const es_workers_errors_cancel = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Error al cancelar la conversión para ${i.file}: ${i.message}`;
  }
);
const fr_workers_errors_cancel = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Erreur lors de l'annulation de la conversion pour ${i.file}: ${i.message}`;
  }
);
const de_workers_errors_cancel = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Fehler beim Abbrechen der Konvertierung für ${i.file}: ${i.message}`;
  }
);
const it_workers_errors_cancel = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Errore durante l'annullamento della conversione per ${i.file}: ${i.message}`;
  }
);
const tr_workers_errors_cancel = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.file} için dönüştürme işlemi iptal edilirken hata oluştu: ${i.message}`;
  }
);
const ja_workers_errors_cancel = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.file}の変換キャンセルエラー：${i.message}`;
  }
);
const ko_workers_errors_cancel = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `${i.file}파일 변환 취소 중 오류 발생: ${i.message}`;
  }
);
const el_workers_errors_cancel = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Σφάλμα κατά την ακύρωση της μετατροπής για το ${i.file}: ${i.message}`;
  }
);
const id_workers_errors_cancel = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `Kesalahan membatalkan konversi untuk ${i.file}: ${i.message}`;
  }
);
const zh_hans1_workers_errors_cancel = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `取消转换 ${i.file} 时出错：${i.message}`;
  }
);
const zh_hant1_workers_errors_cancel = (
  /** @type {(inputs: { file: NonNullable<unknown>, message: NonNullable<unknown> }) => string} */
  (i) => {
    return `取消轉換 ${i.file} 時出錯：${i.message}`;
  }
);
const hr_workers_errors_cancel = en_workers_errors_cancel;
const workers_errors_cancel = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("workers_errors_cancel", locale2);
  if (locale2 === "en") return en_workers_errors_cancel(inputs);
  if (locale2 === "es") return es_workers_errors_cancel(inputs);
  if (locale2 === "fr") return fr_workers_errors_cancel(inputs);
  if (locale2 === "de") return de_workers_errors_cancel(inputs);
  if (locale2 === "it") return it_workers_errors_cancel(inputs);
  if (locale2 === "hr") return hr_workers_errors_cancel(inputs);
  if (locale2 === "tr") return tr_workers_errors_cancel(inputs);
  if (locale2 === "ja") return ja_workers_errors_cancel(inputs);
  if (locale2 === "ko") return ko_workers_errors_cancel(inputs);
  if (locale2 === "el") return el_workers_errors_cancel(inputs);
  if (locale2 === "id") return id_workers_errors_cancel(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_workers_errors_cancel(inputs);
  return zh_hant1_workers_errors_cancel(inputs);
};
const en_workers_errors_magick = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Error in Magick worker, image conversion may not work as expected.`;
  }
);
const es_workers_errors_magick = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ocurrió un error en el módulo de Magick, la conversión de imágenes puede que no funcione correctamente.`;
  }
);
const fr_workers_errors_magick = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Erreur depuis Magick Worker, la conversion d'image peut ne pas fonctionner comme prévu.`;
  }
);
const de_workers_errors_magick = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Fehler im Magick-Worker, die Bildkonvertierung funktioniert möglicherweise nicht wie erwartet.`;
  }
);
const it_workers_errors_magick = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Errore nel *worker* Magick, la conversione delle immagini potrebbe non funzionare come previsto.`;
  }
);
const hr_workers_errors_magick = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pogreška sa Magick radnikom, pretvorba slike možda neće raditi kao očekivano.`;
  }
);
const tr_workers_errors_magick = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Magick işlemi sırasında hata oluştu, görsel dönüştürme işlemi beklendiği gibi çalışmayabilir.`;
  }
);
const ja_workers_errors_magick = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Magickワーカーでエラーが発生しました。画像変換が正常に動作しない可能性があります。`;
  }
);
const ko_workers_errors_magick = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Magick 작업에서 오류 발생, 이미지 변환이 예상대로 작동하지 않을 수 있습니다.`;
  }
);
const el_workers_errors_magick = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Σφάλμα στο worker του Magick, η μετατροπή εικόνων μπορεί να μην λειτουργεί όπως αναμένεται.`;
  }
);
const id_workers_errors_magick = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kesalahan di worker Magick, konversi gambar mungkin tidak berfungsi dengan benar.`;
  }
);
const zh_hans1_workers_errors_magick = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Magick worker 出错，图片转换可能无法正常工作。`;
  }
);
const zh_hant1_workers_errors_magick = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Magick worker 出錯，圖片轉換可能無法正常運作。`;
  }
);
const workers_errors_magick = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("workers_errors_magick", locale2);
  if (locale2 === "en") return en_workers_errors_magick();
  if (locale2 === "es") return es_workers_errors_magick();
  if (locale2 === "fr") return fr_workers_errors_magick();
  if (locale2 === "de") return de_workers_errors_magick();
  if (locale2 === "it") return it_workers_errors_magick();
  if (locale2 === "hr") return hr_workers_errors_magick();
  if (locale2 === "tr") return tr_workers_errors_magick();
  if (locale2 === "ja") return ja_workers_errors_magick();
  if (locale2 === "ko") return ko_workers_errors_magick();
  if (locale2 === "el") return el_workers_errors_magick();
  if (locale2 === "id") return id_workers_errors_magick();
  if (locale2 === "zh-Hans") return zh_hans1_workers_errors_magick();
  return zh_hant1_workers_errors_magick();
};
const en_workers_errors_ffmpeg = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Error loading FFmpeg, some features may not work as expected.`;
  }
);
const es_workers_errors_ffmpeg = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `No se pudo cargar FFmpeg, algunas funciones podrían no funcionar.`;
  }
);
const fr_workers_errors_ffmpeg = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Erreur lors du chargement de ffmpeg, certaines fonctionnalités peuvent ne pas fonctionner.`;
  }
);
const de_workers_errors_ffmpeg = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Fehler beim Laden von ffmpeg, einige Funktionen sind möglicherweise nicht verfügbar.`;
  }
);
const it_workers_errors_ffmpeg = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Errore durante il caricamento di ffmpeg, alcune funzionalità potrebbero non funzionare.`;
  }
);
const hr_workers_errors_ffmpeg = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Greška pri učitavanju ffmpeg, neke značajke možda neće raditi.`;
  }
);
const tr_workers_errors_ffmpeg = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ffmpeg yüklenirken hata oluştu, bazı özellikler çalışmayabilir.`;
  }
);
const ja_workers_errors_ffmpeg = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `ffmpegの読み込みエラー。一部の機能が動作しない可能性があります。`;
  }
);
const ko_workers_errors_ffmpeg = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FFmpeg 로드 중 오류 발생, 일부 기능이 예상대로 작동하지 않을 수 있습니다.`;
  }
);
const el_workers_errors_ffmpeg = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Σφάλμα κατά τη φόρτωση του ffmpeg, ορισμένες λειτουργίες μπορεί να μην λειτουργούν.`;
  }
);
const id_workers_errors_ffmpeg = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kesalahan memuat ffmpeg, beberapa fitur mungkin tidak berfungsi.`;
  }
);
const zh_hans1_workers_errors_ffmpeg = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `加载 ffmpeg 时出错，某些功能可能无法工作。`;
  }
);
const zh_hant1_workers_errors_ffmpeg = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `載入 ffmpeg 時出錯，某些功能可能無法運作。`;
  }
);
const workers_errors_ffmpeg = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("workers_errors_ffmpeg", locale2);
  if (locale2 === "en") return en_workers_errors_ffmpeg();
  if (locale2 === "es") return es_workers_errors_ffmpeg();
  if (locale2 === "fr") return fr_workers_errors_ffmpeg();
  if (locale2 === "de") return de_workers_errors_ffmpeg();
  if (locale2 === "it") return it_workers_errors_ffmpeg();
  if (locale2 === "hr") return hr_workers_errors_ffmpeg();
  if (locale2 === "tr") return tr_workers_errors_ffmpeg();
  if (locale2 === "ja") return ja_workers_errors_ffmpeg();
  if (locale2 === "ko") return ko_workers_errors_ffmpeg();
  if (locale2 === "el") return el_workers_errors_ffmpeg();
  if (locale2 === "id") return id_workers_errors_ffmpeg();
  if (locale2 === "zh-Hans") return zh_hans1_workers_errors_ffmpeg();
  return zh_hant1_workers_errors_ffmpeg();
};
const en_workers_errors_pandoc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Error loading Pandoc worker, document conversion may not work as expected.`;
  }
);
const ko_workers_errors_pandoc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Pandoc 작업 로드 중 오류 발생, 문서 변환이 예상대로 작동하지 않을 수 있습니다.`;
  }
);
const zh_hans1_workers_errors_pandoc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `加载 Pandoc worker 时出错，文档转换可能无法正常工作。`;
  }
);
const zh_hant1_workers_errors_pandoc = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `載入 Pandoc worker 時出錯，文件轉換可能無法正常運作。`;
  }
);
const es_workers_errors_pandoc = en_workers_errors_pandoc;
const fr_workers_errors_pandoc = en_workers_errors_pandoc;
const de_workers_errors_pandoc = en_workers_errors_pandoc;
const it_workers_errors_pandoc = en_workers_errors_pandoc;
const hr_workers_errors_pandoc = en_workers_errors_pandoc;
const tr_workers_errors_pandoc = en_workers_errors_pandoc;
const ja_workers_errors_pandoc = en_workers_errors_pandoc;
const el_workers_errors_pandoc = en_workers_errors_pandoc;
const id_workers_errors_pandoc = en_workers_errors_pandoc;
const workers_errors_pandoc = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("workers_errors_pandoc", locale2);
  if (locale2 === "en") return en_workers_errors_pandoc();
  if (locale2 === "es") return es_workers_errors_pandoc();
  if (locale2 === "fr") return fr_workers_errors_pandoc();
  if (locale2 === "de") return de_workers_errors_pandoc();
  if (locale2 === "it") return it_workers_errors_pandoc();
  if (locale2 === "hr") return hr_workers_errors_pandoc();
  if (locale2 === "tr") return tr_workers_errors_pandoc();
  if (locale2 === "ja") return ja_workers_errors_pandoc();
  if (locale2 === "ko") return ko_workers_errors_pandoc();
  if (locale2 === "el") return el_workers_errors_pandoc();
  if (locale2 === "id") return id_workers_errors_pandoc();
  if (locale2 === "zh-Hans") return zh_hans1_workers_errors_pandoc();
  return zh_hant1_workers_errors_pandoc();
};
const en_workers_errors_no_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `No audio stream found.`;
  }
);
const es_workers_errors_no_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `No se encontró una pista de audio.`;
  }
);
const fr_workers_errors_no_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Aucun flux audio détécté.`;
  }
);
const de_workers_errors_no_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Kein Audiostream gefunden.`;
  }
);
const it_workers_errors_no_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nessuno *stream* audio trovato.`;
  }
);
const hr_workers_errors_no_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Nije pronađen audio.`;
  }
);
const tr_workers_errors_no_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Ses akışı bulunamadı.`;
  }
);
const ja_workers_errors_no_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `音声ストリームが見つかりません。`;
  }
);
const ko_workers_errors_no_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `오디오 스트림을 찾을 수 없습니다.`;
  }
);
const el_workers_errors_no_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Δεν βρέθηκε ροή ήχου.`;
  }
);
const id_workers_errors_no_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Tidak ditemukan aliran audio.`;
  }
);
const zh_hans1_workers_errors_no_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未找到音频流。`;
  }
);
const zh_hant1_workers_errors_no_audio = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `未找到音訊串流。`;
  }
);
const workers_errors_no_audio = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("workers_errors_no_audio", locale2);
  if (locale2 === "en") return en_workers_errors_no_audio();
  if (locale2 === "es") return es_workers_errors_no_audio();
  if (locale2 === "fr") return fr_workers_errors_no_audio();
  if (locale2 === "de") return de_workers_errors_no_audio();
  if (locale2 === "it") return it_workers_errors_no_audio();
  if (locale2 === "hr") return hr_workers_errors_no_audio();
  if (locale2 === "tr") return tr_workers_errors_no_audio();
  if (locale2 === "ja") return ja_workers_errors_no_audio();
  if (locale2 === "ko") return ko_workers_errors_no_audio();
  if (locale2 === "el") return el_workers_errors_no_audio();
  if (locale2 === "id") return id_workers_errors_no_audio();
  if (locale2 === "zh-Hans") return zh_hans1_workers_errors_no_audio();
  return zh_hant1_workers_errors_no_audio();
};
const en_workers_errors_invalid_rate = (
  /** @type {(inputs: { rate: NonNullable<unknown> }) => string} */
  (i) => {
    return `Invalid sample rate specified: ${i.rate}Hz`;
  }
);
const es_workers_errors_invalid_rate = (
  /** @type {(inputs: { rate: NonNullable<unknown> }) => string} */
  (i) => {
    return `La tasa de muestreo especificada no es válida: ${i.rate}Hz`;
  }
);
const fr_workers_errors_invalid_rate = (
  /** @type {(inputs: { rate: NonNullable<unknown> }) => string} */
  (i) => {
    return `Taux d'échantillonnage spécifié non valide: ${i.rate}Hz`;
  }
);
const de_workers_errors_invalid_rate = (
  /** @type {(inputs: { rate: NonNullable<unknown> }) => string} */
  (i) => {
    return `Ungültige Abtastrate angegeben: ${i.rate}Hz`;
  }
);
const it_workers_errors_invalid_rate = (
  /** @type {(inputs: { rate: NonNullable<unknown> }) => string} */
  (i) => {
    return `Frequenza di campionamento specificata non valida: ${i.rate}Hz`;
  }
);
const hr_workers_errors_invalid_rate = (
  /** @type {(inputs: { rate: NonNullable<unknown> }) => string} */
  (i) => {
    return `Upisan nevažeći sample rate: ${i.rate}Hz!`;
  }
);
const tr_workers_errors_invalid_rate = (
  /** @type {(inputs: { rate: NonNullable<unknown> }) => string} */
  (i) => {
    return `Geçersiz örnekleme hızı: ${i.rate}Hz`;
  }
);
const ja_workers_errors_invalid_rate = (
  /** @type {(inputs: { rate: NonNullable<unknown> }) => string} */
  (i) => {
    return `無効なサンプリングレートが指定されました: ${i.rate}Hz`;
  }
);
const ko_workers_errors_invalid_rate = (
  /** @type {(inputs: { rate: NonNullable<unknown> }) => string} */
  (i) => {
    return `지정된 샘플 레이트가 유효하지 않습니다: ${i.rate}Hz`;
  }
);
const el_workers_errors_invalid_rate = (
  /** @type {(inputs: { rate: NonNullable<unknown> }) => string} */
  (i) => {
    return `Καθορίστηκε μη έγκυρος ρυθμός δειγματοληψίας: ${i.rate}Hz`;
  }
);
const id_workers_errors_invalid_rate = (
  /** @type {(inputs: { rate: NonNullable<unknown> }) => string} */
  (i) => {
    return `Laju sampel tidak valid: ${i.rate}Hz`;
  }
);
const zh_hans1_workers_errors_invalid_rate = (
  /** @type {(inputs: { rate: NonNullable<unknown> }) => string} */
  (i) => {
    return `指定的采样率无效：${i.rate}Hz`;
  }
);
const zh_hant1_workers_errors_invalid_rate = (
  /** @type {(inputs: { rate: NonNullable<unknown> }) => string} */
  (i) => {
    return `指定的取樣率無效：${i.rate}Hz`;
  }
);
const workers_errors_invalid_rate = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("workers_errors_invalid_rate", locale2);
  if (locale2 === "en") return en_workers_errors_invalid_rate(inputs);
  if (locale2 === "es") return es_workers_errors_invalid_rate(inputs);
  if (locale2 === "fr") return fr_workers_errors_invalid_rate(inputs);
  if (locale2 === "de") return de_workers_errors_invalid_rate(inputs);
  if (locale2 === "it") return it_workers_errors_invalid_rate(inputs);
  if (locale2 === "hr") return hr_workers_errors_invalid_rate(inputs);
  if (locale2 === "tr") return tr_workers_errors_invalid_rate(inputs);
  if (locale2 === "ja") return ja_workers_errors_invalid_rate(inputs);
  if (locale2 === "ko") return ko_workers_errors_invalid_rate(inputs);
  if (locale2 === "el") return el_workers_errors_invalid_rate(inputs);
  if (locale2 === "id") return id_workers_errors_invalid_rate(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_workers_errors_invalid_rate(inputs);
  return zh_hant1_workers_errors_invalid_rate(inputs);
};
const en_workers_errors_file_too_large = (
  /** @type {(inputs: { limit: NonNullable<unknown> }) => string} */
  (i) => {
    return `This file exceeds the ${i.limit}GB browser / device limit. Try Firefox or Safari to convert this large file, which typically have higher limits.`;
  }
);
const zh_hans1_workers_errors_file_too_large = (
  /** @type {(inputs: { limit: NonNullable<unknown> }) => string} */
  (i) => {
    return `此文件超过 ${i.limit}GB 浏览器/设备限制。请尝试使用 Firefox 或 Safari 转换此大文件，它们通常具有更高的限制。`;
  }
);
const zh_hant1_workers_errors_file_too_large = (
  /** @type {(inputs: { limit: NonNullable<unknown> }) => string} */
  (i) => {
    return `此檔案超過 ${i.limit}GB 瀏覽器/裝置限制。請嘗試使用 Firefox 或 Safari 轉換此大型檔案，它們通常具有較高的限制。`;
  }
);
const es_workers_errors_file_too_large = en_workers_errors_file_too_large;
const fr_workers_errors_file_too_large = en_workers_errors_file_too_large;
const de_workers_errors_file_too_large = en_workers_errors_file_too_large;
const it_workers_errors_file_too_large = en_workers_errors_file_too_large;
const hr_workers_errors_file_too_large = en_workers_errors_file_too_large;
const tr_workers_errors_file_too_large = en_workers_errors_file_too_large;
const ja_workers_errors_file_too_large = en_workers_errors_file_too_large;
const ko_workers_errors_file_too_large = en_workers_errors_file_too_large;
const el_workers_errors_file_too_large = en_workers_errors_file_too_large;
const id_workers_errors_file_too_large = en_workers_errors_file_too_large;
const workers_errors_file_too_large = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("workers_errors_file_too_large", locale2);
  if (locale2 === "en") return en_workers_errors_file_too_large(inputs);
  if (locale2 === "es") return es_workers_errors_file_too_large(inputs);
  if (locale2 === "fr") return fr_workers_errors_file_too_large(inputs);
  if (locale2 === "de") return de_workers_errors_file_too_large(inputs);
  if (locale2 === "it") return it_workers_errors_file_too_large(inputs);
  if (locale2 === "hr") return hr_workers_errors_file_too_large(inputs);
  if (locale2 === "tr") return tr_workers_errors_file_too_large(inputs);
  if (locale2 === "ja") return ja_workers_errors_file_too_large(inputs);
  if (locale2 === "ko") return ko_workers_errors_file_too_large(inputs);
  if (locale2 === "el") return el_workers_errors_file_too_large(inputs);
  if (locale2 === "id") return id_workers_errors_file_too_large(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_workers_errors_file_too_large(inputs);
  return zh_hant1_workers_errors_file_too_large(inputs);
};
const en_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Privacy Policy`;
  }
);
const ko_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `개인정보 처리방침`;
  }
);
const zh_hans1_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `隐私政策`;
  }
);
const zh_hant1_privacy_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `隱私權政策`;
  }
);
const es_privacy_title = en_privacy_title;
const fr_privacy_title = en_privacy_title;
const de_privacy_title = en_privacy_title;
const it_privacy_title = en_privacy_title;
const hr_privacy_title = en_privacy_title;
const tr_privacy_title = en_privacy_title;
const ja_privacy_title = en_privacy_title;
const el_privacy_title = en_privacy_title;
const id_privacy_title = en_privacy_title;
const privacy_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_title", locale2);
  if (locale2 === "en") return en_privacy_title();
  if (locale2 === "es") return es_privacy_title();
  if (locale2 === "fr") return fr_privacy_title();
  if (locale2 === "de") return de_privacy_title();
  if (locale2 === "it") return it_privacy_title();
  if (locale2 === "hr") return hr_privacy_title();
  if (locale2 === "tr") return tr_privacy_title();
  if (locale2 === "ja") return ja_privacy_title();
  if (locale2 === "ko") return ko_privacy_title();
  if (locale2 === "el") return el_privacy_title();
  if (locale2 === "id") return id_privacy_title();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_title();
  return zh_hant1_privacy_title();
};
const en_privacy_summary_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Summary`;
  }
);
const ko_privacy_summary_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `요약`;
  }
);
const zh_hans1_privacy_summary_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `摘要`;
  }
);
const zh_hant1_privacy_summary_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `摘要`;
  }
);
const es_privacy_summary_title = en_privacy_summary_title;
const fr_privacy_summary_title = en_privacy_summary_title;
const de_privacy_summary_title = en_privacy_summary_title;
const it_privacy_summary_title = en_privacy_summary_title;
const hr_privacy_summary_title = en_privacy_summary_title;
const tr_privacy_summary_title = en_privacy_summary_title;
const ja_privacy_summary_title = en_privacy_summary_title;
const el_privacy_summary_title = en_privacy_summary_title;
const id_privacy_summary_title = en_privacy_summary_title;
const privacy_summary_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_summary_title", locale2);
  if (locale2 === "en") return en_privacy_summary_title();
  if (locale2 === "es") return es_privacy_summary_title();
  if (locale2 === "fr") return fr_privacy_summary_title();
  if (locale2 === "de") return de_privacy_summary_title();
  if (locale2 === "it") return it_privacy_summary_title();
  if (locale2 === "hr") return hr_privacy_summary_title();
  if (locale2 === "tr") return tr_privacy_summary_title();
  if (locale2 === "ja") return ja_privacy_summary_title();
  if (locale2 === "ko") return ko_privacy_summary_title();
  if (locale2 === "el") return el_privacy_summary_title();
  if (locale2 === "id") return id_privacy_summary_title();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_summary_title();
  return zh_hant1_privacy_summary_title();
};
const en_privacy_summary_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools's privacy policy is very simple: we do not collect or store any data on you at all. We don't use cookies or trackers, analytics are completely private, and all conversions (except videos) happen locally on your browser. Videos are deleted after being downloaded, or an hour, unless explicitly given permission by you to be stored; it will only be used for the purpose of troubleshooting. FileTools self-hosts a Coolify instance for hosting the website and filetoolsd (for video conversion), and a Plausible instance for completely anonymous and aggregated analytics. We use Stripe to process donations, which may collect some data used for fraud prevention.<br/><br/>Note this may only apply to the official FileTools instance at [vert_link]filetools.app[/vert_link]; third-party instances may handle your data differently.`;
  }
);
const ko_privacy_summary_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools의 개인정보 처리방침은 매우 간단합니다: 우리는 귀하에 대한 데이터를 수집하거나 보관하지 않습니다. 우리는 쿠키나 유저를 추적하지 않으며,, 모든 변환(비디오 제외)은 귀하의 브라우저에서 로컬로 수행됩니다. 비디오는 다운로드 후 또는 1시간 후에 삭제되며, 귀하가 명시적으로 보관을 허용한 경우에만 문제 해결을 위해 사용됩니다. FileTools는 웹사이트 호스팅을 위한 Coolify 인스턴스와 비디오 변환을 위한 filetoolsd, 완전히 익명화되고 집계된 분석을 위한 Plausible 인스턴스를 자체 호스팅합니다.<br/><br/>이는 [vert_link]filetools.app[/vert_link]의 공식 FileTools 인스턴스에만 적용될 수 있습니다. 타사 인스턴스는 귀하의 데이터를 다르게 처리할 수 있습니다.`;
  }
);
const zh_hans1_privacy_summary_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools 的隐私政策非常简单：我们根本不收集或存储你的任何数据。我们不使用 cookie 或跟踪器，分析是完全私密的，所有转换（视频除外）都在你的浏览器本地进行。视频在下载后或一小时后删除，除非你明确授权存储；它只会用于故障排查。FileTools 自托管 Coolify 实例用于托管网站和 filetoolsd（用于视频转换），以及用于完全匿名和聚合分析的 Plausible 实例。<br/><br/>请注意，这可能仅适用于[vert_link]filetools.app[/vert_link]的官方 FileTools 实例；第三方实例可能以不同方式处理你的数据。`;
  }
);
const zh_hant1_privacy_summary_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `FileTools 的隱私權政策非常簡單：我們根本不收集或儲存你的任何資料。我們不使用 cookie 或追蹤器，分析是完全私密的，所有轉換（影片除外）都在你的瀏覽器本機進行。影片在下載後或一小時後刪除，除非你明確授權儲存；它只會用於故障排除。FileTools 自託管 Coolify 執行個體用於託管網站和 filetoolsd（用於影片轉換），以及用於完全匿名和彙總分析的 Plausible 執行個體。<br/><br/>請注意，這可能僅適用於[vert_link]filetools.app[/vert_link]的官方 FileTools 執行個體；第三方執行個體可能以不同方式處理你的資料。`;
  }
);
const es_privacy_summary_description = en_privacy_summary_description;
const fr_privacy_summary_description = en_privacy_summary_description;
const de_privacy_summary_description = en_privacy_summary_description;
const it_privacy_summary_description = en_privacy_summary_description;
const hr_privacy_summary_description = en_privacy_summary_description;
const tr_privacy_summary_description = en_privacy_summary_description;
const ja_privacy_summary_description = en_privacy_summary_description;
const el_privacy_summary_description = en_privacy_summary_description;
const id_privacy_summary_description = en_privacy_summary_description;
const privacy_summary_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_summary_description", locale2);
  if (locale2 === "en") return en_privacy_summary_description();
  if (locale2 === "es") return es_privacy_summary_description();
  if (locale2 === "fr") return fr_privacy_summary_description();
  if (locale2 === "de") return de_privacy_summary_description();
  if (locale2 === "it") return it_privacy_summary_description();
  if (locale2 === "hr") return hr_privacy_summary_description();
  if (locale2 === "tr") return tr_privacy_summary_description();
  if (locale2 === "ja") return ja_privacy_summary_description();
  if (locale2 === "ko") return ko_privacy_summary_description();
  if (locale2 === "el") return el_privacy_summary_description();
  if (locale2 === "id") return id_privacy_summary_description();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_summary_description();
  return zh_hant1_privacy_summary_description();
};
const en_privacy_conversions_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conversions`;
  }
);
const ko_privacy_conversions_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `변환`;
  }
);
const zh_hans1_privacy_conversions_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `转换`;
  }
);
const zh_hant1_privacy_conversions_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `轉換`;
  }
);
const es_privacy_conversions_title = en_privacy_conversions_title;
const fr_privacy_conversions_title = en_privacy_conversions_title;
const de_privacy_conversions_title = en_privacy_conversions_title;
const it_privacy_conversions_title = en_privacy_conversions_title;
const hr_privacy_conversions_title = en_privacy_conversions_title;
const tr_privacy_conversions_title = en_privacy_conversions_title;
const ja_privacy_conversions_title = en_privacy_conversions_title;
const el_privacy_conversions_title = en_privacy_conversions_title;
const id_privacy_conversions_title = en_privacy_conversions_title;
const privacy_conversions_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_conversions_title", locale2);
  if (locale2 === "en") return en_privacy_conversions_title();
  if (locale2 === "es") return es_privacy_conversions_title();
  if (locale2 === "fr") return fr_privacy_conversions_title();
  if (locale2 === "de") return de_privacy_conversions_title();
  if (locale2 === "it") return it_privacy_conversions_title();
  if (locale2 === "hr") return hr_privacy_conversions_title();
  if (locale2 === "tr") return tr_privacy_conversions_title();
  if (locale2 === "ja") return ja_privacy_conversions_title();
  if (locale2 === "ko") return ko_privacy_conversions_title();
  if (locale2 === "el") return el_privacy_conversions_title();
  if (locale2 === "id") return id_privacy_conversions_title();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_conversions_title();
  return zh_hant1_privacy_conversions_title();
};
const en_privacy_conversions_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Most conversions (images, documents, audio) happen entirely locally on your device using WebAssembly versions of the relevant tools (e.g. ImageMagick, Pandoc, FFmpeg). This means your files never leave your device and we will never have access to them.<br/><br/>Video conversions are performed on our servers because they require more processing power and cannot be done very quickly on the browser yet. Videos you convert with FileTools are deleted after being downloaded, or after one hour, unless you explicitly give permission for us to store them longer purely for troubleshooting purposes.`;
  }
);
const ko_privacy_conversions_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `대부분의 변환(이미지, 문서, 오디오)은 관련 도구의 WebAssembly 버전(예: ImageMagick, Pandoc, FFmpeg)을 사용하여 여러분의 기기에서 로컬로 수행됩니다. 즉, 파일이 기기를 떠나지 않으며 우리가 파일에 접근할 일은 없습니다.<br/><br/>동영상 변환은 더 높은 연산 성능이 필요하고 아직 브라우저에서 충분히 빠르게 처리하기 어려워 서버에서 수행됩니다. FileTools로 변환한 동영상은 다운로드 후 또는 1시간이 지나면 삭제되며, 문제 해결만을 위해 더 오래 보관하도록 명시적으로 허용한 경우에만 예외적으로 보관됩니다.`;
  }
);
const zh_hans1_privacy_conversions_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `大多数转换（图片、文档、音频）完全在你的设备上本地使用相关工具的 WebAssembly 版本（例如 ImageMagick、Pandoc、FFmpeg）进行。这意味着你的文件永远不会离开你的设备，我们也永远无法访问它们。<br/><br/>视频转换在我们的服务器上进行，因为它们需要更多的处理能力，并且目前无法在浏览器上非常快速地完成。你使用 FileTools 转换的视频在下载后或一小时后删除，除非你明确授权我们将它们存储更长时间，纯粹用于故障排查。`;
  }
);
const zh_hant1_privacy_conversions_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `大多數轉換（圖片、文件、音訊）完全在你的裝置上本機使用相關工具的 WebAssembly 版本（例如 ImageMagick、Pandoc、FFmpeg）進行。這意味著你的檔案永遠不會離開你的裝置，我們也永遠無法存取它們。<br/><br/>影片轉換在我們的伺服器上進行，因為它們需要更多的處理能力，並且目前無法在瀏覽器上非常快速地完成。你使用 FileTools 轉換的影片在下載後或一小時後刪除，除非你明確授權我們將它們儲存更長時間，純粹用於故障排除。`;
  }
);
const es_privacy_conversions_description = en_privacy_conversions_description;
const fr_privacy_conversions_description = en_privacy_conversions_description;
const de_privacy_conversions_description = en_privacy_conversions_description;
const it_privacy_conversions_description = en_privacy_conversions_description;
const hr_privacy_conversions_description = en_privacy_conversions_description;
const tr_privacy_conversions_description = en_privacy_conversions_description;
const ja_privacy_conversions_description = en_privacy_conversions_description;
const el_privacy_conversions_description = en_privacy_conversions_description;
const id_privacy_conversions_description = en_privacy_conversions_description;
const privacy_conversions_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_conversions_description", locale2);
  if (locale2 === "en") return en_privacy_conversions_description();
  if (locale2 === "es") return es_privacy_conversions_description();
  if (locale2 === "fr") return fr_privacy_conversions_description();
  if (locale2 === "de") return de_privacy_conversions_description();
  if (locale2 === "it") return it_privacy_conversions_description();
  if (locale2 === "hr") return hr_privacy_conversions_description();
  if (locale2 === "tr") return tr_privacy_conversions_description();
  if (locale2 === "ja") return ja_privacy_conversions_description();
  if (locale2 === "ko") return ko_privacy_conversions_description();
  if (locale2 === "el") return el_privacy_conversions_description();
  if (locale2 === "id") return id_privacy_conversions_description();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_conversions_description();
  return zh_hant1_privacy_conversions_description();
};
const en_privacy_donations_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Donations`;
  }
);
const es_privacy_donations_title = en_privacy_donations_title;
const fr_privacy_donations_title = en_privacy_donations_title;
const de_privacy_donations_title = en_privacy_donations_title;
const it_privacy_donations_title = en_privacy_donations_title;
const hr_privacy_donations_title = en_privacy_donations_title;
const tr_privacy_donations_title = en_privacy_donations_title;
const ja_privacy_donations_title = en_privacy_donations_title;
const ko_privacy_donations_title = en_privacy_donations_title;
const el_privacy_donations_title = en_privacy_donations_title;
const id_privacy_donations_title = en_privacy_donations_title;
const zh_hans1_privacy_donations_title = en_privacy_donations_title;
const zh_hant1_privacy_donations_title = en_privacy_donations_title;
const privacy_donations_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_donations_title", locale2);
  if (locale2 === "en") return en_privacy_donations_title();
  if (locale2 === "es") return es_privacy_donations_title();
  if (locale2 === "fr") return fr_privacy_donations_title();
  if (locale2 === "de") return de_privacy_donations_title();
  if (locale2 === "it") return it_privacy_donations_title();
  if (locale2 === "hr") return hr_privacy_donations_title();
  if (locale2 === "tr") return tr_privacy_donations_title();
  if (locale2 === "ja") return ja_privacy_donations_title();
  if (locale2 === "ko") return ko_privacy_donations_title();
  if (locale2 === "el") return el_privacy_donations_title();
  if (locale2 === "id") return id_privacy_donations_title();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_donations_title();
  return zh_hant1_privacy_donations_title();
};
const en_privacy_donations_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `We use Stripe on the [about_link]about[/about_link] page to collect donations. Stripe may collect certain information about the payment and device for fraud prevention as described in [stripe_link]their documentation on advanced fraud detection[/stripe_link]. External network requests to Stripe are deferred, and are only made after you click the button to pay.`;
  }
);
const es_privacy_donations_description = en_privacy_donations_description;
const fr_privacy_donations_description = en_privacy_donations_description;
const de_privacy_donations_description = en_privacy_donations_description;
const it_privacy_donations_description = en_privacy_donations_description;
const hr_privacy_donations_description = en_privacy_donations_description;
const tr_privacy_donations_description = en_privacy_donations_description;
const ja_privacy_donations_description = en_privacy_donations_description;
const ko_privacy_donations_description = en_privacy_donations_description;
const el_privacy_donations_description = en_privacy_donations_description;
const id_privacy_donations_description = en_privacy_donations_description;
const zh_hans1_privacy_donations_description = en_privacy_donations_description;
const zh_hant1_privacy_donations_description = en_privacy_donations_description;
const privacy_donations_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_donations_description", locale2);
  if (locale2 === "en") return en_privacy_donations_description();
  if (locale2 === "es") return es_privacy_donations_description();
  if (locale2 === "fr") return fr_privacy_donations_description();
  if (locale2 === "de") return de_privacy_donations_description();
  if (locale2 === "it") return it_privacy_donations_description();
  if (locale2 === "hr") return hr_privacy_donations_description();
  if (locale2 === "tr") return tr_privacy_donations_description();
  if (locale2 === "ja") return ja_privacy_donations_description();
  if (locale2 === "ko") return ko_privacy_donations_description();
  if (locale2 === "el") return el_privacy_donations_description();
  if (locale2 === "id") return id_privacy_donations_description();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_donations_description();
  return zh_hant1_privacy_donations_description();
};
const en_privacy_conversion_errors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Conversion Errors`;
  }
);
const ko_privacy_conversion_errors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `변환 오류`;
  }
);
const zh_hans1_privacy_conversion_errors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `转换错误`;
  }
);
const zh_hant1_privacy_conversion_errors_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `轉換錯誤`;
  }
);
const es_privacy_conversion_errors_title = en_privacy_conversion_errors_title;
const fr_privacy_conversion_errors_title = en_privacy_conversion_errors_title;
const de_privacy_conversion_errors_title = en_privacy_conversion_errors_title;
const it_privacy_conversion_errors_title = en_privacy_conversion_errors_title;
const hr_privacy_conversion_errors_title = en_privacy_conversion_errors_title;
const tr_privacy_conversion_errors_title = en_privacy_conversion_errors_title;
const ja_privacy_conversion_errors_title = en_privacy_conversion_errors_title;
const el_privacy_conversion_errors_title = en_privacy_conversion_errors_title;
const id_privacy_conversion_errors_title = en_privacy_conversion_errors_title;
const privacy_conversion_errors_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_conversion_errors_title", locale2);
  if (locale2 === "en") return en_privacy_conversion_errors_title();
  if (locale2 === "es") return es_privacy_conversion_errors_title();
  if (locale2 === "fr") return fr_privacy_conversion_errors_title();
  if (locale2 === "de") return de_privacy_conversion_errors_title();
  if (locale2 === "it") return it_privacy_conversion_errors_title();
  if (locale2 === "hr") return hr_privacy_conversion_errors_title();
  if (locale2 === "tr") return tr_privacy_conversion_errors_title();
  if (locale2 === "ja") return ja_privacy_conversion_errors_title();
  if (locale2 === "ko") return ko_privacy_conversion_errors_title();
  if (locale2 === "el") return el_privacy_conversion_errors_title();
  if (locale2 === "id") return id_privacy_conversion_errors_title();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_conversion_errors_title();
  return zh_hant1_privacy_conversion_errors_title();
};
const en_privacy_conversion_errors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `When a video conversion fails, we may collect some anonymous data to help us diagnose the issue. This data may include:`;
  }
);
const ko_privacy_conversion_errors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `비디오 변환이 실패할 경우, 문제 진단을 위해 일부 익명 데이터를 수집할 수 있습니다. 이 데이터에는 다음이 포함될 수 있습니다:`;
  }
);
const zh_hans1_privacy_conversion_errors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `当视频转换失败时，我们可能会收集一些匿名数据以帮助我们诊断问题。这些数据可能包括：`;
  }
);
const zh_hant1_privacy_conversion_errors_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `當影片轉換失敗時，我們可能會收集一些匿名資料以協助我們診斷問題。這些資料可能包括：`;
  }
);
const es_privacy_conversion_errors_description = en_privacy_conversion_errors_description;
const fr_privacy_conversion_errors_description = en_privacy_conversion_errors_description;
const de_privacy_conversion_errors_description = en_privacy_conversion_errors_description;
const it_privacy_conversion_errors_description = en_privacy_conversion_errors_description;
const hr_privacy_conversion_errors_description = en_privacy_conversion_errors_description;
const tr_privacy_conversion_errors_description = en_privacy_conversion_errors_description;
const ja_privacy_conversion_errors_description = en_privacy_conversion_errors_description;
const el_privacy_conversion_errors_description = en_privacy_conversion_errors_description;
const id_privacy_conversion_errors_description = en_privacy_conversion_errors_description;
const privacy_conversion_errors_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_conversion_errors_description", locale2);
  if (locale2 === "en") return en_privacy_conversion_errors_description();
  if (locale2 === "es") return es_privacy_conversion_errors_description();
  if (locale2 === "fr") return fr_privacy_conversion_errors_description();
  if (locale2 === "de") return de_privacy_conversion_errors_description();
  if (locale2 === "it") return it_privacy_conversion_errors_description();
  if (locale2 === "hr") return hr_privacy_conversion_errors_description();
  if (locale2 === "tr") return tr_privacy_conversion_errors_description();
  if (locale2 === "ja") return ja_privacy_conversion_errors_description();
  if (locale2 === "ko") return ko_privacy_conversion_errors_description();
  if (locale2 === "el") return el_privacy_conversion_errors_description();
  if (locale2 === "id") return id_privacy_conversion_errors_description();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_conversion_errors_description();
  return zh_hant1_privacy_conversion_errors_description();
};
const en_privacy_conversion_errors_list_job_id = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `The job ID, which is the anonymized file name`;
  }
);
const ko_privacy_conversion_errors_list_job_id = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `작업 ID (익명화된 파일 이름)`;
  }
);
const zh_hans1_privacy_conversion_errors_list_job_id = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `任务 ID，即匿名化的文件名`;
  }
);
const zh_hant1_privacy_conversion_errors_list_job_id = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `任務 ID，即匿名化的檔案名稱`;
  }
);
const es_privacy_conversion_errors_list_job_id = en_privacy_conversion_errors_list_job_id;
const fr_privacy_conversion_errors_list_job_id = en_privacy_conversion_errors_list_job_id;
const de_privacy_conversion_errors_list_job_id = en_privacy_conversion_errors_list_job_id;
const it_privacy_conversion_errors_list_job_id = en_privacy_conversion_errors_list_job_id;
const hr_privacy_conversion_errors_list_job_id = en_privacy_conversion_errors_list_job_id;
const tr_privacy_conversion_errors_list_job_id = en_privacy_conversion_errors_list_job_id;
const ja_privacy_conversion_errors_list_job_id = en_privacy_conversion_errors_list_job_id;
const el_privacy_conversion_errors_list_job_id = en_privacy_conversion_errors_list_job_id;
const id_privacy_conversion_errors_list_job_id = en_privacy_conversion_errors_list_job_id;
const privacy_conversion_errors_list_job_id = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_conversion_errors_list_job_id", locale2);
  if (locale2 === "en") return en_privacy_conversion_errors_list_job_id();
  if (locale2 === "es") return es_privacy_conversion_errors_list_job_id();
  if (locale2 === "fr") return fr_privacy_conversion_errors_list_job_id();
  if (locale2 === "de") return de_privacy_conversion_errors_list_job_id();
  if (locale2 === "it") return it_privacy_conversion_errors_list_job_id();
  if (locale2 === "hr") return hr_privacy_conversion_errors_list_job_id();
  if (locale2 === "tr") return tr_privacy_conversion_errors_list_job_id();
  if (locale2 === "ja") return ja_privacy_conversion_errors_list_job_id();
  if (locale2 === "ko") return ko_privacy_conversion_errors_list_job_id();
  if (locale2 === "el") return el_privacy_conversion_errors_list_job_id();
  if (locale2 === "id") return id_privacy_conversion_errors_list_job_id();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_conversion_errors_list_job_id();
  return zh_hant1_privacy_conversion_errors_list_job_id();
};
const en_privacy_conversion_errors_list_format_from = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `The format you converted from`;
  }
);
const ko_privacy_conversion_errors_list_format_from = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `변환 전 포맷`;
  }
);
const zh_hans1_privacy_conversion_errors_list_format_from = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `你转换的来源格式`;
  }
);
const zh_hant1_privacy_conversion_errors_list_format_from = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `你轉換的來源格式`;
  }
);
const es_privacy_conversion_errors_list_format_from = en_privacy_conversion_errors_list_format_from;
const fr_privacy_conversion_errors_list_format_from = en_privacy_conversion_errors_list_format_from;
const de_privacy_conversion_errors_list_format_from = en_privacy_conversion_errors_list_format_from;
const it_privacy_conversion_errors_list_format_from = en_privacy_conversion_errors_list_format_from;
const hr_privacy_conversion_errors_list_format_from = en_privacy_conversion_errors_list_format_from;
const tr_privacy_conversion_errors_list_format_from = en_privacy_conversion_errors_list_format_from;
const ja_privacy_conversion_errors_list_format_from = en_privacy_conversion_errors_list_format_from;
const el_privacy_conversion_errors_list_format_from = en_privacy_conversion_errors_list_format_from;
const id_privacy_conversion_errors_list_format_from = en_privacy_conversion_errors_list_format_from;
const privacy_conversion_errors_list_format_from = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_conversion_errors_list_format_from", locale2);
  if (locale2 === "en") return en_privacy_conversion_errors_list_format_from();
  if (locale2 === "es") return es_privacy_conversion_errors_list_format_from();
  if (locale2 === "fr") return fr_privacy_conversion_errors_list_format_from();
  if (locale2 === "de") return de_privacy_conversion_errors_list_format_from();
  if (locale2 === "it") return it_privacy_conversion_errors_list_format_from();
  if (locale2 === "hr") return hr_privacy_conversion_errors_list_format_from();
  if (locale2 === "tr") return tr_privacy_conversion_errors_list_format_from();
  if (locale2 === "ja") return ja_privacy_conversion_errors_list_format_from();
  if (locale2 === "ko") return ko_privacy_conversion_errors_list_format_from();
  if (locale2 === "el") return el_privacy_conversion_errors_list_format_from();
  if (locale2 === "id") return id_privacy_conversion_errors_list_format_from();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_conversion_errors_list_format_from();
  return zh_hant1_privacy_conversion_errors_list_format_from();
};
const en_privacy_conversion_errors_list_format_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `The format you converted to`;
  }
);
const ko_privacy_conversion_errors_list_format_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `변환 후 포맷`;
  }
);
const zh_hans1_privacy_conversion_errors_list_format_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `你转换的目标格式`;
  }
);
const zh_hant1_privacy_conversion_errors_list_format_to = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `你轉換的目標格式`;
  }
);
const es_privacy_conversion_errors_list_format_to = en_privacy_conversion_errors_list_format_to;
const fr_privacy_conversion_errors_list_format_to = en_privacy_conversion_errors_list_format_to;
const de_privacy_conversion_errors_list_format_to = en_privacy_conversion_errors_list_format_to;
const it_privacy_conversion_errors_list_format_to = en_privacy_conversion_errors_list_format_to;
const hr_privacy_conversion_errors_list_format_to = en_privacy_conversion_errors_list_format_to;
const tr_privacy_conversion_errors_list_format_to = en_privacy_conversion_errors_list_format_to;
const ja_privacy_conversion_errors_list_format_to = en_privacy_conversion_errors_list_format_to;
const el_privacy_conversion_errors_list_format_to = en_privacy_conversion_errors_list_format_to;
const id_privacy_conversion_errors_list_format_to = en_privacy_conversion_errors_list_format_to;
const privacy_conversion_errors_list_format_to = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_conversion_errors_list_format_to", locale2);
  if (locale2 === "en") return en_privacy_conversion_errors_list_format_to();
  if (locale2 === "es") return es_privacy_conversion_errors_list_format_to();
  if (locale2 === "fr") return fr_privacy_conversion_errors_list_format_to();
  if (locale2 === "de") return de_privacy_conversion_errors_list_format_to();
  if (locale2 === "it") return it_privacy_conversion_errors_list_format_to();
  if (locale2 === "hr") return hr_privacy_conversion_errors_list_format_to();
  if (locale2 === "tr") return tr_privacy_conversion_errors_list_format_to();
  if (locale2 === "ja") return ja_privacy_conversion_errors_list_format_to();
  if (locale2 === "ko") return ko_privacy_conversion_errors_list_format_to();
  if (locale2 === "el") return el_privacy_conversion_errors_list_format_to();
  if (locale2 === "id") return id_privacy_conversion_errors_list_format_to();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_conversion_errors_list_format_to();
  return zh_hant1_privacy_conversion_errors_list_format_to();
};
const en_privacy_conversion_errors_list_stderr = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `The FFmpeg stderr output of your job (error message)`;
  }
);
const ko_privacy_conversion_errors_list_stderr = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `작업의 FFmpeg stderr 출력 (오류 메시지)`;
  }
);
const zh_hans1_privacy_conversion_errors_list_stderr = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `你任务的 FFmpeg stderr 输出（错误消息）`;
  }
);
const zh_hant1_privacy_conversion_errors_list_stderr = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `你任務的 FFmpeg stderr 輸出（錯誤訊息）`;
  }
);
const es_privacy_conversion_errors_list_stderr = en_privacy_conversion_errors_list_stderr;
const fr_privacy_conversion_errors_list_stderr = en_privacy_conversion_errors_list_stderr;
const de_privacy_conversion_errors_list_stderr = en_privacy_conversion_errors_list_stderr;
const it_privacy_conversion_errors_list_stderr = en_privacy_conversion_errors_list_stderr;
const hr_privacy_conversion_errors_list_stderr = en_privacy_conversion_errors_list_stderr;
const tr_privacy_conversion_errors_list_stderr = en_privacy_conversion_errors_list_stderr;
const ja_privacy_conversion_errors_list_stderr = en_privacy_conversion_errors_list_stderr;
const el_privacy_conversion_errors_list_stderr = en_privacy_conversion_errors_list_stderr;
const id_privacy_conversion_errors_list_stderr = en_privacy_conversion_errors_list_stderr;
const privacy_conversion_errors_list_stderr = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_conversion_errors_list_stderr", locale2);
  if (locale2 === "en") return en_privacy_conversion_errors_list_stderr();
  if (locale2 === "es") return es_privacy_conversion_errors_list_stderr();
  if (locale2 === "fr") return fr_privacy_conversion_errors_list_stderr();
  if (locale2 === "de") return de_privacy_conversion_errors_list_stderr();
  if (locale2 === "it") return it_privacy_conversion_errors_list_stderr();
  if (locale2 === "hr") return hr_privacy_conversion_errors_list_stderr();
  if (locale2 === "tr") return tr_privacy_conversion_errors_list_stderr();
  if (locale2 === "ja") return ja_privacy_conversion_errors_list_stderr();
  if (locale2 === "ko") return ko_privacy_conversion_errors_list_stderr();
  if (locale2 === "el") return el_privacy_conversion_errors_list_stderr();
  if (locale2 === "id") return id_privacy_conversion_errors_list_stderr();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_conversion_errors_list_stderr();
  return zh_hant1_privacy_conversion_errors_list_stderr();
};
const en_privacy_conversion_errors_list_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `The actual video file (if given explicit permission)`;
  }
);
const ko_privacy_conversion_errors_list_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `실제 비디오 파일 (명시적 권한이 부여된 경우)`;
  }
);
const zh_hans1_privacy_conversion_errors_list_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `实际视频文件（如果明确授权）`;
  }
);
const zh_hant1_privacy_conversion_errors_list_video = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `實際影片檔案（如果明確授權）`;
  }
);
const es_privacy_conversion_errors_list_video = en_privacy_conversion_errors_list_video;
const fr_privacy_conversion_errors_list_video = en_privacy_conversion_errors_list_video;
const de_privacy_conversion_errors_list_video = en_privacy_conversion_errors_list_video;
const it_privacy_conversion_errors_list_video = en_privacy_conversion_errors_list_video;
const hr_privacy_conversion_errors_list_video = en_privacy_conversion_errors_list_video;
const tr_privacy_conversion_errors_list_video = en_privacy_conversion_errors_list_video;
const ja_privacy_conversion_errors_list_video = en_privacy_conversion_errors_list_video;
const el_privacy_conversion_errors_list_video = en_privacy_conversion_errors_list_video;
const id_privacy_conversion_errors_list_video = en_privacy_conversion_errors_list_video;
const privacy_conversion_errors_list_video = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_conversion_errors_list_video", locale2);
  if (locale2 === "en") return en_privacy_conversion_errors_list_video();
  if (locale2 === "es") return es_privacy_conversion_errors_list_video();
  if (locale2 === "fr") return fr_privacy_conversion_errors_list_video();
  if (locale2 === "de") return de_privacy_conversion_errors_list_video();
  if (locale2 === "it") return it_privacy_conversion_errors_list_video();
  if (locale2 === "hr") return hr_privacy_conversion_errors_list_video();
  if (locale2 === "tr") return tr_privacy_conversion_errors_list_video();
  if (locale2 === "ja") return ja_privacy_conversion_errors_list_video();
  if (locale2 === "ko") return ko_privacy_conversion_errors_list_video();
  if (locale2 === "el") return el_privacy_conversion_errors_list_video();
  if (locale2 === "id") return id_privacy_conversion_errors_list_video();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_conversion_errors_list_video();
  return zh_hant1_privacy_conversion_errors_list_video();
};
const en_privacy_conversion_errors_footer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `This information is used solely for the purpose of diagnosing conversion issues. The actual video file will only ever be collected if you give us permission to do so, where it will only be used for troubleshooting.`;
  }
);
const ko_privacy_conversion_errors_footer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `이 정보는 오직 변환 문제를 진단하기 위해서만 사용됩니다. 실제 비디오 파일은 귀하가 수락한 경우에만 수집되며, 그 경우에도 오직 문제 해결을 위해서만 사용됩니다.`;
  }
);
const zh_hans1_privacy_conversion_errors_footer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `此信息仅用于诊断转换问题。只有在你明确授权的情况下，才会收集实际视频文件，并且仅用于故障排查。`;
  }
);
const zh_hant1_privacy_conversion_errors_footer = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `此資訊僅用於診斷轉換問題。只有在你明確授權的情況下，才會收集實際影片檔案，並且僅用於故障排除。`;
  }
);
const es_privacy_conversion_errors_footer = en_privacy_conversion_errors_footer;
const fr_privacy_conversion_errors_footer = en_privacy_conversion_errors_footer;
const de_privacy_conversion_errors_footer = en_privacy_conversion_errors_footer;
const it_privacy_conversion_errors_footer = en_privacy_conversion_errors_footer;
const hr_privacy_conversion_errors_footer = en_privacy_conversion_errors_footer;
const tr_privacy_conversion_errors_footer = en_privacy_conversion_errors_footer;
const ja_privacy_conversion_errors_footer = en_privacy_conversion_errors_footer;
const el_privacy_conversion_errors_footer = en_privacy_conversion_errors_footer;
const id_privacy_conversion_errors_footer = en_privacy_conversion_errors_footer;
const privacy_conversion_errors_footer = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_conversion_errors_footer", locale2);
  if (locale2 === "en") return en_privacy_conversion_errors_footer();
  if (locale2 === "es") return es_privacy_conversion_errors_footer();
  if (locale2 === "fr") return fr_privacy_conversion_errors_footer();
  if (locale2 === "de") return de_privacy_conversion_errors_footer();
  if (locale2 === "it") return it_privacy_conversion_errors_footer();
  if (locale2 === "hr") return hr_privacy_conversion_errors_footer();
  if (locale2 === "tr") return tr_privacy_conversion_errors_footer();
  if (locale2 === "ja") return ja_privacy_conversion_errors_footer();
  if (locale2 === "ko") return ko_privacy_conversion_errors_footer();
  if (locale2 === "el") return el_privacy_conversion_errors_footer();
  if (locale2 === "id") return id_privacy_conversion_errors_footer();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_conversion_errors_footer();
  return zh_hant1_privacy_conversion_errors_footer();
};
const en_privacy_analytics_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Analytics`;
  }
);
const ko_privacy_analytics_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `분석`;
  }
);
const zh_hans1_privacy_analytics_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `分析`;
  }
);
const zh_hant1_privacy_analytics_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `分析`;
  }
);
const es_privacy_analytics_title = en_privacy_analytics_title;
const fr_privacy_analytics_title = en_privacy_analytics_title;
const de_privacy_analytics_title = en_privacy_analytics_title;
const it_privacy_analytics_title = en_privacy_analytics_title;
const hr_privacy_analytics_title = en_privacy_analytics_title;
const tr_privacy_analytics_title = en_privacy_analytics_title;
const ja_privacy_analytics_title = en_privacy_analytics_title;
const el_privacy_analytics_title = en_privacy_analytics_title;
const id_privacy_analytics_title = en_privacy_analytics_title;
const privacy_analytics_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_analytics_title", locale2);
  if (locale2 === "en") return en_privacy_analytics_title();
  if (locale2 === "es") return es_privacy_analytics_title();
  if (locale2 === "fr") return fr_privacy_analytics_title();
  if (locale2 === "de") return de_privacy_analytics_title();
  if (locale2 === "it") return it_privacy_analytics_title();
  if (locale2 === "hr") return hr_privacy_analytics_title();
  if (locale2 === "tr") return tr_privacy_analytics_title();
  if (locale2 === "ja") return ja_privacy_analytics_title();
  if (locale2 === "ko") return ko_privacy_analytics_title();
  if (locale2 === "el") return el_privacy_analytics_title();
  if (locale2 === "id") return id_privacy_analytics_title();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_analytics_title();
  return zh_hant1_privacy_analytics_title();
};
const en_privacy_analytics_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `We self-host a Plausible instance for completely anonymous and aggregated analytics. Plausible does not use cookies and complies with all major privacy regulations (GDPR/CCPA/PECR). You can opt out of analytics in the "Privacy & data" section in [settings_link]settings[/settings_link] and read more about Plausible's privacy practices [plausible_link]here[/plausible_link].`;
  }
);
const ko_privacy_analytics_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `저희는 완전히 익명화되고 집계된 분석을 위해 Plausible을 자체 호스팅합니다. Plausible는 쿠키를 사용하지 않으며 모든 주요 개인정보 보호 규정(GDPR/CCPA/PECR)을 준수합니다. "개인정보 및 데이터" 섹션에서 [settings_link]설정[/settings_link]을 통해 분석을 선택 해제할 수 있으며, Plausible의 개인정보 보호 관행에 대한 자세한 내용은 [plausible_link]여기[/plausible_link]에서 확인할 수 있습니다.`;
  }
);
const zh_hans1_privacy_analytics_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `我们自托管 Plausible 实例用于完全匿名和聚合的分析。Plausible 不使用 cookie，并符合所有主要隐私法规（GDPR/CCPA/PECR）。你可以在[settings_link]设置[/settings_link]的“隐私与数据”部分选择退出分析，并在[plausible_link]这里[/plausible_link]阅读更多关于 Plausible 隐私实践的信息。`;
  }
);
const zh_hant1_privacy_analytics_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `我們自託管 Plausible 執行個體用於完全匿名和彙總的分析。Plausible 不使用 cookie，並符合所有主要隱私權法規（GDPR/CCPA/PECR）。你可以在[settings_link]設定[/settings_link]的「隱私權與資料」部分選擇退出分析，並在[plausible_link]這裡[/plausible_link]閱讀更多關於 Plausible 隱私權實務的資訊。`;
  }
);
const es_privacy_analytics_description = en_privacy_analytics_description;
const fr_privacy_analytics_description = en_privacy_analytics_description;
const de_privacy_analytics_description = en_privacy_analytics_description;
const it_privacy_analytics_description = en_privacy_analytics_description;
const hr_privacy_analytics_description = en_privacy_analytics_description;
const tr_privacy_analytics_description = en_privacy_analytics_description;
const ja_privacy_analytics_description = en_privacy_analytics_description;
const el_privacy_analytics_description = en_privacy_analytics_description;
const id_privacy_analytics_description = en_privacy_analytics_description;
const privacy_analytics_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_analytics_description", locale2);
  if (locale2 === "en") return en_privacy_analytics_description();
  if (locale2 === "es") return es_privacy_analytics_description();
  if (locale2 === "fr") return fr_privacy_analytics_description();
  if (locale2 === "de") return de_privacy_analytics_description();
  if (locale2 === "it") return it_privacy_analytics_description();
  if (locale2 === "hr") return hr_privacy_analytics_description();
  if (locale2 === "tr") return tr_privacy_analytics_description();
  if (locale2 === "ja") return ja_privacy_analytics_description();
  if (locale2 === "ko") return ko_privacy_analytics_description();
  if (locale2 === "el") return el_privacy_analytics_description();
  if (locale2 === "id") return id_privacy_analytics_description();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_analytics_description();
  return zh_hant1_privacy_analytics_description();
};
const en_privacy_local_storage_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Local Storage`;
  }
);
const ko_privacy_local_storage_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Local Storage`;
  }
);
const zh_hans1_privacy_local_storage_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `本地存储`;
  }
);
const zh_hant1_privacy_local_storage_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `本機儲存`;
  }
);
const es_privacy_local_storage_title = en_privacy_local_storage_title;
const fr_privacy_local_storage_title = en_privacy_local_storage_title;
const de_privacy_local_storage_title = en_privacy_local_storage_title;
const it_privacy_local_storage_title = en_privacy_local_storage_title;
const hr_privacy_local_storage_title = en_privacy_local_storage_title;
const tr_privacy_local_storage_title = en_privacy_local_storage_title;
const ja_privacy_local_storage_title = en_privacy_local_storage_title;
const el_privacy_local_storage_title = en_privacy_local_storage_title;
const id_privacy_local_storage_title = en_privacy_local_storage_title;
const privacy_local_storage_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_local_storage_title", locale2);
  if (locale2 === "en") return en_privacy_local_storage_title();
  if (locale2 === "es") return es_privacy_local_storage_title();
  if (locale2 === "fr") return fr_privacy_local_storage_title();
  if (locale2 === "de") return de_privacy_local_storage_title();
  if (locale2 === "it") return it_privacy_local_storage_title();
  if (locale2 === "hr") return hr_privacy_local_storage_title();
  if (locale2 === "tr") return tr_privacy_local_storage_title();
  if (locale2 === "ja") return ja_privacy_local_storage_title();
  if (locale2 === "ko") return ko_privacy_local_storage_title();
  if (locale2 === "el") return el_privacy_local_storage_title();
  if (locale2 === "id") return id_privacy_local_storage_title();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_local_storage_title();
  return zh_hant1_privacy_local_storage_title();
};
const en_privacy_local_storage_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `We use your browser's local storage to save your settings, and your browser's session storage to temporarily store the GitHub contributors list for the "About" section to reduce repeated GitHub API requests. No personal data is stored or transmitted.<br/><br/>The WebAssembly versions of the conversion tools we use (FFmpeg, ImageMagick, Pandoc) are also stored locally on your browser when you first visit the website, so you don't need to redownload them each visit. No personal data is stored or transmitted. You may view or delete this data at any time in the "Privacy & data" section in [settings_link]settings[/settings_link].`;
  }
);
const ko_privacy_local_storage_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `브라우저의 로컬 스토리지를 사용해 설정을 저장하고, 반복적인 GitHub API 요청을 줄이기 위해 "정보" 섹션의 GitHub 기여자 목록을 브라우저의 세션 스토리지에 임시로 저장합니다. 어떤 개인 데이터도 저장되거나 전송되지 않습니다.<br/><br/>사용되는 변환 도구(FFmpeg, ImageMagick, Pandoc)의 WebAssembly 버전도 사용자가 처음 웹사이트를 방문할 때 브라우저에 로컬로 저장되므로, 매번 다시 다운로드할 필요가 없습니다. 어떤 개인 정보나 데이터도 저장되거나 전송되지 않습니다. 이 데이터는 언제든지 [settings_link]설정[/settings_link]의 "개인정보 및 데이터" 섹션에서 확인하거나 삭제할 수 있습니다.`;
  }
);
const zh_hans1_privacy_local_storage_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `我们使用浏览器的本地存储来保存你的设置，使用浏览器的会话存储来临时存储“关于”部分的 GitHub 贡献者列表，以减少重复的 GitHub API 请求。不会存储或传输任何个人数据。<br/><br/>我们使用的转换工具的 WebAssembly 版本（FFmpeg、ImageMagick、Pandoc）也会在你首次访问网站时本地存储在浏览器中，这样你就不需要每次访问时都重新下载它们。不会存储或传输任何个人数据。你可以随时在[settings_link]设置[/settings_link]的“隐私与数据”部分查看或删除这些数据。`;
  }
);
const zh_hant1_privacy_local_storage_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `我們使用瀏覽器的本機儲存來儲存你的設定，使用瀏覽器的工作階段儲存來暫時儲存「關於」部分的 GitHub 貢獻者清單，以減少重複的 GitHub API 請求。不會儲存或傳輸任何個人資料。<br/><br/>我們使用的轉換工具的 WebAssembly 版本（FFmpeg、ImageMagick、Pandoc）也會在你首次造訪網站時本機儲存在瀏覽器中，這樣你就不需要每次造訪時都重新下載它們。不會儲存或傳輸任何個人資料。你可以隨時在[settings_link]設定[/settings_link]的「隱私權與資料」部分檢視或刪除這些資料。`;
  }
);
const es_privacy_local_storage_description = en_privacy_local_storage_description;
const fr_privacy_local_storage_description = en_privacy_local_storage_description;
const de_privacy_local_storage_description = en_privacy_local_storage_description;
const it_privacy_local_storage_description = en_privacy_local_storage_description;
const hr_privacy_local_storage_description = en_privacy_local_storage_description;
const tr_privacy_local_storage_description = en_privacy_local_storage_description;
const ja_privacy_local_storage_description = en_privacy_local_storage_description;
const el_privacy_local_storage_description = en_privacy_local_storage_description;
const id_privacy_local_storage_description = en_privacy_local_storage_description;
const privacy_local_storage_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_local_storage_description", locale2);
  if (locale2 === "en") return en_privacy_local_storage_description();
  if (locale2 === "es") return es_privacy_local_storage_description();
  if (locale2 === "fr") return fr_privacy_local_storage_description();
  if (locale2 === "de") return de_privacy_local_storage_description();
  if (locale2 === "it") return it_privacy_local_storage_description();
  if (locale2 === "hr") return hr_privacy_local_storage_description();
  if (locale2 === "tr") return tr_privacy_local_storage_description();
  if (locale2 === "ja") return ja_privacy_local_storage_description();
  if (locale2 === "ko") return ko_privacy_local_storage_description();
  if (locale2 === "el") return el_privacy_local_storage_description();
  if (locale2 === "id") return id_privacy_local_storage_description();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_local_storage_description();
  return zh_hant1_privacy_local_storage_description();
};
const en_privacy_contact_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Contact`;
  }
);
const ko_privacy_contact_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `문의하기`;
  }
);
const zh_hans1_privacy_contact_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `联系`;
  }
);
const zh_hant1_privacy_contact_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `聯絡`;
  }
);
const es_privacy_contact_title = en_privacy_contact_title;
const fr_privacy_contact_title = en_privacy_contact_title;
const de_privacy_contact_title = en_privacy_contact_title;
const it_privacy_contact_title = en_privacy_contact_title;
const hr_privacy_contact_title = en_privacy_contact_title;
const tr_privacy_contact_title = en_privacy_contact_title;
const ja_privacy_contact_title = en_privacy_contact_title;
const el_privacy_contact_title = en_privacy_contact_title;
const id_privacy_contact_title = en_privacy_contact_title;
const privacy_contact_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_contact_title", locale2);
  if (locale2 === "en") return en_privacy_contact_title();
  if (locale2 === "es") return es_privacy_contact_title();
  if (locale2 === "fr") return fr_privacy_contact_title();
  if (locale2 === "de") return de_privacy_contact_title();
  if (locale2 === "it") return it_privacy_contact_title();
  if (locale2 === "hr") return hr_privacy_contact_title();
  if (locale2 === "tr") return tr_privacy_contact_title();
  if (locale2 === "ja") return ja_privacy_contact_title();
  if (locale2 === "ko") return ko_privacy_contact_title();
  if (locale2 === "el") return el_privacy_contact_title();
  if (locale2 === "id") return id_privacy_contact_title();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_contact_title();
  return zh_hant1_privacy_contact_title();
};
const en_privacy_contact_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `For questions, email us at: [email_link]hello@filetools.app[/email_link]. If you are using a third-party instance of FileTools, please contact the hoster of that instance instead.`;
  }
);
const ko_privacy_contact_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `질문이 있으시면 다음 이메일로 문의해 주세요: [email_link]hello@filetools.app[/email_link]. 서드파티 FileTools 인스턴스를 사용 중인 경우 해당 인스턴스의 호스트에게 문의해 주세요.`;
  }
);
const zh_hans1_privacy_contact_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `如有问题，请发送电子邮件至：[email_link]hello@filetools.app[/email_link]。如果你使用的是第三方 FileTools 实例，请联系该实例的托管者。`;
  }
);
const zh_hant1_privacy_contact_description = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `如有問題，請傳送電子郵件至：[email_link]hello@filetools.app[/email_link]。如果你使用的是第三方 FileTools 執行個體，請聯絡該執行個體的託管者。`;
  }
);
const es_privacy_contact_description = en_privacy_contact_description;
const fr_privacy_contact_description = en_privacy_contact_description;
const de_privacy_contact_description = en_privacy_contact_description;
const it_privacy_contact_description = en_privacy_contact_description;
const hr_privacy_contact_description = en_privacy_contact_description;
const tr_privacy_contact_description = en_privacy_contact_description;
const ja_privacy_contact_description = en_privacy_contact_description;
const el_privacy_contact_description = en_privacy_contact_description;
const id_privacy_contact_description = en_privacy_contact_description;
const privacy_contact_description = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_contact_description", locale2);
  if (locale2 === "en") return en_privacy_contact_description();
  if (locale2 === "es") return es_privacy_contact_description();
  if (locale2 === "fr") return fr_privacy_contact_description();
  if (locale2 === "de") return de_privacy_contact_description();
  if (locale2 === "it") return it_privacy_contact_description();
  if (locale2 === "hr") return hr_privacy_contact_description();
  if (locale2 === "tr") return tr_privacy_contact_description();
  if (locale2 === "ja") return ja_privacy_contact_description();
  if (locale2 === "ko") return ko_privacy_contact_description();
  if (locale2 === "el") return el_privacy_contact_description();
  if (locale2 === "id") return id_privacy_contact_description();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_contact_description();
  return zh_hant1_privacy_contact_description();
};
const en_privacy_last_updated = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Last updated: 2025-10-29`;
  }
);
const ko_privacy_last_updated = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Last updated: 2025-10-19`;
  }
);
const zh_hans1_privacy_last_updated = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `最后更新：2025-10-19`;
  }
);
const zh_hant1_privacy_last_updated = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `最後更新：2025-10-19`;
  }
);
const es_privacy_last_updated = en_privacy_last_updated;
const fr_privacy_last_updated = en_privacy_last_updated;
const de_privacy_last_updated = en_privacy_last_updated;
const it_privacy_last_updated = en_privacy_last_updated;
const hr_privacy_last_updated = en_privacy_last_updated;
const tr_privacy_last_updated = en_privacy_last_updated;
const ja_privacy_last_updated = en_privacy_last_updated;
const el_privacy_last_updated = en_privacy_last_updated;
const id_privacy_last_updated = en_privacy_last_updated;
const privacy_last_updated = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("privacy_last_updated", locale2);
  if (locale2 === "en") return en_privacy_last_updated();
  if (locale2 === "es") return es_privacy_last_updated();
  if (locale2 === "fr") return fr_privacy_last_updated();
  if (locale2 === "de") return de_privacy_last_updated();
  if (locale2 === "it") return it_privacy_last_updated();
  if (locale2 === "hr") return hr_privacy_last_updated();
  if (locale2 === "tr") return tr_privacy_last_updated();
  if (locale2 === "ja") return ja_privacy_last_updated();
  if (locale2 === "ko") return ko_privacy_last_updated();
  if (locale2 === "el") return el_privacy_last_updated();
  if (locale2 === "id") return id_privacy_last_updated();
  if (locale2 === "zh-Hans") return zh_hans1_privacy_last_updated();
  return zh_hant1_privacy_last_updated();
};
const fr_settings_filetoolsd_instance_url = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `URL de l'instance`;
  }
);
const de_settings_filetoolsd_instance_url = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Instanz-URL`;
  }
);
const hr_settings_filetoolsd_instance_url = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `URL instance`;
  }
);
const en_settings_filetoolsd_instance_url = () => "settings.filetoolsd.instance_url";
const es_settings_filetoolsd_instance_url = en_settings_filetoolsd_instance_url;
const it_settings_filetoolsd_instance_url = en_settings_filetoolsd_instance_url;
const tr_settings_filetoolsd_instance_url = en_settings_filetoolsd_instance_url;
const ja_settings_filetoolsd_instance_url = en_settings_filetoolsd_instance_url;
const ko_settings_filetoolsd_instance_url = en_settings_filetoolsd_instance_url;
const el_settings_filetoolsd_instance_url = en_settings_filetoolsd_instance_url;
const id_settings_filetoolsd_instance_url = en_settings_filetoolsd_instance_url;
const zh_hans1_settings_filetoolsd_instance_url = en_settings_filetoolsd_instance_url;
const zh_hant1_settings_filetoolsd_instance_url = en_settings_filetoolsd_instance_url;
const settings_filetoolsd_instance_url = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("settings_filetoolsd_instance_url", locale2);
  if (locale2 === "en") return en_settings_filetoolsd_instance_url();
  if (locale2 === "es") return es_settings_filetoolsd_instance_url();
  if (locale2 === "fr") return fr_settings_filetoolsd_instance_url();
  if (locale2 === "de") return de_settings_filetoolsd_instance_url();
  if (locale2 === "it") return it_settings_filetoolsd_instance_url();
  if (locale2 === "hr") return hr_settings_filetoolsd_instance_url();
  if (locale2 === "tr") return tr_settings_filetoolsd_instance_url();
  if (locale2 === "ja") return ja_settings_filetoolsd_instance_url();
  if (locale2 === "ko") return ko_settings_filetoolsd_instance_url();
  if (locale2 === "el") return el_settings_filetoolsd_instance_url();
  if (locale2 === "id") return id_settings_filetoolsd_instance_url();
  if (locale2 === "zh-Hans") return zh_hans1_settings_filetoolsd_instance_url();
  return zh_hant1_settings_filetoolsd_instance_url();
};
const id_upload_uploader_jpegify = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `jpegify`;
  }
);
const en_upload_uploader_jpegify = () => "upload.uploader.jpegify";
const es_upload_uploader_jpegify = en_upload_uploader_jpegify;
const fr_upload_uploader_jpegify = en_upload_uploader_jpegify;
const de_upload_uploader_jpegify = en_upload_uploader_jpegify;
const it_upload_uploader_jpegify = en_upload_uploader_jpegify;
const hr_upload_uploader_jpegify = en_upload_uploader_jpegify;
const tr_upload_uploader_jpegify = en_upload_uploader_jpegify;
const ja_upload_uploader_jpegify = en_upload_uploader_jpegify;
const ko_upload_uploader_jpegify = en_upload_uploader_jpegify;
const el_upload_uploader_jpegify = en_upload_uploader_jpegify;
const zh_hans1_upload_uploader_jpegify = en_upload_uploader_jpegify;
const zh_hant1_upload_uploader_jpegify = en_upload_uploader_jpegify;
const upload_uploader_jpegify = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("upload_uploader_jpegify", locale2);
  if (locale2 === "en") return en_upload_uploader_jpegify();
  if (locale2 === "es") return es_upload_uploader_jpegify();
  if (locale2 === "fr") return fr_upload_uploader_jpegify();
  if (locale2 === "de") return de_upload_uploader_jpegify();
  if (locale2 === "it") return it_upload_uploader_jpegify();
  if (locale2 === "hr") return hr_upload_uploader_jpegify();
  if (locale2 === "tr") return tr_upload_uploader_jpegify();
  if (locale2 === "ja") return ja_upload_uploader_jpegify();
  if (locale2 === "ko") return ko_upload_uploader_jpegify();
  if (locale2 === "el") return el_upload_uploader_jpegify();
  if (locale2 === "id") return id_upload_uploader_jpegify();
  if (locale2 === "zh-Hans") return zh_hans1_upload_uploader_jpegify();
  return zh_hant1_upload_uploader_jpegify();
};
const id_jpegify_title = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `JPEGIFY RAHASIA!!!`;
  }
);
const en_jpegify_title = () => "jpegify.title";
const es_jpegify_title = en_jpegify_title;
const fr_jpegify_title = en_jpegify_title;
const de_jpegify_title = en_jpegify_title;
const it_jpegify_title = en_jpegify_title;
const hr_jpegify_title = en_jpegify_title;
const tr_jpegify_title = en_jpegify_title;
const ja_jpegify_title = en_jpegify_title;
const ko_jpegify_title = en_jpegify_title;
const el_jpegify_title = en_jpegify_title;
const zh_hans1_jpegify_title = en_jpegify_title;
const zh_hant1_jpegify_title = en_jpegify_title;
const jpegify_title = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("jpegify_title", locale2);
  if (locale2 === "en") return en_jpegify_title();
  if (locale2 === "es") return es_jpegify_title();
  if (locale2 === "fr") return fr_jpegify_title();
  if (locale2 === "de") return de_jpegify_title();
  if (locale2 === "it") return it_jpegify_title();
  if (locale2 === "hr") return hr_jpegify_title();
  if (locale2 === "tr") return tr_jpegify_title();
  if (locale2 === "ja") return ja_jpegify_title();
  if (locale2 === "ko") return ko_jpegify_title();
  if (locale2 === "el") return el_jpegify_title();
  if (locale2 === "id") return id_jpegify_title();
  if (locale2 === "zh-Hans") return zh_hans1_jpegify_title();
  return zh_hant1_jpegify_title();
};
const id_jpegify_subtitle = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `(psst... jangan beri tahu siapa pun!)`;
  }
);
const en_jpegify_subtitle = () => "jpegify.subtitle";
const es_jpegify_subtitle = en_jpegify_subtitle;
const fr_jpegify_subtitle = en_jpegify_subtitle;
const de_jpegify_subtitle = en_jpegify_subtitle;
const it_jpegify_subtitle = en_jpegify_subtitle;
const hr_jpegify_subtitle = en_jpegify_subtitle;
const tr_jpegify_subtitle = en_jpegify_subtitle;
const ja_jpegify_subtitle = en_jpegify_subtitle;
const ko_jpegify_subtitle = en_jpegify_subtitle;
const el_jpegify_subtitle = en_jpegify_subtitle;
const zh_hans1_jpegify_subtitle = en_jpegify_subtitle;
const zh_hant1_jpegify_subtitle = en_jpegify_subtitle;
const jpegify_subtitle = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("jpegify_subtitle", locale2);
  if (locale2 === "en") return en_jpegify_subtitle();
  if (locale2 === "es") return es_jpegify_subtitle();
  if (locale2 === "fr") return fr_jpegify_subtitle();
  if (locale2 === "de") return de_jpegify_subtitle();
  if (locale2 === "it") return it_jpegify_subtitle();
  if (locale2 === "hr") return hr_jpegify_subtitle();
  if (locale2 === "tr") return tr_jpegify_subtitle();
  if (locale2 === "ja") return ja_jpegify_subtitle();
  if (locale2 === "ko") return ko_jpegify_subtitle();
  if (locale2 === "el") return el_jpegify_subtitle();
  if (locale2 === "id") return id_jpegify_subtitle();
  if (locale2 === "zh-Hans") return zh_hans1_jpegify_subtitle();
  return zh_hant1_jpegify_subtitle();
};
const id_jpegify_button = (
  /** @type {(inputs: { compression: NonNullable<unknown> }) => string} */
  (i) => {
    return `JPEGIFY ${i.compression}%!!!`;
  }
);
const en_jpegify_button = () => "jpegify.button";
const es_jpegify_button = en_jpegify_button;
const fr_jpegify_button = en_jpegify_button;
const de_jpegify_button = en_jpegify_button;
const it_jpegify_button = en_jpegify_button;
const hr_jpegify_button = en_jpegify_button;
const tr_jpegify_button = en_jpegify_button;
const ja_jpegify_button = en_jpegify_button;
const ko_jpegify_button = en_jpegify_button;
const el_jpegify_button = en_jpegify_button;
const zh_hans1_jpegify_button = en_jpegify_button;
const zh_hant1_jpegify_button = en_jpegify_button;
const jpegify_button = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("jpegify_button", locale2);
  if (locale2 === "en") return en_jpegify_button();
  if (locale2 === "es") return es_jpegify_button();
  if (locale2 === "fr") return fr_jpegify_button();
  if (locale2 === "de") return de_jpegify_button();
  if (locale2 === "it") return it_jpegify_button();
  if (locale2 === "hr") return hr_jpegify_button();
  if (locale2 === "tr") return tr_jpegify_button();
  if (locale2 === "ja") return ja_jpegify_button();
  if (locale2 === "ko") return ko_jpegify_button();
  if (locale2 === "el") return el_jpegify_button();
  if (locale2 === "id") return id_jpegify_button(inputs);
  if (locale2 === "zh-Hans") return zh_hans1_jpegify_button();
  return zh_hant1_jpegify_button();
};
const id_jpegify_download = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Unduh`;
  }
);
const en_jpegify_download = () => "jpegify.download";
const es_jpegify_download = en_jpegify_download;
const fr_jpegify_download = en_jpegify_download;
const de_jpegify_download = en_jpegify_download;
const it_jpegify_download = en_jpegify_download;
const hr_jpegify_download = en_jpegify_download;
const tr_jpegify_download = en_jpegify_download;
const ja_jpegify_download = en_jpegify_download;
const ko_jpegify_download = en_jpegify_download;
const el_jpegify_download = en_jpegify_download;
const zh_hans1_jpegify_download = en_jpegify_download;
const zh_hant1_jpegify_download = en_jpegify_download;
const jpegify_download = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("jpegify_download", locale2);
  if (locale2 === "en") return en_jpegify_download();
  if (locale2 === "es") return es_jpegify_download();
  if (locale2 === "fr") return fr_jpegify_download();
  if (locale2 === "de") return de_jpegify_download();
  if (locale2 === "it") return it_jpegify_download();
  if (locale2 === "hr") return hr_jpegify_download();
  if (locale2 === "tr") return tr_jpegify_download();
  if (locale2 === "ja") return ja_jpegify_download();
  if (locale2 === "ko") return ko_jpegify_download();
  if (locale2 === "el") return el_jpegify_download();
  if (locale2 === "id") return id_jpegify_download();
  if (locale2 === "zh-Hans") return zh_hans1_jpegify_download();
  return zh_hant1_jpegify_download();
};
const id_jpegify_delete = (
  /** @type {(inputs: {}) => string} */
  () => {
    return `Hapus`;
  }
);
const en_jpegify_delete = () => "jpegify.delete";
const es_jpegify_delete = en_jpegify_delete;
const fr_jpegify_delete = en_jpegify_delete;
const de_jpegify_delete = en_jpegify_delete;
const it_jpegify_delete = en_jpegify_delete;
const hr_jpegify_delete = en_jpegify_delete;
const tr_jpegify_delete = en_jpegify_delete;
const ja_jpegify_delete = en_jpegify_delete;
const ko_jpegify_delete = en_jpegify_delete;
const el_jpegify_delete = en_jpegify_delete;
const zh_hans1_jpegify_delete = en_jpegify_delete;
const zh_hant1_jpegify_delete = en_jpegify_delete;
const jpegify_delete = /* @__NO_SIDE_EFFECTS__ */ (inputs = {}, options = {}) => {
  const locale2 = options.locale ?? getLocale();
  trackMessageCall("jpegify_delete", locale2);
  if (locale2 === "en") return en_jpegify_delete();
  if (locale2 === "es") return es_jpegify_delete();
  if (locale2 === "fr") return fr_jpegify_delete();
  if (locale2 === "de") return de_jpegify_delete();
  if (locale2 === "it") return it_jpegify_delete();
  if (locale2 === "hr") return hr_jpegify_delete();
  if (locale2 === "tr") return tr_jpegify_delete();
  if (locale2 === "ja") return ja_jpegify_delete();
  if (locale2 === "ko") return ko_jpegify_delete();
  if (locale2 === "el") return el_jpegify_delete();
  if (locale2 === "id") return id_jpegify_delete();
  if (locale2 === "zh-Hans") return zh_hans1_jpegify_delete();
  return zh_hant1_jpegify_delete();
};
const m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "about.credits.contact_team": about_credits_contact_team,
  "about.credits.github_contributors": about_credits_github_contributors,
  "about.credits.github_description": about_credits_github_description,
  "about.credits.libraries": about_credits_libraries,
  "about.credits.libraries_description": about_credits_libraries_description,
  "about.credits.no_contributors": about_credits_no_contributors,
  "about.credits.notable_contributors": about_credits_notable_contributors,
  "about.credits.notable_description": about_credits_notable_description,
  "about.credits.roles.designer": about_credits_roles_designer,
  "about.credits.roles.developer": about_credits_roles_developer,
  "about.credits.roles.docker_ci": about_credits_roles_docker_ci,
  "about.credits.roles.former_cofounder": about_credits_roles_former_cofounder,
  "about.credits.roles.lead_developer": about_credits_roles_lead_developer,
  "about.credits.title": about_credits_title,
  "about.donate.custom": about_donate_custom,
  "about.donate.description": about_donate_description,
  "about.donate.donate_amount": about_donate_donate_amount,
  "about.donate.donation_error": about_donate_donation_error,
  "about.donate.donation_notice_official": about_donate_donation_notice_official,
  "about.donate.donation_notice_unofficial": about_donate_donation_notice_unofficial,
  "about.donate.monthly": about_donate_monthly,
  "about.donate.one_time": about_donate_one_time,
  "about.donate.pay_now": about_donate_pay_now,
  "about.donate.payment_error": about_donate_payment_error,
  "about.donate.payment_failed": about_donate_payment_failed,
  "about.donate.thank_you": about_donate_thank_you,
  "about.donate.title": about_donate_title,
  "about.errors.github_contributors": about_errors_github_contributors,
  "about.resources.discord": about_resources_discord,
  "about.resources.email": about_resources_email,
  "about.resources.source": about_resources_source,
  "about.resources.title": about_resources_title,
  "about.sponsors.description": about_sponsors_description,
  "about.sponsors.email_copied": about_sponsors_email_copied,
  "about.sponsors.title": about_sponsors_title,
  "about.title": about_title,
  "about.why.description": about_why_description,
  "about.why.title": about_why_title,
  "convert.archive_file.audio": convert_archive_file_audio,
  "convert.archive_file.detected": convert_archive_file_detected,
  "convert.archive_file.doc": convert_archive_file_doc,
  "convert.archive_file.extract": convert_archive_file_extract,
  "convert.archive_file.extract_error": convert_archive_file_extract_error,
  "convert.archive_file.extracted": convert_archive_file_extracted,
  "convert.archive_file.extracting": convert_archive_file_extracting,
  "convert.archive_file.image": convert_archive_file_image,
  "convert.archive_file.video": convert_archive_file_video,
  "convert.dropdown.audio": convert_dropdown_audio,
  "convert.dropdown.doc": convert_dropdown_doc,
  "convert.dropdown.image": convert_dropdown_image,
  "convert.dropdown.no_formats": convert_dropdown_no_formats,
  "convert.dropdown.no_results": convert_dropdown_no_results,
  "convert.dropdown.placeholder": convert_dropdown_placeholder,
  "convert.dropdown.video": convert_dropdown_video,
  "convert.errors.audio": convert_errors_audio,
  "convert.errors.cant_convert": convert_errors_cant_convert,
  "convert.errors.doc": convert_errors_doc,
  "convert.errors.filetoolsd_details": convert_errors_filetoolsd_details,
  "convert.errors.filetoolsd_details_body": convert_errors_filetoolsd_details_body,
  "convert.errors.filetoolsd_details_close": convert_errors_filetoolsd_details_close,
  "convert.errors.filetoolsd_details_error_message": convert_errors_filetoolsd_details_error_message,
  "convert.errors.filetoolsd_details_footer": convert_errors_filetoolsd_details_footer,
  "convert.errors.filetoolsd_details_from": convert_errors_filetoolsd_details_from,
  "convert.errors.filetoolsd_details_job_id": convert_errors_filetoolsd_details_job_id,
  "convert.errors.filetoolsd_details_to": convert_errors_filetoolsd_details_to,
  "convert.errors.filetoolsd_failed_to_keep": convert_errors_filetoolsd_failed_to_keep,
  "convert.errors.filetoolsd_generic_body": convert_errors_filetoolsd_generic_body,
  "convert.errors.filetoolsd_generic_no": convert_errors_filetoolsd_generic_no,
  "convert.errors.filetoolsd_generic_title": convert_errors_filetoolsd_generic_title,
  "convert.errors.filetoolsd_generic_view": convert_errors_filetoolsd_generic_view,
  "convert.errors.filetoolsd_generic_yes": convert_errors_filetoolsd_generic_yes,
  "convert.errors.filetoolsd_not_found": convert_errors_filetoolsd_not_found,
  "convert.errors.filetoolsd_ratelimit": convert_errors_filetoolsd_ratelimit,
  "convert.errors.filetoolsd_server": convert_errors_filetoolsd_server,
  "convert.errors.format_output_only": convert_errors_format_output_only,
  "convert.errors.image": convert_errors_image,
  "convert.errors.unsupported_format": convert_errors_unsupported_format,
  "convert.errors.worker_downloading": convert_errors_worker_downloading,
  "convert.errors.worker_error": convert_errors_worker_error,
  "convert.errors.worker_timeout": convert_errors_worker_timeout,
  "convert.external_warning.no": convert_external_warning_no,
  "convert.external_warning.text": convert_external_warning_text,
  "convert.external_warning.title": convert_external_warning_title,
  "convert.external_warning.yes": convert_external_warning_yes,
  "convert.large_file_warning": convert_large_file_warning,
  "convert.panel.convert_all": convert_panel_convert_all,
  "convert.panel.download_all": convert_panel_download_all,
  "convert.panel.na": convert_panel_na,
  "convert.panel.remove_all": convert_panel_remove_all,
  "convert.panel.set_all_to": convert_panel_set_all_to,
  "convert.tooltips.audio_file": convert_tooltips_audio_file,
  "convert.tooltips.convert_file": convert_tooltips_convert_file,
  "convert.tooltips.document_file": convert_tooltips_document_file,
  "convert.tooltips.download_file": convert_tooltips_download_file,
  "convert.tooltips.image_file": convert_tooltips_image_file,
  "convert.tooltips.unknown_file": convert_tooltips_unknown_file,
  "convert.tooltips.video_file": convert_tooltips_video_file,
  "footer.copyright": footer_copyright,
  "footer.discord_server": footer_discord_server,
  "footer.privacy_policy": footer_privacy_policy,
  "footer.source_code": footer_source_code,
  "jpegify.button": jpegify_button,
  "jpegify.delete": jpegify_delete,
  "jpegify.download": jpegify_download,
  "jpegify.subtitle": jpegify_subtitle,
  "jpegify.title": jpegify_title,
  "navbar.about": navbar_about,
  "navbar.convert": navbar_convert,
  "navbar.settings": navbar_settings,
  "navbar.toggle_theme": navbar_toggle_theme,
  "navbar.upload": navbar_upload,
  "privacy.analytics.description": privacy_analytics_description,
  "privacy.analytics.title": privacy_analytics_title,
  "privacy.contact.description": privacy_contact_description,
  "privacy.contact.title": privacy_contact_title,
  "privacy.conversion_errors.description": privacy_conversion_errors_description,
  "privacy.conversion_errors.footer": privacy_conversion_errors_footer,
  "privacy.conversion_errors.list_format_from": privacy_conversion_errors_list_format_from,
  "privacy.conversion_errors.list_format_to": privacy_conversion_errors_list_format_to,
  "privacy.conversion_errors.list_job_id": privacy_conversion_errors_list_job_id,
  "privacy.conversion_errors.list_stderr": privacy_conversion_errors_list_stderr,
  "privacy.conversion_errors.list_video": privacy_conversion_errors_list_video,
  "privacy.conversion_errors.title": privacy_conversion_errors_title,
  "privacy.conversions.description": privacy_conversions_description,
  "privacy.conversions.title": privacy_conversions_title,
  "privacy.donations.description": privacy_donations_description,
  "privacy.donations.title": privacy_donations_title,
  "privacy.last_updated": privacy_last_updated,
  "privacy.local_storage.description": privacy_local_storage_description,
  "privacy.local_storage.title": privacy_local_storage_title,
  "privacy.summary.description": privacy_summary_description,
  "privacy.summary.title": privacy_summary_title,
  "privacy.title": privacy_title,
  "settings.appearance.brightness_description": settings_appearance_brightness_description,
  "settings.appearance.brightness_theme": settings_appearance_brightness_theme,
  "settings.appearance.dark": settings_appearance_dark,
  "settings.appearance.disable": settings_appearance_disable,
  "settings.appearance.effect_description": settings_appearance_effect_description,
  "settings.appearance.effect_settings": settings_appearance_effect_settings,
  "settings.appearance.enable": settings_appearance_enable,
  "settings.appearance.light": settings_appearance_light,
  "settings.appearance.title": settings_appearance_title,
  "settings.conversion.advanced_settings": settings_conversion_advanced_settings,
  "settings.conversion.default_format": settings_conversion_default_format,
  "settings.conversion.default_format_audio": settings_conversion_default_format_audio,
  "settings.conversion.default_format_description": settings_conversion_default_format_description,
  "settings.conversion.default_format_disable": settings_conversion_default_format_disable,
  "settings.conversion.default_format_document": settings_conversion_default_format_document,
  "settings.conversion.default_format_enable": settings_conversion_default_format_enable,
  "settings.conversion.default_format_image": settings_conversion_default_format_image,
  "settings.conversion.default_format_video": settings_conversion_default_format_video,
  "settings.conversion.filename_description": settings_conversion_filename_description,
  "settings.conversion.filename_format": settings_conversion_filename_format,
  "settings.conversion.keep": settings_conversion_keep,
  "settings.conversion.metadata": settings_conversion_metadata,
  "settings.conversion.metadata_description": settings_conversion_metadata_description,
  "settings.conversion.placeholder": settings_conversion_placeholder,
  "settings.conversion.quality": settings_conversion_quality,
  "settings.conversion.quality_audio": settings_conversion_quality_audio,
  "settings.conversion.quality_description": settings_conversion_quality_description,
  "settings.conversion.quality_images": settings_conversion_quality_images,
  "settings.conversion.quality_video": settings_conversion_quality_video,
  "settings.conversion.rate": settings_conversion_rate,
  "settings.conversion.remove": settings_conversion_remove,
  "settings.conversion.title": settings_conversion_title,
  "settings.errors.save_failed": settings_errors_save_failed,
  "settings.filetoolsd.auto_instance": settings_filetoolsd_auto_instance,
  "settings.filetoolsd.available": settings_filetoolsd_available,
  "settings.filetoolsd.conversion_speed": settings_filetoolsd_conversion_speed,
  "settings.filetoolsd.custom_instance": settings_filetoolsd_custom_instance,
  "settings.filetoolsd.description": settings_filetoolsd_description,
  "settings.filetoolsd.eu_instance": settings_filetoolsd_eu_instance,
  "settings.filetoolsd.hosting_info": settings_filetoolsd_hosting_info,
  "settings.filetoolsd.instance": settings_filetoolsd_instance,
  "settings.filetoolsd.instance_url": settings_filetoolsd_instance_url,
  "settings.filetoolsd.loading": settings_filetoolsd_loading,
  "settings.filetoolsd.speed_description": settings_filetoolsd_speed_description,
  "settings.filetoolsd.speeds.fast": settings_filetoolsd_speeds_fast,
  "settings.filetoolsd.speeds.medium": settings_filetoolsd_speeds_medium,
  "settings.filetoolsd.speeds.slow": settings_filetoolsd_speeds_slow,
  "settings.filetoolsd.speeds.slower": settings_filetoolsd_speeds_slower,
  "settings.filetoolsd.speeds.ultra_fast": settings_filetoolsd_speeds_ultra_fast,
  "settings.filetoolsd.speeds.very_slow": settings_filetoolsd_speeds_very_slow,
  "settings.filetoolsd.status": settings_filetoolsd_status,
  "settings.filetoolsd.title": settings_filetoolsd_title,
  "settings.filetoolsd.unavailable": settings_filetoolsd_unavailable,
  "settings.filetoolsd.url_placeholder": settings_filetoolsd_url_placeholder,
  "settings.filetoolsd.us_instance": settings_filetoolsd_us_instance,
  "settings.language.description": settings_language_description,
  "settings.language.title": settings_language_title,
  "settings.privacy.all_data_clear_error": settings_privacy_all_data_clear_error,
  "settings.privacy.all_data_cleared": settings_privacy_all_data_cleared,
  "settings.privacy.cache_clear_error": settings_privacy_cache_clear_error,
  "settings.privacy.cache_cleared": settings_privacy_cache_cleared,
  "settings.privacy.cache_description": settings_privacy_cache_description,
  "settings.privacy.cache_title": settings_privacy_cache_title,
  "settings.privacy.clear_all_data": settings_privacy_clear_all_data,
  "settings.privacy.clear_all_data_cancel": settings_privacy_clear_all_data_cancel,
  "settings.privacy.clear_all_data_confirm": settings_privacy_clear_all_data_confirm,
  "settings.privacy.clear_all_data_confirm_title": settings_privacy_clear_all_data_confirm_title,
  "settings.privacy.clear_cache": settings_privacy_clear_cache,
  "settings.privacy.files_cached": settings_privacy_files_cached,
  "settings.privacy.files_cached_label": settings_privacy_files_cached_label,
  "settings.privacy.loading_cache": settings_privacy_loading_cache,
  "settings.privacy.opt_in": settings_privacy_opt_in,
  "settings.privacy.opt_out": settings_privacy_opt_out,
  "settings.privacy.plausible_description": settings_privacy_plausible_description,
  "settings.privacy.plausible_title": settings_privacy_plausible_title,
  "settings.privacy.refresh_cache": settings_privacy_refresh_cache,
  "settings.privacy.site_data_description": settings_privacy_site_data_description,
  "settings.privacy.site_data_title": settings_privacy_site_data_title,
  "settings.privacy.title": settings_privacy_title,
  "settings.privacy.total_size": settings_privacy_total_size,
  "settings.title": settings_title,
  "upload.cards.audio": upload_cards_audio,
  "upload.cards.documents": upload_cards_documents,
  "upload.cards.images": upload_cards_images,
  "upload.cards.local_supported": upload_cards_local_supported,
  "upload.cards.status.downloading": upload_cards_status_downloading,
  "upload.cards.status.initializing": upload_cards_status_initializing,
  "upload.cards.status.not_initialized": upload_cards_status_not_initialized,
  "upload.cards.status.not_ready": upload_cards_status_not_ready,
  "upload.cards.status.ready": upload_cards_status_ready,
  "upload.cards.status.text": upload_cards_status_text,
  "upload.cards.status.unknown": upload_cards_status_unknown,
  "upload.cards.supported_formats": upload_cards_supported_formats,
  "upload.cards.title": upload_cards_title,
  "upload.cards.video": upload_cards_video,
  "upload.cards.video_server_processing": upload_cards_video_server_processing,
  "upload.subtitle": upload_subtitle,
  "upload.title": upload_title,
  "upload.tooltip.direction_input": upload_tooltip_direction_input,
  "upload.tooltip.direction_output": upload_tooltip_direction_output,
  "upload.tooltip.partial_support": upload_tooltip_partial_support,
  "upload.tooltip.video_server_processing": upload_tooltip_video_server_processing,
  "upload.uploader.convert": upload_uploader_convert,
  "upload.uploader.jpegify": upload_uploader_jpegify,
  "upload.uploader.text": upload_uploader_text,
  "workers.errors.cancel": workers_errors_cancel,
  "workers.errors.ffmpeg": workers_errors_ffmpeg,
  "workers.errors.file_too_large": workers_errors_file_too_large,
  "workers.errors.general": workers_errors_general,
  "workers.errors.invalid_rate": workers_errors_invalid_rate,
  "workers.errors.magick": workers_errors_magick,
  "workers.errors.no_audio": workers_errors_no_audio,
  "workers.errors.pandoc": workers_errors_pandoc
}, Symbol.toStringTag, { value: "Module" }));
const durationDefault = (disappearing) => ({ enter: 300, stay: disappearing ? 5e3 : 864e5, exit: 500 });
class ToastState {
  pId = 0;
  pToasts = [];
  add(toast) {
    this.pToasts.push(toast);
  }
  remove(id) {
    this.pToasts = this.pToasts.filter((toast) => toast.id !== id);
  }
  id() {
    return this.pId++;
  }
  get toasts() {
    return this.pToasts;
  }
}
class ToastManager {
  static pToasts = new ToastState();
  static add(toastOptions) {
    const id = this.pToasts.id();
    const {
      type = "info",
      disappearing = true,
      durations: d = durationDefault(toastOptions.disappearing ?? true)
    } = toastOptions;
    const durations = { ...durationDefault(disappearing), ...d };
    if (typeof toastOptions.message === "string") {
      const newToast = {
        id,
        type,
        message: toastOptions.message,
        disappearing,
        durations
      };
      this.pToasts.add(newToast);
    } else {
      const newToast = {
        id,
        type,
        message: toastOptions.message,
        disappearing,
        durations,
        additional: toastOptions.additional
      };
      this.pToasts.add(newToast);
    }
    setTimeout(
      () => {
        this.remove(id);
      },
      durations.enter + durations.stay + durations.exit
    );
    return id;
  }
  static remove(id) {
    this.pToasts.remove(id);
  }
  static get toasts() {
    return this.pToasts.toasts;
  }
}
class VertFile {
  id = Math.random().toString(36).slice(2, 8);
  file;
  get from() {
    return ("." + this.file.name.split(".").pop() || "").toLowerCase();
  }
  get name() {
    return this.file.name;
  }
  progress = 0;
  result = null;
  to = "";
  blobUrl;
  processing = false;
  cancelled = false;
  converters = [];
  isZip = () => this.from === ".zip";
  findConverters(supportedFormats = [this.from]) {
    const converter = this.converters.filter((converter2) => converter2.formatStrings().map((f) => supportedFormats.includes(f))).sort(byNative(this.from));
    return converter;
  }
  findConverter() {
    if (this.isZip()) return this.converters[0];
    const converter = this.converters.find((converter2) => {
      if (!converter2.formatStrings().includes(this.from) || !converter2.formatStrings().includes(this.to)) {
        return false;
      }
      const theirFrom = converter2.supportedFormats.find((f) => f.name === this.from);
      const theirTo = converter2.supportedFormats.find((f) => f.name === this.to);
      if (!theirFrom || !theirTo) return false;
      if (!theirFrom.isNative && !theirTo.isNative) return false;
      return true;
    });
    return converter;
  }
  isLarge() {
    return this.file.size > MAX_ARRAY_BUFFER_SIZE;
  }
  supportsStreaming() {
    const converter = this.findConverter();
    return converter?.name === "filetoolsd";
  }
  constructor(file, to, blobUrl) {
    const ext = file.name.split(".").pop();
    const newFile = new File([file.slice(0, file.size, file.type)], `${file.name.split(".").slice(0, -1).join(".")}.${ext?.toLowerCase()}`);
    this.file = newFile;
    this.to = to.startsWith(".") ? to : `.${to}`;
    this.converters = converters.filter((c) => c.formatStrings().includes(this.from));
    this.convert = this.convert.bind(this);
    this.download = this.download.bind(this);
    this.blobUrl = blobUrl;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async convert(...args) {
    if (!this.converters.length) throw new Error("No converters found");
    const converter = this.findConverter();
    if (!converter) throw new Error("No converter found");
    this.result = null;
    this.progress = 0;
    this.processing = true;
    this.cancelled = false;
    let res;
    try {
      res = this.isZip() ? await this.convertZip(converter) : await converter.convert(this, this.to, ...args);
      this.result = res;
    } catch (err) {
      if (!this.cancelled) this.toastErr(err);
      this.result = null;
    }
    this.processing = false;
    return res;
  }
  async convertZip(converter) {
    const { extractZip, createZip } = await import("./zip.js");
    const { default: PQueue2 } = await import("p-queue");
    const entries = await extractZip(this.file);
    const totalFiles = entries.length;
    const fileProgress = new Array(totalFiles).fill(0);
    const convertedFiles = [];
    const queue = new PQueue2({ concurrency: navigator.hardwareConcurrency || 4 });
    const updateProgress = () => {
      const totalProgress = fileProgress.reduce((sum, p) => sum + p, 0);
      this.progress = Math.round(totalProgress / totalFiles);
    };
    await queue.addAll(entries.map(({ filename, data }, index) => async () => {
      if (this.cancelled) {
        throw new Error("Conversion cancelled");
      }
      const file = new File([new Uint8Array(data)], filename, { type: "application/octet-stream" });
      const tempVFile = new VertFile(file, this.to);
      tempVFile.converters = [converter];
      if (converter.reportsProgress) {
        const progressInterval = setInterval(
          () => {
            fileProgress[index] = tempVFile.progress;
            updateProgress();
          },
          100
        );
        try {
          const converted = await converter.convert(tempVFile, this.to);
          let outputExt = this.to;
          if (!outputExt.startsWith(".")) outputExt = `.${outputExt}`;
          const baseName = filename.replace(/\.[^/.]+$/, "");
          const outputFilename2 = `${baseName}${outputExt}`;
          convertedFiles[index] = new File([await converted.file.arrayBuffer()], outputFilename2);
          fileProgress[index] = 100;
          updateProgress();
        } finally {
          clearInterval(progressInterval);
        }
      } else {
        const converted = await converter.convert(tempVFile, this.to);
        let outputExt = this.to;
        if (!outputExt.startsWith(".")) outputExt = `.${outputExt}`;
        const baseName = filename.replace(/\.[^/.]+$/, "");
        const outputFilename2 = `${baseName}${outputExt}`;
        convertedFiles[index] = new File([await converted.file.arrayBuffer()], outputFilename2);
        fileProgress[index] = 100;
        updateProgress();
      }
    }));
    const resultArray = await createZip(convertedFiles);
    const outputFilename = this.file.name.replace(/\.[^/.]+$/, ".zip");
    const resultFile = new File([new Uint8Array(resultArray)], outputFilename);
    return new VertFile(resultFile, ".zip");
  }
  async cancel() {
    if (!this.processing) return;
    const converter = this.findConverter();
    if (!converter) throw new Error("No converter found");
    this.cancelled = true;
    try {
      await converter.cancel(this);
      this.processing = false;
      this.result = null;
    } catch (err) {
      this.toastErr(err);
    }
  }
  toastErr(err) {
    const castedErr = err;
    let toastMsg = "";
    if (typeof castedErr === "string") {
      toastMsg = castedErr;
    } else if (castedErr instanceof Error) {
      toastMsg = castedErr.message;
    } else {
      toastMsg = castedErr;
    }
    if (typeof toastMsg === "string") {
      ToastManager.add({
        type: "error",
        message: /* @__PURE__ */ workers_errors_general({ file: this.file.name, message: toastMsg })
      });
    } else {
      ToastManager.add({
        type: "error",
        message: toastMsg.component,
        additional: toastMsg.additional
      });
    }
  }
  async download() {
    if (!this.result) throw new Error("No result found");
    let to = this.result.to;
    if (!to.startsWith(".")) to = `.${to}`;
    const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
    const filenameFormat = settings.filenameFormat || "FileTools_%name%";
    const format = (name) => {
      const date = /* @__PURE__ */ (/* @__PURE__ */ new Date()).toISOString();
      const baseName = this.file.name.replace(/\.[^/.]+$/, "");
      const originalExtension = this.file.name.split(".").pop();
      return name.replace(/%date%/g, date).replace(/%name%/g, baseName).replace(/%extension%/g, originalExtension);
    };
    const blob = URL.createObjectURL(new Blob([await this.result.file.arrayBuffer()], {
      // type: to.slice(1),
      type: "application/octet-stream"
      // use generic type to prevent browsers changing extension
    }));
    const a = document.createElement("a");
    a.href = blob;
    a.download = `${format(filenameFormat)}${to}`;
    a.target = "_blank";
    a.style.display = "none";
    a.click();
    URL.revokeObjectURL(blob);
    a.remove();
  }
  hash() {
    const stream = this.file.stream();
    const hashes = /* @__PURE__ */ new Set();
    const reader = stream.getReader();
    return new Promise((resolve, reject) => {
      function processChunk() {
        reader.read().then(({ done, value }) => {
          if (done) {
            const combinedHash = Array.from(hashes).sort().join("");
            resolve(combinedHash);
            return;
          }
          crypto.subtle.digest("SHA-256", value).then((hashBuffer) => {
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
            hashes.add(hashHex);
            processChunk();
          }).catch((err) => {
            reject(err);
          });
        });
      }
      processChunk();
    });
  }
}
class FormatInfo {
  constructor(name, fromSupported = true, toSupported = true, isNative = true) {
    this.fromSupported = fromSupported;
    this.toSupported = toSupported;
    this.isNative = isNative;
    this.name = name;
    if (!this.name.startsWith(".")) {
      this.name = `.${this.name}`;
    }
    if (!this.fromSupported && !this.toSupported) {
      throw new Error("Format must support at least one direction");
    }
  }
  name;
}
class Converter {
  constructor(timeout = 10) {
    this.timeout = timeout;
    this.startTimeout();
  }
  /**
   * The public name of the converter.
   */
  name = "Unknown";
  /**
   * List of supported formats.
   */
  supportedFormats = [];
  status = "not-ready";
  reportsProgress = false;
  timeoutId;
  startTimeout() {
    this.timeoutId = setTimeout(
      () => {
        if (this.status !== "ready") this.status = "not-ready";
      },
      this.timeout * 1e3
    );
  }
  clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = void 0;
    }
  }
  /**
   * Convert a file to a different format.
   * @param input The input file.
   * @param to The format to convert to. Includes the dot.
   */
  async convert(input, to, ...args) {
    throw new Error("Not implemented");
  }
  /**
   * Cancel the active conversion of a file.
   * @param input The input file.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async cancel(input) {
    throw new Error("Not implemented");
  }
  async valid() {
    return true;
  }
  formatStrings(predicate) {
    if (predicate) {
      return this.supportedFormats.filter(predicate).map((f) => f.name);
    }
    return this.supportedFormats.map((f) => f.name);
  }
}
const log = (prefix, ...args) => {
  const prefixes = Array.isArray(prefix) ? prefix : [prefix];
  return console.log(prefixes.map((p) => `[${p}]`).join(" "), ...args);
};
const error = (prefix, ...args) => {
  const prefixes = Array.isArray(prefix) ? prefix : [prefix];
  return console.error(prefixes.map((p) => `[${p}]`).join(" "), ...args);
};
const ip = async () => {
  try {
    if (browser) ;
    const res = await fetch("https://ipapi.co/json/").then((r) => r.json());
    if (browser) ;
    return res;
  } catch (_) {
    return {
      ip: "127.0.0.1",
      asn: "AS0",
      city: "Localhost",
      continent_code: "NA",
      country: "US",
      country_calling_code: "+1",
      country_capital: "Washington",
      country_code: "US",
      country_code_iso3: "USA",
      country_name: "United States",
      country_population: 0,
      currency: "USD",
      currency_name: "Dollar",
      languages: "en-US,es-US,haw,fr",
      latitude: 0,
      longitude: 0,
      network: "Unknown",
      postal: "00000",
      region: "Local",
      region_code: "LOC",
      country_area: 0,
      timezone: "America/New_York",
      utc_offset: "-0500",
      version: "IPv4",
      in_eu: false,
      org: "Localhost",
      country_tld: ".us"
    };
  }
};
const LOCATIONS = [
  {
    latitude: 49.0976,
    longitude: 12.4869,
    url: "https://eu.filetoolsd.filetools.app"
  },
  {
    latitude: 47.6587,
    longitude: -117.426,
    url: "https://usa.filetoolsd.filetools.app"
  }
];
const toRad = (value) => value * Math.PI / 180;
const haversine = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};
class FileToolsDInstance {
  static instance = new FileToolsDInstance();
  cachedIp = null;
  inner = { type: "auto" };
  save() {
    localStorage.setItem("filetoolsdInstance", JSON.stringify(this.inner));
  }
  load() {
    const ls = localStorage.getItem("filetoolsdInstance");
    if (!ls) {
      {
        this.inner = { type: "custom" };
        return;
      }
    }
    if (!ls) return;
    const inner = JSON.parse(ls);
    this.inner = { ...this.inner, ...inner };
  }
  innerData() {
    return this.inner;
  }
  set(inner) {
    this.inner = inner;
    this.save();
  }
  async url() {
    const reachable = async (url) => {
      try {
        const res = await fetch(url + "/api/version", { method: "GET", cache: "no-store" });
        return res.ok;
      } catch {
        return false;
      }
    };
    switch (this.inner.type) {
      case "auto": {
        if (!this.cachedIp) this.cachedIp = await ip();
        const ipInfo = this.cachedIp;
        const primary = this.geographicallyOptimalInstance(ipInfo);
        if (await reachable(primary)) return primary;
        for (const location of LOCATIONS) {
          if (location.url === primary) continue;
          if (await reachable(location.url)) return location.url;
        }
        return Settings.instance.settings.filetoolsdURL;
      }
      case "eu": {
        return "https://eu.filetoolsd.filetools.app";
      }
      case "us": {
        return "https://usa.filetoolsd.filetools.app";
      }
      case "custom": {
        return Settings.instance.settings.filetoolsdURL;
      }
    }
  }
  geographicallyOptimalInstance(ip2) {
    let bestLocation = LOCATIONS[0];
    let bestDistance = haversine(ip2.latitude, ip2.longitude, bestLocation.latitude, bestLocation.longitude);
    for (let i = 1; i < LOCATIONS.length; i++) {
      const location = LOCATIONS[i];
      const distance = haversine(ip2.latitude, ip2.longitude, location.latitude, location.longitude);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestLocation = location;
      }
    }
    return bestLocation.url;
  }
}
/**
 * @license lucide-svelte v0.554.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  $$renderer.component(($$renderer2) => {
    let name = fallback($$props["name"], void 0);
    let color = fallback($$props["color"], "currentColor");
    let size = fallback($$props["size"], 24);
    let strokeWidth = fallback($$props["strokeWidth"], 2);
    let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
    let iconNode = fallback($$props["iconNode"], () => [], true);
    const mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && array.indexOf(className) === index;
    }).join(" ");
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...$$restProps,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]--><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></svg>`);
    bind_props($$props, {
      name,
      color,
      size,
      strokeWidth,
      absoluteStrokeWidth,
      iconNode
    });
  });
}
const dialogs = writable([]);
let dialogId = 0;
function addDialog(title, message, buttons, type, additional) {
  const id = dialogId++;
  if (typeof message === "string") {
    const newDialog = {
      id,
      title,
      message,
      buttons,
      type
    };
    dialogs.update((currentDialogs) => [...currentDialogs, newDialog]);
  } else {
    const newDialog = {
      id,
      title,
      message,
      buttons,
      type,
      additional
    };
    dialogs.update((currentDialogs) => [...currentDialogs, newDialog]);
  }
  return id;
}
class Settings {
  static instance = new Settings();
  settings = {
    filenameFormat: "FileTools_%name%",
    defaultFormat: {
      image: ".png",
      video: ".mp4",
      audio: ".mp3",
      document: ".docx"
    },
    useDefaultFormat: false,
    metadata: true,
    plausible: true,
    filetoolsdURL: PUB_FILETOOLSD_URL,
    filetoolsdSpeed: "slow",
    magickQuality: 100,
    ffmpegQuality: "auto",
    ffmpegSampleRate: "auto",
    ffmpegCustomSampleRate: 44100,
    filetoolsdBlockedHashes: /* @__PURE__ */ new Map()
  };
  save() {
    localStorage.setItem("settings", JSON.stringify(this.settings));
    FileToolsDInstance.instance.save();
  }
  load() {
    FileToolsDInstance.instance.load();
    const ls = localStorage.getItem("settings");
    if (!ls) return;
    const settings = JSON.parse(ls);
    const filetoolsdBlockedHashes = new Map(Object.entries(settings.filetoolsdBlockedHashes || this.settings.filetoolsdBlockedHashes));
    settings.filetoolsdBlockedHashes = filetoolsdBlockedHashes;
    this.settings = { ...this.settings, ...settings };
  }
}
const videoFormats = [
  "mkv",
  "mp4",
  "avi",
  "mov",
  "webm",
  "ts",
  "mts",
  "m2ts",
  "wmv",
  "mpg",
  "mpeg",
  "flv",
  "f4v",
  "vob",
  "m4v",
  "3gp",
  "3g2",
  "mxf",
  "ogv",
  "rm",
  "rmvb",
  "divx"
];
class FFmpegConverter extends Converter {
  ffmpeg = null;
  name = "ffmpeg";
  ready = false;
  activeConversions = /* @__PURE__ */ new Map();
  supportedFormats = [
    new FormatInfo("mp3", true, true),
    new FormatInfo("wav", true, true),
    new FormatInfo("flac", true, true),
    new FormatInfo("ogg", true, true),
    new FormatInfo("mogg", true, false),
    new FormatInfo("oga", true, true),
    new FormatInfo("opus", true, true),
    new FormatInfo("aac", true, true),
    new FormatInfo("alac", true, true),
    // outputted as m4a
    new FormatInfo("m4a", true, true),
    // can be alac
    new FormatInfo("caf", true, false),
    // can be alac
    new FormatInfo("wma", true, true),
    new FormatInfo("amr", true, true),
    new FormatInfo("ac3", true, true),
    new FormatInfo("aiff", true, true),
    new FormatInfo("aifc", true, true),
    new FormatInfo("aif", true, true),
    new FormatInfo("mp1", true, false),
    new FormatInfo("mp2", true, true),
    new FormatInfo("mpc", true, false),
    // unknown if it works, can't find sample file but ffmpeg should support i think?
    //new FormatInfo("raw", true, false), // usually pcm
    new FormatInfo("dsd", true, false),
    // dsd
    new FormatInfo("dsf", true, false),
    // dsd
    new FormatInfo("dff", true, false),
    // dsd
    new FormatInfo("mqa", true, false),
    new FormatInfo("au", true, true),
    new FormatInfo("m4b", true, true),
    new FormatInfo("voc", true, true),
    new FormatInfo("weba", true, true),
    ...videoFormats.map((f) => new FormatInfo(f, true, true, false))
  ];
  reportsProgress = true;
  constructor() {
    super();
    log(["converters", this.name], `created converter`);
    return;
  }
  async convert(input, to) {
    if (!to.startsWith(".")) to = `.${to}`;
    const isAlac = to === ".alac";
    if (isAlac) to = ".m4a";
    let conversionError = null;
    const ffmpeg = await this.setupFFmpeg(input);
    this.activeConversions.set(input.id, ffmpeg);
    const errorListener = (l) => {
      const msg = l.message;
      if (msg.includes("Specified sample rate") && msg.includes("is not supported")) {
        const rate = Settings.instance.settings.ffmpegCustomSampleRate;
        conversionError = /* @__PURE__ */ workers_errors_invalid_rate({ rate });
      } else if (msg.includes("Stream map '0:a:0' matches no streams.")) {
        conversionError = /* @__PURE__ */ workers_errors_no_audio();
      } else if (msg.includes("Error initializing output stream") || msg.includes("Error while opening encoder") || msg.includes("Error while opening decoder") || msg.includes("Error") && msg.includes("stream") || msg.includes("Conversion failed!")) {
        if (!conversionError) conversionError = msg;
      }
    };
    ffmpeg.on("log", errorListener);
    const buf = new Uint8Array(await input.file.arrayBuffer());
    await ffmpeg.writeFile("input", buf);
    log(["converters", this.name], `wrote ${input.name} to ffmpeg virtual fs`);
    const command = await this.buildConversionCommand(ffmpeg, input, to, isAlac);
    log(["converters", this.name], `FFmpeg command: ${command.join(" ")}`);
    await ffmpeg.exec(command);
    log(["converters", this.name], "executed ffmpeg command");
    if (conversionError) {
      ffmpeg.off("log", errorListener);
      ffmpeg.terminate();
      throw new Error(conversionError);
    }
    const output = await ffmpeg.readFile("output" + to);
    if (!output || output.length === 0) {
      ffmpeg.off("log", errorListener);
      ffmpeg.terminate();
      throw new Error("empty file returned");
    }
    const outputFileName = input.name.split(".").slice(0, -1).join(".") + to;
    log(["converters", this.name], `read ${outputFileName} from ffmpeg virtual fs`);
    ffmpeg.off("log", errorListener);
    ffmpeg.terminate();
    const outBuf = new Uint8Array(output).buffer.slice(0);
    return new VertFile(new File([outBuf], outputFileName), to);
  }
  async cancel(input) {
    const ffmpeg = this.activeConversions.get(input.id);
    if (!ffmpeg) {
      error(["converters", this.name], `no active conversion found for file ${input.name}`);
      return;
    }
    log(["converters", this.name], `cancelling conversion for file ${input.name}`);
    ffmpeg.terminate();
    this.activeConversions.delete(input.id);
  }
  async setupFFmpeg(input) {
    const ffmpeg = new FFmpeg();
    ffmpeg.on("progress", (progress) => {
      input.progress = progress.progress * 100;
    });
    ffmpeg.on("log", (l) => {
      log(["converters", this.name], l.message);
    });
    const baseURL = "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/esm";
    await ffmpeg.load({
      coreURL: `${baseURL}/ffmpeg-core.js`,
      wasmURL: `${baseURL}/ffmpeg-core.wasm`
    });
    return ffmpeg;
  }
  async detectAudioBitrate(ffmpeg) {
    const args = [
      "-v",
      "quiet",
      "-select_streams",
      "a:0",
      "-show_entries",
      "stream=bit_rate",
      "-of",
      "default=noprint_wrappers=1:nokey=1",
      "input"
    ];
    try {
      let bitrate = null;
      const bitrateListener = (event) => {
        if (bitrate !== null) return;
        const n = parseInt(event.message.trim(), 10);
        if (!n) return;
        bitrate = Math.round(n / 1e3);
        log(["converters", this.name], `Detected stream audio bitrate: ${bitrate} kbps`);
      };
      ffmpeg.on("log", bitrateListener);
      try {
        await ffmpeg.ffprobe.call(ffmpeg, args);
        return bitrate;
      } finally {
        ffmpeg.off("log", bitrateListener);
      }
    } catch {
      return null;
    }
  }
  async detectAudioSampleRate(ffmpeg) {
    const args = [
      "-v",
      "quiet",
      "-select_streams",
      "a:0",
      "-show_entries",
      "stream=sample_rate",
      "-of",
      "default=noprint_wrappers=1:nokey=1",
      "input"
    ];
    try {
      let sampleRate = null;
      const sampleRateListener = (event) => {
        if (sampleRate !== null) return;
        const n = parseInt(event.message.trim(), 10);
        if (!n) return;
        sampleRate = n;
        log(["converters", this.name], `Detected stream audio sample rate: ${sampleRate} Hz`);
      };
      ffmpeg.on("log", sampleRateListener);
      try {
        await ffmpeg.ffprobe.call(ffmpeg, args);
        return sampleRate;
      } finally {
        ffmpeg.off("log", sampleRateListener);
      }
    } catch {
      return null;
    }
  }
  async buildConversionCommand(ffmpeg, input, to, isAlac = false) {
    const inputFormat = input.from.slice(1);
    const outputFormat = to.slice(1);
    const lossless = ["flac", "m4a", "caf", "alac", "wav", "dsd", "dsf", "dff"];
    const userSetting = Settings.instance.settings.ffmpegQuality;
    const userSampleRate = Settings.instance.settings.ffmpegSampleRate;
    const customSampleRate = Settings.instance.settings.ffmpegCustomSampleRate ?? 44100;
    const keepMetadata = Settings.instance.settings.metadata;
    let audioBitrateArgs = [];
    let sampleRateArgs = [];
    let metadataArgs = [];
    log(["converters", this.name], `keep metadata: ${keepMetadata}`);
    if (!keepMetadata) {
      metadataArgs = [
        "-map_metadata",
        // remove metadata
        "-1",
        "-map_chapters",
        // remove chapters
        "-1",
        "-map",
        // remove cover art
        "a"
      ];
    }
    const isLosslessToLossy = lossless.includes(inputFormat) && !lossless.includes(outputFormat);
    if (userSetting !== "auto") {
      audioBitrateArgs = ["-b:a", `${userSetting}k`];
      log(["converters", this.name], `using user setting for audio bitrate: ${userSetting}`);
    } else {
      if (isLosslessToLossy) {
        audioBitrateArgs = ["-b:a", "128k"];
        log(["converters", this.name], `converting from lossless to lossy, using default audio bitrate: 128k`);
      } else {
        const inputBitrate = await this.detectAudioBitrate(ffmpeg);
        audioBitrateArgs = inputBitrate ? ["-b:a", `${inputBitrate}k`] : [];
        log(["converters", this.name], `using detected audio bitrate: ${inputBitrate}k`);
      }
    }
    if (userSampleRate !== "auto") {
      const rate = userSampleRate === "custom" ? customSampleRate.toString() : userSampleRate;
      sampleRateArgs = ["-ar", rate];
      log(["converters", this.name], `using user setting for sample rate: ${rate}`);
    } else {
      if (isLosslessToLossy) {
        const defaultRate = to === ".opus" ? "48000" : "44100";
        log(["converters", this.name], `converting from lossless to lossy, using default sample rate: ${defaultRate}Hz`);
        sampleRateArgs = ["-ar", defaultRate];
      } else {
        let inputSampleRate = await this.detectAudioSampleRate(ffmpeg);
        if (to === ".opus" && inputSampleRate === 44100) {
          log(["converters", this.name], "conversion to opus with 44100Hz sample rate detected, adjusting to 48000Hz");
          inputSampleRate = 48e3;
        }
        sampleRateArgs = inputSampleRate ? ["-ar", inputSampleRate.toString()] : [];
        log(["converters", this.name], `using detected audio sample rate: ${inputSampleRate}Hz`);
      }
    }
    if (videoFormats.includes(inputFormat)) {
      log(["converters", this.name], `Converting video ${input.from} to audio ${to}`);
      return [
        "-i",
        "input",
        "-map",
        "0:a:0",
        ...metadataArgs,
        ...audioBitrateArgs,
        ...sampleRateArgs,
        "output" + to
      ];
    }
    if (videoFormats.includes(outputFormat)) {
      log(["converters", this.name], `Converting audio ${input.from} to video ${to}`);
      const hasAlbumArt = keepMetadata ? await this.extractAlbumArt(ffmpeg) : false;
      const codecArgs = toArgs(to, isAlac);
      if (hasAlbumArt) {
        log(["converters", this.name], "Using album art as video background");
        return [
          "-loop",
          "1",
          "-i",
          "cover.jpg",
          "-i",
          "input",
          "-vf",
          "scale=trunc(iw/2)*2:trunc(ih/2)*2",
          "-shortest",
          "-pix_fmt",
          "yuv420p",
          "-r",
          "1",
          ...codecArgs,
          ...metadataArgs,
          ...audioBitrateArgs,
          ...sampleRateArgs,
          "output" + to
        ];
      } else {
        log(["converters", this.name], "Using solid color background");
        return [
          "-f",
          "lavfi",
          "-i",
          "color=c=black:s=512x512:rate=1",
          "-i",
          "input",
          "-shortest",
          "-pix_fmt",
          "yuv420p",
          "-r",
          "1",
          ...toArgs(to, isAlac),
          ...metadataArgs,
          ...audioBitrateArgs,
          ...sampleRateArgs,
          "output" + to
        ];
      }
    }
    log(["converters", this.name], `Converting audio ${input.from} to audio ${to}`);
    const { audio: audioCodec } = getCodecs(to, isAlac);
    return [
      "-i",
      "input",
      "-c:a",
      audioCodec,
      ...metadataArgs,
      ...audioBitrateArgs,
      ...sampleRateArgs,
      "output" + to
    ];
  }
  async extractAlbumArt(ffmpeg) {
    if (await this.tryExtractAlbumArt(ffmpeg, [
      "-i",
      "input",
      "-map",
      "0:1",
      "-c:v",
      "copy",
      "-update",
      "1",
      "cover.jpg"
    ])) {
      log(["converters", this.name], "Successfully extracted album art from stream 0:1");
      return true;
    }
    if (await this.tryExtractAlbumArt(ffmpeg, [
      "-i",
      "input",
      "-an",
      "-c:v",
      "copy",
      "-update",
      "1",
      "cover.jpg"
    ])) {
      log(["converters", this.name], "Successfully extracted album art (fallback method)");
      return true;
    }
    log(["converters", this.name], "No album art found, will create solid color background");
    return false;
  }
  async tryExtractAlbumArt(ffmpeg, command) {
    try {
      await ffmpeg.exec(command);
      const coverData = await ffmpeg.readFile("cover.jpg");
      return !!(coverData && coverData.length > 0);
    } catch {
      return false;
    }
  }
}
const toArgs = (ext, isAlac = false) => {
  const codecs = getCodecs(ext, isAlac);
  const args = ["-c:v", codecs.video];
  switch (codecs.video) {
    case "libx264": {
      args.push("-preset", "ultrafast", "-crf", "18", "-tune", "stillimage");
      break;
    }
    case "libvpx": {
      args.push("-c:v", "libvpx-vp9");
      break;
    }
    case "mpeg2video": {
      if (ext === ".mxf") args.push("-ar", "48000");
      break;
    }
  }
  args.push("-c:a", codecs.audio);
  if (codecs.audio === "aac") args.push("-strict", "experimental");
  if (ext === ".divx") args.unshift("-f", "avi");
  if (ext === ".mxf") args.push("-strict", "unofficial");
  return args;
};
const getCodecs = (ext, isAlac = false) => {
  switch (ext) {
    case ".mp4":
    case ".mkv":
    case ".mov":
    case ".mts":
    case ".ts":
    case ".m2ts":
    case ".flv":
    case ".f4v":
    case ".m4v":
    case ".3gp":
    case ".3g2":
      return { video: "libx264", audio: "aac" };
    case ".wmv":
      return { video: "wmv2", audio: "wmav2" };
    case ".webm":
    case ".ogv":
      return {
        video: ext === ".webm" ? "libvpx" : "libtheora",
        audio: "libvorbis"
      };
    case ".avi":
    case ".divx":
      return { video: "mpeg4", audio: "libmp3lame" };
    case ".mpg":
    case ".mpeg":
    case ".vob":
      return { video: "mpeg2video", audio: "mp2" };
    case ".mxf":
      return { video: "mpeg2video", audio: "pcm_s16le" };
    case ".mp3":
      return { video: "libx264", audio: "libmp3lame" };
    case ".flac":
      return { video: "libx264", audio: "flac" };
    case ".wav":
      return { video: "libx264", audio: "pcm_s16le" };
    case ".ogg":
    case ".oga":
      return { video: "libx264", audio: "libvorbis" };
    case ".opus":
      return { video: "libx264", audio: "libopus" };
    case ".aac":
      return { video: "libx264", audio: "aac" };
    case ".m4a":
      return { video: "libx264", audio: isAlac ? "alac" : "aac" };
    case ".alac":
      return { video: "libx264", audio: "alac" };
    case ".wma":
      return { video: "libx264", audio: "wmav2" };
    default:
      return { video: "libx264", audio: "aac" };
  }
};
const CONVERSION_BITRATES = ["auto", 320, 256, 192, 128, 96, 64, 32];
const SAMPLE_RATES = [
  "auto",
  "custom",
  "48000",
  "44100",
  "32000",
  "22050",
  "16000",
  "11025",
  "8000"
];
const PandocWorker = "/_app/immutable/workers/pandoc-DHBkG5Ww.js";
class PandocConverter extends Converter {
  name = "pandoc";
  ready = false;
  wasm = null;
  activeConversions = /* @__PURE__ */ new Map();
  constructor() {
    super();
    return;
  }
  async convert(file, to) {
    const worker = new Worker(PandocWorker, { type: "module" });
    this.activeConversions.set(file.id, worker);
    const loadMsg = { type: "load", wasm: this.wasm, id: file.id };
    worker.postMessage(loadMsg);
    await waitForMessage(worker, "loaded");
    const convertMsg = {
      type: "convert",
      to,
      input: { file: file.file, name: file.name, from: file.from, to },
      compression: null,
      id: file.id
    };
    worker.postMessage(convertMsg);
    const result = await waitForMessage(worker);
    if (result.type === "error") {
      worker.terminate();
      const error2 = result.error.toString();
      switch (result.errorKind) {
        case "PandocUnknownReaderError": {
          throw new Error(`${file.from} is not a supported input format for documents.`);
        }
        case "PandocUnknownWriterError": {
          throw new Error(`${to} is not a supported output format for documents.`);
        }
        case "PandocParseError": {
          if (error2.includes("JSON missing pandoc-api-version")) {
            throw new Error(`This JSON file is not a pandoc-converted JSON file. It must be converted with pandoc / FileTools to be converted again.`);
          }
        }
        default:
          if (result.errorKind) throw new Error(`[${result.errorKind}] ${result.error}`);
          else throw new Error(result.error);
      }
    }
    if (!to.startsWith(".")) to = `.${to}`;
    this.activeConversions.delete(file.id);
    worker.terminate();
    return new VertFile(new File([result.output], file.name), result.isZip ? ".zip" : to);
  }
  async cancel(input) {
    const worker = this.activeConversions.get(input.id);
    if (!worker) {
      error(["converters", this.name], `no active conversion found for file ${input.name}`);
      return;
    }
    log(["converters", this.name], `cancelling conversion for file ${input.name}`);
    worker.terminate();
    this.activeConversions.delete(input.id);
  }
  supportedFormats = [
    new FormatInfo("docx", true, true),
    new FormatInfo("doc", true, true),
    new FormatInfo("md", true, true),
    new FormatInfo("html", true, true),
    new FormatInfo("rtf", true, true),
    new FormatInfo("csv", true, true),
    new FormatInfo("tsv", true, true),
    new FormatInfo("json", true, true),
    // must be a pandoc-converted json
    new FormatInfo("rst", true, true),
    new FormatInfo("epub", true, true),
    new FormatInfo("odt", true, true),
    new FormatInfo("docbook", true, true)
    // PDF output is handled through special logic in convert() method
    // PDF input is handled by PdfReaderConverter
  ];
}
function waitForMessage(worker, type) {
  return new Promise((resolve) => {
    const onMessage = (e) => {
      if (type && e.data.type === type) {
        worker.removeEventListener("message", onMessage);
        resolve(e.data);
      } else {
        worker.removeEventListener("message", onMessage);
        resolve(e.data);
      }
    };
    worker.addEventListener("message", onMessage);
  });
}
function FileToolsDError($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...toast } = $$props;
    let submitting = false;
    const title = "An error occurred";
    $$renderer2.push(`<div class="flex flex-col gap-4"><p class="text-black">${escape_html(/* @__PURE__ */ convert_errors_filetoolsd_generic_body())}</p> <div class="flex flex-col gap-2"><button class="btn rounded-lg h-fit py-2 w-full bg-accent-blue text-black"${attr("disabled", submitting, true)}>${escape_html(/* @__PURE__ */ convert_errors_filetoolsd_generic_view())}</button> <div class="flex gap-4"><button class="btn rounded-lg h-fit py-2 w-full bg-accent-red-alt text-white"${attr("disabled", submitting, true)}>${escape_html(/* @__PURE__ */ convert_errors_filetoolsd_generic_yes())}</button> <button class="btn rounded-lg h-fit py-2 w-full"${attr("disabled", submitting, true)}>${escape_html(/* @__PURE__ */ convert_errors_filetoolsd_generic_no())}</button></div></div></div>`);
    bind_props($$props, { title });
  });
}
const vertdFetch = async (url, options, body) => {
  const domain = await FileToolsDInstance.instance.url();
  const res = await fetch(domain + url, options);
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(text);
  }
  if (json.type === "error") {
    throw new Error(json.data);
  }
  return json.data;
};
const progressEstimates = { upload: 25, convert: 50, download: 25 };
const progressEstimate = (progress, type) => {
  const previousValues = Object.values(progressEstimates).filter((_, i) => i < Object.keys(progressEstimates).indexOf(type)).reduce((a, b) => a + b, 0);
  return progress * progressEstimates[type] + previousValues;
};
const uploadFile = async (file) => {
  const apiUrl = await FileToolsDInstance.instance.url();
  const formData = new FormData();
  formData.append("file", file.file, file.name);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${apiUrl}/api/upload`, true);
  return new Promise((resolve, reject) => {
    xhr.upload.addEventListener("progress", (e) => {
      console.log(e);
      if (e.lengthComputable) {
        file.progress = progressEstimate(e.loaded / e.total, "upload");
      }
    });
    console.log("meow");
    xhr.onload = () => {
      try {
        console.log("xhr.responseText");
        const res = JSON.parse(xhr.responseText);
        if (res.type === "error") {
          reject(res.data);
          return;
        }
        resolve(res.data);
      } catch {
        console.log(xhr.responseText);
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => {
      console.log(xhr.statusText);
      reject(xhr.statusText);
    };
    xhr.send(formData);
    console.log("sent!");
  });
};
const downloadFile = async (url, file) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  return new Promise((resolve, reject) => {
    xhr.addEventListener("progress", (e) => {
      if (e.lengthComputable) {
        file.progress = progressEstimate(e.loaded / e.total, "download");
      }
    });
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => {
      reject(xhr.statusText);
    };
    xhr.send();
  });
};
class FileToolsDConverter extends Converter {
  name = "filetoolsd";
  ready = false;
  reportsProgress = true;
  activeConversions = /* @__PURE__ */ new Map();
  supportedFormats = [
    new FormatInfo("mkv", true, true),
    new FormatInfo("mp4", true, true),
    new FormatInfo("webm", true, true),
    new FormatInfo("avi", true, true),
    new FormatInfo("wmv", true, true),
    new FormatInfo("mov", true, true),
    new FormatInfo("gif", true, true),
    new FormatInfo("mts", true, true),
    new FormatInfo("ts", true, true),
    new FormatInfo("m2ts", true, true),
    new FormatInfo("mpg", true, true),
    new FormatInfo("mpeg", true, true),
    new FormatInfo("flv", true, true),
    new FormatInfo("f4v", true, true),
    new FormatInfo("vob", true, true),
    new FormatInfo("m4v", true, true),
    new FormatInfo("3gp", true, true),
    new FormatInfo("3g2", true, true),
    new FormatInfo("mxf", true, true),
    new FormatInfo("ogv", true, true),
    new FormatInfo("rm", true, false),
    new FormatInfo("rmvb", true, false),
    new FormatInfo("h264", true, true),
    new FormatInfo("divx", true, true),
    new FormatInfo("swf", true, true),
    new FormatInfo("amv", true, true),
    new FormatInfo("asf", true, true),
    new FormatInfo("nut", true, true)
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log = () => {
  };
  constructor() {
    super();
    this.log = (msg) => log(["converters", this.name], msg);
    this.log("created converter");
    this.log("not rly sure how to implement this :P");
    this.status = "ready";
  }
  blocked(hash) {
    const blockedHashes = Settings.instance.settings.filetoolsdBlockedHashes;
    const now = /* @__PURE__ */ new Date();
    const dates = blockedHashes.get(hash) || [];
    const filteredDates = dates.filter((date) => now.getTime() - date.getTime() < 60 * 60 * 1e3);
    if (filteredDates.length === 0) {
      blockedHashes.delete(hash);
      return false;
    }
    blockedHashes.set(hash, filteredDates);
    Settings.instance.save();
    return filteredDates.length >= 3;
  }
  failure(hash) {
    const blockedHashes = Settings.instance.settings.filetoolsdBlockedHashes;
    const now = /* @__PURE__ */ new Date();
    const dates = blockedHashes.get(hash) || [];
    dates.push(now);
    blockedHashes.set(hash, dates);
    Settings.instance.save();
  }
  async convert(input, to) {
    if (to.startsWith(".")) to = to.slice(1);
    const hash = await input.hash();
    if (this.blocked(hash)) {
      this.log(`conversion blocked for file ${input.name}`);
      throw new Error(/* @__PURE__ */ convert_errors_filetoolsd_ratelimit({ filename: input.name }));
    }
    const uploadRes = await uploadFile(input);
    const apiUrl = await FileToolsDInstance.instance.url();
    return new Promise((resolve, reject) => {
      const protocol = apiUrl.startsWith("https") ? "wss:" : "ws:";
      const ws = new WebSocket(`${protocol}//${apiUrl.replace("http://", "").replace("https://", "")}/api/ws`);
      this.activeConversions.set(input.id, { ws, jobId: uploadRes.id, token: uploadRes.auth });
      ws.onopen = () => {
        const speed = Settings.instance.settings.filetoolsdSpeed;
        const keepMetadata = Settings.instance.settings.metadata;
        this.log("opened ws connection to vertd");
        const msg = {
          type: "startJob",
          data: {
            jobId: uploadRes.id,
            token: uploadRes.auth,
            to,
            speed,
            keepMetadata
          }
        };
        ws.send(JSON.stringify(msg));
        this.log("sent startJob message");
      };
      ws.onmessage = async (e) => {
        const msg = JSON.parse(e.data);
        this.log(`received message ${msg.type}`);
        switch (msg.type) {
          case "progressUpdate": {
            const data = msg.data;
            if (data.type !== "frame") break;
            const frame = data.data;
            input.progress = progressEstimate(frame / uploadRes.totalFrames, "convert");
            break;
          }
          case "jobFinished": {
            this.log("job finished");
            ws.close();
            this.activeConversions.delete(input.id);
            const url = `${apiUrl}/api/download/${msg.data.jobId}/${uploadRes.auth}`;
            this.log(`downloading from ${url}`);
            const res = await downloadFile(url, input);
            resolve(new VertFile(new File([res], input.name), to));
            break;
          }
          case "jobCancelled": {
            this.log("job cancelled");
            ws.close();
            this.activeConversions.delete(input.id);
            reject("Conversion cancelled");
            break;
          }
          case "error": {
            this.log(`error: ${msg.data.message}`);
            this.activeConversions.delete(input.id);
            this.failure(hash);
            reject({
              component: FileToolsDError,
              additional: {
                jobId: uploadRes.id,
                auth: uploadRes.auth,
                from: input.from,
                to,
                errorMessage: msg.data.message
              }
            });
          }
        }
      };
    });
  }
  async cancel(input) {
    const activeConversion = this.activeConversions.get(input.id);
    if (!activeConversion) {
      error(["converters", this.name], `no active conversion found for file ${input.name}`);
      return;
    }
    log(["converters", this.name], `cancelling conversion for file ${input.name}`);
    const { ws, jobId, token } = activeConversion;
    if (ws.readyState === WebSocket.OPEN) {
      const cancelMsg = { type: "cancelJob", data: { jobId, token } };
      ws.send(JSON.stringify(cancelMsg));
      this.log("sent cancelJob message");
    }
    ws.close();
    this.activeConversions.delete(input.id);
  }
  async valid() {
    if (!await FileToolsDInstance.instance.url()) {
      return false;
    }
    try {
      await vertdFetch("/api/version", { method: "GET" });
      return true;
    } catch (e) {
      this.log(e);
      return false;
    }
  }
}
const MagickWorker = "/_app/immutable/workers/magick-q8SOG_Gc.js";
const imageFormats = [
  new FormatInfo("a", false, true),
  new FormatInfo("aai", true, true),
  new FormatInfo("ai", false, true),
  new FormatInfo("art", false, true),
  new FormatInfo("avs", true, true),
  new FormatInfo("b", false, true),
  new FormatInfo("bgr", false, true),
  new FormatInfo("bgra", false, true),
  new FormatInfo("bgro", false, true),
  new FormatInfo("bmp2", true, true),
  new FormatInfo("bmp3", true, true),
  new FormatInfo("brf", false, true),
  new FormatInfo("cal", false, true),
  new FormatInfo("cals", false, true),
  new FormatInfo("cin", true, true),
  // not ideal (made the image more "shadowy"?)
  new FormatInfo("cip", false, true),
  new FormatInfo("cmyk", false, true),
  new FormatInfo("cmyka", false, true),
  new FormatInfo("dcx", true, true),
  new FormatInfo("dds", true, true),
  new FormatInfo("dpx", true, true),
  new FormatInfo("dxt1", true, true),
  new FormatInfo("dxt5", true, true),
  new FormatInfo("epdf", false, true),
  new FormatInfo("epi", false, true),
  new FormatInfo("eps2", false, true),
  new FormatInfo("eps3", false, true),
  new FormatInfo("epsf", false, true),
  new FormatInfo("epsi", false, true),
  new FormatInfo("ept", false, true),
  new FormatInfo("ept2", false, true),
  new FormatInfo("ept3", false, true),
  new FormatInfo("exr", true, true),
  new FormatInfo("farbfeld", true, true),
  new FormatInfo("fax", true, true),
  // not ideal (image became super long for some reason)
  new FormatInfo("ff", true, true),
  new FormatInfo("fit", true, true),
  // not ideal (grayscale)
  new FormatInfo("fits", true, true),
  // not ideal (grayscale)
  new FormatInfo("fl32", true, true),
  new FormatInfo("fts", true, true),
  // not ideal (grayscale)
  new FormatInfo("ftxt", false, true),
  new FormatInfo("g", false, true),
  new FormatInfo("g3", true, true),
  // not ideal (image became super long for some reason)
  new FormatInfo("g4", false, true),
  new FormatInfo("gif87", true, true),
  new FormatInfo("gray", false, true),
  new FormatInfo("graya", false, true),
  new FormatInfo("group4", false, true),
  new FormatInfo("hrz", true, true),
  new FormatInfo("icb", true, true),
  new FormatInfo("icon", true, true),
  new FormatInfo("info", false, true),
  new FormatInfo("ipl", true, true),
  new FormatInfo("isobrl", false, true),
  new FormatInfo("isobrl6", false, true),
  new FormatInfo("j2c", true, true),
  new FormatInfo("j2k", true, true),
  new FormatInfo("jng", true, true),
  new FormatInfo("jp2", true, true),
  new FormatInfo("jpc", true, true),
  new FormatInfo("jpm", true, true),
  new FormatInfo("jps", true, true),
  //new FormatInfo("json", false, true),
  new FormatInfo("map", false, true),
  new FormatInfo("miff", true, true),
  new FormatInfo("mng", true, true),
  new FormatInfo("mono", false, true),
  new FormatInfo("mtv", true, true),
  new FormatInfo("o", false, true),
  new FormatInfo("otb", true, true),
  // not ideal (completely black and white - maybe format is like that)
  new FormatInfo("pal", false, true),
  new FormatInfo("palm", true, true),
  // not ideal (screwed up colours)
  new FormatInfo("pam", true, true),
  new FormatInfo("pcd", true, true),
  // not ideal (turned big, bg orange, and colour just shifted? - maybe format)
  new FormatInfo("pcds", true, true),
  // not ideal (turned big, bg orange, and colour just shifted? - maybe format)
  new FormatInfo("pcl", false, true),
  new FormatInfo("pct", true, true),
  new FormatInfo("pcx", true, true),
  new FormatInfo("pdb", true, true),
  // not ideal (completely black and white - maybe format is like that)
  // new FormatInfo("pdf", false, true),
  // new FormatInfo("pdfa", false, true),
  new FormatInfo("pgx", true, true),
  // not ideal (grayscale - maybe format is like that)
  new FormatInfo("phm", true, true),
  new FormatInfo("picon", true, true),
  // not ideal (smudged out colours - format probably)
  new FormatInfo("pict", true, true),
  new FormatInfo("pjpeg", true, true),
  new FormatInfo("png00", true, true),
  new FormatInfo("png24", true, true),
  new FormatInfo("png32", true, true),
  new FormatInfo("png48", true, true),
  new FormatInfo("png64", true, true),
  new FormatInfo("png8", true, true),
  new FormatInfo("ps", false, true),
  new FormatInfo("ps1", false, true),
  new FormatInfo("ps2", false, true),
  new FormatInfo("ps3", false, true),
  new FormatInfo("psb", true, true),
  new FormatInfo("ptif", true, true),
  new FormatInfo("qoi", true, true),
  new FormatInfo("r", false, true),
  new FormatInfo("ras", true, true),
  new FormatInfo("rgb", false, true),
  new FormatInfo("rgba", false, true),
  new FormatInfo("rgbo", false, true),
  new FormatInfo("rgf", true, true),
  // not ideal (completely black and white - maybe format is like that)
  new FormatInfo("sgi", true, true),
  new FormatInfo("six", true, true),
  new FormatInfo("sixel", true, true),
  new FormatInfo("sparse-color", false, true),
  new FormatInfo("strimg", false, true),
  new FormatInfo("sun", true, true),
  new FormatInfo("svgz", false, true),
  new FormatInfo("tga", true, true),
  new FormatInfo("tiff64", true, true),
  //new FormatInfo("txt", true, true),
  new FormatInfo("ubrl", false, true),
  new FormatInfo("ubrl6", false, true),
  new FormatInfo("uil", false, true),
  new FormatInfo("uyvy", false, true),
  new FormatInfo("vda", true, true),
  new FormatInfo("vicar", true, true),
  // not ideal (grayscale - maybe format is like that)
  new FormatInfo("viff", true, true),
  new FormatInfo("vips", true, true),
  new FormatInfo("vst", true, true),
  new FormatInfo("wbmp", true, true),
  // not ideal (completely black and white - maybe format is like that)
  new FormatInfo("wpg", true, true),
  new FormatInfo("xbm", true, true),
  // not ideal (completely black and white - maybe format is like that)
  new FormatInfo("xpm", true, true),
  new FormatInfo("xv", true, true),
  //new FormatInfo("yaml", false, true),
  new FormatInfo("ycbcr", false, true),
  new FormatInfo("ycbcra", false, true),
  new FormatInfo("yuv", false, true)
];
const magickWasm = "/_app/immutable/assets/magick.DgWW1YxY.wasm";
class MagickConverter extends Converter {
  name = "imagemagick";
  ready = false;
  wasm = null;
  activeConversions = /* @__PURE__ */ new Map();
  supportedFormats = [
    // manually tested formats
    new FormatInfo("png", true, true),
    new FormatInfo("jpeg", true, true),
    new FormatInfo("jpg", true, true),
    new FormatInfo("webp", true, true),
    new FormatInfo("gif", true, true),
    new FormatInfo("svg", true, true),
    new FormatInfo("jxl", true, true),
    new FormatInfo("avif", true, true),
    new FormatInfo("heic", true, false),
    // seems to be unreliable? HEIC/HEIF is very weird if it will actually work
    new FormatInfo("heif", true, false),
    // TODO: .ico files can encode multiple images at various
    // sizes, bitdepths, etc. we should support that in future
    new FormatInfo("ico", true, true),
    new FormatInfo("bmp", true, true),
    new FormatInfo("cur", true, true),
    new FormatInfo("ani", true, false),
    new FormatInfo("icns", true, false),
    new FormatInfo("nef", true, false),
    new FormatInfo("cr2", true, false),
    new FormatInfo("hdr", true, true),
    new FormatInfo("jpe", true, true),
    new FormatInfo("mat", true, true),
    new FormatInfo("pbm", true, true),
    new FormatInfo("pfm", true, true),
    new FormatInfo("pgm", true, true),
    new FormatInfo("pnm", true, true),
    new FormatInfo("ppm", true, true),
    new FormatInfo("tiff", true, true),
    new FormatInfo("jfif", true, true),
    new FormatInfo("eps", false, true),
    new FormatInfo("psd", true, true),
    // raw camera formats
    new FormatInfo("arw", true, false),
    new FormatInfo("tif", true, true),
    new FormatInfo("dng", true, false),
    new FormatInfo("xcf", true, false),
    new FormatInfo("rw2", true, false),
    new FormatInfo("raf", true, false),
    new FormatInfo("orf", true, false),
    new FormatInfo("pef", true, false),
    new FormatInfo("mos", true, false),
    new FormatInfo("raw", true, false),
    new FormatInfo("dcr", true, false),
    new FormatInfo("crw", true, false),
    new FormatInfo("cr3", true, false),
    new FormatInfo("3fr", true, false),
    new FormatInfo("erf", true, false),
    new FormatInfo("mrw", true, false),
    new FormatInfo("mef", true, false),
    new FormatInfo("nrw", true, false),
    new FormatInfo("srw", true, false),
    new FormatInfo("sr2", true, false),
    new FormatInfo("srf", true, false),
    // formats added from maya's somewhat automated testing
    ...imageFormats
  ];
  reportsProgress = false;
  constructor() {
    super();
    log(["converters", this.name], `created converter`);
    return;
  }
  async initializeWasm() {
    try {
      this.status = "downloading";
      const response = await fetch(magickWasm);
      if (!response.ok) {
        throw new Error(`Failed to fetch WASM: ${response.status} ${response.statusText}`);
      }
      this.wasm = await response.arrayBuffer();
      this.status = "ready";
    } catch (err) {
      this.status = "error";
      error(["converters", this.name], `Failed to load ImageMagick WASM: ${err}`);
      ToastManager.add({ type: "error", message: /* @__PURE__ */ workers_errors_magick() });
    }
  }
  async convert(input, to, ...args) {
    let compression = args.at(0);
    if (!compression) {
      compression = Settings.instance.settings.magickQuality ?? 100;
      log(["converters", this.name], `using user setting for quality: ${compression}%`);
    }
    log(["converters", this.name], `converting ${input.name} to ${to}`);
    if (input.from === ".svg") {
      try {
        const blob = await this.svgToImage(input);
        const pngFile = new VertFile(new File([blob], input.name.replace(/\.svg$/i, ".png")), input.to);
        if (to === ".png") return pngFile;
        return await this.convert(pngFile, to, ...args);
      } catch (err) {
        error(["converters", this.name], `SVG conversion failed: ${err}`);
        throw err;
      }
    }
    const worker = new Worker(MagickWorker, { type: "module" });
    this.activeConversions.set(input.id, worker);
    try {
      await Promise.race([
        this.waitForMessage(worker, "ready"),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Magick worker ready timeout after 10 seconds")), 1e4))
      ]);
      const loadMsg = { type: "load", wasm: this.wasm, id: input.id };
      worker.postMessage(loadMsg);
      await Promise.race([
        this.waitForMessage(worker, "loaded"),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Magick worker initialization timeout after 30 seconds")), 3e4))
      ]);
      const keepMetadata = Settings.instance.settings.metadata ?? true;
      log(["converters", this.name], `keep metadata: ${keepMetadata}`);
      const convertMsg = {
        type: "convert",
        id: input.id,
        input: {
          file: input.file,
          name: input.name,
          from: input.from,
          to: input.to
        },
        to,
        compression,
        keepMetadata
      };
      worker.postMessage(convertMsg);
      const res = await this.waitForMessage(worker);
      if (res.type === "finished") {
        log(["converters", this.name], `converted ${input.name} to ${to}`);
        return new VertFile(new File([res.output], input.name), res.zip ? ".zip" : to);
      }
      if (res.type === "error") {
        throw new Error(res.error);
      }
      throw new Error("Unknown message type");
    } finally {
      this.activeConversions.delete(input.id);
      worker.terminate();
    }
  }
  async cancel(input) {
    const worker = this.activeConversions.get(input.id);
    if (!worker) {
      error(["converters", this.name], `no active conversion found for file ${input.name}`);
      return;
    }
    log(["converters", this.name], `cancelling conversion for file ${input.name}`);
    worker.terminate();
    this.activeConversions.delete(input.id);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  waitForMessage(worker, type) {
    return new Promise((resolve, reject) => {
      const onMessage = (e) => {
        if (type && e.data.type === type) {
          worker.removeEventListener("message", onMessage);
          worker.removeEventListener("error", onError);
          resolve(e.data);
        } else if (!type) {
          worker.removeEventListener("message", onMessage);
          worker.removeEventListener("error", onError);
          resolve(e.data);
        } else if (e.data.type === "error") {
          worker.removeEventListener("message", onMessage);
          worker.removeEventListener("error", onError);
          reject(new Error(e.data.error));
        }
      };
      const onError = (e) => {
        worker.removeEventListener("message", onMessage);
        worker.removeEventListener("error", onError);
        reject(new Error(`Worker error: ${e.message}`));
      };
      worker.addEventListener("message", onMessage);
      worker.addEventListener("error", onError);
    });
  }
  async svgToImage(input) {
    log(["converters", this.name], `converting SVG to image (PNG)`);
    const svgText = await input.file.text();
    const svgBlob = new Blob([svgText], { type: "image/svg+xml" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Failed to get canvas context");
    const img = new Image();
    let width = 512;
    let height = 512;
    const widthMatch = svgText.match(/width=["'](\d+)["']/);
    const heightMatch = svgText.match(/height=["'](\d+)["']/);
    const viewBoxMatch = svgText.match(/viewBox=["'][^"']*\s+(\d+)\s+(\d+)["']/);
    if (widthMatch && heightMatch) {
      width = parseInt(widthMatch[1]);
      height = parseInt(heightMatch[1]);
    } else if (viewBoxMatch) {
      width = parseInt(viewBoxMatch[1]);
      height = parseInt(viewBoxMatch[2]);
    }
    return new Promise((resolve, reject) => {
      img.onload = () => {
        try {
          canvas.width = img.naturalWidth || width;
          canvas.height = img.naturalHeight || height;
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            (blob) => {
              URL.revokeObjectURL(svgUrl);
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error("Failed to convert canvas to Blob"));
              }
            },
            "image/png"
          );
        } catch (err) {
          URL.revokeObjectURL(svgUrl);
          reject(err);
        }
      };
      img.onerror = () => {
        URL.revokeObjectURL(svgUrl);
        reject(new Error("Failed to load SVG image"));
      };
      img.src = svgUrl;
    });
  }
}
const getConverters = () => {
  const converters2 = [
    new MagickConverter(),
    new FFmpegConverter()
  ];
  {
    converters2.push(new FileToolsDConverter());
  }
  converters2.push(new PandocConverter());
  return converters2;
};
const converters = getConverters();
const categories = {
  image: { formats: [""], canConvertTo: [] },
  video: { formats: [""], canConvertTo: ["audio"] },
  audio: { formats: [""], canConvertTo: ["video"] },
  doc: { formats: [""], canConvertTo: [] }
};
categories.audio.formats = converters.find((c) => c.name === "ffmpeg")?.supportedFormats.filter((f) => f.toSupported && f.isNative).map((f) => f.name) || [];
categories.video.formats = converters.find((c) => c.name === "filetoolsd")?.supportedFormats.filter((f) => f.toSupported && f.isNative).map((f) => f.name) || [];
categories.image.formats = converters.find((c) => c.name === "imagemagick")?.formatStrings((f) => f.toSupported) || [];
categories.doc.formats = converters.find((c) => c.name === "pandoc")?.supportedFormats.filter((f) => f.toSupported && f.isNative).map((f) => f.name) || [];
const byNative = (format) => {
  return (a, b) => {
    const aFormat = a.supportedFormats.find((f) => f.name === format);
    const bFormat = b.supportedFormats.find((f) => f.name === format);
    if (aFormat && bFormat) {
      return aFormat.isNative ? -1 : 1;
    }
    return 0;
  };
};
class Files {
  files = [];
  #requiredConverters = derived(() => Array.from(new Set(files.files.map((f) => f.converters).flat())));
  get requiredConverters() {
    return this.#requiredConverters();
  }
  set requiredConverters($$value) {
    return this.#requiredConverters($$value);
  }
  #ready = derived(() => this.files.length === 0 ? false : this.requiredConverters.every((f) => f?.status === "ready") && this.files.every((f) => !f.processing));
  get ready() {
    return this.#ready();
  }
  set ready($$value) {
    return this.#ready($$value);
  }
  #results = derived(() => this.files.length === 0 ? false : this.files.every((f) => f.result));
  get results() {
    return this.#results();
  }
  set results($$value) {
    return this.#results($$value);
  }
  thumbnailQueue = new PQueue({
    concurrency: 4
  });
  _addThumbnail = async (file) => {
    this.thumbnailQueue.add(async () => {
      const isAudio = converters.find((c) => c.name === "ffmpeg")?.supportedFormats.filter((f) => f.isNative).map((f) => f.name)?.includes(file.from.toLowerCase());
      const isVideo = converters.find((c) => c.name === "filetoolsd")?.supportedFormats.filter((f) => f.isNative).map((f) => f.name)?.includes(file.from.toLowerCase());
      try {
        if (isAudio) {
          const { common } = await parseBlob(file.file, { skipPostHeaders: true });
          const cover = selectCover(common.picture);
          if (cover) {
            const arrayBuffer = cover.data.buffer instanceof ArrayBuffer ? cover.data.buffer : new Uint8Array(cover.data).buffer;
            const blob = new Blob([new Uint8Array(arrayBuffer)], { type: cover.format });
            file.blobUrl = URL.createObjectURL(blob);
          }
        } else if (isVideo) {
          file.blobUrl = await this._generateThumbnailFromMedia(file.file, true);
        } else {
          file.blobUrl = await this._generateThumbnailFromMedia(file.file, false);
        }
      } catch (e) {
        error(["files"], e);
      }
    });
  };
  async _generateThumbnailFromMedia(file, isVideo) {
    const maxSize = 180;
    const mediaElement = isVideo ? document.createElement("video") : new Image();
    mediaElement.src = URL.createObjectURL(file);
    await new Promise((resolve, reject) => {
      if (isVideo) {
        const video = mediaElement;
        video.onloadeddata = () => {
          const seekTime = Math.min(video.duration * 0.1, 2);
          video.currentTime = seekTime;
        };
        video.onseeked = resolve;
        video.onerror = reject;
      } else {
        mediaElement.onload = resolve;
        mediaElement.onerror = reject;
      }
    });
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return void 0;
    const width = isVideo ? mediaElement.videoWidth : mediaElement.width;
    const height = isVideo ? mediaElement.videoHeight : mediaElement.height;
    const scale = Math.max(maxSize / width, maxSize / height);
    canvas.width = width * scale;
    canvas.height = height * scale;
    ctx.drawImage(mediaElement, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const isTransparent = Array.from(imageData.data).every((value, index) => {
      return (index + 1) % 4 !== 0 || value === 0;
    });
    if (isTransparent) {
      canvas.remove();
      return void 0;
    }
    const url = canvas.toDataURL();
    canvas.remove();
    return url;
  }
  async _handleZipFile(file) {
    try {
      log(["files"], `extracting zip file: ${file.name}`);
      ToastManager.add({
        type: "info",
        message: /* @__PURE__ */ convert_archive_file_extracting({ filename: file.name })
      });
      const { extractZip } = await import("./zip.js");
      const entries = await extractZip(file);
      const totalEntries = entries.length;
      log(["files"], `extracted ${totalEntries} files from zip`);
      const convertersUsed = /* @__PURE__ */ new Set();
      let incompatibleFiles = false;
      for (const { filename } of entries) {
        const format = "." + filename.split(".").pop()?.toLowerCase();
        if (!format || format === ".zip") {
          incompatibleFiles = true;
          continue;
        }
        const converter = converters.sort(byNative(format)).find((c) => c.formatStrings().includes(format));
        if (converter) convertersUsed.add(converter.name);
        else incompatibleFiles = true;
      }
      const converterCount = convertersUsed.size;
      const canConvertAsOne = converterCount === 1 && !incompatibleFiles;
      log(["files"], `extracted ${entries.length} files from zip (converters: ${converterCount}, compatible: ${canConvertAsOne})`);
      if (canConvertAsOne) {
        const vf = new VertFile(file, ".zip");
        vf.converters = converters.filter((c) => c.name === Array.from(convertersUsed)[0]);
        const converterName = vf.converters[0].name;
        const type = converterName === "imagemagick" ? "image" : converterName === "ffmpeg" ? "audio" : converterName === "pandoc" ? "doc" : "video";
        this.files.push(vf);
        this._addThumbnail(vf);
        ToastManager.add({
          type: "success",
          message: /* @__PURE__ */ convert_archive_file_detected({
            type: m[`convert.archive_file.${type}`](),
            filename: file.name
          })
        });
      } else {
        for (const { filename, data } of entries) {
          this._add(new File([new Uint8Array(data)], filename, { type: "application/octet-stream" }));
        }
        ToastManager.add({
          type: "success",
          message: /* @__PURE__ */ convert_archive_file_extracted({
            filename: file.name,
            extract_count: entries.length,
            ignore_count: 0
          })
        });
      }
    } catch (e) {
      error(["files"], `error processing zip file: ${e}`);
      throw e;
    }
  }
  _warningShown = false;
  async _add(file) {
    if (file instanceof VertFile) {
      this.files.push(file);
      this._addThumbnail(file);
    } else {
      const isZip = file.name.toLowerCase().endsWith(".zip") || file.type === "application/zip" || file.type === "application/x-zip-compressed";
      if (isZip) {
        try {
          await this._handleZipFile(file);
          return;
        } catch (err) {
          error(["files"], `error extracting zip file: ${err}`);
          ToastManager.add({
            type: "error",
            message: /* @__PURE__ */ convert_archive_file_extract_error({ filename: file.name, error: String(err) })
          });
          return;
        }
      }
      const format = "." + file.name.split(".").pop()?.toLowerCase();
      if (!format) {
        log(["files"], `no extension found for ${file.name}`);
        return;
      }
      const converter = converters.sort(byNative(format)).find((converter2) => converter2.formatStrings().includes(format));
      if (!converter) {
        log(["files"], `no converter found for ${file.name}`);
        this.files.push(new VertFile(file, format));
        return;
      }
      const to = converter.formatStrings().find((f) => f !== format);
      if (!to) {
        log(["files"], `no output format found for ${file.name}`);
        return;
      }
      const vf = new VertFile(file, to);
      this.files.push(vf);
      this._addThumbnail(vf);
      const convName = converter.name;
      if (file.size > MAX_ARRAY_BUFFER_SIZE && convName === "filetoolsd") {
        ToastManager.add({
          type: "warning",
          message: /* @__PURE__ */ convert_large_file_warning({ limit: (MAX_ARRAY_BUFFER_SIZE / GB).toFixed(2) }),
          durations: { stay: 1e4 }
        });
      }
      const isVideo = convName === "filetoolsd";
      const acceptedExternalWarning = localStorage.getItem("acceptedExternalWarning") === "true";
      if (isVideo && !acceptedExternalWarning && !this._warningShown) {
        this._warningShown = true;
        const title = /* @__PURE__ */ convert_external_warning_title();
        const message = /* @__PURE__ */ convert_external_warning_text();
        const buttons = [
          {
            text: /* @__PURE__ */ convert_external_warning_no(),
            action: () => {
              this.files = [
                ...this.files.filter((f) => !f.converters.map((c) => c.name).includes("filetoolsd"))
              ];
              this._warningShown = false;
            }
          },
          {
            text: /* @__PURE__ */ convert_external_warning_yes(),
            action: () => {
              localStorage.setItem("acceptedExternalWarning", "true");
              this._warningShown = false;
            }
          }
        ];
        addDialog(title, message, buttons, "warning");
      }
    }
  }
  add(file) {
    if (!file) return;
    if (Array.isArray(file) || file instanceof FileList) {
      for (const f of file) {
        this._add(f);
      }
    } else {
      this._add(file);
    }
  }
  async convertAll() {
    const promiseFns = this.files.map((f) => () => f.convert());
    const coreCount = navigator.hardwareConcurrency || 4;
    const queue = new PQueue({ concurrency: coreCount });
    await Promise.all(promiseFns.map((fn) => queue.add(fn)));
  }
  async downloadAll() {
    if (files.files.length === 0) return;
    const dlFiles = [];
    for (let i = 0; i < files.files.length; i++) {
      const file = files.files[i];
      const result = file.result;
      if (!result) {
        error(["files"], "No result found");
        continue;
      }
      let to = result.to;
      if (!to.startsWith(".")) to = `.${to}`;
      dlFiles.push({
        name: file.file.name.replace(/\.[^/.]+$/, "") + to,
        lastModified: Date.now(),
        input: await result.file.arrayBuffer()
      });
    }
    const { downloadZip } = await import("client-zip");
    const blob = await downloadZip(dlFiles, "converted.zip").blob();
    const url = URL.createObjectURL(blob);
    const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
    const filenameFormat = settings.filenameFormat || "FileTools_%name%";
    const format = (name) => {
      const date = /* @__PURE__ */ (/* @__PURE__ */ new Date()).toISOString();
      return name.replace(/%date%/g, date).replace(/%name%/g, "Multi").replace(/%extension%/g, "");
    };
    const a = document.createElement("a");
    a.href = url;
    a.download = `${format(filenameFormat)}.zip`;
    a.click();
    URL.revokeObjectURL(url);
    a.remove();
  }
}
const files = new Files();
const gradientColor = writable("");
const dropping = writable(false);
const filetoolsdLoaded = writable(false);
const isMobile = writable(false);
const effects = writable(true);
const locale = writable(getLocale());
const availableLocales = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  hr: "Hrvatski",
  id: "Bahasa Indonesia",
  tr: "Türkçe",
  ja: "日本語",
  ko: "한국어",
  el: "Ελληνικά",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文"
};
function updateLocale(newLocale) {
  if (!Object.keys(availableLocales).includes(newLocale)) newLocale = "en";
  log(["locale"], `set to ${newLocale}`);
  localStorage.setItem("locale", newLocale);
  setLocale(newLocale, { reload: false });
  locale.set(newLocale);
}
function link(tag, text, links, newTab, className) {
  if (!text) return "";
  const tags = Array.isArray(tag) ? tag : [tag];
  const linksArr = Array.isArray(links) ? links : [links];
  const newTabArr = Array.isArray(newTab) ? newTab : [newTab];
  const classArr = Array.isArray(className) ? className : [className];
  let result = text;
  tags.forEach((t, i) => {
    const link2 = linksArr[i] ?? "#";
    const target = newTabArr[i] ? 'target="_blank" rel="noopener noreferrer"' : "";
    const cls = classArr[i] ? `class="${classArr[i]}"` : "";
    const regex = new RegExp(`\\[${t}\\](.*?)\\[\\/${t}\\]`, "g");
    result = result.replace(regex, (_, inner) => `<a href="${link2}" ${target} ${cls} >${inner}</a>`);
  });
  return result;
}
function sanitize(html, allowedTags = ["a", "b", "code", "br"]) {
  return sanitizeHtml(html, {
    allowedTags,
    allowedAttributes: { a: ["href", "target", "rel", "class"], "*": ["class"] },
    allowedSchemes: ["http", "https", "mailto", "blob"]
  });
}
function findFirstPositive(f, b = 1n, d = (e, g, c) => g < e ? -1n : 0 < f(c = e + g >> 1n) ? c == e || 0 >= f(c - 1n) ? c : d(e, c - 1n) : d(c + 1n, g)) {
  for (; 0 >= f(b); b <<= 1n) ;
  return d(b >> 1n, b) - 1n;
}
const getMaxArrayBufferSize = () => {
  if (typeof window === "undefined") return 2 * GB;
  const cached = localStorage.getItem("maxArrayBufferSize");
  if (cached) {
    const parsed = Number(cached);
    log(["converters"], `using cached max ArrayBuffer size: ${parsed} bytes`);
    if (!isNaN(parsed) && parsed > 0) return parsed;
  }
  const maxSize = findFirstPositive((x) => {
    try {
      new ArrayBuffer(Number(x));
      return 0;
    } catch {
      return 1;
    }
  });
  const result = Number(maxSize);
  localStorage.setItem("maxArrayBufferSize", result.toString());
  log(["converters"], `detected max ArrayBuffer size: ${result} bytes`);
  return result;
};
const MAX_ARRAY_BUFFER_SIZE = getMaxArrayBufferSize();
export {
  about_why_description as $,
  about_credits_notable_contributors as A,
  about_credits_notable_description as B,
  about_credits_github_contributors as C,
  DISCORD_URL as D,
  sanitize as E,
  FILETOOLS_NAME as F,
  GITHUB_URL_FILETOOLS as G,
  link as H,
  Icon as I,
  about_credits_libraries as J,
  about_credits_libraries_description as K,
  about_credits_github_description as L,
  about_credits_no_contributors as M,
  about_donate_title as N,
  about_donate_description as O,
  about_donate_one_time as P,
  about_donate_monthly as Q,
  about_donate_custom as R,
  about_donate_pay_now as S,
  ToastManager as T,
  about_donate_donation_notice_unofficial as U,
  about_resources_title as V,
  about_resources_discord as W,
  about_resources_source as X,
  about_resources_email as Y,
  CONTACT_EMAIL as Z,
  about_why_title as _,
  dialogs as a,
  settings_appearance_brightness_description as a$,
  about_sponsors_title as a0,
  about_sponsors_description as a1,
  about_title as a2,
  about_credits_roles_lead_developer as a3,
  about_credits_roles_developer as a4,
  about_credits_roles_designer as a5,
  about_credits_roles_docker_ci as a6,
  about_credits_roles_former_cofounder as a7,
  convert_panel_convert_all as a8,
  convert_panel_download_all as a9,
  upload_uploader_text as aA,
  upload_uploader_convert as aB,
  privacy_title as aC,
  privacy_summary_title as aD,
  privacy_conversions_title as aE,
  privacy_donations_title as aF,
  privacy_conversion_errors_title as aG,
  privacy_conversion_errors_description as aH,
  privacy_conversion_errors_list_job_id as aI,
  privacy_conversion_errors_list_format_from as aJ,
  privacy_conversion_errors_list_format_to as aK,
  privacy_conversion_errors_list_stderr as aL,
  privacy_conversion_errors_list_video as aM,
  privacy_conversion_errors_footer as aN,
  privacy_analytics_title as aO,
  privacy_local_storage_title as aP,
  privacy_contact_title as aQ,
  privacy_last_updated as aR,
  privacy_summary_description as aS,
  privacy_conversions_description as aT,
  privacy_donations_description as aU,
  privacy_analytics_description as aV,
  privacy_local_storage_description as aW,
  privacy_contact_description as aX,
  availableLocales as aY,
  settings_appearance_title as aZ,
  settings_appearance_brightness_theme as a_,
  isMobile as aa,
  convert_panel_remove_all as ab,
  convert_panel_set_all_to as ac,
  categories as ad,
  convert_panel_na as ae,
  convert_errors_cant_convert as af,
  convert_errors_filetoolsd_server as ag,
  convert_errors_unsupported_format as ah,
  convert_errors_format_output_only as ai,
  workers_errors_file_too_large as aj,
  MAX_ARRAY_BUFFER_SIZE as ak,
  GB as al,
  convert_errors_worker_downloading as am,
  convert_errors_worker_error as an,
  convert_errors_worker_timeout as ao,
  convert_errors_filetoolsd_not_found as ap,
  convert_tooltips_unknown_file as aq,
  convert_tooltips_audio_file as ar,
  convert_tooltips_video_file as as,
  convert_tooltips_document_file as at,
  convert_tooltips_image_file as au,
  convert_errors_audio as av,
  convert_errors_doc as aw,
  convert_errors_image as ax,
  convert_tooltips_convert_file as ay,
  convert_tooltips_download_file as az,
  footer_copyright as b,
  settings_privacy_clear_cache as b$,
  settings_appearance_light as b0,
  settings_appearance_dark as b1,
  settings_appearance_effect_settings as b2,
  settings_appearance_effect_description as b3,
  settings_appearance_enable as b4,
  settings_appearance_disable as b5,
  settings_language_title as b6,
  settings_language_description as b7,
  updateLocale as b8,
  settings_conversion_title as b9,
  GITHUB_URL_FILETOOLSD as bA,
  settings_filetoolsd_hosting_info as bB,
  settings_filetoolsd_instance as bC,
  settings_filetoolsd_auto_instance as bD,
  settings_filetoolsd_eu_instance as bE,
  settings_filetoolsd_us_instance as bF,
  settings_filetoolsd_custom_instance as bG,
  FileToolsDInstance as bH,
  settings_filetoolsd_url_placeholder as bI,
  settings_filetoolsd_conversion_speed as bJ,
  settings_filetoolsd_speed_description as bK,
  settings_filetoolsd_speeds_very_slow as bL,
  settings_filetoolsd_speeds_slower as bM,
  settings_filetoolsd_speeds_slow as bN,
  settings_filetoolsd_speeds_medium as bO,
  settings_filetoolsd_speeds_fast as bP,
  settings_filetoolsd_speeds_ultra_fast as bQ,
  settings_privacy_title as bR,
  settings_privacy_plausible_title as bS,
  settings_privacy_plausible_description as bT,
  settings_privacy_opt_in as bU,
  settings_privacy_opt_out as bV,
  settings_privacy_cache_title as bW,
  settings_privacy_cache_description as bX,
  settings_privacy_total_size as bY,
  settings_privacy_files_cached_label as bZ,
  settings_privacy_refresh_cache as b_,
  settings_conversion_filename_format as ba,
  settings_conversion_filename_description as bb,
  settings_conversion_advanced_settings as bc,
  settings_conversion_default_format as bd,
  settings_conversion_default_format_description as be,
  settings_conversion_default_format_enable as bf,
  settings_conversion_default_format_disable as bg,
  settings_conversion_default_format_image as bh,
  settings_conversion_default_format_audio as bi,
  settings_conversion_default_format_video as bj,
  settings_conversion_default_format_document as bk,
  settings_conversion_metadata as bl,
  settings_conversion_metadata_description as bm,
  settings_conversion_keep as bn,
  settings_conversion_remove as bo,
  settings_conversion_quality as bp,
  settings_conversion_quality_description as bq,
  settings_conversion_quality_images as br,
  settings_conversion_quality_audio as bs,
  CONVERSION_BITRATES as bt,
  settings_conversion_rate as bu,
  SAMPLE_RATES as bv,
  settings_filetoolsd_title as bw,
  settings_filetoolsd_status as bx,
  settings_filetoolsd_unavailable as by,
  settings_filetoolsd_description as bz,
  footer_source_code as c,
  settings_privacy_site_data_title as c0,
  settings_privacy_site_data_description as c1,
  settings_privacy_clear_all_data as c2,
  Settings as c3,
  settings_title as c4,
  log as c5,
  error as c6,
  dropping as d,
  effects as e,
  files as f,
  gradientColor as g,
  footer_discord_server as h,
  footer_privacy_policy as i,
  navbar_convert as j,
  navbar_settings as k,
  navbar_about as l,
  browser as m,
  navbar_upload as n,
  navbar_toggle_theme as o,
  converters as p,
  upload_cards_documents as q,
  upload_cards_audio as r,
  upload_cards_images as s,
  upload_title as t,
  upload_cards_video as u,
  upload_subtitle as v,
  upload_cards_title as w,
  filetoolsdLoaded as x,
  about_credits_title as y,
  about_credits_contact_team as z
};
