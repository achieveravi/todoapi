import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Redirect,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { GoogleOAuthGurad } from './auth/google-oauth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('docs')
  @Redirect('http://google.com')
  getDocs() {
    return { url: 'http://google.com/maps' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }

  // @Get('google')
  // @UseGuards(GoogleOAuthGurad)
  // async auth() {}

  // @Get('google/callback')
  // @UseGuards(GoogleOAuthGurad)
  // async googleAuthCallback(@Req() req, @Res() res: Response) {
  //   const token = await this.authService.signIn(req.user);

  //   res.cookie('access_token', token, {
  //     maxAge: 2592000000,
  //     sameSite: true,
  //     secure: false,
  //   });

  //   return res.status(HttpStatus.OK);
  // }
}
