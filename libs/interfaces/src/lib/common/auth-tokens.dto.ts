export interface AuthTokensDto {
  user: {
    id: string;
    email: string;
    username: string;
  };

  backendTokens: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  };
}
