<template>
  <div>
    <div @dragover.prevent="(event) => handleDragOver(event)" @drop.prevent="(event) => handleDrop(event)" class="dropzone">
      Перетащите файлы сюда
    </div>
    <input type="file" multiple ref="fileInput" @change="(event) => handleFiles(event)" />
    <button v-if="uploadMode === 'single'" @click="() => uploadFiles()">Загрузить (Одиночный)</button>
    <button v-else @click="() => uploadFiles()">Загрузить (Все сразу)</button>
    <button @click="() => toggleUploadMode()">Переключить режим ({{ uploadMode }})</button>
    <button @click="() => toggleAutoUpload()">Автоматическая загрузка ({{ autoUploadEnabled ? 'Включено' : 'Выключено' }})</button>
    <div v-for="(file, index) in files" :key="index" class="file-item">
      <span class="file-name">{{ file.name }}</span> -
      <span :class="['file-status', file.status]">{{ getStatus(file) }}</span>
    </div>
    <div>Всего файлов: {{ files.length }}</div>
    <div>Загружено файлов: {{ uploadedFilesCount }}</div>
    <div v-if="currentUploadingFiles.length > 0">
      Текущие загружаемые файлы:
      <ul>
        <li v-for="file in currentUploadingFiles" :key="file.name">{{ file.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
      uploadModes: ['single', 'batch'],
      currentUploadModeIndex: 0,
      currentUploadingFile: null,
      autoUploadEnabled: false,
      currentUploadingFiles: [],
    };
  },
  computed: {
    uploadMode() {
      return this.uploadModes[this.currentUploadModeIndex];
    },
    uploadedFilesCount() {
      return this.files.filter(file => file.status === 'done').length;
    },
  },
  methods: {
    handleFiles(event) {
      const selectedFiles = event.target.files;
      this.addFiles(selectedFiles);
      if (this.autoUploadEnabled) {
        if (this.uploadMode === 'single') {
          this.autoUploadSingle();
        } else {
          this.uploadAllFiles();
        }
      }
    },
    handleDragOver(event) {
      event.preventDefault();
    },
    handleDrop(event) {
      const selectedFiles = event.dataTransfer.files;
      this.addFiles(selectedFiles);
      if (this.autoUploadEnabled) {
        if (this.uploadMode === 'single') {
          this.autoUploadSingle();
        } else {
          this.uploadAllFiles();
        }
      }
    },
    addFiles(selectedFiles) {
      for (let file of selectedFiles) {
        this.files.push({
          data: file,
          name: file.name,
          status: "waiting",
        });
      }
    },
    uploadFiles() {
      if (this.uploadMode === 'single') {
        this.uploadNextFile();
      } else {
        this.uploadAllFiles();
      }
    },
    uploadNextFile() {
      const nextFile = this.files.find(file => file.status === 'waiting');
      if (nextFile) {
        this.uploadFile(nextFile);
      }
    },
    uploadFile(file) {
      if (!this.currentUploadingFiles.some(f => f.name === file.name)) {
        this.currentUploadingFiles.push(file);
      }

      file.status = "uploading";
      setTimeout(() => {
        file.status = "done";
        this.currentUploadingFiles = this.currentUploadingFiles.filter(f => f.name !== file.name);
        this.uploadNextFile();
        this.$refs.fileInput.value = '';
      }, 3000);
    },
    uploadAllFiles() {
      this.currentUploadingFiles = [];
      this.files.forEach(file => {
        if (file.status === 'waiting') {
          this.currentUploadingFiles.push(file);
          this.uploadFile(file);
        }
      });
    },
    getStatus(file) {
      return file.status === 'done' ? 'Загружен' : 'Готов к загрузке';
    },
    toggleUploadMode() {
      this.currentUploadModeIndex = (this.currentUploadModeIndex + 1) % this.uploadModes.length;
    },
    toggleAutoUpload() {
      this.autoUploadEnabled = !this.autoUploadEnabled;
    },
    autoUploadSingle() {
      const nextFile = this.files.find(file => file.status === 'waiting');
      if (nextFile) {
        this.uploadFile(nextFile);
      }
    },
  },
};
</script>

<style scoped lang="less">
.dropzone {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.file {
  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    margin-bottom: 5px;
  }

  &-name {
    flex-grow: 1;
  }

  &-status {
    margin-left: 10px;
    padding: 2px 5px;
    border-radius: 4px;

    &.waiting {
      background-color: #ffecb3;
    }

    &.uploading {
      background-color: #ffcc80;
    }

    &.done {
      background-color: #c8e6c9;
    }
  }
}
</style>
