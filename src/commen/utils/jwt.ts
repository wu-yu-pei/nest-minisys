import * as fs from 'fs';
import * as path from 'path';
import * as jwt from 'jsonwebtoken';

const PRIVATEKEY = fs.readFileSync(path.resolve(__dirname, '../config/key/private.key'));
const PUBLICKEY = fs.readFileSync(path.resolve(__dirname, '../config/key/public.key'));

class Jwt {
  sign(data) {
    return jwt.sign(data, PRIVATEKEY, { expiresIn: 60 * 60 * 24, algorithm: 'RS256' });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verify(token, ctx = null) {
    let date;
    jwt.verify(token, PUBLICKEY, function (err, result) {
      if (err) {
        console.log('Unexpected token', '|====================================================|');
      } else {
        date = result;
      }
    });
    return date;
  }
}

export default new Jwt();
