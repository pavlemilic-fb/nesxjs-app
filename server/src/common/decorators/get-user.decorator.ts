import { ExecutionContext, createParamDecorator } from '@nestjs/common';
// import { JwtPayloadWithRt } from '../../auth/types';

const GetUser = createParamDecorator(
  (data: string | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!data) {
      return request.user;
    }
    return request.user[data];
  },
);

export default GetUser;
