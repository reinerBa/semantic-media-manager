import fs from 'fs-extra'

class FilePack {
  constructor (path, fileName) {
    this.path = path
    this.fileName = fileName
    this.isDir = false
    this.format = ''
    this.isImage = true
    this.isVideo = false
  }
  async parseFile () {
    let stats = await fs.stat(this.path)
    this.isDir = stats.isDirectory()
    let parts = this.path.split('.')
    this.format = parts[parts.length - 1]
    let imgRegex = /png|jpg|bmp/gi
    this.isImage = imgRegex.test(this.format)
    let vidRegex = /mp4|avi|flv/gi
    this.isVideo = vidRegex.test(this.format)
  }
}

export default FilePack
