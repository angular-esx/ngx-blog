export class baseEnvt {
  constructor() {
    this.minify = false;
    this.distPath = './dist';
    this.jsPath = 'blog/js';
    this.cssPath = 'blog/css';
    this.imgPath = 'blog/resources/images';
    this.iconFontPath = 'blog/resources/icons/fonts';
    this.articlePath = 'blog/articles';
    this.blogPath = 'blog';
    this.cmsArticlePath = 'cms/articles';
  }

  getJsDest(path) {
    return this.getDest(this.jsPath, path);
  }

  getCssDest(path) {
    return this.getDest(this.cssPath, path);
  }

  getImgDest(path) {
    return this.getDest(this.imgPath, path);
  }

  getIconFontDest(path) {
    return this.getDest(this.iconFontPath, path);
  }

  getArticleDest(path) {
    return this.getDest(this.articlePath, path);
  }

  getBlogDest(path) {
    return this.getDest(this.blogPath, path);
  }

  getCmsArticleDest(path) {
    return this.getCmsDest(this.cmsArticlePath, path);
  }

  getDest(...args) {
    let _path = '';
    args.forEach(arg => { 
      if(arg){ _path += `/${arg}`; }
    });

    return `${this.distPath}${_path}`;
  }

  getCmsDest(...args) {
    let _path = '';
    args.forEach(arg => { 
      if(arg){ _path += `/${arg}`; }
    });

    return _path ? `.${_path}` : '';
  }
}