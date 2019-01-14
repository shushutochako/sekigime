export default class Config {
  get URL_BASE(): string {
    console.log(process.env.VUE_APP_URL_BASE);
    return process.env.VUE_APP_URL_BASE;
  }
  get API_URL_BASE(): string {
    console.log(process.env.VUE_APP_API_URL_BASE);
    return process.env.VUE_APP_API_URL_BASE;
  }
}
