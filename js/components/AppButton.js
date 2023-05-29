export default {
  template: `<button :class="{
    'border rounded px-5 py-2 disabled:cursor-not-allowed':true,
    'bg-blue-200 hover:bg-blue-400':type==='primary',
    'bg-green-200 hover:bg-green-400':type==='secondary',
    'bg-red-200 hover:bg-red-400':type==='muted',
  }">
  <slot></slot>
</button>`,
  props: {
    type: String,
  },
  data() {
    return {
      complete: true,
    };
  },
};
