export abstract class BaseApi {
  protected abstract readonly path: string;

  protected getUrl(endpoint: string): string {
    return `${this.path}${endpoint}`;
  }
}
