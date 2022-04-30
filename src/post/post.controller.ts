import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';

import { PostService } from './post.service';
import { AuthGuard } from '../commen/guard/auth.guard';

@Controller('post')
@UseGuards(AuthGuard)
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async findAll() {
    return await this.postService.findAll();
  }

  @Post()
  async createOne(@Body() data) {
    const { message } = data;
    const res = await this.postService.createOne(message);
    return {
      message: '创建成功',
      res,
    };
  }

  @Delete(':id')
  async deleteOne(@Param('id') id) {
    const res = await this.postService.deleteOne(id);
    if (res.affected === 0) {
      return {
        message: 'message 不存在',
      };
    } else {
      return {
        message: '删除成功',
      };
    }
  }
}
