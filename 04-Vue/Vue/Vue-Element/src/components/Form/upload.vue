<template>
  <div class="comp-content">
      <h2>Upload 上传</h2>

      <h3>点击上传</h3><br>
      <div class="gray-border-box">
        <el-upload class="upload-demo" @submit.native.prevent action="" multiple :limit="20" :file-list="fileList" :header="elUploadHeaders" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :before-upload="beforeFilesUpload" :on-exceed="handleExced" :on-change="handleChange">
          <el-button size="small" type="primary">点击上传</el-button>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png图片，且不超过500kb</div>
        </el-upload>
      </div>

      <h3>用户头像上传</h3><br>
      <div class="gray-border-box">
        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list='false' :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img :img="imageUrl" v-if="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
  </div>
</template>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  line-height: 178px;
  height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<script>
export default {
  data () {
    return {
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],
      imageUrl: '',
      elUploadHeaders: {
        'Content-Type':
          'multipart/form-data; boundary=----WebKitFormBoundaryjjqEOjKgMKpSUGtT'
      },
      elUploadData: null
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExced (files, fileList) {
      this.$message.warning(
        `当前限制三个文件，本次选择了${
          files.length
        }个文件，共选择了${files.length + fileList.length}`
      )
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除${file.name}?`)
    },
    beforeFilesUpload (file) {
      var __this = this
      this.$axios({
        method: 'post',
        url: 'http://mobile.router/wxml/sd_upload_state.xml',
        responseType: 'xml',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: 'count=1'
      })
        .then((res) => {
          var fileID =
            res.request.responseXML.childNodes[0].childNodes[2].textContent
          var form = new FormData()
          form.append('path', 'sd/2018.04/')
          form.append('upload_file_id', fileID)
          form.append('files', file)
          __this.elUploadData = form
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleChange (file) {
      let xhr = new XMLHttpRequest()
      xhr.open(
        'post',
        'http://mobile.router:61726/upload?' + Math.random(),
        true
      )
      xhr.send(this.elUploadData)
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) this.$message.error('上传头像图片只能是JPG格式!')
      if (!isLt2M) this.$message.error('上传头像图片大小不能超过2MB!')

      return isJPG && isLt2M
    }
  }
}
</script>
