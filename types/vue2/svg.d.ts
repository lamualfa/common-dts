declare module "*.svg" {
  import Vue, { VueConstructor } from "vue2";
  const content: VueConstructor<Vue>;
  export default content;
}
