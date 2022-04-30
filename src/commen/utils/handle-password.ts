// md5导入方式
import md5 = require('md5');

class HandlePassword {
  encryption(date) {
    if (!date) return;
    return md5(date);
  }
}

export default new HandlePassword();
