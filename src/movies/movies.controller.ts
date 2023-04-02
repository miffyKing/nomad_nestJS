import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') year: string)
  {
    return `we are searching a movie with a year: ${year}`;
  }
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData.name);
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete a movie with the id : ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }

}

///...의 뜻은?
/// return 에 저렇게 담으면 그냥 json 형식으로 리턴되는 것인가?
/// patch 메서드의 리턴 타입은 그럼 무엇인가?
