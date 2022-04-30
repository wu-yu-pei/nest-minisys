import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private postRepository: Repository<Post>) {}
  async findAll() {
    return await this.postRepository.find();
  }

  async createOne(message) {
    return await this.postRepository.save({
      message,
    });
  }

  async deleteOne(id) {
    return await this.postRepository.delete(id);
  }
}
