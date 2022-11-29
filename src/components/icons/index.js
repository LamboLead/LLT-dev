import FileInfo from './FileInfo.vue';
import FileLike from "./FileLike.vue";
import FileBrowse from "./FileBrowse.vue";
import FileRequest from "./FileRequest.vue";
import DownArrow from "./DownArrow.vue"
import Close from "./Close.vue";
import PdfIcon from './Pdf.vue';

const registerIcons = (app) => {
  app.component('FileInfo', FileInfo)
  .component('FileLike', FileLike)
  .component('FileBrowse', FileBrowse)
  .component('DownArrow', DownArrow)
  .component('Close', Close)
  .component('FileRequest', FileRequest)
  .component('PdfIcon', PdfIcon);
}

export default registerIcons;